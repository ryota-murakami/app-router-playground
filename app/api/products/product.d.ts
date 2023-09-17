export type Product = {
  id: string
  name: string
  description: string
  discount?: Discount
  image?: string
  imageBlur?: string
  isBestSeller: boolean
  leadTime: number
  price: Price
  rating: number
  stock: number
  usedPrice?: UsedPrice
}

type Price = {
  amount: number
  currency: Currency
  scale: number
}

type Currency = {
  base: number
  code: string
  exponent: number
}

type Discount = {
  expires?: number
  percent: number
}

type UsedPrice = {
  amount: number
  currency: Currency
  scale: number
}
