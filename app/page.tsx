import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ParallaxBackground from "@/components/parallax-background"

export default function Home() {
  return (
    <div className="relative w-full bg-white text-[#102A43]">
      {/* Hero Section with Parallax */}
      <ParallaxBackground
        imageUrl="https://readdy.ai/api/search-image?query=Beautiful%20panoramic%20view%20of%20historic%20Irish%20town%20with%20Victorian%20and%20Georgian%20architecture%2C%20winding%20cobblestone%20streets%2C%20dramatic%20evening%20sky%20with%20golden%20hour%20lighting%2C%20cinematic%20composition%2C%20high%20resolution%20photography%2C%20no%20people%20visible%2C%20atmospheric%20urban%20landscape%2C%20historic%20stone%20buildings&width=375&height=500&seq=1&orientation=portrait"
        height="500px"
        opacity={1}
      >
        <div className="flex flex-col justify-center items-center text-center px-6 h-full">
          <h1 className="text-3xl font-serif font-bold text-white mb-3">Explore Your Dublin</h1>
          <p className="text-[#FAF9F6] mb-8 text-sm">
            Discover the hidden stories behind Dublin's historic streets with our personalized walking tours
          </p>
          <Button className="bg-[#e6a54a] hover:bg-[#d69a40] text-white px-8 py-2 rounded-md">
            Start Your Journey
          </Button>
        </div>
      </ParallaxBackground>

      {/* Popular Tours Section */}
      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 bg-white">
        <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-6 text-center">Most Popular Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tour Card 1 */}
          <Card className="overflow-hidden shadow-md border border-gray-100">
            <div className="relative h-[140px] overflow-hidden">
              <Image
                src="https://readdy.ai/api/search-image?query=Ancient%20Irish%20street%20with%20historic%20stone%20buildings%2C%20winding%20cobblestone%20paths%2C%20medieval%20architecture%2C%20warm%20atmospheric%20lighting%2C%20no%20people%2C%20charming%20storefronts%20with%20traditional%20signage%2C%20professional%20travel%20photography%2C%20high%20resolution&width=375&height=140&seq=2&orientation=landscape"
                alt="Ancient Irish Town Tour"
                width={375}
                height={140}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-lg font-serif text-[#102A43]">Ancient Dublin Tour</CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Walk through 1,000 years of history on Dublin's oldest streets
              </CardDescription>
            </CardHeader>
            <CardFooter className="pt-0 pb-4">
              <Button className="bg-[#2E9CCA] hover:bg-[#2589b5] text-white w-full rounded-md">Learn More</Button>
            </CardFooter>
          </Card>
          {/* Tour Card 2 */}
          <Card className="overflow-hidden shadow-md border border-gray-100">
            <div className="relative h-[140px] overflow-hidden">
              <Image
                src="https://readdy.ai/api/search-image?query=Traditional%20Irish%20pub%20interior%20with%20wooden%20bar%2C%20cozy%20lighting%2C%20historic%20decor%2C%20beer%20taps%2C%20authentic%20atmosphere%2C%20no%20people%20visible%2C%20professional%20travel%20photography%2C%20high%20resolution&width=375&height=140&seq=3&orientation=landscape"
                alt="Pub Culture Tour"
                width={375}
                height={140}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-lg font-serif text-[#102A43]">Pub Culture Tour</CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Experience the heart of Irish social life through its historic pubs
              </CardDescription>
            </CardHeader>
            <CardFooter className="pt-0 pb-4">
              <Button className="bg-[#2E9CCA] hover:bg-[#2589b5] text-white w-full rounded-md">Learn More</Button>
            </CardFooter>
          </Card>
          {/* Tour Card 3 */}
          <Card className="overflow-hidden shadow-md border border-gray-100">
            <div className="relative h-[140px] overflow-hidden">
              <Image
                src="https://readdy.ai/api/search-image?query=Elegant%20senior%20couple%20in%20their%2050s%2C%20holding%20hands%2C%20woman%20leaning%20affectionately%20on%20mans%20shoulder%2C%20both%20smiling%20warmly%20while%20listening%20intently%2C%20historic%20Irish%20stone%20buildings%20and%20charming%20town%20square%20in%20soft%20focus%20background%2C%20golden%20hour%20lighting%2C%20candid%20moment%2C%20professional%20travel%20photography%2C%20shallow%20depth%20of%20field%2C%20emotional%20connection&width=375&height=140&seq=4&orientation=landscape"
                alt="Bespoke Tours"
                width={375}
                height={140}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-lg font-serif text-[#102A43]">Bespoke Tours</CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Customized private tours tailored to your interests and schedule
              </CardDescription>
            </CardHeader>
            <CardFooter className="pt-0 pb-4">
              <Button className="bg-[#2E9CCA] hover:bg-[#2589b5] text-white w-full rounded-md">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-6 text-center">
          <Button variant="link" className="text-[#2E9CCA] font-medium cursor-pointer">
            View All Tours <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 bg-[#f8f9fa]">
        <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-4 text-center">About Us</h2>
        <div className="mb-6">
          <Image
            src="https://readdy.ai/api/search-image?query=Professional%20tour%20guide%20showing%20historical%20Irish%20townhouse%20to%20tourists%2C%20friendly%20interaction%2C%20Georgian%20style%20architecture%20background%2C%20daytime%2C%20authentic%20travel%20experience%2C%20historic%20stone%20buildings%2C%20high%20quality%20travel%20photography&width=375&height=200&seq=5&orientation=landscape"
            alt="Irish Tour Guide"
            width={375}
            height={200}
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
        </div>
        <p className="text-[#102A43] text-sm leading-relaxed mb-4">
          Tales and Trails was founded by Dublin natives with a passion for storytelling and history. We believe that
          the best way to experience our city is through its stories – the legends, myths, and true tales that bring
          these ancient streets to life.
        </p>
        <p className="text-[#102A43] text-sm leading-relaxed">
          Our expert guides are historians, writers, and performers who know Dublin's hidden corners and secret
          histories. Each tour is crafted to provide an authentic, engaging experience that goes beyond the typical
          tourist attractions.
        </p>
        <div className="mt-6 text-center">
          <Link href="/about">
            <Button variant="outline" className="border-[#2E9CCA] text-[#2E9CCA] hover:bg-[#2E9CCA] hover:text-white">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
