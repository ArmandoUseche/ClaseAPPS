import { Component } from '@angular/core';
import {IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonBackButton} from '@ionic/angular';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.page.html',
  styleUrls: ['./breadcrumbs.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton]
})
export class BreadcrumbsPage {
  constructor() {}
}