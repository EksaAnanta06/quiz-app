let timerText = document.querySelector("#timer");
let scoreText = document.querySelector("#score");
let bar = document.querySelector("#timer-bar");
let noAngka = document.querySelector(".no-angka");
let soalText = document.querySelector("#soal");
let inputRadioValue = document.querySelectorAll("input");
let textRadio = document.querySelectorAll(".pilihan");
let btn = document.getElementById("btn");
let btnSebelumnya = document.querySelector("#btn-sebelumnya");
let btnBerikutnya = document.querySelector("#btn-berikutnya");
let countSoal = 0;
let interval;
let jawabanPengguna = []; // Array untuk menyimpan jawaban pengguna

let kumpulanSoal = [
  {
    soalNo: 1,
    soal: "Apa nama ibu kota Indonesia?",
    timer: 10,
    value1: "Bandung",
    value2: "Jakarta",
    value3: "Surabaya",
    value4: "Kalimantan",
    score: 1,
    jawaban: "Jakarta",
  },
  {
    soalNo: 2,
    soal: "Berapa jumlah provinsi di Indonesia?",
    timer: 10,
    value1: "34",
    value2: "32",
    value3: "38",
    value4: "42",
    score: 1,
    jawaban: "34",
  },
  {
    soalNo: 3,
    soal: "Siapa presiden pertama Indonesia?",
    timer: 10,
    value1: "Soeharto",
    value2: "Joko Widodo",
    value3: "Soekarno",
    value4: "BJ Habibie",
    score: 1,
    jawaban: "Soekarno",
  },
  {
    soalNo: 4,
    soal: "Apa nama pulau terbesar di Indonesia?",
    timer: 10,
    value1: "Jawa",
    value2: "Sumatera",
    value3: "Kalimantan",
    value4: "Papua",
    score: 1,
    jawaban: "Papua",
  },
  {
    soalNo: 5,
    soal: "Apa nama gunung tertinggi di Indonesia?",
    timer: 10,
    value1: "Gunung Rinjani",
    value2: "Gunung Semeru",
    value3: "Gunung Kerinci",
    value4: "Gunung Jaya Wijaya",
    score: 1,
    jawaban: "Gunung Jaya Wijaya",
  },
  {
    soalNo: 6,
    soal: "Apa nama mata uang Indonesia?",
    timer: 10,
    value1: "Ringgit",
    value2: "Rupiah",
    value3: "Dollar",
    value4: "Peso",
    score: 1,
    jawaban: "Rupiah",
  },
  {
    soalNo: 7,
    soal: "Apa nama lagu kebangsaan Indonesia?",
    timer: 10,
    value1: "Indonesia Raya",
    value2: "Garuda Pancasila",
    value3: "Bagimu Negeri",
    value4: "Tanah Airku",
    score: 1,
    jawaban: "Indonesia Raya",
  },
  {
    soalNo: 8,
    soal: "Apa nama danau terbesar di Indonesia?",
    timer: 10,
    value1: "Danau Toba",
    value2: "Danau Singkarak",
    value3: "Danau Poso",
    value4: "Danau Sentani",
    score: 1,
    jawaban: "Danau Toba",
  },
  {
    soalNo: 9,
    soal: "Apa nama hewan khas Indonesia yang terancam punah?",
    timer: 10,
    value1: "Harimau Sumatera",
    value2: "Orangutan",
    value3: "Komodo",
    value4: "Badak Jawa",
    score: 1,
    jawaban: "Badak Jawa",
  },
  {
    soalNo: 10,
    soal: "Apa nama candi Buddha terbesar di dunia yang berada di Indonesia?",
    timer: 10,
    value1: "Candi Prambanan",
    value2: "Candi Borobudur",
    value3: "Candi Mendut",
    value4: "Candi Sewu",
    score: 1,
    jawaban: "Candi Borobudur",
  },
  {
    soalNo: 11,
    soal: "Apa nama bandara internasional utama di Jakarta?",
    timer: 10,
    value1: "Soekarno-Hatta",
    value2: "Ngurah Rai",
    value3: "Juanda",
    value4: "Husein Sastranegara",
    score: 1,
    jawaban: "Soekarno-Hatta",
  },
  {
    soalNo: 12,
    soal: "Apa nama sungai terpanjang di Indonesia?",
    timer: 10,
    value1: "Sungai Kapuas",
    value2: "Sungai Musi",
    value3: "Sungai Barito",
    value4: "Sungai Mahakam",
    score: 1,
    jawaban: "Sungai Kapuas",
  },
  {
    soalNo: 13,
    soal: "Apa nama tarian tradisional dari Bali yang terkenal?",
    timer: 10,
    value1: "Tari Saman",
    value2: "Tari Kecak",
    value3: "Tari Piring",
    value4: "Tari Jaipong",
    score: 1,
    jawaban: "Tari Kecak",
  },
  {
    soalNo: 14,
    soal: "Apa nama pahlawan nasional yang dikenal sebagai 'Bapak Pendidikan Nasional'?",
    timer: 10,
    value1: "Ki Hajar Dewantara",
    value2: "R.A. Kartini",
    value3: "Cut Nyak Dhien",
    value4: "Diponegoro",
    score: 1,
    jawaban: "Ki Hajar Dewantara",
  },
  {
    soalNo: 15,
    soal: "Apa nama makanan khas Padang yang terbuat dari daging dan santan?",
    timer: 10,
    value1: "Rendang",
    value2: "Sate",
    value3: "Gudeg",
    value4: "Pempek",
    score: 1,
    jawaban: "Rendang",
  },
  {
    soalNo: 16,
    soal: "Apa nama selat yang memisahkan pulau Jawa dan Sumatera?",
    timer: 10,
    value1: "Selat Sunda",
    value2: "Selat Bali",
    value3: "Selat Lombok",
    value4: "Selat Makassar",
    score: 1,
    jawaban: "Selat Sunda",
  },
  {
    soalNo: 17,
    soal: "Apa nama kota yang terkenal dengan julukan 'Kota Kembang'?",
    timer: 10,
    value1: "Jakarta",
    value2: "Bandung",
    value3: "Surabaya",
    value4: "Medan",
    score: 1,
    jawaban: "Bandung",
  },
  {
    soalNo: 18,
    soal: "Siapa nama wakil presiden Indonesia yang pertama?",
    timer: 10,
    value1: "Mohammad Hatta",
    value2: "Soepomo",
    value3: "Amir Sjarifuddin",
    value4: "Abdul Haris Nasution",
    score: 1,
    jawaban: "Mohammad Hatta",
  },
  {
    soalNo: 19,
    soal: "Apa nama gunung berapi aktif yang terkenal di Jawa Timur?",
    timer: 10,
    value1: "Gunung Merapi",
    value2: "Gunung Bromo, Gunung Kelud Sini Dong Ayo Gelud",
    value3: "Gunung Semeru",
    value4: "Gunung Krakatau",
    score: 1,
    jawaban: "Gunung Semeru",
  },
  {
    soalNo: 20,
    soal: "Apa nama salah satu taman nasional tertua di Indonesia yang terletak di Jawa Barat?",
    timer: 10,
    value1: "Taman Nasional Gunung Gede Pangrango",
    value2: "Taman Nasional Baluran",
    value3: "Taman Nasional Komodo",
    value4: "Taman Nasional Lorentz",
    score: 1,
    jawaban: "Taman Nasional Gunung Gede Pangrango",
  },
  {
    soalNo: 21,
    soal: "Apa nama pulau yang terkenal dengan tradisi lompat batu (Fa'omasi) di Nias?",
    timer: 10,
    value1: "Pulau Nias",
    value2: "Pulau Simeulue",
    value3: "Pulau Mentawai",
    value4: "Pulau Enggano",
    score: 1,
    jawaban: "Pulau Nias",
  },
  {
    soalNo: 22,
    soal: "Apa nama salah satu makanan khas Yogyakarta yang terbuat dari nangka muda?",
    timer: 10,
    value1: "Gudeg",
    value2: "Sate Klopo",
    value3: "Tengkleng",
    value4: "Bakpia",
    score: 1,
    jawaban: "Gudeg",
  },
  {
    soalNo: 23,
    soal: "Siapa nama tokoh perempuan Indonesia yang memperjuangkan emansipasi wanita?",
    timer: 10,
    value1: "R.A. Kartini",
    value2: "Cut Nyak Dhien",
    value3: "Dewi Sartika",
    value4: "Nyi Raden Siti Jenab Djatradidjaja",
    score: 1,
    jawaban: "R.A. Kartini",
  },
  {
    soalNo: 24,
    soal: "Apa nama salah satu upacara adat yang terkenal di Bali yang menggunakan ogoh-ogoh?",
    timer: 10,
    value1: "Nyepi",
    value2: "Galungan",
    value3: "Kuningan",
    value4: "Melasti",
    score: 1,
    jawaban: "Nyepi",
  },
  {
    soalNo: 25,
    soal: "Apa nama salah satu kerajinan tradisional yang terkenal dari Jepara?",
    timer: 10,
    value1: "Ukiran Kayu",
    value2: "Batik",
    value3: "Tenun Ikat",
    value4: "Keramik",
    score: 1,
    jawaban: "Ukiran Kayu",
  },
];

// function untuk menjalankan quiz app
function mulaiQuiz(objSoal) {
  if (interval) {
    clearInterval(interval);
  }

  let { soalNo, soal, timer, value1, value2, value3, value4, score, jawaban } =
    objSoal;

  batasWaktu(timer);

  noAngka.innerHTML = soalNo;
  soalText.innerHTML = soal;
  inputRadioValue.forEach((inp, i) => {
    inp.checked = false;
    if (i == 0) {
      inp.value = value1;
      textRadio[i].innerHTML = value1;
    } else if (i == 1) {
      inp.value = value2;
      textRadio[i].innerHTML = value2;
    } else if (i == 2) {
      inp.value = value3;
      textRadio[i].innerHTML = value3;
    } else if (i == 3) {
      inp.value = value4;
      textRadio[i].innerHTML = value4;
    }
  });

  // Variabel flag untuk menandai apakah tombol sudah diklik
  let isButtonClicked = false;

  btn.onclick = function periksa() {
    const inputRadio = document.querySelector(`input[name="pilihan"]:checked`);

    if (inputRadio == null) {
      alert("Isi input terlebih dahulu");
      return; // Hentikan fungsi jika tidak ada jawaban yang dipilih
    }

    let pilihan = inputRadio.value;
    jawabanPengguna.push(pilihan); // Simpan jawaban pengguna
    isButtonClicked = true; // Tandai bahwa tombol sudah diklik

    if (pilihan === jawaban) {
      scoreText.innerHTML = parseInt(scoreText.innerHTML) + score;
    }
    countSoal++;

    if (countSoal < kumpulanSoal.length) {
      mulaiQuiz(kumpulanSoal[countSoal]);
    } else {
      alert("Quiz selesai!");
      clearInterval(interval);
      tampilkanJawaban(0); // Tampilkan jawaban untuk soal pertama setelah quiz selesai
    }
  };

  // Set timeout untuk menambahkan "Tidak Di Jawab" jika tombol tidak diklik
  setTimeout(() => {
    if (!isButtonClicked) {
      jawabanPengguna.push("Tidak Di Jawab"); // Tambahkan "Tidak Di Jawab" ke array
      countSoal++;

      if (countSoal < kumpulanSoal.length) {
        mulaiQuiz(kumpulanSoal[countSoal]);
      } else {
        alert("Quiz selesai!");
        clearInterval(interval);
        tampilkanJawaban(0); // Tampilkan jawaban untuk soal pertama setelah quiz selesai
      }
    }
  }, 10000); // Sesuaikan dengan durasi timer (dalam milidetik)
}

// untuk mengatur waktu
function batasWaktu(timer) {
  let width = 100;
  interval = setInterval(() => {
    if (timer == 0) {
      timerText.innerHTML = timer;
      clearInterval(interval);
      
      if (countSoal < kumpulanSoal.length) {
        mulaiQuiz(kumpulanSoal[countSoal]);
      } else {
      }
      return;
    }
    width = width - 10;
    document.getElementById("timer-bar").style.width = `${width}%`;
    timerText.innerHTML = timer;
    timer--;
  }, 1000);
}

// menampilkan jawaban yang benar setelah quiz selesai
function tampilkanJawaban(index) {
  console.log(jawabanPengguna);
  btn.disabled = true;
  bar.style.display = "none";
  document.querySelector(".btn-quiz-selesai").style.display = "flex";
  let soal = kumpulanSoal[index];
  noAngka.innerHTML = soal.soalNo;
  soalText.innerHTML = soal.soal;
  textRadio.forEach((text, i) => {
    if (i == 0) {
      text.innerHTML = soal.value1;
    } else if (i == 1) {
      text.innerHTML = soal.value2;
    } else if (i == 2) {
      text.innerHTML = soal.value3;
    } else if (i == 3) {
      text.innerHTML = soal.value4;
    }
  });

  // Tampilkan jawaban yang benar dan jawaban pengguna
  let jawabanBenar = document.createElement("p");
  jawabanBenar.innerHTML = `Jawaban Benar: ${soal.jawaban}`;
  jawabanBenar.style.color = "green";
  jawabanBenar.classList.add("hasil");
  soalText.appendChild(jawabanBenar);

  // Tampilkan jawaban pengguna
  let jawabanUser = document.createElement("p");
  jawabanUser.innerHTML = `Jawaban Anda: ${
    jawabanPengguna[index] || "Tidak diisi"
  }`; // Jika pengguna tidak memilih, tampilkan "Tidak diisi"
  jawabanUser.style.color =
    jawabanPengguna[index] === soal.jawaban ? "green" : "red"; // Jika jawaban benar, warna hijau; jika salah, warna merah
  jawabanUser.classList.add("hasil");
  soalText.appendChild(jawabanUser);

  // Nonaktifkan radio button
  inputRadioValue.forEach((inp) => {
    inp.disabled = true;
    inp.checked = false;
  });

  // Update tombol navigasi
  btnSebelumnya.disabled = index === 0;
  btnBerikutnya.disabled = index === kumpulanSoal.length - 1;

  btnSebelumnya.onclick = () => {
    if (index > 0) {
      tampilkanJawaban(index - 1);
    }
  };

  btnBerikutnya.onclick = () => {
    if (index < kumpulanSoal.length - 1) {
      tampilkanJawaban(index + 1);
    }
  };
}

mulaiQuiz(kumpulanSoal[countSoal]);
