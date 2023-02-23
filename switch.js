// var numero =1;



// switch (numero){
//     case 1:
//          console.log("soy uno");
//     break;
//     case 10:
//         console.log("soy un 10");
//         break;
//         default:
//             console.log("no soynadie paa vos maldito idiota");


// }

// function semaforo(color) {
//     switch (color) {
//       case "verde": {
//         console.log("¡Sigue!")
//         break
//       }
//       case "amarillo": {
//         console.log("¡Detente!")
//         break
//       }
//       case "rojo": {
//         console.log("¡No puedes avanzar!")
//         break
//       }
//       default: {
//         console.log("¡No reconozco ese color! :(")
//       }
//     }
//   }
  
//   semaforo("verde") //'¡Sigue!'

  var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}
