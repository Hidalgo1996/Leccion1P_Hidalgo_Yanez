import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/models/Personas';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vista-tabla',
  templateUrl: './vista-tabla.component.html',
  styleUrls: ['./vista-tabla.component.css']
})
export class VistaTablaComponent implements OnInit{
  form!: FormGroup;
  cedula ="";
  nombre ="";
  apellido ="";
  fechaNacimiento ="";
  edad ="";
  listaPersonas: Personas[] = [];
  listapersonasEliminadas: Personas[] = [];

  ngOnInit(): void{
    this.form = new FormGroup({
      cedula: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required)
    })
  }
  
  agregarPersona(){
    const personas: Personas = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      fechaNacimiento: this.form.value.fechaNacimiento,
      edad: this.form.value.edad,
      estado: true,
    }
    this.listaPersonas.push(personas);
    console.log(personas);
  }

  eliminarPersona(indice: number, personas: Personas): void{
    this.listapersonasEliminadas.push(personas);
    console.log(this.listapersonasEliminadas);
    this.listaPersonas.splice(indice, 1);
  }
}
