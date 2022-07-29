export type Card = {
  image: string,
  price: number,
  name: string,
  type: string,
  bookMark: boolean,
  isPremium: boolean,
  rating: number,
  isFavorite: boolean,
  id: number
}

export type requestData = {
  review: string,
  rating: string
}
