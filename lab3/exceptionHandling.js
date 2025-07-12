//exception handling using try-catch
// try{
//     JSON.parse("{2");
// }catch(error){
//     console.error("Error");
// }

//exception handling with async fs
// const fs = require('fs');

// fs.readFile('fileNotFound.txt', 'utf-8', (err,data)=>{
//     if(err){
//         console.error("File not found :", err.message);
//     }
//     else{
//         console.log(data);
//     }
// })


//exception handling with promises
const fs = require('fs').promises;
fs.readFile('fileNotFound.txt', 'utf-8')
.then(data => console.log(data))
.catch(error => console.error(error));