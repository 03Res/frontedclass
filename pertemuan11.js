//module:
//bagi program ke file-file yan terpisah
//biar gampang maintain
// reusealbe code: pakai kode di tempat lain (pake yang sudah ada)

// let fullname= "john doe";
// let numbers= [1,2,3,4,5];

// let john= {
//     fullname: "john doe",
//     age: 33,

// }
// export {fullname, numbers, john}

//sinkronus
// console.log("proses 1")
// console.log("proses 2")
// console.log("proses 3")
// console.log("proses 4")
// console.log("proses 5")

//asinkronus
//ada 2 macam
//parallel
// setTimeout( () =>{
//     console.log("proses 1");
// },3000);
// console.log("press 2")
// setTimeout( () =>{
//     console.log("proses 3");
// },5000);
// console.log("press 4")


//concurrent
// cara 1
// setTimeout( () =>{
//     console.log("proses 1");
//     setTimeout( () =>{
//         console.log("proses 2");
//         setTimeout( () =>{
//             console.log("proses 3");
//             setTimeout( () =>{
//                 console.log("proses 4");
//             },3000);
//         },3000);
//     },3000);
// },3000);

//cara 2 promise
//bikin promise
let condition= false;
 const newpromise=new Promise((resolve, reject) => {
    if (condition){
        resolve("berhasil");
    }
    else{
        reject("gagal");
    }
    
 });

 //pakai promise
// ada 2 cara
// 1. then-catch
newpromise.then((result) => {
    console.log(result)
}).catch((error) => console.log(error));

//2. async-await
const consumepromise= async () => {
    let result = await newpromise;
    console.log(result);
    

}
