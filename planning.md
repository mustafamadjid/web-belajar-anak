# Planning Pembuatan Website Media Belajar IPAS

## 1. Tujuan Produk

Website ini adalah media pembelajaran berbasis web untuk siswa yang ingin mengerjakan latihan IPAS berdasarkan bab. Siswa memilih mata pelajaran IPAS, memilih salah satu bab, mengerjakan 25 soal, mengirim jawaban, lalu melihat hasil akhir berupa jumlah benar, jumlah salah, skor, dan preview setiap jawaban.

Website harus sangat nyaman digunakan di smartphone karena mayoritas pengguna akan mengakses lewat mobile. Tampilan desktop tetap rapi, tetapi prioritas utama adalah mobile dan tablet.

## 2. Tech Stack

Gunakan stack berikut:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router untuk routing antar halaman
- shadcn/ui jika diperlukan untuk komponen seperti button, card, dialog, progress, dan badge
- lucide-react untuk icon
- localStorage untuk menyimpan jawaban sementara siswa

Jangan gunakan emoji. Jika perlu visual kecil, gunakan icon dari `lucide-react` atau ilustrasi custom berbasis asset/image.

## 3. Referensi Desain

Arahan visual mengikuti referensi gambar yang diberikan:

- Gunakan file referensi desain berikut sebagai acuan utama:
  - `referensi/image.png`
  - `referensi/image-2.png`
- `referensi/image.png` digunakan sebagai acuan nuansa dashboard edukasi: warna lembut, card putih, ilustrasi flat, layout bersih, dan aksen coral/oranye.
- `referensi/image-2.png` digunakan sebagai acuan utama flow mobile: landing, pilihan bab, halaman soal, submit confirmation, hasil, dan review jawaban.
- Nuansa edukatif, cerah, ramah anak, dan bersih.
- Dominasi warna hijau muda, krem lembut, putih, coral/oranye sebagai aksen CTA.
- Gunakan ilustrasi gaya flat education seperti buku, tablet, tanaman, bumi, magnet, cahaya, bunyi, dan lingkungan.
- Bentuk card lembut dengan shadow ringan.
- Layout mobile seperti mockup referensi:
  - Landing page dengan ilustrasi di atas, headline besar, CTA "IPAS", dan statistik singkat.
  - Pilihan bab dalam bentuk card vertikal.
  - Halaman soal dengan progress, nomor soal, pilihan jawaban, dan tombol navigasi.
  - Halaman hasil dengan skor besar dan tombol review jawaban.
  - Halaman review berupa daftar jawaban benar/salah.

Perbaiki desain dari referensi jika ada bagian yang kurang rapi:

- Pastikan spacing lebih konsisten.
- Pastikan kontras teks cukup.
- Pastikan tombol mudah ditekan di mobile.
- Pastikan tidak ada teks yang kepotong.
- Pastikan layout tidak terlalu padat di layar kecil.

Catatan penting untuk agent implementasi:

- Sebelum mulai styling, buka dan amati kedua file referensi di folder `referensi`.
- Jangan menyalin mentah seluruh desain; jadikan referensi sebagai arah visual lalu rapikan sesuai kebutuhan aplikasi.
- Prioritaskan kesamaan rasa visual dengan `image-2.png` untuk semua layar mobile.
- Gunakan `image.png` sebagai inspirasi tambahan untuk ilustrasi, warna, card, dan visual education dashboard.

## 4. Font dan Gaya UI

Rekomendasi font:

- Gunakan `Inter` sebagai font utama karena mudah dibaca di mobile.
- Jika ingin nuansa lebih playful, gunakan font teacher hanya untuk heading besar atau elemen dekoratif, bukan untuk seluruh body text.

Rekomendasi styling:

- Background utama: hijau sangat muda atau off-white.
- Card: putih dengan border halus dan shadow lembut.
- CTA utama: coral/oranye.
- Status benar: hijau.
- Status salah: merah lembut.
- Status netral: abu/hijau pucat.
- Radius card sekitar `16px` untuk nuansa ramah mobile.
- Button minimal height `44px` agar nyaman disentuh.
- Gunakan `max-w-md` untuk layout mobile utama agar tetap seperti app saat dibuka di desktop.

## 5. Struktur Halaman dan Alur

### 5.1 Landing Page

Route: `/`

Isi:

- Header sederhana dengan nama aplikasi, misalnya `IPAS Ceria`.
- Ilustrasi edukasi sesuai tema.
- Headline:
  - `Belajar IPAS Jadi Lebih Mudah`
- Subheadline:
  - `Pilih bab, kerjakan soal, dan lihat hasil belajarmu secara langsung.`
- Tombol utama:
  - `IPAS`
- Info singkat:
  - `4 Bab`
  - `25 Soal per Bab`
  - `Hasil Langsung`

Interaksi:

- Klik tombol `IPAS` membawa siswa ke halaman pilihan bab.

### 5.2 Halaman Pilihan Bab

Route: `/chapters`

Isi:

- Judul: `Pilih Bab IPAS`
- Subtitle: `Setiap bab berisi 25 soal latihan.`
- List 4 card bab:
  - Bab 1: `Melihat Karena Cahaya, Mendengar Karena Bunyi`
  - Bab 2: `Harmoni dalam Ekosistem`
  - Bab 3: `Magnet, Listrik, dan Teknologi untuk Kehidupan`
  - Bab 4: `Ayo Berkenalan dengan Bumi Kita`
- Setiap card menampilkan:
  - Nomor bab
  - Judul bab
  - `25 soal`
  - Tombol kecil `Mulai`
  - Icon/ilustrasi kecil sesuai topik

Interaksi:

- Klik card atau tombol `Mulai` membawa siswa ke halaman soal bab tersebut.

### 5.3 Halaman Soal

Route: `/quiz/:chapterId`

Isi:

- Header sticky di atas:
  - Tombol kembali
  - Judul `Bab X`
  - Progress `Soal n dari 25`
- Progress bar horizontal.
- Card soal:
  - Badge kecil: `IPAS - Bab X`
  - Pertanyaan
  - Ilustrasi opsional berdasarkan bab atau soal jika tersedia
  - Pilihan jawaban A, B, C, D
- Tombol navigasi:
  - `Sebelumnya`
  - `Selanjutnya`
  - Pada soal terakhir, tampilkan tombol `Kirim Jawaban`

Interaksi:

- Siswa memilih satu jawaban per soal.
- Jawaban langsung tersimpan ke localStorage.
- Tombol `Selanjutnya` tetap bisa digunakan, tetapi berikan indikator jika soal belum dijawab.
- Saat klik `Kirim Jawaban`, tampilkan dialog konfirmasi.

### 5.4 Dialog Konfirmasi Submit

Muncul di halaman soal saat siswa klik `Kirim Jawaban`.

Isi:

- Judul: `Kirim jawaban sekarang?`
- Deskripsi:
  - `Pastikan semua soal sudah dijawab. Setelah dikirim, jawaban tidak bisa diubah.`
- Ringkasan:
  - `Terjawab: x/25`
  - `Belum dijawab: y`
- Tombol:
  - `Periksa Lagi`
  - `Kirim Jawaban`

Aturan:

- Jika masih ada soal belum dijawab, siswa tetap boleh submit atau bisa dibuat wajib lengkap. Rekomendasi: wajib lengkap agar perhitungan lebih jelas.
- Jika wajib lengkap, tombol `Kirim Jawaban` disabled saat belum semua soal dijawab.

### 5.5 Halaman Hasil

Route: `/result/:chapterId`

Isi:

- Judul: `Hasil Latihan`
- Subtitle: `Bab X selesai dikerjakan.`
- Pesan motivasi:
  - Jika skor >= 80: `Hebat! Pemahamanmu sudah kuat.`
  - Jika skor 60-79: `Bagus! Tinggal perkuat beberapa materi.`
  - Jika skor < 60: `Tetap semangat! Yuk pelajari lagi bagian yang belum tepat.`
- Card skor besar:
  - Skor dalam angka 0-100
  - Jumlah benar
  - Jumlah salah
- Tombol:
  - `Lihat Review Jawaban`
  - `Pilih Bab Lain`
  - `Ulangi Latihan`

Interaksi:

- `Lihat Review Jawaban` ke `/review/:chapterId`
- `Pilih Bab Lain` membersihkan storage untuk bab aktif lalu ke `/chapters`
- `Ulangi Latihan` membersihkan storage untuk bab aktif lalu ke `/quiz/:chapterId`

Catatan penting:

- Clear semua storage setelah siswa dipastikan keluar dari halaman hasil.
- Implementasi yang disarankan:
  - Jangan langsung clear saat halaman hasil pertama kali dibuka, karena data masih diperlukan untuk review.
  - Clear saat siswa memilih `Pilih Bab Lain`, `Ulangi Latihan`, atau kembali ke landing.
  - Jika siswa meninggalkan result ke review, jangan clear dulu.
  - Jika siswa keluar dari flow hasil/review menuju chapter/landing/quiz ulang, clear data bab tersebut.

### 5.6 Halaman Review Jawaban

Route: `/review/:chapterId`

Isi:

- Judul: `Review Jawaban`
- Filter:
  - `Semua`
  - `Benar`
  - `Salah`
- List semua soal:
  - Nomor soal
  - Pertanyaan
  - Status benar/salah
  - Jawaban siswa
  - Jawaban benar
  - Pembahasan singkat jika ada

Interaksi:

- Filter `Salah` membantu siswa fokus pada kesalahan.
- Tombol bawah:
  - `Pilih Bab Lain`
  - `Ulangi Latihan`

Saat keluar dari review ke bab lain atau mengulang, clear storage bab aktif.

## 6. Data Soal

Sumber soal:

- `Bank_Soal_BAB_1-4_Terpisah/BAB_1_Melihat_Karena_Cahaya_Mendengar_Karena_Bunyi.docx`
- `Bank_Soal_BAB_1-4_Terpisah/BAB_2_Harmoni_dalam_Ekosistem.docx`
- `Bank_Soal_BAB_1-4_Terpisah/BAB_3_Magnet_Listrik_dan_Teknologi_untuk_Kehidupan.docx`
- `Bank_Soal_BAB_1-4_Terpisah/BAB_4_Ayo_Berkenalan_dengan_Bumi_Kita.docx`

Target akhir data di aplikasi:

- 4 bab
- 25 soal per bab
- Setiap soal punya 4 opsi jawaban
- Setiap soal punya kunci jawaban
- Setiap soal boleh punya pembahasan singkat

Jika file `.docx` belum memiliki kunci jawaban, tentukan kunci jawaban secara mandiri berdasarkan isi soal. Pastikan kunci jawaban masuk akal dan konsisten dengan materi IPAS.

## 7. Format TypeScript Data

Buat tipe data di `src/types/quiz.ts`.

```ts
export type ChapterId = "bab-1" | "bab-2" | "bab-3" | "bab-4";

export type OptionId = "A" | "B" | "C" | "D";

export type QuestionOption = {
  id: OptionId;
  text: string;
};

export type Question = {
  id: string;
  chapterId: ChapterId;
  number: number;
  question: string;
  options: QuestionOption[];
  correctAnswer: OptionId;
  explanation?: string;
  image?: string;
};

export type Chapter = {
  id: ChapterId;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  questions: Question[];
};

export type StoredQuizState = {
  chapterId: ChapterId;
  answers: Record<string, OptionId>;
  submittedAt?: string;
};

export type QuizResult = {
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  score: number;
};
```

## 8. Rekomendasi Struktur Folder

Jika project belum ada, buat project Vite React TypeScript di root.

```txt
src/
  assets/
    illustrations/
  components/
    layout/
      AppShell.tsx
      MobilePage.tsx
      TopBar.tsx
    quiz/
      ChapterCard.tsx
      OptionCard.tsx
      ProgressHeader.tsx
      QuestionCard.tsx
      QuestionNavigator.tsx
      SubmitDialog.tsx
      ResultSummary.tsx
      ReviewQuestionCard.tsx
      ReviewFilterTabs.tsx
    ui/
      button.tsx
      card.tsx
      badge.tsx
      dialog.tsx
      progress.tsx
  data/
    chapters.ts
    questions/
      bab1.ts
      bab2.ts
      bab3.ts
      bab4.ts
  hooks/
    useQuizStorage.ts
    useQuizResult.ts
  lib/
    quiz.ts
    storage.ts
    cn.ts
  pages/
    LandingPage.tsx
    ChapterSelectionPage.tsx
    QuizPage.tsx
    ResultPage.tsx
    ReviewPage.tsx
  routes/
    AppRoutes.tsx
  types/
    quiz.ts
  App.tsx
  main.tsx
  index.css
```

Prinsip:

- Jangan menumpuk semua logic di satu file.
- Data soal dipisah per bab.
- Komponen UI dipisah dari page.
- Logic localStorage dipisah ke hook/helper.
- Perhitungan hasil dipisah ke helper agar mudah diuji.

## 9. Routing

Gunakan React Router melalui package `react-router-dom`. Jangan membuat routing manual dengan conditional state di `App.tsx`, karena aplikasi memiliki beberapa halaman yang perlu bisa diakses langsung lewat URL.

Route:

```txt
/                 -> LandingPage
/chapters         -> ChapterSelectionPage
/quiz/:chapterId  -> QuizPage
/result/:chapterId -> ResultPage
/review/:chapterId -> ReviewPage
```

Validasi route:

- Jika `chapterId` tidak valid, redirect ke `/chapters`.
- Jika user membuka `/result/:chapterId` tanpa data jawaban, redirect ke `/quiz/:chapterId` atau `/chapters`.
- Jika user membuka `/review/:chapterId` tanpa data jawaban, redirect ke `/chapters`.

Implementasi yang disarankan:

- Bungkus aplikasi dengan `BrowserRouter` di `main.tsx` atau `App.tsx`.
- Buat konfigurasi route terpisah di `src/routes/AppRoutes.tsx`.
- Gunakan `useNavigate` untuk pindah halaman setelah klik tombol.
- Gunakan `useParams` untuk membaca `chapterId`.
- Gunakan `Navigate` untuk redirect jika route tidak valid.
- Gunakan path URL sebagai sumber alur utama, bukan state global.

## 10. Local Storage

Gunakan key yang jelas dan per bab:

```ts
const QUIZ_STORAGE_PREFIX = "ipas-quiz";
const getQuizStorageKey = (chapterId: ChapterId) => `${QUIZ_STORAGE_PREFIX}:${chapterId}`;
```

Data yang disimpan:

```ts
{
  chapterId: "bab-1",
  answers: {
    "bab-1-q1": "A",
    "bab-1-q2": "C"
  },
  submittedAt: "2026-05-10T00:00:00.000Z"
}
```

Rules:

- Simpan jawaban setiap kali siswa memilih opsi.
- Restore jawaban saat siswa reload halaman quiz.
- Saat submit, simpan `submittedAt`.
- Clear storage bab aktif saat:
  - Klik `Pilih Bab Lain`
  - Klik `Ulangi Latihan`
  - Klik kembali ke landing dari halaman hasil/review
- Jangan clear saat pindah dari result ke review.

Helper yang perlu dibuat di `src/lib/storage.ts`:

- `getQuizState(chapterId)`
- `saveQuizAnswer(chapterId, questionId, answer)`
- `markQuizSubmitted(chapterId)`
- `clearQuizState(chapterId)`

## 11. Logic Perhitungan

Buat helper di `src/lib/quiz.ts`.

Fungsi:

- `getChapterById(chapterId)`
- `getQuestionByNumber(chapter, number)`
- `getAnsweredCount(chapter, answers)`
- `getUnansweredQuestions(chapter, answers)`
- `calculateQuizResult(chapter, answers)`
- `getQuestionReview(question, selectedAnswer)`

Formula skor:

```ts
score = Math.round((correctCount / totalQuestions) * 100)
```

Jika jawaban kosong:

- Sebaiknya submit tidak boleh dilakukan sebelum 25 soal terjawab.
- Jika tetap ingin mengizinkan submit, jawaban kosong dihitung salah.

Rekomendasi implementasi: wajib semua soal terjawab sebelum submit.

## 12. Ekstraksi Isi Soal dari DOCX

Langkah untuk agent implementasi:

1. Baca setiap file `.docx`.
2. Ekstrak teks soal, opsi A-D, dan kunci jawaban jika tersedia.
3. Rapikan format menjadi TypeScript array.
4. Pastikan setiap bab tepat 25 soal.
5. Jika kunci jawaban tidak ada:
   - Tentukan kunci berdasarkan pengetahuan materi.
   - Tambahkan pembahasan singkat 1-2 kalimat.
6. Simpan hasil ke:
   - `src/data/questions/bab1.ts`
   - `src/data/questions/bab2.ts`
   - `src/data/questions/bab3.ts`
   - `src/data/questions/bab4.ts`

Format item soal:

```ts
{
  id: "bab-1-q1",
  chapterId: "bab-1",
  number: 1,
  question: "Tumbuhan membutuhkan apa untuk membuat makanan melalui fotosintesis?",
  options: [
    { id: "A", text: "Air, cahaya matahari, dan karbon dioksida" },
    { id: "B", text: "Pasir, minyak, dan udara dingin" },
    { id: "C", text: "Batu, tanah kering, dan plastik" },
    { id: "D", text: "Garam, asap, dan logam" }
  ],
  correctAnswer: "A",
  explanation: "Fotosintesis memerlukan air, cahaya matahari, dan karbon dioksida untuk menghasilkan makanan."
}
```

## 13. Detail Komponen

### 13.1 `MobilePage`

Tugas:

- Membungkus semua page dengan layout mobile-first.
- Memberi `min-h-screen`, background lembut, dan container `max-w-md`.
- Saat desktop, konten tetap centered seperti tampilan app.

### 13.2 `ChapterCard`

Props:

- `chapter`
- `onClick`

Isi:

- Icon bab
- Judul bab
- Deskripsi pendek
- Jumlah soal
- Tombol `Mulai`

### 13.3 `ProgressHeader`

Props:

- `chapterTitle`
- `currentNumber`
- `total`
- `onBack`

Isi:

- Back button
- Judul
- Progress text
- Progress bar

### 13.4 `QuestionCard`

Props:

- `question`
- `selectedAnswer`
- `onSelectAnswer`

Isi:

- Pertanyaan
- Ilustrasi jika ada
- Opsi jawaban melalui `OptionCard`

### 13.5 `OptionCard`

Props:

- `option`
- `isSelected`
- `onClick`
- `disabled?`

Behavior:

- Saat dipilih, card diberi border hijau/coral dan background lembut.
- Area klik minimal 44px tinggi.

### 13.6 `SubmitDialog`

Props:

- `open`
- `answeredCount`
- `totalQuestions`
- `onCancel`
- `onConfirm`

Behavior:

- Tampilkan ringkasan terjawab dan belum terjawab.
- Disabled confirm jika belum lengkap.

### 13.7 `ResultSummary`

Props:

- `result`

Isi:

- Skor besar
- Jumlah benar
- Jumlah salah
- Pesan motivasi

### 13.8 `ReviewQuestionCard`

Props:

- `question`
- `selectedAnswer`
- `isCorrect`

Isi:

- Pertanyaan
- Jawaban siswa
- Jawaban benar
- Status benar/salah
- Pembahasan

## 14. Responsive Design

Prioritas breakpoint:

- Mobile kecil: 320px - 375px
- Mobile umum: 390px - 430px
- Tablet: 768px
- Desktop: 1024px ke atas

Rules:

- Gunakan layout 1 kolom di mobile.
- Di tablet, card bisa tetap 1 kolom atau 2 kolom jika ruang cukup.
- Di desktop, konten utama tetap `max-w-md` atau `max-w-lg` agar tidak terlalu melebar.
- Header quiz sebaiknya sticky agar siswa selalu melihat progress.
- Tombol navigasi quiz bisa sticky di bawah pada mobile.
- Jangan gunakan teks terlalu kecil. Minimal body text `14px`.
- Opsi jawaban harus mudah disentuh.
- Pastikan tidak ada horizontal scroll.

## 15. Ilustrasi dan Asset

Rekomendasi:

- Gunakan `referensi/image.png` dan `referensi/image-2.png` sebagai acuan gaya ilustrasi, warna, bentuk card, dan komposisi mobile.
- Buat ilustrasi sederhana di `src/assets/illustrations`.
- Jika memakai SVG, pastikan tidak terlalu kompleks dan warnanya konsisten.
- Topik ilustrasi:
  - Landing: anak belajar dengan tablet/buku.
  - Bab 1: cahaya dan bunyi.
  - Bab 2: tumbuhan, rantai makanan, ekosistem.
  - Bab 3: magnet, listrik, lampu, teknologi.
  - Bab 4: bumi, gunung, laut, lapisan bumi.

Asset harus:

- Ringan
- Tidak membuat layout shift
- Punya ukuran container tetap
- Tidak mengganggu keterbacaan soal
- Selaras dengan gaya visual pada file referensi, terutama warna hijau lembut, krem, putih, dan aksen coral/oranye.

## 16. shadcn/ui

Gunakan shadcn/ui jika project sudah siap atau mudah dipasang.

Komponen yang cocok:

- Button
- Card
- Dialog
- Progress
- Badge
- Tabs

Jika penggunaan shadcn memperlambat setup, boleh buat komponen sendiri dengan Tailwind selama type aman dan konsisten.

## 17. State Management

Tidak perlu state management besar seperti Redux atau Zustand.

Gunakan:

- React state untuk current question, filter review, dan dialog.
- custom hook `useQuizStorage` untuk sinkronisasi localStorage.
- helper pure function untuk hitung result.

Flow state:

1. `QuizPage` load chapter.
2. `useQuizStorage(chapterId)` load jawaban dari localStorage.
3. User pilih opsi.
4. Hook update state React dan localStorage.
5. Submit validasi semua soal terjawab.
6. Mark submitted.
7. Navigate ke result.
8. Result membaca jawaban dari localStorage dan hitung skor.
9. Review membaca data yang sama.
10. Saat keluar dari flow result/review, clear storage.

## 18. Validasi dan Edge Cases

Tangani kasus berikut:

- `chapterId` tidak ditemukan.
- LocalStorage kosong saat buka result.
- LocalStorage rusak atau JSON invalid.
- Soal belum lengkap 25.
- Jawaban tersimpan tetapi opsi tidak valid.
- User refresh di tengah quiz.
- User refresh di halaman result.
- User klik back dari quiz ke chapters.
- User ingin mengganti bab saat ada progress.

Rekomendasi:

- Jika user kembali ke chapter selection dari quiz, tidak perlu clear otomatis agar progress masih tersimpan.
- Jika user mulai bab yang sama lagi dari chapter selection, tampilkan pilihan:
  - `Lanjutkan`
  - `Mulai Ulang`
- Jika ingin lebih sederhana, langsung lanjutkan jawaban tersimpan dan sediakan tombol reset kecil.

## 19. Tahapan Implementasi untuk Agent

Ikuti urutan ini agar mudah dikerjakan oleh agent reasoning medium.

### Tahap 1 - Setup Project

1. Jika belum ada `package.json`, buat Vite React TypeScript project.
2. Install dependency:
   - `react-router-dom`
   - `lucide-react`
   - `tailwindcss`
   - `postcss`
   - `autoprefixer`
3. Setup Tailwind.
4. Pastikan `npm run dev` berjalan.

### Tahap 2 - Fondasi Type dan Data

1. Buat `src/types/quiz.ts`.
2. Buat struktur data chapter di `src/data/chapters.ts`.
3. Ekstrak soal dari 4 file `.docx`.
4. Buat file soal per bab di `src/data/questions`.
5. Pastikan setiap soal punya `id`, `chapterId`, `number`, `question`, `options`, `correctAnswer`, dan `explanation`.

### Tahap 3 - Helper Logic

1. Buat `src/lib/storage.ts`.
2. Buat `src/lib/quiz.ts`.
3. Buat hook `src/hooks/useQuizStorage.ts`.
4. Buat hook `src/hooks/useQuizResult.ts`.
5. Pastikan semua fungsi punya typing jelas.

### Tahap 4 - Layout dan Styling Global

1. Setup `index.css` dengan Tailwind.
2. Tambahkan CSS variable warna jika perlu.
3. Buat `MobilePage`, `TopBar`, dan layout dasar.
4. Pastikan semua page mobile-first.

### Tahap 5 - Implementasi Page

1. Buat `LandingPage`.
2. Buat `ChapterSelectionPage`.
3. Buat `QuizPage`.
4. Buat `ResultPage`.
5. Buat `ReviewPage`.
6. Buat routing di `AppRoutes`.

### Tahap 6 - Implementasi Komponen Quiz

1. `ChapterCard`
2. `ProgressHeader`
3. `QuestionCard`
4. `OptionCard`
5. `QuestionNavigator`
6. `SubmitDialog`
7. `ResultSummary`
8. `ReviewFilterTabs`
9. `ReviewQuestionCard`

### Tahap 7 - LocalStorage dan Flow

1. Simpan jawaban setiap pilih opsi.
2. Restore saat reload.
3. Validasi submit hanya jika semua soal dijawab.
4. Tampilkan hasil setelah submit.
5. Tampilkan review semua soal.
6. Clear storage saat keluar dari hasil/review ke bab lain, landing, atau ulangi latihan.

### Tahap 8 - Responsive Polish

1. Cek tampilan di 320px, 375px, 390px, 430px, 768px, dan desktop.
2. Pastikan tidak ada horizontal scroll.
3. Pastikan tombol tidak terlalu kecil.
4. Pastikan card soal tidak terlalu panjang tanpa spacing.
5. Pastikan sticky bottom navigation tidak menutup konten.

### Tahap 9 - Testing Manual

Test minimal:

1. Buka landing.
2. Klik IPAS.
3. Pilih Bab 1.
4. Jawab beberapa soal.
5. Refresh halaman dan pastikan jawaban tetap ada.
6. Lengkapi 25 soal.
7. Submit.
8. Cek skor, benar, dan salah.
9. Buka review semua.
10. Filter jawaban salah.
11. Klik pilih bab lain dan pastikan storage bab aktif bersih.
12. Ulangi untuk Bab 2, Bab 3, Bab 4.

## 20. Acceptance Criteria

Website dianggap selesai jika:

- Landing page muncul pertama kali.
- Tombol `IPAS` menuju pilihan bab.
- Ada 4 pilihan bab.
- Setiap bab memiliki 25 soal.
- Siswa bisa memilih jawaban A-D.
- Jawaban tersimpan ke localStorage.
- Refresh halaman quiz tidak menghapus jawaban.
- Submit menampilkan hasil akhir.
- Hasil menampilkan skor, jumlah benar, dan jumlah salah.
- Review menampilkan jawaban siswa dan jawaban benar untuk setiap soal.
- Soal benar/salah terlihat jelas.
- Storage dibersihkan saat siswa keluar dari flow hasil/review sesuai aturan.
- Komponen terpisah, tidak menumpuk di satu file.
- TypeScript tidak error.
- Tidak ada emoji.
- Icon menggunakan lucide-react atau icon React lain.
- Tampilan sangat baik di smartphone dan tablet.
- Tampilan mengikuti referensi desain dari `referensi/image.png` dan `referensi/image-2.png`.
- Tidak ada horizontal scroll di mobile.
- Build production berhasil.

## 21. Quality Bar

Sebelum selesai, jalankan:

```bash
npm run build
```

Jika tersedia lint:

```bash
npm run lint
```

Jika memungkinkan, jalankan dev server dan cek manual di browser:

```bash
npm run dev
```

Pastikan hasil akhir terasa seperti mobile learning app, bukan sekadar halaman form biasa.
