import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html', 
    /* inline templatetemplate: `<h1>Listado de Personas 2023</h1>
    <app-persona></app-persona>
    <app-persona></app-persona>`*/
    // styleUrls: ['./personas.component.css'] 
    styles: [`
        h1{color: blue;}
    `]
})
export class PersonasComponent{

}