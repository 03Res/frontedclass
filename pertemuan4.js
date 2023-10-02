//function javascript

function greetings(){
    return "hello"; //menganut system hoisting= bisa panggil pertama
}

console.log (greetings());//cara 1
// const greetings= function(){
//     return "hello";
// }

// const age = 20;
// const umur= function(name){
//     console.log(age);
//     const job= "student";
//     if (job == "student"){
//         const 
//     }
// }

(function(){
    console.log ("hello iife");//fungsi iife
})();

const output =(function(){
    return "hello bitches";//tak bisa return
})();

console.log (output);

function createGreetings(name, callback){
    const greetings = "hello"+ name;
    callback(greetings);
}

createGreetings(" res", function (greetings){
    console.log (greetings);//otomatis panggil ulang fungsi
});