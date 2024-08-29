import fs from "fs/promises";
import { console } from "inspector";

// fs.readFile("./public/About.html", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const data = fs.readFileSync("./public/About.html", "utf-8");
// console.log(data);


// const readFiles =  async () => {
//     try {
//         const resposne =  await fs.readFile('./test.txt', 'utf-8');
//         console.log(resposne)
        
//     } catch (error) {
//         console.log(" There was an error",error)
        
//     }
// }

// readFiles();



// Async function to read the file


// writefile () 

const writeFile =  async () => {
    try {

        await fs.writeFile('./test.txt',"I am overriding a existing  file ")
        console.log("File  written too")
        
    } catch (error) {
        console.log("  Error writing", error)
    }
}


const appendFile  = async () => {

    try {
        await fs.appendFile('./test.txt','\n This is append file ' )
        console.log(" This is a append  file")
    } catch (error) {
        console.log(" This is an error", error)
    }
}





writeFile();
appendFile();