"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import ParallaxBackground from "@/components/parallax-background"

export default function ContactPage() {
  const [selectedTour, setSelectedTour] = useState<string>("")

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <ParallaxBackground
        imageUrl="https://readdy.ai/api/search-image?query=Dublin%20cityscape%20with%20River%20Liffey%2C%20bridges%2C%20historic%20architecture%2C%20dramatic%20sky%2C%20professional%20photography%2C%20panoramic%20view&width=1200&height=400&orientation=landscape"
        height="300px"
        opacity={1}
      >
        <div className="flex flex-col justify-center items-center text-center px-6 h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3">Contact Us</h1>
          <p className="text-[#FAF9F6] mb-8 text-sm md:text-base max-w-2xl">
            We're here to help you plan your perfect Dublin experience
          </p>
        </div>
      </ParallaxBackground>

      {/* Contact Information and Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-6">Get in Touch</h2>
            <p className="text-[#102A43] text-sm md:text-base mb-8">
              Have questions about our tours or need help planning your Dublin adventure? We'd love to hear from you!
              Fill out the form or contact us directly using the information below.
            </p>

            <div className="space-y-6">
              <Card className="border-none shadow-sm bg-[#f8f9fa]">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-[#e6a54a] text-white p-3 rounded-full">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#102A43] mb-1">Our Office</h3>
                    <p className="text-sm text-gray-600">
                      42 Grafton Street
                      <br />
                      Dublin 2, D02 PK71
                      <br />
                      Ireland
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-[#f8f9fa]">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-[#e6a54a] text-white p-3 rounded-full">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#102A43] mb-1">Email Us</h3>
                    <p className="text-sm text-gray-600">
                      General Inquiries: info@talesandtrails.ie
                      <br />
                      Booking: bookings@talesandtrails.ie
                      <br />
                      Private Tours: private@talesandtrails.ie
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-[#f8f9fa]">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-[#e6a54a] text-white p-3 rounded-full">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#102A43] mb-1">Call Us</h3>
                    <p className="text-sm text-gray-600">
                      Phone: +353 1 234 5678
                      <br />
                      WhatsApp: +353 87 123 4567
                      <br />
                      Hours: 9am - 6pm (GMT), Monday - Saturday
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-[#f8f9fa]">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-[#e6a54a] text-white p-3 rounded-full">
                    <i className="fas fa-share-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#102A43] mb-1">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="text-[#102A43] hover:text-[#e6a54a] transition-colors">
                        <i className="fab fa-instagram text-xl"></i>
                      </a>
                      <a href="#" className="text-[#102A43] hover:text-[#e6a54a] transition-colors">
                        <i className="fab fa-facebook-f text-xl"></i>
                      </a>
                      <a href="#" className="text-[#102A43] hover:text-[#e6a54a] transition-colors">
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                      <a href="#" className="text-[#102A43] hover:text-[#e6a54a] transition-colors">
                        <i className="fab fa-tiktok text-xl"></i>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#102A43] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="w-full border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#102A43] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-[#102A43] mb-1">
                    Phone Number <span className="text-gray-500 text-sm">(optional)</span>
                  </label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your contact number"
                    className="w-full border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                  />
                </div>
                <div>
                  <label htmlFor="tour" className="block text-sm font-medium text-[#102A43] mb-1">
                    Interested In <span className="text-gray-500 text-sm">(optional)</span>
                  </label>
                  <Select value={selectedTour} onValueChange={setSelectedTour}>
                    <SelectTrigger className="w-full border-gray-300">
                      <SelectValue placeholder="Choose a tour" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ancient">Ancient Dublin Tour</SelectItem>
                      <SelectItem value="pub">Pub Culture Tour</SelectItem>
                      <SelectItem value="bespoke">Bespoke Tours</SelectItem>
                      <SelectItem value="arts">Arts & Crafts Experience</SelectItem>
                      <SelectItem value="match">Match Day Experience</SelectItem>
                      <SelectItem value="nightlife">Gig & Nightlife Experience</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#102A43] mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  placeholder="Enter message subject"
                  className="w-full border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#102A43] mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your interests, or anything in particular you would like to do, or any questions you might have."
                  className="w-full min-h-[120px] border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                  required
                />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="privacy" className="mt-1" required />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-[#2E9CCA] hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to Tales & Trails processing my data for the purpose of contacting me.
                </label>
              </div>
              <Button className="w-full bg-[#e6a54a] hover:bg-[#d69a40] text-white py-2 rounded-md">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] mt-12 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.0891720252697!2d-6.2617933!3d53.3414926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b76a3b529%3A0x2600c7a819c83012!2sGrafton%20Street%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1653044696754!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tales & Trails Office Location"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#f8f9fa] p-6 rounded-lg">
            <h3 className="font-medium text-[#102A43] mb-2">How do I book a tour?</h3>
            <p className="text-sm text-gray-600">
              You can book directly through our website by visiting the Tours page, or by contacting us via email or
              phone. We recommend booking at least 48 hours in advance to secure your spot.
            </p>
          </div>
          <div className="bg-[#f8f9fa] p-6 rounded-lg">
            <h3 className="font-medium text-[#102A43] mb-2">What happens if it rains?</h3>
            <p className="text-sm text-gray-600">
              Our tours run rain or shine! Dublin weather is unpredictable, so we recommend bringing a light raincoat or
              umbrella. In cases of severe weather, we may reschedule or offer alternatives.
            </p>
          </div>
          <div className="bg-[#f8f9fa] p-6 rounded-lg">
            <h3 className="font-medium text-[#102A43] mb-2">Are your tours accessible?</h3>
            <p className="text-sm text-gray-600">
              We strive to make our tours accessible to everyone. Most routes are wheelchair accessible, but some
              historic areas have cobblestones or steps. Please contact us about your specific needs, and we'll do our
              best to accommodate.
            </p>
          </div>
          <div className="bg-[#f8f9fa] p-6 rounded-lg">
            <h3 className="font-medium text-[#102A43] mb-2">Can I get a refund if I cancel?</h3>
            <p className="text-sm text-gray-600">
              We offer full refunds for cancellations made at least 48 hours before the tour. For cancellations within
              48 hours, we offer a 50% refund or the option to reschedule for a later date.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
