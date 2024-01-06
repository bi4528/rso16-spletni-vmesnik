import { Routes } from '@angular/router';
import { SeznamKoktejlovComponent } from './seznam-koktejlov/seznam-koktejlov.component';
import { UporabniskiSeznamComponent } from "./uporabniski-seznam/uporabniski-seznam.component";

export const routes: Routes = [
  { path: 'seznam-koktejlov', component: SeznamKoktejlovComponent },
  { path: 'uporabniski-seznam', component: UporabniskiSeznamComponent }
];
