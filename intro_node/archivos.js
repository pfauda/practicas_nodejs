const fs = require('fs');

// Leer un archivo (texto.txt)
archivo = fs.readFileSync('./texto.txt');

console.log(archivo);

// Leer un archivo de manera asincrona
//var archivo;
/*
fs.readFile('./texto.txt', (err, data) => { // callback async
    //console.log(data);
    archivo = data;
    console.log(err);
    console.log(archivo);
});

const archivo = fs.createWriteStream('escritura.txt', {
    flags: 'r+',
    start: 4
});

archivo.write("abcdefghi");
archivo.end();
*/