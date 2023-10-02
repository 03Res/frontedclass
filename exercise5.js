// //1 o
// let person = {
//     nama: "resma",
//     usia: 19,
//     pekerjaan: "belum ada",
//     alamat: "airmadidi",
//     kampus: "unklab\n"
//   };
  
//   // Mendeklarasikan variabel-variabel dengan let dan menggunakan destructuring
//   let { nama, usia, pekerjaan } = person;
  
//   console.log(nama); 
//   console.log(usia);      
//   console.log(pekerjaan);  
//   console.log(alamat);
//   console.log(kampus);



  //2 objek: ambil sebagian objek
// let mobil = {
//     namaMobil: "BMW",
//     produksi: "jerman",
//     tahunRilis: 1916,
//     penemu: "karl rapp",
//     jumlahProdukSaatIni: 1481253
//   };
  
//   // Mendeklarasikan variabel-variabel dengan let dan menggunakan destructuring
// let { namaMobil, produksi, penemu} = mobil;
  
// console.log(namaMobil);
// console.log(produksi);
// console.log(penemu);

//3 objek: pakai nilai default
// function film(namaFilm= " tidak di temukan", rating="tidak ditemukan", rilis= "tidak ditemukan", pendapatan= "100") {
//     console.log(namaFilm);
//     console.log(rating);
//     console.log(rilis);
//     console.log(pendapatan);
//   }
  
//   // Memanggil fungsi dengan argumen
//   film("Openheimer");
  
//4 objek rest operator
function mobil(nama1,nama2,nama3,...nama4){
    console.log(nama1,nama2,nama3,nama4);
};
mobil("lambo", "posche", "bugati", "rolls royce", "mclaren", "ferarri", )