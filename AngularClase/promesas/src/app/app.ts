import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="border: 2px solid #6f42c1; padding: 20px; border-radius: 8px; max-width: 400px; font-family: sans-serif;">
      <h2>Consumo de API (Promesas)</h2>
      
      <!-- Botón que dispara la petición -->
      <button 
        (click)="cargarUsuario()" 
        style="padding: 10px 15px; cursor: pointer; background-color: #6f42c1; color: white; border: none; border-radius: 4px;">
        Descargar datos
      </button>

      <div style="margin-top: 20px; line-height: 1.6;">
        <p>Estado: <strong>{{ estadoPeticion }}</strong></p>
        <p>Usuario: <strong>{{ nombreUsuario }}</strong></p>
        <p>Email: <strong>{{ emailUsuario }}</strong></p>
      </div>
    </div>
  `
})
export class App {
  estadoPeticion: string = 'Esperando acción...';
  nombreUsuario: string = '---';
  emailUsuario: string = '---';

  async cargarUsuario() {
    this.estadoPeticion = 'Cargando... (Pendiente)';
    this.nombreUsuario = 'Buscando...';
    this.emailUsuario = 'Buscando...';

    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const datos = await respuesta.json();

      this.estadoPeticion = '¡Éxito! (Resuelta)';
      this.nombreUsuario = datos.name;
      this.emailUsuario = datos.email;

    } catch (error) {
      this.estadoPeticion = 'Error de conexión (Rechazada)';
      this.nombreUsuario = 'No disponible';
      this.emailUsuario = 'No disponible';
      console.error(error);
    }
  }
}