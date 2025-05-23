"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import ParallaxBackground from "@/components/parallax-background"

export default function PlannerPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [groupSize, setGroupSize] = useState<number[]>([2])
  const [duration, setDuration] = useState<string>("half-day")
  const [interests, setInterests] = useState<string[]>([])
  const [budget, setBudget] = useState<number[]>([100])

  const handleInterestChange = (interest: string) => {
    setInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <ParallaxBackground
        imageUrl="https://readdy.ai/api/search-image?query=Tourist%20looking%20at%20map%20of%20Dublin%2C%20planning%20route%2C%20historic%20buildings%20background%2C%20travel%20planning%20concept%2C%20professional%20photography&width=1200&height=400&orientation=landscape"
        height="300px"
        opacity={1}
      >
        <div className="flex flex-col justify-center items-center text-center px-6 h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3">
            Plan Your Dublin Adventure
          </h1>
          <p className="text-[#FAF9F6] mb-8 text-sm md:text-base max-w-2xl">
            Create your perfect Dublin experience with our interactive trip planner
          </p>
        </div>
      </ParallaxBackground>

      {/* Planner Introduction */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-4">Customize Your Dublin Experience</h2>
          <p className="text-[#102A43] text-sm md:text-base">
            Whether you're visiting for a day or a week, our planner helps you create the perfect itinerary based on
            your interests, schedule, and budget. Simply fill in your preferences below, and we'll suggest the ideal
            combination of tours and experiences.
          </p>
        </div>

        {/* Planner Tabs */}
        <Tabs defaultValue="preferences" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="preferences">Your Preferences</TabsTrigger>
            <TabsTrigger value="itinerary">Suggested Itinerary</TabsTrigger>
            <TabsTrigger value="booking">Book Your Plan</TabsTrigger>
          </TabsList>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Tell Us About Your Trip</CardTitle>
                <CardDescription>Help us understand what you're looking for in your Dublin experience.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Visit Dates */}
                <div>
                  <h3 className="text-lg font-medium text-[#102A43] mb-3">When are you visiting?</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <Label htmlFor="arrival" className="block text-sm font-medium text-[#102A43] mb-2">
                        Select your dates
                      </Label>
                      <div className="border rounded-md p-3">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="mx-auto"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Label className="block text-sm font-medium text-[#102A43] mb-2">Trip Duration</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="half-day"
                            name="duration"
                            value="half-day"
                            checked={duration === "half-day"}
                            onChange={() => setDuration("half-day")}
                            className="text-[#2E9CCA] focus:ring-[#2E9CCA]"
                          />
                          <label htmlFor="half-day" className="text-sm text-gray-700">
                            Half day (2-4 hours)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="full-day"
                            name="duration"
                            value="full-day"
                            checked={duration === "full-day"}
                            onChange={() => setDuration("full-day")}
                            className="text-[#2E9CCA] focus:ring-[#2E9CCA]"
                          />
                          <label htmlFor="full-day" className="text-sm text-gray-700">
                            Full day (5-8 hours)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="multi-day"
                            name="duration"
                            value="multi-day"
                            checked={duration === "multi-day"}
                            onChange={() => setDuration("multi-day")}
                            className="text-[#2E9CCA] focus:ring-[#2E9CCA]"
                          />
                          <label htmlFor="multi-day" className="text-sm text-gray-700">
                            Multiple days
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Group Size */}
                <div>
                  <h3 className="text-lg font-medium text-[#102A43] mb-3">How many people?</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">
                        Group Size: {groupSize[0]} {groupSize[0] === 1 ? "person" : "people"}
                      </span>
                      <span className="text-sm text-gray-500">(Max: 15)</span>
                    </div>
                    <Slider
                      defaultValue={[2]}
                      max={15}
                      min={1}
                      step={1}
                      value={groupSize}
                      onValueChange={setGroupSize}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-lg font-medium text-[#102A43] mb-3">What are you interested in?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="history"
                        checked={interests.includes("history")}
                        onCheckedChange={() => handleInterestChange("history")}
                      />
                      <label htmlFor="history" className="text-sm text-gray-700">
                        History & Heritage
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="literature"
                        checked={interests.includes("literature")}
                        onCheckedChange={() => handleInterestChange("literature")}
                      />
                      <label htmlFor="literature" className="text-sm text-gray-700">
                        Literature & Arts
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="food"
                        checked={interests.includes("food")}
                        onCheckedChange={() => handleInterestChange("food")}
                      />
                      <label htmlFor="food" className="text-sm text-gray-700">
                        Food & Drink
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="music"
                        checked={interests.includes("music")}
                        onCheckedChange={() => handleInterestChange("music")}
                      />
                      <label htmlFor="music" className="text-sm text-gray-700">
                        Music & Nightlife
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="nature"
                        checked={interests.includes("nature")}
                        onCheckedChange={() => handleInterestChange("nature")}
                      />
                      <label htmlFor="nature" className="text-sm text-gray-700">
                        Nature & Outdoors
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="photography"
                        checked={interests.includes("photography")}
                        onCheckedChange={() => handleInterestChange("photography")}
                      />
                      <label htmlFor="photography" className="text-sm text-gray-700">
                        Photography
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="architecture"
                        checked={interests.includes("architecture")}
                        onCheckedChange={() => handleInterestChange("architecture")}
                      />
                      <label htmlFor="architecture" className="text-sm text-gray-700">
                        Architecture
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="folklore"
                        checked={interests.includes("folklore")}
                        onCheckedChange={() => handleInterestChange("folklore")}
                      />
                      <label htmlFor="folklore" className="text-sm text-gray-700">
                        Myths & Folklore
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="family"
                        checked={interests.includes("family")}
                        onCheckedChange={() => handleInterestChange("family")}
                      />
                      <label htmlFor="family" className="text-sm text-gray-700">
                        Family-Friendly
                      </label>
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <h3 className="text-lg font-medium text-[#102A43] mb-3">What's your budget per person?</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Budget: €{budget[0]}</span>
                      <span className="text-sm text-gray-500">(€50 - €300)</span>
                    </div>
                    <Slider
                      defaultValue={[100]}
                      max={300}
                      min={50}
                      step={10}
                      value={budget}
                      onValueChange={setBudget}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <h3 className="text-lg font-medium text-[#102A43] mb-3">Any special requirements?</h3>
                  <Textarea
                    placeholder="Tell us about any accessibility needs, dietary restrictions, or other special requirements."
                    className="w-full min-h-[100px] border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#e6a54a] hover:bg-[#d69a40] text-white py-2 rounded-md">
                  Generate My Itinerary
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Itinerary Tab */}
          <TabsContent value="itinerary" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Your Personalized Dublin Itinerary</CardTitle>
                <CardDescription>Based on your preferences, here's what we recommend for your visit.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-[#f8f9fa] p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-[#102A43]">Morning (10:00 AM - 12:30 PM)</h3>
                      <span className="text-sm bg-[#e6a54a] text-white px-2 py-1 rounded">History & Heritage</span>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <Image
                          src="https://readdy.ai/api/search-image?query=Ancient%20Irish%20street%20with%20historic%20stone%20buildings%2C%20winding%20cobblestone%20paths%2C%20medieval%20architecture%2C%20warm%20atmospheric%20lighting%2C%20no%20people%2C%20charming%20storefronts%20with%20traditional%20signage%2C%20professional%20travel%20photography%2C%20high%20resolution&width=80&height=80&seq=2&orientation=square"
                          alt="Ancient Dublin Tour"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#102A43]">Ancient Dublin Tour</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Walk through 1,000 years of history on Dublin's oldest streets
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="fas fa-clock mr-1"></i> 2.5 hours
                          <span className="mx-2">•</span>
                          <i className="fas fa-euro-sign mr-1"></i> €35 per person
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f8f9fa] p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-[#102A43]">Lunch Break (12:30 PM - 2:00 PM)</h3>
                      <span className="text-sm bg-[#2E9CCA] text-white px-2 py-1 rounded">Food & Drink</span>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <Image
                          src="https://readdy.ai/api/search-image?query=Traditional%20Irish%20pub%20lunch%2C%20hearty%20food%2C%20pint%20of%20beer%2C%20cozy%20atmosphere%2C%20professional%20food%20photography&width=80&height=80&orientation=square"
                          alt="Pub Lunch"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#102A43]">Traditional Pub Lunch</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Enjoy authentic Irish cuisine at a historic local pub
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="fas fa-clock mr-1"></i> 1.5 hours
                          <span className="mx-2">•</span>
                          <i className="fas fa-euro-sign mr-1"></i> €20-30 per person
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f8f9fa] p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-[#102A43]">Afternoon (2:00 PM - 4:30 PM)</h3>
                      <span className="text-sm bg-[#4CAF50] text-white px-2 py-1 rounded">Literature & Arts</span>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <Image
                          src="https://readdy.ai/api/search-image?query=Statue%20of%20James%20Joyce%20in%20Dublin%2C%20historic%20street%20background%2C%20professional%20photography%2C%20artistic%20composition&width=80&height=80&orientation=square"
                          alt="Literary Dublin Tour"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#102A43]">Literary Dublin Tour</h4>
                        <p className="text-sm text-gray-600 mb-2">Follow in the footsteps of Joyce, Yeats, and Wilde</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="fas fa-clock mr-1"></i> 2.5 hours
                          <span className="mx-2">•</span>
                          <i className="fas fa-euro-sign mr-1"></i> €35 per person
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f8f9fa] p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-[#102A43]">Evening (5:00 PM - 7:30 PM)</h3>
                      <span className="text-sm bg-[#9C27B0] text-white px-2 py-1 rounded">Music & Nightlife</span>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <Image
                          src="https://readdy.ai/api/search-image?query=Traditional%20Irish%20music%20session%20in%20pub%2C%20musicians%20playing%20instruments%2C%20warm%20atmosphere%2C%20professional%20photography&width=80&height=80&orientation=square"
                          alt="Traditional Music Session"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#102A43]">Traditional Music Experience</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Enjoy authentic Irish music in a historic pub setting
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="fas fa-clock mr-1"></i> 2.5 hours
                          <span className="mx-2">•</span>
                          <i className="fas fa-euro-sign mr-1"></i> €40 per person
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t pt-6">
                  <h3 className="font-medium text-[#102A43] mb-4">Itinerary Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f8f9fa] p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Total Duration</p>
                      <p className="font-medium text-[#102A43]">9 hours</p>
                    </div>
                    <div className="bg-[#f8f9fa] p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Total Cost</p>
                      <p className="font-medium text-[#102A43]">€130 per person</p>
                    </div>
                    <div className="bg-[#f8f9fa] p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Walking Distance</p>
                      <p className="font-medium text-[#102A43]">4.5 km</p>
                    </div>
                    <div className="bg-[#f8f9fa] p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Accessibility</p>
                      <p className="font-medium text-[#102A43]">Mostly accessible</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto bg-[#e6a54a] hover:bg-[#d69a40] text-white py-2 rounded-md">
                  Book This Itinerary
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-[#2E9CCA] text-[#2E9CCA] hover:bg-[#2E9CCA] hover:text-white"
                >
                  Modify Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Booking Tab */}
          <TabsContent value="booking" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Book Your Dublin Experience</CardTitle>
                <CardDescription>Complete your booking details to secure your personalized itinerary.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="booking-name" className="block text-sm font-medium text-[#102A43] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="booking-name"
                        placeholder="Enter your name"
                        className="w-full border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="booking-email" className="block text-sm font-medium text-[#102A43] mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="booking-email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="booking-phone" className="block text-sm font-medium text-[#102A43] mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="booking-phone"
                        type="tel"
                        placeholder="Enter your contact number"
                        className="w-full border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="booking-nationality" className="block text-sm font-medium text-[#102A43] mb-1">
                        Nationality
                      </Label>
                      <Input
                        id="booking-nationality"
                        placeholder="Enter your nationality"
                        className="w-full border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="booking-special" className="block text-sm font-medium text-[#102A43] mb-1">
                      Special Requests or Notes
                    </Label>
                    <Textarea
                      id="booking-special"
                      placeholder="Any additional information we should know about your booking"
                      className="w-full min-h-[100px] border-gray-300 focus:border-[#2E9CCA] focus:ring-[#2E9CCA]"
                    />
                  </div>

                  <div className="bg-[#f8f9fa] p-4 rounded-lg">
                    <h3 className="font-medium text-[#102A43] mb-3">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Ancient Dublin Tour</span>
                        <span>€35 x 2 people</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Literary Dublin Tour</span>
                        <span>€35 x 2 people</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Traditional Music Experience</span>
                        <span>€40 x 2 people</span>
                      </div>
                      <div className="border-t pt-2 mt-2 font-medium flex justify-between">
                        <span>Total</span>
                        <span>€220</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="booking-terms" required />
                    <label htmlFor="booking-terms" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-[#2E9CCA] hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-[#2E9CCA] hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#e6a54a] hover:bg-[#d69a40] text-white py-2 rounded-md">
                  Complete Booking
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Testimonials */}
      <div className="bg-[#f8f9fa] py-12 px-4 mt-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-8 text-center">
            What Our Guests Say About Their Custom Tours
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                "The planner tool helped us create the perfect day in Dublin. We were able to combine history,
                literature, and music all in one day, and it felt perfectly balanced."
              </p>
              <p className="font-semibold">- Michael & Lisa, Canada</p>
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
                "As a solo traveler with limited mobility, I was worried about finding suitable tours. The planner
                suggested accessible options that still gave me an authentic Dublin experience."
              </p>
              <p className="font-semibold">- Eleanor, United States</p>
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
                "We used the planner for our family of five, including three teenagers. The itinerary kept everyone
                engaged with a mix of history, ghost stories, and interactive experiences."
              </p>
              <p className="font-semibold">- The Johnson Family, Australia</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-serif font-semibold text-[#102A43] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#f8f9fa] p-6 rounded-lg">
            <h3 className="font-medium text-[#102A43] mb-2">Can I modify my itinerary after booking?</h3>
            <p className="text-sm text-gray-600">
              Yes, you can modify your itinerary up to 48 hours before your scheduled tour date. Contact us with your
              booking reference to make changes.
            </p>
          </div>
          <div className="bg-[#f8f9fa] p-6 rounded-lg">
            <h3 className="font-medium text-[#102A43] mb-2">Are the suggested itineraries guaranteed?</h3>
            <p className="text-sm text-gray-600">
              While we do our best to secure all elements of your itinerary, some experiences may be subject to
              availability. We'll always confirm all details before finalizing your booking.
            </p>
          </div>
          <div className="bg-[#f8f9fa] p-6 rounded-lg">
            <h3 className="font-medium text-[#102A43] mb-2">Can I book for a large group?</h3>
            <p className="text-sm text-gray-600">
              Yes! The planner supports groups of up to 15 people. For larger groups, please contact us directly for a
              customized experience.
            </p>
          </div>
          <div className="bg-[#f8f9fa] p-6 rounded-lg">
            <h3 className="font-medium text-[#102A43] mb-2">Do I need to pay in full when booking?</h3>
            <p className="text-sm text-gray-600">
              We require a 25% deposit to secure your booking, with the remaining balance due 7 days before your tour
              date. For bookings made less than 7 days in advance, full payment is required.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
