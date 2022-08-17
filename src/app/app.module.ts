import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { peliculasModule } from './peliculas/peliculas.module';
import { contadorModule } from './contador/contador.Module';


@NgModule({
  declarations: [
    AppComponent,       
  ],
  imports: [
    BrowserModule,
    peliculasModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
