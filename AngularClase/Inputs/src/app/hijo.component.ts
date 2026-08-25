import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  template: `
    <div style="border: 2px dashed #007bff; padding: 15px; margin-top: 10px;">
      <h3>Componente Hijo</h3>
      <button (click)="enviarMensaje()">Enviar alerta al Padre</button>
    </div>
  `
})
export class HijoComponent {
  @Output() miEvento = new EventEmitter<string>();

  enviarMensaje() {
    this.miEvento.emit('¡Alerta! El botón del hijo fue presionado.');
  }
}