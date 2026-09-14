import { Component } from '@angular/core';
import {IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonBackButton} from '@ionic/angular';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton]
})
export class ChipPage {
  constructor() {}
}