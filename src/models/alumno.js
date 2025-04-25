export default class Alumno {constructor(nombre, dni, edad) {
    const alumnosArray = [] ;
    alumnosArray.push(new Alumno("Esteban Dido"  , "22888444", 20));
    alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
    alumnosArray.push(new Alumno("Elba Calao"    , "32623391", 18));
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad}
    getAlumnosArray() {return this.alumnosArray;}
    getNombre() {return this.nombre;}
    getDni() {return this.dni;}
    getEdad(){return this.Edad;}
    toString() {return `Alumno: ${this.nombre}, DNI: ${this.dni}, Edad: ${this.edad}`;}
}