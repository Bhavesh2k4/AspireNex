export type Product = {
    url: string
    currency: string
    image: string
    title: string
    currentPrice: number
    originalPrice: number
    priceHistory: any[] // Adjust this as needed
    discountRate: number
    isOutOfStock: boolean
    description: string
    lowestPrice: number
    highestPrice: number
    averagePrice: number
  }