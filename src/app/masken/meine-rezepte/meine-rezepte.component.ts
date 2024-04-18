import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Recipe} from "../../models/recipe";
import {InputSwitchModule} from "primeng/inputswitch";


@Component({
  selector: 'app-meine-rezepte',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    RippleModule,
    NgClass,
    RouterLink,
    InputSwitchModule
  ],
  templateUrl: './meine-rezepte.component.html',
  styleUrl: './meine-rezepte.component.css'
})
export class MeineRezepteComponent {
  recipes:Recipe[] = [
    {
      id: 4,
      name: 'Lebkuchen',
      image: 'https://images.pexels.com/photos/906054/pexels-photo-906054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 3.4,
      preparation: '',
      ingredients: [],
      visibility: false,
      isAnonymous: false
    },
    {
      id: 3,
      name: 'Döner',
      image: 'https://images.pexels.com/photos/15202777/pexels-photo-15202777/free-photo-of-mahlzeit-fleisch-frisch-essensfotografie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5.0,
      preparation: '',
      ingredients: [],
      visibility: false,
      isAnonymous: false
    }
  ]

  editProduct(product: any) {

  }

  deleteProduct(product: any) {

  }

  toggleVisibility(recipe: Recipe) {
    console.log(recipe)
    //TODO Backend Call um die Visibility vom Recipe zu ändern
    // Es sollte nur die Id gesendet werden und der Boolean wert
  }

  toggleIsAnonymous(recipe: Recipe) {
    console.log(recipe)
    //TODO Backend Call um die Visibility vom Recipe zu ändern
    // Es sollte nur die Id gesendet werden und der Boolean wert
  }
}
