// ambilDataUserAsync.js
export async function ambilDataUserAsync() {                             // bikin function ambilDataUserAsync
  try {
    const response = await fetch("https://reqres.in/api/users");
    if (!response.ok) {                                               //cek jika kondisi status adalah ok atau tidak
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();                          // Parsing isi respons sebagai JSON
    console.log(data.data);                                   // Catat properti 'data' dari respons
    return data.data;                                       // Kembalikan properti 'data' dari respons
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
