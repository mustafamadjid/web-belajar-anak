import { createQuestions } from "./createQuestion";
import image1 from "../../assets/question-images/bab_1/image1.png";
import image2 from "../../assets/question-images/bab_1/image2.png";
import image3 from "../../assets/question-images/bab_1/image3.png";
import image4 from "../../assets/question-images/bab_1/image4.png";
import image5 from "../../assets/question-images/bab_1/image5.png";
import image6 from "../../assets/question-images/bab_1/image6.png";

export const bab1Questions = createQuestions("bab-1", [
  {
    question: "Perhatikan gambar berikut! Peristiwa pada gambar menunjukkan adanya ....",
    options: ["pemantulan cahaya", "penguraian cahaya", "penyerapan cahaya", "pembiasan cahaya"],
    correctAnswer: "D",
    explanation: "Pembiasan terjadi ketika arah cahaya berubah karena melewati dua medium yang berbeda.",
    image: image1,
  },
  {
    question: "Berdasarkan gambar, pembiasan terjadi bila cahaya datang dari ...",
    options: ["udara menuju air", "udara menuju udara", "air menuju udara", "air menuju air"],
    correctAnswer: "A",
    explanation: "Cahaya dibiaskan saat berpindah dari satu medium ke medium lain, misalnya dari udara ke air.",
    image: image2,
  },
  {
    question: "Gelas bening dapat ditembus oleh cahaya, hal ini menunjukkan bahwa cahaya memiliki sifat ....",
    options: ["merambat lurus", "dapat dibiaskan", "dapat dipantulkan", "menembus benda bening"],
    correctAnswer: "D",
    explanation: "Benda bening seperti gelas meneruskan cahaya sehingga benda di baliknya masih terlihat.",
  },
  {
    question: "Perhatikan gambar berikut! Gambar di atas menunjukkan bahwa cahaya mempunyai sifat ....",
    options: ["dapat dibiaskan", "menembus benda bening", "merambat lurus", "dapat dipantulkan"],
    correctAnswer: "C",
    explanation: "Cahaya bergerak lurus selama tidak terhalang atau berpindah medium.",
    image: image3,
  },
  {
    question: "Peristiwa terbentuknya pelangi menunjukkan sifat cahaya dapat diuraikan menjadi beberapa warna. Cahaya-cahaya tersebut berasal dari ....",
    options: [
      "pembiasan cahaya matahari yang mengenai air hujan",
      "cahaya matahari yang menembus kaca bangunan",
      "cahaya matahari yang memantul menjadi banyak warna",
      "cahaya matahari yang merambat di udara",
    ],
    correctAnswer: "A",
    explanation: "Tetes air hujan membiaskan dan menguraikan cahaya matahari menjadi warna pelangi.",
    image: image4,
  },
  {
    question: "Jika mata memperoleh cahaya redup atau kurang cahaya, maka pupil mata akan ....",
    options: ["mengecil", "diam", "menutup", "membesar"],
    correctAnswer: "D",
    explanation: "Pupil membesar agar lebih banyak cahaya masuk ke mata.",
  },
  {
    question: "Bagian berwarna hitam yang menjadi jalan masuk cahaya ke mata, dikelilingi iris, dan disebut selaput pelangi adalah ....",
    options: ["lensa mata", "pupil", "retina", "kornea"],
    correctAnswer: "B",
    explanation: "Pupil adalah lubang hitam di tengah iris sebagai jalan masuk cahaya.",
  },
  {
    question: "Orang yang tidak dapat melihat benda dengan jelas apabila jaraknya jauh disebut ...",
    options: ["rabun jauh", "hipermetropi", "presbiopi", "rabun dekat"],
    correctAnswer: "A",
    explanation: "Rabun jauh atau miopi membuat benda jauh tampak kabur.",
  },
  {
    question: "Sifat bayangan yang terbentuk pada cermin cembung adalah ...",
    options: ["(1), (2), (5)", "(3), (4), (5)", "(1), (4), (6)", "(2), (3), (6)"],
    correctAnswer: "B",
    explanation: "Cermin cembung menghasilkan bayangan maya, tegak, dan diperkecil.",
  },
  {
    question: "Berikut yang merupakan contoh sumber cahaya adalah ...",
    options: ["dinamo", "matahari", "generator", "batu baterai"],
    correctAnswer: "B",
    explanation: "Matahari memancarkan cahaya sendiri sehingga termasuk sumber cahaya.",
  },
  {
    question: "Perhatikan gambar berikut ini! Gambar tersebut menunjukkan ....",
    options: ["pemantulan baur", "pemantulan teratur", "pembiasan cahaya", "penyerapan cahaya"],
    correctAnswer: "B",
    explanation: "Pemantulan teratur terjadi ketika cahaya dipantulkan secara terarah oleh permukaan yang rata.",
    image: image5,
  },
  {
    question: "Jarak bayangan benda dengan jarak benda yang berada di depan cermin datar adalah ....",
    options: ["sama", "lebih jauh", "lebih dekat", "berbeda"],
    correctAnswer: "A",
    explanation: "Pada cermin datar, jarak benda ke cermin sama dengan jarak bayangan ke cermin.",
  },
  {
    question: "Sifat bayangan yang dibentuk oleh cermin datar adalah ....",
    options: ["semu dan tegak", "nyata dan tegak", "semu dan terbalik", "nyata dan terbalik"],
    correctAnswer: "A",
    explanation: "Bayangan cermin datar bersifat maya atau semu, tegak, dan sama besar.",
  },
  {
    question: "Cermin yang digunakan pada kaca spion mobil atau motor adalah ....",
    options: ["cermin rias", "cermin datar", "cermin cekung", "cermin cembung"],
    correctAnswer: "D",
    explanation: "Cermin cembung memperluas bidang pandang sehingga cocok untuk spion.",
  },
  {
    question: "Warna-warna yang membentuk cahaya putih disebut ....",
    options: ["warna gelap", "pelangi", "warna terang", "spektrum cahaya"],
    correctAnswer: "D",
    explanation: "Spektrum cahaya adalah susunan warna penyusun cahaya putih.",
  },
  {
    question: "Peristiwa yang membuktikan bahwa cahaya merambat lurus yaitu ....",
    options: [
      "rambatan cahaya matahari yang lurus ketika melewati genting kaca",
      "terbentuknya pelangi pada saat hujan",
      "memantulnya cahaya pada cermin",
      "cahaya menembus benda bening",
    ],
    correctAnswer: "A",
    explanation: "Berkas cahaya matahari yang tampak lurus menunjukkan sifat cahaya merambat lurus.",
  },
  {
    question: "Bayangan benda yang dapat ditangkap oleh layar disebut ....",
    options: ["bayangan difus", "bayangan semu", "bayangan nyata", "bayangan teratur"],
    correctAnswer: "C",
    explanation: "Bayangan nyata terbentuk dari pertemuan sinar dan dapat ditangkap layar.",
  },
  {
    question: "Perhatikan gambar berikut! Gambar di atas merupakan sinar pada penderita ....",
    options: ["miopi", "hipermetropi", "presbiopi", "astigmatisme"],
    correctAnswer: "A",
    explanation: "Miopi terjadi ketika bayangan benda jauh jatuh di depan retina.",
    image: image6,
  },
  {
    question: "Kacamata dapat membantu mengatasi gangguan mata dengan cara ....",
    options: [
      "meneruskan cahaya dan melindungi mata",
      "membelokkan bayangan ke saraf penglihat",
      "mengatur jumlah cahaya yang masuk ke mata",
      "membantu bayangan agar jatuh tepat pada retina",
    ],
    correctAnswer: "D",
    explanation: "Lensa kacamata membantu memfokuskan bayangan agar tepat jatuh pada retina.",
  },
  {
    question: "Telinga adalah alat indra manusia. Cara merawat telinga yang salah adalah ....",
    options: [
      "membersihkan telinga bagian luar secara rutin",
      "tidak memasukan benda tajam ke dalam telinga",
      "menutup telinga jika mendengar bunyi yang terlalu keras",
      "membersihkan telinga bagian dalam dengan kapas atau cotton bud",
    ],
    correctAnswer: "D",
    explanation: "Cotton bud dapat mendorong kotoran lebih dalam dan berisiko melukai telinga.",
  },
  {
    question: "Organ korti yang merupakan alat pendengaran terdapat dalam ....",
    options: ["saluran eustachius", "saluran setengah lingkaran", "rumah siput atau koklea", "ampula"],
    correctAnswer: "C",
    explanation: "Organ korti berada di koklea dan berfungsi menerima rangsang bunyi.",
  },
  {
    question: "Berikut ini yang tidak benar tentang bunyi yaitu ....",
    options: [
      "bunyi dapat merambat melalui benda padat, cair, dan gas",
      "bunyi merambat melalui ruang hampa",
      "bunyi dihasilkan benda yang bergetar",
      "benda yang menghasilkan bunyi disebut sumber bunyi",
    ],
    correctAnswer: "B",
    explanation: "Bunyi memerlukan medium, sehingga tidak dapat merambat di ruang hampa.",
  },
  {
    question: "Membran timpani yang menangkap getaran suara terdapat di bagian ....",
    options: ["telinga luar", "telinga tengah", "telinga dalam", "saluran eustachius"],
    correctAnswer: "B",
    explanation: "Membran timpani atau gendang telinga berada di batas telinga luar dan tengah.",
  },
  {
    question: "Bukti bunyi dapat dipantulkan adalah ....",
    options: [
      "kaca jendela ikut bergetar ketika ada truk besar lewat di sampingnya",
      "kita dapat mendengar bunyi yang bersumber dari luar ruangan",
      "bunyi dapat didengar walaupun kita berada dalam air",
      "suara akan terdengar lebih keras ketika bernyanyi di dalam kamar mandi tertutup",
    ],
    correctAnswer: "D",
    explanation: "Suara di kamar mandi tertutup terdengar lebih keras karena bunyi dipantulkan dinding.",
  },
  {
    question: "Kita tidak dapat mendengar bunyi jika berada di ....",
    options: ["kolam renang", "ruang hampa", "kamar tidur", "dapur"],
    correctAnswer: "B",
    explanation: "Ruang hampa tidak memiliki medium untuk merambatkan bunyi.",
  },
]);
