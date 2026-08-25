import { Component } from '@angular/core';
import { PadreComponent } from './padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { 
  title = 'Inputs';
}