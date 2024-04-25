export interface User {
  id?: string, // UUID
  username?: string,
  email?: string,
  xp?: number,
  level?: number
  favRecipes?: number[]
  myRecipes?: number[]
}
