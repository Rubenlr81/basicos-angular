import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { starwarsComponent } from './starwars/starwars.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
      starwarsComponent,
      ListadoComponent  
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class peliculasModule{}

