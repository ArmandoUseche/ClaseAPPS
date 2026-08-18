import { Routes } from '@angular/router';
import { Acerca } from './paginas/acerca/acerca';
import { Form } from './paginas/form/form';

export const routes: Routes = [
    {path: 'acerca', component: Acerca },
    {path: 'form', component: Form },
];
