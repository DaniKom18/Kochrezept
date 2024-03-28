import { Routes } from '@angular/router';
import {RezeptErstellenComponent} from "./masken/rezept-erstellen/rezept-erstellen.component";
import {MeineFavoritenComponent} from "./masken/meine-favoriten/meine-favoriten.component";
import {MeineRezepteComponent} from "./masken/meine-rezepte/meine-rezepte.component";
import {StartseiteComponent} from "./masken/startseite/startseite.component";

export const routes: Routes = [
  {path: 'startseite', component: StartseiteComponent },
  {path: 'meine-rezepte', component: MeineRezepteComponent },
  {path: 'meine-favoriten', component: MeineFavoritenComponent },
  {path: 'rezept-erstellen', component: RezeptErstellenComponent },
  {path: "", redirectTo:"/startseite", pathMatch:"full"},
  {path: "**", redirectTo:"/startseite", pathMatch:"full"},
];
