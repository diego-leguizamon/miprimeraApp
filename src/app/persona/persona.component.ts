import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{
  
  //constructor(){}
  //atributos publicos para utilizar interpolacion
  nombre: string = 'Juan';
  apellido: string = 'Perez';
  edad: number = 28;
  //si tengo un atributo privado, utilizariamos un get, ejemplo telefono
  private telefono: number = 3794006989;

  getTelefono(): number{
    return this.telefono;
  }

}