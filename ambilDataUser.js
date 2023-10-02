function ambilDataUser() {                                       // bikin fungsi ambilDataUser
    return fetch("https://reqres.in/api/users")                 //pake fetch untuk bikin API request
      .then((response) => {
       
        if (!response.ok) {                                   // priksa kondisi jika status responsnya itu OK (200)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();                           // Parsing isi responses sebagai JSON truss return
      })
      .then((data) => {
        
        console.log(data.data);                       // console.Log property data dari response
        return data.data;                            // Return property data dari responses
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }
  export default ambilDataUser;              // ekspor fungsi jadi default modul
  