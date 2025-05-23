import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ParallaxBackground from "@/components/parallax-background"

const tours = [
  {
    id: 1,
    title: "Ancient Dublin Tour",
    description: "Walk through 1,000 years of history on Dublin's oldest streets",
    longDescription:
      "Step back in time and discover the fascinating history of Dublin's medieval quarter. This tour takes you through narrow cobbled streets, ancient city walls, and historic landmarks that tell the story of Dublin's evolution from Viking settlement to modern capital.",
    duration: "2.5 hours",
    price: "€35",
    difficulty: "Easy",
    image:
      "https://readdy.ai/api/search-image?query=Ancient%20Irish%20street%20with%20historic%20stone%20buildings%2C%20winding%20cobblestone%20paths%2C%20medieval%20architecture%2C%20warm%20atmospheric%20lighting%2C%20no%20people%2C%20charming%20storefronts%20with%20traditional%20signage%2C%20professional%20travel%20photography%2C%20high%20resolution&width=600&height=400&seq=2&orientation=landscape",
    slug: "ancient-dublin",
  },
  {
    id: 2,
    title: "Pub Culture Tour",
    description: "Experience the heart of Irish social life through its historic pubs",
    longDescription:
      "More than just places to drink, Dublin's pubs are cultural institutions with rich histories and traditions. Join us as we visit some of the city's most historic and character-filled establishments, learning about their famous patrons, unique stories, and role in shaping Irish culture.",
    duration: "3 hours",
    price: "€40",
    difficulty: "Easy",
    image:
      "https://readdy.ai/api/search-image?query=Traditional%20Irish%20pub%20interior%20with%20wooden%20bar%2C%20cozy%20lighting%2C%20historic%20decor%2C%20beer%20taps%2C%20authentic%20atmosphere%2C%20no%20people%20visible%2C%20professional%20travel%20photography%2C%20high%20resolution&width=600&height=400&seq=3&orientation=landscape",
    slug: "pub-culture",
  },
  {
    id: 3,
    title: "Bespoke Tours",
    description: "Customized private tours tailored to your interests and schedule",
    longDescription:
      "Looking for something special? Our bespoke tours are fully customized to your interests, pace, and schedule. Whether you're tracing family history, exploring specific architectural periods, or seeking out hidden gems, our expert guides will create a personalized experience just for you.",
    duration: "Flexible",
    price: "From €150",
    difficulty: "Customizable",
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20senior%20couple%20in%20their%2050s%2C%20holding%20hands%2C%20woman%20leaning%20affectionately%20on%20mans%20shoulder%2C%20both%20smiling%20warmly%20while%20listening%20intently%2C%20historic%20Irish%20stone%20buildings%20and%20charming%20town%20square%20in%20soft%20focus%20background%2C%20golden%20hour%20lighting%2C%20candid%20moment%2C%20professional%20travel%20photography%2C%20shallow%20depth%20of%20field%2C%20emotional%20connection&width=600&height=400&seq=4&orientation=landscape",
    slug: "bespoke",
  },
  {
    id: 4,
    title: "Literary Dublin",
    description: "Follow in the footsteps of Joyce, Yeats, Wilde, and other literary giants",
    longDescription:
      "Dublin has produced some of the world's greatest writers, and this tour celebrates their legacy. Visit the haunts of James Joyce, Oscar Wilde, W.B. Yeats, and other literary giants. See the places that inspired their works and hear the stories behind their most famous creations.",
    duration: "2.5 hours",
    price: "€35",
    difficulty: "Easy",
    image:
      "https://readdy.ai/api/search-image?query=Statue%20of%20James%20Joyce%20in%20Dublin%2C%20historic%20street%20background%2C%20professional%20photography%2C%20artistic%20composition&width=600&height=400&orientation=landscape",
    slug: "literary-dublin",
  },
  {
    id: 5,
    title: "Dublin After Dark",
    description: "Explore the city's haunted locations and hear tales of ghosts and mysteries",
    longDescription:
      "As darkness falls, Dublin reveals its spookier side. This evening tour takes you to reportedly haunted locations throughout the city, sharing tales of ghosts, mysteries, and the darker chapters of Dublin's past. Not for the faint of heart!",
    duration: "2 hours",
    price: "€30",
    difficulty: "Easy",
    image:
      "https://readdy.ai/api/search-image?query=Historic%20Dublin%20street%20at%20night%2C%20foggy%20atmosphere%2C%20gas%20lamps%2C%20mysterious%20mood%2C%20professional%20photography%2C%20no%20people&width=600&height=400&orientation=landscape",
    slug: "dublin-after-dark",
  },
  {
    id: 6,
    title: "Revolutionary Dublin",
    description: "Trace the path of Ireland's struggle for independence through key Dublin sites",
    longDescription:
      "Dublin was at the center of Ireland's fight for independence. This tour visits key locations from the 1916 Easter Rising and other pivotal moments in Irish history. Learn about the revolutionaries who shaped the nation and see where history was made.",
    duration: "3 hours",
    price: "€35",
    difficulty: "Moderate",
    image:
      "https://readdy.ai/api/search-image?query=GPO%20building%20Dublin%20Ireland%2C%20historic%20architecture%2C%20site%20of%201916%20Easter%20Rising%2C%20professional%20photography%2C%20dramatic%20lighting&width=600&height=400&orientation=landscape",
    slug: "revolutionary-dublin",
  },
]

export default function OfferingsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <ParallaxBackground
        imageUrl="https://readdy.ai/api/search-image?query=Dublin%20cityscape%20with%20historic%20buildings%2C%20River%20Liffey%2C%20dramatic%20sky%2C%20professional%20travel%20photography%2C%20high%20resolution&width=1200&height=400&orientation=landscape"
        height="350px"
        opacity={1}
      >
        <div className="flex flex-col justify-center items-center text-center px-6 h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3">Our Dublin Tours</h1>
          <p className="text-[#FAF9F6] mb-8 text-sm md:text-base max-w-2xl">
            Discover the hidden stories behind Dublin's historic streets with our expert guides
          </p>
        </div>
      </ParallaxBackground>

      {/* Tours Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-4">Experience Dublin Like a Local</h2>
          <p className="text-[#102A43] text-sm md:text-base">
            Our walking tours are designed to give you an authentic Dublin experience, going beyond the typical tourist
            attractions to reveal the city's true character. Led by passionate local guides who know Dublin inside and
            out, each tour combines historical insights with engaging storytelling.
          </p>
        </div>

        {/* Tour Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#102A43]">{tour.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{tour.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-700 mb-4">{tour.longDescription}</p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-[#f8f9fa] p-2 rounded text-center">
                    <div className="text-[#102A43] font-medium">Duration</div>
                    <div className="text-gray-600">{tour.duration}</div>
                  </div>
                  <div className="bg-[#f8f9fa] p-2 rounded text-center">
                    <div className="text-[#102A43] font-medium">Price</div>
                    <div className="text-gray-600">{tour.price}</div>
                  </div>
                  <div className="bg-[#f8f9fa] p-2 rounded text-center">
                    <div className="text-[#102A43] font-medium">Difficulty</div>
                    <div className="text-gray-600">{tour.difficulty}</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/offerings/${tour.slug}`} className="w-full">
                  <Button className="w-full bg-[#2E9CCA] hover:bg-[#2589b5] text-white rounded-md">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Group Bookings */}
      <div className="bg-[#f8f9fa] py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-4">Group & Corporate Bookings</h2>
              <p className="text-[#102A43] text-sm md:text-base mb-4">
                Planning a team-building event, school trip, or family reunion? Our tours can be adapted for groups of
                all sizes and interests. We offer special rates for groups of 10 or more, and can customize any tour to
                meet your specific needs.
              </p>
              <p className="text-[#102A43] text-sm md:text-base mb-6">
                Corporate clients appreciate our ability to weave Dublin's business history and innovation stories into
                engaging experiences that inspire and educate teams while fostering connection.
              </p>
              <Link href="/contact">
                <Button className="bg-[#e6a54a] hover:bg-[#d69a40] text-white px-8 py-2 rounded-md">
                  Inquire About Group Rates
                </Button>
              </Link>
            </div>
            <div>
              <Image
                src="https://readdy.ai/api/search-image?query=Corporate%20group%20on%20guided%20tour%20in%20Dublin%2C%20diverse%20professionals%20listening%20to%20guide%2C%20historic%20building%20background%2C%20professional%20photography&width=600&height=400&orientation=landscape"
                alt="Corporate Group Tour"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-8 text-center">What Our Guests Say</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="text-[#e6a54a]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <p className="italic text-gray-600 mb-4">
              "Our guide Siobhan was incredible! Her knowledge of Dublin's history was impressive, but it was her
              storytelling ability that really made the tour special. We felt like we were walking through the pages of
              history."
            </p>
            <p className="font-semibold">- James & Maria, United States</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="text-[#e6a54a]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <p className="italic text-gray-600 mb-4">
              "The Pub Culture Tour was the highlight of our trip to Dublin. Liam showed us places we never would have
              found on our own, and shared fascinating stories about each location. Plus, the included pint at the end
              was delicious!"
            </p>
            <p className="font-semibold">- Thomas & Sophie, Germany</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="text-[#e6a54a]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <p className="italic text-gray-600 mb-4">
              "We booked the Bespoke Tour for our family with Irish ancestry. The team went above and beyond to research
              our family history and create a tour that took us to places connected to our ancestors. An unforgettable
              experience!"
            </p>
            <p className="font-semibold">- The O'Connor Family, Australia</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#102A43] text-white py-12 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Ready to Discover the Real Dublin?</h2>
          <p className="text-gray-300 mb-8 text-sm md:text-base">
            Book your tour today and experience Dublin through the eyes of those who know and love it best. Our small
            group sizes ensure a personal experience, and our expert guides bring the city's stories to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/planner">
              <Button className="w-full sm:w-auto bg-[#e6a54a] hover:bg-[#d69a40] text-white px-8 py-2 rounded-md">
                Plan Your Experience
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#102A43] px-8 py-2 rounded-md"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
