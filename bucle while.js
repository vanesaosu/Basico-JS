var estudiantes = ["vanesa","george","epifanio","copernico"]
function saludarEstudiantes(estudiantes){
    console.log(´hola,${estudiantes}´);
}
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante= estudiantes.shift();
    saludarEstudiantes(estudiante);
    

}
export function solution(estudiantes, deathCount, nuevo) {
    for (deathCount; deathCount > 0; deathCount--) {
      estudiantes.pop();
    }
    estudiantes.push(nuevo);
    return estudiantes;
  }