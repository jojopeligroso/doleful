import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ParallaxBackground from "@/components/parallax-background"

const blogPosts = [
  {
    id: 1,
    title: "The Hidden History of Dublin Castle",
    excerpt:
      "Discover the secrets and stories behind one of Dublin's most iconic landmarks that most tourists never hear about.",
    date: "May 15, 2025",
    author: "Siobhan O'Malley",
    category: "History",
    image:
      "https://readdy.ai/api/search-image?query=Dublin%20Castle%20exterior%20view%2C%20historic%20architecture%2C%20dramatic%20lighting%2C%20professional%20photography%2C%20no%20people&width=600&height=400&orientation=landscape",
    slug: "hidden-history-dublin-castle",
  },
  {
    id: 2,
    title: "5 Dublin Pubs That Changed Irish History",
    excerpt:
      "These five historic pubs weren't just places for a pint – they were the settings for revolutionary meetings and literary masterpieces.",
    date: "April 28, 2025",
    author: "Liam Byrne",
    category: "Culture",
    image:
      "https://readdy.ai/api/search-image?query=Historic%20Irish%20pub%20interior%2C%20wooden%20bar%2C%20traditional%20decor%2C%20atmospheric%20lighting%2C%20professional%20photography&width=600&height=400&orientation=landscape",
    slug: "dublin-pubs-irish-history",
  },
  {
    id: 3,
    title: "Walking in Joyce's Footsteps: A Literary Tour of Dublin",
    excerpt:
      "Follow the path of Leopold Bloom and experience Dublin through the eyes of James Joyce and his immortal characters.",
    date: "April 10, 2025",
    author: "Emma Walsh",
    category: "Literature",
    image:
      "https://readdy.ai/api/search-image?query=Statue%20of%20James%20Joyce%20in%20Dublin%2C%20historic%20street%20background%2C%20professional%20photography%2C%20artistic%20composition&width=600&height=400&orientation=landscape",
    slug: "joyce-literary-tour-dublin",
  },
  {
    id: 4,
    title: "The Best Street Food in Dublin: A Walking Guide",
    excerpt:
      "Combine sightseeing with culinary delights as we guide you through Dublin's best street food spots and markets.",
    date: "March 22, 2025",
    author: "Conor Murphy",
    category: "Food",
    image:
      "https://readdy.ai/api/search-image?query=Dublin%20food%20market%20with%20colorful%20stalls%2C%20artisanal%20food%20displays%2C%20vibrant%20atmosphere%2C%20professional%20food%20photography&width=600&height=400&orientation=landscape",
    slug: "dublin-street-food-guide",
  },
  {
    id: 5,
    title: "Dublin's Ghost Stories: Haunted Places to Visit",
    excerpt:
      "From Kilmainham Gaol to the Hellfire Club, explore the spookier side of Dublin's rich history and folklore.",
    date: "March 5, 2025",
    author: "Aoife Kelly",
    category: "Folklore",
    image:
      "https://readdy.ai/api/search-image?query=Historic%20Dublin%20street%20at%20night%2C%20foggy%20atmosphere%2C%20gas%20lamps%2C%20mysterious%20mood%2C%20professional%20photography%2C%20no%20people&width=600&height=400&orientation=landscape",
    slug: "dublin-ghost-stories-haunted-places",
  },
  {
    id: 6,
    title: "Sustainable Tourism in Dublin: How to Travel Responsibly",
    excerpt:
      "Learn how to minimize your environmental impact while maximizing your Dublin experience with these eco-friendly tips.",
    date: "February 18, 2025",
    author: "Siobhan O'Malley",
    category: "Travel Tips",
    image:
      "https://readdy.ai/api/search-image?query=Person%20using%20reusable%20water%20bottle%20while%20looking%20at%20Dublin%20city%20map%2C%20sustainable%20tourism%2C%20professional%20photography&width=600&height=400&orientation=landscape",
    slug: "sustainable-tourism-dublin",
  },
]

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <ParallaxBackground
        imageUrl="https://readdy.ai/api/search-image?query=Antique%20books%20and%20maps%20of%20Dublin%2C%20quill%20pen%2C%20atmospheric%20lighting%2C%20storytelling%20concept%2C%20professional%20photography&width=1200&height=500&orientation=landscape"
        height="350px"
        opacity={1}
      >
        <div className="flex flex-col justify-center items-center text-center px-6 h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3">Tales & Trails Blog</h1>
          <p className="text-[#FAF9F6] mb-8 text-sm md:text-base max-w-2xl">
            Stories, insights, and guides to help you discover the real Dublin
          </p>
        </div>
      </ParallaxBackground>

      {/* Blog Categories */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <Button
            variant="outline"
            className="text-[#102A43] border-[#102A43] hover:bg-[#102A43] hover:text-white rounded-full"
          >
            All Posts
          </Button>
          <Button variant="ghost" className="text-[#102A43] hover:bg-[#102A43]/10 rounded-full">
            History
          </Button>
          <Button variant="ghost" className="text-[#102A43] hover:bg-[#102A43]/10 rounded-full">
            Culture
          </Button>
          <Button variant="ghost" className="text-[#102A43] hover:bg-[#102A43]/10 rounded-full">
            Literature
          </Button>
          <Button variant="ghost" className="text-[#102A43] hover:bg-[#102A43]/10 rounded-full">
            Food
          </Button>
          <Button variant="ghost" className="text-[#102A43] hover:bg-[#102A43]/10 rounded-full">
            Folklore
          </Button>
          <Button variant="ghost" className="text-[#102A43] hover:bg-[#102A43]/10 rounded-full">
            Travel Tips
          </Button>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#e6a54a] text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 mb-2">
                  {post.date} • By {post.author}
                </div>
                <CardTitle className="text-xl font-serif text-[#102A43]">{post.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Link href={`/blog/${post.slug}`} className="text-[#2E9CCA] font-medium hover:underline">
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="w-8 h-8 p-0">
              <i className="fas fa-chevron-left text-xs"></i>
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-[#102A43] text-white">
              1
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              2
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              3
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 p-0">
              <i className="fas fa-chevron-right text-xs"></i>
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-[#f8f9fa] py-12 px-4 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#102A43] mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-[#102A43] text-sm md:text-base mb-6">
            Get the latest stories, tour updates, and Dublin insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="bg-[#e6a54a] hover:bg-[#d69a40] text-white">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
