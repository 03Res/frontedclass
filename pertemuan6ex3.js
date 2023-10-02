// array exercise
let people = ["greg", "Mary", "Devon","James"];

//no 1 pake loop untuk display
console.log("nomor 1")

for (let i = 0; i< people.length; i++){
console.log(people[i])
}

//no 2 pke for each untuk display
console.log("nomor 2")
people.forEach(function(person) {
  console.log(person);
});

//no 3 hapus greg
console.log("nomor 3")
people.shift("greg")
console.log(people)

//no 4 hapus james
console.log("nomor 4")
people.pop("james")
console.log(people)

//no 5 tambah matt didepan
console.log("nomor 5")
people.unshift("matt")
console.log(people)

//no 6 tambah nama sendiri di akhir
console.log("nomor 6")
people.push("resma")
console.log(people)

//no 7 pek for loop smpai mary
console.log("nomor 7")
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Mary") {
      console.log("Mary");
      break; // Exit the loop when "Mary" is found
    }
    console.log(people[i]);
}

//no 8 potong sampai index 2
console.log("nomor 8")
let people2 = people.slice(2)
console.log(people2)

//no 9 redifine kembali
console.log("nomor 9")
// Remove "Devon" from the array and add "Elizabeth" and "Artie"
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//no 10 gabung kembali variable people ditambah bob
console.log("nomor 10")
let withBob = people.concat("Bob");
console.log(withBob);

//object exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//no 1 tambah go di languages
programming.languages.push("go")

//no2 ubah difficulty
programming["difficulty"] = 7

//no 3 hapus jokes
delete programming.jokes

//no 4 tambah isfun
programming.isFun=true

//no 5 tampilkan no index
programming.languages = programming.languages.map((languages, index) => `${index} - ${languages}`)

console.log(programming)