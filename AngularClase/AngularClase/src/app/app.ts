import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Acerca } from './paginas/acerca/acerca';
import { Form } from './paginas/form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Acerca, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularClase');
}
