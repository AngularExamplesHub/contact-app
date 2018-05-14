import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactformComponent } from './contactform/contactform.component';

const appRoutes: Routes = [
  { path: '',  pathMatch: 'full' , component: ContactlistComponent },
  { path: 'contactform', component: ContactformComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
