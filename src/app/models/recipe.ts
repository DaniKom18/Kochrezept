import {Ingredient} from "./ingredient";

export interface Recipe {
  id: number,
  name:string,
  preparation:string,
  ingredients:Ingredient[],
  image:string,
  rating: number,
  visibility: boolean,
  isAnonymous: boolean,
  author?:string
}
