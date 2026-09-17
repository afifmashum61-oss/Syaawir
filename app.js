// App Core Logic for Media Pembelajaran Interaktif Bahasa Arab Kelas X - MAN 1 Pontianak

// --- STATE MANAGEMENT ---
const state = {
  currentTab: 'home',

  // AUTHENTICATION & USER SESSION
  auth: {
    isLoggedIn: false,
    role: null, // 'siswa' | 'guru' | 'guest'
    userName: '',
    userClass: '',
    guruPin: 'guru123'
  },
  authTab: 'siswa', // 'siswa' or 'guru'
  
  // GURU DASHBOARD FILTERS
  guruFilterClass: 'all',
  guruFilterBab: 'all',
  guruSearchName: '',

  // STUDENT SCORES DATABASE (LOADED FROM LOCALSTORAGE)
  studentScores: [],
  
  // Mufrodat Filters
  mufrodatTopic: 'all',
  mufrodatType: 'all',
  mufrodatSearch: '',

  // Maharah Kalam
  currentDialogIndex: 0,
  activeRole: null, // 'speaker1' or 'speaker2' or null
  isListeningMic: false,

  // Maharah Qiraah
  currentQiraahIndex: 0,
  qiraahShowHarakat: true,
  qiraahShowTranslation: false,

  // Maharah Istima'
  istimaPassageIndex: 0,
  istimaHideText: false,

  // Qawaid
  qawaidBab: 1, // 1 = Bab 1, 2 = Bab 2, 3 = Bab 3

  // Tadribat (Quizizz / Kahoot Gamified Quiz)
  tadribatBab: 1, // 1 = Bab 1, 2 = Bab 2
  tadribatVersion: 1, // 1 = Versi 1 (Mufradat), 2 = Versi 2 (Qawaid)
  quizCurrentIndex: 0,
  quizAnswers: [],
  quizScore: 0,
  quizPoints: 0,
  quizStreak: 0,
  quizMaxStreak: 0,
  quizIsFinished: false
};

// --- AUDIO SYNTHESIZER (Web Audio API) ---
class SoundFx {
  static playClick() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch(e) {}
  }

  static playCorrect() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    } catch(e) {}
  }

  static playWrong() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.setValueAtTime(130, now + 0.1);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch(e) {}
  }
}

// --- TEXT TO SPEECH (Web Speech API) ---
function speakArabic(text, btnElement = null) {
  if (!('speechSynthesis' in window)) {
    alert("Browser Anda tidak mendukung fitur pemutaran audio otomatis. Gunakan Chrome/Edge.");
    return;
  }

  window.speechSynthesis.cancel(); // Stop any ongoing speech

  // Cleanup harakat/parens and newlines
  const cleanText = text.replace(/[\(\)]/g, '').replace(/[\r\n]+/g, ' ').trim();
  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ar-SA';
  utterance.rate = 0.85; // Slower rate for clear learning

  const voices = window.speechSynthesis.getVoices();
  const arVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('ar'));
  if (arVoice) {
    utterance.voice = arVoice;
  }

  if (btnElement) {
    btnElement.classList.add('animate-pulse', 'ring-2', 'ring-purple-400');
    utterance.onend = () => {
      btnElement.classList.remove('animate-pulse', 'ring-2', 'ring-purple-400');
    };
    utterance.onerror = () => {
      btnElement.classList.remove('animate-pulse', 'ring-2', 'ring-purple-400');
    };
  }

  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  window.speechSynthesis.speak(utterance);
}

function speakIstimaPassage(btnElement = null) {
  const pIdx = state.istimaPassageIndex || 0;
  const passage = ARABIC_DATA.istima[pIdx];
  if (passage && passage.arabicText) {
    speakArabic(passage.arabicText, btnElement);
  }
}

function speakIstimaBlank(bIdx, btnElement = null) {
  const pIdx = state.istimaPassageIndex || 0;
  const item = ARABIC_DATA.istima[pIdx] && ARABIC_DATA.istima[pIdx].fillBlanks && ARABIC_DATA.istima[pIdx].fillBlanks[bIdx];
  if (item && item.textToSpeech) {
    speakArabic(item.textToSpeech, btnElement);
  }
}

function speakQiraahText(btnElement = null) {
  const qIdx = state.currentQiraahIndex || 0;
  const qiraah = ARABIC_DATA.qiraah[qIdx];
  if (qiraah && qiraah.arabicText) {
    speakArabic(qiraah.arabicText, btnElement);
  }
}

function togglePauseAudio(btnElement = null) {
  if (!('speechSynthesis' in window)) return;

  const synth = window.speechSynthesis;
  
  if (!synth.speaking) {
    speakIstimaPassage(btnElement);
    return;
  }

  if (synth.paused) {
    synth.resume();
    SoundFx.playClick();
    const btnPause = document.getElementById('btn-istima-pause');
    if (btnPause) {
      btnPause.innerHTML = `<span>⏸️ Jeda</span>`;
      btnPause.className = 'px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2';
    }
  } else {
    synth.pause();
    SoundFx.playClick();
    const btnPause = document.getElementById('btn-istima-pause');
    if (btnPause) {
      btnPause.innerHTML = `<span>▶️ Lanjutkan</span>`;
      btnPause.className = 'px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2';
    }
  }
}

function stopAudio() {
  if (!('speechSynthesis' in window)) return;
  SoundFx.playClick();
  window.speechSynthesis.cancel();

  const btnPause = document.getElementById('btn-istima-pause');
  if (btnPause) {
    btnPause.innerHTML = `<span>⏸️ Jeda</span>`;
    btnPause.className = 'px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2';
  }
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

// --- FIREBASE REALTIME CLOUD DATABASE SETUP ---
const firebaseConfig = {
  apiKey: "AIzaSyAVWMWq27oh6fgKGhzpOWS7XY28vzqP6WQ",
  authDomain: "db-man-1-pontianak-x.firebaseapp.com",
  projectId: "db-man-1-pontianak-x",
  storageBucket: "db-man-1-pontianak-x.firebasestorage.app",
  messagingSenderId: "210970490880",
  appId: "1:210970490880:web:496fba068c56b296d740e5"
};

let db = null;

function initFirebase() {
  if (typeof firebase !== 'undefined') {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      db = firebase.firestore();
      
      try {
        db.enablePersistence({ synchronizeTabs: true });
      } catch(e) {}

      subscribeRealtimeScores();
    } catch(err) {
      console.warn("Firebase initialization notice:", err);
    }
  } else {
    // Retry initialization if Firebase script is loading asynchronously on mobile networks
    setTimeout(initFirebase, 500);
  }
}

function subscribeRealtimeScores() {
  if (!db) return;
  try {
    db.collection("student_scores")
      .onSnapshot((snapshot) => {
        const cloudScores = [];
        snapshot.forEach((doc) => {
          cloudScores.push(Object.assign({ id: doc.id }, doc.data()));
        });
        cloudScores.sort((a, b) => (b.timestamp || b.id || '').localeCompare(a.timestamp || a.id || ''));
        state.studentScores = cloudScores;
        try {
          localStorage.setItem('arabic_app_scores', JSON.stringify(cloudScores));
        } catch(e) {}

        // Instant Live UI Update on Teacher Dashboard
        if (state.currentTab === 'guru-dashboard') {
          renderTabContent();
        }
      }, (err) => {
        console.warn("Realtime cloud score sync notice:", err);
      });
  } catch(e) {}
}

function saveScoreToCloud(scoreRecord) {
  state.studentScores.unshift(scoreRecord);
  try {
    localStorage.setItem('arabic_app_scores', JSON.stringify(state.studentScores));
  } catch(e) {}

  if (db) {
    try {
      db.collection("student_scores").doc(scoreRecord.id).set(Object.assign({}, scoreRecord, {
        timestamp: new Date().toISOString()
      })).then(() => {
        console.log("Score successfully synced to Cloud Firestore across all devices!");
      }).catch((err) => {
        console.warn("Error saving to Cloud:", err);
      });
    } catch(e) {}
  }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initFirebase();
  initNavigation();
  renderTabContent();
});

function initAuth() {
  try {
    const savedAuth = localStorage.getItem('arabic_app_auth');
    if (savedAuth) {
      const parsed = JSON.parse(savedAuth);
      if (parsed && parsed.isLoggedIn) {
        state.auth = Object.assign(state.auth, parsed);
      } else {
        state.auth.isLoggedIn = false;
      }
    }
    const savedScores = localStorage.getItem('arabic_app_scores');
    if (savedScores) {
      state.studentScores = JSON.parse(savedScores);
    } else {
      state.studentScores = Array.from(ARABIC_DATA.initialScores || []);
      localStorage.setItem('arabic_app_scores', JSON.stringify(state.studentScores));
    }
  } catch(e) {
    state.studentScores = Array.from(ARABIC_DATA.initialScores || []);
  }

  // If not logged in, set active tab to login
  if (!state.auth.isLoggedIn) {
    state.currentTab = 'login';
  }

  updateUserHeaderUI();
}

function updateUserHeaderUI() {
  const headerElement = document.getElementById('app-header');
  const badgeContainer = document.getElementById('user-header-badge');
  const btnGuru = document.getElementById('nav-btn-guru');

  if (state.auth.isLoggedIn) {
    if (headerElement) headerElement.classList.remove('hidden');

    if (state.auth.role === 'guru') {
      if (badgeContainer) {
        badgeContainer.innerHTML = `
          <div class="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-amber-900 shadow-sm">
            <span>👨‍🏫 Guru: <strong class="font-bold text-amber-950">${ARABIC_DATA.info.teacher}</strong></span>
            <button onclick="logoutUser()" class="ml-1 px-2 py-0.5 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-lg font-bold text-[10px] transition-colors" title="Keluar">
              Keluar
            </button>
          </div>
        `;
      }
      if (btnGuru) btnGuru.classList.remove('hidden');
    } else if (state.auth.role === 'siswa') {
      if (badgeContainer) {
        badgeContainer.innerHTML = `
          <div class="flex items-center gap-2 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-teal-900 shadow-sm">
            <span>👨‍🎓 <strong class="font-bold">${state.auth.userName}</strong> (${state.auth.userClass})</span>
            <button onclick="logoutUser()" class="ml-1 px-2 py-0.5 bg-teal-200 hover:bg-teal-300 text-teal-900 rounded-lg font-bold text-[10px] transition-colors" title="Keluar">
              Keluar
            </button>
          </div>
        `;
      }
      if (btnGuru) btnGuru.classList.add('hidden');
    }
  } else {
    // HIDE TOP HEADER BAR ON FULL-SCREEN LOGIN GATE SCREEN
    if (headerElement) headerElement.classList.add('hidden');
  }
}

function initNavigation() {
  const tabs = document.querySelectorAll('[data-tab]');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      SoundFx.playClick();
      const targetTab = tab.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  // STRICT LOGIN GUARD: Block navigation if not logged in
  if (!state.auth.isLoggedIn && tabId !== 'login') {
    state.currentTab = 'login';
    renderTabContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  state.currentTab = tabId;
  
  // Update Active UI Tab Button
  document.querySelectorAll('[data-tab]').forEach(tab => {
    if (tab.getAttribute('data-tab') === tabId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  renderTabContent();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTabContent() {
  const container = document.getElementById('main-container');
  if (!container) return;

  // STRICT MANDATORY AUTH GUARD
  if (!state.auth.isLoggedIn) {
    container.innerHTML = renderLoginHTML();
    return;
  }

  switch (state.currentTab) {
    case 'home':
      container.innerHTML = renderHomeHTML();
      break;
    case 'login':
      container.innerHTML = renderLoginHTML();
      break;
    case 'guru-dashboard':
      container.innerHTML = renderGuruDashboardHTML();
      attachGuruDashboardEvents();
      break;
    case 'mufrodat':
      container.innerHTML = renderMufrodatHTML();
      attachMufrodatEvents();
      break;
    case 'kalam':
      container.innerHTML = renderKalamHTML();
      attachKalamEvents();
      break;
    case 'qiraah':
      container.innerHTML = renderQiraahHTML();
      attachQiraahEvents();
      break;
    case 'istima':
      container.innerHTML = renderIstimaHTML();
      attachIstimaEvents();
      break;
    case 'qawaid':
      container.innerHTML = renderQawaidHTML();
      attachQawaidEvents();
      break;
    case 'tadribat':
      container.innerHTML = renderTadribatHTML();
      attachTadribatEvents();
      break;
    default:
      container.innerHTML = renderHomeHTML();
  }
}

// ==========================================
// 1. BERANDA / HERO HTML
// ==========================================
function renderHomeHTML() {
  return `
    <div class="space-y-8 animate-fadeIn">
      <!-- Hero Banner -->
      <div class="card-soft p-8 sm:p-12 bg-gradient-to-br from-[#2f6b78] to-[#1f4750] text-white relative overflow-hidden">
        
        <div class="relative z-10 max-w-3xl space-y-6">
          <!-- Badge Header -->
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide text-teal-100 border border-white/20">
            <img src="logo.webp" alt="Logo MAN 1 Pontianak" class="w-5 h-5 object-contain" />
            <span>${ARABIC_DATA.info.school}</span>
            <span class="text-teal-300">•</span>
            <span>Kelas X</span>
            <span class="text-teal-200 font-semibold">(العاشر)</span>
          </div>

          <!-- Main Title Block -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-snug">
              Media Pembelajaran Interaktif
            </h1>
            <div class="text-teal-200 font-arabic text-4xl sm:text-6xl font-normal pt-6 mt-6 leading-[2.2] tracking-wide">
              اللُّغَةُ العَرَبِيَّةُ
            </div>
          </div>

          <p class="text-teal-50/90 text-base sm:text-lg max-w-2xl leading-relaxed">
            Selamat datang di media pembelajaran Bahasa Arab Kelas X MAN 1 Pontianak. Kuasai kosakata, percakapan, membaca, menyimak, dan tata bahasa Arab melalui fitur interaktif modern!
          </p>

          <div class="pt-4 flex flex-wrap gap-4">
            <button onclick="switchTab('mufrodat')" class="px-6 py-3 bg-white text-[#2f6b78] hover:bg-teal-50 font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
              <span>🚀 Mulai Belajar Mufrodat</span>
            </button>
            <button onclick="switchTab('tadribat')" class="px-6 py-3 bg-teal-800/60 hover:bg-teal-800 text-white font-semibold rounded-xl border border-teal-400/30 transition-all flex items-center gap-2">
              <span>📝 Uji Kemampuan (Kuis)</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Feature Menu Grid (6 Cards) -->
      <div>
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span>📚 Menu Pembelajaran Interaktif</span>
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Mufrodat -->
          <div onclick="switchTab('mufrodat')" class="card-soft p-6 cursor-pointer group hover:border-teal-500 transition-all">
            <div class="w-14 h-14 rounded-2xl bg-teal-50 text-[#2f6b78] flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
              🔤
            </div>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-slate-800">Mufrodat</h3>
              <span class="font-arabic text-2xl text-teal-700">المفردات</span>
            </div>
            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
              Kartu kosakata (*flashcards*) interaktif dengan audio pelafalan fasih dan filter jenis kata (Isim, Fi'il, Harf).
            </p>
          </div>

          <!-- Kalam -->
          <div onclick="switchTab('kalam')" class="card-soft p-6 cursor-pointer group hover:border-teal-500 transition-all">
            <div class="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
              🗣️
            </div>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-slate-800">Maharah Kalam</h3>
              <span class="font-arabic text-2xl text-blue-700">مهارة الكلام</span>
            </div>
            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
              Simulasi percakapan interaktif 2 orang, pemutaran audio baris demi baris, dan tes latihan bicara via mikrofon.
            </p>
          </div>

          <!-- Qira'ah -->
          <div onclick="switchTab('qiraah')" class="card-soft p-6 cursor-pointer group hover:border-teal-500 transition-all">
            <div class="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
              📖
            </div>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-slate-800">Maharah Qira'ah</h3>
              <span class="font-arabic text-2xl text-emerald-700">مهارة القراءة</span>
            </div>
            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
              Teks bacaan naratif dengan sakelar (*toggle*) tampil/sembunyi harakat, terjemahan, dan soal pemahaman teks.
            </p>
          </div>

          <!-- Istima' -->
          <div onclick="switchTab('istima')" class="card-soft p-6 cursor-pointer group hover:border-teal-500 transition-all">
            <div class="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
              🎧
            </div>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-slate-800">Maharah Istima'</h3>
              <span class="font-arabic text-2xl text-purple-700">مهارة الاستماع</span>
            </div>
            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
              Latihan mendengarkan audio dikte kosakata dan melengkapi kalimat rumpang secara interaktif.
            </p>
          </div>

          <!-- Qawaid -->
          <div onclick="switchTab('qawaid')" class="card-soft p-6 cursor-pointer group hover:border-teal-500 transition-all">
            <div class="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
              📐
            </div>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-slate-800">Qawaid</h3>
              <span class="font-arabic text-2xl text-amber-700">القواعد</span>
            </div>
            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
              Tata bahasa Arab Kelas X: Pembagian kata (Isim/Fi'il/Harf), Dhomir, dan *color-coded sentence breakdown*.
            </p>
          </div>

          <!-- Tadribat -->
          <div onclick="switchTab('tadribat')" class="card-soft p-6 cursor-pointer group hover:border-teal-500 transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
              📝
            </div>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-slate-800">Tadribat (Kuis)</h3>
              <span class="font-arabic text-2xl text-rose-700">التدريبات</span>
            </div>
            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
              Latihan soal interaktif dengan timer, feedback instan, pembahasan, dan unduh sertifikat hasil belajar.
            </p>
          </div>

        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 2. MUFRODAT HTML & LOGIC
// ==========================================
function renderMufrodatHTML() {
  // Filter items
  let filtered = ARABIC_DATA.mufrodat.filter(item => {
    const matchTopic = state.mufrodatTopic === 'all' || item.topicId === state.mufrodatTopic;
    const matchType = state.mufrodatType === 'all' || item.type === state.mufrodatType;
    const matchSearch = state.mufrodatSearch === '' || 
      item.arabic.includes(state.mufrodatSearch) || 
      item.latin.toLowerCase().includes(state.mufrodatSearch.toLowerCase()) || 
      item.indonesian.toLowerCase().includes(state.mufrodatSearch.toLowerCase());
    return matchTopic && matchType && matchSearch;
  });

  return `
    <div class="space-y-6 animate-fadeIn">
      <!-- Title Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span>🔤 Mufrodat Interaktif</span>
            <span class="font-arabic text-3xl text-teal-700">المفردات</span>
          </h2>
          <p class="text-slate-600 text-sm mt-1">
            Klik pada kartu untuk membalik kata (Flip Card) dan dengarkan pelafalan fasihnya.
          </p>
        </div>
        <div class="text-right text-xs text-slate-500 font-semibold">
          Menampilkan <span class="text-teal-700 font-bold">${filtered.length}</span> kosakata
        </div>
      </div>

      <!-- Controls & Filters -->
      <div class="card-soft p-4 bg-white flex flex-wrap items-center justify-between gap-4">
        <!-- Topic Filter -->
        <div class="flex items-center gap-2">
          <label class="text-xs font-bold text-slate-600 uppercase tracking-wider">Tema:</label>
          <select id="mufrodat-topic-filter" class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="all" ${state.mufrodatTopic === 'all' ? 'selected' : ''}>Semua Tema Bab</option>
            ${ARABIC_DATA.topics.map(t => `<option value="${t.id}" ${state.mufrodatTopic === t.id ? 'selected' : ''}>${t.latin}</option>`).join('')}
          </select>
        </div>

        <!-- Type Filter -->
        <div class="flex items-center gap-2">
          <label class="text-xs font-bold text-slate-600 uppercase tracking-wider">Jenis:</label>
          <select id="mufrodat-type-filter" class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 font-arabic">
            <option value="all" ${state.mufrodatType === 'all' ? 'selected' : ''}>Semua Jenis</option>
            <option value="isim" ${state.mufrodatType === 'isim' ? 'selected' : ''}>الاسم</option>
            <option value="fiil" ${state.mufrodatType === 'fiil' ? 'selected' : ''}>الفعل</option>
            <option value="harf" ${state.mufrodatType === 'harf' ? 'selected' : ''}>الحرف</option>
          </select>
        </div>

        <!-- Search Input -->
        <div class="flex-1 min-w-[200px]">
          <input type="text" id="mufrodat-search" value="${state.mufrodatSearch}" placeholder="Cari kata Arab / Latin / Arti..." class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
        </div>
      </div>

      <!-- Flashcards Grid -->
      ${filtered.length === 0 ? `
        <div class="card-soft p-12 text-center text-slate-500">
          <p class="text-lg">Tidak ada kosakata yang cocok dengan pencarian.</p>
        </div>
      ` : `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filtered.map(item => renderFlashcardItem(item)).join('')}
        </div>
      `}
    </div>
  `;
}

function renderFlashcardItem(item) {
  const typeBadge = item.type === 'isim' ? 'bg-sky-100 text-sky-800' : (item.type === 'fiil' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800');
  const typeText = item.type === 'isim' ? 'الاسم' : (item.type === 'fiil' ? 'الفعل' : 'الحرف');

  return `
    <div class="perspective-1000 h-64 select-none cursor-pointer group" onclick="flipCard(${item.id})">
      <div id="card-inner-${item.id}" class="transform-style-3d relative w-full h-full card-soft shadow-sm hover:shadow-xl transition-all">
        
        <!-- CARD FRONT (HANYA BAHASA ARAB) -->
        <div class="backface-hidden absolute inset-0 p-6 flex flex-col justify-between items-center text-center bg-white rounded-2xl border border-slate-200 group-hover:border-teal-500">
          <div class="w-full flex justify-between items-center text-xs">
            <span class="px-3 py-1 rounded-full font-arabic font-bold text-sm ${typeBadge}">${typeText}</span>
            <button onclick="event.stopPropagation(); speakArabic('${item.arabic}', this)" class="p-2 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded-full transition-colors" title="Dengarkan Suara">
              🔊
            </button>
          </div>

          <div class="space-y-2 my-auto">
            <h3 class="font-arabic text-4xl sm:text-5xl text-slate-800 leading-[2.2] py-2">${item.arabic}</h3>
          </div>

          <div class="text-xs text-slate-400 font-semibold flex items-center gap-1">
            <span>🔄 Klik untuk melihat arti</span>
          </div>
        </div>

        <!-- CARD BACK (ARTI & LATIN) -->
        <div class="backface-hidden rotate-y-180 absolute inset-0 p-6 flex flex-col justify-between text-center bg-gradient-to-br from-teal-700 to-[#1f4750] text-white rounded-2xl shadow-lg">
          <div class="w-full flex justify-between items-center text-xs text-teal-200">
            <span class="font-semibold text-sm">${item.latin}</span>
            <button onclick="event.stopPropagation(); speakArabic('${item.example || item.arabic}', this)" class="p-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors" title="Dengarkan Kalimat">
              🔊
            </button>
          </div>

          <div class="space-y-3 my-auto">
            <h4 class="text-2xl font-bold text-teal-100">${item.indonesian}</h4>
            ${item.example ? `
              <div class="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/15 text-xs text-teal-50 space-y-1">
                <p class="font-arabic text-lg text-teal-200">${item.example}</p>
              </div>
            ` : ''}
          </div>

          <div class="text-xs text-teal-200/80 font-semibold">
            🔄 Klik untuk kembali
          </div>
        </div>

      </div>
    </div>
  `;
}

function flipCard(cardId) {
  const cardInner = document.getElementById(`card-inner-${cardId}`);
  if (cardInner) {
    cardInner.classList.toggle('rotate-y-180');
    try {
      setTimeout(() => SoundFx.playClick(), 10);
    } catch(e) {}
  }
}

function attachMufrodatEvents() {
  const topicSelect = document.getElementById('mufrodat-topic-filter');
  const typeSelect = document.getElementById('mufrodat-type-filter');
  const searchInput = document.getElementById('mufrodat-search');

  if (topicSelect) {
    topicSelect.addEventListener('change', (e) => {
      state.mufrodatTopic = e.target.value;
      renderTabContent();
    });
  }
  if (typeSelect) {
    typeSelect.addEventListener('change', (e) => {
      state.mufrodatType = e.target.value;
      renderTabContent();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.mufrodatSearch = e.target.value;
      renderTabContent();
    });
  }
}

// ==========================================
// 3. MAHARAH KALAM HTML & LOGIC
// ==========================================
function renderKalamHTML() {
  const currentDialog = ARABIC_DATA.kalam[state.currentDialogIndex];

  return `
    <div class="space-y-6 animate-fadeIn">
      <!-- Title Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span>🗣️ Maharah Kalam (Berbicara)</span>
            <span class="font-arabic text-3xl text-blue-700">مهارة الكلام</span>
          </h2>
          <p class="text-slate-600 text-sm mt-1">
            Simulasi percakapan interaktif 2 tokoh. Dengarkan pelafalan dan latih kemampuan bicara Anda.
          </p>
        </div>

        <!-- Dialogue Selector -->
        <select id="kalam-dialog-select" class="px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 shadow-sm focus:ring-2 focus:ring-blue-500">
          ${ARABIC_DATA.kalam.map((d, idx) => `
            <option value="${idx}" ${state.currentDialogIndex === idx ? 'selected' : ''}>${d.latinTitle}</option>
          `).join('')}
        </select>
      </div>

      <!-- Dialogue Card Container -->
      <div class="card-soft p-6 sm:p-8 space-y-6">
        <!-- Title Banner -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 class="font-arabic text-2xl sm:text-3xl font-bold text-blue-900 leading-[2.4] py-1">${currentDialog.title}</h3>
          </div>

          <button onclick="playFullDialogue()" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2">
            <span>▶️ Putar Seluruh Percakapan</span>
          </button>
        </div>

        <!-- Chat Bubble Lines (Murni Bahasa Arab) -->
        <div class="space-y-4 pt-2">
          ${currentDialog.lines.map((line, idx) => {
            const isSpeaker1 = idx % 2 === 0;
            return `
              <div class="flex flex-col ${isSpeaker1 ? 'items-start' : 'items-end'}">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${isSpeaker1 ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'}">
                    ${line.speaker}
                  </span>
                </div>

                <div class="max-w-2xl p-4 sm:p-5 rounded-2xl ${isSpeaker1 ? 'bg-blue-50/80 rounded-tl-none border border-blue-100' : 'bg-emerald-50/80 rounded-tr-none border border-emerald-100'} shadow-sm">
                  <div class="flex items-start justify-between gap-4">
                    <p class="font-arabic text-2xl sm:text-3xl text-slate-800 leading-[2.4] py-1">${line.arabic}</p>
                    <button onclick="speakArabic('${line.arabic}', this)" class="p-2 bg-white hover:bg-slate-100 text-slate-700 rounded-full shadow-sm flex-shrink-0" title="Dengarkan Suara">
                      🔊
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Speech Practice Box (Web Speech Recognition) -->
      <div class="card-soft p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🎙️</span>
            <h3 class="text-lg font-bold text-slate-100">Tes Latihan Pengucapan (Voice Practice)</h3>
          </div>
        </div>

        <p class="text-xs text-slate-300">
          Tekan tombol mikrofon di bawah, ucapkan salam/kalimat Bahasa Arab dari dialog di atas, dan lihat hasil deteksi suara Anda!
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <button id="btn-start-mic" onclick="toggleSpeechRecognition()" class="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
            <span id="mic-icon">🎤</span>
            <span id="mic-text">Mulai Rekam Suara</span>
          </button>

          <div id="speech-result-box" class="flex-1 w-full p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-xs min-h-[48px] flex items-center">
            <span id="speech-transcript" class="text-slate-400 italic">Hasil rekaman suara akan muncul di sini...</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function playFullDialogue() {
  const currentDialog = ARABIC_DATA.kalam[state.currentDialogIndex];
  let lineIdx = 0;

  function speakNext() {
    if (lineIdx < currentDialog.lines.length) {
      const line = currentDialog.lines[lineIdx];
      const utterance = new SpeechSynthesisUtterance(line.arabic);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      utterance.onend = () => {
        lineIdx++;
        setTimeout(speakNext, 600);
      };
      window.speechSynthesis.speak(utterance);
    }
  }

  window.speechSynthesis.cancel();
  speakNext();
}

let recognition = null;
let speechTimeout = null;

function stopMicState(message = null) {
  if (speechTimeout) {
    clearTimeout(speechTimeout);
    speechTimeout = null;
  }
  state.isListeningMic = false;
  
  if (recognition) {
    try { recognition.abort(); } catch(e) {}
    recognition = null;
  }

  const micBtn = document.getElementById('btn-start-mic');
  const micIcon = document.getElementById('mic-icon');
  const micText = document.getElementById('mic-text');
  const transcriptBox = document.getElementById('speech-transcript');

  if (micBtn) {
    micBtn.className = "w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2";
  }
  if (micIcon) micIcon.innerText = "🎤";
  if (micText) micText.innerText = "Mulai Rekam Suara";
  
  if (message && transcriptBox) {
    transcriptBox.innerHTML = `<span class="text-slate-300">${message}</span>`;
  }
}

function toggleSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Browser HP Anda tidak mendukung pengenalan suara. Silakan gunakan Google Chrome di Android.");
    return;
  }

  // Stop any playing text-to-speech audio to prevent mobile microphone hardware lockup
  if (window.speechSynthesis) {
    try { window.speechSynthesis.cancel(); } catch(e) {}
  }

  const micBtn = document.getElementById('btn-start-mic');
  const micIcon = document.getElementById('mic-icon');
  const micText = document.getElementById('mic-text');
  const transcriptBox = document.getElementById('speech-transcript');

  if (state.isListeningMic) {
    stopMicState("Rekaman dihentikan.");
    return;
  }

  stopMicState();

  try {
    recognition = new SpeechRecognition();
    recognition.lang = 'ar-SA';
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      state.isListeningMic = true;
      if (micBtn) {
        micBtn.className = "w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 animate-pulse";
      }
      if (micIcon) micIcon.innerText = "⏹️";
      if (micText) micText.innerText = "Mendengarkan... (Bicara sekarang)";
      if (transcriptBox) {
        transcriptBox.innerHTML = '<span class="text-amber-300 font-semibold animate-pulse">🎙️ Mendengarkan ucapan Bahasa Arab Anda...</span>';
      }

      // Safety timeout: 10 seconds auto-stop if phone mic gets stuck
      speechTimeout = setTimeout(() => {
        if (state.isListeningMic) {
          stopMicState("Waktu rekam selesai (10s). Klik tombol rekam untuk mencoba lagi.");
        }
      }, 10000);
    };

    recognition.onresult = (event) => {
      let resultText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        resultText += event.results[i][0].transcript;
      }
      if (transcriptBox && resultText.trim()) {
        transcriptBox.innerHTML = `<span class="font-arabic text-2xl text-teal-300 font-bold leading-relaxed">${resultText}</span>`;
      }
    };

    recognition.onerror = (event) => {
      let errMsg = "Terjadi kesalahan pada mikrofon HP. Silakan coba lagi.";
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        errMsg = "⚠️ Izin mikrofon belum diizinkan di browser HP Anda. Izinkan akses mikrofon di browser.";
      } else if (event.error === 'no-speech') {
        errMsg = "⚠️ Suara tidak terdeteksi. Bicara lebih keras ke mikrofon HP.";
      } else if (event.error === 'network') {
        errMsg = "⚠️ Koneksi internet dibutuhkan untuk pengenalan suara Bahasa Arab.";
      }
      stopMicState(errMsg);
    };

    recognition.onend = () => {
      stopMicState();
    };

    recognition.start();

  } catch(err) {
    stopMicState("Gagal mengaktifkan mikrofon: " + err.message);
  }
}

function attachKalamEvents() {
  const select = document.getElementById('kalam-dialog-select');
  if (select) {
    select.addEventListener('change', (e) => {
      state.currentDialogIndex = parseInt(e.target.value, 10);
      renderTabContent();
    });
  }
}

// ==========================================
// 4. MAHARAH QIRA'AH HTML & LOGIC
// ==========================================
function renderQiraahHTML() {
  const qiraahIdx = state.currentQiraahIndex || 0;
  const currentQiraah = ARABIC_DATA.qiraah[qiraahIdx];

  return `
    <div class="space-y-6 animate-fadeIn">
      <!-- Title Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span>📖 Maharah Qira'ah (Membaca)</span>
            <span class="font-arabic text-3xl text-emerald-700">مهارة القراءة</span>
          </h2>
          <p class="text-slate-600 text-sm mt-1">
            Baca teks Bahasa Arab di bawah ini, sesuaikan pengaturan harakat & terjemahan, lalu jawab soal pemahamannya.
          </p>
        </div>

        <!-- Text Switcher (Teks A / Teks B) -->
        <select id="qiraah-select" class="px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 shadow-sm focus:ring-2 focus:ring-emerald-500 font-arabic">
          ${ARABIC_DATA.qiraah.map((q, idx) => `
            <option value="${idx}" ${qiraahIdx === idx ? 'selected' : ''}>${q.title}</option>
          `).join('')}
        </select>
      </div>

      <!-- Control Toggles -->
      <div class="card-soft p-4 bg-white flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-6">
          <!-- Toggle Harakat -->
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id="toggle-harakat" ${state.qiraahShowHarakat ? 'checked' : ''} class="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"/>
            <span class="text-sm font-semibold text-slate-700">Tampilkan Harakat</span>
          </label>

          <!-- Toggle Translation -->
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id="toggle-translation" ${state.qiraahShowTranslation ? 'checked' : ''} class="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"/>
            <span class="text-sm font-semibold text-slate-700">Tampilkan Terjemahan Bahasa Indonesia</span>
          </label>
        </div>

        <button onclick="speakQiraahText(this)" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-2">
          <span>🔊 Dengarkan Pembacaan Teks</span>
        </button>
      </div>

      <!-- Reading Box -->
      <div class="card-soft p-6 sm:p-10 space-y-8 bg-white border border-emerald-100">
        <div class="text-center pb-6 border-b border-slate-100">
          <h3 class="font-arabic text-3xl sm:text-4xl font-bold text-emerald-900 leading-[2.8] tracking-wide py-2">${currentQiraah.title}</h3>
        </div>

        <!-- Arabic Text Display (RTL & Extra Generous Line-Height) -->
        <div dir="rtl" class="font-arabic text-2xl sm:text-3xl text-slate-800 leading-[2.8] tracking-wide text-right space-y-6">
          ${formatQiraahText(currentQiraah.arabicText, state.qiraahShowHarakat)}
        </div>

        <!-- Translation Display -->
        ${state.qiraahShowTranslation ? `
          <div class="mt-8 p-6 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl space-y-2 text-slate-700 text-sm leading-relaxed animate-fadeIn">
            <h4 class="font-bold text-emerald-900 flex items-center gap-2">
              <span>🇮🇩 Terjemahan Bahasa Indonesia:</span>
            </h4>
            <p class="whitespace-pre-line">${currentQiraah.translation}</p>
          </div>
        ` : ''}
      </div>

      <!-- Comprehension Questions -->
      <div class="card-soft p-6 sm:p-8 space-y-6">
        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span>📝</span>
          <span class="font-arabic text-2xl font-bold text-emerald-900">فَهْمُ المَقْرُوْءِ</span>
        </h3>

        <div class="space-y-6">
          ${currentQiraah.questions.map((q, idx) => `
            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <div class="flex items-start gap-3">
                <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
                  ${idx + 1}
                </span>
                <div class="space-y-1">
                  <h4 class="font-arabic text-2xl font-bold text-slate-800 leading-[2.2]">${q.q}</h4>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                ${q.options.map((opt, optIdx) => `
                  <button onclick="checkQiraahAnswer(${idx}, ${optIdx})" id="qiraah-opt-${idx}-${optIdx}" class="qiraah-opt-btn p-3.5 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 rounded-xl font-arabic text-xl text-slate-800 text-center transition-all">
                    ${opt}
                  </button>
                `).join('')}
              </div>

              <div id="qiraah-feedback-${idx}" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function formatQiraahText(text, showHarakat) {
  let processed = text;
  if (!showHarakat) {
    // Remove main Arabic diacritics
    processed = processed.replace(/[\u064B-\u0652]/g, '');
  }
  return processed.split('\n\n').map(p => `<p class="my-4 leading-[2.8] block">${p}</p>`).join('');
}

function checkQiraahAnswer(qIdx, optIdx) {
  const qData = ARABIC_DATA.qiraah[state.currentQiraahIndex || 0].questions[qIdx];
  const feedbackBox = document.getElementById(`qiraah-feedback-${qIdx}`);
  
  if (!feedbackBox) return;

  if (optIdx === qData.answer) {
    SoundFx.playCorrect();
    feedbackBox.className = 'p-3 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold block';
    feedbackBox.innerHTML = `✅ <strong>Jawaban Benar!</strong> ${qData.explanation}`;
  } else {
    SoundFx.playWrong();
    feedbackBox.className = 'p-3 bg-rose-100 text-rose-900 border border-rose-300 rounded-xl text-xs font-semibold block';
    feedbackBox.innerHTML = `❌ <strong>Jawaban Kurang Tepat.</strong> Silakan coba lagi atau baca kembali paragraf terkait.`;
  }
}

function attachQiraahEvents() {
  const selectTeks = document.getElementById('qiraah-select');
  const toggleH = document.getElementById('toggle-harakat');
  const toggleT = document.getElementById('toggle-translation');

  if (selectTeks) {
    selectTeks.addEventListener('change', (e) => {
      state.currentQiraahIndex = parseInt(e.target.value, 10);
      renderTabContent();
    });
  }
  if (toggleH) {
    toggleH.addEventListener('change', (e) => {
      state.qiraahShowHarakat = e.target.checked;
      renderTabContent();
    });
  }
  if (toggleT) {
    toggleT.addEventListener('change', (e) => {
      state.qiraahShowTranslation = e.target.checked;
      renderTabContent();
    });
  }
}

// ==========================================
// 5. MAHARAH ISTIMA' HTML & LOGIC (BERBAHAN TEKS QIRA'AH)
// ==========================================
function renderIstimaHTML() {
  const pIdx = state.istimaPassageIndex || 0;
  const passage = ARABIC_DATA.istima[pIdx];

  return `
    <div class="space-y-8 animate-fadeIn">
      <!-- Title Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span>🎧 Maharah Istima' (Mendengarkan Teks Bacaan)</span>
            <span class="font-arabic text-3xl text-purple-700">مهارة الاستماع</span>
          </h2>
          <p class="text-slate-600 text-sm mt-1">
            Bahan mendengarkan diambil langsung dari naskah bacaan Maharah Qira'ah (Teks A & Teks B).
          </p>
        </div>

        <!-- Passage Selector Switcher -->
        <select id="istima-passage-select" class="px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 shadow-sm focus:ring-2 focus:ring-purple-500 font-arabic">
          ${ARABIC_DATA.istima.map((p, idx) => `
            <option value="${idx}" ${pIdx === idx ? 'selected' : ''}>${p.title}</option>
          `).join('')}
        </select>
      </div>

      <!-- MAIN LISTENING AUDIO PLAYER CARD -->
      <div class="card-soft p-6 sm:p-8 space-y-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white rounded-3xl shadow-xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-800/60 pb-4">
          <div>
            <span class="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-3">Naskah Istima' Utama</span>
            <h3 class="font-arabic text-3xl sm:text-4xl font-bold text-purple-100 leading-[2.4] pt-2">${passage.title}</h3>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button onclick="speakIstimaPassage(this)" class="px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2">
              <span>🔊 Putar Bacaan</span>
            </button>
            <button id="btn-istima-pause" onclick="togglePauseAudio(this)" class="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2">
              <span>⏸️ Jeda</span>
            </button>
            <button onclick="stopAudio()" class="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center gap-2">
              <span>⏹️ Stop</span>
            </button>
          </div>
        </div>

        <!-- Hide/Show Text Controls -->
        <div class="flex items-center justify-between p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
          <label class="flex items-center gap-3 cursor-pointer text-xs font-semibold text-purple-200">
            <input type="checkbox" id="toggle-istima-hidetext" ${state.istimaHideText ? 'checked' : ''} class="w-5 h-5 text-purple-500 rounded focus:ring-purple-400"/>
            <span>🙈 Sembunyikan Teks Saat Mendengarkan (Latih Pendengaran Murni)</span>
          </label>
        </div>

        <!-- Passage Text Box (Controlled by Hide Text state) -->
        ${state.istimaHideText ? `
          <div class="p-8 text-center bg-purple-950/60 border border-purple-800/50 rounded-2xl space-y-3">
            <div class="text-4xl">🎧</div>
            <p class="text-purple-200 text-sm font-semibold">Teks disembunyikan. Fokuslah mendengarkan pelafalan audio!</p>
            <p class="text-xs text-purple-400">Hapus centang di atas jika ingin melihat naskah teks.</p>
          </div>
        ` : `
          <div dir="rtl" class="p-6 bg-purple-950/40 border border-purple-800/40 rounded-2xl font-arabic text-2xl sm:text-3xl text-purple-50 leading-[2.8] tracking-wide text-right space-y-4">
            ${passage.arabicText.split('\n\n').map(p => `<p class="leading-[2.8] block">${p}</p>`).join('')}
          </div>
        `}
      </div>

      <!-- SECTION 1: DICTATION & FILL IN THE BLANKS (التدريب الأول: استمع وأكمل) -->
      <div class="card-soft p-6 sm:p-8 space-y-6">
        <div class="border-b border-purple-100 pb-4">
          <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span>🎧 Latihan 1: Mendengarkan Kalimat Rumpang (دِكْتِيه)</span>
          </h3>
          <p class="text-xs text-slate-600 mt-1">Dengarkan cuplikan audio kalimat dari naskah di atas, lalu pilih kata yang hilang!</p>
        </div>

        <div class="space-y-6">
          ${passage.fillBlanks.map((item, bIdx) => `
            <div class="p-5 bg-purple-50/50 border border-purple-100 rounded-2xl space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-full bg-purple-200 text-purple-900 font-bold text-xs flex items-center justify-center flex-shrink-0">
                    ${bIdx + 1}
                  </span>
                  <button onclick="speakIstimaBlank(${bIdx}, this)" class="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-2">
                    <span>🔊 Putar Audio Kalimat</span>
                  </button>
                </div>
              </div>

              <!-- Blank Sentence Display -->
              <div dir="rtl" class="font-arabic text-2xl sm:text-3xl text-slate-800 text-right leading-[2.2] pt-2">
                ${item.sentenceTemplate}
              </div>

              <!-- Options Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                ${item.options.map((opt, optIdx) => `
                  <button onclick="checkIstimaBlankAnswer(${bIdx}, ${optIdx})" class="p-3.5 bg-white hover:bg-purple-100 border border-purple-200 hover:border-purple-400 rounded-xl font-arabic text-xl text-slate-800 text-center transition-all">
                    ${opt}
                  </button>
                `).join('')}
              </div>

              <div id="istima-blank-feedback-${bIdx}" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- SECTION 2: LISTENING COMPREHENSION QUESTIONS (التدريب الثاني: الأسئلة للمستمعين) -->
      <div class="card-soft p-6 sm:p-8 space-y-6">
        <div class="border-b border-purple-100 pb-4">
          <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span>📝 Latihan 2: Soal Pemahaman Mendengar</span>
            <span class="font-arabic text-2xl text-purple-700 font-bold">فَهْمُ الْمَسْمُوْعِ</span>
          </h3>
          <p class="text-xs text-slate-600 mt-1">Jawab pertanyaan pemahaman naskah bacaan yang telah didengarkan:</p>
        </div>

        <div class="space-y-6">
          ${passage.questions.map((q, qIdx) => `
            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <div class="flex items-start gap-3">
                <span class="w-7 h-7 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
                  ${qIdx + 1}
                </span>
                <div class="space-y-1">
                  <h4 class="font-arabic text-2xl font-bold text-slate-800 leading-[2.2]">${q.q}</h4>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                ${q.options.map((opt, optIdx) => `
                  <button onclick="checkIstimaQAnswer(${qIdx}, ${optIdx})" class="p-3.5 bg-white hover:bg-purple-50 border border-slate-200 hover:border-purple-400 rounded-xl font-arabic text-xl text-slate-800 text-center transition-all">
                    ${opt}
                  </button>
                `).join('')}
              </div>

              <div id="istima-q-feedback-${qIdx}" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function checkIstimaBlankAnswer(bIdx, optIdx) {
  const pIdx = state.istimaPassageIndex || 0;
  const itemData = ARABIC_DATA.istima[pIdx].fillBlanks[bIdx];
  const feedbackBox = document.getElementById(`istima-blank-feedback-${bIdx}`);
  if (!feedbackBox) return;

  if (optIdx === itemData.correct) {
    SoundFx.playCorrect();
    feedbackBox.className = 'p-3 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold block';
    feedbackBox.innerHTML = `✅ <strong>Jawaban Benar!</strong> ${itemData.explanation}`;
  } else {
    SoundFx.playWrong();
    feedbackBox.className = 'p-3 bg-rose-100 text-rose-900 border border-rose-300 rounded-xl text-xs font-semibold block';
    feedbackBox.innerHTML = `❌ <strong>Jawaban Kurang Tepat.</strong> Dengarkan ulang audio kalimat dan coba lagi!`;
  }
}

function checkIstimaQAnswer(qIdx, optIdx) {
  const pIdx = state.istimaPassageIndex || 0;
  const qData = ARABIC_DATA.istima[pIdx].questions[qIdx];
  const feedbackBox = document.getElementById(`istima-q-feedback-${qIdx}`);
  if (!feedbackBox) return;

  if (optIdx === qData.answer) {
    SoundFx.playCorrect();
    feedbackBox.className = 'p-3 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold block';
    feedbackBox.innerHTML = `✅ <strong>Jawaban Benar!</strong> ${qData.explanation}`;
  } else {
    SoundFx.playWrong();
    feedbackBox.className = 'p-3 bg-rose-100 text-rose-900 border border-rose-300 rounded-xl text-xs font-semibold block';
    feedbackBox.innerHTML = `❌ <strong>Jawaban Kurang Tepat.</strong> Silakan dengarkan kembali naskah istima'.`;
  }
}

function attachIstimaEvents() {
  const selectPassage = document.getElementById('istima-passage-select');
  const toggleHide = document.getElementById('toggle-istima-hidetext');

  if (selectPassage) {
    selectPassage.addEventListener('change', (e) => {
      state.istimaPassageIndex = parseInt(e.target.value, 10);
      renderTabContent();
    });
  }

  if (toggleHide) {
    toggleHide.addEventListener('change', (e) => {
      state.istimaHideText = e.target.checked;
      renderTabContent();
    });
  }
}

// ==========================================
// 6. QAWAID HTML & LOGIC
// ==========================================
function switchQawaidBab(bab) {
  if (state.qawaidBab === bab) return;
  SoundFx.playClick();
  state.qawaidBab = bab;
  renderTabContent();
}

function renderQawaidHTML() {
  const isBab2 = state.qawaidBab === 2;

  // Header Bab Switcher
  const babSwitcherHTML = `
    <div class="card-soft p-3.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-xl mb-2">
      <div class="flex items-center gap-2.5">
        <span class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-sm border border-amber-500/30">
          📐
        </span>
        <div>
          <h4 class="text-xs sm:text-sm font-extrabold text-white">Materi Qawaid & Gramatika Bahasa Arab Kelas X</h4>
          <p class="text-[11px] text-slate-400">Pilih Bab untuk melihat ringkasan materi dan soal latihan</p>
        </div>
      </div>

      <div class="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
        <button onclick="switchQawaidBab(1)" class="flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${state.qawaidBab === 1 ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-md ring-2 ring-amber-400/50' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
          <span>Bab 1</span>
        </button>
        <button onclick="switchQawaidBab(2)" class="flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${state.qawaidBab === 2 ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-md ring-2 ring-amber-400/50' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
          <span>Bab 2</span>
        </button>
        <button onclick="switchQawaidBab(3)" class="flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${state.qawaidBab === 3 ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-md ring-2 ring-amber-400/50' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
          <span>Bab 3</span>
        </button>
        <button onclick="switchQawaidBab(4)" class="flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${state.qawaidBab === 4 ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-md ring-2 ring-amber-400/50' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
          <span>Bab 4 (Genap)</span>
        </button>
        <button onclick="switchQawaidBab(5)" class="flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${state.qawaidBab === 5 ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-md ring-2 ring-amber-400/50' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
          <span>Bab 5 (Genap)</span>
        </button>
        <button onclick="switchQawaidBab(6)" class="flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${state.qawaidBab === 6 ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-md ring-2 ring-amber-400/50' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
          <span>Bab 6 (Genap)</span>
        </button>
      </div>
    </div>
  `;

  if (state.qawaidBab === 6) {
    const q6 = ARABIC_DATA.qawaidBab6;
    const questions6 = q6.questions;
    return `
      <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto">
        ${babSwitcherHTML}
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span>📐 Qawaid Bab 6: Zharaf Zaman & Zharaf Makan</span>
              <span class="font-arabic text-3xl text-amber-700">ظَرْفُ الزَّمَانِ وَالْمَكَانِ</span>
            </h2>
            <p class="text-slate-600 text-sm mt-1">Keterangan Waktu (Zharaf Zaman) dan Keterangan Tempat (Zharaf Makan) dalam Bahasa Arab.</p>
          </div>
        </div>

        <div class="space-y-8">
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <h3 class="text-xl font-bold text-amber-900">${q6.zharafZaman.title}</h3>
            <p class="text-sm text-slate-600">${q6.zharafZaman.desc}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${q6.zharafZaman.list.map(h => `
                <div class="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-arabic text-2xl font-bold text-amber-900">${h.arabic}</span>
                    <span class="px-3 py-1 bg-amber-200 text-amber-950 font-bold text-xs rounded-full">${h.meaning}</span>
                  </div>
                  <div class="bg-white p-2.5 rounded-xl border border-amber-100 flex items-center justify-between">
                    <span class="font-arabic text-lg font-bold text-slate-800">${h.example}</span>
                    <button onclick="speakArabic('${h.example}', this)" class="text-xs text-amber-700">🔊</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card-soft p-6 sm:p-8 space-y-6">
            <h3 class="text-xl font-bold text-amber-900">${q6.zharafMakan.title}</h3>
            <p class="text-sm text-slate-600">${q6.zharafMakan.desc}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${q6.zharafMakan.list.map(h => `
                <div class="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-arabic text-2xl font-bold text-amber-900">${h.arabic}</span>
                    <span class="px-3 py-1 bg-amber-200 text-amber-950 font-bold text-xs rounded-full">${h.meaning}</span>
                  </div>
                  <div class="bg-white p-2.5 rounded-xl border border-amber-100 flex items-center justify-between">
                    <span class="font-arabic text-lg font-bold text-slate-800">${h.example}</span>
                    <button onclick="speakArabic('${h.example}', this)" class="text-xs text-amber-700">🔊</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card-soft p-6 sm:p-8 space-y-6">
            <h3 class="text-xl font-bold text-amber-900">📝 Latihan 10 Soal Qawaid Bab 6</h3>
            <div class="space-y-6">
              ${questions6.map((q, qIdx) => `
                <div class="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-4">
                  <div class="flex items-start gap-3">
                    <span class="w-7 h-7 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">${qIdx + 1}</span>
                    <h4 class="font-arabic text-2xl font-bold text-slate-800 leading-[2.4] pt-1">${q.q}</h4>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    ${q.options.map((opt, optIdx) => `
                      <button onclick="checkQawaidQAnswer(${qIdx}, ${optIdx})" class="p-3.5 bg-white hover:bg-amber-100 border border-amber-200 hover:border-amber-400 rounded-xl font-arabic text-xl text-slate-800 text-center transition-all">${opt}</button>
                    `).join('')}
                  </div>
                  <div id="qawaid-q-feedback-${qIdx}" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (state.qawaidBab === 5) {
    const q5 = ARABIC_DATA.qawaidBab5;
    const questions5 = q5.questions;
    return `
      <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto">
        ${babSwitcherHTML}
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span>📐 Qawaid Bab 5: Fi'il Madhi, Mudhari' & Fi'il Amr</span>
              <span class="font-arabic text-3xl text-amber-700">الفعل الماضي والمضارع والأمر</span>
            </h2>
            <p class="text-slate-600 text-sm mt-1">Jenis-jenis Kata Kerja berdasarkan waktu (Past, Present/Future, Imperative) dan Tashrif Dhomir.</p>
          </div>
        </div>

        <div class="space-y-8">
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <h3 class="text-xl font-bold text-amber-900">${q5.fiilTypes.title}</h3>
            <p class="text-sm text-slate-600">${q5.fiilTypes.desc}</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr class="bg-amber-100 text-amber-950 text-xs font-bold uppercase">
                    ${q5.fiilTypes.tableHeaders.map(h => `<th class="p-3.5 text-center font-arabic text-lg">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-sm">
                  ${q5.fiilTypes.table.map(row => `
                    <tr class="hover:bg-amber-50 transition-colors">
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-amber-900 bg-amber-50/50 rounded-lg">${row.madhi}</td>
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-teal-800 bg-teal-50/50 rounded-lg">${row.mudhari}</td>
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-rose-800 bg-rose-50/50 rounded-lg">${row.amr}</td>
                      <td class="p-3.5 text-center font-bold text-slate-800">${row.meaning}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <div class="card-soft p-6 sm:p-8 space-y-6">
            <h3 class="text-xl font-bold text-amber-900">${q5.tashrifTable.title}</h3>
            <p class="text-sm text-slate-600">${q5.tashrifTable.desc}</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr class="bg-amber-100 text-amber-950 text-xs font-bold uppercase">
                    ${q5.tashrifTable.tableHeaders.map(h => `<th class="p-3.5 text-center font-arabic text-lg">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-sm">
                  ${q5.tashrifTable.table.map(row => `
                    <tr class="hover:bg-amber-50 transition-colors">
                      <td class="p-3.5 font-bold text-amber-900 text-center">${row.dhomir}</td>
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-amber-900">${row.madhi}</td>
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-teal-800">${row.mudhari}</td>
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-rose-800">${row.amr}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <div class="card-soft p-6 sm:p-8 space-y-6">
            <h3 class="text-xl font-bold text-amber-900">📝 Latihan 10 Soal Qawaid Bab 5</h3>
            <div class="space-y-6">
              ${questions5.map((q, qIdx) => `
                <div class="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-4">
                  <div class="flex items-start gap-3">
                    <span class="w-7 h-7 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">${qIdx + 1}</span>
                    <h4 class="font-arabic text-2xl font-bold text-slate-800 leading-[2.4] pt-1">${q.q}</h4>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    ${q.options.map((opt, optIdx) => `
                      <button onclick="checkQawaidQAnswer(${qIdx}, ${optIdx})" class="p-3.5 bg-white hover:bg-amber-100 border border-amber-200 hover:border-amber-400 rounded-xl font-arabic text-xl text-slate-800 text-center transition-all">${opt}</button>
                    `).join('')}
                  </div>
                  <div id="qawaid-q-feedback-${qIdx}" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (state.qawaidBab === 4) {
    const q4 = ARABIC_DATA.qawaidBab4;
    const questions4 = q4.questions;
    const taqsim = q4.taqsimKalimah;
    const aqsam = q4.aqsamFiil;

    return `
      <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto">
        ${babSwitcherHTML}
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span>📐 Qawaid Bab 4: Pembagian Kata & Pembagian Kata Kerja</span>
              <span class="font-arabic text-3xl text-amber-700">تَقْسِيْمُ الْكَلِمَةِ وَأَقْسَامُ الْفِعْلِ</span>
            </h2>
            <p class="text-slate-600 text-sm mt-1">Materi Qawaid Kurikulum Merdeka: Isim, Fi'il, Harf & Pembagian Fi'il Madhi, Mudhari', Amr.</p>
          </div>
        </div>

        <div class="space-y-8">
          <!-- SECTION 1: TAQSIM AL-KALIMAH -->
          <div class="card-soft p-6 sm:p-8 space-y-6 bg-gradient-to-br from-white to-amber-50/30">
            <div class="border-b border-amber-200/60 pb-4">
              <span class="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full uppercase tracking-wider">Materi 1</span>
              <h3 class="text-2xl font-bold text-amber-900 font-arabic mt-2">${taqsim.title}</h3>
              <p class="text-lg font-bold text-slate-700 font-arabic">${taqsim.subtitle}</p>
              <p class="text-sm text-slate-600 mt-1">${taqsim.desc}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${taqsim.items.map(item => `
                <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="px-3 py-1 rounded-lg text-xs font-bold ${item.badgeColor}">${item.typeTitle}</span>
                    <span class="font-arabic text-2xl font-bold text-slate-800">${item.arabicName}</span>
                  </div>

                  <div class="space-y-2 bg-slate-50 p-3 rounded-xl text-xs">
                    <p class="font-arabic text-lg font-bold text-amber-800 leading-relaxed">${item.definitionArabic}</p>
                    <p class="text-slate-600 italic">${item.definitionIndo}</p>
                  </div>

                  <div>
                    <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Contoh Kata (مِثَالٌ):</h5>
                    <div class="flex flex-wrap gap-1.5">
                      ${item.examples.map(ex => `<span class="px-2.5 py-1 bg-amber-100/70 border border-amber-200 text-amber-950 font-arabic text-base font-bold rounded-lg">${ex}</span>`).join('')}
                    </div>
                  </div>

                  <div>
                    <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Ciri-ciri Utama:</h5>
                    <ul class="space-y-1 text-xs text-slate-600">
                      ${item.characteristics.map(c => `<li class="flex items-start gap-1.5"><span class="text-amber-500 font-bold">•</span> <span>${c}</span></li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- SECTION 2: AQSAM AL-FI'IL -->
          <div class="card-soft p-6 sm:p-8 space-y-6 bg-gradient-to-br from-white to-amber-50/30">
            <div class="border-b border-amber-200/60 pb-4">
              <span class="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full uppercase tracking-wider">Materi 2</span>
              <h3 class="text-2xl font-bold text-amber-900 font-arabic mt-2">${aqsam.title}</h3>
              <p class="text-lg font-bold text-slate-700 font-arabic">${aqsam.subtitle}</p>
              <p class="text-sm text-slate-600 mt-1">${aqsam.desc}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${aqsam.categories.map(cat => `
                <div class="p-5 rounded-2xl bg-white border border-amber-200/70 shadow-sm space-y-4">
                  <div class="flex items-center justify-between border-b border-amber-100 pb-3">
                    <div>
                      <h4 class="font-bold text-slate-800 text-sm">${cat.name}</h4>
                      <p class="text-[11px] text-slate-500 italic mt-0.5">${cat.note}</p>
                    </div>
                    <span class="font-arabic text-2xl font-bold text-amber-700">${cat.title}</span>
                  </div>

                  <div class="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                    ${cat.sentences.map(s => `
                      <div class="p-3 bg-amber-50/40 border border-amber-100/80 rounded-xl space-y-1">
                        <p class="font-arabic text-xl text-slate-900 font-medium text-right leading-relaxed">${s.arabic}</p>
                        <p class="text-xs text-slate-500 italic">${s.latin}</p>
                        <p class="text-xs font-semibold text-slate-700">${s.indo}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- SECTION 3: 10 SOAL LATIHAN QAWAID BAB 4 -->
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <div class="flex items-center justify-between pb-2 border-b border-amber-200/60">
              <h3 class="text-xl font-bold text-amber-900">📝 Latihan 10 Soal Qawaid Bab 4</h3>
              <span class="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">Soal Pilihan Ganda</span>
            </div>
            <div class="space-y-6">
              ${questions4.map((q, qIdx) => `
                <div class="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-4">
                  <div class="flex items-start gap-3">
                    <span class="w-7 h-7 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">${qIdx + 1}</span>
                    <div>
                      <h4 class="font-arabic text-2xl font-bold text-slate-800 leading-[2.4] pt-1">${q.q}</h4>
                      <p class="text-xs text-slate-500 italic">${q.latinQ}</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    ${q.options.map((opt, optIdx) => `
                      <button onclick="checkQawaidQAnswer(${qIdx}, ${optIdx})" class="p-3.5 bg-white hover:bg-amber-100 border border-amber-200 hover:border-amber-400 rounded-xl font-arabic text-xl text-slate-800 text-center transition-all">${opt}</button>
                    `).join('')}
                  </div>
                  <div id="qawaid-q-feedback-${qIdx}" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (state.qawaidBab === 3) {
    const q3 = ARABIC_DATA.qawaidBab3;
    const questions3 = q3.questions;

    return `
      <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto">
        ${babSwitcherHTML}

        <!-- Title Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span>📐 Qawaid Bab 3: Mufrad, Mutsanna, Jamak & Huruf 'Athaf</span>
              <span class="font-arabic text-3xl text-amber-700">القواعد والتراكيب</span>
            </h2>
            <p class="text-slate-600 text-sm mt-1">
              Bentuk Kata Benda berdasarkan jumlah (Tunggal, Dual, Jamak) dan Kata Hubung / Konjungsi (وَ, فَـ, ثُمَّ, أَوْ).
            </p>
          </div>
        </div>

        <div class="space-y-8">
          
          <!-- SECTION 1: MUFRAD, MUTSNAA & JAMAK -->
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <div class="border-b border-amber-100 pb-4">
              <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
                <span>${q3.numberTypes.title}</span>
              </h3>
              <p class="text-sm text-slate-600 mt-1">${q3.numberTypes.desc}</p>
            </div>

            <!-- Table Mufrad, Mutsanna, Jamak -->
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr class="bg-amber-100/80 text-amber-950 text-xs font-bold uppercase whitespace-nowrap">
                    ${q3.numberTypes.tableHeaders.map(h => `<th class="p-3.5 text-center font-arabic text-lg whitespace-nowrap">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-sm">
                  ${q3.numberTypes.table.map(row => `
                    <tr class="hover:bg-amber-50/40 transition-colors">
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-blue-800 bg-blue-50/50 rounded-lg whitespace-nowrap">${row.mufrad}</td>
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-teal-800 bg-teal-50/50 rounded-lg whitespace-nowrap">${row.mutsanna}</td>
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-purple-800 bg-purple-50/50 rounded-lg whitespace-nowrap">${row.jamak}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Definitions of Jamak & Mutsanna -->
            <div class="p-5 bg-amber-50/80 border border-amber-200/80 rounded-2xl space-y-3 text-xs leading-relaxed text-slate-800">
              <h4 class="font-bold text-amber-900 text-sm">📌 Penjelasan & Pembagian Bentuk Kata (الملاحظة):</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                ${q3.numberTypes.definitions.map(d => `
                  <div class="p-3 bg-white rounded-xl border border-amber-200/60 space-y-1">
                    <span class="font-arabic font-bold text-amber-900 text-base block">${d.type}</span>
                    <p class="text-slate-600 text-xs">${d.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- SECTION 2: HURUF AL-'ATHAF -->
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <div class="border-b border-amber-100 pb-4">
              <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
                <span>${q3.hurufAthaf.title}</span>
              </h3>
              <p class="text-sm text-slate-600 mt-1">${q3.hurufAthaf.desc}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${q3.hurufAthaf.list.map(h => `
                <div class="p-5 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200/80 rounded-2xl space-y-3 shadow-sm">
                  <div class="flex items-center justify-between border-b border-amber-200/60 pb-2">
                    <span class="font-arabic text-3xl font-bold text-amber-900">${h.huruf}</span>
                    <span class="px-3 py-1 bg-amber-200/60 text-amber-950 font-bold text-xs rounded-full">${h.meaning}</span>
                  </div>
                  <p class="text-xs text-slate-600 italic font-medium">${h.functionDesc}</p>
                  <div class="space-y-1 pt-1">
                    <p class="text-xs font-bold text-slate-500 uppercase">Contoh Kalimat:</p>
                    ${h.examples.map(ex => `
                      <div class="flex items-center justify-between bg-white p-2.5 rounded-xl border border-amber-100">
                        <span class="font-arabic text-xl font-bold text-slate-800">${ex}</span>
                        <button onclick="speakArabic('${ex}', this)" class="text-xs text-amber-700 hover:text-amber-900 p-1">🔊</button>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- SECTION 3: 10 SOAL LATIHAN QAWAID BAB 3 -->
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <div class="border-b border-amber-100 pb-4">
              <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
                <span>📝 Latihan 10 Soal Qawaid Bab 3</span>
                <span class="font-arabic text-2xl text-amber-700 font-bold">تَدْرِيْبَاتُ القَوَاعِدِ (البَابُ الثَّالِثُ)</span>
              </h3>
              <p class="text-xs text-slate-600 mt-1">Uji pemahaman Mufrad/Mutsanna/Jamak dan Huruf 'Athaf (وَ, فَـ, ثُمَّ, أَوْ):</p>
            </div>

            <div class="space-y-6">
              ${questions3.map((q, qIdx) => `
                <div class="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-4">
                  <div class="flex items-start gap-3">
                    <span class="w-7 h-7 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
                      ${qIdx + 1}
                    </span>
                    <div class="space-y-1">
                      <h4 class="font-arabic text-2xl font-bold text-slate-800 leading-[2.4] pt-1">${q.q}</h4>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    ${q.options.map((opt, optIdx) => `
                      <button onclick="checkQawaidQAnswer(${qIdx}, ${optIdx})" class="p-3.5 bg-white hover:bg-amber-100 border border-amber-200 hover:border-amber-400 rounded-xl font-arabic text-xl text-slate-800 text-center transition-all">
                        ${opt}
                      </button>
                    `).join('')}
                  </div>

                  <div id="qawaid-q-feedback-${qIdx}" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    `;
  }

  if (isBab2) {
    const q2 = ARABIC_DATA.qawaidBab2;
    const questions2 = q2.questions;

    return `
      <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto">
        ${babSwitcherHTML}

        <!-- Title Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <span>📐 Qawaid Bab 2: Al-Muzakkar wal-Mu'annats & Huruf Jar</span>
              <span class="font-arabic text-3xl text-amber-700">القواعد والتراكيب</span>
            </h2>
            <p class="text-slate-600 text-sm mt-1">
              Pola Isim Muzakkar/Mu'annats, Kata Tunjuk (Isim Isyarah), Kata Ganti (Dhomir), dan Huruf Jar (حُرُوْفُ الْجَرِّ).
            </p>
          </div>
        </div>

        <div class="space-y-8">
          
          <!-- SECTION 1: ISIM ISYARAH MUDZAKKAR & MU'ANNATS -->
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <div class="border-b border-amber-100 pb-4">
              <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
                <span>${q2.muzakkarMuannats.title}</span>
              </h3>
              <p class="text-sm text-slate-600 mt-1">${q2.muzakkarMuannats.desc}</p>
            </div>

            <!-- Table Asma'ul Isyarah -->
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr class="bg-amber-100/80 text-amber-950 text-xs font-bold uppercase whitespace-nowrap">
                    <th class="p-3.5 whitespace-nowrap">Jenis Kata</th>
                    <th class="p-3.5 text-center font-arabic text-xl whitespace-nowrap">الإشارة (Dekat)</th>
                    <th class="p-3.5 font-arabic text-lg text-right whitespace-nowrap">Contoh (Dekat)</th>
                    <th class="p-3.5 text-center font-arabic text-xl whitespace-nowrap">الإشارة (Jauh)</th>
                    <th class="p-3.5 font-arabic text-lg text-right whitespace-nowrap">Contoh (Jauh)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-sm">
                  ${q2.muzakkarMuannats.isyarahTable.map(row => `
                    <tr class="hover:bg-amber-50/40 transition-colors">
                      <td class="p-3.5 font-bold text-amber-900 whitespace-nowrap">${row.type}</td>
                      <td class="p-3.5 text-center font-arabic text-2xl font-bold text-blue-700 bg-blue-50/50 rounded-lg whitespace-nowrap">${row.dekat}</td>
                      <td class="p-3.5 font-arabic text-lg text-slate-800 text-right whitespace-nowrap">${row.dekatEx.slice(0, 3).join(', ')}</td>
                      <td class="p-3.5 text-center font-arabic text-2xl font-bold text-purple-700 bg-purple-50/50 rounded-lg whitespace-nowrap">${row.jauh}</td>
                      <td class="p-3.5 font-arabic text-lg text-slate-800 text-right whitespace-nowrap">${row.jauhEx.slice(0, 3).join(', ')}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Catatan Tanda Mu'annats -->
            <div class="p-5 bg-amber-50/80 border border-amber-200/80 rounded-2xl space-y-2 text-xs leading-relaxed text-slate-800">
              <h4 class="font-bold text-amber-900 text-sm">📌 Catatan Penting Tanda-Tanda Isim Mu'annats (الملاحظة):</h4>
              ${q2.muzakkarMuannats.notes.map(n => `<p>${n}</p>`).join('')}
            </div>
          </div>

          <!-- SECTION 2: DHOMIR GENDER MUDZAKKAR & MU'ANNATS -->
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <div class="border-b border-amber-100 pb-4">
              <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
                <span>${q2.dhomirGender.title}</span>
              </h3>
              <p class="text-sm text-slate-600 mt-1">${q2.dhomirGender.desc}</p>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr class="bg-amber-100/80 text-amber-950 text-xs font-bold uppercase whitespace-nowrap">
                    <th class="p-3.5 whitespace-nowrap">Gender</th>
                    <th class="p-3.5 text-center font-arabic text-lg whitespace-nowrap">الضمير المنفصل</th>
                    <th class="p-3.5 font-arabic text-lg text-right whitespace-nowrap">Contoh Kalimat (Munfashil)</th>
                    <th class="p-3.5 text-center font-arabic text-lg whitespace-nowrap">الضمير المتصل</th>
                    <th class="p-3.5 font-arabic text-lg text-right whitespace-nowrap">Contoh Frasa (Muttashil)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-sm">
                  ${q2.dhomirGender.table.map(row => `
                    <tr class="hover:bg-amber-50/40 transition-colors">
                      <td class="p-3.5 font-bold text-amber-900 whitespace-nowrap">${row.gender}</td>
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-teal-700 bg-teal-50/50 rounded-lg whitespace-nowrap">${row.munfashil}</td>
                      <td class="p-3.5 font-arabic text-lg text-slate-800 text-right whitespace-nowrap">${row.exMunfashil}</td>
                      <td class="p-3.5 text-center font-arabic text-xl font-bold text-rose-700 bg-rose-50/50 rounded-lg whitespace-nowrap">${row.muttashil}</td>
                      <td class="p-3.5 font-arabic text-lg text-slate-800 text-right whitespace-nowrap">${row.exMuttashil}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- SECTION 3: HURUF AL-JAR -->
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <div class="border-b border-amber-100 pb-4">
              <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
                <span>${q2.hurufJar.title}</span>
              </h3>
              <p class="text-sm text-slate-600 mt-1">${q2.hurufJar.desc}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${q2.hurufJar.table.map(h => `
                <div class="p-5 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl space-y-3 shadow-sm">
                  <div class="flex items-center justify-between border-b border-amber-200/60 pb-2">
                    <span class="font-arabic text-3xl font-bold text-amber-900">${h.huruf}</span>
                    <span class="px-3 py-1 bg-amber-200/60 text-amber-950 font-bold text-xs rounded-full">${h.meaning}</span>
                  </div>
                  <div class="space-y-1 pt-1">
                    <p class="text-xs font-bold text-slate-500 uppercase">Contoh Kalimat:</p>
                    ${h.examples.map(ex => `
                      <div class="flex items-center justify-between bg-white p-2.5 rounded-xl border border-amber-100">
                        <span class="font-arabic text-xl font-bold text-slate-800">${ex}</span>
                        <button onclick="speakArabic('${ex}', this)" class="text-xs text-amber-700 hover:text-amber-900 p-1">🔊</button>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- SECTION 4: 10 SOAL LATIHAN QAWAID BAB 2 -->
          <div class="card-soft p-6 sm:p-8 space-y-6">
            <div class="border-b border-amber-100 pb-4">
              <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
                <span>📝 Latihan 10 Soal Qawaid Bab 2</span>
                <span class="font-arabic text-2xl text-amber-700 font-bold">تَدْرِيْبَاتُ القَوَاعِدِ (البَابُ الثَّانِي)</span>
              </h3>
              <p class="text-xs text-slate-600 mt-1">Uji pemahaman Isim Muzakkar/Mu'annats, Dhomir Gender, dan Huruf Jar:</p>
            </div>

            <div class="space-y-6">
              ${questions2.map((q, qIdx) => `
                <div class="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-4">
                  <div class="flex items-start gap-3">
                    <span class="w-7 h-7 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
                      ${qIdx + 1}
                    </span>
                    <div class="space-y-1">
                      <h4 class="font-arabic text-2xl font-bold text-slate-800 leading-[2.4] pt-1">${q.q}</h4>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    ${q.options.map((opt, optIdx) => `
                      <button onclick="checkQawaidQAnswer(${qIdx}, ${optIdx})" class="p-3.5 bg-white hover:bg-amber-100 border border-amber-200 hover:border-amber-400 rounded-xl font-arabic text-xl text-slate-800 text-center transition-all">
                        ${opt}
                      </button>
                    `).join('')}
                  </div>

                  <div id="qawaid-q-feedback-${qIdx}" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    `;
  }

  // Otherwise, Bab 1 Qawaid
  const istifhamData = ARABIC_DATA.qawaid[0];
  const dhomirData = ARABIC_DATA.qawaid[1];
  const kalimahData = ARABIC_DATA.qawaid[2];

  return `
    <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      ${babSwitcherHTML}

      <!-- Title Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span>📐 Qawaid Bab 1: Kata Tanya, Dhomir & Pembagian Kata</span>
            <span class="font-arabic text-3xl text-amber-700">القواعد والتراكيب</span>
          </h2>
          <p class="text-slate-600 text-sm mt-1">
            Ringkasan materi Adawatul Istifham (Kata Tanya), Dhomir (Kata Ganti), dan Pembagian Kata.
          </p>
        </div>
      </div>

      <!-- Grammar Sections -->
      <div class="space-y-8">
        
        <!-- SECTION 1: ADAWATUL ISTIFHAM (14 KATA TANYA) -->
        <div class="card-soft p-6 sm:p-8 space-y-6">
          <div class="border-b border-amber-100 pb-4">
            <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
              <span>${istifhamData.title}</span>
            </h3>
            <p class="text-sm text-slate-600 mt-1">${istifhamData.description}</p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-amber-100/80 text-amber-950 text-xs font-bold uppercase tracking-wider">
                  <th class="p-3.5 text-center w-12">#</th>
                  <th class="p-3.5 font-arabic text-xl text-right">الأَدَاةُ (Kata Tanya)</th>
                  <th class="p-3.5">Arti / Terjemahan</th>
                  <th class="p-3.5">Keterangan Penggunaan</th>
                  <th class="p-3.5 text-center w-16">Audio</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-sm">
                ${istifhamData.istifhamTable.map(item => `
                  <tr class="hover:bg-amber-50/40 transition-colors">
                    <td class="p-3.5 text-center font-bold text-slate-400">${item.id}</td>
                    <td class="p-3.5 font-arabic text-2xl font-bold text-amber-900 text-right">${item.arabic}</td>
                    <td class="p-3.5 font-semibold text-slate-800">${item.meaning}</td>
                    <td class="p-3.5 text-xs font-medium text-slate-600 bg-slate-50/50 rounded-lg">${item.desc}</td>
                    <td class="p-3.5 text-center">
                      <button onclick="speakArabic('${item.arabic}', this)" class="p-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full transition-colors" title="Dengarkan Suara">
                        🔊
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- SECTION 2: DHOMIR MUNFASHIL & MUTTASHIL -->
        <div class="card-soft p-6 sm:p-8 space-y-6">
          <div class="border-b border-amber-100 pb-4">
            <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
              <span>${dhomirData.title}</span>
            </h3>
            <p class="text-sm text-slate-600 mt-1">${dhomirData.description}</p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr class="bg-amber-100/80 text-amber-950 text-xs font-bold uppercase whitespace-nowrap">
                  <th class="p-3.5 font-arabic text-lg text-right whitespace-nowrap">الضَّمِيْرُ</th>
                  <th class="p-3.5 text-center font-arabic text-lg whitespace-nowrap">المُتَّصِل</th>
                  <th class="p-3.5 font-arabic text-lg text-right whitespace-nowrap">Contoh (اسْم)</th>
                  <th class="p-3.5 font-arabic text-lg text-right whitespace-nowrap">Contoh (عُنْوَان)</th>
                  <th class="p-3.5 font-arabic text-lg text-right whitespace-nowrap">Contoh (بَيْت)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-sm">
                ${dhomirData.dhomirMuttashilTable.map(row => `
                  <tr class="hover:bg-amber-50/40 transition-colors">
                    <td class="p-3.5 font-arabic text-2xl font-bold text-amber-900 text-right whitespace-nowrap">${row.dhomir}</td>
                    <td class="p-3.5 text-center font-arabic text-2xl font-bold text-teal-700 bg-teal-50/50 rounded-lg whitespace-nowrap">${row.muttashil}</td>
                    <td class="p-3.5 font-arabic text-xl text-slate-800 text-right whitespace-nowrap">${row.exIsm}</td>
                    <td class="p-3.5 font-arabic text-xl text-slate-800 text-right whitespace-nowrap">${row.exUnwan}</td>
                    <td class="p-3.5 font-arabic text-xl text-slate-800 text-right whitespace-nowrap">${row.exBait}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- SECTION 3: PEMBAGIAN KATA -->
        <div class="card-soft p-6 sm:p-8 space-y-6">
          <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
            <span>${kalimahData.title}</span>
          </h3>
          <p class="text-sm text-slate-600">${kalimahData.description}</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${kalimahData.breakdown.map(b => `
              <div class="p-5 bg-amber-50/60 border border-amber-200/80 rounded-2xl space-y-2">
                <h4 class="font-arabic text-2xl font-bold text-amber-900">${b.type}</h4>
                <p class="text-xs text-slate-700 leading-relaxed">${b.desc}</p>
              </div>
            `).join('')}
          </div>

          <!-- Color Coded Sentence Breakdown -->
          <div class="p-6 bg-slate-900 text-white rounded-2xl space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-amber-400 uppercase tracking-wider">💡 Contoh Analisis Struktur Kalimat:</span>
              <button onclick="speakArabic('${kalimahData.interactiveSentence.text}', this)" class="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-amber-300">
                🔊 Dengarkan
              </button>
            </div>

            <div class="font-arabic text-3xl text-center py-4 text-slate-100 tracking-wide">
              "${kalimahData.interactiveSentence.text}"
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              ${kalimahData.interactiveSentence.words.map(w => `
                <div class="p-3 border rounded-xl text-center space-y-1 ${w.color}">
                  <div class="font-arabic text-2xl font-bold">${w.word}</div>
                  <div class="text-[10px] font-sans font-bold uppercase">${w.role}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- SECTION 4: 10 SOAL LATIHAN QAWAID -->
        <div class="card-soft p-6 sm:p-8 space-y-6">
          <div class="border-b border-amber-100 pb-4">
            <h3 class="text-xl font-bold text-amber-900 flex items-center gap-2">
              <span>📝 Latihan 10 Soal Qawaid (Tata Bahasa)</span>
              <span class="font-arabic text-2xl text-amber-700 font-bold">تَدْرِيْبَاتُ القَوَاعِدِ</span>
            </h3>
            <p class="text-xs text-slate-600 mt-1">Uji pemahaman Kata Tanya (Adawatul Istifham), Dhomir, dan Pembagian Kata (Isim/Fi'il/Harf):</p>
          </div>

          <div class="space-y-6">
            ${ARABIC_DATA.qawaidQuestions.map((q, qIdx) => `
              <div class="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-4">
                <div class="flex items-start gap-3">
                  <span class="w-7 h-7 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
                    ${qIdx + 1}
                  </span>
                  <div class="space-y-1">
                    <h4 class="font-arabic text-2xl font-bold text-slate-800 leading-[2.4] pt-1">${q.q}</h4>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  ${q.options.map((opt, optIdx) => `
                    <button onclick="checkQawaidQAnswer(${qIdx}, ${optIdx})" class="p-3.5 bg-white hover:bg-amber-100 border border-amber-200 hover:border-amber-400 rounded-xl font-arabic text-xl text-slate-800 text-center transition-all">
                      ${opt}
                    </button>
                  `).join('')}
                </div>

                <div id="qawaid-q-feedback-${qIdx}" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

function checkQawaidQAnswer(qIdx, optIdx) {
  let questions;
  if (state.qawaidBab === 6 && ARABIC_DATA.qawaidBab6) {
    questions = ARABIC_DATA.qawaidBab6.questions;
  } else if (state.qawaidBab === 5 && ARABIC_DATA.qawaidBab5) {
    questions = ARABIC_DATA.qawaidBab5.questions;
  } else if (state.qawaidBab === 4 && ARABIC_DATA.qawaidBab4) {
    questions = ARABIC_DATA.qawaidBab4.questions;
  } else if (state.qawaidBab === 3) {
    questions = ARABIC_DATA.qawaidBab3.questions;
  } else if (state.qawaidBab === 2) {
    questions = ARABIC_DATA.qawaidBab2.questions;
  } else {
    questions = ARABIC_DATA.qawaidQuestions;
  }
  const qData = questions[qIdx];
  const feedbackBox = document.getElementById(`qawaid-q-feedback-${qIdx}`);
  if (!feedbackBox) return;

  if (optIdx === qData.answer) {
    SoundFx.playCorrect();
    feedbackBox.className = 'p-3 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold block';
    feedbackBox.innerHTML = `✅ <strong>Jawaban Benar!</strong> ${qData.explanation}`;
  } else {
    SoundFx.playWrong();
    feedbackBox.className = 'p-3 bg-rose-100 text-rose-900 border border-rose-300 rounded-xl text-xs font-semibold block';
    feedbackBox.innerHTML = `❌ <strong>Jawaban Kurang Tepat.</strong> Silakan baca kembali ringkasan materi qawaid di atas.`;
  }
}

function attachQawaidEvents() {}

// ==========================================
// 7. TADRIBAT (QUIZIZZ / KAHOOT GAMIFIED 20 SOAL PER VERSI)
// ==========================================
function getTadribatQuestions() {
  const bab = state.tadribatBab || 1;
  const ver = state.tadribatVersion || 1;
  const key = `bab${bab}_v${ver}`;
  if (ARABIC_DATA.tadribat && ARABIC_DATA.tadribat[key]) {
    return ARABIC_DATA.tadribat[key];
  }
  if (bab === 3) {
    return ver === 2 ? (ARABIC_DATA.tadribat.bab3_v2 || []) : (ARABIC_DATA.tadribat.bab3_v1 || []);
  }
  if (bab === 2) {
    return ver === 2 ? (ARABIC_DATA.tadribat.bab2_v2 || []) : (ARABIC_DATA.tadribat.bab2_v1 || []);
  }
  return ver === 2 ? (ARABIC_DATA.tadribat.bab1_v2 || ARABIC_DATA.tadribat.v2 || []) : (ARABIC_DATA.tadribat.bab1_v1 || ARABIC_DATA.tadribat.v1 || []);
}

function resetQuizState() {
  state.quizCurrentIndex = 0;
  state.quizAnswers = [];
  state.quizScore = 0;
  state.quizPoints = 0;
  state.quizStreak = 0;
  state.quizMaxStreak = 0;
  state.quizIsFinished = false;
}

function switchTadribatBab(bab) {
  if (state.tadribatBab === bab) return;
  SoundFx.playClick();
  state.tadribatBab = bab;
  resetQuizState();
  renderTabContent();
}

function switchTadribatVersion(ver) {
  if (state.tadribatVersion === ver) return;
  SoundFx.playClick();
  state.tadribatVersion = ver;
  resetQuizState();
  renderTabContent();
}

function renderTadribatHTML() {
  if (state.quizIsFinished) {
    return renderQuizResultHTML();
  }

  const questions = getTadribatQuestions();
  const q = questions[state.quizCurrentIndex];
  const totalQ = questions.length;
  const progressPercent = ((state.quizCurrentIndex + 1) / totalQ) * 100;
  const currentAnswer = state.quizAnswers[state.quizCurrentIndex];
  const isAnswered = currentAnswer !== undefined;

  // Kahoot Shape Symbols & Colors
  const kahootStyles = [
    { bg: "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white border-red-700", shape: "▲", label: "A" },
    { bg: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-blue-700", shape: "◆", label: "B" },
    { bg: "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-900 border-amber-600", shape: "●", label: "C" },
    { bg: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-emerald-700", shape: "■", label: "D" }
  ];

  return `
    <div class="space-y-6 animate-fadeIn max-w-4xl mx-auto">
      
      <!-- BAB & VERSION SELECTOR BAR -->
      <div class="card-soft p-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 font-extrabold flex items-center justify-center text-lg border border-teal-500/30">
            📝
          </span>
          <div>
            <h4 class="text-xs sm:text-sm font-extrabold text-white whitespace-nowrap">Paket Tadribat Interaktif (Kelas X)</h4>
            <p class="text-[11px] sm:text-xs text-slate-400 whitespace-nowrap">Pilih Bab dan Versi Soal (20 Soal/Versi)</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <!-- BAB SELECTOR -->
          <div class="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 overflow-x-auto">
            <button onclick="switchTadribatBab(1)" class="px-2.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${state.tadribatBab === 1 ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}">
              Bab 1
            </button>
            <button onclick="switchTadribatBab(2)" class="px-2.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${state.tadribatBab === 2 ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}">
              Bab 2
            </button>
            <button onclick="switchTadribatBab(3)" class="px-2.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${state.tadribatBab === 3 ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}">
              Bab 3
            </button>
            <button onclick="switchTadribatBab(4)" class="px-2.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${state.tadribatBab === 4 ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}">
              Bab 4
            </button>
            <button onclick="switchTadribatBab(5)" class="px-2.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${state.tadribatBab === 5 ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}">
              Bab 5
            </button>
            <button onclick="switchTadribatBab(6)" class="px-2.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${state.tadribatBab === 6 ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}">
              Bab 6
            </button>
          </div>

          <!-- VERSI SELECTOR -->
          <div class="flex items-center gap-2">
            <button onclick="switchTadribatVersion(1)" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${state.tadribatVersion === 1 ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md ring-2 ring-teal-400/50' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
              <span>📚 Versi 1 (Kosakata & Hiwar)</span>
            </button>
            <button onclick="switchTadribatVersion(2)" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${state.tadribatVersion === 2 ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md ring-2 ring-purple-400/50' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}">
              <span>📐 Versi 2 (Gramatika & Qawaid)</span>
            </button>
          </div>
        </div>
      </div>

      <!-- TOP BAR STATUS -->
      <div class="card-soft p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 shadow-xl">
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold text-slate-400">
            Soal <span class="text-white font-extrabold text-base">${state.quizCurrentIndex + 1}</span> / ${totalQ}
          </span>
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${state.tadribatVersion === 1 ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'}">
            Bab ${state.tadribatBab || 1} - ${state.tadribatVersion === 1 ? 'Versi 1: Kosakata & Hiwar' : 'Versi 2: Gramatika & Qawaid'}
          </span>
        </div>

        <!-- Streak & Points Counters -->
        <div class="flex items-center gap-4 text-xs font-bold">
          <div class="flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl">
            <span class="text-base animate-bounce">🔥</span>
            <span>STREAK: <span class="text-amber-200 text-sm font-extrabold">x${state.quizStreak}</span></span>
          </div>

          <div class="flex items-center gap-1.5 px-3 py-1 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-xl">
            <span class="text-base">⭐</span>
            <span>POIN: <span class="text-teal-200 text-sm font-extrabold">${state.quizPoints.toLocaleString('id-ID')}</span></span>
          </div>
        </div>
      </div>

      <!-- PROGRESS BAR -->
      <div class="w-full bg-slate-800 h-3 rounded-full overflow-hidden shadow-inner border border-slate-700">
        <div class="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 h-full transition-all duration-300 rounded-full" style="width: ${progressPercent}%"></div>
      </div>

      <!-- QUESTION CARD -->
      <div class="card-soft p-6 sm:p-10 space-y-8 bg-white border border-slate-200 rounded-3xl shadow-xl">
        <div class="text-center py-2">
          <h3 class="font-arabic text-3xl sm:text-5xl font-bold text-slate-900 leading-[2.4] tracking-wide py-2">${q.question}</h3>
        </div>

        <!-- 4 KAHOOT COLOR CARDS GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${q.options.map((opt, idx) => {
            const style = kahootStyles[idx];
            const isChosen = currentAnswer === idx;
            const isCorrectChoice = isAnswered && idx === q.answer;
            const isWrongChoice = isAnswered && isChosen && idx !== q.answer;

            let borderEffect = 'border-transparent shadow-md';
            if (isAnswered) {
              if (isCorrectChoice) borderEffect = 'ring-4 ring-emerald-400 border-white scale-[1.02] shadow-2xl';
              else if (isWrongChoice) borderEffect = 'opacity-40 border-slate-400 line-through';
              else borderEffect = 'opacity-50';
            }

            return `
              <button onclick="selectQuizAnswer(${idx})" ${isAnswered ? 'disabled' : ''} class="p-5 ${style.bg} ${borderEffect} rounded-2xl text-left transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-between shadow-lg cursor-pointer">
                <div class="flex items-center gap-3.5">
                  <span class="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 border border-white/30">
                    ${style.shape}
                  </span>
                  <span class="text-base sm:text-lg font-bold">${opt}</span>
                </div>
                ${isChosen ? `<span class="text-xl font-bold">${idx === q.answer ? '✅' : '❌'}</span>` : ''}
              </button>
            `;
          }).join('')}
        </div>

        <!-- INSTANT FEEDBACK BANNER AFTER ANSWERING -->
        ${isAnswered ? `
          <div class="p-5 rounded-2xl text-sm font-bold animate-fadeIn space-y-2 ${currentAnswer === q.answer ? 'bg-emerald-50 text-emerald-950 border-2 border-emerald-300' : 'bg-rose-50 text-rose-950 border-2 border-rose-300'}">
            <div class="flex items-center justify-between">
              <span class="text-base font-extrabold flex items-center gap-2">
                ${currentAnswer === q.answer ? '🎉 BENAR! AMAZING!' : '❌ KURANG TEPAT!'}
              </span>
              ${currentAnswer === q.answer ? `
                <span class="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-xs font-mono font-bold">
                  +${1000 + (state.quizStreak * 200)} POIN
                </span>
              ` : ''}
            </div>
            <p class="text-xs leading-relaxed font-normal">${q.explanation}</p>
          </div>
        ` : ''}

        <!-- NAVIGATION ACTION BUTTONS -->
        <div class="flex justify-between items-center pt-6 border-t border-slate-100">
          <button onclick="prevQuizQuestion()" ${state.quizCurrentIndex === 0 ? 'disabled class="opacity-30 cursor-not-allowed px-4 py-2.5 text-xs font-bold text-slate-400"' : 'class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl shadow-sm"'}>
            ← Soal Sebelumnya
          </button>

          ${state.quizCurrentIndex === totalQ - 1 ? `
            <button onclick="finishQuiz()" ${!isAnswered ? 'disabled class="opacity-50 cursor-not-allowed px-8 py-3 bg-emerald-400 text-white font-bold rounded-xl"' : 'class="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold rounded-2xl shadow-xl transition-all flex items-center gap-2 transform hover:scale-105"'}">
              <span>🏆 Selesaikan Kuis & Lihat Hasil</span>
            </button>
          ` : `
            <button onclick="nextQuizQuestion()" ${!isAnswered ? 'disabled class="opacity-40 cursor-not-allowed px-6 py-3 bg-slate-300 text-slate-500 text-xs font-bold rounded-xl"' : 'class="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white text-xs font-extrabold rounded-xl shadow-lg transition-all transform hover:scale-105"'}>
              Soal Selanjutnya →
            </button>
          `}
        </div>

      </div>
    </div>
  `;
}

function selectQuizAnswer(optIdx) {
  if (state.quizAnswers[state.quizCurrentIndex] !== undefined) return; // Prevent re-select

  const questions = getTadribatQuestions();
  const q = questions[state.quizCurrentIndex];
  state.quizAnswers[state.quizCurrentIndex] = optIdx;

  if (optIdx === q.answer) {
    SoundFx.playCorrect();
    state.quizStreak++;
    if (state.quizStreak > state.quizMaxStreak) {
      state.quizMaxStreak = state.quizStreak;
    }
    const bonus = 1000 + (state.quizStreak * 200);
    state.quizPoints += bonus;
  } else {
    SoundFx.playWrong();
    state.quizStreak = 0;
  }

  renderTabContent();
}

function nextQuizQuestion() {
  const questions = getTadribatQuestions();
  const totalQ = questions.length;
  if (state.quizCurrentIndex < totalQ - 1) {
    state.quizCurrentIndex++;
    renderTabContent();
  }
}

function prevQuizQuestion() {
  if (state.quizCurrentIndex > 0) {
    state.quizCurrentIndex--;
    renderTabContent();
  }
}

function finishQuiz() {
  let correctCount = 0;
  const questions = getTadribatQuestions();
  const totalQ = questions.length;
  questions.forEach((q, idx) => {
    if (state.quizAnswers[idx] === q.answer) {
      correctCount++;
    }
  });

  state.quizScore = Math.round((correctCount / totalQ) * 100);
  state.quizIsFinished = true;

  // Auto record score for Student / Teacher recap
  const studentName = (state.auth.isLoggedIn && state.auth.userName) ? state.auth.userName : 'Siswa (Tamu)';
  const studentClass = (state.auth.isLoggedIn && state.auth.userClass) ? state.auth.userClass : 'Kelas X';
  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' + now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

  const scoreRecord = {
    id: 'SCORE_' + Date.now(),
    nama: studentName,
    kelas: studentClass,
    bab: state.tadribatBab || 1,
    versi: state.tadribatVersion || 1,
    skor: state.quizScore,
    poin: state.quizPoints,
    tanggal: dateStr
  };

  saveScoreToCloud(scoreRecord);

  if (state.quizScore >= 70) {
    SoundFx.playCorrect();
  } else {
    SoundFx.playWrong();
  }

  renderTabContent();
}

function resetQuiz() {
  state.quizCurrentIndex = 0;
  state.quizAnswers = [];
  state.quizScore = 0;
  state.quizPoints = 0;
  state.quizStreak = 0;
  state.quizMaxStreak = 0;
  state.quizIsFinished = false;
  renderTabContent();
}

function renderQuizResultHTML() {
  const isPassed = state.quizScore >= 70;
  const questions = getTadribatQuestions();
  const totalQ = questions.length;
  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (state.quizAnswers[idx] === q.answer) correctCount++;
  });

  const studentName = (state.auth.isLoggedIn && state.auth.userName) ? state.auth.userName : 'Siswa Tamu / Peserta';
  const studentClass = (state.auth.isLoggedIn && state.auth.userClass) ? state.auth.userClass : 'Kelas X MAN 1 Pontianak';
  const currentVerName = state.tadribatVersion === 1 ? 'Versi 1: Kosakata & Ungkapan' : 'Versi 2: Tata Bahasa & Qawaid';
  const otherVerNum = state.tadribatVersion === 1 ? 2 : 1;
  const otherVerName = state.tadribatVersion === 1 ? 'Versi 2 (Qawaid)' : 'Versi 1 (Mufradat)';

  return `
    <div class="space-y-8 animate-fadeIn max-w-4xl mx-auto text-center">
      
      <!-- KAHOOT VICTORY SUMMARY BANNER -->
      <div class="card-soft p-8 sm:p-12 space-y-8 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white rounded-3xl shadow-2xl border border-purple-800/40">
        
        <div class="inline-flex p-5 rounded-full ${isPassed ? 'bg-amber-400/20 text-amber-300 border-2 border-amber-400/40' : 'bg-blue-400/20 text-blue-300 border-2 border-blue-400/40'} text-6xl mb-2 animate-bounce">
          ${isPassed ? '🏆' : '🎯'}
        </div>

        <div class="space-y-2">
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ${isPassed ? 'Mumtaz! Hasil Belajar Luar Biasa!' : 'Tetap Semangat! Belajar Lagi!'}
          </h2>
          <p class="text-purple-200 text-sm sm:text-base">
            Kuis Interaktif Bahasa Arab Kelas X - Bab ${state.tadribatBab || 1} (${currentVerName})
          </p>
        </div>

        <!-- 3 STAT CARDS (POIN, SKOR %, STREAK) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-4">
          <div class="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
            <div class="text-xs font-bold text-purple-300 uppercase tracking-wider">Total Poin Quiz</div>
            <div class="text-3xl font-extrabold text-teal-300 mt-1">⭐ ${state.quizPoints.toLocaleString('id-ID')}</div>
          </div>

          <div class="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
            <div class="text-xs font-bold text-purple-300 uppercase tracking-wider">Nilai Akhir</div>
            <div class="text-3xl font-extrabold ${isPassed ? 'text-emerald-400' : 'text-amber-400'} mt-1">${state.quizScore} / 100</div>
          </div>

          <div class="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
            <div class="text-xs font-bold text-purple-300 uppercase tracking-wider">Max Streak</div>
            <div class="text-3xl font-extrabold text-amber-300 mt-1">🔥 x${state.quizMaxStreak}</div>
          </div>
        </div>

        <p class="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          <strong>${studentName}</strong> (${studentClass}) berhasil menjawab <strong class="text-white">${correctCount} dari ${totalQ} soal</strong> dengan benar pada ${currentVerName}.
        </p>

        <div class="flex flex-wrap justify-center gap-4 pt-4">
          <button onclick="resetQuiz()" class="px-6 py-3.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center gap-2 transform hover:scale-105">
            <span>🔄 Mainkan Lagi (${state.tadribatVersion === 1 ? 'Versi 1' : 'Versi 2'})</span>
          </button>

          <button onclick="switchTadribatVersion(${otherVerNum})" class="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center gap-2 transform hover:scale-105">
            <span>✨ Coba ${otherVerName}</span>
          </button>

          <button onclick="window.print()" class="px-6 py-3.5 bg-white/20 hover:bg-white/30 text-white font-bold rounded-2xl border border-white/30 shadow-lg transition-all flex items-center gap-2 transform hover:scale-105">
            <span>🖨️ Cetak Sertifikat Hasil</span>
          </button>
        </div>
      </div>

      <!-- PRINTABLE CERTIFICATE -->
      <div id="printable-certificate" class="hidden print:block p-8 bg-white text-slate-800 text-left space-y-6 border-4 border-[#2f6b78] rounded-3xl">
        <div class="text-center border-b-2 border-slate-200 pb-4">
          <h1 class="text-2xl font-bold text-[#2f6b78] uppercase">MAN 1 PONTIANAK</h1>
          <h2 class="text-lg font-semibold">Laporan Hasil Belajar Interaktif Bahasa Arab - Kelas X</h2>
          <p class="text-xs text-slate-500 font-mono">Kurikulum Merdeka / KMA Nomor 1503 Tahun 2025</p>
        </div>

        <div class="space-y-2 text-sm">
          <p><strong>Nama Siswa:</strong> <span class="text-base font-extrabold text-slate-900">${studentName}</span></p>
          <p><strong>Kelas:</strong> <span class="font-bold text-slate-800">${studentClass}</span></p>
          <p><strong>Mata Pelajaran:</strong> Bahasa Arab (اللغة العربية) - Bab ${state.tadribatBab || 1}</p>
          <p><strong>Paket Kuis:</strong> ${currentVerName}</p>
          <p><strong>Satuan Pendidikan:</strong> MAN 1 Pontianak</p>
          <p><strong>Jumlah Soal:</strong> ${totalQ} Soal Pilihan Ganda Interaktif</p>
          <p><strong>Tanggal Pengerjaan:</strong> ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p><strong>Jawaban Benar:</strong> ${correctCount} / ${totalQ} Soal</p>
          <p><strong>Total Poin Game:</strong> ${state.quizPoints.toLocaleString('id-ID')} Poin</p>
          <p><strong>Skor Capaian Akhir:</strong> <span class="text-xl font-bold text-emerald-700">${state.quizScore} / 100</span> (${isPassed ? 'Sangat Baik (Lulus)' : 'Cukup'})</p>
        </div>

        <div class="pt-12 flex justify-between text-xs text-slate-500">
          <div>
            <p>Mengetahui,</p>
            <p class="mt-12 font-bold text-slate-700">Guru Mata Pelajaran Bahasa Arab</p>
            <p class="font-extrabold text-slate-900">${ARABIC_DATA.info.teacher}</p>
          </div>
          <div class="text-right">
            <p>Pontianak, ${new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p class="mt-12 font-bold text-slate-700">MAN 1 Pontianak</p>
          </div>
        </div>
      </div>

    </div>
  `;
}

function attachTadribatEvents() {}

// ==========================================
// AUTHENTICATION & LOGIN RENDERERS & LOGIC
// ==========================================
function renderLoginHTML() {
  const isSiswaTab = state.authTab === 'siswa';
  const classesList = ARABIC_DATA.classes || ["X Merdeka 1", "X Merdeka 2", "X Merdeka 3", "X Merdeka 4", "X Merdeka 5", "X Merdeka 6", "X Merdeka 7"];

  return `
    <div class="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br from-[#163339] via-[#1f4750] to-[#2f6b78] flex items-center justify-center p-4 sm:p-6 animate-fadeIn selection:bg-teal-500 selection:text-white">
      <div class="max-w-md w-full space-y-6 text-center my-auto">
        
        <!-- Header Logo & Branding -->
        <div class="space-y-3">
          <div class="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md p-3.5 rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform">
            <img src="logo.webp" alt="Logo MAN 1 Pontianak" class="w-full h-full object-contain" />
          </div>
          <div>
            <div class="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-teal-200 border border-white/15 mb-2">
              MAN 1 PONTIANAK • KELAS X
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Media Pembelajaran Interaktif
            </h1>
            <p class="text-teal-200 text-xs sm:text-sm font-semibold mt-1">
              Bahasa Arab (اللغة العربية) — Kurikulum Merdeka
            </p>
          </div>
        </div>

        <!-- Floating Login Card Box -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 space-y-6 text-left border border-white/20">
          
          <!-- Tab Switcher (Siswa vs Guru) -->
          <div class="flex p-1 bg-slate-100 rounded-2xl border border-slate-200/60">
            <button onclick="switchAuthTab('siswa')" class="flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${isSiswaTab ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
              👨‍🎓 Login Siswa
            </button>
            <button onclick="switchAuthTab('guru')" class="flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${!isSiswaTab ? 'bg-white text-amber-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
              👨‍🏫 Login Guru
            </button>
          </div>

          ${isSiswaTab ? `
            <!-- FORM LOGIN SISWA -->
            <form id="form-login-siswa" onsubmit="handleSiswaLogin(event)" class="space-y-4">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">Nama Lengkap Siswa</label>
                <input type="text" id="siswa-nama" required placeholder="Contoh: Ahmad Ridho" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-teal-500 focus:outline-none"/>
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">Kelas (MAN 1 Pontianak)</label>
                <select id="siswa-kelas" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-teal-500 focus:outline-none">
                  ${classesList.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>

              <button type="submit" class="w-full py-3.5 bg-[#2f6b78] hover:bg-[#1f4750] text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform hover:scale-[1.01]">
                <span>🚀 Masuk Ke Portal Pembelajaran</span>
              </button>
            </form>
          ` : `
            <!-- FORM LOGIN GURU -->
            <form id="form-login-guru" onsubmit="handleGuruLogin(event)" class="space-y-4">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700 uppercase tracking-wider">PIN / Password Guru</label>
                <input type="password" id="guru-pin" required placeholder="Masukkan PIN Guru" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-amber-500 focus:outline-none"/>
              </div>

              <button type="submit" class="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform hover:scale-[1.01]">
                <span>👨‍🏫 Masuk Ke Dashboard Guru</span>
              </button>
            </form>
          `}

          <div class="pt-3 border-t border-slate-100 text-center text-xs text-slate-400 font-medium">
            🔒 Akses terlindungi. Silakan login sebagai Siswa atau Guru untuk memulai.
          </div>

        </div>

        <!-- Footer Info -->
        <div class="text-xs text-teal-100/70 font-medium space-y-1">
          <p>👨‍🏫 Guru Pengajar: <strong>${ARABIC_DATA.info.teacher}</strong></p>
          <p>© 2026 MAN 1 Pontianak — Hak Cipta Dilindungi</p>
        </div>

      </div>
    </div>
  `;
}

function switchAuthTab(tab) {
  state.authTab = tab;
  SoundFx.playClick();
  renderTabContent();
}

function handleSiswaLogin(e) {
  e.preventDefault();
  const nama = document.getElementById('siswa-nama').value.trim();
  const kelas = document.getElementById('siswa-kelas').value;

  if (!nama) {
    alert("Harap masukkan nama lengkap Anda.");
    return;
  }

  state.auth = {
    isLoggedIn: true,
    role: 'siswa',
    userName: nama,
    userClass: kelas,
    guruPin: state.auth.guruPin || 'guru123'
  };

  try {
    localStorage.setItem('arabic_app_auth', JSON.stringify(state.auth));
  } catch(err) {}

  SoundFx.playCorrect();
  updateUserHeaderUI();
  switchTab('home');
}

function handleGuruLogin(e) {
  e.preventDefault();
  const pin = document.getElementById('guru-pin').value.trim();
  const correctPin = state.auth.guruPin || 'guru123';

  if (pin !== correctPin) {
    SoundFx.playWrong();
    alert("⚠️ PIN Guru salah! Silakan coba lagi (Default PIN: guru123).");
    return;
  }

  state.auth = {
    isLoggedIn: true,
    role: 'guru',
    userName: ARABIC_DATA.info.teacher,
    userClass: 'MAN 1 Pontianak',
    guruPin: correctPin
  };

  try {
    localStorage.setItem('arabic_app_auth', JSON.stringify(state.auth));
  } catch(err) {}

  SoundFx.playCorrect();
  updateUserHeaderUI();
  switchTab('guru-dashboard');
}

function logoutUser() {
  if (confirm("Apakah Anda yakin ingin keluar dari akun?")) {
    state.auth.isLoggedIn = false;
    state.auth.role = null;
    state.auth.userName = '';
    state.auth.userClass = '';
    try {
      localStorage.removeItem('arabic_app_auth');
    } catch(e) {}
    state.currentTab = 'login';
    updateUserHeaderUI();
    renderTabContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ==========================================
// GURU DASHBOARD RENDERER & LOGIC
// ==========================================
function renderGuruDashboardHTML() {
  if (!state.auth.isLoggedIn || state.auth.role !== 'guru') {
    return `
      <div class="card-soft p-12 text-center max-w-xl mx-auto space-y-4">
        <div class="text-5xl">🔒</div>
        <h2 class="text-2xl font-bold text-slate-800">Akses Dibatasi</h2>
        <p class="text-sm text-slate-500">Halaman ini khusus untuk Pengajar / Guru Bahasa Arab MAN 1 Pontianak.</p>
        <button onclick="switchTab('login')" class="px-6 py-2.5 bg-[#2f6b78] text-white font-bold rounded-xl text-xs">
          🔑 Login Guru Sekarang
        </button>
      </div>
    `;
  }

  const scores = state.studentScores || [];

  // Filter Scores
  let filteredScores = scores.filter(s => {
    const matchClass = state.guruFilterClass === 'all' || s.kelas === state.guruFilterClass;
    const matchBab = state.guruFilterBab === 'all' || s.bab == state.guruFilterBab;
    const matchSearch = state.guruSearchName === '' || (s.nama && s.nama.toLowerCase().includes(state.guruSearchName.toLowerCase()));
    return matchClass && matchBab && matchSearch;
  });

  // Calculate Statistics
  const totalAttempts = scores.length;
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((acc, curr) => acc + (curr.skor || 0), 0) / scores.length) : 0;
  const uniqueStudents = new Set(scores.map(s => s.nama)).size;
  const classesList = ARABIC_DATA.classes || ["X Merdeka 1", "X Merdeka 2", "X Merdeka 3", "X Merdeka 4", "X Merdeka 5", "X Merdeka 6", "X Merdeka 7"];

  return `
    <div class="space-y-8 animate-fadeIn">
      
      <!-- Title Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 class="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span>👨‍🏫 Dashboard Guru Bahasa Arab</span>
            <span class="font-arabic text-3xl text-amber-700">لوحة التحكم</span>
          </h2>
          <p class="text-slate-600 text-sm mt-1">
            Pengajar: <strong>${ARABIC_DATA.info.teacher}</strong> — MAN 1 Pontianak
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button onclick="exportScoresToCSV()" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2">
            <span>📥 Export Rekap (Excel / CSV)</span>
          </button>
          <button onclick="window.print()" class="px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2">
            <span>🖨️ Cetak Laporan</span>
          </button>
        </div>
      </div>

      <!-- 3 STAT SUMMARY CARDS -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div class="card-soft p-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg rounded-2xl">
          <div class="text-xs font-bold uppercase tracking-wider text-amber-100">Total Kuis Selesai</div>
          <div class="text-4xl font-extrabold mt-2">${totalAttempts} <span class="text-lg font-normal">Kuis</span></div>
          <p class="text-xs text-amber-100/80 mt-1">Total pengerjaan kuis siswa</p>
        </div>

        <div class="card-soft p-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-lg rounded-2xl">
          <div class="text-xs font-bold uppercase tracking-wider text-teal-100">Rata-rata Nilai Siswa</div>
          <div class="text-4xl font-extrabold mt-2">${avgScore} <span class="text-lg font-normal">/ 100</span></div>
          <p class="text-xs text-teal-100/80 mt-1">Capaian rata-rata kuis</p>
        </div>

        <div class="card-soft p-6 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-lg rounded-2xl">
          <div class="text-xs font-bold uppercase tracking-wider text-indigo-100">Siswa Aktif Kuis</div>
          <div class="text-4xl font-extrabold mt-2">${uniqueStudents} <span class="text-lg font-normal">Siswa</span></div>
          <p class="text-xs text-indigo-100/80 mt-1">Siswa terdaftar pengerjaan</p>
        </div>
      </div>

      <!-- FILTERS & TABLE REKAP -->
      <div class="card-soft p-6 bg-white space-y-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>📊 Rekapitulasi Nilai Kuis Siswa</span>
          </h3>

          <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <!-- Filter Kelas -->
            <select id="guru-filter-class" class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option value="all" ${state.guruFilterClass === 'all' ? 'selected' : ''}>Semua Kelas</option>
              ${classesList.map(c => `<option value="${c}" ${state.guruFilterClass === c ? 'selected' : ''}>${c}</option>`).join('')}
            </select>

            <!-- Filter Bab -->
            <select id="guru-filter-bab" class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option value="all" ${state.guruFilterBab === 'all' ? 'selected' : ''}>Semua Bab</option>
              <option value="1" ${state.guruFilterBab == 1 ? 'selected' : ''}>Bab 1</option>
              <option value="2" ${state.guruFilterBab == 2 ? 'selected' : ''}>Bab 2</option>
              <option value="3" ${state.guruFilterBab == 3 ? 'selected' : ''}>Bab 3</option>
              <option value="4" ${state.guruFilterBab == 4 ? 'selected' : ''}>Bab 4</option>
              <option value="5" ${state.guruFilterBab == 5 ? 'selected' : ''}>Bab 5</option>
              <option value="6" ${state.guruFilterBab == 6 ? 'selected' : ''}>Bab 6</option>
            </select>

            <!-- Search Nama -->
            <input type="text" id="guru-search-name" value="${state.guruSearchName}" placeholder="Cari nama siswa..." class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 flex-1 min-w-[150px]"/>
          </div>
        </div>

        <!-- SCORES TABLE -->
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
          <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr class="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <th class="p-3.5">No</th>
                <th class="p-3.5">Nama Siswa</th>
                <th class="p-3.5">Kelas</th>
                <th class="p-3.5">Materi Kuis</th>
                <th class="p-3.5 text-center">Nilai Akhir</th>
                <th class="p-3.5 text-center">Total Poin</th>
                <th class="p-3.5">Tanggal Pengerjaan</th>
                <th class="p-3.5 text-center print:hidden">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${filteredScores.length === 0 ? `
                <tr>
                  <td colspan="8" class="p-8 text-center text-slate-500">Belum ada rekapitulasi nilai kuis yang sesuai dengan filter.</td>
                </tr>
              ` : filteredScores.map((s, idx) => {
                const isPassed = s.skor >= 70;
                const verText = s.versi === 1 ? 'Mufradat' : 'Qawaid';
                return `
                  <tr class="hover:bg-slate-50 transition-colors">
                    <td class="p-3.5 font-bold text-slate-500">${idx + 1}</td>
                    <td class="p-3.5 font-bold text-slate-900">${s.nama}</td>
                    <td class="p-3.5 text-slate-600 font-semibold">${s.kelas || 'Kelas X'}</td>
                    <td class="p-3.5">
                      <span class="px-2.5 py-1 bg-teal-50 text-teal-800 rounded-full text-xs font-semibold">Bab ${s.bab || 1} (${verText})</span>
                    </td>
                    <td class="p-3.5 text-center font-extrabold text-base ${isPassed ? 'text-emerald-600' : 'text-amber-600'}">
                      ${s.skor}
                    </td>
                    <td class="p-3.5 text-center font-bold text-teal-700">⭐ ${(s.poin || 0).toLocaleString('id-ID')}</td>
                    <td class="p-3.5 text-slate-500 text-xs">${s.tanggal || '-'}</td>
                    <td class="p-3.5 text-center print:hidden">
                      <button onclick="deleteScoreRecord('${s.id}')" class="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-xs font-bold transition-colors" title="Hapus Data">
                        🗑️
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-between pt-2 text-xs text-slate-500">
          <div>Menampilkan <strong>${filteredScores.length}</strong> dari total <strong>${scores.length}</strong> data nilai</div>
          <button onclick="clearAllScores()" class="text-rose-600 hover:text-rose-800 font-bold underline transition-colors">
            ⚠️ Hapus Semua Rekap Nilai
          </button>
        </div>
      </div>

      <!-- SETTING PIN GURU BOX -->
      <div class="card-soft p-6 bg-slate-900 text-white rounded-2xl space-y-4 print:hidden">
        <h3 class="text-base font-bold text-slate-100 flex items-center gap-2">
          <span>⚙️ Pengaturan PIN Akses Guru</span>
        </h3>
        <form onsubmit="changeGuruPin(event)" class="flex flex-col sm:flex-row items-center gap-3 max-w-xl">
          <input type="password" id="new-guru-pin" placeholder="Masukkan PIN Guru Baru" required class="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-amber-500 flex-1"/>
          <button type="submit" class="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all">
            💾 Simpan PIN Baru
          </button>
        </form>
      </div>

    </div>
  `;
}

function attachGuruDashboardEvents() {
  const classSelect = document.getElementById('guru-filter-class');
  const babSelect = document.getElementById('guru-filter-bab');
  const searchInput = document.getElementById('guru-search-name');

  if (classSelect) {
    classSelect.addEventListener('change', (e) => {
      state.guruFilterClass = e.target.value;
      renderTabContent();
    });
  }
  if (babSelect) {
    babSelect.addEventListener('change', (e) => {
      state.guruFilterBab = e.target.value;
      renderTabContent();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.guruSearchName = e.target.value;
      renderTabContent();
    });
  }
}

function exportScoresToCSV() {
  const scores = state.studentScores || [];
  if (scores.length === 0) {
    alert("Belum ada data nilai kuis untuk diexport.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,No,Nama Siswa,Kelas,Bab,Versi Kuis,Nilai (100),Total Poin,Tanggal Pengerjaan\n";
  scores.forEach((s, idx) => {
    const verText = s.versi === 1 ? "Mufradat" : "Qawaid";
    const row = [
      idx + 1,
      `"${(s.nama || '').replace(/"/g, '""')}"`,
      `"${s.kelas || ''}"`,
      `Bab ${s.bab || 1}`,
      `"${verText}"`,
      s.skor || 0,
      s.poin || 0,
      `"${s.tanggal || ''}"`
    ].join(",");
    csvContent += row + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Rekap_Nilai_Bahasa_Arab_MAN1Pontianak_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function deleteScoreRecord(id) {
  if (confirm("Apakah Anda yakin ingin menghapus data nilai siswa ini?")) {
    state.studentScores = state.studentScores.filter(s => s.id !== id);
    try {
      localStorage.setItem('arabic_app_scores', JSON.stringify(state.studentScores));
    } catch(e) {}

    if (db) {
      try {
        db.collection("student_scores").doc(id).delete();
      } catch(e) {}
    }
    renderTabContent();
  }
}

function clearAllScores() {
  if (confirm("⚠️ APAKAH ANDA YAKIN INGIN MENGHAPUS SELURUH REKAP NILAI SISWA? Tindakan ini tidak dapat dibatalkan!")) {
    const oldScores = [...state.studentScores];
    state.studentScores = [];
    try {
      localStorage.setItem('arabic_app_scores', JSON.stringify([]));
    } catch(e) {}

    if (db) {
      oldScores.forEach(s => {
        try { db.collection("student_scores").doc(s.id).delete(); } catch(e) {}
      });
    }
    renderTabContent();
  }
}

function changeGuruPin(e) {
  e.preventDefault();
  const newPin = document.getElementById('new-guru-pin').value.trim();
  if (!newPin) return;

  state.auth.guruPin = newPin;
  try {
    localStorage.setItem('arabic_app_auth', JSON.stringify(state.auth));
  } catch(err) {}

  alert("✅ PIN Guru berhasil diperbarui!");
  document.getElementById('new-guru-pin').value = '';
}

