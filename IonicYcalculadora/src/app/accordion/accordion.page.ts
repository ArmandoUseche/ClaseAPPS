import { Component } from '@angular/core';
import {IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonBackButton} from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton]
})
export class AccordionPage {
  constructor() {}
}