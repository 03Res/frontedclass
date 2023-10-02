// //cara 1 literal
// const students= ["res", "resma", "pergamus"];
// const numbers= [1,2,3,4,5];
// const string= ["res", 1, 2, "quero"];

// console.log(students);
// console.log(numbers);
// console.log(string);

// //modify
// console.log(students[2]);
// students[0]= "soruday"
// console.log(students);
// //tambah diantara spasi


//objek
let john = {
    firstName: "resma",
    lastName: "soruday",
    umur: 20,
    menikah: false,
    grade: [80, 90, 100],
    alamat: {
        kota: "airmadidi",
    provinsi: "sulut",
    pastalcode: "1235k"
    },

    sayOutput: function () {
        console.log("boku no nama e wa"+ this.firstName)
    }
    

}
console.log(john.firstName);

//breaket notation
console.log(john["g"])