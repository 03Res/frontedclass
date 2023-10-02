// input nilai
// Meminta pengguna memasukkan angka dan mengonversinya menjadi bilangan bulat
var input = prompt("Masukkan angka:");
var number = parseInt(input);

// Fungsi untuk mengecek apakah angka genap atau ganjil
function cekAngka(number) {
  let isEligible = number % 2 === 0 ? "genap" : "ganjil"; // Mengecek nilai
  return isEligible; // Mengembalikan nilai ke isEligible
}

// Memanggil fungsi dan menyimpan hasilnya dalam variabel cek
let isEligible = cekAngka(number);

console.log("Nilai angka adalah: " + number);
console.log("Angka ini adalah angka " + cek);

//...........................................................

//nilai sudah ada
var number= prompt("masukan angka");
function angka(number){
    let isEligible= number % 2 == 0 ? "genap" : "ganjil";//cek nilai
    return isEligible;//kembalikan nilai ke isEligible
}

//buat varibel untuk tampung nilai
let cek= angka();//cek nilail di parameter
console.log("Nilai angka adalah :"+ " "+ cek);//print output