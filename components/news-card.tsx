import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow md:flex">
      <div className="relative h-48 md:h-auto md:w-1/3 bg-muted flex-shrink-0">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <CardTitle className="mb-2">{article.title}</CardTitle>
              <Badge variant="outline" className="mb-3">
                {article.category}
              </Badge>
            </div>
          </div>
          <CardDescription>{article.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </CardContent>
      </div>
    </Card>
  )
}
