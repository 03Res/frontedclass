// class dalam js

//objek literal

// const mobil= {
//     transmisi: 'manual',
//     bahan: 'bensin',
//     mesin: 1500
//     nylakanmesin: function(){
//         console.log(`mobil ${this.transmisi}dinyalakan`)
//     }
// }

// const mobil2= {
//     transmisi: 'automatic',
//     bahan: 'solar',
//     mesin: 2000
// }

// pake class method
class Mobil{
    constructor(transmisi, bahanbakar, mesin){
        this.transmisi = transmisi;
        this.bahanbakar = bahanbakar;
        this.mesin = mesin;

    }
    onmesin(){
        console.log(`mobil ${this.transmisi} dinyalakan`)
    }
}

// panggil
const mobil = new Mobil("manual","bensin", 1500);
mobil.onmesin();
const mobil1 = new Mobil("automatic","solar", 1500);
mobil1.onmesin();
console.log(mobil,mobil1);

// inheritance
class toyota extends Mobil{
    constructor(merek, warna, transmisi, bahanbakar, mesin){
        super(transmisi, bahanbakar, mesin);
        this.merek= merek;
        this.warna= warna;

    }

    // override
    onmesin(){
        console.log(`mobil ${this.transmisi} dinyalakan`)
    }
}

const agya= new toyota("argya"," putih", " automatic", " bensin", 1500);
agya.onmesin(); // pangge pke fungsi
console.log(agya);


// es6 the end.........................