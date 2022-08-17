import { Component } from "@angular/core";

@Component({
    selector: 'app-starwars',
    templateUrl: 'starwars.component.html'
})
export class starwarsComponent{

    nombre: string = 'Darth Vader';
    edad: number = 32;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre } - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Luke Skywalker';
    }

    cambiarEdad(): void {
        this.edad = 23;
    }

}