import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { contadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
      contadorComponent
    ],
    exports: [
        contadorComponent
    ],    
})

export class contadorModule{}