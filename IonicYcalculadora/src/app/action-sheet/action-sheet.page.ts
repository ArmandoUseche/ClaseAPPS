import { Component } from '@angular/core';
import {IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonBackButton} from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton]
})
export class ActionSheetPage {
  constructor() {}
}