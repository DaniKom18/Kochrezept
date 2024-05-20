import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {NgClass} from "@angular/common";

interface Rezept{
  name: string,
  image: string,
  rating: number,
}
@Component({
  selector: 'app-meine-rezepte',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    RippleModule,
    NgClass
  ],
  templateUrl: './meine-rezepte.component.html',
  styleUrl: './meine-rezepte.component.css'
})
export class MeineRezepteComponent {
  products:Rezept[] = [
    {name: 'Lebkuchen', image: 'https://images.pexels.com/photos/906054/pexels-photo-906054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', rating: 3.4},
    {name: 'Döner', image: 'https://images.pexels.com/photos/15202777/pexels-photo-15202777/free-photo-of-mahlzeit-fleisch-frisch-essensfotografie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', rating: 5.0}
  ]

  editProduct(product: any) {

  }

  deleteProduct(product: any) {

  }

  toggleVisibility(product: any) {

  }

  toggleAnonym(product: any) {

  }
}
