export interface User {
  id?: string, // UUID
  username: string,
  email?: string,
  xp: number,
  level: number
  countOfUploadedRecipes?: number
  countOfFavoriteRecipes?: number
}
