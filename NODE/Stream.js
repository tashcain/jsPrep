const zlib = require('zlib');
const fs = require('fs');

// Compress a file using gzip
const input = fs.createReadStream('./file.txt');
const output = fs.createWriteStream('./input.txt.gz');
const gzip = zlib.createGzip();

// direct piping
input.pipe(output);

// we can chain using pipe method lets take an example to zip the file using zlib api
input.pipe(gzip).pipe(output);

// const fs = require('fs');;
// const zlib = require('zlib');

// const readFileStream = fs.createReadStream('./file.txt', {
//     encoding : 'utf-8'
// });

// //we can chain using pipe method lets take an example to zip the file using zlib api
// readFileStream.pipe(zlib).pipe(fs.WriteStream('./file2.txt.gz'))

// // const writeFileStream = fs.createWriteStream('./file2.txt');

// // readFileStream.on('data', (chunk) => {
// //     console.log(chunk);
// //     writeFileStream.write(chunk); 
// // }) // createReadStream extends emitter class therefore we can listen to its emited value

// // readFileStream.pipe(writeFileStream);



