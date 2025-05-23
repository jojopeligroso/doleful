import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParallaxBackground from "@/components/parallax-background"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <ParallaxBackground
        imageUrl="https://readdy.ai/api/search-image?query=Historic%20Dublin%20cityscape%20with%20Georgian%20architecture%2C%20cobblestone%20streets%2C%20dramatic%20sky%2C%20professional%20travel%20photography%2C%20high%20resolution&width=1200&height=500&orientation=landscape"
        height="400px"
        opacity={1}
      >
        <div className="flex flex-col justify-center items-center text-center px-6 h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3">Our Story</h1>
          <p className="text-[#FAF9F6] mb-8 text-sm md:text-base max-w-2xl">
            Passionate locals sharing Dublin's hidden stories and forgotten histories
          </p>
        </div>
      </ParallaxBackground>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#102A43] mb-4">Our Beginning</h2>
            <p className="text-[#102A43] text-sm md:text-base leading-relaxed mb-4">
              Tales and Trails was born from a simple observation: tourists were walking past some of Dublin's most
              fascinating stories without ever knowing they were there. Founded in 2018 by Dublin natives Siobhan
              O'Malley and Liam Byrne, our company began with a mission to reveal the hidden narratives of our beloved
              city.
            </p>
            <p className="text-[#102A43] text-sm md:text-base leading-relaxed">
              Both Siobhan and Liam had backgrounds in Irish history and literature, and they combined their expertise
              to create tours that went beyond the typical tourist experience. They wanted visitors to feel the
              authentic pulse of Dublin, to hear the whispers of its past, and to connect with the city on a deeper
              level.
            </p>
          </div>
          <div className="order-first md:order-last">
            <Image
              src="https://readdy.ai/api/search-image?query=Two%20professional%20tour%20guides%20in%20casual%20smart%20attire%20discussing%20historical%20map%20of%20Dublin%2C%20smiling%2C%20Georgian%20architecture%20background%2C%20natural%20lighting%2C%20professional%20photography&width=600&height=400&orientation=landscape"
              alt="Tales & Trails Founders"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <Image
              src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20tour%20guides%20in%20casual%20professional%20attire%2C%20different%20ages%20and%20ethnicities%2C%20standing%20together%20in%20historic%20Dublin%20setting%2C%20friendly%20and%20approachable%2C%20natural%20lighting%2C%20professional%20photography&width=600&height=400&orientation=landscape"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#102A43] mb-4">Our Team</h2>
            <p className="text-[#102A43] text-sm md:text-base leading-relaxed mb-4">
              Today, Tales and Trails has grown to include a diverse team of passionate guides, each bringing their
              unique perspective and expertise to our tours. Our guides include historians, archaeologists, writers,
              actors, and musicians – all united by their love for Dublin and their talent for storytelling.
            </p>
            <p className="text-[#102A43] text-sm md:text-base leading-relaxed">
              We carefully select our guides not just for their knowledge, but for their ability to connect with people
              and bring history to life. Each guide undergoes extensive training in both historical content and
              storytelling techniques, ensuring that every tour is as entertaining as it is informative.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#102A43] mb-4">Our Philosophy</h2>
            <p className="text-[#102A43] text-sm md:text-base leading-relaxed mb-4">
              At Tales and Trails, we believe that the best way to experience a city is through its stories. We're
              committed to providing tours that are:
            </p>
            <ul className="list-disc pl-5 mb-4 text-[#102A43] text-sm md:text-base leading-relaxed">
              <li>
                <strong>Authentic:</strong> We share the real Dublin, not a sanitized tourist version
              </li>
              <li>
                <strong>Engaging:</strong> Our stories captivate and entertain, making history come alive
              </li>
              <li>
                <strong>Intimate:</strong> Small group sizes ensure a personal experience
              </li>
              <li>
                <strong>Inclusive:</strong> We welcome all and make our tours accessible to everyone
              </li>
              <li>
                <strong>Sustainable:</strong> We're committed to responsible tourism that benefits local communities
              </li>
            </ul>
          </div>
          <div className="order-first md:order-last">
            <Image
              src="https://readdy.ai/api/search-image?query=Tour%20guide%20gesturing%20animatedly%20while%20telling%20story%20to%20small%20engaged%20group%20of%20tourists%2C%20historic%20Dublin%20street%20setting%2C%20natural%20lighting%2C%20candid%20moment%2C%20professional%20photography&width=600&height=400&orientation=landscape"
              alt="Tour Guide Storytelling"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#102A43] mb-6">
            Join Us on a Journey Through Dublin's Stories
          </h2>
          <p className="text-[#102A43] text-sm md:text-base leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you're a first-time visitor or a lifelong Dubliner, we invite you to experience the city through our
            eyes. Our tours will take you beyond the guidebooks, revealing the heart and soul of Dublin through its most
            compelling stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/offerings">
              <Button className="bg-[#e6a54a] hover:bg-[#d69a40] text-white px-8 py-2 rounded-md w-full sm:w-auto">
                Explore Our Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-[#2E9CCA] text-[#2E9CCA] hover:bg-[#2E9CCA] hover:text-white px-8 py-2 rounded-md w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-[#f8f9fa] py-12 px-4 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#102A43] mb-8 text-center">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                "The Ancient Dublin Tour was the highlight of our trip. Our guide Liam was incredibly knowledgeable and
                brought the city's history to life with his engaging stories."
              </p>
              <p className="font-semibold">- Sarah J., United States</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                "As a history buff, I've taken many walking tours, but Tales and Trails stands out. The small group size
                and the guide's passion made it feel like a friend showing you around their hometown."
              </p>
              <p className="font-semibold">- Thomas L., Germany</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                "We booked a bespoke tour for our family reunion, and it exceeded all expectations. Siobhan tailored the
                experience to our Irish ancestry and even helped us locate our great-grandparents' old neighborhood."
              </p>
              <p className="font-semibold">- The O'Brien Family, Australia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
