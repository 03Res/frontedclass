// Fungsi IIFE yang menerima angka sebagai input dari pengguna
let checkOddEven = (function () {
  // Fungsi callback untuk mengembalikan hasil
  function isOddEven(number) {
    if (typeof number === 'number' && !isNaN(number)) {
      return number % 2 === 0 ? 'Bilangan Genap' : 'Bilangan Ganjil';
    } else {
      return 'Input yang dimasukan bukan angka';
    }
  }

  // minta input
  let userInput = prompt('Masukkan nilai:');
  let parsedInput = parseFloat(userInput);

  // panggil fungsi callback dari input tadi
  let result = isOddEven(parsedInput);
  console.log(result); // display hasil

  // kse bale hasil jika diperlukan
  return result;
})();