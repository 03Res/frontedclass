// jscript es6
// tak bisa ubah elemen array keseluruhan(const)
//var tak kenal block sccoping
//................


//string literal
let fullname= "resma soruday";
let age= 19;
let address= "manado";


//cara lama
let kalimat5= "boku no nama e wa" + fullname + "umur saya " + age + "saya tinggal di " + address;

console.log(kalimat5)

//cara baru
let kalimat6= `nama gweh ${fullname}, umur= ${age}, tinggal di= ${address}`
console.log(kalimat6)

//pake ekspresi
let kalimat7= `nama saya ${fullname + 2}`;
console.log(kalimat7)

//arrow function
//versi pake fungsi/ cara lama
function sayGreetings5(nama){
    return `hello ${nama}`;
}
console.log(sayGreetings5("resma"))

//arrow function
// const sayGreetings6 = (nama) => {
//     return `hello gweh ${nama}`;
// }
// console.log(sayGreetings6("res"))

//untuk kembalikan nilai
const sayGreetings6 = (nama) => `hello banh gweh ${nama}`;
console.log(sayGreetings6("res-kun"))

//......iife
let output1 = (() => `hello coeq` ) ();
console.log(output1)

// pake callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2)

//parameter default
// const sayGreetings7 = (fullname) => {
//     console.log(`hello peh ${fullname}`)
// };
// sayGreetings7();

// //klo pake kondisi
// const sayGreetings7 = (fullname) => {
//     if (fullname === undefined){
//         fullname = "cok chey"
//     }
//     if (age === undefined){
//         age = 19
//     }
//     console.log(`hello peh ${fullname}`)
// };
// sayGreetings7();

const sayGreetings7 = (fullname = "cok chey", age = 19) => {
    console.log(`hello niggslut ${fullname}`)
}
sayGreetings7("gweh resma")

//.............
