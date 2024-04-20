import {Component, Input} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {Comment} from "../../models/comment";
import {Feedback} from "../../models/feedback";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-rezept-detail-view',
  standalone: true,
  imports: [
    ButtonModule,
    NgForOf
  ],
  templateUrl: './rezept-detail-view.component.html',
  styleUrl: './rezept-detail-view.component.css'
})
export class RezeptDetailViewComponent {
  recipeId: number = -1;

  @Input() //Mapped id die durch die URL übergeben wurde auf recipeId
  set id(value: number) {
    this.recipeId = value;
  }

  comments: Comment[] = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: 2,
      text: "At vero eos et accusam et justo duo dolores et ea rebum.",
    }
  ];

  feedback: Feedback = {
    id: '1',
    comment: this.comments,
    rating: '5',
    recipeId: this.recipeId,
    userId: 'uuid-13-asd-e'
  }
}
