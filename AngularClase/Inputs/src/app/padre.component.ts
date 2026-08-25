import { Component } from '@angular/core';
import { HijoComponent } from './hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  template: `
    <div style="border: 2px solid #28a745; padding: 15px;">
      <h2>Componente Padre</h2>
      
      <p>Mensaje recibido: <strong>{{ mensajeDelHijo }}</strong></p>

      <app-hijo (miEvento)="capturarDato($event)"></app-hijo>
    </div>
  `
})
export class PadreComponent {
  mensajeDelHijo: string = 'Aún no hay mensajes...';

  capturarDato(datoRecibido: string) {
    this.mensajeDelHijo = datoRecibido;
  }
}