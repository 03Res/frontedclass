//rest & spread operrator(parameter sisa)
// const foo = (...params)=>{ //params jadi wadah array
//     console.log(params); //isi fungsi
// };

// foo("a","b","c") // kirim ke foo

//tanpa rest parameter
// const penjumlahanarray = (a, b, c, d, e, f)=>{
//     const array = [a, b, c, d, e, f];
//     let total= 0;
//     array.forEach(item=>{
//         total += item;
//     })
//     console.log(total)
// }
// penjumlahanarray(1, 2, 3, 4, 5, 6);

//dengan rest parameter
// const penjumlahanarray = (a,b,c, ...params)=>{
//         let total= 0;
//         params.forEach((item)=>{
//             total += item;
//         })
//         console.log(total)
//     }
//     penjumlahanarray(1, 2, 3, 4, 5, 6);

//pake spread operator(bagi array jadi element kecil)
// let array1 = [1, 2, 3, 4, 5];
// console.log(...array1)//titik tiga untuk bagi array jadi kecil

//duplikasi array
// let array2 = [array1];
// array1.push(67);//tambah di akhir array
// console.log(`array 1 = ${array1}`)
// console.log(`array 2 = ${array2}`)

//combine
let array1= [1,2,3];
let array2= [4,5,6];
let array3= [7,8,9];
let combinearray5 = array1.concat(4, array2, array3);
console.log(combinearray5);

let combinearray6 = [...array1, 4, ...array2, ...array3]
console.log(combinearray6);

//pada objek
let john= {
    fullname : "john",
    age: 30,
    address: "manado"

};
//duplikasi objek
let student = {...john};
john = {...john, job: "teaacher"};
console.log(john);

//menggabungkan objek
let obj1= {a: 1, b:2};
let obj2= {c: 3, d:4};
let combineobject= {...obj1, ...obj2};

//destruckting
// let buah = ["mangga", "pisang", "anggur", "pepaya", "kimak"];
// let [, , buah]

