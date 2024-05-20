export interface Recipe {
  id: number,
  name:string,
  preparation:string,
  image:string,
  rating: number,
  visibility: boolean,
  showAuthor: boolean,
  author?:string
}
