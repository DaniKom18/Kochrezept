import {Comment} from "./Comment";

export interface Feedback {
  id: string,
  comment:Comment,
  rating:string,
  recipeId:number,
  userId: string //uuid
}
