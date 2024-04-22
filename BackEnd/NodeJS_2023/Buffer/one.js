const fs = require('fs'); 
const buffer = fs.readFileSync('file.bin'); 
console.log(buffer);
console.log(buffer.toString());


const buffer_alloc = Buffer.alloc(10); 
buffer_alloc.write('Hello'); 
console.log(buffer_alloc.toString()); 



for (const b of buffer_alloc) {
	console.log(b)
}