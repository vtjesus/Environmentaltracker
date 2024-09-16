export type NewsArticle = {
  source: {
    id: string | null
    name: string
  }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

export type NewsResponse = {
  status: string
  totalResults: number
  articles: NewsArticle[]
}
