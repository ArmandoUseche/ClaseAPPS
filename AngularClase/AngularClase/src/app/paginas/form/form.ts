import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  nombre: string = 'Armando';
  cambiarNombre() {
    if (this.nombre === 'Armando') {
      this.nombre = 'Juan';
    } else {
      this.nombre = 'Armando';
    }
  }
}
