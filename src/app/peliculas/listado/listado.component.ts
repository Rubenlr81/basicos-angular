import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent {
  
  personajes: string[] = ['Darth Vader', 'Luke Skywalker','Han Solo', 'Leia Organa', 'Obi-Wan-Kenobi'];

  personajeBorrado: string = '';

  borrarPersonaje(){    
    this.personajeBorrado = this.personajes.shift() || '';
  }
}
