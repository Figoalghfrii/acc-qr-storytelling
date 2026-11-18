/**
 * Centralized Image Asset Mapping (Section 5.4)
 * Maps all RELIGHT (Desa Pasir Wetan) and Ngalang — Teh Bunga Telang (Desa Cinanjung) local assets
 * with alt text, honest visual representation captions, Category A/B classification,
 * and source attribution.
 */

export const IMAGE_ASSETS = {
  relight: {
    heroVillage: {
      src: "public/images/relight/hero-village.webp",
      alt: "Bentang alam Kabupaten Banyumas di kaki Gunung Slamet, wilayah Desa Pasir Wetan",
      caption: "Bentang alam Kabupaten Banyumas di kaki Gunung Slamet — wilayah tumbuh kembangnya gerakan warga Desa Pasir Wetan.",
      category: "Category A — Verified Location Photography (Kab. Banyumas)",
      credit: "Foto: Tyo Satriany / Wikimedia Commons (CC BY-SA 4.0)"
    },
    villageLandscape: {
      src: "public/images/relight/village-landscape.webp",
      alt: "Lanskap pedesaan hijau di Kecamatan Karanglewas, Kabupaten Banyumas",
      caption: "Lanskap hijau di Kecamatan Karanglewas, Kabupaten Banyumas — wilayah Desa Pasir Wetan.",
      category: "Category A — Verified Location Photography (Kec. Karanglewas, Banyumas)",
      credit: "Foto: Tyo Satriany / Wikimedia Commons (CC BY-SA 4.0)"
    },
    metalCraftsmanship: {
      src: "public/images/relight/metal-craftsmanship.webp",
      alt: "Ilustrasi pengerjaan kerajinan logam tradisional di bengkel kerja",
      caption: "Ilustrasi kerajinan logam tradisional — bukan foto pengrajin Desa Pasir Wetan.",
      category: "Category B — Representative Photography",
      credit: "Foto: Moh. Aripin / Wikimedia Commons (CC BY-SA 4.0)"
    },
    wasteBank: {
      src: "public/images/relight/waste-bank.webp",
      alt: "Gambaran aktivitas pemilahan dan pengelolaan di bank sampah masyarakat",
      caption: "Gambaran pengelolaan bank sampah masyarakat di Jawa Tengah — bukan foto Bank Sampah Suka Mandiri.",
      category: "Category B — Representative Photography",
      credit: "Foto: SATELIT BM9 / Wikimedia Commons (CC BY-SA 4.0)"
    },
    usedOilCollection: {
      src: "public/images/relight/used-oil-collection.webp",
      alt: "Ilustrasi pengumpulan minyak rumah tangga dalam botol sebelum ditimbang",
      caption: "Ilustrasi pengumpulan minyak goreng bekas rumah tangga sebelum ditimbang dan dicatat per batch.",
      category: "Category B — Representative Photography",
      credit: "Foto: Judgefloro / Wikimedia Commons (CC0 1.0 Public Domain)"
    },
    oilProcessing: {
      src: "public/images/relight/oil-processing.webp",
      alt: "Gambaran proses penyaringan dan penjernihan minyak jelantah secara bertahap",
      caption: "Gambaran proses pengolahan minyak jelantah — penyaringan bertahap dan penjernihan dengan rempah dapur serta adsorben sebelum dipadukan dengan stearin.",
      category: "Category B — Representative Photography",
      credit: "Foto: Judgefloro / Wikimedia Commons (CC0 1.0 Public Domain)"
    },
    productRelight: {
      src: "public/images/relight/product-relight.webp",
      alt: "Visualisasi lilin aromaterapi hangat RELIGHT dengan aroma rempah dan sitrus",
      caption: "Visual suasana hangat lilin aromaterapi RELIGHT dari referensi identitas visual resmi.",
      category: "Official Brand Moodboard Asset",
      credit: "Sumber: Moodboard Resmi RELIGHT (Desa Pasir Wetan)"
    },
    upcycledCandleCraft: {
      src: "public/images/relight/upcycled-candle-craft.webp",
      alt: "Ilustrasi produk lilin aromaterapi hasil olahan minyak goreng bekas",
      caption: "Ilustrasi hasil olahan lilin aromaterapi berbahan dasar minyak goreng bekas rumah tangga.",
      category: "Category B — Representative Photography",
      credit: "Foto: Nunung Mintarsih / Wikimedia Commons (CC BY-SA 4.0)"
    }
  },
  telang: {
    heroVillage: {
      src: "public/images/telang/hero-village.webp",
      alt: "Lanskap perbukitan dan hamparan pertanian di Kabupaten Sumedang, Jawa Barat",
      caption: "Bentang alam perbukitan agrikultur di Kabupaten Sumedang, Jawa Barat — wilayah Desa Cinanjung berada pada ketinggian ±855 mdpl.",
      category: "Category A — Verified Regional Location Photography (Kab. Sumedang)",
      credit: "Foto: Pak Andri Irawan / Wikimedia Commons (CC BY 4.0)"
    },
    villageLandscape: {
      src: "public/images/telang/village-landscape.webp",
      alt: "Hamparan lahan pertanian hijau berlatar perbukitan di Kabupaten Sumedang",
      caption: "Lanskap pertanian Kabupaten Sumedang yang merepresentasikan potensi agrikultur lereng perbukitan Desa Cinanjung.",
      category: "Category A — Verified Regional Location Photography (Kab. Sumedang)",
      credit: "Foto: Pak Andri Irawan / Wikimedia Commons (CC BY 4.0)"
    },
    telangPlant: {
      src: "public/images/telang/telang-plant.jpg",
      alt: "Ilustrasi tanaman merambat bunga telang (Clitoria ternatea)",
      caption: "Ilustrasi tanaman bunga telang (Clitoria ternatea) — di kebun KWT Malati Asih dirawat dengan kompos dan pestisida nabati buatan Kelompok Berlian (bukan foto kebun Desa Cinanjung).",
      category: "Category B — Representative Botanical Photography",
      credit: "Foto: Vengolis / Wikimedia Commons (CC BY-SA 4.0)"
    },
    telangFlower: {
      src: "public/images/telang/telang-flower.jpg",
      alt: "Detail bunga telang (Clitoria ternatea) biru pekat segar",
      caption: "Ilustrasi spesies bunga telang (Clitoria ternatea) segar yang diperiksa 20 bunga sampel per batch oleh KWT Malati Asih (bukan foto kebun KWT).",
      category: "Category B — Verified Botanical Species Photography",
      credit: "Foto: Wilfredor / Wikimedia Commons (CC0 1.0 Public Domain)"
    },
    womenFarming: {
      src: "public/images/telang/women-farming.webp",
      alt: "Ilustrasi kolaborasi kelompok petani perempuan Indonesia",
      caption: "Ilustrasi petani perempuan Indonesia — merepresentasikan kegiatan ibu-ibu KWT Malati Asih di Desa Cinanjung (bukan foto anggota KWT Malati Asih).",
      category: "Category B — Representative Photography",
      credit: "Foto: Jaljog / Wikimedia Commons (CC BY-SA 4.0)"
    },
    telangDried: {
      src: "public/images/telang/telang-dried.jpg",
      alt: "Ilustrasi bunga telang kering utuh",
      caption: "Ilustrasi bunga telang kering utuh sebelum dikemas (bukan foto dapur produksi KWT Malati Asih).",
      category: "Category B — Representative Photography",
      credit: "Foto: Fumikas Sagisavas / Wikimedia Commons (CC0 1.0 Public Domain)"
    },
    telangTeaBlue: {
      src: "public/images/telang/telang-tea-blue.jpg",
      alt: "Ilustrasi seduhan teh bunga telang berwarna biru alami",
      caption: "Ilustrasi sajian seduhan teh bunga telang berwarna biru alami sebelum ditambah jeruk nipis.",
      category: "Category B — Representative Photography",
      credit: "Foto: Mx. Granger / Wikimedia Commons (CC0 1.0 Public Domain)"
    },
    telangTeaPurple: {
      src: "public/images/telang/telang-tea-purple.jpg",
      alt: "Ilustrasi seduhan teh bunga telang ungu setelah ditambah jeruk nipis",
      caption: "Ilustrasi sajian seduhan teh bunga telang berubah ungu setelah ditambah jeruk nipis.",
      category: "Category B — Representative Photography",
      credit: "Foto: Mx. Granger / Wikimedia Commons (CC0 1.0 Public Domain)"
    },
    telangTeaShift: {
      src: "public/images/telang/telang-tea-shift.jpg",
      alt: "Ilustrasi perbandingan warna seduhan teh bunga telang biru ke ungu dengan jeruk nipis",
      caption: "Ilustrasi perubahan warna seduhan teh bunga telang dari biru menjadi ungu dengan jeruk nipis.",
      category: "Category B — Representative Photography",
      credit: "Foto: Mx. Granger / Wikimedia Commons (CC0 1.0 Public Domain)"
    },
    iconTelang: {
      src: "public/images/telang/icon-telang.png",
      alt: "Ikon resmi 5 kelopak biru-ungu-kuning Teh Bunga Telang Cinanjung",
      caption: "Ikon resmi Teh Bunga Telang Cinanjung (biru #2A4EB3, ungu #5B3FA7, kuning #FFCF79, krem #F4F1E9).",
      category: "Official Brand Icon Asset",
      credit: "Tim Desain ACC #NextGreen Leaders Challenge (Desa Cinanjung)"
    }
  }
};

export default IMAGE_ASSETS;
