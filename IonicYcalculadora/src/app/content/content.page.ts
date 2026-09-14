import { Component } from '@angular/core';
import {IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonBackButton} from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton]
})
export class ContentPage {
  constructor() {}
}