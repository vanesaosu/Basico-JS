function auto(marca,modelo,annio){
    this.marca= marca;
    this.modelo= modelo;
    this.annio= annio;

}


function hombre(nombre,apellido,edad,caracteristica){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.caracteristica=caracteristica;
}

function fruta (nombre,forma,color,sabor){
    this.nombre=nombre;
    this.forma=forma;
    this.color=color;
    this.sabor=sabor;
}


export function solution(car) {
    car['licensePlate'] ? car.drivingLicense = true : car.drivingLicense = false;
    return car;
  }
  
  
