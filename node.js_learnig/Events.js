import { EventEmitter  } from "events";

const myEmitter  = new EventEmitter();

function greetHandler() {
    console.log("Hello world");
}

function goodbyeHandler() {
    console.log("Good Bye ")
}

//Register event Listeners

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);


// Emiiter Events

myEmitter.emit("greet")
myEmitter.emit("goodbye")

// Error Handling  

myEmitter.on("error", (err) => {
    console.log("Error Occured", err);
})


//Simulte error 

myEmitter.emit("error", new Error (" Someting went wrong "))