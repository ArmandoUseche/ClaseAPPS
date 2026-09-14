import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonHeader,IonToolbar,IonTitle,IonContent,IonItem,IonLabel,IonInput,IonSelect,IonSelectOption,IonButton,IonText,IonList,IonListHeader} from '@ionic/angular';

interface Historial {
  operacion: string;
  resultado: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule,FormsModule,IonHeader,IonToolbar,IonTitle,IonContent,IonItem,IonLabel,IonInput,IonSelect,IonSelectOption,IonButton,IonText,IonList,IonListHeader]
})


export class Tab1Page {
  numero1: number = 0;
  numero2: number = 0;
  operacionSeleccionada: string = 'sumar';
  resultado: number | null = null;
  error: string = '';
  historial: Historial[] = [];

  calcular() {
    this.error = '';
    let simbolo = '';

    switch (this.operacionSeleccionada) {
      case 'sumar':
        this.resultado = this.numero1 + this.numero2;
        simbolo = '+';
        break;
      case 'restar':
        this.resultado = this.numero1 - this.numero2;
        simbolo = '-';
        break;
      case 'multiplicar':
        this.resultado = this.numero1 * this.numero2;
        simbolo = '×';
        break;
      case 'dividir':
        if (this.numero2 === 0) {
          this.error = 'No se puede dividir entre cero';
          this.resultado = null;
          return;
        }
        this.resultado = this.numero1 / this.numero2;
        simbolo = '÷';
        break;
    }

    if (this.resultado !== null) {
      this.historial.unshift({
        operacion: `${this.numero1} ${simbolo} ${this.numero2}`,
        resultado: this.resultado
      });
    }
  }

  limpiar() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = null;
    this.error = '';
  }

  limpiarHistorial() {
    this.historial = [];
  }
}