import helloworld from './helloworld.js';       // 1. Import modul 'helloWorld' yang telah kita buat sebelumnya
import ambilDataUser from './ambilDataUser.js'; // 2.  Import the ambilDataUser function from ambilDataUser.js
import { ambilDataUserAsync } from './ambilDataUserAsnyc.js';
async function messages() {                     // Definisikan async function bernama 'messages'
  let msg = await helloworld();                 // Buat variabel 'msg' dan isi dengan hasil dari await helloWorld()
  
  // Tampilkan isi variabel 'msg' dengan console.log()
  console.log(msg);
  console.log("selesai")
}
messages();                                     // Panggil async function 'messages'
ambilDataUser()   
ambilDataUserAsync()                              // Call the ambilDataUser function
 // 3. Import modul ambilDataUserAsync

