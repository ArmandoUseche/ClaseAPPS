import { Component } from '@angular/core';
import {IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonBackButton} from '@ionic/angular';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton]
})
export class BadgePage {
  constructor() {}
}