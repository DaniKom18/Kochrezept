import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-rezept-panel',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule
  ],
  templateUrl: './rezept-panel.component.html',
  styleUrl: './rezept-panel.component.css'
})
export class RezeptPanelComponent {

}
