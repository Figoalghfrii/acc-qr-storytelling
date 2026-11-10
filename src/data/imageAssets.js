/**
 * Centralized Image Asset Mapping (Section 5.4)
 * Maps all RELIGHT (Desa Pasir Wetan) and DAUNARA (Desa Cinanjung) local WebP assets
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
  daunara: {
    heroVillage: {
      src: "public/images/daunara/hero-village.webp",
      alt: "Lanskap perbukitan dan hamparan pertanian di Kabupaten Sumedang, Jawa Barat",
      caption: "Bentang alam perbukitan agrikultur di Kabupaten Sumedang, Jawa Barat — wilayah Desa Cinanjung berada pada ketinggian ±855 mdpl.",
      category: "Category A — Verified Regional Location Photography (Kab. Sumedang)",
      credit: "Foto: Pak Andri Irawan / Wikimedia Commons (CC BY 4.0)"
    },
    villageLandscape: {
      src: "public/images/daunara/village-landscape.webp",
      alt: "Hamparan lahan pertanian hijau berlatar perbukitan di Kabupaten Sumedang",
      caption: "Lanskap pertanian Kabupaten Sumedang yang merepresentasikan potensi agrikultur lereng perbukitan Desa Cinanjung.",
      category: "Category A — Verified Regional Location Photography (Kab. Sumedang)",
      credit: "Foto: Pak Andri Irawan / Wikimedia Commons (CC BY 4.0)"
    },
    botanicalGarden: {
      src: "public/images/daunara/botanical-garden.webp",
      alt: "Ilustrasi pohon bidara (Ziziphus mauritiana)",
      caption: "Ilustrasi pohon bidara (Ziziphus mauritiana) — di kebun KWT Malati Asih dirawat dengan pupuk kompos dan pestisida nabati buatan Kelompok Berlian (bukan foto kebun KWT Malati Asih).",
      category: "Category B — Representative Botanical Photography",
      credit: "Foto: Forest & Kim Starr / Wikimedia Commons (CC BY 3.0)"
    },
    bidaraLeaves: {
      src: "public/images/daunara/bidara-leaves.webp",
      alt: "Detail daun bidara (Ziziphus mauritiana) segar",
      caption: "Contoh tanaman bidara (Ziziphus mauritiana) segar yang menjadi objek pemeriksaan awal berbantuan aplikasi deteksi gambar sebelum dicek petugas KWT Malati Asih (bukan foto kebun KWT).",
      category: "Category B — Verified Botanical Species Photography",
      credit: "Foto: Gururantau Pak Haris / Wikimedia Commons (CC0 1.0 Public Domain)"
    },
    womenFarming: {
      src: "public/images/daunara/women-farming.webp",
      alt: "Ilustrasi kolaborasi kelompok petani perempuan Indonesia",
      caption: "Ilustrasi petani perempuan Indonesia — merepresentasikan kegiatan ibu-ibu KWT Malati Asih di Desa Cinanjung (bukan foto anggota KWT Malati Asih).",
      category: "Category B — Representative Photography",
      credit: "Foto: Jaljog / Wikimedia Commons (CC BY-SA 4.0)"
    },
    leafProcessing: {
      src: "public/images/daunara/leaf-processing.webp",
      alt: "Ilustrasi pengolahan dan pengeringan daun teh",
      caption: "Ilustrasi pengolahan daun teh hingga bobot segar dan kering dicatat per batch (bukan foto dapur produksi KWT Malati Asih).",
      category: "Category B — Representative Photography",
      credit: "Foto: Bdx / Wikimedia Commons (CC BY-SA 4.0)"
    },
    herbalTeaProduction: {
      src: "public/images/daunara/herbal-tea-production.webp",
      alt: "Ilustrasi cangkir seduhan teh daun herbal berwarna kuning keemasan hangat",
      caption: "Ilustrasi sajian seduhan teh herbal berwarna keemasan dalam cangkir.",
      category: "Category B — Representative Photography",
      credit: "Foto: PagesAndPathsPH / Wikimedia Commons (CC0 1.0 Public Domain)"
    },
    productDaunara: {
      src: "public/images/daunara/product-daunara.webp",
      alt: "Ilustrasi sajian cangkir teh daun bidara hangat",
      caption: "Ilustrasi sajian teh daun bidara hangat berwarna keemasan hasil olahan KWT Malati Asih.",
      category: "Category B & Official Brand Moodboard Asset",
      credit: "Foto: PagesAndPathsPH (CC0 1.0) & Moodboard Resmi DAUNARA"
    },
    moodboardTeaCup: {
      src: "public/images/daunara/moodboard-tea-cup.webp",
      alt: "Referensi cangkir teh daun bidara dari moodboard resmi DAUNARA",
      caption: "Referensi visual cangkir teh herbal dari dokumen identitas merek DAUNARA.",
      category: "Official Brand Moodboard Asset",
      credit: "Sumber: Moodboard Resmi DAUNARA (Desa Cinanjung)"
    }
  }
};

export default IMAGE_ASSETS;
