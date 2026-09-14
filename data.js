// Data Content for Media Pembelajaran Interaktif Bahasa Arab Kelas X - MAN 1 Pontianak

const ARABIC_DATA = {
  info: {
    school: "MAN 1 Pontianak",
    subject: "Bahasa Arab (اللغة العربية)",
    grade: "Kelas X (العاشر)",
    teacher: "Yosi, S. Ag, M. Pd.",
    curriculum: "Kurikulum Merdeka / KMA Nomor 1503 Tahun 2025"
  },

  topics: [
    { id: "taaruf", title: "التحية والتعارف", latin: "At-Tahiyyah wat-Ta'aruf (Greetings & Self Intro)" },
    { id: "usrah", title: "الأسرة والبيت", latin: "Al-Usrah wal-Bait (Family & Home)" },
    { id: "madrasah", title: "المدرسة والمرافق", latin: "Al-Madrasah wal-Marafiq (School & Facilities)" }
  ],

  // 1. MUFRODAT (المفردات)
  mufrodat: [
    // Bab 1: At-Tahiyyah wat-Ta'aruf (التحية والتعارف)
    { id: 1, topicId: "taaruf", arabic: "التَّعَارُفُ", latin: "At-Ta'āruf", indonesian: "Perkenalan", type: "isim", example: "التَّعَارُفُ أَمْرٌ مُهِمٌّ بَيْنَ الطُّلَّابِ" },
    { id: 2, topicId: "taaruf", arabic: "أَهْلًا وَسَهْلًا", latin: "Ahlan wa Sahlan", indonesian: "Selamat Datang", type: "harf", example: "أَهْلًا وَسَهْلًا بِكُمْ فِي مَدْرَسَتِنَا" },
    { id: 3, topicId: "taaruf", arabic: "أَهْلًا بِكَ", latin: "Ahlan Bika", indonesian: "Selamat Datang Juga (Balasan)", type: "harf", example: "أَهْلًا بِكَ يَا صَدِيْقِي" },
    { id: 4, topicId: "taaruf", arabic: "إِلَى اللِّقَاءِ", latin: "Ilal Liqā'", indonesian: "Sampai Jumpa Lagi", type: "harf", example: "إِلَى اللِّقَاءِ فِي الغَدِ" },
    { id: 5, topicId: "taaruf", arabic: "مَعَ السَّلَامَةِ", latin: "Ma'as Salāmah", indonesian: "Selamat Jalan / Semoga Selamat", type: "harf", example: "مَعَ السَّلَامَةِ، فِي حِفْظِ اللهِ" },
    { id: 6, topicId: "taaruf", arabic: "صَبَاحُ الْخَيْرِ", latin: "Ṣabāḥul Khair", indonesian: "Selamat Pagi", type: "harf", example: "صَبَاحُ الْخَيْرِ يَا أُسْتَاذُ" },
    { id: 7, topicId: "taaruf", arabic: "صَبَاحُ النُّوْرِ", latin: "Ṣabāḥun Nūr", indonesian: "Selamat Pagi (Balasan)", type: "harf", example: "صَبَاحُ النُّوْرِ يَا صَدِيْقِي" },
    { id: 8, topicId: "taaruf", arabic: "مَسَاءُ الْخَيْرِ", latin: "Masā'ul Khair", indonesian: "Selamat Sore", type: "harf", example: "مَسَاءُ الْخَيْرِ يَا صَدِيْقِي" },
    { id: 9, topicId: "taaruf", arabic: "مَسَاءُ النُّوْرِ", latin: "Masā'un Nūr", indonesian: "Selamat Sore (Balasan)", type: "harf", example: "مَسَاءُ النُّوْرِ يَا أُسْتَاذُ" },
    { id: 10, topicId: "taaruf", arabic: "أَنَا", latin: "Anā", indonesian: "Saya", type: "isim", example: "أَنَا طَالِبٌ فِي MAN 1 Pontianak" },
    { id: 11, topicId: "taaruf", arabic: "اسْمِي", latin: "Ismī", indonesian: "Nama Saya", type: "isim", example: "اسْمِي أَحْمَد" },
    { id: 12, topicId: "taaruf", arabic: "أَنْتَ", latin: "Anta", indonesian: "Kamu (Laki-laki)", type: "isim", example: "أَنْتَ طَالِبٌ ذَكِيٌّ" },
    { id: 13, topicId: "taaruf", arabic: "اسْمُكَ", latin: "Ismuka", indonesian: "Namamu (Laki-laki)", type: "isim", example: "مَا اسْمُكَ؟" },
    { id: 14, topicId: "taaruf", arabic: "أَنْتِ", latin: "Anti", indonesian: "Kamu (Perempuan)", type: "isim", example: "أَنْتِ طَالِبَةٌ ذَكِيَّةٌ" },
    { id: 15, topicId: "taaruf", arabic: "اسْمُكِ", latin: "Ismukī", indonesian: "Namamu (Perempuan)", type: "isim", example: "مَا اسْمُكِ؟" },
    { id: 16, topicId: "taaruf", arabic: "هُوَ", latin: "Huwa", indonesian: "Dia (Laki-laki)", type: "isim", example: "هُوَ أُسْتَاذٌ مَاهِرٌ" },
    { id: 17, topicId: "taaruf", arabic: "اسْمُهُ", latin: "Ismuhū", indonesian: "Namanya (Laki-laki)", type: "isim", example: "اسْمُهُ عُثْمَان" },
    { id: 18, topicId: "taaruf", arabic: "هِيَ", latin: "Hiya", indonesian: "Dia (Perempuan)", type: "isim", example: "هِيَ أُسْتَاذَةٌ مَاهِرَةٌ" },
    { id: 19, topicId: "taaruf", arabic: "اسْمُهَا", latin: "Ismuhā", indonesian: "Namanya (Perempuan)", type: "isim", example: "اسْمُهَا فَاطِمَة" },
    { id: 20, topicId: "taaruf", arabic: "طَالِبٌ", latin: "Ṭālibun", indonesian: "Siswa (Laki-laki)", type: "isim", example: "أَنَا طَالِبٌ فِي الصَّفِّ العَاشِرِ" },
    { id: 21, topicId: "taaruf", arabic: "طَالِبَةٌ", latin: "Ṭālibatun", indonesian: "Siswi (Perempuan)", type: "isim", example: "عَائِشَةُ طَالِبَةٌ ذَكِيَّةٌ" },
    { id: 22, topicId: "taaruf", arabic: "أُسْتَاذٌ", latin: "Ustāżun", indonesian: "Guru (Laki-laki)", type: "isim", example: "هَذَا أُسْتَاذٌ مَاهِرٌ" },
    { id: 23, topicId: "taaruf", arabic: "أُسْتَاذَةٌ", latin: "Ustāżatun", indonesian: "Guru (Perempuan)", type: "isim", example: "هَذِهِ أُسْتَاذَةُ اللُّغَةِ العَرَبِيَّةِ" },
    { id: 24, topicId: "taaruf", arabic: "الْمَدْرَسَةُ", latin: "Al-Madrasatu", indonesian: "Sekolah", type: "isim", example: "نَذْهَبُ إِلَى الْمَدْرَسَةِ كُلَّ صَبَاحٍ" },
    { id: 25, topicId: "taaruf", arabic: "الْفَصْلُ", latin: "Al-Faṣlu", indonesian: "Ruang Kelas", type: "isim", example: "نَجْلِسُ فِي الْفَصْلِ لِلدِّرَاسَةِ" },
    { id: 26, topicId: "taaruf", arabic: "عُنْوَانٌ", latin: "'Unwānun", indonesian: "Alamat", type: "isim", example: "عُنْوَانِي فِي شَارِعِ إِمَام بُونْجُوْل" },
    { id: 27, topicId: "taaruf", arabic: "عُنْوَانِي", latin: "'Unwānī", indonesian: "Alamat Saya", type: "isim", example: "عُنْوَانِي فِي شَارِعِ أَهْمَد يَانِي" },
    { id: 28, topicId: "taaruf", arabic: "شَارِعٌ", latin: "Syāri'un", indonesian: "Jalan", type: "isim", example: "أَسْكُنُ فِي شَارِعِ أَهْمَد يَانِي" },
    { id: 29, topicId: "taaruf", arabic: "أَسْكُنُ", latin: "Askunu", indonesian: "Saya Tinggal", type: "fiil", example: "أَسْكُنُ فِي مَدِيْنَةِ بُونْتِيَانَاك" },
    { id: 30, topicId: "taaruf", arabic: "مَدْرَسَةٌ حُكُوْمِيَّةٌ", latin: "Madrasatun Hukūmiyyah", indonesian: "Sekolah Negeri", type: "isim", example: "أَدْرُسُ فِي مَدْرَسَةٍ حُكُوْمِيَّةٍ" },
    { id: 31, topicId: "taaruf", arabic: "مَدْرَسَةٌ أَهْلِيَّةٌ", latin: "Madrasatun Ahliyyah", indonesian: "Sekolah Swasta", type: "isim", example: "هَذِهِ مَدْرَسَةٌ أَهْلِيَّةٌ جَمِيْلَةٌ" },
    { id: 32, topicId: "taaruf", arabic: "بِطَاقَةٌ شَخْصِيَّةٌ", latin: "Biṭāqatun Syakhṣiyyah", indonesian: "Kartu Pelajar / KTP", type: "isim", example: "هَذِهِ بِطَاقَتِي الشَّخْصِيَّةُ" },
    { id: 33, topicId: "taaruf", arabic: "تَارِيْخُ الْمِيْلَادِ", latin: "Tārīkhul Mīlād", indonesian: "Tanggal Lahir", type: "isim", example: "تَارِيْخُ مِيْلَادِي فِي 15 مَايُو" },
    { id: 34, topicId: "taaruf", arabic: "هَوَايَةٌ", latin: "Hiwāyatun", indonesian: "Hobi", type: "isim", example: "هَوَايَتِي القِرَاءَةُ" },

    // Bab 2: Al-Usrah wal-Bait (الأسرة والبيت)
    // A. Anggota Keluarga (أَعْضَاءُ الأُسْرَةِ)
    { id: 101, topicId: "usrah", arabic: "أُسْرَةٌ", latin: "Usratun", indonesian: "Keluarga", type: "isim", example: "أُسْرَتِي سَعِيْدَةٌ وَمُتَحَابَّةٌ" },
    { id: 102, topicId: "usrah", arabic: "أَبٌ", latin: "Abun", indonesian: "Ayah", type: "isim", example: "أَبِي يَعْمَلُ فِي الْمَكْتَبِ" },
    { id: 103, topicId: "usrah", arabic: "أُمٌّ", latin: "Ummun", indonesian: "Ibu", type: "isim", example: "أُمِّي تُعِدُّ الطَّعَامَ فِي الْمَطْبَخِ" },
    { id: 104, topicId: "usrah", arabic: "جَدٌّ", latin: "Jaddun", indonesian: "Kakek", type: "isim", example: "جَدِّي رَجُلٌ كَبِيْرٌ وَطَيِّبٌ" },
    { id: 105, topicId: "usrah", arabic: "جَدَّةٌ", latin: "Jaddatun", indonesian: "Nenek", type: "isim", example: "جَدَّتِي تُحِبُّ الأَحْفَادَ" },
    { id: 106, topicId: "usrah", arabic: "عَمٌّ", latin: "‘Ammun", indonesian: "Paman (Saudara Ayah)", type: "isim", example: "عَمِّي يَسْكُنُ فِي قَرِيَبَةٍ مِنَّا" },
    { id: 107, topicId: "usrah", arabic: "عَمَّةٌ", latin: "‘Ammatun", indonesian: "Bibi (Saudara Perempuan Ayah)", type: "isim", example: "عَمَّتِي مُدَرِّسَةٌ مَاهِرَةٌ" },
    { id: 108, topicId: "usrah", arabic: "خَالٌ", latin: "Khālun", indonesian: "Paman (Saudara Ibu)", type: "isim", example: "خَالِي يَبِيْعُ الفَوَاكِهَ فِي السُّوْقِ" },
    { id: 109, topicId: "usrah", arabic: "خَالَةٌ", latin: "Khālatun", indonesian: "Bibi (Saudara Perempuan Ibu)", type: "isim", example: "خَالَتِي تَزُوْرُنَا فِي العُطْلَةِ" },
    { id: 110, topicId: "usrah", arabic: "أَخٌ", latin: "Akhun", indonesian: "Saudara Laki-laki", type: "isim", example: "أَخِي يَدْرُسُ فِي المَدْرَسَةِ الثَّانَوِيَّةِ" },
    { id: 111, topicId: "usrah", arabic: "أُخْتٌ", latin: "Ukhtun", indonesian: "Saudara Perempuan", type: "isim", example: "أُخْتِي تُسَاعِدُ أُمِّي فِي البَيْتِ" },
    { id: 112, topicId: "usrah", arabic: "إِبْنُ عَمٍّ", latin: "Iblu ‘Ammin", indonesian: "Sepupu Laki-laki (dari Paman Ayah)", type: "isim", example: "إِبْنُ عَمِّي يَلْعَبُ مَعِي فِي الحَدِيْقَةِ" },
    { id: 113, topicId: "usrah", arabic: "بِنْتُ عَمٍّ", latin: "Bintu ‘Ammin", indonesian: "Sepupu Perempuan (dari Paman Ayah)", type: "isim", example: "بِنْتُ عَمِّي طَالِبَةٌ فِي الصَّفِّ العاشِرِ" },
    { id: 114, topicId: "usrah", arabic: "إِبْنُ خَالٍ", latin: "Iblu Khālin", indonesian: "Sepupu Laki-laki (dari Paman Ibu)", type: "isim", example: "إِبْنُ خَالِي يَسْكُنُ فِي مَدِيْنَةِ سُوْرَابَايَا" },
    { id: 115, topicId: "usrah", arabic: "بِنْتُ خَالٍ", latin: "Bintu Khālin", indonesian: "Sepupu Perempuan (dari Paman Ibu)", type: "isim", example: "بِنْتُ خَالِي تَقْرَأُ الكِتَابَ فِي غُرْفَةِ الإِسْتِقْبَالِ" },

    // B. Bagian-Bagian Rumah (أَجْزَاءُ الْبَيْتِ)
    { id: 116, topicId: "usrah", arabic: "الْبَيْتُ", latin: "Al-Baitu", indonesian: "Rumah", type: "isim", example: "بَيْتِي جَمِيْلٌ وَنَظِيْفٌ" },
    { id: 117, topicId: "usrah", arabic: "غُرْفَةُ الإِسْتِقْبَالِ", latin: "Gurfatul Istiqbāl", indonesian: "Ruang Tamu", type: "isim", example: "نَسْتَقْبِلُ الضُّيُوْفَ فِي غُرْفَةِ الإِسْتِقْبَالِ" },
    { id: 118, topicId: "usrah", arabic: "غُرْفَةُ الْجُلُوْسِ", latin: "Gurfatul Julūs", indonesian: "Ruang Keluarga / Ruang Santai", type: "isim", example: "نَجْلِسُ مَعَ الأُسْرَةِ فِي غُرْفَةِ الجُلُوْسِ" },
    { id: 119, topicId: "usrah", arabic: "غُرْفَةُ النَّوْمِ", latin: "Gurfatun Naum", indonesian: "Kamar Tidur", type: "isim", example: "أَنَامُ فِي غُرْفَةِ النَّوْمِ فِي اللَّيْلِ" },
    { id: 200, topicId: "usrah", arabic: "مَطْبَخٌ", latin: "Maṭbakhun", indonesian: "Dapur", type: "isim", example: "أُمِّي تُطْعِمُنَا مِنَ المَطْبَخِ" },
    { id: 201, topicId: "usrah", arabic: "حَمَّامٌ", latin: "Ḥammāmun", indonesian: "Kamar Mandi", type: "isim", example: "أَغْتَسِلُ فِي الحَمَّامِ كُلَّ صَبَاحٍ" },
    { id: 202, topicId: "usrah", arabic: "سَرِيْرٌ", latin: "Sarīrun", indonesian: "Ranjang / Tempat Tidur", type: "isim", example: "أَنَامُ عَلَى السَّرِيْرِ المُرِيْحِ" },
    { id: 203, topicId: "usrah", arabic: "شُبَّاكٌ", latin: "Syubbākun", indonesian: "Jendela", type: "isim", example: "أَفْتَحُ الشُّبَّاكِ فِي الصَّبَاحِ" },
    { id: 204, topicId: "usrah", arabic: "حَدِيْقَةٌ جَمِيْلَةٌ", latin: "Ḥadīqatun Jamīlah", indonesian: "Taman yang Indah", type: "isim", example: "أَمَامَ بَيْتِي حَدِيْقَةٌ جَمِيْلَةٌ" },
    { id: 205, topicId: "usrah", arabic: "شَقَّةٌ", latin: "Syaqqatun", indonesian: "Apartemen / Rumah Susun", type: "isim", example: "عَمِّي يَسْكُنُ فِي شَقَّةٍ جَمِيْلَةٍ" },

    // C. Perabot & Peralatan Rumah (الأَثَاثُ وَالأَجْهِزَةُ)
    { id: 206, topicId: "usrah", arabic: "كُرْسِيٌّ", latin: "Kursiyyun", indonesian: "Kursi", type: "isim", example: "أَجْلِسُ عَلَى الكُرْسِيِّ" },
    { id: 207, topicId: "usrah", arabic: "طَاوِلَةٌ", latin: "Ṭāwilatun", indonesian: "Meja", type: "isim", example: "الْكِتَابُ عَلَى الطَّاوِلَةِ" },
    { id: 208, topicId: "usrah", arabic: "خِزَانَةٌ", latin: "Khizānatun", indonesian: "Lemari", type: "isim", example: "أَضَعُ المَلَابِسَ فِي الخِزَانَةِ" },
    { id: 209, topicId: "usrah", arabic: "مِصْبَاحٌ صَغِيْرٌ", latin: "Miṣbāḥun Ṣagīrun", indonesian: "Lampu Kecil / Lampu Meja", type: "isim", example: "أُشْعِلُ المِصْبَاحَ الصَّغِيْرَ فِي غُرْفَةِ النَّوْمِ" },
    { id: 210, topicId: "usrah", arabic: "جِهَازُ كُمْبِيُوْتَر قَدِيْمٌ", latin: "Jihāzu Kambiyūtar Qadīmun", indonesian: "Perangkat Komputer Lama", type: "isim", example: "هَذَا جِهَازُ كُمْبِيُوْتَر قَدِيْمٌ" },
    { id: 211, topicId: "usrah", arabic: "جِهَازُ تَلْفِزِيُوْن جَدِيْدٌ", latin: "Jihāzu Tilfiziyūn Jadīdun", indonesian: "Perangkat Televisi Baru", type: "isim", example: "نُشَاهِدُ جِهَازَ تَلْفِزِيُوْن جَدِيْدٍ فِي غُرْفَةِ الجُلُوْسِ" },

    // D. Kata Kerja Terkait Rumah & Keluarga (الأَفْعَالُ)
    { id: 212, topicId: "usrah", arabic: "يَسْكُنُ - سَكَنَ", latin: "Yaskunu - Sakana", indonesian: "Tinggal / Menghuni", type: "fiil", example: "أَسْكُنُ مَعَ أُسْرَتِي فِي بُونْتِيَانَاك" },
    { id: 213, topicId: "usrah", arabic: "يُسَاعِدُ - سَاعَدَ", latin: "Yusā'idu - Sā'ada", indonesian: "Membantu", type: "fiil", example: "أُسَاعِدُ أَبِي فِي الحَدِيْقَةِ" },
    { id: 214, topicId: "usrah", arabic: "يَشَاهِدُ - شَاهَدَ", latin: "Yusyāhidu - Syāhada", indonesian: "Menonton", type: "fiil", example: "أُشَاهِدُ التَّلْفَازَ مَعَ أُخْتِي" },
    { id: 215, topicId: "usrah", arabic: "يَنَامُ - نَامَ", latin: "Yanāmu - Nāma", indonesian: "Tidur", type: "fiil", example: "يَنَامُ أَنَسٌ فِي غُرْفَةِ النَّوْمِ" },

    // Bab 3: Al-Madrasah wal-Marafiq (المدرسة والمرافق - Sekolah, Fasilitas & Mata Pelajaran)
    // A. Fasilitas & Ruangan Sekolah (المَرَافِقُ المَدْرَسِيَّةُ)
    { id: 301, topicId: "madrasah", arabic: "مَسْجِدٌ", latin: "Masjidun", indonesian: "Masjid / Musholla Sekolah", type: "isim", example: "نُصَلِّي الظُّهْرَ فِي مَسْجِدِ الْمَدْرَسَةِ" },
    { id: 302, topicId: "madrasah", arabic: "مَكْتَبَةٌ", latin: "Maktabatun", indonesian: "Perpustakaan", type: "isim", example: "نَقْرَأُ الْكُتُبَ وَالْمَجَلَّاتِ فِي الْمَكْتَبَةِ" },
    { id: 303, topicId: "madrasah", arabic: "مَقْصَفٌ", latin: "Maqṣafun", indonesian: "Kantin Sekolah", type: "isim", example: "نَشْتَرِي الأَطْعِمَةَ وَالْمَشْرُوْبَاتِ فِي الْمَقْصَفِ" },
    { id: 304, topicId: "madrasah", arabic: "فَصْلٌ - فُصُوْلٌ دِرَاسِيَّةٌ", latin: "Faṣlun - Fuṣūlun Dirāsiyyah", indonesian: "Ruang Kelas / Kelas-Kelas Belajar", type: "isim", example: "الْمَدْرَسَةُ فِيْهَا فُصُوْلٌ دِرَاسِيَّةٌ كَثِيْرَةٌ" },
    { id: 305, topicId: "madrasah", arabic: "مَكْتَبُ الْمُدِيْرِ", latin: "Maktabul Mudīri", indonesian: "Ruang Kepala Sekolah", type: "isim", example: "مَكْتَبُ الْمُدِيْرِ نَظِيْفٌ وَمُنَظَّمٌ" },
    { id: 306, topicId: "madrasah", arabic: "هَيْئَةُ التَّدْرِيْسِ", latin: "Hai'atut Tadrīsi", indonesian: "Dewan Guru / Ruang Guru", type: "isim", example: "يَجْتَمِعُ الأَسَاتِذَةُ فِي غُرْفَةِ هَيْئَةِ التَّدْرِيْسِ" },
    
    // B. Laboratorium, Gedung & Fasilitas Penunjang
    { id: 307, topicId: "madrasah", arabic: "مَعْمَلُ اللُّغَةِ", latin: "Ma'malul Lugah", indonesian: "Laboratorium Bahasa", type: "isim", example: "نَسْتَمِعُ إِلَى التَّسْجِيْلَاتِ فِي مَعْمَلِ اللُّغَةِ" },
    { id: 308, topicId: "madrasah", arabic: "مَعْمَلُ فِيْزِيَاءَ", latin: "Ma'malu Fīziyā'a", indonesian: "Laboratorium Fisika", type: "isim", example: "نَقُوْمُ بِالتَّجْرِبَةِ فِي مَعْمَلِ الْفِيْزِيَاءِ" },
    { id: 309, topicId: "madrasah", arabic: "مَعْمَلُ كِيْمِيَاءَ", latin: "Ma'malu Kīmiyā'a", indonesian: "Laboratorium Kimia", type: "isim", example: "نَدْرُسُ التَّفَاعُلَاتِ فِي مَعْمَلِ الْكِيْمِيَاءِ" },
    { id: 310, topicId: "madrasah", arabic: "مَلْعَبٌ", latin: "Mal'abun", indonesian: "Lapangan Olahraga", type: "isim", example: "نَلْعَبُ كُرَةَ السَّلَّةِ فِي الْمَلْعَبِ" },
    { id: 311, topicId: "madrasah", arabic: "التَّوْجِيْهُ وَالْإِرْشَادُ", latin: "At-Taujīhu wal-Irsyādu", indonesian: "Ruang Bimbingan Konseling (BK)", type: "isim", example: "تَذْهَبُ الطَّالِبَةُ إِلَى مَكْتَبِ التَّوْجِيْهِ وَالْإِرْشَادِ" },
    { id: 312, topicId: "madrasah", arabic: "قَاعَةٌ", latin: "Qā'atun", indonesian: "Aula / Gedung Pertemuan", type: "isim", example: "نَقِيْمُ الحَفْلَةَ فِي قَاعَةِ المَدْرَسَةِ" },
    { id: 313, topicId: "madrasah", arabic: "حَدِيْقَةٌ", latin: "Ḥadīqatun", indonesian: "Taman Sekolah", type: "isim", example: "فِي حَدِيْقَةِ الْمَدْرَسَةِ أَزْهَارٌ جَمِيْلَةٌ" },
    { id: 314, topicId: "madrasah", arabic: "مَكْتَبُ الْإِدَارَةِ", latin: "Maktabul Idārah", indonesian: "Ruang Tata Usaha (TU)", type: "isim", example: "نَدْفَعُ الرُّسُوْمَ فِي مَكْتَبِ الْإِدَارَةِ" },
    { id: 315, topicId: "madrasah", arabic: "مُدِيْرُ الْمَدْرَسَةِ", latin: "Mudīrul Madrasah", indonesian: "Kepala Sekolah", type: "isim", example: "مُدِيْرُ الْمَدْرَسَةِ يُلْقِي الْكَلِمَةَ فِي الاِجْتِمَاعِ" },
    { id: 316, topicId: "madrasah", arabic: "مُوَظَّفٌ إِدَارِيٌّ", latin: "Muwaẓẓafun Idāriyyun", indonesian: "Staf Tata Usaha / Admin", type: "isim", example: "المُوَظَّفُ الإِدَارِيُّ يَعْمَلُ فِي الْمَكْتَبِ" },
    { id: 317, topicId: "madrasah", arabic: "مَوْقِفٌ", latin: "Mauqifun", indonesian: "Tempat Parkir / Parkiran", type: "isim", example: "نَضَعُ الدَّرَّاجَاتِ فِي مَوْقِفِ الْمَدْرَسَةِ" },
    { id: 318, topicId: "madrasah", arabic: "مِرْحَاضٌ", latin: "Mirḥāḍun", indonesian: "WC / Kamar Mandi Sekolah", type: "isim", example: "مِرْحَاضُ الْمَدْرَسَةِ نَظِيْفٌ" },
    { id: 319, topicId: "madrasah", arabic: "مُدَرِّسٌ - مُدَرِّسَةٌ", latin: "Mudarrisun - Mudarrisatun", indonesian: "Guru Laki-laki / Guru Perempuan", type: "isim", example: "الْمُدَرِّسُ يَشْرَحُ الدَّرْسَ فِي الْفَصْلِ" },
    { id: 320, topicId: "madrasah", arabic: "بَوَّابٌ", latin: "Bawwābun", indonesian: "Satpam Sekolah / Penjaga Gerbang", type: "isim", example: "الْبَوَّابُ يَحْرُسُ بَوَّابَةَ الْمَدْرَسَةِ" },
    { id: 321, topicId: "madrasah", arabic: "بَوَّابَةُ الْمَدْرَسَةِ", latin: "Bawwābatul Madrasah", indonesian: "Gerbang Utama Sekolah", type: "isim", example: "نَدْخُلُ الْمَدْرَسَةَ مِنْ بَوَّابَةِ الْمَدْرَسَةِ" },

    // C. Mata Pelajaran (المَوَادُّ الدِّرَاسِيَّةُ)
    { id: 322, topicId: "madrasah", arabic: "رِيَاضِيَّات", latin: "Riyāḍiyyāt", indonesian: "Matematika", type: "isim", example: "نَدْرُسُ الرِّيَاضِيَّاتِ فِي يَوْمِ الإِثْنَيْنِ" },
    { id: 323, topicId: "madrasah", arabic: "جُغْرَافِيَا", latin: "Jugrāfiyā", indonesian: "Geografi", type: "isim", example: "نَتَعَلَّمُ الخَرِيْطَةَ فِي دَرْسِ الجُغْرَافِيَا" },
    { id: 324, topicId: "madrasah", arabic: "اللُّغَةُ الْإِنْجِلِيْزِيَّةُ", latin: "Al-Lugatul Injilīziyyah", indonesian: "Bahasa Inggris", type: "isim", example: "اللُّغَةُ الإِنْجِلِيْزِيَّةُ لُغَةٌ دَوْلِيَّةٌ" },
    { id: 325, topicId: "madrasah", arabic: "التَّارِيْخُ", latin: "At-Tārīkhu", indonesian: "Sejarah / SKI", type: "isim", example: "نَقْرَأُ قِصَصَ المَاضِي فِي دَرْسِ التَّارِيْخِ" },
    { id: 326, topicId: "madrasah", arabic: "الْقُرْآنُ وَالْحَدِيْثُ", latin: "Al-Qur'ānu wal-Ḥadītsu", indonesian: "Al-Qur'an Hadis", type: "isim", example: "نَحْفَظُ الآيَاتِ فِي دَرْسِ القُرْآنِ وَالحَدِيْثِ" },
    { id: 327, topicId: "madrasah", arabic: "الْفِقْهُ", latin: "Al-Fiqhu", indonesian: "Fikih (Hukum Islam)", type: "isim", example: "نَتَعَلَّمُ أَحْكامَ الصَّلَاةِ فِي دَرْسِ الفِقْهِ" }
  ],

  // 2. MAHARAH KALAM (مهارة الكلام)
  kalam: [
    {
      id: "dialog1",
      title: "الكلام (١) : التَّعْرِيْفُ بِالنَّفْسِ",
      latinTitle: "Percakapan 1: Memperkenalkan Diri Sendiri",
      topicId: "taaruf",
      lines: [
        { speaker: "أَحْمَدُ", arabic: "السَّلَامُ عَلَيْكُمْ", latin: "Assalāmu 'alaikum", translation: "Semoga keselamatan terlimpah kepadamu." },
        { speaker: "أَغُوْسُ", arabic: "وَعَلَيْكُمُ السَّلَامُ", latin: "Wa'alaikumussalām", translation: "Dan semoga keselamatan terlimpah kepadamu juga." },
        { speaker: "أَحْمَدُ", arabic: "اسْمِي أَحْمَدُ، وَمَا اسْمُكَ؟", latin: "Ismī Aḥmad, wa mā smuka?", translation: "Nama saya Ahmad, dan siapa namamu?" },
        { speaker: "أَغُوْسُ", arabic: "اسْمِي أَغُوْسُ، مِنْ أَيْن أنتَ؟", latin: "Ismī Agūs, min aina anta?", translation: "Nama saya Agus, dari mana kamu berasal?" },
        { speaker: "أَحْمَدُ", arabic: "أَنَا مِنْ جُوْمْبَانْج، وَأَنْتَ؟", latin: "Anā min Jombang, wa anta?", translation: "Saya dari Jombang, dan kamu?" },
        { speaker: "أَغُوْسُ", arabic: "أَنَا مِنْ سُوْرَابَايَا", latin: "Anā min Surabāyā", translation: "Saya dari Surabaya." },
        { speaker: "أَحْمَدُ", arabic: "أَهْلًا وَسَهْلًا", latin: "Ahlan wa sahlan", translation: "Selamat datang." },
        { speaker: "أَغُوْسُ", arabic: "أَهْلًا بِكَ", latin: "Ahlan bika", translation: "Selamat datang juga." },
        { speaker: "أَحْمَدُ", arabic: "إِلَى اللِّقَاءِ", latin: "Ilal liqā'", translation: "Sampai jumpa lagi." },
        { speaker: "أَغُوْسُ", arabic: "مَعَ السَّلَامَةِ", latin: "Ma'as salāmah", translation: "Semoga selamat." }
      ]
    },
    {
      id: "dialog2",
      title: "الكلام (٢) : التَّعْرِيْفُ بِالْغَيْرِ",
      latinTitle: "Percakapan 2: Memperkenalkan Orang Lain",
      topicId: "taaruf",
      lines: [
        { speaker: "لَيْلَى", arabic: "مَسَاءُ الْخَيْرِ", latin: "Masā'ul khair", translation: "Selamat sore." },
        { speaker: "أَلِيْسَا", arabic: "مَسَاءُ النُّوْرِ", latin: "Masā'un nūr", translation: "Selamat sore." },
        { speaker: "لَيْلَى", arabic: "كَيْفَ أَمْسَيْتِ؟", latin: "Kaifa amsaiti?", translation: "Bagaimana kabarmu sore ini?" },
        { speaker: "أَلِيْسَا", arabic: "أَمْسَيْتُ بِخَيْرٍ الْحَمْدُ لِلَّهِ. وَأَنْتِ؟", latin: "Amsaitu bikhairin walḥamdulillāh. Wa anti?", translation: "Kabar saya baik, alhamdulillah. Dan kamu?" },
        { speaker: "لَيْلَى", arabic: "بِخَيْرٍ وَالْحَمْدُ لِلَّهِ.", latin: "Bikhairin walḥamdulillāh.", translation: "Baik, alhamdulillah." },
        { speaker: "أَلِيْسَا", arabic: "يَا لَيْلَى هَذِهِ فِطْرِيَّةُ، هِيَ صَدِيْقَتِي", latin: "Yā Lailā hāżihī Fiṭriyyah, hiya ṣadīqatī", translation: "Wahai Laila, ini Fitriyyah, dia temanku." },
        { speaker: "لَيْلَى", arabic: "مَرْحَبًا يَا فِطْرِيَّةُ، أَنَا لَيْلَى", latin: "Marḥaban yā Fiṭriyyah, anā Lailā", translation: "Halo Fitriyyah, saya Laila." },
        { speaker: "فِطْرِيَّةُ", arabic: "مَرْحَبًا بِكِ يَا لَيْلَى.", latin: "Marḥaban biki yā Lailā.", translation: "Halo juga Laila." },
        { speaker: "لَيْلَى", arabic: "مِنْ أَيْن جِئْتِ، أَنْتِ؟", latin: "Min aina ji'ti, anti?", translation: "Dari mana kamu datang/berasal?" },
        { speaker: "فِطْرِيَّةُ", arabic: "أَنَا مِنْ بَانْتُوْل يُوكْيَاكَرْتَا، وَأَنْتِ؟", latin: "Anā min Bantul Yogyakarta, wa anti?", translation: "Saya dari Bantul Yogyakarta, dan kamu?" },
        { speaker: "لَيْلَى", arabic: "أَنَا مِنْ سِيْدُؤَارْجُو، تَشَرَّفْنَا بِلِقَائِكِ", latin: "Anā min Sidoarjo, tasyarrafnā biliqā'iki", translation: "Saya dari Sidoarjo, senang bertemu denganmu." },
        { speaker: "فِطْرِيَّةُ", arabic: "شَرَّفَ اللَّهُ مِقْدَارَكِ", latin: "Syarrafallāhu miqdāraki", translation: "Semoga Allah memuliakan derajatmu." },
        { speaker: "لَيْلَى", arabic: "مَعَ السَّلَامَةِ", latin: "Ma'as salāmah", translation: "Semoga selamat." },
        { speaker: "أَلِيْسَا", arabic: "مَعَ السَّلَامَةِ وَإِلَى اللِّقَاءِ", latin: "Ma'as salāmah wa ilal liqā'", translation: "Semoga selamat dan sampai jumpa." },
        { speaker: "فِطْرِيَّةُ", arabic: "مَعَ السَّلَامَةِ وَإِلَى اللِّقَاءِ", latin: "Ma'as salāmah wa ilal liqā'", translation: "Semoga selamat dan sampai jumpa." }
      ]
    },
    {
      id: "dialog3",
      title: "الكلام (١) - البَابُ الثَّانِي : صُوْرَةُ الأُسْرَةِ",
      latinTitle: "Bab 2 - Percakapan 1: Foto Keluarga (Harun & Musa)",
      topicId: "usrah",
      lines: [
        { speaker: "هَارُوْن", arabic: "أَيُّ صُوَرةٍ هَذِهِ؟", latin: "Ayyu ṣūratin hāżihī?", translation: "Gambar apakah ini?" },
        { speaker: "مُوْسَى", arabic: "هَذِهِ صُوْرَةُ أُسْرَتِي.", latin: "Hāżihī ṣūratu usratī.", translation: "Ini adalah foto keluargaku." },
        { speaker: "هَارُوْن", arabic: "مَنْ هَؤُلَاءِ؟", latin: "Man hā'ulā'i?", translation: "Siapa mereka ini?" },
        { speaker: "مُوْسَى", arabic: "هَذَا أَبِي، اسْمُهُ إِبْرَاهِيْمُ. وَهَذِهِ أُمِّي، اسْمُهَا رُقَيَّةُ.", latin: "Hāżā abī, ismuhū Ibrāhīm. Wa hāżihī ummī, ismuhā Ruqayyah.", translation: "Ini ayahku, namanya Ibrahim. Dan ini ibuku, namanya Ruqayyah." },
        { speaker: "هَارُوْن", arabic: "وَمَنْ هَذِهِ؟", latin: "Wa man hāżihī?", translation: "Dan siapa ini (perempuan)?" },
        { speaker: "مُوْسَى", arabic: "هَذِهِ أُخْتِي، اسْمُهَا حَفْصَةُ. وَهَذَا أَخِي، اسْمُهُ صَالِحٌ.", latin: "Hāżihī ukhtī, ismuhā Ḥafṣah. Wa hāżā akhī, ismuhū Ṣāliḥ.", translation: "Ini saudara perempuanku, namanya Hafsah. Dan ini saudara laki-lakiku, namanya Salih." },
        { speaker: "هَارُوْن", arabic: "هَلْ هَذِهِ صُورَتُكَ؟", latin: "Hal hāżihī ṣūratuka?", translation: "Apakah ini fotomu?" },
        { speaker: "مُوْسَى", arabic: "نَعَمْ، هَذِهِ صُوْرَتِي.", latin: "Na'am, hāżihī ṣūratī.", translation: "Ya, ini fotoku." }
      ]
    },
    {
      id: "dialog4",
      title: "الكلام (٢) - البَابُ الثَّانِي : صُوْرَةُ الْبَيْتِ وَمَرَافِقِهِ",
      latinTitle: "Bab 2 - Percakapan 2: Rumah & Ruangan (Mahmud & Hadi)",
      topicId: "usrah",
      lines: [
        { speaker: "مَحْمُوْد", arabic: "اُنْظُرْ...! هَذِهِ صُوْرَةُ بَيْتِي.", latin: "Unẓur...! Hāżihī ṣūratu baitī.", translation: "Lihatlah...! Ini adalah foto rumahku." },
        { speaker: "هَادِي", arabic: "بَيْتُكَ كَبِيْرٌ وَجَمِيْلٌ.", latin: "Baituka kabīrun wa jamīlun.", translation: "Rumahmu besar dan indah." },
        { speaker: "مَحْمُوْد", arabic: "شُكْرًا. هَذَا مِنْ فَضْلِ رَبِّي.", latin: "Syukran. Hāżā min faḍli rabbī.", translation: "Terima kasih. Ini adalah karunia dari Tuhanku." },
        { speaker: "هَادِي", arabic: "أَنْتَ تَجْلِسُ فِي غُرْفَةِ الْجُلُوْسِ.", latin: "Anta tajlisu fī gurfatil julūs.", translation: "Kamu sedang duduk di ruang keluarga." },
        { speaker: "مَحْمُوْد", arabic: "صَحِيْحٌ. أُشَاهِدُ التَّلْفَازَ مَعَ الأُسْرَةِ.", latin: "Ṣaḥīḥun. Usyāhidut tilfāza ma'al usrah.", translation: "Benar. Saya menonton televisi bersama keluarga." },
        { speaker: "مَحْمُوْد", arabic: "وَهَذِهِ غُرْفَةُ الأَكْلِ. نَحْنُ نَأْكُلُ فِيْهَا.", latin: "Wa hāżihī gurfatul akl. Naḥnu na'kulu fīhā.", translation: "Dan ini adalah ruang makan. Kami makan di dalamnya." },
        { speaker: "هَادِي", arabic: "وَهَذِهِ مَكْتَبَةُ الْبَيْتِ، أَلَيْسَ كَذَلِك؟", latin: "Wa hāżihī maktabatul bait, alaisa każālik?", translation: "Dan ini perpustakaan rumah, bukankah begitu?" },
        { speaker: "مَحْمُوْد", arabic: "بَلَى، أَقْرَأُ وَأَكْتُبُ وَأَدْرُسُ هُنَا.", latin: "Balā, aqra'u wa aktubu wa adrusu hunā.", translation: "Tentu, saya membaca, menulis, dan belajar di sini." },
        { speaker: "مَحْمُوْد", arabic: "وَهَذَا مَطْبَخٌ. هُنَا تَطْبُخُ أُمِّي الطَّعَامَ.", latin: "Wa hāżā maṭbakh. Hunā taṭbukhu ummīṭ ṭa'ām.", translation: "Dan ini dapur. Di sini ibuku memasak makanan." },
        { speaker: "هَادِي", arabic: "عَلَى فِكْرَةٍ، أَيْنَ غُرَفُ النَّوْمِ؟", latin: "‘Alā fikratin, aina gurafun naum?", translation: "Ngomong-ngomong, di mana kamar-kamar tidur?" },
        { speaker: "مَحْمُوْد", arabic: "غُرَفُ النَّوْمِ فِي الطَّابِقِ الْعُلْوِيِّ.", latin: "Gurafun naumi fiṭ ṭābiqil ‘ulwiyy.", translation: "Kamar-kamar tidur ada di lantai atas." }
      ]
    },
    {
      id: "dialog5",
      title: "الكلام (١) - البَابُ الثَّالِثُ : فِي الْمَدْرَسَةِ",
      latinTitle: "Bab 3 - Percakapan 1: Di Sekolah & Mengerjakan PR (Salim & Salman)",
      topicId: "madrasah",
      lines: [
        { speaker: "سَالِم", arabic: "السَّلَامُ عَلَيْكُمْ", latin: "Assalāmu 'alaikum", translation: "Assalamu'alaikum." },
        { speaker: "سَلْمَان", arabic: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ", latin: "Wa'alaikumussalāmu wa raḥmatullāh", translation: "Wa'alaikumussalam warahmatullah." },
        { speaker: "سَالِم", arabic: "صَبَاحُ الْخَيْرِ", latin: "Ṣabāḥul khair", translation: "Selamat pagi." },
        { speaker: "سَلْمَان", arabic: "صَبَاحُ النُّوْرِ", latin: "Ṣabāḥun nūr", translation: "Selamat pagi." },
        { speaker: "سَالِم", arabic: "هَلْ عَمِلْتَ الْوَاجِبَ الْمَنْزِلِيَّ؟", latin: "Hal 'amilta al-wājibal manziliyya?", translation: "Apakah kamu sudah mengerjakan Pekerjaan Rumah (PR)?" },
        { speaker: "سَلْمَان", arabic: "أَيَّ دَرْسٍ؟", latin: "Ayya darsin?", translation: "Pelajaran apa?" },
        { speaker: "سَالِم", arabic: "رِيَاضِيَّات", latin: "Riyāḍiyyāt", translation: "Matematika." },
        { speaker: "سَلْمَان", arabic: "طَبْعًا، عَمِلْتُ. وَأَنْتَ؟", latin: "Ṭab'an, 'amiltu. Wa anta?", translation: "Tentu saja, aku sudah mengerjakannya. Dan kamu?" },
        { speaker: "سَالِم", arabic: "عَمِلْتُ. هَلِ الْمُدَرِّسُ حَاضِرٌ؟", latin: "‘Amiltu. Halil mudarrisu ḥāḍirun?", translation: "Aku sudah mengerjakannya. Apakah Pak Guru sudah hadir?" },
        { speaker: "سَلْمَان", arabic: "حَاضِرٌ، بِالطَّبْعِ.", latin: "Ḥāḍirun, biṭ-ṭab'i.", translation: "Hadir, tentu saja." },
        { speaker: "سَالِم", arabic: "يَرُنُّ الْجَرَسُ. هَيَّا بِنَا إِلَى الْفَصْلِ", latin: "Yarunnul jarasu. Hayyā binā ilal faṣli", translation: "Bel sudah berbunyi. Ayo kita ke kelas." },
        { speaker: "سَلْمَان", arabic: "هَيَّا بِنَا.", latin: "Hayyā binā.", translation: "Ayo kita berangkat." }
      ]
    },
    {
      id: "dialog6",
      title: "الكلام (٢) - البَابُ الثَّالِثُ : فِي الْفَصْلِ (الْحُضُوْرُ وَالْغِيَابُ)",
      latinTitle: "Bab 3 - Percakapan 2: Di Dalam Kelas & Absensi (Guru & Para Siswa)",
      topicId: "madrasah",
      lines: [
        { speaker: "مُدَرِّسٌ", arabic: "السَّلَامُ عَلَيْكُمْ", latin: "Assalāmu 'alaikum", translation: "Assalamu'alaikum." },
        { speaker: "طُلَّابٌ", arabic: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ", latin: "Wa'alaikumussalāmu wa raḥmatullāh", translation: "Wa'alaikumussalam warahmatullah." },
        { speaker: "مُدَرِّسٌ", arabic: "كَيْفَ أَصْبَحْتُمْ؟", latin: "Kaifa aṣbaḥtum?", translation: "Bagaimana kabar kalian pagi ini?" },
        { speaker: "طُلَّابٌ", arabic: "أَصْبَحْنَا فِي خَيْرٍ.", latin: "Aṣbaḥnā fī khairin.", translation: "Kami dalam keadaan baik pagi ini." },
        { speaker: "مُدَرِّسٌ", arabic: "مَنْ الْغَائِبُ الْيَوْمَ؟", latin: "Manil gā'ibul yauma?", translation: "Siapa yang absen / tidak hadir hari ini?" },
        { speaker: "نَجْوَى", arabic: "عَدَدُ الطُّلَّابِ فِي الْفَصْلِ ٢٨ طَالِبًا وَطَالِبَةً.", latin: "'Adadut ṭullābi fil faṣli 28 ṭāliban wa ṭālibatan.", translation: "Jumlah siswa di kelas ada 28 siswa dan siswi." },
        { speaker: "مُدَرِّسٌ", arabic: "وَالْآنَ ٢٤ (أَرْبَعَةٌ وَعِشْرُوْنَ). أَيْنَ الْآخَرُوْنَ؟", latin: "Wal-āna 24 (arba'atun wa 'isyrūna). Ainal ākharūna?", translation: "Dan sekarang yang hadir 24 orang. Di mana yang lainnya?" },
        { speaker: "سَالِم", arabic: "طَارِقٌ وَزِيَادٌ هُمَا مَرِيْضَانِ.", latin: "Ṭāriqun wa Ziyādun humā marīḍāni.", translation: "Tariq dan Ziyad, mereka berdua sakit." },
        { speaker: "نَجْوَى", arabic: "وَأَمَّا سَلْمَى وَفَاطِمَةُ فَذَاهِبَتَانِ إِلَى مَكْتَبِ التَّوْجِيْهِ وَالْإِرْشَادِ.", latin: "Wa ammā Salmā wa Fāṭimatu fa-żāhibatāni ilā maktabit taujīhi wal irsyād.", translation: "Sedangkan Salma dan Fatimah pergi ke ruang Bimbingan Konseling (BK)." },
        { speaker: "مُدَرِّسٌ", arabic: "طَيِّبٌ. هَيَّا بِنَا نَبْدَأُ الدِّرَاسَةَ.", latin: "Ṭayyib. Hayyā binā nabda'ud dirāsah.", translation: "Baik. Mari kita mulai pelajaran." }
      ]
    },
    {
      id: "dialog7",
      title: "الكلام (٣) - البَابُ الثَّالِثُ : جَدْوَلُ الدِّرَاسَةِ وَالْحِصَصِ",
      latinTitle: "Bab 3 - Percakapan 3: Jadwal Pelajaran & Jumlah Jam (Tariq & Ziyad)",
      topicId: "madrasah",
      lines: [
        { speaker: "طَارِقٌ", arabic: "كَمْ حِصَّةً تَدْرُسُ الْيَوْمَ؟", latin: "Kam ḥiṣṣatan tadrusul yauma?", translation: "Berapa jam pelajaran yang kamu pelajari hari ini?" },
        { speaker: "زِيَادٌ", arabic: "الْآنَ يَوْمُ الْخَمِيْسِ، نَدْرُسُ عَشْرَ حِصَصٍ.", latin: "Al-āna yaumul khamīsi, nadrusu 'asyra ḥiṣaṣin.", translation: "Sekarang hari Kamis, kita belajar 10 jam pelajaran." },
        { speaker: "طَارِقٌ", arabic: "إِذَنْ، نَدْرُسُ عَشْرَ حِصَصٍ مِنْ يَوْمِ الْإِثْنَيْنِ إِلَى الْخَمِيْسِ؟", latin: "Iżan, nadrusu 'asyra ḥiṣaṣin min yaumil itsnaini ilal khamīsi?", translation: "Kalau begitu, kita belajar 10 jam pelajaran dari hari Senin sampai Kamis?" },
        { speaker: "زِيَادٌ", arabic: "نَعَمْ، فِي يَوْمِ الْجُمُعَةِ وَالسَّبْتِ سِتَّ حِصَصٍ.", latin: "Na'am, fī yaumil jumu'ati was sabti sitta ḥiṣaṣin.", translation: "Ya, pada hari Jumat dan Sabtu 6 jam pelajaran." },
        { speaker: "طَارِقٌ", arabic: "وَكَمْ دَرْسًا تَدْرُسُ الْيَوْمَ؟", latin: "Wa kam darsan tadrusul yauma?", translation: "Dan berapa mata pelajaran yang kamu pelajari hari ini?" },
        { speaker: "زِيَادٌ", arabic: "خَمْسَةَ دُرُوْسٍ. وَهِيَ دَرْسُ اللُّغَةِ الْعَرَبِيَّةِ وَالْفِيْزِيَاءِ وَالْفِقْهِ وَالتَّارِيْخِ وَالْقُرْآنِ.", latin: "Khamsata durūsin. Wa hiya darsul lugatil 'arabiyyati wal fīziyā'i wal fiqhi wat tārīkhi wal qur'ān.", translation: "5 mata pelajaran. Yaitu Bahasa Arab, Fisika, Fikih, Sejarah, dan Al-Qur'an." }
      ]
    }
  ],

  // 3. MAHARAH QIRA'AH (مهارة القراءة)
  qiraah: [
    {
      id: "qiraah1",
      title: "القِرَاءَةُ (أ) : قِصَّةُ أَحْمَدَ وَأَغُوْسَ",
      latinTitle: "Teks A: Cerita Ahmad dan Agus",
      topicId: "taaruf",
      arabicText: `اِسْمِي أَحْمَدُ. أَنَا مِنْ جُوْمْبَانْج. عُنْوَانِي شَارِعُ كِيَاهِي الْحَاجِّ عَبْدِ الْوَهَّابِ رَقْمُ ٧٩ جُوْمْبَانْج. أَنَا مُتَخَرِّجٌ فِي مَدْرَسَةِ "الْإِحْسَانِ" الْمُتَوَسِّطَةِ الْإِسْلَامِيَّةِ جُوْمْبَانْج. أَنَا الْآنَ أَتَعَلَّمُ فِي الْمَدْرَسَةِ الثَّانَوِيَّةِ الْإِسْلَامِيَّةِ الْحُكُوْمِيَّةِ ٤ جُوْمْبَانْج. وَعُنْوَانُ الْمَدْرَسَةِ شَارِعُ إِمَام بُونْجُوْل رَقْمُ ٧١ جُوْمْبَانْج. أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالدَّرَّاجَةِ.

وَهَذَا صَدِيْقِي ، اسْمُهُ أَغُوْسُ هُوَ مِنْ سُوْرَابَايَا. عُنْوَانُهُ شَارِعُ أَحْمَد يَانِي رَقْمُ ٥٤ سُوْرَابَايَا. أَغُوْسُ مُتَخَرِّجٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ الْحُكُوْمِيَّةِ ٥ سُوْرَابَايَا. هُوَ يُحِبُّ دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الطَّبِيْعِيَّةِ.

وَبِالْإِضَافَةِ إِلَى ذَلِك هُوَ يُرِيْدُ تَعَلُّمَ الْعُلُوْمِ الدِّيْنِيَّةِ، فَيُوَاصِلُ الدِّرَاسَةَ إِلَى هَذِهِ الْمَدْرَسَةِ. أَغُوْسُ يَسْكُنُ فِي الْمَعْهَدِ الْإِسْلَامِيِّ. هُوَ يُرِيْدُ تَعَلُّمَ الْعُلُوْمِ الدِّيْنِيَّةِ كَثِيْرًا. فِي الصَّبَاحِ هُوَ يَتَعَلَّمُ الرِّيَاضِيَّاتِ وَالْعُلُوْمَ الطَّبِيْعِيَّةَ وَالْعُلُوْمَ الْأُخْرَى فِي الْمَدْرَسَةِ ، وَفِي الْمَسَاءِ يَتَعَلَّمُ الْعُلُوْمَ الدِّيْنِيَّةَ فِي الْمَعْهَدِ.`,
      latinText: "",
      translation: `Nama saya Ahmad. Saya dari Jombang. Alamat saya Jalan K.H. Abdul Wahab No. 79 Jombang. Saya lulusan MTs Al-Ihsan Jombang. Sekarang saya belajar di MAN 4 Jombang. Alamat sekolah di Jalan Imam Bonjol No. 71 Jombang. Saya pergi ke sekolah naik sepeda.

Dan ini teman saya, namanya Agus, dia dari Surabaya. Alamatnya Jalan Ahmad Yani No. 54 Surabaya. Agus lulusan SMP Negeri 5 Surabaya. Dia suka belajar Matematika dan IPA.

Selain itu, dia ingin belajar ilmu agama, maka dia melanjutkan sekolah ke madrasah ini. Agus tinggal di Pondok Pesantren. Di pagi hari dia belajar Matematika, IPA, dan pelajaran lain di sekolah, dan di malam hari belajar ilmu agama di pesantren.`,
      questions: [
        {
          q: "مِنْ أَيْن أَحْمَدُ؟",
          latinQ: "Dari mana Ahmad berasal?",
          options: ["سُوْرَابَايَا", "جُوْمْبَانْج", "يُوغْيَاكَرْتَا", "بَالِي"],
          answer: 1,
          explanation: "Pada teks disebutkan: 'اِسْمِي أَحْمَدُ. أَنَا مِنْ جُوْمْبَانْج'."
        },
        {
          q: "كَيْفَ يَذْهَبُ أَحْمَدُ إِلَى الْمَدْرَسَةِ؟",
          latinQ: "Bagaimana Ahmad pergi ke sekolah?",
          options: ["بِالسَّيَّارَةِ", "بِالحَافِلَةِ", "بِالدَّرَّاجَةِ", "مَاشِيًا عَلَى الأَقْدَامِ"],
          answer: 2,
          explanation: "Pada teks disebutkan: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالدَّرَّاجَةِ'."
        },
        {
          q: "مَاذَا يُحِبُّ أَغُوْسُ؟",
          latinQ: "Apa yang disukai Agus?",
          options: ["دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الطَّبِيْعِيَّةِ", "الرَّسْمَ", "كُرَةَ القَدَمِ", "السِّبَاحَةَ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'هُوَ يُحِبُّ دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الطَّبِيْعِيَّةِ'."
        },
        {
          q: "أَيْنَ يَسْكُنُ أَغُوْسُ؟",
          latinQ: "Di mana Agus tinggal?",
          options: ["فِي البَيْتِ", "فِي الْمَعْهَدِ الْإِسْلَامِيِّ", "فِي الفُنْدُقِ", "فِي الشَّقَّةِ"],
          answer: 1,
          explanation: "Pada teks disebutkan: 'أَغُوْسُ يَسْكُنُ فِي الْمَعْهَدِ الْإِسْلَامِيِّ'."
        },
        {
          q: "مَا عُنْوَانُ مَدْرَسَةِ أَحْمَدَ؟",
          latinQ: "Apa alamat sekolah Ahmad?",
          options: ["شَارِعُ إِمَام بُونْجُوْل رَقْمُ ٧١", "شَارِعُ أَحْمَد يَانِي رَقْمُ ٥٤", "شَارِعُ كِيَاهِي الْحَاجِّ عَبْدِ الْوَهَّابِ", "شَارِعُ سُونْكُونُو"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'وَعُنْوَانُ الْمَدْرَسَةِ شَارِعُ إِمَام بُونْجُوْل رَقْمُ ٧١ جُوْمْبَانْج'."
        }
      ]
    },
    {
      id: "qiraah2",
      title: "القِرَاءَةُ (ب) : قِصَّةُ لَيْلَى وَيَايَا",
      latinTitle: "Teks B: Cerita Laila dan Yaya",
      topicId: "taaruf",
      arabicText: `اِسْمِي لَيْلَى. أَنَا مِنْ سِيْدُؤَارْجُو. أَنَا مُتَخَرِّجَةٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ الْإِسْلَامِيَّةِ الْحُكُوْمِيَّةِ يُوغْيَاكَرْتَا. عُنْوَانِي شَارِعُ سُونْكُونُو رَقْمُ ٢٧ يُوغْيَاكَرْتَا. بَيْتِي بَعِيْدٌ عَنِ الْمَدْرَسَةِ. وَأَنَا أُحِبُّ دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الِاجْتِمَاعِيَّةِ وَاللُّغَةِ. فَأُوَاصِلُ الدِّرَاسَةَ إِلَى الْمَدْرَسَةِ الثَّانَوِيَّةِ الْإِسْلَامِيَّةِ الْحُكُوْمِيَّةِ ٤ جُوْمْبَانْج ، وَأَسْكُنُ فِي سَكَنِ الْمَدْرَسَةِ لِلْوُصُوْلِ إِلَيْهَا فِي الْمِيْعَادِ. أُحِبُّ التَّعَلُّمَ فِي هَذِهِ الْمَدْرَسَةِ، لِأَنَّهَا مَدْرَسَةٌ رَائِعَةٌ وَجَيِّدَةٌ، فِيْهَا مَرَافِقُ مَدْرَسِيَّةٌ لِلدِّرَاسَةِ.

وَهَذِهِ صَدِيْقَتِي اسْمُهَا يَايَا. هِيَ مِنْ بَالِي. هِيَ مُتَخَرِّجَةٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ الْإِسْلَامِيَّةِ الْحُكُوْمِيَّةِ ١ جَمْرَانَا بَالِي. هِيَ تُحِبُّ دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الِاجْتِمَاعِيَّةِ وَاللُّغَةِ مِثْلِي. هِيَ تَسْكُنُ فِي نَفْسِ السَّكَنِ مَعِي. نَحْنُ نَذْهَبُ إِلَى الْمَدْرَسَةِ صَبَاحًا وَنَرْجِعُ مِنْهَا نَهَارًا مَعًا.`,
      latinText: "",
      translation: `Nama saya Laila. Saya dari Sidoarjo. Saya lulusan MTs Negeri Yogyakarta. Alamat saya Jalan Sungkono No. 27 Yogyakarta. Rumah saya jauh dari sekolah. Dan saya suka belajar Matematika, IPS, dan Bahasa. Maka saya melanjutkan studi ke MAN 4 Jombang, dan tinggal di asrama sekolah agar sampai tepat waktu. Saya suka belajar di sekolah ini karena sekolah yang luar biasa dan bagus, memiliki fasilitas sekolah untuk belajar.

Dan ini teman saya namanya Yaya. Dia dari Bali. Dia lulusan MTs Negeri 1 Jembrana Bali. Dia suka belajar Matematika, IPS, dan Bahasa seperti saya. Dia tinggal di asrama yang sama dengan saya. Kami pergi ke sekolah di pagi hari dan pulang siang hari bersama-sama.`,
      questions: [
        {
          q: "مِنْ أَيْن لَيْلَى؟",
          latinQ: "Dari mana Laila berasal?",
          options: ["سِيْدُؤَارْجُو", "بَالِي", "سُوْرَابَايَا", "جُوْمْبَانْج"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'اِسْمِي لَيْلَى. أَنَا مِنْ سِيْدُؤَارْجُو'."
        },
        {
          q: "أَيْنَ تَسْكُنُ لَيْلَى؟",
          latinQ: "Di mana Laila tinggal?",
          options: ["فِي البَيْتِ", "فِي سَكَنِ الْمَدْرَسَةِ", "فِي الفُنْدُقِ", "فِي الْمَعْهَدِ"],
          answer: 1,
          explanation: "Pada teks disebutkan: 'وَأَسْكُنُ فِي سَكَنِ الْمَدْرَسَةِ'."
        },
        {
          q: "مِنْ أَيْن يَايَا؟",
          latinQ: "Dari mana Yaya berasal?",
          options: ["بَالِي", "يُوغْيَاكَرْتَا", "جُوْمْبَانْج", "سِنْجَاوَانْج"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'وَهَذِهِ صَدِيْقَتِي اسْمُهَا يَايَا. هِيَ مِنْ بَالِي'."
        },
        {
          q: "كَيْفَ تَذْهَبُ لَيْلَى وَيَايَا إِلَى الْمَدْرَسَةِ؟",
          latinQ: "Bagaimana Laila dan Yaya pergi ke sekolah?",
          options: ["نَذْهَبُ صَبَاحًا وَنَرْجِعُ نَهَارًا مَعًا", "بِالسَّيَّارَةِ", "بِالدَّرَّاجَةِ", "وَحْدَهُمَا"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'نَحْنُ نَذْهَبُ إِلَى الْمَدْرَسَةِ صَبَاحًا وَنَرْجِعُ مِنْهَا نَهَارًا مَعًا'."
        },
        {
          q: "لِمَاذَا تُحِبُّ لَيْلَى التَّعَلُّمَ فِي هَذِهِ الْمَدْرَسَةِ؟",
          latinQ: "Mengapa Laila menyukai belajar di madrasah ini?",
          options: ["لِأَنَّهَا مَدْرَسَةٌ رَائِعَةٌ وَفِيْهَا مَرَافِقُ مَدْرَسِيَّةٌ", "لِأَنَّهَا قَرِيْبَةٌ مِنَ البَيْتِ", "لِأَنَّهَا صَغِيْرَةٌ", "لِأَنَّهَا جَدِيْدَةٌ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'لِأَنَّهَا مَدْرَسَةٌ رَائِعَةٌ وَجَيِّدَةٌ، فِيْهَا مَرَافِقُ مَدْرَسِيَّةٌ لِلدِّرَاسَةِ'."
        }
      ]
    },
    {
      id: "qiraah3",
      title: "القِرَاءَةُ (١) - البَابُ الثَّانِي : الأُسْرَةُ السَّعِيْدَةُ",
      latinTitle: "Bab 2 - Teks 1: Keluarga yang Bahagia (Pak Hasan)",
      topicId: "usrah",
      arabicText: `هَذِهِ أُسْرَةُ السَّيِّدِ حَسَنٍ. السَّيِّدُ حَسَنٌ لَهُ زَوْجَةٌ وَهِيَ السَّيِّدَةُ مَرْيَمُ. السَّيِّدُ حَسَنٌ وَالسَّيِّدَةُ مَرْيَمُ لَهُمَا بِنْتٌ وَاجِدَةٌ وَابْنَانِ اثْنَانِ. الْبِنْتُ اسْمُهَا زُلْفَى وَالابْنَانِ هُمَا زَكَرِيَّا وَيَحْيَى.

السَّيِّدُ حَسَنٌ مُدَرِّسٌ بِالْمَدْرَسَةِ الثَّانَوِيَّةِ الْحُكُوْمِيَّةِ. هُوَ أَبٌ مُطَاعٌ. وَالسَّيِّدَةُ مَرْيَمُ رَبَّةُ الْبَيْتِ. هِيَ أُمٌّ بَسِيْطَةٌ عَطُوْفَةٌ.

زُلْفَى طَالِبَةٌ بِالْجَامِعَةِ، هِيَ ابْنَةٌ مُطِيْعَةٌ. أَمَّا أَخُوْهَا زَكَرِيَّا فَتِلْمِيْذٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ. وَيَحْيَى تِلْمِيْذٌ فِي الْمَدْرَسَةِ الابْتِدَائِيَّةِ. هُمَا وَلَدَانِ نَشِيْطَانِ.

وَالأُسْرَةُ فَضْلٌ مِنَ اللهِ. السَّيِّدُ حَسَنٌ يَرْحَمُ زَوْجَتَهُ وَأَوْلَادَهُ. وَالأَوْلَادُ يُكْرِمُوْنَ وَالِدَيْهِمْ. هُمْ يَتَحَابُّوْنَ وَيَتَعَامَلُوْنَ مُعَامَلَةً حَسَنَةً.`,
      latinText: "",
      translation: `Ini adalah keluarga Pak Hasan. Pak Hasan memiliki seorang istri bernama Bu Maryam. Pak Hasan dan Bu Maryam mempunyai satu anak perempuan dan dua anak laki-laki. Anak perempuan bernama Zulfa, sedangkan dua anak laki-laki adalah Zakariya dan Yahya.

Pak Hasan adalah seorang guru di Madrasah Aliyah Negeri (MAN). Dia adalah seorang ayah yang ditaati. Bu Maryam adalah seorang ibu rumah tangga. Dia adalah ibu yang sederhana dan penuh kasih sayang.

Zulfa adalah mahasiswi di perguruan tinggi, dia anak yang taat. Adapun saudaranya Zakariya adalah siswa di MTs/SMP. Dan Yahya adalah siswa di MI/SD. Mereka berdua adalah anak yang aktif/rajin.

Keluarga adalah karunia dari Allah. Pak Hasan menyayangi istri dan anak-anaknya. Anak-anak memuliakan kedua orang tua mereka. Mereka saling mencintai dan bergaul dengan sangat baik.`,
      questions: [
        {
          q: "مَنْ هُوَ رَبُّ الأُسْرَةِ فِي هَذَا النَّصِّ؟",
          latinQ: "Siapakah kepala keluarga pada teks ini?",
          options: ["السَّيِّدُ حَسَنٌ", "زَكَرِيَّا", "يَحْيَى", "السَّيِّدُ سَعِيْدٌ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'هَذِهِ أُسْرَةُ السَّيِّدِ حَسَنٍ'."
        },
        {
          q: "مَا مِهْنَةُ السَّيِّدِ حَسَنٍ؟",
          latinQ: "Apakah profesi Pak Hasan?",
          options: ["مُدَرِّسٌ بِالْمَدْرَسَةِ الثَّانَوِيَّةِ الْحُكُوْمِيَّةِ", "طَبِيْبٌ", "مُهَنْدِسٌ", "تَاجِرٌ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'السَّيِّدُ حَسَنٌ مُدَرِّسٌ بِالْمَدْرَسَةِ الثَّانَوِيَّةِ الْحُكُوْمِيَّةِ'."
        },
        {
          q: "كَمْ وَلَدًا لِلسَّيِّدِ حَسَنٍ وَالسَّيِّدَةِ مَرْيَمَ؟",
          latinQ: "Berapa jumlah anak Pak Hasan dan Bu Maryam?",
          options: ["بِنْتٌ وَاحِدَةٌ وَابْنَانِ اثْنَانِ", "وَلَدَانِ اثْنَانِ", "أَرْبَعَةُ أَوْلَادٍ", "بِنْتَانِ اثْنَتَانِ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'لَهُمَا بِنْتٌ وَاحِدَةٌ وَابْنَانِ اثْنَانِ'."
        },
        {
          q: "أَيْنَ تَدْرُسُ زُلْفَى؟",
          latinQ: "Di mana Zulfa menuntut ilmu?",
          options: ["فِي الْجَامِعَةِ", "فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ", "فِي الْمَدْرَسَةِ الابْتِدَائِيَّةِ", "فِي الْمَعْهَدِ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'زُلْفَى طَالِبَةٌ بِالْجَامِعَةِ'."
        },
        {
          q: "كَيْفَ يَتَعَامَلُ الأَوْلَادُ مَعَ وَالِدَيْهِمْ؟",
          latinQ: "Bagaimana anak-anak bersikap kepada kedua orang tuanya?",
          options: ["يُكْرِمُوْنَ وَالِدَيْهِمْ وَيَتَحَابُّوْنَ", "يَعْصُوْنَ الْوَالِدَيْنِ", "يَسْكُنُوْنَ بَعِيْدًا", "لَا يَتَكَلَّمُوْنَ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'وَالأَوْلَادُ يُكْرِمُوْنَ وَالِدَيْهِمْ. هُمْ يَتَحَابُّوْنَ'."
        }
      ]
    },
    {
      id: "qiraah4",
      title: "القِرَاءَةُ (٢) - البَابُ الثَّانِي : أُسْرَةُ حَافِظٍ",
      latinTitle: "Bab 2 - Teks 2: Keluarga Hafiz",
      topicId: "usrah",
      arabicText: `أَنَا حَافِظٌ. هَذِهِ أُسْرَتِي. السَّيِّدُ سَعِيْدٌ وَالِدِي وَالسَّيِّدَةُ فَرْحَانَةُ وَالِدَتِي. هُمَا وَالِدَايَ. السَّيِّدَةُ مَيْمُوْنَةُ جَدَّتِي وَالسَّيِّدُ تَوْفِيْقٌ جَدِّي. أَنَا ابْنُ السَّيِّدِ سَعِيْدٍ وَالسَّيِّدَةِ فَرْحَانَةَ. وَرُقَيَّةُ بِنْتُهُمَا. رُقَيَّةُ أُخْتِي وَأَنَا أَخُوْهَا.

السَّيِّدَةُ لَيْلَى أُخْتُ السَّيِّدِ سَعِيْدٍ. فَرِيْحَةُ ابْنَةُ السَّيِّدَةِ لَيْلَى وَالسَّيِّدِ عُمَرَ، وَمُحَمَّدٌ مَسْرُوْرٌ ابْنُهُمَا. أَبِي خَالُ مَسْرُوْرٍ وَفَرِيْحَةَ. وَالسَّيِّدَةُ لَيْلَى عَمَّةُ حَافِظٍ وَعَمَّةُ رُقَيَّةَ.

أَنَا حَفِيْدُ السَّيِّدَةِ مَيْمُوْنَةَ وَالسَّيِّدِ تَوْفِيْقٍ. وَرُقَيَّةُ حَفِيْدَتُهُمَا. أَنَا وَرُقَيَّةُ وَفَرِيْحَةُ وَمُحَمَّدٌ مَسْرُوْرٌ أَحْفَادُهُمَا. فَرِيْحَةُ ابْنَةُ عَمَّتِي، وَمُحَمَّدٌ مَسْرُوْرٌ ابْنُ عَمَّتِي.

نَحْنُ أَبْنَاءٌ مُطِيْعُوْنَ. نَفْعَلُ مَا يَأْمُرُ بِنَا الْوَالِدَانِ وَلَا نُخَالِفُهُمَا. نُكْرِمُ وَالِدَيْنَا وَنُحْسِنُ إِلَيْهِمَا. وَإِذَا تَكَلَّمْنَا مَعَهُمَا لَا نَرْفَعُ أَصْوَاتَنَا أَمَامَهُمَا. وَنَسْتَأْذِنُ عِنْدَ الْغِيَابِ مِنَ الْبَيْتِ. وَهَذِهِ هِيَ مِنْ آدَابِ الْوَلَدِ مَعَ الْوَالِدِ.`,
      latinText: "",
      translation: `Saya Hafiz. Ini adalah keluargaku. Pak Sa'id adalah ayahku dan Bu Farhanah adalah ibuku. Mereka berdua adalah orang tuaku. Bu Maimunah adalah nenekku dan Pak Taufik adalah kakekku. Saya anak dari Pak Sa'id dan Bu Farhanah. Ruqayyah adalah anak mereka berdua. Ruqayyah adalah saudara perempuanku dan saya adalah saudara laki-lakinya.

Bu Laila adalah saudara perempuan Pak Sa'id. Farihah adalah anak perempuan Bu Laila dan Pak Umar, sedangkan Muhammad Masrur adalah anak laki-laki mereka berdua. Ayahku adalah paman (dari pihak ibu) bagi Masrur dan Farihah. Bu Laila adalah bibi bagi Hafiz dan bibi bagi Ruqayyah.

Saya adalah cucu dari Bu Maimunah dan Pak Taufik. Ruqayyah adalah cucu perempuan mereka berdua. Saya, Ruqayyah, Farihah, dan Muhammad Masrur adalah cucu-cucu mereka. Farihah adalah sepupuku dan Muhammad Masrur adalah sepupuku.

Kami adalah anak-anak yang taat. Kami melakukan apa yang diperintahkan kedua orang tua dan tidak menolak mereka. Kami memuliakan kedua orang tua kami dan berbuat baik kepada keduanya. Jika kami berbicara dengan keduanya, kami tidak meninggikan suara kami di hadapan keduanya. Kami selalu meminta izin ketika akan pergi meninggalkan rumah. Dan inilah di antara adab seorang anak kepada orang tuanya.`,
      questions: [
        {
          q: "مَنْ هُوَ وَالِدُ حَافِظٍ؟",
          latinQ: "Siapakah ayah Hafiz?",
          options: ["السَّيِّدُ سَعِيْدٌ", "السَّيِّدُ تَوْفِيْقٌ", "السَّيِّدُ عُمَرُ", "السَّيِّدُ حَسَنٌ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'السَّيِّدُ سَعِيْدٌ وَالِدِي'."
        },
        {
          q: "مَنْ هُمَا جَدٌّ وَجَدَّةُ حَافِظٍ؟",
          latinQ: "Siapakah kakek dan nenek Hafiz?",
          options: ["السَّيِّدُ تَوْفِيْقٌ وَالسَّيِّدَةُ مَيْمُوْنَةُ", "السَّيِّدُ سَعِيْدٌ وَالسَّيِّدَةُ فَرْحَانَةُ", "السَّيِّدُ عُمَرُ وَالسَّيِّدَةُ لَيْلَى", "السَّيِّدُ حَسَنٌ وَالسَّيِّدَةُ مَرْيَمُ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'السَّيِّدَةُ مَيْمُوْنَةُ جَدَّتِي وَالسَّيِّدُ تَوْفِيْقٌ جَدِّي'."
        },
        {
          q: "مَا صِلَةُ الْقَرَابَةِ بَيْنَ حَافِظٍ وَرُقَيَّةَ؟",
          latinQ: "Apakah hubungan keluarga antara Hafiz dan Ruqayyah?",
          options: ["رُقَيَّةُ أُخْتُ حَافِظٍ", "رُقَيَّةُ أُمُّ حَافِظٍ", "رُقَيَّةُ عَمَّةُ حَافِظٍ", "رُقَيَّةُ بِنْتُ عَمِّهِ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'رُقَيَّةُ أُخْتِي وَأَنَا أَخُوْهَا'."
        },
        {
          q: "مَنْ هُمَا فَرِيْحَةُ وَمُحَمَّدٌ مَسْرُوْرٌ؟",
          latinQ: "Siapakah Farihah dan Muhammad Masrur bagi Hafiz?",
          options: ["أَوْلَادُ عَمَّتِهِ لَيْلَى (أَقْرِبَاؤُهُ / أَبْنَاءُ عَمَّتِهِ)", "إِخْوَةُ حَافِظٍ", "أَبَوَا حَافِظٍ", "جَدَّتَا حَافِظٍ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'فَرِيْحَةُ ابْنَةُ عَمَّتِي، وَمُحَمَّدٌ مَسْرُوْرٌ ابْنُ عَمَّتِي'."
        },
        {
          q: "كَيْفَ يَتَأَدَّبُ أَبْنَاءُ هَذِهِ الأُسْرَةِ مَعَ وَالِدَيْهِمْ؟",
          latinQ: "Bagaimana adab anak-anak keluarga ini terhadap orang tua mereka?",
          options: ["يُكْرِمُوْنَ وَالِدَيْهِمْ وَلَا يَرْفَعُوْنَ أَصْوَاتَهُمْ", "يَرْفَعُوْنَ أَصْوَاتَهُمْ", "يَخْرُجُوْنَ بِدُوْنِ اِسْتِئْذَانٍ", "لَا يُطِيْعُوْنَ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'نُكْرِمُ وَالِدَيْنَا... وَلَا نَرْفَعُ أَصْوَاتَنَا أَمَامَهُمَا'."
        }
      ]
    },
    {
      id: "qiraah5",
      title: "القِرَاءَةُ (١) - البَابُ الثَّالِثُ : فِي الْمَدْرَسَةِ",
      latinTitle: "Bab 3 - Teks 1: Di Sekolah (Cerita Salim)",
      topicId: "madrasah",
      arabicText: `أَنَا سَالِمٌ. أَتَعَلَّمُ فِي مَدْرَسَةِ دَارِ الْمَعَارِفِ الثَّانَوِيَّةِ الإِسْلَامِيَّةِ. تَقَعُ هَذِهِ الْمَدْرَسَةُ فِي مَتَارَمْ (Mataram) نُوْسَاتَنْجَارَا الْغَرْبِيَّةِ (NTB). يَدْرُسُ فِي هَذِهِ الْمَدْرَسَةِ حَوَالَيْ ٩٦٠ (تِسْعُمِئَةٍ وَسِتُّوْنَ) طَالِبًا وَطَالِبَةً. هُمْ يَدْرُسُوْنَ فِي ٣٠ (ثَلَاثِيْنَ) فَصْلًا دِرَاسِيًّا. وَيُعَلِّمُ الطُّلَّابَ وَالطَّالِبَاتِ ٩٠ (تِسْعُوْنَ) مُدَرِّسًا وَمُدَرِّسَةً. هُمْ يَجْتَمِعُوْنَ وَيَجْلِسُوْنَ فِي مَكْتَبِ هَيْئَةِ التَّدْرِيْسِ وَقْتَ الاِسْتِرَاحَةِ. وَيَعْمَلُ فِي هَذِهِ الْمَدْرَسَةِ الْمُوَظَّفُوْنَ الإِدَارِيُّوْنَ. هُمْ يَعْمَلُوْنَ فِي مَكْتَبِ الشُّؤُوْنِ الإِدَارِيَّةِ.

نَتَعَلَّمُ سِتَّةَ أَيَّامٍ فِي الأُسْبُوْعِ مِنْ يَوْمِ الاِثْنَيْنِ إِلَى يَوْمِ السَّبْتِ، يَوْمُ الأَحَدِ يَوْمُ الْعُطْلَةِ لِمَدْرَسَتِنَا. تَدْرُسُ الدُّرُوْسَ الْمُقَرَّرَةَ فِي الْفُصُوْلِ الدِّرَاسِيَّةِ مِثْلَ اللُّغَةِ الْعَرَبِيَّةِ وَالإِنْجِلِيْزِيَّةِ وَالْفِقْهِ وَالْحَدِيْثِ وَالرِّيَاضِيَّاتِ وَالْفِيْزِيَاءِ وَالْكِيْمِيَاءِ وَالْجُغْرَافِيَا وَالتَّارِيْخِ. نَتَدَرَّبُ عَلَى الاِسْتِمَاعِ وَالْكَلَامِ بِاللُّغَةِ الْعَرَبِيَّةِ وَالإِنْجِلِيْزِيَّةِ فِي مَعْمَلِ اللُّغَاتِ. وَ نَتَدَرَّبُ عَلَى أَنْوَاعِ مِنَ الرِّيَاضَاتِ الْبَدَنِيَّةِ فِي الْمَلْعَبِ.

نَتَعَلَّمُ فِي الْيَوْمِ تِسْعَ حِصَصٍ مِنَ السَّاعَةِ السَّابِعَةِ صَبَاحًا إِلَى الثَّانِيَةِ وَالنِّصْفِ مَسَاءً. وَبَعْدَ أَرْبَعِ حِصَصٍ نَسْتَرِيْحُ فِي وَقْتِ الاِسْتِرَاحَةِ. بَعْضُنَا يَتَّجِهُ إِلَى الْمَكْتَبَةِ لِقِرَاءَةِ الْكُتُبِ. وَالْبَعْضُ يَذْهَبُ إِلَى الْمَقْصَفِ لِشِرَاءِ الْمَأْكُوْلَاتِ وَالْمَشْرُوْبَاتِ. وَالآخَرُ يُصَلِّي الضُّحَى فِي مَسْجِدِ الْمَدْرَسَةِ.

وَنَحْنُ نَحْتَفِلُ بِذِكْرَى مَوْلِدِ الرَّسُوْلِ وَنُزُوْلِ الْقُرْآنِ وَغَيْرِ ذٰلِك مِنَ الْمُنَاسَبَاتِ فِي قَاعَةِ الاِجْتِمَاعِ.`,
      latinText: "",
      translation: `Saya Salim. Saya belajar di MA Darul Ma'arif. Sekolah ini terletak di Mataram, NTB. Di sekolah ini belajar sekitar 960 siswa dan siswi. Mereka belajar di 30 kelas. Dan mengajar mereka 90 guru laki-laki dan perempuan. Mereka berkumpul dan duduk di ruang guru pada waktu istirahat. Dan para pegawai administrasi bekerja di kantor urusan tata usaha.

Kami belajar 6 hari dalam seminggu dari Senin sampai Sabtu, hari Minggu adalah hari libur sekolah kami. Kami mempelajari pelajaran yang ditentukan seperti Bahasa Arab, Bahasa Inggris, Fikih, Hadis, Matematika, Fisika, Kimia, Geografi, dan Sejarah. Kami berlatih mendengarkan dan berbicara Bahasa Arab dan Inggris di laboratorium bahasa, dan berlatih berbagai jenis olahraga di lapangan.

Kami belajar 9 jam pelajaran sehari dari jam 07.00 pagi sampai jam 14.30 siang. Setelah 4 jam pelajaran kami beristirahat. Sebagian kami ke perpustakaan untuk membaca buku, sebagian ke kantin membeli makanan dan minuman, dan yang lain salat Dhuha di masjid sekolah.

Dan kami merayakan peringatan Maulid Nabi, Nuzulul Qur'an, dan acara lainnya di aula pertemuan.`,
      questions: [
        {
          q: "أَيْنَ تَقَعُ مَدْرَسَةُ دَارِ الْمَعَارِفِ الثَّانَوِيَّةُ الإِسْلَامِيَّةُ؟",
          latinQ: "Di mana MA Darul Ma'arif berada?",
          options: ["فِي مَتَارَمْ (NTB)", "فِي بُونْتِيَانَاك", "فِي سُوْرَابَايَا", "فِي جَاكَرْتَا"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'تَقَعُ هَذِهِ الْمَدْرَسَةُ فِي مَتَارَمْ (NTB)'."
        },
        {
          q: "كَمْ طَالِبًا وَطَالِبَةً يَدْرُسُوْنَ فِي الْمَدْرَسَةِ؟",
          latinQ: "Berapa jumlah siswa yang belajar di madrasah?",
          options: ["حَوَالَيْ ٩٦٠ طَالِبًا وَطَالِبَةً", "٥٠٠ طَالِبًا", "٣٠٠ طَالِبًا", "١٠٠٠ طَالِبًا"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'يَدْرُسُ فِي هَذِهِ الْمَدْرَسَةِ حَوَالَيْ ٩٦٠ طَالِبًا وَطَالِبَةً'."
        },
        {
          q: "أَيْنَ يَتَدَرَّبُ الطُّلَّابُ عَلَى الاِسْتِمَاعِ وَالْكَلَامِ بِاللُّغَةِ الْعَرَبِيَّةِ؟",
          latinQ: "Di mana siswa berlatih Istima' dan Kalam Bahasa Arab?",
          options: ["فِي مَعْمَلِ اللُّغَاتِ", "فِي الْمَلْعَبِ", "فِي الْمَقْصَفِ", "فِي الْمَسْجِدِ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'نَتَدَرَّبُ عَلَى الاِسْتِمَاعِ وَالْكَلَامِ... فِي مَعْمَلِ اللُّغَاتِ'."
        },
        {
          q: "كَمْ حِصَّةً يَتَعَلَّمُ الطُّلَّابُ فِي الْيَوْمِ؟",
          latinQ: "Berapa jam pelajaran siswa belajar dalam sehari?",
          options: ["تِسْعَ حِصَصٍ", "خَمْسَ حِصَصٍ", "سِتَّ حِصَصٍ", "ثَمَانِيَ حِصَصٍ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'نَتَعَلَّمُ فِي الْيَوْمِ تِسْعَ حِصَصٍ'."
        },
        {
          q: "مَاذَا يَفْعَلُ الطُّلَّابُ فِي قَاعَةِ الاِجْتِمَاعِ؟",
          latinQ: "Apa yang dilakukan siswa di aula pertemuan?",
          options: ["يَحْتَفِلُوْنَ بِذِكْرَى مَوْلِدِ الرَّسُوْلِ وَنُزُوْلِ الْقُرْآنِ", "يَلْعَبُوْنَ كُرَةَ الْقَدَمِ", "يَشْتَرُوْنَ الْمَأْكُوْلَاتِ", "يَنَامُوْنَ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'وَنَحْنُ نَحْتَفِلُ بِذِكْرَى مَوْلِدِ الرَّسُوْلِ... فِي قَاعَةِ الاِجْتِمَاعِ'."
        }
      ]
    },
    {
      id: "qiraah6",
      title: "القِرَاءَةُ (٢) - البَابُ الثَّالِثُ : فِي الْفَصْلِ",
      latinTitle: "Bab 3 - Teks 2: Di Kelas (Cerita Najwa)",
      topicId: "madrasah",
      arabicText: `أَنَا نَجْوَى. أَنَا طَالِبَةٌ مِنْ طَالِبَاتِ مَدْرَسَةِ دَارِ الْحِكْمَةِ الثَّانَوِيَّةِ الإِسْلَامِيَّةِ. أَجْلِسُ فِي الصَّفِّ الْعَاشِرِ (د). عَدَدُ الطَّلَبَةِ فِي الصَّفِّ ٣٠ (ثَلَاثُوْنَ) شَخْصًا يَتَكَوَّنُ مِنْ ١٤ (أَرْبَعَةَ عَشَرَ) طَالِبًا وَ ١٦ (سِتَّ عَشَرَةَ) طَالِبَةً.

فِي فَصْلِنَا شَاشَةٌ وَاحِدَةٌ وَسَبُّوْرَتَانِ اثْنَتَانِ وَمَكْتَبٌ وَكُرْسِيٌّ لِلْمُدَرِّسِ وَخِزَانَةٌ فِي رُكْنِ الْفَصْلِ. الْمِرْوَحَتَانِ وَسِتَّةُ مَصَابِيْحَ عَلَى السَّقْفِ. الْمِكْنَسَتَانِ وَالْمِمْسَحَةُ مُعَلَّقَةٌ عَلَى الْجِدَارِ وَرَاءَ الْفَصْلِ. السَّاعَةُ عَلَى الْجِدَارِ أَمَامَ الْفَصْلِ وَكَذٰلِك صُوْرَةُ الرَّئِيْسِ وَنَائِبِهِ. الطَّلَّاسَةُ وَالطَّبْشُوْرَةُ فِي الْخِزَانَةِ. الْمَزْبَلَةُ جَانِبَ الْبَابِ وَالْمِمْسَحَةُ أَمَامَ الْبَابِ. هُمَا خَارِجَ الْفَصْلِ.

نَصِلُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ وَنَتَّجِهُ إِلَى الْفَصْلِ. نَحْنُ نُنَظِّفُ الْفَصْلَ. بَعْضُنَا يَكْنُسُ الْبَلَاطَ بِالْمِكْنَسَةِ وَتَمْسَحُ السَّبُّوْرَةَ بِالطَّلَّاسَةِ وَالآخَرُ يُنَظِّفُ زُجَاجَ الشُّبَّاكِ بِالْمِمْسَحَةِ.

يَدُقُّ الْجَرَسُ وَنَحْنُ نَجْلِسُ عَلَى الْمَقَاعِدِ. يَحْضُرُ الْمُدَرِّسُ الْفَصْلَ وَيُسَلِّمُ عَلَيْنَا وَنَرُدُّ السَّلَامَ مِنْهُ. يَعْمَلُ الْمُدَرِّسُ الْكَشْفَ وَيَبْدَأُ الدَّرْسَ. نَحْنُ نَسْتَمِعُ شَرْحَ الْمُدَرِّسِ اهْتِمَامًا كَبِيْرًا. يُلْقِي الْمُدَرِّسُ أَسْئِلَةً عَنِ الدَّرْسِ آخِرَ الْحِصَّةِ وَنُجِيْبُ عَلَى الأَسْئِلَةِ بِنَشَاطٍ. تَنْتَهِي الْحِصَّةُ وَيَخْتَتِمُ الْمُدَرِّسُ الْحِصَّةَ.`,
      latinText: "",
      translation: `Saya Najwa. Saya seorang siswi MA Darul Hikmah. Saya di Kelas 10 (D). Jumlah siswa di kelas ada 30 orang: 14 siswa Laki-laki dan 16 siswi Perempuan.

Di kelas kami terdapat 1 layar proyektor, 2 papan tulis, meja dan kursi guru, serta lemari di sudut kelas. Ada 2 kipas angin dan 6 lampu di plafon. 2 sapu dan kain pel tergantung di dinding belakang kelas. Jam dinding ada di dinding depan kelas, begitu juga foto Presiden dan Wakil Presiden. Penghapus dan kapur ada di lemari. Tempat sampah di samping pintu dan keset di depan pintu, keduanya di luar kelas.

Kami tiba di sekolah jam 06.30 dan menuju kelas. Kami membersihkan kelas: menyapu lantai dengan sapu, menghapus papan tulis dengan penghapus, dan membersihkan kaca jendela dengan lap.

Bel berbunyi dan kami duduk di bangku. Guru datang dan memberi salam lalu kami menjawabnya. Guru melakukan presensi dan memulai pelajaran. Kami mendengarkan penjelasan guru dengan seksama. Guru memberikan pertanyaan di akhir pelajaran dan kami menjawab dengan aktif. Pelajaran selesai dan guru menutup kelas.`,
      questions: [
        {
          q: "كَمْ طَالِبَةً فِي صَفِّ نَجْوَى (الْعَاشِرِ د)؟",
          latinQ: "Berapa jumlah siswi perempuan di kelas Najwa?",
          options: ["١٦ (سِتَّ عَشَرَةَ) طَالِبَةً", "١٤ طَالِبًا", "٣٠ طَالِبًا", "٢٠ طَالِبَةً"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'تَتَكَوْنُ مِنْ ١٤ طَالِبًا وَ ١٦ طَالِبَةً'."
        },
        {
          q: "أَيْنَ تَقَعُ السَّاعَةُ وَصُوْرَةُ الرَّئِيْسِ؟",
          latinQ: "Di mana posisi jam dinding dan foto Presiden?",
          options: ["عَلَى الْجِدَارِ أَمَامَ الْفَصْلِ", "عَلَى السَّقْفِ", "فِي الْخِزَانَةِ", "خَارِجَ الْفَصْلِ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'السَّاعَةُ عَلَى الْجِدَارِ أَمَامَ الْفَصْلِ وَكَذٰلِك صُوْرَةُ الرَّئِيْسِ'."
        },
        {
          q: "فِي أَيِّ سَاعَةٍ يَصِلُ الطُّلَّابُ إِلَى الْمَدْرَسَةِ؟",
          latinQ: "Jam berapa siswa tiba di sekolah?",
          options: ["فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ", "فِي السَّاعَةِ السَّابِعَةِ", "فِي السَّاعَةِ الثَّامِنَةِ", "فِي السَّاعَةِ الْخَامِسَةِ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'نَصِلُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ'."
        },
        {
          q: "مَاذَا يَفْعَلُ الْمُدَرِّسُ بَعْدَ الدُّخُوْلِ وَأَدَاءِ السَّلَامِ؟",
          latinQ: "Apa yang dilakukan guru setelah masuk dan mengucap salam?",
          options: ["يَعْمَلُ الْكَشْفَ وَيَبْدَأُ الدَّرْسَ", "يَكْنُسُ الْبَلَاطَ", "يَشْرَبُ الْقَهْوَةَ", "يَنَامُ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'يَعْمَلُ الْمُدَرِّسُ الْكَشْفَ وَيَبْدَأُ الدَّرْسَ'."
        },
        {
          q: "أَيْنَ تَقَعُ الْمَزْبَلَةُ وَالْمِمْسَحَةُ؟",
          latinQ: "Di mana posisi tempat sampah dan keset kaki?",
          options: ["خَارِجَ الْفَصْلِ", "فِي الْخِزَانَةِ", "عَلَى السَّقْفِ", "وَراَءَ الْفَصْلِ"],
          answer: 0,
          explanation: "Pada teks disebutkan: 'الْمَزْبَلَةُ جَانِبَ الْبَابِ وَالْمِمْسَحَةُ أَمَامَ الْبَابِ. هُمَا خَارِجَ الْفَصْلِ'."
        }
      ]
    }
  ],

  // 4. MAHARAH ISTIMA' (مهارة الاستماع - 10 Soal per Teks)
  istima: [
    {
      id: "istima_teks_a",
      title: "الاسْتِمَاعُ (أ) : نَصُّ أَحْمَدَ وَأَغُوْسَ",
      latinTitle: "Bahan Istima' Teks A: Ahmad dan Agus",
      topicId: "taaruf",
      arabicText: `اِسْمِي أَحْمَدُ. أَنَا مِنْ جُوْمْبَانْج. عُنْوَانِي شَارِعُ كِيَاهِي الْحَاجِّ عَبْدِ الْوَهَّابِ رَقْمُ ٧٩ جُوْمْبَانْج. أَنَا مُتَخَرِّجٌ فِي مَدْرَسَةِ "الْإِحْسَانِ" الْمُتَوَسِّطَةِ الْإِسْلَامِيَّةِ جُوْمْبَانْج. أَنَا الْآنَ أَتَعَلَّمُ فِي الْمَدْرَسَةِ الثَّانَوِيَّةِ الْإِسْلَامِيَّةِ الْحُكُوْمِيَّةِ ٤ جُوْمْبَانْج. وَعُنْوَانُ الْمَدْرَسَةِ شَارِعُ إِمَام بُونْجُوْل رَقْمُ ٧١ جُوْمْبَانْج. أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالدَّرَّاجَةِ.

وَهَذَا صَدِيْقِي ، اسْمُهُ أَغُوْسُ هُوَ مِنْ سُوْرَابَايَا. عُنْوَانُهُ شَارِعُ أَحْمَد يَانِي رَقْمُ ٥٤ سُوْرَابَايَا. أَغُوْسُ مُتَخَرِّجٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ الْحُكُوْمِيَّةِ ٥ سُوْرَابَايَا. هُوَ يُحِبُّ دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الطَّبِيْعِيَّةِ.

وَبِالْإِضَافَةِ إِلَى ذَلِك هُوَ يُرِيْدُ تَعَلُّمَ الْعُلُوْمِ الدِّيْنِيَّةِ، فَيُوَاصِلُ الدِّرَاسَةَ إِلَى هَذِهِ الْمَدْرَسَةِ. أَغُوْسُ يَسْكُنُ فِي الْمَعْهَدِ الْإِسْلَامِيِّ. هُوَ يُرِيْدُ تَعَلُّمَ الْعُلُوْمِ الدِّيْنِيَّةِ كَثِيْرًا. فِي الصَّبَاحِ هُوَ يَتَعَلَّمُ الرِّيَاضِيَّاتِ وَالْعُلُوْمَ الطَّبِيْعِيَّةَ وَالْعُلُوْمَ الْأُخْرَى فِي الْمَدْرَسَةِ ، وَفِي الْمَسَاءِ يَتَعَلَّمُ الْعُلُوْمَ الدِّيْنِيَّةَ فِي الْمَعْهَدِ.`,
      fillBlanks: [
        {
          textToSpeech: "عُنْوَانِي شَارِعُ كِيَاهِي الْحَاجِّ عَبْدِ الْوَهَّابِ رَقْمُ ٧٩ جُوْمْبَانْج",
          sentenceTemplate: "عُنْوَانِي شَارِعُ كِيَاهِي الْحَاجِّ _____ رَقْمُ ٧٩ جُوْمْبَانْج",
          options: ["عَبْدِ الْوَهَّابِ", "إِمَام بُونْجُوْل", "أَحْمَد يَانِي", "سُونْكُونُو"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'عَبْدِ الْوَهَّابِ'."
        },
        {
          textToSpeech: "أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالدَّرَّاجَةِ",
          sentenceTemplate: "أَذْهَبُ إِلَى الْمَدْرَسَةِ _____ ",
          options: ["بِالسَّيَّارَةِ", "بِالحَافِلَةِ", "بِالدَّرَّاجَةِ", "مَاشِيًا"],
          correct: 2,
          explanation: "Kata yang terucap pada audio adalah 'بِالدَّرَّاجَةِ'."
        },
        {
          textToSpeech: "أَغُوْسُ يَسْكُنُ فِي الْمَعْهَدِ الْإِسْلَامِيِّ",
          sentenceTemplate: "أَغُوْسُ يَسْكُنُ فِي _____ ",
          options: ["البَيْتِ", "الْمَعْهَدِ الْإِسْلَامِيِّ", "الفُنْدُقِ", "السَّكَنِ"],
          correct: 1,
          explanation: "Kata yang terucap pada audio adalah 'الْمَعْهَدِ الْإِسْلَامِيِّ'."
        },
        {
          textToSpeech: "أَغُوْسُ مُتَخَرِّجٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ الْحُكُوْمِيَّةِ ٥ سُوْرَابَايَا",
          sentenceTemplate: "أَغُوْسُ مُتَخَرِّجٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ _____ ٥ سُوْرَابَايَا",
          options: ["الْحُكُوْمِيَّةِ", "الأَهْلِيَّةِ", "الخَاصَّةِ", "العَالِيَةِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'الْحُكُوْمِيَّةِ'."
        },
        {
          textToSpeech: "وَفِي الْمَسَاءِ يَتَعَلَّمُ الْعُلُوْمَ الدِّيْنِيَّةَ فِي الْمَعْهَدِ",
          sentenceTemplate: "وَفِي الْمَسَاءِ يَتَعَلَّمُ الْعُلُوْمَ _____ فِي الْمَعْهَدِ",
          options: ["الدِّيْنِيَّةَ", "الرِّيَاضِيَّاتِ", "اللُّغَوِيَّةَ", "الطَّبِيْعِيَّةَ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'الدِّيْنِيَّةَ'."
        }
      ],
      questions: [
        {
          q: "مِنْ أَيْن أَحْمَدُ؟",
          latinQ: "Dari mana Ahmad berasal?",
          options: ["سُوْرَابَايَا", "جُوْمْبَانْج", "يُوغْيَاكَرْتَا", "بَالِي"],
          answer: 1,
          explanation: "Berdasarkan audio naskah: 'اِسْمِي أَحْمَدُ. أَنَا مِنْ جُوْمْبَانْج'."
        },
        {
          q: "كَيْفَ يَذْهَبُ أَحْمَدُ إِلَى الْمَدْرَسَةِ؟",
          latinQ: "Bagaimana Ahmad pergi ke sekolah?",
          options: ["بِالسَّيَّارَةِ", "بِالحَافِلَةِ", "بِالدَّرَّاجَةِ", "مَاشِيًا عَلَى الأَقْدَامِ"],
          answer: 2,
          explanation: "Berdasarkan audio naskah: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالدَّرَّاجَةِ'."
        },
        {
          q: "مَاذَا يُحِبُّ أَغُوْسُ؟",
          latinQ: "Apa yang disukai Agus?",
          options: ["دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الطَّبِيْعِيَّةِ", "الرَّسْمَ", "كُرَةَ القَدَمِ", "السِّبَاحَةَ"],
          answer: 0,
          explanation: "Berdasarkan audio naskah: 'هُوَ يُحِبُّ دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الطَّبِيْعِيَّةِ'."
        },
        {
          q: "أَيْنَ يَسْكُنُ أَغُوْسُ؟",
          latinQ: "Di mana Agus tinggal?",
          options: ["فِي البَيْتِ", "فِي الْمَعْهَدِ الْإِسْلَامِيِّ", "فِي الفُنْدُقِ", "فِي الشَّقَّةِ"],
          answer: 1,
          explanation: "Berdasarkan audio naskah: 'أَغُوْسُ يَسْكُنُ فِي الْمَعْهَدِ الْإِسْلَامِيِّ'."
        },
        {
          q: "مَاذَا يَتَعَلَّمُ أَغُوْسُ فِي الْمَسَاءِ؟",
          latinQ: "Apa yang dipelajari Agus pada malam hari?",
          options: ["الْعُلُوْمَ الدِّيْنِيَّةَ", "الرِّيَاضِيَّاتِ", "اللُّغَةَ الإِنْجِلِيْزِيَّةَ", "الرَّسْمَ"],
          answer: 0,
          explanation: "Berdasarkan audio naskah: 'وَفِي الْمَسَاءِ يَتَعَلَّمُ الْعُلُوْمَ الدِّيْنِيَّةَ فِي الْمَعْهَدِ'."
        }
      ]
    },
    {
      id: "istima_teks_b",
      title: "الاسْتِمَاعُ (ب) : نَصُّ لَيْلَى وَيَايَا",
      latinTitle: "Bahan Istima' Teks B: Laila dan Yaya",
      topicId: "taaruf",
      arabicText: `اِسْمِي لَيْلَى. أَنَا مِنْ سِيْدُؤَارْجُو. أَنَا مُتَخَرِّجَةٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ الْإِسْلَامِيَّةِ الْحُكُوْمِيَّةِ يُوغْيَاكَرْتَا. عُنْوَانِي شَارِعُ سُونْكُونُو رَقْمُ ٢٧ يُوغْيَاكَرْتَا. بَيْتِي بَعِيْدٌ عَنِ الْمَدْرَسَةِ. وَأَنَا أُحِبُّ دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الِاجْتِمَاعِيَّةِ وَاللُّغَةِ. فَأُوَاصِلُ الدِّرَاسَةَ إِلَى الْمَدْرَسَةِ الثَّانَوِيَّةِ الْإِسْلَامِيَّةِ الْحُكُوْمِيَّةِ ٤ جُوْمْبَانْج ، وَأَسْكُنُ فِي سَكَنِ الْمَدْرَسَةِ لِلْوُصُوْلِ إِلَيْهَا فِي الْمِيْعَادِ. أُحِبُّ التَّعَلُّمَ فِي هَذِهِ الْمَدْرَسَةِ، لِأَنَّهَا مَدْرَسَةٌ رَائِعَةٌ وَجَيِّدَةٌ، فِيْهَا مَرَافِقُ مَدْرَسِيَّةٌ لِلدِّرَاسَةِ.

وَهَذِهِ صَدِيْقَتِي اسْمُهَا يَايَا. هِيَ مِنْ بَالِي. هِيَ مُتَخَرِّجَةٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ الْإِسْلَامِيَّةِ الْحُكُوْمِيَّةِ ١ جَمْرَانَا بَالِي. هِيَ تُحِبُّ دِرَاسَةَ الرِّيَاضِيَّاتِ وَالْعُلُوْمِ الِاجْتِمَاعِيَّةِ وَاللُّغَةِ مِثْلِي. هِيَ تَسْكُنُ فِي نَفْسِ السَّكَنِ مَعِي. نَحْنُ نَذْهَبُ إِلَى الْمَدْرَسَةِ صَبَاحًا وَنَرْجِعُ مِنْهَا نَهَارًا مَعًا.`,
      fillBlanks: [
        {
          textToSpeech: "عُنْوَانِي شَارِعُ سُونْكُونُو رَقْمُ ٢٧ يُوغْيَاكَرْتَا",
          sentenceTemplate: "عُنْوَانِي شَارِعُ _____ رَقْمُ ٢٧ يُوغْيَاكَرْتَا",
          options: ["سُونْكُونُو", "إِمَام بُونْجُوْل", "أَحْمَد يَانِي", "عَبْدِ الْوَهَّابِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'سُونْكُونُو'."
        },
        {
          textToSpeech: "وَأَسْكُنُ فِي سَكَنِ الْمَدْرَسَةِ لِلْوُصُوْلِ إِلَيْهَا فِي الْمِيْعَادِ",
          sentenceTemplate: "وَأَسْكُنُ فِي _____ الْمَدْرَسَةِ",
          options: ["سَكَنِ", "بَيْتِ", "مَعْهَدِ", "فُنْدُقِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'سَكَنِ'."
        },
        {
          textToSpeech: "نَحْنُ نَذْهَبُ إِلَى الْمَدْرَسَةِ صَبَاحًا وَنَرْجِعُ مِنْهَا نَهَارًا مَعًا",
          sentenceTemplate: "نَحْنُ نَذْهَبُ إِلَى الْمَدْرَسَةِ صَبَاحًا وَنَرْجِعُ مِنْهَا _____ مَعًا",
          options: ["مَسَاءً", "نَهَارًا", "لَيْلًا", "فَجْرًا"],
          correct: 1,
          explanation: "Kata yang terucap pada audio adalah 'نَهَارًا'."
        },
        {
          textToSpeech: "وَهَذِهِ صَدِيْقَتِي اسْمُهَا يَايَا. هِيَ مِنْ بَالِي",
          sentenceTemplate: "وَهَذِهِ صَدِيْقَتِي اسْمُهَا يَايَا. هِيَ مِنْ _____ ",
          options: ["بَالِي", "سُوْرَابَايَا", "جُوْمْبَانْج", "لَمْبُوك"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'بَالِي'."
        },
        {
          textToSpeech: "أُحِبُّ التَّعَلُّمَ فِي هَذِهِ الْمَدْرَسَةِ، لِأَنَّهَا مَدْرَسَةٌ رَائِعَةٌ وَجَيِّدَةٌ",
          sentenceTemplate: "أُحِبُّ التَّعَلُّمَ فِي هَذِهِ الْمَدْرَسَةِ، لِأَنَّهَا مَدْرَسَةٌ _____ ",
          options: ["رَائِعَةٌ", "قَدِيْمَةٌ", "صَغِيْرَةٌ", "بَعِيْدَةٌ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'رَائِعَةٌ'."
        }
      ],
      questions: [
        {
          q: "مِنْ أَيْن لَيْلَى؟",
          latinQ: "Dari mana Laila berasal?",
          options: ["سِيْدُؤَارْجُو", "بَالِي", "سُوْرَابَايَا", "جُوْمْبَانْج"],
          answer: 0,
          explanation: "Berdasarkan audio naskah: 'اِسْمِي لَيْلَى. أَنَا مِنْ سِيْدُؤَارْجُو'."
        },
        {
          q: "أَيْنَ تَسْكُنُ لَيْلَى؟",
          latinQ: "Di mana Laila tinggal?",
          options: ["فِي البَيْتِ", "فِي سَكَنِ الْمَدْرَسَةِ", "فِي الفُنْدُقِ", "فِي الْمَعْهَدِ"],
          answer: 1,
          explanation: "Berdasarkan audio naskah: 'وَأَسْكُنُ فِي سَكَنِ الْمَدْرَسَةِ'."
        },
        {
          q: "مِنْ أَيْن يَايَا؟",
          latinQ: "Dari mana Yaya berasal?",
          options: ["بَالِي", "يُوغْيَاكَرْتَا", "جُوْمْبَانْج", "سِنْجَاوَانْج"],
          answer: 0,
          explanation: "Berdasarkan audio naskah: 'وَهَذِهِ صَدِيْقَتِي اسْمُهَا يَايَا. هِيَ مِنْ بَالِي'."
        },
        {
          q: "كَيْفَ تَذْهَبُ لَيْلَى وَيَايَا إِلَى الْمَدْرَسَةِ؟",
          latinQ: "Bagaimana Laila dan Yaya pergi ke sekolah?",
          options: ["نَذْهَبُ صَبَاحًا وَنَرْجِعُ نَهَارًا مَعًا", "بِالسَّيَّارَةِ", "بِالدَّرَّاجَةِ", "وَحْدَهُمَا"],
          answer: 0,
          explanation: "Berdasarkan audio naskah: 'نَحْنُ نَذْهَبُ إِلَى الْمَدْرَسَةِ صَبَاحًا وَنَرْجِعُ مِنْهَا نَهَارًا مَعًا'."
        },
        {
          q: "أَيْنَ تَسْكُنُ يَايَا؟",
          latinQ: "Di mana Yaya tinggal?",
          options: ["فِي نَفْسِ السَّكَنِ مَعَ لَيْلَى", "فِي البَيْتِ", "فِي الفُنْدُقِ", "فِي شَقَّةٍ"],
          answer: 0,
          explanation: "Berdasarkan audio naskah: 'هِيَ تَسْكُنُ فِي نَفْسِ السَّكَنِ مَعِي'."
        }
      ]
    },
    {
      id: "istima_teks_c",
      title: "الاسْتِمَاعُ (ج) - البَابُ الثَّانِي : نَصُّ أُسْرَةِ حَسَنٍ",
      latinTitle: "Bahan Istima' Bab 2 Teks C: Keluarga Hasan",
      topicId: "usrah",
      arabicText: `اِسْمِي حَسَنٌ. أَنَا طَالِبٌ فِي الْمَدْرَسَةِ الثَّانَوِيَّةِ. هَذِهِ صُوْرَةُ أُسْرَتِي. أَبِي اسْمُهُ السَّيِّدُ عُثْمَانُ، هُوَ مُهَنْدِسٌ نَشِيْطٌ. وَأُمِّي اسْمُهَا السَّيِّدَةُ مَرْيَمُ، هِيَ طَبِيْبَةٌ فِي الْمُسْتَشْفَى. لِي أَخٌ صَغِيْرٌ اسْمُهُ عَلِيٌّ، وَأُخْتٌ كَبِيْرَةٌ اسْمُهَا فَاطِمَةُ. نَحْنُ نَعِيْشُ فِي بَيْتٍ جَمِيْلٍ وَنَظِيْفٍ فِي مَدِيْنَةِ بُونْتِيَانَاك.`,
      fillBlanks: [
        {
          textToSpeech: "أَبِي اسْمُهُ السَّيِّدُ عُثْمَانُ، هُوَ مُهَنْدِسٌ نَشِيْطٌ",
          sentenceTemplate: "أَبِي اسْمُهُ السَّيِّدُ عُثْمَانُ، هُوَ _____ نَشِيْطٌ",
          options: ["مُهَنْدِسٌ", "مُدَرِّسٌ", "طَبِيْبٌ", "فَلَّاحٌ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'مُهَنْدِسٌ' (Insinyur)."
        },
        {
          textToSpeech: "وَأُمِّي اسْمُهَا السَّيِّدَةُ مَرْيَمُ، هِيَ طَبِيْبَةٌ فِي الْمُسْتَشْفَى",
          sentenceTemplate: "وَأُمِّي اسْمُهَا السَّيِّدَةُ مَرْيَمُ، هِيَ طَبِيْبَةٌ فِي _____ ",
          options: ["الْمُسْتَشْفَى", "الْمَدْرَسَةِ", "الْمَكْتَبِ", "السُّوْقِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'الْمُسْتَشْفَى' (Rumah sakit)."
        },
        {
          textToSpeech: "لِي أَخٌ صَغِيْرٌ اسْمُهُ عَلِيٌّ",
          sentenceTemplate: "لِي أَخٌ _____ اسْمُهُ عَلِيٌّ",
          options: ["صَغِيْرٌ", "كَبِيْرٌ", "مَاهِرٌ", "طَوِيْلٌ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'صَغِيْرٌ' (Adik laki-laki)."
        },
        {
          textToSpeech: "وَأُخْتٌ كَبِيْرَةٌ اسْمُهَا فَاطِمَةُ",
          sentenceTemplate: "وَأُخْتٌ كَبِيْرَةٌ اسْمُهَا _____ ",
          options: ["فَاطِمَةُ", "مَرْيَمُ", "عَائِشَةُ", "لَيْلَى"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'فَاطِمَةُ'."
        },
        {
          textToSpeech: "نَحْنُ نَعِيْشُ فِي بَيْتٍ جَمِيْلٍ وَنَظِيْفٍ فِي مَدِيْنَةِ بُونْتِيَانَاك",
          sentenceTemplate: "نَحْنُ نَعِيْشُ فِي بَيْتٍ جَمِيْلٍ وَنَظِيْفٍ فِي مَدِيْنَةِ _____ ",
          options: ["بُونْتِيَانَاك", "سُوْرَابَايَا", "جَاكَرْتَا", "بَانْدُونْج"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'بُونْتِيَانَاك'."
        }
      ],
      questions: [
        {
          q: "مَا مِهْنَةُ وَالِدِ حَسَنٍ (السَّيِّدِ عُثْمَانَ)؟",
          latinQ: "Apakah profesi ayah Hasan (Pak Usman)?",
          options: ["مُهَنْدِسٌ", "طَبِيْبٌ", "مُدَرِّسٌ", "تَاجِرٌ"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'أَبِي اسْمُهُ السَّيِّدُ عُثْمَانُ، هُوَ مُهَنْدِسٌ'."
        },
        {
          q: "أَيْنَ تَعْمَلُ أُمُّ حَسَنٍ (السَّيِّدَةُ مَرْيَمُ)؟",
          latinQ: "Di mana ibu Hasan (Bu Maryam) bekerja?",
          options: ["فِي الْمُسْتَشْفَى", "فِي الْمَدْرَسَةِ", "فِي الْمَكْتَبَةِ", "فِي الشَّرِكَةِ"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'هِيَ طَبِيْبَةٌ فِي الْمُسْتَشْفَى'."
        },
        {
          q: "مَنْ هُوَ عَلِيٌّ؟",
          latinQ: "Siapakah Ali?",
          options: ["أَخُو حَسَنٍ الصَّغِيْرُ", "أَخُو حَسَنٍ الْكَبِيْرُ", "عَمُّ حَسَنٍ", "جَدُّ حَسَنٍ"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'لِي أَخٌ صَغِيْرٌ اسْمُهُ عَلِيٌّ'."
        },
        {
          q: "مَا اسْمُ أُخْتِ حَسَنٍ الْكَبِيْرَةِ؟",
          latinQ: "Siapakah nama kakak perempuan Hasan?",
          options: ["فَاطِمَةُ", "مَرْيَمُ", "عَائِشَةُ", "لَيْلَى"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'وَأُخْتٌ كَبِيْرَةٌ اسْمُهَا فَاطِمَةُ'."
        },
        {
          q: "أَيْنَ تَعِيْشُ أُسْرَةُ حَسَنٍ؟",
          latinQ: "Di mana keluarga Hasan tinggal?",
          options: ["فِي مَدِيْنَةِ بُونْتِيَانَاك", "فِي سُوْرَابَايَا", "فِي جُوْمْبَانْج", "فِي بَالِي"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'نَحْنُ نَعِيْشُ فِي بَيْتٍ جَمِيْلٍ وَنَظِيْفٍ فِي مَدِيْنَةِ بُونْتِيَانَاك'."
        }
      ]
    },
    {
      id: "istima_teks_d",
      title: "الاسْتِمَاعُ (د) - البَابُ الثَّانِي : نَصُّ بَيْتِ خَالِدٍ",
      latinTitle: "Bahan Istima' Bab 2 Teks D: Rumah Khalid",
      topicId: "usrah",
      arabicText: `هَذَا بَيْتُ خَالِدٍ. الْبَيْتُ كَبِيْرٌ وَنَظِيْفٌ. فِي الْبَيْتِ غُرْفَةُ الْجُلُوْسِ وَغُرْفَةُ النَّوْمِ وَغُرْفَةُ الأَكْلِ وَالْمَطْبَخُ وَالْحَمَّامُ. فِي غُرْفَةِ الْجُلُوْسِ أَرِيْكَةٌ وَمِنْضَدَةٌ. وَفِي غُرْفَةِ النَّوْمِ سَرِيْرٌ وَخِزَانَةٌ. الأُمُّ تَطْبُخُ الطَّعَامَ فِي الْمَطْبَخِ، وَالأَبُ يَقْرَأُ الصَّحِيْفَةَ فِي غُرْفَةِ الْجُلُوْسِ.`,
      fillBlanks: [
        {
          textToSpeech: "الْبَيْتُ كَبِيْرٌ وَنَظِيْفٌ",
          sentenceTemplate: "الْبَيْتُ كَبِيْرٌ _____ ",
          options: ["وَنَظِيْفٌ", "وَصَغِيْرٌ", "وَقَدِيْمٌ", "وَبَعِيْدٌ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'وَنَظِيْفٌ' (Dan bersih)."
        },
        {
          textToSpeech: "فِي غُرْفَةِ الْجُلُوْسِ أَرِيْكَةٌ وَمِنْضَدَةٌ",
          sentenceTemplate: "فِي غُرْفَةِ الْجُلُوْسِ _____ وَمِنْضَدَةٌ",
          options: ["أَرِيْكَةٌ", "سَرِيْرٌ", "ثَلَّاجَةٌ", "سَبُّوْرَةٌ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'أَرِيْكَةٌ' (Sofa)."
        },
        {
          textToSpeech: "وَفِي غُرْفَةِ النَّوْمِ سَرِيْرٌ وَخِزَانَةٌ",
          sentenceTemplate: "وَفِي غُرْفَةِ النَّوْمِ سَرِيْرٌ _____ ",
          options: ["وَخِزَانَةٌ", "وَمَطْبَخٌ", "وَحَمَّامٌ", "وَمَكْتَبَةٌ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'وَخِزَانَةٌ' (Dan lemari)."
        },
        {
          textToSpeech: "الأُمُّ تَطْبُخُ الطَّعَامَ فِي الْمَطْبَخِ",
          sentenceTemplate: "الأُمُّ تَطْبُخُ الطَّعَامَ فِي _____ ",
          options: ["الْمَطْبَخِ", "غُرْفَةِ النَّوْمِ", "الْحَمَّامِ", "الْمَكْتَبِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'الْمَطْبَخِ' (Dapur)."
        },
        {
          textToSpeech: "وَالأَبُ يَقْرَأُ الصَّحِيْفَةَ فِي غُرْفَةِ الْجُلُوْسِ",
          sentenceTemplate: "وَالأَبُ يَقْرَأُ _____ فِي غُرْفَةِ الْجُلُوْسِ",
          options: ["الصَّحِيْفَةَ", "الْكِتَابَ", "الرِّسَالَةَ", "الْمَجَلَّةَ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'الصَّحِيْفَةَ' (Koran / Surat Kabar)."
        }
      ],
      questions: [
        {
          q: "كَيْفَ بَيْتُ خَالِدٍ؟",
          latinQ: "Bagaimanakah kondisi rumah Khalid?",
          options: ["كَبِيْرٌ وَنَظِيْفٌ", "صَغِيْرٌ وَمُتَّسِخٌ", "قَدِيْمٌ وَمَهْجُوْرٌ", "بَعِيْدٌ وَمُغْلَقٌ"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'الْبَيْتُ كَبِيْرٌ وَنَظِيْفٌ'."
        },
        {
          q: "مَاذَا يُوجَدُ فِي غُرْفَةِ الْجُلُوْسِ؟",
          latinQ: "Apa yang ada di ruang tamu?",
          options: ["أَرِيْكَةٌ وَمِنْضَدَةٌ", "سَرِيْرٌ وَخِزَانَةٌ", "مَطْبَخٌ وَثَلَّاجَةٌ", "حَمَّامٌ وَمَغْسَلَةٌ"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'فِي غُرْفَةِ الْجُلُوْسِ أَرِيْكَةٌ وَمِنْضَدَةٌ'."
        },
        {
          q: "أَيْنَ يُوجَدُ السَّرِيْرُ وَالْخِزَانَةُ؟",
          latinQ: "Di manakah terdapat kasur dan lemari?",
          options: ["فِي غُرْفَةِ النَّوْمِ", "فِي الْمَطْبَخِ", "فِي غُرْفَةِ الْجُلُوْسِ", "فِي الْحَمَّامِ"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'وَفِي غُرْفَةِ النَّوْمِ سَرِيْرٌ وَخِزَانَةٌ'."
        },
        {
          q: "مَاذَا تَفْعَلُ الأُمُّ فِي الْمَطْبَخِ؟",
          latinQ: "Apa yang dilakukan Ibu di dapur?",
          options: ["تَطْبُخُ الطَّعَامَ", "تَنَامُ", "تَقْرَأُ الصَّحِيْفَةَ", "تَغْسِلُ الوَجْهَ"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'الأُمُّ تَطْبُخُ الطَّعَامَ فِي الْمَطْبَخِ'."
        },
        {
          q: "مَاذَا يَفْعَلُ الأَبُ فِي غُرْفَةِ الْجُلُوْسِ؟",
          latinQ: "Apa yang dilakukan Ayah di ruang tamu?",
          options: ["يَقْرَأُ الصَّحِيْفَةَ", "يَطْبُخُ الطَّعَامَ", "يَنَامُ", "يَسْتَحِمُّ"],
          answer: 0,
          explanation: "Pada audio disebutkan: 'وَالأَبُ يَقْرَأُ الصَّحِيْفَةَ فِي غُرْفَةِ الْجُلُوْسِ'."
        }
      ]
    },
    {
      id: "istima_teks_e",
      title: "الاسْتِمَاعُ (هـ) - البَابُ الثَّالِثُ : نَصُّ فِي الْمَدْرَسَةِ (سَالِم)",
      latinTitle: "Bahan Istima' Bab 3 Teks E: Di Sekolah (Salim)",
      topicId: "madrasah",
      arabicText: `أَنَا سَالِمٌ. أَتَعَلَّمُ فِي مَدْرَسَةِ دَارِ الْمَعَارِفِ الثَّانَوِيَّةِ الإِسْلَامِيَّةِ. تَقَعُ هَذِهِ الْمَدْرَسَةُ فِي مَتَارَمْ (Mataram) نُوْسَاتَنْجَارَا الْغَرْبِيَّةِ (NTB). يَدْرُسُ فِي هَذِهِ الْمَدْرَسَةِ حَوَالَيْ ٩٦٠ (تِسْعُمِئَةٍ وَسِتُّوْنَ) طَالِبًا وَطَالِبَةً. هُمْ يَدْرُسُوْنَ فِي ٣٠ (ثَلَاثِيْنَ) فَصْلًا دِرَاسِيًّا. وَيُعَلِّمُ الطُّلَّابَ وَالطَّالِبَاتِ ٩٠ (تِسْعُوْنَ) مُدَرِّسًا وَمُدَرِّسَةً. هُمْ يَجْتَمِعُوْنَ وَيَجْلِسُوْنَ فِي مَكْتَبِ هَيْئَةِ التَّدْرِيْسِ وَقْتَ الاِسْتِرَاحَةِ. وَيَعْمَلُ فِي هَذِهِ الْمَدْرَسَةِ الْمُوَظَّفُوْنَ الإِدَارِيُّوْنَ. هُمْ يَعْمَلُوْنَ فِي مَكْتَبِ الشُّؤُوْنِ الإِدَارِيَّةِ.`,
      fillBlanks: [
        {
          textToSpeech: "تَقَعُ هَذِهِ الْمَدْرَسَةُ فِي مَتَارَمْ نُوْسَاتَنْجَارَا الْغَرْبِيَّةِ",
          sentenceTemplate: "تَقَعُ هَذِهِ الْمَدْرَسَةُ فِي _____ نُوْسَاتَنْجَارَا الْغَرْبِيَّةِ",
          options: ["مَتَارَمْ", "بُونْتِيَانَاك", "سُوْرَابَايَا", "جَاكَرْتَا"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'مَتَارَمْ'."
        },
        {
          textToSpeech: "وَ يُعَلِّمُ الطُّلَّابَ وَالطَّالِبَاتِ ٩٠ مُدَرِّسًا وَمُدَرِّسَةً",
          sentenceTemplate: "وَ يُعَلِّمُ الطُّلَّابَ وَالطَّالِبَاتِ _____ مُدَرِّسًا",
          options: ["٩٠ (تِسْعُوْنَ)", "٥٠ (خَمْسُوْنَ)", "٣٠ (ثَلَاثُوْنَ)", "١٠٠ (مِئَةٌ)"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah '٩٠ (تِسْعُوْنَ)'."
        },
        {
          textToSpeech: "نَتَدَرَّبُ عَلَى الاِسْتِمَاعِ وَالْكَلَامِ فِي مَعْمَلِ اللُّغَاتِ",
          sentenceTemplate: "نَتَدَرَّبُ عَلَى الاِسْتِمَاعِ وَالْكَلَامِ فِي _____ ",
          options: ["مَعْمَلِ اللُّغَاتِ", "الْمَلْعَبِ", "الْمَقْصَفِ", "الْمَسْجِدِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'مَعْمَلِ اللُّغَاتِ'."
        },
        {
          textToSpeech: "وَالْبَعْضُ يَذْهَبُ إِلَى الْمَقْصَفِ لِشِرَاءِ الْمَأْكُوْلَاتِ وَالْمَشْرُوْبَاتِ",
          sentenceTemplate: "وَالْبَعْضُ يَذْهَبُ إِلَى _____ لِشِرَاءِ الْمَأْكُوْلَاتِ",
          options: ["الْمَقْصَفِ", "الْمَكْتَبَةِ", "الْمَسْجِدِ", "الْفَصْلِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'الْمَقْصَفِ'."
        },
        {
          textToSpeech: "وَنَحْنُ نَحْتَفِلُ بِذِكْرَى مَوْلِدِ الرَّسُوْلِ فِي قَاعَةِ الاِجْتِمَاعِ",
          sentenceTemplate: "وَنَحْنُ نَحْتَفِلُ بِذِكْرَى مَوْلِدِ الرَّسُوْلِ فِي _____ ",
          options: ["قَاعَةِ الاِجْتِمَاعِ", "الْمَلْعَبِ", "الْمَكْتَبَةِ", "الْمَطْبَخِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'قَاعَةِ الاِجْتِمَاعِ'."
        }
      ],
      questions: [
        {
          q: "أَيْنَ تَقَعُ مَدْرَسَةُ سَالِمٍ؟",
          latinQ: "Di mana madrasah tempat Salim belajar berada?",
          options: ["فِي مَتَارَمْ (NTB)", "فِي بُونْتِيَانَاك", "فِي جُوْمْبَانْج", "فِي بَالِي"],
          answer: 0,
          explanation: "Berdasarkan audio: 'تَقَعُ هَذِهِ الْمَدْرَسَةُ فِي مَتَارَمْ'."
        },
        {
          q: "أَيْنَ يَجْلِسُ الْمُدَرِّسُوْنَ وَقْتَ الاِسْتِرَاحَةِ؟",
          latinQ: "Di mana para guru duduk pada waktu istirahat?",
          options: ["فِي مَكْتَبِ هَيْئَةِ التَّدْرِيْسِ", "فِي الْمَقْصَفِ", "فِي الْمَلْعَبِ", "فِي الْفَصْلِ"],
          answer: 0,
          explanation: "Berdasarkan audio: 'يَجْتَمِعُوْنَ وَيَجْلِسُوْنَ فِي مَكْتَبِ هَيْئَةِ التَّدْرِيْسِ'."
        },
        {
          q: "أَيْنَ يَعْمَلُ الْمُوَظَّفُوْنَ الإِدَارِيُّوْنَ؟",
          latinQ: "Di mana pegawai tata usaha bekerja?",
          options: ["فِي مَكْتَبِ الشُّؤُوْنِ الإِدَارِيَّةِ", "فِي الْمَكْتَبَةِ", "فِي الْمَسْجِدِ", "فِي الْمَقْصَفِ"],
          answer: 0,
          explanation: "Berdasarkan audio: 'هُمْ يَعْمَلُوْنَ فِي مَكْتَبِ الشُّؤُوْنِ الإِدَارِيَّةِ'."
        },
        {
          q: "مَا هُوَ يَوْمُ الْعُطْلَةِ لِلْمَدْرَسَةِ؟",
          latinQ: "Apakah hari libur madrasah?",
          options: ["يَوْمُ الأَحَدِ", "يَوْمُ الْجُمُعَةِ", "يَوْمُ السَّبْتِ", "يَوْمُ الإِثْنَيْنِ"],
          answer: 0,
          explanation: "Berdasarkan audio: 'يَوْمُ الأَحَدِ يَوْمُ الْعُطْلَةِ لِمَدْرَسَتِنَا'."
        },
        {
          q: "أَيْنَ يُصَلِّي الطُّلَّابُ صَلَاةَ الضُّحَى؟",
          latinQ: "Di mana siswa melaksanakan salat Dhuha?",
          options: ["فِي مَسْجِدِ الْمَدْرَسَةِ", "فِي الْفَصْلِ", "فِي قَاعَةِ الاِجْتِمَاعِ", "فِي الْمَلْعَبِ"],
          answer: 0,
          explanation: "Berdasarkan audio: 'وَالآخَرُ يُصَلِّي الضُّحَى فِي مَسْجِدِ الْمَدْرَسَةِ'."
        }
      ]
    },
    {
      id: "istima_teks_f",
      title: "الاسْتِمَاعُ (و) - البَابُ الثَّالِثُ : نَصُّ فِي الْفَصْلِ (نَجْوَى)",
      latinTitle: "Bahan Istima' Bab 3 Teks F: Di Kelas (Najwa)",
      topicId: "madrasah",
      arabicText: `أَنَا نَجْوَى. أَنَا طَالِبَةٌ مِنْ طَالِبَاتِ مَدْرَسَةِ دَارِ الْحِكْمَةِ الثَّانَوِيَّةِ الإِسْلَامِيَّةِ. أَجْلِسُ فِي الصَّفِّ الْعَاشِرِ (د). عَدَدُ الطَّلَبَةِ فِي الصَّفِّ ٣٠ (ثَلَاثُوْنَ) شَخْصًا يَتَكَوَّنُ مِنْ ١٤ (أَرْبَعَةَ عَشَرَ) طَالِبًا وَ ١٦ (سِتَّ عَشَرَةَ) طَالِبَةً. فِي فَصْلِنَا شَاشَةٌ وَاحِدَةٌ وَسَبُّوْرَتَانِ اثْنَتَانِ وَمَكْتَبٌ وَكُرْسِيٌّ لِلْمُدَرِّسِ وَخِزَانَةٌ فِي رُكْنِ الْفَصْلِ.`,
      fillBlanks: [
        {
          textToSpeech: "عَدَدُ الطَّلَبَةِ فِي الصَّفِّ ٣٠ شَخْصًا",
          sentenceTemplate: "عَدَدُ الطَّلَبَةِ فِي الصَّفِّ _____ شَخْصًا",
          options: ["٣٠ (ثَلَاثُوْنَ)", "٢٠ (عِشْرُوْنَ)", "٤٠ (أَرْبَعُوْنَ)", "٥٠ (خَمْسُوْنَ)"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah '٣٠ (ثَلَاثُوْنَ)'."
        },
        {
          textToSpeech: "الْمِرْوَحَتَانِ وَسِتَّةُ مَصَابِيْحَ عَلَى السَّقْفِ",
          sentenceTemplate: "الْمِرْوَحَتَانِ وَسِتَّةُ مَصَابِيْحَ _____ ",
          options: ["عَلَى السَّقْفِ", "عَلَى الْجِدَارِ", "فِي الْخِزَانَةِ", "تَحْتَ الطَّاوِلَةِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'عَلَى السَّقْفِ'."
        },
        {
          textToSpeech: "نَصِلُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ",
          sentenceTemplate: "نَصِلُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ _____ ",
          options: ["السَّادِسَةِ وَالنِّصْفِ", "السَّابِعَةِ", "الثَّامِنَةِ", "الْخَامِسَةِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'السَّادِسَةِ وَالنِّصْفِ'."
        },
        {
          textToSpeech: "بَعْضُنَا يَكْنُسُ الْبَلَاطَ بِالْمِكْنَسَةِ",
          sentenceTemplate: "بَعْضُنَا يَكْنُسُ الْبَلَاطَ _____ ",
          options: ["بِالْمِكْنَسَةِ", "بِالطَّلَّاسَةِ", "بِالْمِمْسَحَةِ", "بِالْقَلَمِ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'بِالْمِكْنَسَةِ'."
        },
        {
          textToSpeech: "يَعْمَلُ الْمُدَرِّسُ الْكَشْفَ وَيَبْدَأُ الدَّرْسَ",
          sentenceTemplate: "يَعْمَلُ الْمُدَرِّسُ _____ وَيَبْدَأُ الدَّرْسَ",
          options: ["الْكَشْفَ", "الْكِتَابَ", "الرَّسْمَ", "الرِّيَاضَةَ"],
          correct: 0,
          explanation: "Kata yang terucap pada audio adalah 'الْكَشْفَ' (Presensi/Absensi)."
        }
      ],
      questions: [
        {
          q: "كَمْ طَالِبًا (ذَكَرًا) فِي صَفِّ نَجْوَى؟",
          latinQ: "Berapa jumlah siswa laki-laki di kelas Najwa?",
          options: ["١٤ (أَرْبَعَةَ عَشَرَ) طَالِبًا", "١٦ طَالِبَةً", "٣٠ طَالِبًا", "٢٠ طَالِبًا"],
          answer: 0,
          explanation: "Berdasarkan audio: 'يَتَكَوْنُ مِنْ ١٤ طَالِبًا'."
        },
        {
          q: "أَيْنَ تَقَعُ الْمِكْنَسَتَانِ وَالْمِمْسَحَةُ؟",
          latinQ: "Di mana posisi dua sapu dan kain pel?",
          options: ["مُعَلَّقَةٌ عَلَى الْجِدَارِ وَرَاءَ الْفَصْلِ", "عَلَى السَّقْفِ", "فِي الْخِزَانَةِ", "أَمَامَ الْبَابِ"],
          answer: 0,
          explanation: "Berdasarkan audio: 'الْمِكْنَسَتَانِ وَالْمِمْسَحَةُ مُعَلَّقَةٌ عَلَى الْجِدَارِ وَرَاءَ الْفَصْلِ'."
        },
        {
          q: "مَاذَا يَفْعَلُ الطُّلَّابُ عِنْدَ الوُصُوْلِ إِلَى الْفَصْلِ صَبَاحًا؟",
          latinQ: "Apa yang dilakukan siswa saat tiba di kelas pagi hari?",
          options: ["يُنَظِّفُوْنَ الْفَصْلَ", "يَنَامُوْنَ", "يَلْعَبُوْنَ", "يَشْرَبُوْنَ"],
          answer: 0,
          explanation: "Berdasarkan audio: 'نَحْنُ نُنَظِّفُ الْفَصْلَ'."
        },
        {
          q: "كَيْفَ يَسْتَمِعُ الطُّلَّابُ شَرْحَ الْمُدَرِّسِ؟",
          latinQ: "Bagaimana siswa mendengarkan penjelasan guru?",
          options: ["بِاهْتِمَامٍ كَبِيْرٍ", "بِالْكَسَلِ", "بِدُوْنِ اِنْتِبَاهٍ", "بِالضَّحِكِ"],
          answer: 0,
          explanation: "Berdasarkan audio: 'نَحْنُ نَسْتَمِعُ شَرْحَ الْمُدَرِّسِ اهْتِمَامًا كَبِيْرًا'."
        },
        {
          q: "مَاذَا يَفْعَلُ الْمُدَرِّسُ فِي آخِرِ الْحِصَّةِ؟",
          latinQ: "Apa yang dilakukan guru di akhir jam pelajaran?",
          options: ["يُلْقِي أَسْئِلَةً عَنِ الدَّرْسِ وَيَخْتَتِمُ الْحِصَّةَ", "يَكْنُسُ الْبَلَاطَ", "يَقْرَأُ الْقِصَّةَ", "يَخْرُجُ بِدُوْنِ كَلَامٍ"],
          answer: 0,
          explanation: "Berdasarkan audio: 'يُلْقِي الْمُدَرِّسُ أَسْئِلَةً عَنِ الدَّرْسِ آخِرَ الْحِصَّةِ'."
        }
      ]
    }
  ],

  // 5. QAWAID (القواعد - Tata Bahasa)
  qawaid: [
    {
      id: "istifham",
      title: "(١) أَدَوَاتُ الإِسْتِفْهَامِ (Kata Tanya / Question Words)",
      description: "الاسْتِفْهَامُ هُوَ الاسْتِعْلَامُ عَنْ شَيْءٍ أَوْ طَلَبُ الْعِلْمِ بِشَيْءٍ (Istifhām adalah meminta penjelasan / informasi terhadap sesuatu). Berikut 14 kata tanya utama:",
      tableHeaders: ["الرَّقْمُ", "الأَدَاةُ (Kata Tanya)", "Arti / Terjemahan", "Keterangan Penggunaan"],
      istifhamTable: [
        { id: 1, arabic: "مَا", meaning: "Apa", desc: "Menanyakan Subyek / Benda" },
        { id: 2, arabic: "مَنْ", meaning: "Siapa", desc: "Menanyakan Orang / Profesi" },
        { id: 3, arabic: "مَاذَا", meaning: "Apa", desc: "Menanyakan Kata Kerja / Aktivitas" },
        { id: 4, arabic: "لِمَاذَا", meaning: "Kenapa / Mengapa", desc: "Menanyakan Alasan / Sebab" },
        { id: 5, arabic: "لِمَنْ", meaning: "Milik Siapa", desc: "Menanyakan Kepemilikan" },
        { id: 6, arabic: "مَعَ مَنْ", meaning: "Bersama Siapa", desc: "Menanyakan Kebersamaan" },
        { id: 7, arabic: "أَيُّ / أَيَّةُ", meaning: "Yang Mana", desc: "Menanyakan Pilihan / Kepastian" },
        { id: 8, arabic: "أَيْنَ", meaning: "Di Mana", desc: "Menanyakan Tempat" },
        { id: 9, arabic: "مِنْ أَيْنَ", meaning: "Dari Mana", desc: "Menanyakan Asal Tempat" },
        { id: 10, arabic: "إِلَى أَيْنَ", meaning: "Ke Mana", desc: "Menanyakan Tujuan Tempat" },
        { id: 11, arabic: "هَلْ / أَيّ", meaning: "Apakah / Adakah", desc: "Jawaban Ya (نَعَمْ) atau Tidak (لَا)" },
        { id: 12, arabic: "مَتَى", meaning: "Kapan", desc: "Menanyakan Waktu" },
        { id: 13, arabic: "كَيْفَ", meaning: "Bagaimana", desc: "Menanyakan Keadaan / Cara" },
        { id: 14, arabic: "كَمْ", meaning: "Berapa", desc: "Menanyakan Jumlah / Bilangan" }
      ]
    },
    {
      id: "dhomir",
      title: "(٢) الضَّمَائِرُ (Kata Ganti / Pronouns)",
      description: "Dhomir terbagi menjadi Dhomir Munfashil (Berdiri Sendiri) dan Dhomir Muttashil (Bersambung pada Kata Benda/Nama):",
      tableHeaders: ["الضَّمِيْرُ (Dhomir)", "Bersambung (مُتَّصِل)", "Contoh dengan (اسْم)", "Contoh dengan (عُنْوَان)", "Contoh dengan (بَيْت)"],
      dhomirMuttashilTable: [
        { dhomir: "أَنَا (Saya)", muttashil: "ـِي", exIsm: "اسْمِي (Namaku)", exUnwan: "عُنْوَانِي (Alamatku)", exBait: "بَيْتِي (Rumahku)" },
        { dhomir: "أَنْتَ (Kamu L)", muttashil: "ـَكَ", exIsm: "اسْمُكَ (Namamu L)", exUnwan: "عُنْوَانُكَ (Alamatmu L)", exBait: "بَيْتُكَ (Rumahmu L)" },
        { dhomir: "أَنْتِ (Kamu P)", muttashil: "ـِكِ", exIsm: "اسْمُكِ (Namamu P)", exUnwan: "عُنْوَانُكِ (Alamatmu P)", exBait: "بَيْتُكِ (Rumahmu P)" },
        { dhomir: "هُوَ (Dia L)", muttashil: "ـُهُ", exIsm: "اسْمُهُ (Namanya L)", exUnwan: "عُنْوَانُهُ (Alamatnya L)", exBait: "بَيْتُهُ (Rumahya L)" },
        { dhomir: "هِيَ (Dia P)", muttashil: "ـَهَا", exIsm: "اسْمُهَا (Namanya P)", exUnwan: "عُنْوَانُهَا (Alamatnya P)", exBait: "بَيْتُهَا (Rumahya P)" },
        { dhomir: "نَحْنُ (Kami/Kita)", muttashil: "ـَنَا", exIsm: "اسْمُنَا (Nama kami)", exUnwan: "عُنْوَانُنَا (Alamat kami)", exBait: "بَيْتُنَا (Rumah kami)" },
        { dhomir: "أَنْتُمْ (Kalian L)", muttashil: "ـَكُمْ", exIsm: "اسْمُكُمْ (Nama kalian)", exUnwan: "عُنْوَانُكُمْ (Alamat kalian)", exBait: "بَيْتُكُمْ (Rumah kalian)" },
        { dhomir: "أَنْتُنَّ (Kalian P)", muttashil: "ـَكُنَّ", exIsm: "اسْمُكُنَّ (Nama kalian P)", exUnwan: "عُنْوَانُكُنَّ (Alamat kalian P)", exBait: "بَيْتُكُنَّ (Rumah kalian P)" },
        { dhomir: "هُمْ (Mereka L)", muttashil: "ـَهُمْ", exIsm: "اسْمُهُمْ (Nama meereka)", exUnwan: "عُنْوَانُهُمْ (Alamat mereka)", exBait: "بَيْتُهُمْ (Rumah mereka)" },
        { dhomir: "هُنَّ (Mereka P)", muttashil: "ـَهُنَّ", exIsm: "اسْمُهُنَّ (Nama mereka P)", exUnwan: "عُنْوَانُهُنَّ (Alamat mereka P)", exBait: "بَيْتُهُنَّ (Rumah mereka P)" }
      ]
    },
    {
      id: "kalimah",
      title: "(٣) تَقْسِيْمُ الكَلِمَةِ (Pembagian Kata dalam Bahasa Arab)",
      description: "Kata dalam Bahasa Arab terbagi menjadi 3 jenis utama:",
      breakdown: [
        { type: "الاسْمُ (Isim)", desc: "Kata benda, nama orang, tempat, atau sifat. Contoh: طَالِبٌ (siswa), مَدْرَسَةٌ (sekolah). Ciri: ber-Alif Lam (ال) atau Tanwin." },
        { type: "الفِعْلُ (Fi'il)", desc: "Kata kerja yang terikat dengan waktu. Contoh: يَدْرُسُ (belajar), كَتَبَ (menulis)." },
        { type: "الحَرْفُ (Harf)", desc: "Kata hubung atau kata depan. Contoh: فِي (di dalam), مِنْ (dari), إِلَى (ke)." }
      ],
      interactiveSentence: {
        text: "يَكْتُبُ الطَّالِبُ الدَّرْسَ فِي الفَصْلِ",
        words: [
          { word: "يَكْتُبُ", role: "فِعْل (Fi'il / Kata Kerja)", color: "bg-amber-100 border-amber-400 text-amber-900" },
          { word: "الطَّالِبُ", role: "اسْم (Isim / Subjek)", color: "bg-sky-100 border-sky-400 text-sky-900" },
          { word: "الدَّرْسَ", role: "اسْم (Isim / Objek)", color: "bg-teal-100 border-teal-400 text-teal-900" },
          { word: "فِي", role: "حَرْف (Harf / Kata Depan)", color: "bg-purple-100 border-purple-400 text-purple-900" },
          { word: "الفَصْلِ", role: "اسْم (Isim / Tempat)", color: "bg-sky-100 border-sky-400 text-sky-900" }
        ]
      }
    }
  ],

  // 10 SOAL QAWAID INTERAKTIF (TATA BAHASA)
  qawaidQuestions: [
    {
      id: 1,
      q: "أَيُّ أَدَاةٍ تُسْتَخْدَمُ لِلسُّؤَالِ عَنِ المَكَانِ؟",
      latinQ: "Kata tanya manakah yang digunakan untuk menanyakan tempat?",
      options: ["أَيْنَ", "مَنْ", "مَتَى", "كَمْ"],
      answer: 0,
      explanation: "أَيْنَ (Di mana) digunakan untuk menanyakan tempat."
    },
    {
      id: 2,
      q: "أَيُّ أَدَاةٍ تُسْتَخْدَمُ لِلسُّؤَالِ عَنِ العَاقِلِ (الأَشْخَاصِ)؟",
      latinQ: "Kata tanya manakah yang digunakan untuk menanyakan orang/orang berakal?",
      options: ["مَا", "مَنْ", "أَيْنَ", "لِمَاذَا"],
      answer: 1,
      explanation: "مَنْ (Siapa) digunakan untuk menanyakan orang."
    },
    {
      id: 3,
      q: "أَيُّ أَدَاةٍ تُسْتَخْدَمُ لِلسُّؤَالِ عَنِ الزَّمَانِ (الوَقْتِ)؟",
      latinQ: "Kata tanya manakah yang digunakan untuk menanyakan waktu?",
      options: ["كَيْفَ", "مَتَى", "مَاذَا", "هَلْ"],
      answer: 1,
      explanation: "مَتَى (Kapan) digunakan untuk menanyakan waktu."
    },
    {
      id: 4,
      q: "أَيُّ أَدَاةٍ تُسْتَخْدَمُ لِلسُّؤَالِ عَنِ العَدَدِ؟",
      latinQ: "Kata tanya manakah yang digunakan untuk menanyakan jumlah/bilangan?",
      options: ["كَمْ", "مَا", "أَيُّ", "لِمَنْ"],
      answer: 0,
      explanation: "كَمْ (Berapa) digunakan untuk menanyakan jumlah/bilangan."
    },
    {
      id: 5,
      q: "الضَّمِيْرُ الْمُتَّصِلُ لِلْمُتَكَلِّمِ (أَنَا) فِي 'اسْمِي' هُوَ:",
      latinQ: "Dhomir Muttashil untuk Saya (أَنَا) pada kata 'اسْمِي' adalah:",
      options: ["ـِي", "ـَكَ", "ـُهُ", "ـَنَا"],
      answer: 0,
      explanation: "Akhiran Ya Mutakallim (ـِي) menunjukkan kepemilikan Saya (أَنَا)."
    },
    {
      id: 6,
      q: "الضَّمِيْرُ الْمُتَّصِلُ لِلْمُخَاطَبِ الْمُذَكَّرِ (أَنْتَ) فِي 'عُنْوَانُكَ' هُوَ:",
      latinQ: "Dhomir Muttashil untuk Kamu Laki-laki (أَنْتَ) pada kata 'عُنْوَانُكَ' adalah:",
      options: ["ـِكِ", "ـَكَ", "ـَهَا", "ـَكُمْ"],
      answer: 1,
      explanation: "Akhiran Kaf Fathah (ـَكَ) menunjukkan kepemilikan Kamu Laki-laki (أَنْتَ)."
    },
    {
      id: 7,
      q: "الضَّمِيْرُ الْمُتَّصِلُ لِلْغَائِبِ الْمُؤَنَّثِ (هِيَ) فِي 'بَيْتُهَا' هُوَ:",
      latinQ: "Dhomir Muttashil untuk Dia Perempuan (هِيَ) pada kata 'بَيْتُهَا' adalah:",
      options: ["ـُهُ", "ـَهَا", "ـَكُنَّ", "ـِي"],
      answer: 1,
      explanation: "Akhiran Ha Alif (ـَهَا) menunjukkan kepemilikan Dia Perempuan (هِيَ)."
    },
    {
      id: 8,
      q: "كَلِمَةُ 'الْمَدْرَسَةُ' تُعْتَبَرُ مِنَ:",
      latinQ: "Kata 'الْمَدْرَسَةُ' (Sekolah) termasuk jenis kata:",
      options: ["الاسْمُ", "الفِعْلُ", "الحَرْفُ", "الضَّمِيْرُ"],
      answer: 0,
      explanation: "الْمَدْرَسَةُ adalah Kata Benda (Isim) ditandai dengan Alif Lam (ال)."
    },
    {
      id: 9,
      q: "كَلِمَةُ 'يَدْرُسُ' تُعْتَبَرُ مِنَ:",
      latinQ: "Kata 'يَدْرُسُ' (Sedang belajar) termasuk jenis kata:",
      options: ["الاسْمُ", "الفِعْلُ", "الحَرْفُ", "الظَّرْفُ"],
      answer: 1,
      explanation: "يَدْرُسُ adalah Kata Kerja (Fi'il Mudhari')."
    },
    {
      id: 10,
      q: "كَلِمَةُ 'فِي' تُعْتَبَرُ مِنَ:",
      latinQ: "Kata 'فِي' (Di dalam) termasuk jenis kata:",
      options: ["الاسْمُ", "الفِعْلُ", "الحَرْفُ", "الصِّفَةُ"],
      answer: 2,
      explanation: "فِي adalah Harf Jar (Kata Depan / Kata Hubung)."
    }
  ],

  // QAWAID BAB 2 (القواعد والتركيب - الباب الثاني)
  qawaidBab2: {
    // 1. Mudzakkar & Mu'annats (المذكر والمؤنث)
    muzakkarMuannats: {
      title: "١ - الْمُذَكَّرُ وَالْمُؤَنَّثُ (Mudzakkar & Mu'annats)",
      desc: "Isim dalam Bahasa Arab terbagi berdasarkan gender menjadi Mudzakkar (Laki-laki) dan Mu'annats (Perempuan). Penggunaan Isim Isyarah (Kata Tunjuk) dan Dhomir disesuaikan dengan jenis kata tersebut:",
      isyarahTable: [
        {
          type: "المُذَكَّر (Laki-laki)",
          dekat: "هَذَا",
          dekatEx: ["جَدِّي (Kakekku)", "أَبِي (Ayahku)", "أَخِي (Saudaraku L)", "عَمِّي (Pamanku)", "خَالِي (Pamanku)"],
          jauh: "ذَلِكَ",
          jauhEx: ["زَوْجٌ (Suami)", "إِبْنٌ (Anak L)", "حَفِيْدٌ (Cucu L)", "صَدِيْقِي (Temanku)", "بَيْتِي (Rumahku)"]
        },
        {
          type: "المُؤَنَّث (Perempuan)",
          dekat: "هَذِهِ",
          dekatEx: ["جَدَّتِي (Nenekku)", "أُمِّي (Ibuku)", "أُخْتِي (Saudaraku P)", "عَمَّتِي (Bibiku)", "خَالَتِي (Bibiku)"],
          jauh: "تِلْكَ",
          jauhEx: ["زَوْجَةٌ (Istri)", "إِبْنَةٌ / بِنْتٌ (Anak P)", "حَفِيْدَةٌ (Cucu P)", "صَدِيْقَتِي (Temanku P)", "غُرْفَتِي (Kamarku)"]
        }
      ],
      notes: [
        "1. Isim Mudzakkar (المُذَكَّرُ) adalah kata benda/nama yang menunjukkan arti laki-laki (contoh: جَدٌّ, أَبٌ, أَخٌ).",
        "2. Isim Mu'annats (المُؤَنَّثُ) adalah kata benda/nama yang menunjukkan arti perempuan, umumnya ditandai dengan:",
        "   • Ta' Marbuthah (ة / ـة): contoh عَمَّةٌ, جَدَّةٌ, عَائِشَةُ.",
        "   • Alif Maqsurah (ى): contoh حُسْنَى, زُلْفَى, سَلْمَى.",
        "   • Mu'annats Hakiqi (tanpa tanda khusus tapi bermakna perempuan): contoh أُمٌّ, هِنْدٌ, زَيْنَبُ."
      ]
    },

    // 2. Dhomir Mudzakkar & Mu'annats (الضمائر للمذكر والمؤنث)
    dhomirGender: {
      title: "(ب) الضَّمَائِرُ لِلْمُذَكَّرِ وَالْمُؤَنَّثِ",
      desc: "Penggunaan Kata Ganti (Dhomir Munfashil & Muttashil) untuk Mudzakkar dan Mu'annats:",
      table: [
        { gender: "المُذَكَّر (Laki-laki)", munfashil: "هُوَ (Dia L)", muttashil: "ـُهُ (اسْمُهُ / أَمَامَهُ)", exMunfashil: "هُوَ مُحَاضِرٌ مُجِدٌّ / هُوَ طَبِيْبٌ صَبُوْرٌ", exMuttashil: "اسْمُهُ عَبْدُ اللهِ / بَيْتُهُ أَمَامَهُ سُوْرٌ" },
        { gender: "المُؤَنَّث (Perempuan)", munfashil: "هِيَ (Dia P)", muttashil: "ـَهَا (اسْمُهَا / فِيْهَا)", exMunfashil: "هِيَ مُحَاضِرَةٌ مُجِدَّةٌ / هِيَ مُدَرِّسَةٌ صَبُوْرَةٌ", exMuttashil: "اسْمُهَا زَيْنَبُ / غُرْفَتِي فِيْهَا خِزَانَةٌ" }
      ]
    },

    // 3. Huruf al-Jar (حروف الجر)
    hurufJar: {
      title: "٢ - حُرُوْفُ الْجَرِّ (Huruf-Huruf Jar & Penggunaannya)",
      desc: "Huruf Jar adalah kata depan yang berfungsi memajrurkan (memberi harakat kasrah) isim setelahnya:",
      table: [
        { huruf: "إِلَى", meaning: "Ke, Kepada, Sampai", examples: ["أَنَا أَذْهَبُ إِلَى الْمَدْرَسَةِ", "أُنْظُرْ إِلَى هَذِهِ الصُّوْرَةِ", "نُذَاكِرُ الدُّرُوْسَ مِنَ الْمَغْرِبِ إِلَى الْعِشَاءِ"] },
        { huruf: "بِـ", meaning: "Di, Dengan, Karena", examples: ["زُلْفَى طَالِبَةٌ بِالْجَامِعَةِ", "الْوَالِدُ يَرَبِّي الأَوْلَادَ بِالْمَحَبَّةِ", "نَحْنُ نُحِبُّ الْوَالِدَيْنِ بِلطْفِهِمَا"] },
        { huruf: "فِي", meaning: "Di, Di dalam, Pada", examples: ["أُسْرَتِي تَسْكُنُ فِي بَيْتٍ كَبِيْرٍ", "فِي الْبَيْتِ غُرَفُ النَّوْمِ وَغُرْفَةُ الْجُلُوْسِ", "زَكَرِيَّا تِلْمِيْذٌ فِي الْمَدْرَسَةِ"] },
        { huruf: "عَنْ", meaning: "Dari, Tentang", examples: ["بَيْتِي بَعِيْدٌ عَنِ الْمَدِيْنَةِ", "نَحْنُ نَتَكَلَّمُ مَعَ الأُسْرَةِ عَنْ أَنْشِطَتِنَا الْيَوْمَ"] },
        { huruf: "عَلَى", meaning: "Di atas, Kepada", examples: ["السَّلَامُ عَلَيْكُمْ", "عَلَى الْمِنْضَدَةِ زَهْرِيَّةٌ فِيْهَا زَهْرَةٌ جَمِيْلَةٌ", "عَلَى الرَّفِّ كُتُبُ الْقِصَّةِ كَثِيْرَةٌ"] },
        { huruf: "مِنْ", meaning: "Dari, Berasal dari, Termasuk", examples: ["بَيْتِي قَرِيْبٌ مِنَ الْمَدْرَسَةِ", "أُسْرَتِي مِنْ مَانَادُوْ", "مِنْ أَعْضَاءِ الأُسْرَةِ جَدٌّ وَجَدَّةٌ"] }
      ]
    },

    // 10 SOAL QAWAID BAB 2
    questions: [
      { id: 1, q: "أَيُّ كَلِمَةٍ مِنَ الْكَلِمَاتِ الآتِيَةِ هِيَ 'اِسْمٌ مُؤَنَّثٌ'؟", latinQ: "Manakah kata berikut yang merupakan Isim Mu'annats?", options: ["أَبٌ", "أَخٌ", "جَدَّةٌ", "عَمٌّ"], answer: 2, explanation: "جَدَّةٌ berakhiran Ta' Marbuthah (ة), sehingga tergolong Isim Mu'annats." },
      { id: 2, q: "أَكْمِلِ الْجُمْلَةَ: _____ طَالِبَةٌ نَشِيْطَةٌ فِي الْفَصْلِ.", latinQ: "Lengkapi kalimat berikut: _____ Ṭālibatun nasyīṭatun fil faṣl.", options: ["هَذَا", "هَذِهِ", "ذَلِكَ", "هُوَ"], answer: 1, explanation: "طَالِبَةٌ نَشِيْطَةٌ bermakna mu'annats, kata tunjuk dekat yang tepat adalah هَذِهِ." },
      { id: 3, q: "مَا هُوَ الضَّمِيْرُ الْمُنْفَصِلُ لِلْمُؤَنَّثِ فِي جُمْلَةِ: 'اسْمُهَا زَيْنَبُ، _____ مُدَرِّسَةٌ'؟", latinQ: "Kata ganti munfashil yang tepat untuk Zainab adalah:", options: ["هُوَ", "هِيَ", "أَنْتَ", "أَنَا"], answer: 1, explanation: "Zainab adalah mu'annats (perempuan), dhomir munfashil yang tepat adalah هِيَ." },
      { id: 4, q: "مَا حَرْفُ الْجَرِّ فِي جُمْلَةِ: 'أَنَا أَذْهَبُ إِلَى الْمَدْرَسَةِ'؟", latinQ: "Manakah Harf Jar dalam kalimat tersebut?", options: ["أَنَا", "أَذْهَبُ", "إِلَى", "الْمَدْرَسَةِ"], answer: 2, explanation: "إِلَى adalah Harf Jar yang berarti 'ke/kepada'." },
      { id: 5, q: "أَكْمِلِ الْجُمْلَةَ: الْكِتَابُ _____ الطَّاوِلَةِ.", latinQ: "Lengkapi kalimat: Buku itu _____ meja.", options: ["عَلَى", "عَنْ", "مِنْ", "إِلَى"], answer: 0, explanation: "عَلَى berarti 'di atas'." },
      { id: 6, q: "أَيُّ مِنْ حُرُوْفِ الْجَرِّ الآتِيَةِ يَعْنِي 'di dalam' أَوْ 'pada'؟", latinQ: "Manakah Harf Jar yang berarti 'di dalam' atau 'pada'?", options: ["فِي", "مِنْ", "إِلَى", "عَنْ"], answer: 0, explanation: "فِي berarti 'di / di dalam / pada'." },
      { id: 7, q: "أَكْمِلِ الْجُمْلَةَ: هَذِهِ أُخْتِي، اسْمُـ_____ حَفْصَةُ.", latinQ: "Lengkapi akhiran dhomir muttashil: Ini saudara perempuanku, namanya Hafsah.", options: ["ـهُ", "ـهَا", "ـَكَ", "ـِكِ"], answer: 1, explanation: "Akhiran dhomir muttashil untuk mu'annats (perempuan) adalah ـَهَا (اسْمُهَا)." },
      { id: 8, q: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Rumahku dekat dari sekolah'.", latinQ: "Terjemahkan ke Bahasa Arab: 'Rumahku dekat dari sekolah'.", options: ["بَيْتِي قَرِيْبٌ مِنَ الْمَدْرَسَةِ", "بَيْتِي بَعِيْدٌ عَنِ الْمَدِيْنَةِ", "أَذْهَبُ إِلَى الْمَدْرَسَةِ", "الْبَيْتُ فِي الْمَدْرَسَةِ"], answer: 0, explanation: "Bahasa Arab yang tepat: بَيْتِي قَرِيْبٌ مِنَ الْمَدْرَسَةِ." },
      { id: 9, q: "مَا التَّأْنِيْثُ مِنْ كَلِمَةِ 'صَدِيْقٌ'؟", latinQ: "Apakah bentuk mu'annats dari kata 'صَدِيْقٌ' (teman laki-laki)?", options: ["صَدِيْقَةٌ", "أُخْتٌ", "أُمٌّ", "جَدَّةٌ"], answer: 0, explanation: "Bentuk mu'annats dari صَدِيْقٌ adalah صَدِيْقَةٌ (teman perempuan)." },
      { id: 10, q: "أَكْمِلِ الْجُمْلَةَ: نَحْنُ نَتَكَلَّمُ _____ الأُنْشِطَةِ الْيَوْمِيَّةِ.", latinQ: "Lengkapi kalimat: Kami berbicara _____ aktivitas harian.", options: ["عَنْ", "إِلَى", "عَلَى", "بِـ"], answer: 0, explanation: "عَنْ berarti 'tentang / dari'." }
    ]
  },

  // QAWAID BAB 3 (القواعد والتركيب - الباب الثالث)
  qawaidBab3: {
    // 1. Mufrad, Mutsanna & Jamak (المفرد والمثنى والجمع)
    numberTypes: {
      title: "١ - الْمُفْرَدُ وَالْمُثَنَّى وَالْجَمْعُ (Kata Tunggal, Dual & Jamak)",
      desc: "Isim berdasarkan jumlah bilangannya terbagi menjadi Mufrad (Tunggal = 1), Mutsanna (Dua = 2), dan Jamak (Banyak = 3 ke atas):",
      tableHeaders: ["الْمُفْرَدُ (Tunggal = 1)", "الْمُثَنَّى (Dua = 2)", "الْجَمْعُ (Jamak = 3+)"],
      table: [
        { mufrad: "الْمُدَرِّسُ حَاضِرٌ", mutsanna: "الْمُدَرِّسَانِ حَاضِرَانِ", jamak: "الْمُدَرِّسُوْنَ حَاضِرُوْنَ" },
        { mufrad: "الْمُدَرِّسَةُ حَاضِرَةٌ", mutsanna: "الْمُدَرِّسَتَانِ حَاضِرَتَانِ", jamak: "الْمُدَرِّسَاتُ حَاضِرَاتٌ" },
        { mufrad: "الطَّالِبُ ذَاهِبٌ", mutsanna: "الطَّالِبَانِ ذَاهِبَانِ", jamak: "الطُّلَّابُ ذَاهِبُوْنَ" },
        { mufrad: "الطَّالِبَةُ ذَاهِبَةٌ", mutsanna: "الطَّالِبَتَانِ ذَاهِبَتَانِ", jamak: "الطَّالِبَاتُ ذَاهِبَاتٌ" },
        { mufrad: "أَقْرَأُ الْكِتَابَ", mutsanna: "أَقْرَأُ الْكِتَابَيْنِ", jamak: "أَقْرَأُ الْكُتُبَ" },
        { mufrad: "نَدْرُسُ الدَّرْسَ الْمُقَرَّرَ", mutsanna: "نَدْرُسُ الدَّرْسَيْنِ الْمُقَرَّرَيْنِ", jamak: "نَدْرُسُ الدُّرُوْسَ الْمُقَرَّرَةَ" },
        { mufrad: "نُصَلِّي الظُّهْرَ مَعَ الْمُوَظَّفِ", mutsanna: "نُصَلِّي الظُّهْرَ مَعَ الْمُوَظَّفَيْنِ", jamak: "نُصَلِّي الظُّهْرَ مَعَ الْمُوَظَّفِيْنَ" }
      ],
      definitions: [
        { type: "الْمُفْرَدُ (Kata Tunggal)", desc: "Kata yang menunjukkan arti satu (contoh: مُدَرِّسٌ, كِتَابٌ, حَاضِرٌ)." },
        { type: "الْمُثَنَّى (Kata Dua / Dual)", desc: "Kata yang menunjukkan arti dua dengan tambahan alif & nun (ـَانِ) atau ya' & nun (ـَيْنِ) di akhirnya (contoh: طَالِبَانِ, كِتَابَيْنِ)." },
        { type: "جَمْعُ الْمُذَكَّرِ السَّالِمِ", desc: "Jamak laki-laki teratur dengan akhiran wawu & nun (ـُوْنَ) atau ya' & nun (ـِيْنَ) (contoh: مُدَرِّسُوْنَ, مُوَظَّفِيْنَ)." },
        { type: "جَمْعُ الْمُؤَنَّثِ السَّالِمِ", desc: "Jamak perempuan teratur dengan akhiran alif & ta' (ـَاتٌ) (contoh: مُدَرِّسَاتٌ, طَالِبَاتٌ)." },
        { type: "جَمْعُ التَّكْسِيْرِ", desc: "Jamak tidak teratur yang mengalami perubahan bentuk tunggalnya (contoh: طُلَّابٌ, كُتُبٌ, دُرُوْسٌ, فُصُوْلٌ)." }
      ]
    },

    // 2. Huruf 'Athaf (حروف العطف)
    hurufAthaf: {
      title: "٢ - حُرُوْفُ الْعَطْفِ (Kata Sambung / Konjungsi)",
      desc: "Huruf 'Athaf adalah kata hubung yang menyambungkan dua kata atau dua kalimat dalam Bahasa Arab:",
      list: [
        {
          huruf: "وَ",
          meaning: "Dan",
          functionDesc: "Menunjukkan penggabungan tanpa terikat urutan waktu",
          examples: [
            "يُعَلِّمُ الطُّلَّابَ وَالطَّالِبَاتِ 90 مُدَرِّسًا وَمُدَرِّسَةً",
            "تَجْتَمِعُ الْمُدَرِّسُوْنَ وَالطُّلَّابُ وَالطَّالِبَاتُ فِي الْقَاعَةِ",
            "نَتَدَرَّبُ عَلَى الْإِسْتِمَاعِ وَالْكَلَامِ بِاللُّغَةِ الْعَرَبِيَّةِ وَالْإِنْجِلِيْزِيَّةِ"
          ]
        },
        {
          huruf: "فَـ",
          meaning: "Lalu / Maka",
          functionDesc: "Menunjukkan urutan langsung bersambung tanpa jeda waktu lama",
          examples: [
            "يَدْخُلُ الْمُدَرِّسُ الْفَصْلَ فَيُسَلِّمُ عَلَى الطُّلَّابِ",
            "يَدْخُلُ الطُّلَّابُ فَالطَّالِبَاتُ الْمُخْتَبَرَ",
            "تَذْهَبُ سَالِمٌ فَعُمَرُ فَأَحْمَدُ إِلَى الْمَقْصَفِ"
          ]
        },
        {
          huruf: "ثُمَّ",
          meaning: "Kemudian",
          functionDesc: "Menunjukkan urutan waktu dengan jeda / jeda terpisah",
          examples: [
            "تَدْرُسُ الرِّيَاضِيَّاتِ فِي الْفَصْلِ ثُمَّ نَتَدَرَّبُ فِي مَعْمَلِ اللُّغَاتِ",
            "نَتَعَلَّمُ فِي الْفَصْلِ فِي السَّابِعَةِ ثُمَّ نَسْتَرِيْحُ فِي الْعَاشِرَةِ",
            "نُصَلِّي الظُّهْرَ ثُمَّ الْعَصْرَ ثُمَّ الْمَغْرِبَ ثُمَّ الْعِشَاءَ"
          ]
        },
        {
          huruf: "أَوْ",
          meaning: "Atau",
          functionDesc: "Menunjukkan pilihan di antara dua hal atau lebih",
          examples: [
            "هَلْ تَذْهَبُ إِلَى الْمَكْتَبَةِ أَوْ تَبْقَى فِي الْفَصْلِ؟",
            "أَيَّ دَرْسٍ تُحِبِّيْنَ: فِيْزِيَاءَ أَوْ جُغْرَافِيَا؟",
            "هَلْ تَكْتُبِيْنَ الدَّرْسَ أَوْ تَقْرَئِيْنَ؟",
            "هَلْ تَقْرَأُ الْقِصَّةَ أَوْ التَّارِيْخَ؟"
          ]
        },
        {
          huruf: "لٰكِنْ",
          meaning: "Tetapi",
          functionDesc: "Menunjukkan sanggahan / koreksi setelah penafian (kalimat negatif)",
          examples: [
            "لَسْتُ مُدِيْرًا لٰكِنْ مُدَرِّسًا",
            "لَيْسَ مَعِيْ قَلَمٌ لٰكِنْ مِرْسَمٌ",
            "لَا آكُلُ لٰكِنْ أَشْرَبُ"
          ]
        },
        {
          huruf: "بَلْ",
          meaning: "Tetapi / Melainkan / Bahkan",
          functionDesc: "Menyanggah pernyataan sebelumnya (Idrab) dan mengukuhkan hal setelahnya",
          examples: [
            "لَسْتُ مُدِيْرًا بَلْ مُدَرِّسًا",
            "لَيْسَ مَعِيْ قَلَمٌ بَلْ مِرْسَمٌ",
            "لَا آكُلُ بَلْ أَشْرَبُ"
          ]
        },
        {
          huruf: "حَتَّى",
          meaning: "Hingga ... pun / Bahkan",
          functionDesc: "Menunjukkan puncak / batas akhir cakupan tindakan",
          examples: [
            "الْعَامِلُوْنَ هُنَا يُصَلُّوْنَ الظُّهْرَ جَمَاعَةً حَتَّى الْكَنَّاسُ",
            "الْمُدَرِّسُوْنَ هُنَا يَتَكَلَّمُوْنَ بِالْعَرَبِيَّةِ حَتَّى مُدَرِّسُو الرِّيَاضِيَّاتِ"
          ]
        },
        {
          huruf: "لَا",
          meaning: "Bukan",
          functionDesc: "Menegaskan hal pertama dan menafikan hal setelahnya",
          examples: [
            "حَضَرَ الْمُدِيْرُ لَا الْمُشْرِفُ",
            "أَشْرَبُ الشَّايَ لَا الْقَهْوَةَ"
          ]
        }
      ]
    },

    // 10 SOAL LATIHAN QAWAID BAB 3
    questions: [
      { id: 1, q: "مَا هُوَ الْمُثَنَّى مِنْ كَلِمَةِ 'كِتَابٌ'؟", latinQ: "Apakah bentuk Mutsanna (Dua) dari kata 'كِتَابٌ'?", options: ["كُتُبٌ", "كِتَابَانِ / كِتَابَيْنِ", "كِتَابَاتٌ", "كَاتِبٌ"], answer: 1, explanation: "Bentuk Mutsanna ditandai akhiran alif-nun (ـَانِ) atau ya'-nun (ـَيْنِ): كِتَابَانِ / كِتَابَيْنِ." },
      { id: 2, q: "أَيُّ هَذِهِ الْكَلِمَاتِ تُعْتَبَرُ 'جَمْعَ مُذَكَّرٍ سَالِمًا'؟", latinQ: "Manakah kata berikut yang tergolong Jamak Mudzakkar Salim?", options: ["مُدَرِّسُوْنَ", "مُدَرِّسَاتٌ", "طُلَّابٌ", "فُصُوْلٌ"], answer: 0, explanation: "مُدَرِّسُوْنَ diakhiri wawu-nun (ـُوْنَ), tergolong Jamak Mudzakkar Salim." },
      { id: 3, q: "أَيُّ هَذِهِ الْكَلِمَاتِ تُعْتَبَرُ 'جَمْعَ مُؤَنَّثٍ سَالِمًا'؟", latinQ: "Manakah kata berikut yang tergolong Jamak Mu'annats Salim?", options: ["طَالِبَاتٌ", "طُلَّابٌ", "مُدَرِّسُوْنَ", "كُتُبٌ"], answer: 0, explanation: "طَالِبَاتٌ diakhiri alif-ta' (ـَاتٌ), tergolong Jamak Mu'annats Salim." },
      { id: 4, q: "مَا هُوَ نَوْعُ الْجَمْعِ فِي كَلِمَةِ 'طُلَّابٌ' أَوْ 'كُتُبٌ'؟", latinQ: "Apakah jenis jamak pada kata 'طُلَّابٌ' atau 'كُتُبٌ'?", options: ["جَمْعُ التَّكْسِيْرِ", "جَمْعُ الْمُذَكَّرِ السَّالِمِ", "جَمْعُ الْمُؤَنَّثِ السَّالِمِ", "الْمُثَنَّى"], answer: 0, explanation: "طُلَّابٌ dan كُتُبٌ adalah Jamak Taksir (jamak tidak teratur)." },
      { id: 5, q: "حَرْفُ الْعَطْفِ 'فَـ' يُفِيْدُ _____", latinQ: "Huruf 'Athaf 'فَـ' menyatakan fungsi:", options: ["التَّرْتِيْبَ مَعَ التَّعْقِيْبِ (Urutan langsung tanpa jeda)", "التَّرْتِيْبَ مَعَ التَّرَاخِي (Urutan dengan jeda waktu)", "التَّخْيِيْرَ (Pilihan)", "الْمُطْلَقَ (Penggabungan umum)"], answer: 0, explanation: "Huruf 'فَـ' menyatakan urutan langsung bersambung tanpa jeda lama." },
      { id: 6, q: "حَرْفُ الْعَطْفِ 'ثُمَّ' يُفِيْدُ _____", latinQ: "Huruf 'Athaf 'ثُمَّ' menyatakan fungsi:", options: ["التَّرْتِيْبَ مَعَ التَّرَاخِي (Urutan dengan jeda waktu)", "التَّرْتِيْبَ مَعَ التَّعْقِيْبِ (Tanpa jeda)", "التَّخْيِيْرَ (Pilihan)", "الرَّفْعَ"], answer: 0, explanation: "Huruf 'ثُمَّ' menyatakan urutan dengan jeda waktu / terpisah." },
      { id: 7, q: "أَكْمِلِ الْجُمْلَةَ: أَيَّ دَرْسٍ تُحِبُّ: رِيَاضِيَّات _____ فِيْزِيَاءَ؟", latinQ: "Lengkapi kalimat pilihan: Pelajaran mana yang kamu sukai: Matematika _____ Fisika?", options: ["أَوْ", "ثُمَّ", "فَـ", "عَنْ"], answer: 0, explanation: "Huruf 'أَوْ' digunakan untuk menyatakan pilihan (atau)." },
      { id: 8, q: "أَكْمِلِ الْجُمْلَةَ: يَدْخُلُ الْمُدَرِّسُ الْفَصْلَ _____ يُسَلِّمُ عَلَى الطُّلَّابِ.", latinQ: "Lengkapi kalimat: Guru masuk kelas _____ lalu mengucapkan salam kepada siswa.", options: ["فَيُسَلِّمُ", "ثُمَّ يُسَلِّمُ", "أَوْ يُسَلِّمُ", "مِنْ يُسَلِّمُ"], answer: 0, explanation: "Huruf 'فَـ' tepat untuk urutan langsung tanpa jeda (فَيُسَلِّمُ)." },
      { id: 9, q: "أَكْمِلِ الْجُمْلَةَ: نُصَلِّي الظُّهْرَ _____ نُصَلِّي الْعَصْرَ.", latinQ: "Lengkapi kalimat urutan salat: Kami salat Zuhur _____ kemudian salat Asar.", options: ["ثُمَّ", "أَوْ", "عَلَى", "بِـ"], answer: 0, explanation: "Huruf 'ثُمَّ' tepat untuk urutan berjarak waktu (kemudian)." },
      { id: 10, q: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Dua orang guru (perempuan) hadir di sekolah'.", latinQ: "Terjemahkan ke Bahasa Arab: 'Dua orang guru (P) hadir di sekolah'.", options: ["الْمُدَرِّسَتَانِ حَاضِرَتَانِ فِي الْمَدْرَسَةِ", "الْمُدَرِّسُونَ حَاضِرُوْنَ فِي الْمَدْرَسَةِ", "الْمُدَرِّسَةُ حَاضِرَةٌ فِي الْمَدْرَسَةِ", "الْمُدَرِّسَانِ حَاضِرَانِ فِي الْمَدْرَسَةِ"], answer: 0, explanation: "Bentuk Mutsanna Mu'annats yang tepat: 'الْمُدَرِّسَتَانِ حَاضِرَتَانِ فِي الْمَدْرَسَةِ'." }
    ]
  },

  // 6. TADRIBAT (التدريبات - 2 Versi Soal Evaluasi per Bab Bahasa Arab Kelas X)
  tadribat: {
    // BAB 1 - VERSI 1: المفردات والتعبير (Kosakata, Ungkapan & Hiwar Bab 1)
    bab1_v1: [
      {
        id: 1,
        question: "إِذَا قَالَ صَدِيْقُكَ: 'صَبَاحُ الْخَيْرِ'، فَمَاذَا تُجِيْبُهُ؟",
        options: [
          "مَسَاءُ النُّوْرِ",
          "صَبَاحُ النُّوْرِ",
          "أَهْلًا بِكَ",
          "مَعَ السَّلَامَةِ"
        ],
        answer: 1,
        explanation: "Jawaban dari 'صَبَاحُ الْخَيْرِ' (Selamat pagi) adalah 'صَبَاحُ النُّوْرِ'."
      },
      {
        id: 2,
        question: "مَا مَعْنَى كَلِمَةِ 'عُنْوَانٌ' فِي اللُّغَةِ الإِنْدُونِيسِيَّةِ؟",
        options: [
          "Nama",
          "Alamat",
          "Hobi",
          "Cita-cita"
        ],
        answer: 1,
        explanation: "'عُنْوَانٌ' artinya Alamat."
      },
      {
        id: 3,
        question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Selamat datang'",
        options: [
          "أَهْلًا وَسَهْلًا",
          "مَعَ السَّلَامَةِ",
          "إِلَى اللِّقَاءِ",
          "شُكْرًا جَزِيْلًا"
        ],
        answer: 0,
        explanation: "Ungkapan 'Selamat datang' dalam bahasa Arab adalah 'أَهْلًا وَسَهْلًا'."
      },
      {
        id: 4,
        question: "نَشْتَرِي الأَطْعِمَةَ وَالْمَشْرُوْبَاتِ فِي مَدْرَسَتِنَا فِي _____",
        options: [
          "الْمَكْتَبَةِ",
          "الْمَقْصَفِ",
          "الْمَلْعَبِ",
          "الْمَسْجِدِ"
        ],
        answer: 1,
        explanation: "Tempat membeli makanan dan minuman di sekolah adalah 'الْمَقْصَفُ' (Kantin)."
      },
      {
        id: 5,
        question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Saya seorang siswa di MAN 1 Pontianak'.",
        options: [
          "أَنَا طَالِبٌ فِي MAN 1 Pontianak",
          "أَنْتَ طَالِبٌ فِي MAN 1 Pontianak",
          "هُوَ طَالِبٌ فِي MAN 1 Pontianak",
          "هِيَ طَالِبَةٌ فِي MAN 1 Pontianak"
        ],
        answer: 0,
        explanation: "'Saya seorang siswa' terjemahannya adalah 'أَنَا طَالِبٌ'."
      },
      {
        id: 6,
        question: "إِذَا سَأَلَكَ شَخْصٌ: 'مِنْ أَيْن أنتَ؟'، فَمَاذَا تُجِيْبُ؟",
        options: [
          "اسْمِي أَحْمَدُ",
          "أَنَا مِنْ بُونْتِيَانَاك",
          "عُنْوَانِي فِي شَارِعِ أَهْمَد يَانِي",
          "أَنَا طَالِبٌ ذَكِيٌّ"
        ],
        answer: 1,
        explanation: "Pertanyaan 'مِنْ أَيْن أنتَ؟' (Dari mana kamu?) dijawab dengan asal daerah, seperti 'أَنَا مِنْ بُونْتِيَانَاك'."
      },
      {
        id: 7,
        question: "مَا مَعْنَى 'بِطَاقَةٌ شَخْصِيَّةٌ'؟",
        options: [
          "Kartu Pelajar / KTP",
          "Buku Catatan",
          "Kartu Perpustakaan",
          "Surat Izin"
        ],
        answer: 0,
        explanation: "'بِطَاقَةٌ شَخْصِيَّةٌ' artinya Kartu Pelajar / Kartu Identitas Diri."
      },
      {
        id: 8,
        question: "أَيْنَ نَقْرَأُ الْكُتُبَ وَالْمَجَلَّاتِ فِي الْمَدْرَسَةِ؟",
        options: [
          "فِي الْمَكْتَبَةِ",
          "فِي الْمَلْعَبِ",
          "فِي الْمَطْبَخِ",
          "فِي السَّيَّارَةِ"
        ],
        answer: 0,
        explanation: "'الْمَكْتَبَةُ' (Perpustakaan) adalah tempat membaca buku dan majalah."
      },
      {
        id: 9,
        question: "مَاذَا تَقُوْلُ عِنْدَ الْوَدَاعِ؟",
        options: [
          "أَهْلًا وَسَهْلًا",
          "مَعَ السَّلَامَةِ",
          "صَبَاحُ الْخَيْرِ",
          "الْحَمْدُ لِلَّهِ"
        ],
        answer: 1,
        explanation: "Ucapan perpisahan / pamitan adalah 'مَعَ السَّلَامَةِ' (Selamat jalan / Semoga selamat)."
      },
      {
        id: 10,
        question: "مَا مَعْنَى 'طَالِبٌ ذَكِيٌّ'؟",
        options: [
          "Siswa yang rajin",
          "Siswa yang cerdas/pandai",
          "Guru yang baru",
          "Siswi yang baik"
        ],
        answer: 1,
        explanation: "'طَالِبٌ' (Siswa) dan 'ذَكِيٌّ' (Cerdas/Pandai)."
      },
      {
        id: 11,
        question: "إِذَا قَالَ لَكَ صَدِيْقُكَ: 'مَسَاءُ الْخَيْرِ'، فَمَاذَا تُجِيْبُ؟",
        options: [
          "صَبَاحُ النُّوْرِ",
          "مَسَاءُ النُّوْرِ",
          "أَهْلًا بِكَ",
          "مَعَ السَّلَامَةِ"
        ],
        answer: 1,
        explanation: "Jawaban dari 'مَسَاءُ الْخَيْرِ' (Selamat sore) adalah 'مَسَاءُ النُّوْرِ'."
      },
      {
        id: 12,
        question: "مَا مَعْنَى كَلِمَةِ 'مَدْرَسَةٌ حُكُوْمِيَّةٌ'؟",
        options: [
          "Sekolah Swasta",
          "Sekolah Negeri",
          "Pondok Pesantren",
          "Universitas"
        ],
        answer: 1,
        explanation: "'حُكُوْمِيَّةٌ' artinya Negeri / Pemerintah. Jadi 'مَدْرَسَةٌ حُكُوْمِيَّةٌ' adalah Sekolah Negeri."
      },
      {
        id: 13,
        question: "أَيْنَ نُلْعَبُ كُرَةَ الْقَدَمِ فِي الْمَدْرَسَةِ؟",
        options: [
          "فِي الْمَكْتَبَةِ",
          "فِي الْمَلْعَبِ",
          "فِي الْمَقْصَفِ",
          "فِي الْفَصْلِ"
        ],
        answer: 1,
        explanation: "Tempat bermain sepak bola di sekolah adalah 'الْمَلْعَبُ' (Lapangan)."
      },
      {
        id: 14,
        question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Sampai jumpa lagi'",
        options: [
          "إِلَى اللِّقَاءِ",
          "مَعَ السَّلَامَةِ",
          "أَهْلًا وَسَهْلًا",
          "شُكْرًا"
        ],
        answer: 0,
        explanation: "'إِلَى اللِّقَاءِ' artinya Sampai jumpa lagi."
      },
      {
        id: 15,
        question: "مَا مَعْنَى 'تَارِيْخُ الْمِيْلَادِ' فِي الْبِطَاقَةِ الشَّخْصِيَّةِ؟",
        options: [
          "Tempat Lahir",
          "Tanggal Lahir",
          "Nomor Induk",
          "Alamat Rumah"
        ],
        answer: 1,
        explanation: "'تَارِيْخُ الْمِيْلَادِ' artinya Tanggal Lahir."
      },
      {
        id: 16,
        question: "مَا مَعْنَى 'هَوَايَةٌ'؟",
        options: [
          "Alamat",
          "Hobi / Kegemaran",
          "Pekerjaan",
          "Cita-cita"
        ],
        answer: 1,
        explanation: "'هَوَايَةٌ' artinya Hobi atau Kegemaran."
      },
      {
        id: 17,
        question: "مَنْ هُوَ 'مُدِيْرُ الْمَدْرَسَةِ'؟",
        options: [
          "Guru Kelas",
          "Kepala Sekolah",
          "Satpam Sekolah",
          "Penjaga Perpustakaan"
        ],
        answer: 1,
        explanation: "'مُدِيْرُ الْمَدْرَسَةِ' artinya Kepala Sekolah."
      },
      {
        id: 18,
        question: "أَيْنَ نَجْلِسُ لِلدِّرَاسَةِ وَاسْتِمَاعِ الشَّرْحِ مِنَ الأُسْتَاذِ؟",
        options: [
          "فِي الْمَقْصَفِ",
          "فِي الْفَصْلِ",
          "فِي الْمَلْعَبِ",
          "فِي الشَّارِعِ"
        ],
        answer: 1,
        explanation: "Tempat duduk untuk belajar dan mendengarkan penjelasan guru adalah 'الْفَصْلُ' (Ruang Kelas)."
      },
      {
        id: 19,
        question: "مَا مَعْنَى 'أُسْرَةٌ سَعِيْدَةٌ'؟",
        options: [
          "Keluarga yang bahagia",
          "Sekolah yang besar",
          "Teman yang pandai",
          "Kelas yang bersih"
        ],
        answer: 0,
        explanation: "'أُسْرَةٌ' (Keluarga) dan 'سَعِيْدَةٌ' (Bahagia)."
      },
      {
        id: 20,
        question: "إِذَا قَالَ لَكَ صَدِيْقُكَ: 'شُكْرًا جَزِيْلًا'، فَمَاذَا تُجِيْبُهُ؟",
        options: [
          "عَفْوًا",
          "مَعَ السَّلَامَةِ",
          "أَهْلًا وَسَهْلًا",
          "إِلَى اللِّقَاءِ"
        ],
        answer: 0,
        explanation: "Jawaban untuk 'شُكْرًا' (Terima kasih) adalah 'عَفْوًا' (Sama-sama)."
      }
    ],

    // BAB 1 - VERSI 2: القواعد والتركيب (Gramatika & Tata Bahasa Bab 1)
    bab1_v2: [
      {
        id: 1,
        question: "أَكْمِلِ الْجُمْلَةَ: _____ طَالِبَةٌ جَدِيْدَةٌ فِي الصَّفِّ الْعَاشِرِ.",
        options: [
          "هُوَ",
          "أَنْتَ",
          "هِيَ",
          "أَنَا"
        ],
        answer: 2,
        explanation: "'طَالِبَةٌ جَدِيْدَةٌ' adalah mu'annats (perempuan), maka dhomir yang tepat adalah 'هِيَ' (Dia perempuan)."
      },
      {
        id: 2,
        question: "أَيُّ هَذِهِ الْكَلِمَاتِ تُعْتَبَرُ 'فِعْلًا' (Kata Kerja)؟",
        options: [
          "طَالِبٌ",
          "يَكْتُبُ",
          "مَدْرَسَةٌ",
          "فِي"
        ],
        answer: 1,
        explanation: "'يَكْتُبُ' (Menulis) adalah kata kerja (Fi'il Mudhari')."
      },
      {
        id: 3,
        question: "الْجُمْلَةُ الَّتِي تَبْدَأُ بِـ 'اسْم' تُسَمَّى _____",
        options: [
          "جُمْلَةً فِعْلِيَّةً",
          "جُمْلَةً اسْمِيَّةً",
          "حَرْفَ جَرٍّ",
          "فِعْلًا مَاضِيًا"
        ],
        answer: 1,
        explanation: "Kalimat yang diawali dengan kata benda (Isim) disebut 'Jumlah Ismiyyah'."
      },
      {
        id: 4,
        question: "مَا هُوَ الضَّمِيْرُ الْمُتَّصِلُ لِلْمُتَكَلِّمِ (Saya) فِي قَوْلِنَا 'كِتَابِي'؟",
        options: [
          "ـِي",
          "ـَكَ",
          "ـُهُ",
          "ـَنَا"
        ],
        answer: 0,
        explanation: "Akhiran 'ـِي' (Ya' Mutakallim) menunjukkan kepunyaan 'Saya' (Dhomir Muttashil Anā)."
      },
      {
        id: 5,
        question: "أَيُّ كَلِمَةٍ مِنَ الْكَلِمَاتِ الآتِيَةِ هِيَ 'حَرْفُ جَرٍّ'؟",
        options: [
          "عَلَى",
          "يَقْرَأُ",
          "كِتَابٌ",
          "مُدَرِّسٌ"
        ],
        answer: 0,
        explanation: "'عَلَى' adalah Harf Jar (حَرْفُ جَرٍّ)."
      },
      {
        id: 6,
        question: "أَكْمِلِ الْفَرَاغَ: هَذَا صَدِيْقِي، _____ عُثْمَانُ.",
        options: [
          "اسْمُهُ",
          "اسْمُهَا",
          "اسْمُكَ",
          "اسْمُكِ"
        ],
        answer: 0,
        explanation: "'صَدِيْقِي' (Temanku Laki-laki) menggunakan dhomir muttashil muzakkar 'اسْمُهُ' (Namanya)."
      },
      {
        id: 7,
        question: "مَا الْجُمْلَةُ الْفِعْلِيَّةُ مِنَ الْجُمَلِ الآتِيَةِ؟",
        options: [
          "الطَّالِبُ يَقْرَأُ الْكِتَابَ",
          "يَقْرَأُ الطَّالِبُ الْكِتَابَ",
          "الْمَدْرَسَةُ كَبِيْرَةٌ",
          "أَنَا طَالِبٌ فِي الصَّفِّ الْعَاشِرِ"
        ],
        answer: 1,
        explanation: "Jumlah Fi'liyyah adalah kalimat yang diawali dengan Fi'il (Kata Kerja), yaitu 'يَقْرَأُ الطَّالِبُ الْكِتَابَ'."
      },
      {
        id: 8,
        question: "الضَّمِيْرُ 'نَحْنُ' يُسْتَخْدَمُ لِـ _____",
        options: [
          "المُتَكَلِّمِ الْمُفْرَدِ",
          "الْمُتَكَلِّمِيْنَ (الْجَمْعِ وَالْمُثَنَّى)",
          "الْمُخَاطَبِ الْمُفْرَدِ",
          "الْغَائِبِ الْمُفْرَدِ"
        ],
        answer: 1,
        explanation: "Dhomir 'نَحْنُ' digunakan untuk Mutakallim Ma'al Ghair (Kami / Kita)."
      },
      {
        id: 9,
        question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Ini guruku (perempuan), namanya Ustazah Fatimah'.",
        options: [
          "هَذِهِ أُسْتَاذَتِي، اسْمُهَا الأُسْتَاذَةُ فَاطِمَةُ",
          "هَذَا أُسْتَاذِي، اسْمُهُ الأُسْتَاذُ فَاطِمَةُ",
          "هِيَ طَالِبَةٌ، اسْمُهَا فَاطِمَةُ",
          "أَنْتِ أُسْتَاذَةٌ، اسْمُكِ فَاطِمَةُ"
        ],
        answer: 0,
        explanation: "Frasa mu'annats yang tepat: 'هَذِهِ أُسْتَاذَتِي، اسْمُهَا الأُسْتَاذَةُ فَاطِمَةُ'."
      },
      {
        id: 10,
        question: "مَا هُوَ الْمُفْرَدُ مِنْ كَلِمَةِ 'كُتُبٌ'؟",
        options: [
          "كَتَبَ",
          "كِتَابٌ",
          "كَاتِبٌ",
          "مَكْتَبٌ"
        ],
        answer: 1,
        explanation: "Bentuk tunggal (mufrod) dari kata 'كُتُبٌ' (buku-buku) adalah 'كِتَابٌ' (sebuah buku)."
      },
      {
        id: 11,
        question: "أَكْمِلِ الْفَرَاغَ: يَا عَائِشَةُ، أَيْنَ _____ ؟",
        options: [
          "تَسْكُنُ",
          "تَسْكُنِيْنَ",
          "يَسْكُنُ",
          "أَسْكُنُ"
        ],
        answer: 1,
        explanation: "Khitab kepada perempuan (Aisyah) menggunakan Fi'il Mudhari' mukhatabah: 'تَسْكُنِيْنَ' (Di mana kamu tinggal?)."
      },
      {
        id: 12,
        question: "كَلِمَةُ 'الْمَكْتَبَةُ' هِيَ اسْمٌ _____",
        options: [
          "مُذَكَّرٌ",
          "مُؤَنَّثٌ",
          "فِعْلٌ مَاضٍ",
          "حَرْفُ جَرٍّ"
        ],
        answer: 1,
        explanation: "Kata 'الْمَكْتَبَةُ' diakhiri Ta' Marbuthah (ة), sehingga tergolong Isim Mu'annats (مُؤَنَّثٌ)."
      },
      {
        id: 13,
        question: "أَيُّ مِنْ هَذِهِ الْكَلِمَاتِ هُوَ 'اِسْمٌ مُذَكَّرٌ'؟",
        options: [
          "مَدْرَسَةٌ",
          "طَالِبٌ",
          "فَاطِمَةُ",
          "نَافِذَةٌ"
        ],
        answer: 1,
        explanation: "'طَالِبٌ' tidak memiliki Ta' Marbuthah (ة), maka tergolong Isim Mudzakkar (Laki-laki)."
      },
      {
        id: 14,
        question: "مَا هُوَ الضَّمِيْرُ الْمُنْفَصِلُ لِلْمُخَاطَبِ (Kamu Laki-laki)؟",
        options: [
          "أَنَا",
          "أَنْتَ",
          "أَنْتِ",
          "هُوَ"
        ],
        answer: 1,
        explanation: "Kata ganti 'Kamu (Laki-laki)' adalah 'أَنْتَ'."
      },
      {
        id: 15,
        question: "مَا هُوَ الضَّمِيْرُ الْمُتَّصِلُ لِلْغَائِبَةِ (Dia Perempuan) فِي 'اسْمُهَا'؟",
        options: [
          "ـُهُ",
          "ـَهَا",
          "ـَكَ",
          "ـِكِ"
        ],
        answer: 1,
        explanation: "Dhomir Muttashil untuk Dia Perempuan (Hiya) adalah akhiran 'ـَهَا'."
      },
      {
        id: 16,
        question: "أَكْمِلِ الْجُمْلَةَ: _____ الأُسْتَاذُ فِي الْفَصْلِ.",
        options: [
          "يَجْلِسُ",
          "تَجْلِسُ",
          "أَجْلِسُ",
          "نَجْلِسُ"
        ],
        answer: 0,
        explanation: "Subjek 'الأُسْتَاذُ' adalah muzakkar mufrod, maka Fi'il yang tepat adalah 'يَجْلِسُ' (Dia Laki-laki duduk)."
      },
      {
        id: 17,
        question: "أَيُّ هَذِهِ الْجُمَلِ هِيَ 'جُمْلَةٌ اسْمِيَّةٌ'؟",
        options: [
          "يَذْهَبُ الطَّالِبُ إِلَى الْمَدْرَسَةِ",
          "الطَّالِبُ يَذْهَبُ إِلَى الْمَدْرَسَةِ",
          "قَرَأَ أَحْمَدُ الْكِتَابَ",
          "كَتَبَتْ عَائِشَةُ الدَّرْسَ"
        ],
        answer: 1,
        explanation: "'الطَّالِبُ يَذْهَبُ إِلَى الْمَدْرَسَةِ' diawali Isim ('الطَّالِبُ'), sehingga tergolong Jumlah Ismiyyah."
      },
      {
        id: 18,
        question: "كَلِمَةُ 'إِلَى' فِي جُمْلَةِ 'أَذْهَبُ إِلَى الْمَدْرَسَةِ' تُعْتَبَرُ _____",
        options: [
          "اِسْمًا",
          "فِعْلًا",
          "حَرْفًا",
          "ضَمِيْرًا"
        ],
        answer: 2,
        explanation: "'إِلَى' adalah Kata Depan / Harf Jar (حَرْفٌ)."
      },
      {
        id: 19,
        question: "أَكْمِلِ الْفَرَاغَ: هَذَا كِتَابِي، وَهَذَا كِتَابُـ_____ يَا عَلِيُّ.",
        options: [
          "ـكِ",
          "ـكَ",
          "ـهُ",
          "ـهَا"
        ],
        answer: 1,
        explanation: "Menyeru Ali (laki-laki/mukhatab): 'كِتَابُكَ' (Bukumu)."
      },
      {
        id: 20,
        question: "مَا هُوَ الضَّمِيْرُ الْمُنْفَصِلُ لِلْغَائِبِ (Dia Laki-laki)؟",
        options: [
          "هِيَ",
          "هُوَ",
          "أَنْتَ",
          "نَحْنُ"
        ],
        answer: 1,
        explanation: "Kata ganti 'Dia (Laki-laki)' adalah 'هُوَ'."
      }
    ],

    // BAB 2 - VERSI 1: المفردات والغرف والأثاث (Kosakata, Ruangan, Perabotan & Hiwar Bab 2)
    bab2_v1: [
      {
        id: 1,
        question: "مَا مَعْنَى كَلِمَةِ 'أُسْرَةٌ' فِي اللُّغَةِ الإِنْدُونِيسِيَّةِ؟",
        options: ["Keluarga", "Sekolah", "Rumah", "Perpustakaan"],
        answer: 0,
        explanation: "'أُسْرَةٌ' artinya Keluarga."
      },
      {
        id: 2,
        question: "مَنْ هُوَ 'الْوَالِدُ' فِي الأُسْرَةِ؟",
        options: ["الْأُمُّ", "الْأَبُ", "الْجَدُّ", "الْعَمُّ"],
        answer: 1,
        explanation: "'الْوَالِدُ' bermakna Ayah (الْأَبُ)."
      },
      {
        id: 3,
        question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Ini adalah nenekku'",
        options: ["هَذَا جَدِّي", "هَذِهِ جَدَّتِي", "هَذِهِ أُمِّي", "هَذَا عَمِّي"],
        answer: 1,
        explanation: "'Nenekku' terjemahannya adalah 'جَدَّتِي', dan menggunakan kata tunjuk mu'annats 'هَذِهِ'."
      },
      {
        id: 4,
        question: "نَكْتُبُ الدُّرُوْسَ وَنُذَاكِرُ فِي غُرْفَةِ _____",
        options: ["الْمَطْبَخِ", "الْمَذَاكَرَةِ", "الْحَمَّامِ", "الأَكْلِ"],
        answer: 1,
        explanation: "Tempat menulis pelajaran dan belajar adalah 'غُرْفَةُ الْمَذَاكَرَةِ' (Ruang Belajar)."
      },
      {
        id: 5,
        question: "أَيْنَ نَنَامُ فِي اللَّيْلِ؟",
        options: ["فِي غُرْفَةِ النَّوْمِ", "فِي الْمَطْبَخِ", "فِي غُرْفَةِ الْجُلُوْسِ", "فِي الْحَمَّامِ"],
        answer: 0,
        explanation: "Tempat tidur pada malam hari adalah 'غُرْفَةُ النَّوْمِ' (Kamar Tidur)."
      },
      {
        id: 6,
        question: "تَطْبُخُ الأُمُّ الأَطْعِمَةَ اللَّذِيْذَةَ فِي _____",
        options: ["الْمَطْبَخِ", "غُرْفَةِ الضُّيُوْفِ", "الْمَكْتَبَةِ", "الْمَلْعَبِ"],
        answer: 0,
        explanation: "Ibu memasak makanan lezat di 'الْمَطْبَخُ' (Dapur)."
      },
      {
        id: 7,
        question: "نَسْتَقْبِلُ الضُّيُوْفَ وَنَجْلِسُ مَعَهُمْ فِي _____",
        options: ["غُرْفَةِ الْجُلُوْسِ / الضُّيُوْفِ", "غُرْفَةِ النَّوْمِ", "الْمَطْبَخِ", "الْحَمَّامِ"],
        answer: 0,
        explanation: "Tempat menerima dan duduk bersama tamu adalah 'غُرْفَةُ الْجُلُوْسِ / الضُّيُوْفِ' (Ruang Tamu)."
      },
      {
        id: 8,
        question: "مَا مَعْنَى كَلِمَةِ 'خِزَانَةٌ'؟",
        options: ["Lemari", "Meja", "Kasur", "Kursi"],
        answer: 0,
        explanation: "'خِزَانَةٌ' artinya Lemari."
      },
      {
        id: 9,
        question: "نَشَاهِدُ التِّلْفَازَ مَعَ الأُسْرَةِ فِي _____",
        options: ["غُرْفَةِ الْجُلُوْسِ", "الْمَطْبَخِ", "الْحَمَّامِ", "الْمَكْتَبَةِ"],
        answer: 0,
        explanation: "Menonton televisi bersama keluarga dilakukan di 'غُرْفَةُ الْجُلُوْسِ' (Ruang Keluarga/Tamu)."
      },
      {
        id: 10,
        question: "مَنْ هِيَ 'ابْنَةُ الْعَمِّ'؟",
        options: ["Bibiku", "Nenekku", "Sepupuku (P)", "Saudaraku"],
        answer: 2,
        explanation: "'ابْنَةُ الْعَمِّ' adalah Anak Perempuan Paman (Sepupu Perempuan)."
      },
      {
        id: 11,
        question: "تَتَجَمَّعُ الأُسْرَةُ لِتَنَاوُلِ الطَّعَامِ فِي _____",
        options: ["غُرْفَةِ الأَكْلِ", "غُرْفَةِ النَّوْمِ", "الْحَمَّامِ", "الْمَكْتَبِ"],
        answer: 0,
        explanation: "Tempat makan bersama keluarga adalah 'غُرْفَةُ الأَكْلِ' (Ruang Makan)."
      },
      {
        id: 12,
        question: "مَا مَعْنَى كَلِمَةِ 'سَرِيْرٌ'؟",
        options: ["Pintu", "Jendela", "Tempat Tidur / Kasur", "Kipas Angin"],
        answer: 2,
        explanation: "'سَرِيْرٌ' artinya Tempat Tidur atau Kasur."
      },
      {
        id: 13,
        question: "نَغْسِلُ الْوَجْهَ وَنَسْتَحِمُّ فِي _____",
        options: ["الْحَمَّامِ", "الْمَطْبَخِ", "غُرْفَةِ النَّوْمِ", "غُرْفَةِ الأَكْلِ"],
        answer: 0,
        explanation: "Tempat membasuh muka dan mandi adalah 'الْحَمَّامُ' (Kamar Mandi)."
      },
      {
        id: 14,
        question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Ini foto keluargaku'",
        options: ["هَذِهِ صُوْرَةُ أُسْرَتِي", "هَذَا بَيْتِي", "هَذِهِ غُرْفَتِي", "هَذَا أَبِي"],
        answer: 0,
        explanation: "'Ini foto keluargaku' terjemahannya adalah 'هَذِهِ صُوْرَةُ أُسْرَتِي'."
      },
      {
        id: 15,
        question: "مَا مَعْنَى كَلِمَةِ 'مِنْضَدَةٌ'؟",
        options: ["Kursi", "Meja Kecil", "Lemari", "Pintu"],
        answer: 1,
        explanation: "'مِنْضَدَةٌ' artinya Meja Kecil."
      },
      {
        id: 16,
        question: "مَنْ هُوَ 'الْخَالُ' فِي اللُّغَةِ الإِنْدُونِيسِيَّةِ؟",
        options: ["Paman dari pihak Ibu", "Paman dari pihak Ayah", "Kakek", "Saudara Laki-laki"],
        answer: 0,
        explanation: "'الْخَالُ' adalah Paman dari pihak Ibu (Saudara laki-laki Ibu)."
      },
      {
        id: 17,
        question: "مَا مَعْنَى 'حَفِيْدٌ'؟",
        options: ["Sepupu", "Cucu Laki-laki", "Paman", "Keponakan"],
        answer: 1,
        explanation: "'حَفِيْدٌ' artinya Cucu Laki-laki."
      },
      {
        id: 18,
        question: "مَا مَعْنَى كَلِمَةِ 'بَيْتٌ' أَوْ 'مَنْزِلٌ'؟",
        options: ["Rumah / Tempat Tinggal", "Sekolah", "Masjid", "Taman"],
        answer: 0,
        explanation: "'بَيْتٌ' atau 'مَنْزِلٌ' artinya Rumah / Tempat Tinggal."
      },
      {
        id: 19,
        question: "مَاذَا يُوجَدُ فِي غُرْفَةِ الْجُلُوْسِ؟",
        options: ["أَرِيْكَةٌ وَمِنْضَدَةٌ", "سَرِيْرٌ وَمِخَدَّةٌ", "مَطْبَخٌ وَثَلَّاجَةٌ", "مَكْتَبٌ وَسَبُّوْرَةٌ"],
        answer: 0,
        explanation: "Di ruang tamu terdapat 'أَرِيْكَةٌ' (Sofa) dan 'مِنْضَدَةٌ' (Meja)."
      },
      {
        id: 20,
        question: "مَاذَا نَقُوْلُ عِنْدَ الإِعْجَابِ بِصُوْرَةِ الأُسْرَةِ الْجَمِيْلَةِ؟",
        options: ["مَا شَاءَ اللهِ!", "عَفْوًا!", "مَعَ السَّلَامَةِ!", "أَهْلًا وَسَهْلًا!"],
        answer: 0,
        explanation: "Ungkapan kekaguman saat melihat foto keluarga yang indah adalah 'مَا شَاءَ اللهِ!'."
      }
    ],

    // BAB 2 - VERSI 2: القواعد والتركيب (Muzakkar/Mu'annats, Dhomir & Huruf Jar Bab 2)
    bab2_v2: [
      {
        id: 1,
        question: "أَيُّ هَذِهِ الْكَلِمَاتِ تُعْتَبَرُ 'اسْمًا مُؤَنَّثًا'؟",
        options: ["بَيْتٌ", "غُرْفَةٌ", "مَكْتَبٌ", "سَرِيْرٌ"],
        answer: 1,
        explanation: "'غُرْفَةٌ' berakhiran Ta' Marbuthah (ة), sehingga tergolong Isim Mu'annats."
      },
      {
        id: 2,
        question: "أَكْمِلِ الْجُمْلَةَ: _____ جَدِّي، اسْمُهُ السَّيِّدُ تَوْفِيْقٌ.",
        options: ["هَذَا", "هَذِهِ", "تِلْكَ", "هِيَ"],
        answer: 0,
        explanation: "'جَدِّي' (Kakekku) adalah isim muzakkar, kata tunjuk dekat yang tepat adalah 'هَذَا'."
      },
      {
        id: 3,
        question: "أَكْمِلِ الْجُمْلَةَ: هَذِهِ أُمِّي، _____ طَبِيْبَةٌ نَشِيْطَةٌ.",
        options: ["هُوَ", "هِيَ", "أَنْتَ", "أَنَا"],
        answer: 1,
        explanation: "Subjek 'أُمِّي' (Ibuku) adalah mu'annats, kata ganti munfashil yang tepat adalah 'هِيَ'."
      },
      {
        id: 4,
        question: "مَا هُوَ حَرْفُ الْجَرِّ فِي الْجُمْلَةِ: 'الأُمُّ فِي الْمَطْبَخِ'؟",
        options: ["الأُمُّ", "فِي", "الْمَطْبَخِ", "تَطْبُخُ"],
        answer: 1,
        explanation: "'فِي' adalah Harf Jar yang berarti 'di / di dalam'."
      },
      {
        id: 5,
        question: "أَكْمِلِ الْجُمْلَةَ: الْكِتَابُ _____ الْمَكْتَبِ.",
        options: ["عَلَى", "عَنْ", "مِنْ", "إِلَى"],
        answer: 0,
        explanation: "'عَلَى' berarti 'di atas'."
      },
      {
        id: 6,
        question: "الضَّمِيْرُ الْمُتَّصِلُ 'ـُهُ' فِي 'بَيْتُهُ' يَعُوْدُ إِلَى _____",
        options: ["الْمُفْرَدِ الْمُذَكَّرِ (هُوَ)", "الْمُفْرَدِ الْمُؤَنَّثِ (هِيَ)", "الْمُتَكَلِّمِ (أَنَا)", "الْمُخَاطَبَةِ (أَنْتِ)"],
        answer: 0,
        explanation: "Akhiran 'ـُهُ' adalah dhomir muttashil untuk 'هُوَ' (Dia laki-laki)."
      },
      {
        id: 7,
        question: "أَيُّ مِنْ هَذِهِ الأَسْمَاءِ تُعْتَبَرُ 'مُذَكَّرًا'؟",
        options: ["شَجَرَةٌ", "مَكْتَبَةٌ", "بَيْتٌ", "خِزَانَةٌ"],
        answer: 2,
        explanation: "'بَيْتٌ' tidak berakhiran Ta' Marbuthah (ة), tergolong Isim Mudzakkar."
      },
      {
        id: 8,
        question: "أَكْمِلِ الْجُمْلَةَ: أَذْهَبُ _____ الْمَدْرَسَةِ صَبَاحًا.",
        options: ["إِلَى", "عَلَى", "عَنْ", "بِـ"],
        answer: 0,
        explanation: "Kata depan yang berarti 'ke/kepada' adalah 'إِلَى'."
      },
      {
        id: 9,
        question: "مَا مَعْنَى حَرْفِ الْجَرِّ 'مِنْ' فِي: 'بَيْتِي قَرِيْبٌ مِنَ الْمَدْرَسَةِ'؟",
        options: ["Ke", "Dari", "Di atas", "Di dalam"],
        answer: 1,
        explanation: "'مِنْ' berarti 'dari'."
      },
      {
        id: 10,
        question: "أَكْمِلِ الْجُمْلَةَ: عَلَى الطَّاوِلَةِ زَهْرِيَّةٌ، _____ زَهْرَةٌ جَمِيْلَةٌ.",
        options: ["فِيْهَا", "فِيْهِ", "مِنْهُ", "عَلَيْهِ"],
        answer: 0,
        explanation: "Kata 'زَهْرِيَّةٌ' adalah mu'annats, dhomir muttashil majrur yang tepat adalah 'فِيْهَا' (Di dalamnya)."
      },
      {
        id: 11,
        question: "أَيُّ كَلِمَةٍ مِنَ الْكَلِمَاتِ الآتِيَةِ لَيْسَتْ حَرْفَ جَرٍّ؟",
        options: ["فِي", "عَلَى", "يَنَامُ", "إِلَى"],
        answer: 2,
        explanation: "'يَنَامُ' (Tidur) adalah kata kerja (Fi'il Mudhari'), bukan huruf jar."
      },
      {
        id: 12,
        question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Dia (P) membaca buku di kamar'",
        options: [
          "هِيَ تَقْرَأُ الْكِتَابَ فِي الْغُرْفَةِ",
          "هُوَ يَقْرَأُ الْكِتَابَ فِي الْغُرْفَةِ",
          "أَنَا أَقْرَأُ الْكِتَابَ فِي الْمَطْبَخِ",
          "أَنْتَ تَقْرَأُ الْكِتَابَ فِي الْحَمَّامِ"
        ],
        answer: 0,
        explanation: "Terjemahan yang tepat: 'هِيَ تَقْرَأُ الْكِتَابَ فِي الْغُرْفَةِ'."
      },
      {
        id: 13,
        question: "مَا هُوَ الضَّمِيْرُ الْمُتَّصِلُ لِلْمُؤَنَّثِ (هِيَ) فِي كَلِمَةِ 'اسْمُهَا'؟",
        options: ["ـُهُ", "ـَهَا", "ـَكَ", "ـِي"],
        answer: 1,
        explanation: "Akhiran 'ـَهَا' menunjukkan dhomir muttashil untuk 'هِيَ'."
      },
      {
        id: 14,
        question: "أَكْمِلِ الْفَرَاغَ: هَذَا أَخِي، اسْمُـ_____ إِبْرَاهِيْمُ.",
        options: ["ـهُ", "ـهَا", "ـَكَ", "ـِكِ"],
        answer: 0,
        explanation: "'أَخِي' adalah mudzakkar (laki-laki), dhomir muttashil yang tepat adalah 'ـُهُ'."
      },
      {
        id: 15,
        question: "أَيُّ مِنْ هَذِهِ الْجُمَلِ تَحْتَوِي عَلَى حَرْفِ جَرٍّ؟",
        options: [
          "الأُسْرَةُ فِي الْبَيْتِ",
          "هَذَا بَيْتٌ كَبِيْرٌ",
          "أَحْمَدُ طَالِبٌ ذَكِيٌّ",
          "هَذِهِ صُوْرَةٌ جَمِيْلَةٌ"
        ],
        answer: 0,
        explanation: "Kalimat 'الأُسْرَةُ فِي الْبَيْتِ' mengandung Harf Jar 'فِي'."
      },
      {
        id: 16,
        question: "كَلِمَةُ 'شَجَرَةٌ' هِيَ اسْمٌ _____",
        options: ["مُذَكَّرٌ", "مُؤَنَّثٌ", "فِعْلٌ", "حَرْفٌ"],
        answer: 1,
        explanation: "Kata 'شَجَرَةٌ' berakhiran Ta' Marbuthah (ة), tergolong Isim Mu'annats."
      },
      {
        id: 17,
        question: "أَكْمِلِ الْجُمْلَةَ: _____ عَائِشَةُ، هِيَ طَالِبَةٌ ذَكِيَّةٌ.",
        options: ["هَذَا", "هَذِهِ", "ذَلِكَ", "هُوَ"],
        answer: 1,
        explanation: "'عَائِشَةُ' adalah nama perempuan (Mu'annats), kata tunjuk yang sesuai adalah 'هَذِهِ'."
      },
      {
        id: 18,
        question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Buku itu di atas meja'",
        options: [
          "الْكِتَابُ عَلَى الطَّاوِلَةِ",
          "الْكِتَابُ فِي الطَّاوِلَةِ",
          "الْكِتَابُ تَحْتَ الطَّاوِلَةِ",
          "الْكِتَابُ عَنِ الطَّاوِلَةِ"
        ],
        answer: 0,
        explanation: "Terjemahan yang tepat: 'الْكِتَابُ عَلَى الطَّاوِلَةِ'."
      },
      {
        id: 19,
        question: "مَا التَّأْنِيْثُ مِنْ كَلِمَةِ 'طَالِبٌ'؟",
        options: ["طَالِبَةٌ", "أُخْتٌ", "أُمٌّ", "بِنْتٌ"],
        answer: 0,
        explanation: "Bentuk mu'annats dari 'طَالِبٌ' (siswa) adalah 'طَالِبَةٌ' (siswi)."
      },
      {
        id: 20,
        question: "أَكْمِلِ الْجُمْلَةَ: نَتَكَلَّمُ _____ الأُسْرَةِ وَالْبَيْتِ.",
        options: ["عَنْ", "إِلَى", "عَلَى", "بِـ"],
        answer: 0,
        explanation: "Harf Jar 'عَنْ' digunakan untuk menyatakan 'tentang / mengenai'."
      }
    ],

    // BAB 3 - VERSI 1: المفردات والمرافق (Kosakata, Fasilitas Sekolah, Gedung, Profesi, Mata Pelajaran & Hiwar Bab 3)
    bab3_v1: [
      { id: 1, question: "مَا مَعْنَى كَلِمَةِ 'مَدْرَسَةٌ' فِي اللُّغَةِ الإِنْدُونِيسِيَّةِ؟", options: ["Sekolah", "Perpustakaan", "Kantin", "Lapangan"], answer: 0, explanation: "'مَدْرَسَةٌ' artinya Sekolah." },
      { id: 2, question: "أَيْنَ يَقْرَأُ الطُّلَّابُ الْكُتُبَ فِي الْمَدْرَسَةِ؟", options: ["فِي الْمَكْتَبَةِ", "فِي الْمَقْصَفِ", "فِي الْمَلْعَبِ", "فِي الْحَمَّامِ"], answer: 0, explanation: "Tempat membaca buku di sekolah adalah 'الْمَكْتَبَةُ' (Perpustakaan)." },
      { id: 3, question: "مَنْ هُوَ 'مُدِيْرُ الْمَدْرَسَةِ'؟", options: ["Guru Sekolah", "Kepala Sekolah", "Satpam Sekolah", "Pegawai Tata Usaha"], answer: 1, explanation: "'مُدِيْرُ الْمَدْرَسَةِ' artinya Kepala Sekolah." },
      { id: 4, question: "نَشْتَرِي الأَطْعِمَةَ وَالْمَشْرُوْبَاتِ فِي مَدْرَسَتِنَا فِي _____", options: ["الْمَقْصَفِ", "الْمَكْتَبَةِ", "الْمَسْجِدِ", "الْمَكْتَبِ"], answer: 0, explanation: "Tempat membeli makanan dan minuman di sekolah adalah 'الْمَقْصَفُ' (Kantin)." },
      { id: 5, question: "مَا مَعْنَى 'مَعْمَلُ اللُّغَاتِ'؟", options: ["Laboratorium Bahasa", "Laboratorium Komputer", "Laboratorium IPA", "Ruang Perpustakaan"], answer: 0, explanation: "'مَعْمَلُ اللُّغَاتِ' artinya Laboratorium Bahasa." },
      { id: 6, question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Guru (perempuan) mengajar siswi di kelas'", options: ["تُعَلِّمُ الْمُدَرِّسَةُ الطَّالِبَاتِ فِي الْفَصْلِ", "يُعَلِّمُ الْمُدَرِّسُ الطُّلَّابَ فِي الْمَلْعَبِ", "تَقْرَأُ الطَّالِبَةُ فِي الْمَكْتَبَةِ", "يَكْتُبُ الطَّالِبُ الدَّرْسَ"], answer: 0, explanation: "Terjemahan yang tepat: 'تُعَلِّمُ الْمُدَرِّسَةُ الطَّالِبَاتِ فِي الْفَصْلِ'." },
      { id: 7, question: "أَيْنَ نُلْعَبُ كُرَةَ الْقَدَمِ فِي الْمَدْرَسَةِ؟", options: ["فِي الْمَلْعَبِ", "فِي الْمَكْتَبَةِ", "فِي الْفَصْلِ", "فِي الْمَقْصَفِ"], answer: 0, explanation: "Tempat olahraga/bermain sepak bola adalah 'الْمَلْعَبُ' (Lapangan)." },
      { id: 8, question: "مَا مَعْنَى 'مُوَظَّفٌ إِدَارِيٌّ'؟", options: ["Pegawai Tata Usaha / Administrasi", "Kepala Sekolah", "Guru Mata Pelajaran", "Penjaga Perpustakaan"], answer: 0, explanation: "'مُوَظَّفٌ إِدَارِيٌّ' artinya Pegawai Tata Usaha / Administrasi." },
      { id: 9, question: "أَيُّ مَادَّةٍ دِرَاسِيَّةٍ تُعْنَى بِـ 'الْفِيْزِيَاءُ'؟", options: ["Fisika", "Kimia", "Biologi", "Matematika"], answer: 0, explanation: "'الْفِيْزِيَاءُ' artinya Mata Pelajaran Fisika." },
      { id: 10, question: "أَكْمِلِ الْجُمْلَةَ: نَتَعَلَّمُ فِي الْيَوْمِ تِسْعَ _____", options: ["حِصَصٍ", "أَيَّامٍ", "سَاعَاتٍ", "شُهُوْرٍ"], answer: 0, explanation: "Kelanjutan yang tepat: 'تِسْعَ حِصَصٍ' (9 jam pelajaran)." },
      { id: 11, question: "مَا مَعْنَى 'الْجَدْوَلُ الدِّرَاسِيُّ'؟", options: ["Jadwal Pelajaran", "Kartu Pelajar", "Buku Absensi", "Daftar Nilai"], answer: 0, explanation: "'الْجَدْوَلُ الدِّرَاسِيُّ' artinya Jadwal Pelajaran." },
      { id: 12, question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Ruang dewan guru'", options: ["مَكْتَبُ هَيْئَةِ التَّدْرِيْسِ", "مَكْتَبُ الشُّؤُوْنِ الإِدَارِيَّةِ", "قَاعَةُ الاِجْتِمَاعِ", "غُرْفَةُ الْمَذَاكَرَةِ"], answer: 0, explanation: "'Ruang dewan guru' terjemahannya adalah 'مَكْتَبُ هَيْئَةِ التَّدْرِيْسِ'." },
      { id: 13, question: "أَيْنَ يُصَلِّي الطُّلَّابُ صَلَاةَ الظُّهْرِ وَالضُّحَى فِي الْمَدْرَسَةِ؟", options: ["فِي مَسْجِدِ الْمَدْرَسَةِ", "فِي الْمَقْصَفِ", "فِي الْمَلْعَبِ", "فِي الْمَكْتَبَةِ"], answer: 0, explanation: "Tempat salat di sekolah adalah 'مَسْجِدُ الْمَدْرَسَةِ' (Masjid Sekolah)." },
      { id: 14, question: "مَا مَعْنَى كَلِمَةِ 'سَبُّوْرَةٌ'؟", options: ["Papan Tulis", "Meja Belajar", "Kipas Angin", "Pintu Kelas"], answer: 0, explanation: "'سَبُّوْرَةٌ' artinya Papan Tulis." },
      { id: 15, question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Aula pertemuan'", options: ["قَاعَةُ الاِجْتِمَاعِ", "مَعْمَلُ الْكَمْبِيُوتَر", "الْمَلْعَبُ", "الْمَقْصَفُ"], answer: 0, explanation: "'Aula pertemuan' terjemahannya adalah 'قَاعَةُ الاِجْتِمَاعِ'." },
      { id: 16, question: "مَا هُوَ 'الْوَاجِبُ الْمَنْزِلِيُّ' (PR)؟", options: ["Pekerjaan Rumah (PR)", "Jadwal Piket", "Ujian Semester", "Kartu Ujian"], answer: 0, explanation: "'الْوَاجِبُ الْمَنْزِلِيُّ' artinya Pekerjaan Rumah (PR)." },
      { id: 17, question: "أَكْمِلِ الْجُمْلَةَ: يَدُقُّ _____ فَيَدْخُلُ الطُّلَّابُ الْفَصْلَ.", options: ["الْجَرَسُ", "الْكِتَابُ", "الْقَلَمُ", "الْمَكْتَبُ"], answer: 0, explanation: "Kata yang tepat adalah 'الْجَرَسُ' (Bel sekolah berbunyi)." },
      { id: 18, question: "مَا مَعْنَى 'الْكَشْفُ' فِي الْفَصْلِ؟", options: ["Presensi / Daftar Hadir / Absensi", "Layar Proyektor", "Jam Dinding", "Papan Tulis"], answer: 0, explanation: "'الْكَشْفُ' artinya Presensi atau Daftar Hadir Siswa." },
      { id: 19, question: "أَيُّ مَادَّةٍ تُعْتَبَرُ 'الرِّيَاضِيَّاتُ'؟", options: ["Matematika", "Olahraga", "Sejarah", "Fikih"], answer: 0, explanation: "'الرِّيَاضِيَّاتُ' artinya Mata Pelajaran Matematika." },
      { id: 20, question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Hari Minggu adalah hari libur sekolah kami'", options: ["يَوْمُ الأَحَدِ يَوْمُ الْعُطْلَةِ لِمَدْرَسَتِنَا", "يَوْمُ الْجُمُعَةِ يَوْمُ الْعَمَلِ", "يَوْمُ السَّبْتِ يَوْمُ الدِّرَاسَةِ", "يَوْمُ الإِثْنَيْنِ يَوْمُ الاِمْتِحَانِ"], answer: 0, explanation: "Terjemahan yang tepat: 'يَوْمُ الأَحَدِ يَوْمُ الْعُطْلَةِ لِمَدْرَسَتِنَا'." }
    ],

    // BAB 3 - VERSI 2: القواعد والتركيب (Mufrad/Mutsanna/Jamak & Huruf 'Athaf Bab 3)
    bab3_v2: [
      { id: 1, question: "مَا هُوَ الْمُفْرَدُ مِنْ كَلِمَةِ 'كُتُبٌ'؟", options: ["كِتَابٌ", "كِتَابَانِ", "كِتَابَاتٌ", "كَاتِبٌ"], answer: 0, explanation: "Bentuk tunggal (mufrad) dari 'كُتُبٌ' (buku-buku) adalah 'كِتَابٌ' (sebuah buku)." },
      { id: 2, question: "مَا هُوَ الْمُثَنَّى (Dual) مِنْ كَلِمَةِ 'طَالِبٌ'؟", options: ["طَالِبَانِ / طَالِبَيْنِ", "طُلَّابٌ", "طَالِبَاتٌ", "طَالِبَةٌ"], answer: 0, explanation: "Bentuk Mutsanna (Dua) ditandai akhiran alif-nun (ـَانِ) atau ya'-nun (ـَيْنِ): 'طَالِبَانِ'." },
      { id: 3, question: "أَيُّ هَذِهِ الْكَلِمَاتِ تُعْتَبَرُ 'جَمْعَ مُذَكَّرٍ سَالِمًا'؟", options: ["مُدَرِّسُوْنَ", "مُدَرِّسَاتٌ", "كُتُبٌ", "فُصُوْلٌ"], answer: 0, explanation: "'مُدَرِّسُوْنَ' berakhiran wawu-nun (ـُوْنَ), tergolong Jamak Mudzakkar Salim." },
      { id: 4, question: "أَيُّ هَذِهِ الْكَلِمَاتِ تُعْتَبَرُ 'جَمْعَ مُؤَنَّثٍ سَالِمًا'؟", options: ["طَالِبَاتٌ", "طُلَّابٌ", "مُوَظَّفُوْنَ", "دُرُوْسٌ"], answer: 0, explanation: "'طَالِبَاتٌ' berakhiran alif-ta' (ـَاتٌ), tergolong Jamak Mu'annats Salim." },
      { id: 5, question: "مَا نَوْعُ الْجَمْعِ فِي كَلِمَةِ 'فُصُوْلٌ' أَوْ 'دُرُوْسٌ'؟", options: ["جَمْعُ التَّكْسِيْرِ", "جَمْعُ الْمُذَكَّرِ السَّالِمِ", "جَمْعُ الْمُؤَنَّثِ السَّالِمِ", "الْمُثَنَّى"], answer: 0, explanation: "'فُصُوْلٌ' dan 'دُرُوْسٌ' adalah Jamak Taksir (jamak tidak teratur)." },
      { id: 6, question: "حَرْفُ الْعَطْفِ 'وَ' يُفِيْدُ _____", options: ["الْمُطْلَقَ / الْجَمْعَ (Penggabungan umum)", "التَّرْتِيْبَ مَعَ التَّعْقِيْبِ (Urutan langsung)", "التَّرْتِيْبَ مَعَ التَّرَاخِي (Urutan berjarak)", "التَّخْيِيْرَ (Pilihan)"], answer: 0, explanation: "Huruf 'وَ' (Dan) menyatakan penggabungan tanpa terikat urutan waktu." },
      { id: 7, question: "حَرْفُ الْعَطْفِ 'فَـ' يُفِيْدُ _____", options: ["التَّرْتِيْبَ مَعَ التَّعْقِيْبِ (Urutan langsung tanpa jeda)", "التَّرْتِيْبَ مَعَ التَّرَاخِي (Urutan dengan jeda)", "التَّخْيِيْرَ (Pilihan)", "النَّفْيَ (Penafian)"], answer: 0, explanation: "Huruf 'فَـ' (Lalu/Maka) menyatakan urutan langsung tanpa jeda waktu lama." },
      { id: 8, question: "حَرْفُ الْعَطْفِ 'ثُمَّ' يُفِيْدُ _____", options: ["التَّرْتِيْبَ مَعَ التَّرَاخِي (Urutan dengan jeda waktu)", "التَّرْتِيْبَ مَعَ التَّعْقِيْبِ (Urutan langsung)", "التَّخْيِيْرَ (Pilihan)", "الْجَمْعَ"], answer: 0, explanation: "Huruf 'ثُمَّ' (Kemudian) menyatakan urutan waktu yang memiliki jeda/jarak." },
      { id: 9, question: "أَكْمِلِ الْجُمْلَةَ: هَلْ تَكْتُبُ الدَّرْسَ _____ تَقْرَأُ الْكِتَابَ؟", options: ["أَوْ", "ثُمَّ", "فَـ", "عَنْ"], answer: 0, explanation: "Untuk menyatakan pilihan (Apakah kamu menulis atau membaca?), gunakan huruf 'أَوْ'." },
      { id: 10, question: "أَكْمِلِ الْجُمْلَةَ: لَسْتُ مُدِيْرًا _____ مُدَرِّسًا.", options: ["لٰكِنْ", "عَلَى", "مِنْ", "إِلَى"], answer: 0, explanation: "Huruf 'Athaf 'لٰكِنْ' (Tetapi) digunakan sebagai koreksi setelah penafian: 'لَسْتُ مُدِيْرًا لٰكِنْ مُدَرِّسًا'." },
      { id: 11, question: "أَكْمِلِ الْجُمْلَةَ: لَا آكُلُ _____ أَشْرَبُ.", options: ["بَلْ", "فِي", "عَنْ", "بِـ"], answer: 0, explanation: "Huruf 'Athaf 'بَلْ' (Melainkan / Bahkan) menyanggah hal sebelumnya: 'لَا آكُلُ بَلْ أَشْرَبُ'." },
      { id: 12, question: "أَكْمِلِ الْجُمْلَةَ: حَضَرَ الْمُدِيْرُ _____ الْمُشْرِفُ.", options: ["لَا", "ثُمَّ", "أَوْ", "فَـ"], answer: 0, explanation: "Huruf 'Athaf 'لَا' (Bukan) menegaskan hal pertama dan menafikan hal kedua: 'حَضَرَ الْمُدِيْرُ لَا الْمُشْرِفُ'." },
      { id: 13, question: "مَا هُوَ الْمُثَنَّى مِنْ كَلِمَةِ 'مُدَرِّسَةٌ'؟", options: ["مُدَرِّسَتَانِ / مُدَرِّسَتَيْنِ", "مُدَرِّسَاتٌ", "مُدَرِّسُوْنَ", "مُدَرِّسَانِ"], answer: 0, explanation: "Bentuk Mutsanna Mu'annats (2 guru perempuan) adalah 'مُدَرِّسَتَانِ' atau 'مُدَرِّسَتَيْنِ'." },
      { id: 14, question: "أَيُّ كَلِمَةٍ مِنَ الْكَلِمَاتِ الآتِيَةِ هِيَ 'جَمْعُ تَكْسِيْرٍ'؟", options: ["أَقْلَامٌ", "مُسْلِمُوْنَ", "مُسْلِمَاتٌ", "طَالِبَانِ"], answer: 0, explanation: "'أَقْلَامٌ' (Pulpen-pulpen) adalah Jamak Taksir dari 'قَلَمٌ'." },
      { id: 15, question: "أَكْمِلِ الْجُمْلَةَ: يُصَلُّوْنَ الظُّهْرَ جَمَاعَةً _____ الْكَنَّاسُ.", options: ["حَتَّى", "لٰكِنْ", "أَوْ", "بِـ"], answer: 0, explanation: "Huruf 'Athaf 'حَتَّى' menyatakan cakupan puncak: 'حَتَّى الْكَنَّاسُ' (Hingga tukang sapu pun)." },
      { id: 16, question: "مَا هُوَ الْجَمْعُ مِنْ كَلِمَةِ 'مُوَظَّفٌ'؟", options: ["مُوَظَّفُوْنَ", "مُوَظَّفَاتٌ", "مُوَظَّفَانِ", "مَوَظِيفُ"], answer: 0, explanation: "Jamak Mudzakkar Salim dari 'مُوَظَّفٌ' (Pegawai) adalah 'مُوَظَّفُوْنَ'." },
      { id: 17, question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Dua orang siswa (laki-laki) hadir'", options: ["حَضَرَ الطَّالِبَانِ", "حَضَرَ الطُّلاَّبُ", "حَضَرَتِ الطَّالِبَتَانِ", "حَضَرَتِ الطَّالِبَاتُ"], answer: 0, explanation: "Bentuk Mutsanna Mudzakkar yang tepat: 'حَضَرَ الطَّالِبَانِ'." },
      { id: 18, question: "أَكْمِلِ الْجُمْلَةَ: يَدْخُلُ الْمُدَرِّسُ الْفَصْلَ _____ يُسَلِّمُ عَلَى الطُّلَّابِ.", options: ["فَيُسَلِّمُ", "ثُمَّ يُسَلِّمُ", "أَوْ يُسَلِّمُ", "لَا يُسَلِّمُ"], answer: 0, explanation: "Huruf 'فَـ' tepat untuk urutan langsung tanpa jeda waktu ('فَيُسَلِّمُ')." },
      { id: 19, question: "أَيُّ حَرْفِ عَطْفٍ يُفِيْدُ 'النَّفْيَ عَمَّا بَعْدَهُ' (Menafikan hal setelahnya)؟", options: ["لَا", "وَ", "ثُمَّ", "فَـ"], answer: 0, explanation: "Huruf 'لَا' (Bukan) menafikan kata/hukum yang jatuh setelahnya." },
      { id: 20, question: "تَرْجِمْ إِلَى الْعَرَبِيَّةِ: 'Kami belajar di kelas jam 7 kemudian beristirahat jam 10'", options: ["نَتَعَلَّمُ فِي الْفَصْلِ فِي السَّابِعَةِ ثُمَّ نَسْتَرِيْحُ فِي الْعَاشِرَةِ", "نَتَعَلَّمُ فِي الْفَصْلِ فَـنَسْتَرِيْحُ", "نَتَعَلَّمُ أَوْ نَسْتَرِيْحُ", "نَتَعَلَّمُ لَا نَسْتَرِيْحُ"], answer: 0, explanation: "Untuk urutan dengan jeda waktu beberapa jam, digunakan huruf 'ثُمَّ' (Kemudian)." }
    ]
  }
};
