export default class Alumno {constructor(nombre, dni, edad) {
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad}
    getNombre() {return this.nombre;}
    getDni() {return this.dni;}
    getEdad(){return this.Edad;}
    toString() {
        return `Alumno: ${this.nombre}, DNI: ${this.dni}, Edad: ${this.edad}`;
    }
}