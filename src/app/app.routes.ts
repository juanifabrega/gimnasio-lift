import { Routes } from '@angular/router';
import { HomeComponent } from './componentes-comunes/home/home.component';
import { ContactoComponent } from './componentes-comunes/contacto/contacto.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    //siempre al final.
    {path: '', redirectTo: '/home', pathMatch:'full'}
];
