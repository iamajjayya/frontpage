import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

const urlObject = new URL(urlString);
console.log(urlObject);
console.log(urlObject.search);

//format()

console.log(url.format(urlObject));

//import.meta.url -  file url 

console.log(import.meta.url)

//file URL to Path 

console.log(url.fileURLToPath(import.meta.url))


// Params

const params  =  new URLSearchParams(urlObject.search)
console.log(params.get('q'))
params.append('limit', 5)
params.delete('limit')
console.log(params)
