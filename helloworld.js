
function helloworld() {                             // bikin fungsi helloworld
    
    return new Promise((resolve) => {             // return promise pake fungsi callback dengan parameter resolve
      setTimeout(() => {                        // pke setTimeout untuk waktu delay promise
        resolve("Hello World!");               // resolve kse display hello world setelah 2000ms
      }, 2000);
    });
  }

  export default helloworld;              // eksport jadi default modul
  