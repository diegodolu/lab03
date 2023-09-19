let a = 3, b = 2, c = 3;

let z = a != c; // Se revisa el valor sin importar el tipo
console.log(z);

z = a !== c; // Revisa los valores pero también los tipos
console.log(z);