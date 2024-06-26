const buffer = new Buffer.from("shubham");

buffer.write("bas") // we can write in buffer just that buffer has limited memory space therefore it overwrites the initial string
console.log(buffer); //return hexa decimal 
console.log(buffer.toString());
console.log(buffer.toJSON()); //ascii code
