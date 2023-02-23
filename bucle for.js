// var estudiantes = ["vanesa","Agustin","mariana","christian"];
// function saludarEstudiantes(estudiantes){
//     console.log(´hola ${estudiantes}´);

// }
// for( var i = 0; i < estudiantes.length; i++){
//     saludarEstudiantes(estudiantes[i]);

// }

// var estudiantes = ["vanesa","Agustin","mariana","christian"];
// function saludarEstudiantes(estudiantes){
//     console.log(´hola ${estudiantes}´);

// }
// for (var estudiante of estudiantes) {
//     saludarEstudiantes(estudiante);

// }

// var frutas = ["Manzana", "Pera", "Naranja", "Platano", "Uva"];

// for (i = 0; i < frutas.length; i++) {
//     console.log(`Indice ${i}: ${frutas[i]}`);
// }

// for (e of frutas) {
//     console.log(`Elemento ${e}`);
// }

// Reto de la clase: Escribe un programa que muestre los números del 1 al 50, con las siguientes excepciones:

// Para los múltiplos de 3 muestra la palabra “Fizz” en lugar del número.

// Para los múltiplos de 5 muestra la palabra “Buzz” en lugar del número.

// Para los múltiplos de 3 y 5 muestra la palabra “FizzBuzz” en lugar del número.

// NOTA: EL ALGORTITMO DEBERA ESTAR EN UNA SOLA LINEA DE CODIGO.
for (let i = 1; i <= 50; i++) {
    console.log((i%3 === 0 ? 'Fizz':'') + (i%5 === 0 ? 'Buzz':'') || i)
}






