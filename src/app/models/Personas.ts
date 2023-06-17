export class Personas {
    cedula: string
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    edad: number;
    estado: boolean;

    constructor(cedula: string, nombre: string, apellido: string, fechaNacimiento: Date, edad: number, estado: boolean) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.estado = estado;
    }
}