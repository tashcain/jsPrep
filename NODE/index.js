const fs = require('fs');

 const fileContent = fs.readFileSync('./file.txt', 'utf-8'); //here sync means that the js compiler waits until the file data is loaded - this function is syncronous
 console.log(fileContent)


 fs.readFile('./file.txt','utf-8', (error, content) =>{
    if(error){
        console.log(error);
    }else{
        console.log(content)
    }
 })

fs.writeFileSync('./greet.txt', 'hello world');

fs.writeFile('./greet.txt', 'hello world async', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('file written');
    }
})

fs.writeFile('./greet.txt', ' appended hello world', {flag : 'a'}, (err) => { // flag is used here to append the already existing file 
    if(err){
        console.log(err);
    }else{
        console.log('file written');
    }
})










// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('order-pizza', (size, thing) => {
//     console.log(`hello there is a ${size} ${thing}`)
// })

// emitter.emit('order-pizza', 'large', 'pizza');


// const OrderPizza = require("./OrderPizza");

// let orderr = new OrderPizza();

// orderr.on("order-pizza", (size) => {
//     console.log(`pizza of size ${size}`)
// })

// orderr.order();
// orderr.order();
// orderr.order();
// console.log(orderr.getNoOfPizza());