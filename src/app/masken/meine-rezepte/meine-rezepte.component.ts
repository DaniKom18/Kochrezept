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
  products:Rezept[] = [{name: 'Lebkuchen', image: 'lebkuchen'}]

  editProduct(product: any) {

  }

  deleteProduct(product: any) {

  }

  toggleVisibility(product: any) {

  }

  toggleAnonym(product: any) {

  }
}
