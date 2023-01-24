import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html', 
    /* inline template template: `<h1>Listado de Personas 2023</h1>
    <app-persona></app-persona>
    <app-persona></app-persona>`*/
    // styleUrls: ['./personas.component.css'] 
    // inline styles 
    styles: [`
        h1{color: blue;}
    `]
})
export class PersonasComponent{

    deshabilitar = false;
    mensaje = 'No se ha agregado ninguna persona';
    titulo = '';
    twoway ='probamos';
    
    agregarPersona(){
        this.mensaje = 'Pesona agregada'
    }
    modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }
}