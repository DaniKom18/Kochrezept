import {Component, OnInit} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {FileUploadModule} from "primeng/fileupload";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {RezeptVerwaltungComponent} from "../../shared-components/rezept-verwaltung/rezept-verwaltung.component";

interface Recipe{
  name:string,
  preparation:string,
  ingredients:Ingredients[],
  image:string,
}

interface Ingredients{
  name: string,
  quantity:number,
  measure:string
}

@Component({
  selector: 'app-rezept-erstellen',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    ScrollPanelModule,
    FileUploadModule,
    DropdownModule,
    FileUploadComponent,
    RezeptVerwaltungComponent
  ],
  templateUrl: './rezept-erstellen.component.html',
  styleUrl: './rezept-erstellen.component.css'
})
export class RezeptErstellenComponent{


  createRecipe($event: Recipe) {
    //TODO POST an server um ein neues Rezept zu erstellen
  }
}
