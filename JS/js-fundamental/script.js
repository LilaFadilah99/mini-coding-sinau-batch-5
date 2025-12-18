// -------------- Tipe data javascript --------------------
// Tipe data adalah jenis nilai yang bisa disimpan dan digunakan di dalam JavaScript.
// Contohnya: angka, teks, benar/salah, dll.

// 1. Number (Angka) -> Digunakan untuk menyimpan angka.
let angka = 25;

// 2. String (Teks) -> Digunakan untuk menyimpan teks atau kata-kata.
let nama = "Dila";
let salam = "Halo Dunia!";

// 3. Boolean (Benar atau Salah) -> Digunakan untuk logika atau kondisi.
let isLogin = true;
let sudahBayar = false;

// 4. Undefined -> Jika sebuah variabel belum diberi nilai.
let nilaiData;
console.log(nilaiData); // undefined

// 5. Null -> Digunakan untuk menyatakan tidak ada nilai secara sengaja
let data = null;

// Note : Bisa digunakan untuk cek tipe data
typeof "Halo"; // "string"
typeof 123; // "number"

// -------------- Menyimpan Data dengan Variable --------------------

// Cara Membuat Variabel. Di JavaScript, kita bisa menggunakan 3 keyword untuk membuat variabel:
// 1. let → bisa diubah nilainya
let umurSaya = 20;
umurSaya = 21;

// 2. const → tidak bisa diubah nilainya
const negara = "Indonesia";
negara = "Malaysia"; // error

// 3. var → versi lama, tidak disarankan untuk dipakai sekarang.
var namaPeserta = "Rara";

// -------------- Operator Aritmatika di JavaScript --------------------
let operator1 = 10;
let operator2 = 4;

console.log(operator1 + operator2); // 14
console.log(operator1 - operator2); // 6
console.log(operator1 * operator2); // 40
console.log(operator1 / operator2); // 2.5
console.log(operator1 % operator2); // 2
console.log(2 ** 3); // 8

// Operator Increment & Decrement -> Kadang kita ingin menaikkan atau menurunkan nilai 1 per 1:
let x = 5;
x++;
console.log(x); // 6

let y = 10;
y--;
console.log(y); // 9

// latihan
let harga = 10000;
let jumlah = 3;
let total = harga * jumlah;
console.log(total); // 30000

// -------------- Operator Perbandingan di JavaScript --------------------
// Operator perbandingan digunakan untuk membandingkan dua nilai. Hasil dari perbandingan ini adalah true (benar) atau false (salah).
// Bayangkan kamu sedang mengecek apakah dua hal sama, lebih besar, atau lebih kecil.

let perbandingan1 = 5;
let perbandingan2 = "5";

console.log(perbandingan1 == perbandingan2); // true (nilai sama, tipe beda)
console.log(perbandingan1 === perbandingan2); // false (nilai sama, tipe beda)
console.log(perbandingan1 != perbandingan2); // false
console.log(perbandingan1 !== perbandingan2); // true

console.log(10 > 5); // true
console.log(2 < 1); // false
console.log(7 >= 7); // true
console.log(3 <= 2); // false

// -------------- if else Conditional  --------------------
// if dan else digunakan untuk mengambil keputusan dalam kode

// “Kalau lapar → makan.
// Kalau nggak lapar tapi bosan → ngemil.
// Kalau nggak dua-duanya → tidur.”

let nilai = 75;

if (nilai >= 90) {
  console.log("Nilaimu A");
} else if (nilai >= 80) {
  console.log("Nilaimu B");
} else if (nilai >= 70) {
  console.log("Nilaimu C");
} else {
  console.log("Nilaimu D");
}

// -------------- Function  --------------------
// Mengapa Kita Pakai Function?
// Agar kode tidak ditulis berulang-ulang
// Membuat kode lebih rapi dan mudah dibaca
// Bisa dipanggil kapan pun dibutuhkan

function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
console.log(hasil); // 8

// -------------- Array  --------------------
// Cara Membuat Array :
let namaArray = [nilai1, nilai2, nilai3];

// contoh :
let warna = ["merah", "kuning", "hijau"]; // index 0, 1, 2
// index 0  // index 1  // index 2
let kumpulanAngka = [1, 2, 3, 4, 5];
console.log(warna[0]); // "merah"
console.log(warna[2]); // "biru"

// 1. Ubah isi array:
warna[1] = "hijau"; // sekarang ["merah", "hijau", "biru"]

// 2. Tambah ke akhir:
warna.push("ungu");

// 3. Hapus item terakhir:
warna.pop();

// 4. length :
console.log(warna.length);

// Looping dengan Array (bonus untuk latihan) :
let buah = ["apel", "pisang", "mangga"];

for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}

// -------------- Object  --------------------
// Kenapa Perlu Object?
// Menyimpan data yang kompleks
// Mudah dibaca dan dikelola
// Sering digunakan dalam real project, API, dan database

let user = {
  nama: "Mika",
  umur: 20,
  pekerjaan: "Programmer",
};

// -> Cara Mengakses Nilai dalam Object
// 1. Dengan dot notation:
console.log(user.nama); // Output: Dila
console.log(user.umur); // Output: 25

// 2. Dengan bracket notation:
console.log(user["pekerjaan"]); // Output: Programmer

// -> Menambahkan, Mengubah & Menghapus Nilai
// 1. Menambahkan properti:
user.hobi = "Ngoding";

// 2. Mengubah nilai:
user.umur = 26;

// 3. Menghapus Properti
delete user.hobi;
