"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 w-full bg-[#102A43] text-white z-50 px-4 md:px-8 lg:px-16 py-3 flex justify-between items-center transition-all duration-300",
          scrolled && "shadow-md",
        )}
      >
        <Link href="/" className="text-xl md:text-2xl font-serif tracking-wide pl-2 md:pl-4">
          Tales & Trails
        </Link>
        <div className="hidden md:flex space-x-8 items-center text-base">
          <Link
            href="/"
            className={cn("hover:text-gray-200 font-serif transition-colors", isActive("/") && "text-[#e6a54a]")}
          >
            Home
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent font-serif">
                  Offerings
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/offerings"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#102A4399] to-[#102A43cc] p-6 no-underline outline-none focus:shadow-md"
                          onClick={closeMenu}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">Our Tours</div>
                          <p className="text-sm leading-tight text-white/90">
                            Discover the hidden stories behind Dublin's historic streets with our personalized walking
                            tours
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/offerings/ancient-dublin"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
                          onClick={closeMenu}
                        >
                          <div className="text-sm font-medium leading-none">Ancient Dublin Tour</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                            Walk through 1,000 years of history on Dublin's oldest streets
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/offerings/pub-culture"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
                          onClick={closeMenu}
                        >
                          <div className="text-sm font-medium leading-none">Pub Culture Tour</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                            Experience the heart of Irish social life through its historic pubs
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/offerings/bespoke"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
                          onClick={closeMenu}
                        >
                          <div className="text-sm font-medium leading-none">Bespoke Tours</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                            Customized private tours tailored to your interests and schedule
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="/about"
            className={cn("hover:text-gray-200 font-serif transition-colors", isActive("/about") && "text-[#e6a54a]")}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={cn("hover:text-gray-200 font-serif transition-colors", isActive("/blog") && "text-[#e6a54a]")}
          >
            Blog
          </Link>
          <Link
            href="/planner"
            className={cn("hover:text-gray-200 font-serif transition-colors", isActive("/planner") && "text-[#e6a54a]")}
          >
            Planner
          </Link>
          <Link
            href="/contact"
            className={cn("hover:text-gray-200 font-serif transition-colors", isActive("/contact") && "text-[#e6a54a]")}
          >
            Contact
          </Link>
        </div>
        <button className="text-lg md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#102A43] z-40 pt-16 px-4 md:hidden">
          <div className="flex flex-col space-y-4 text-white">
            <Link
              href="/"
              className={cn("py-3 px-4 text-lg font-serif border-b border-gray-700", isActive("/") && "text-[#e6a54a]")}
              onClick={closeMenu}
            >
              Home
            </Link>
            <div className="py-3 px-4 text-lg font-serif border-b border-gray-700">
              <div className="flex justify-between items-center">
                <Link href="/offerings" onClick={closeMenu}>
                  Offerings
                </Link>
              </div>
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/offerings/ancient-dublin"
                  className="block py-1 text-sm text-gray-300 hover:text-white"
                  onClick={closeMenu}
                >
                  Ancient Dublin Tour
                </Link>
                <Link
                  href="/offerings/pub-culture"
                  className="block py-1 text-sm text-gray-300 hover:text-white"
                  onClick={closeMenu}
                >
                  Pub Culture Tour
                </Link>
                <Link
                  href="/offerings/bespoke"
                  className="block py-1 text-sm text-gray-300 hover:text-white"
                  onClick={closeMenu}
                >
                  Bespoke Tours
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className={cn(
                "py-3 px-4 text-lg font-serif border-b border-gray-700",
                isActive("/about") && "text-[#e6a54a]",
              )}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={cn(
                "py-3 px-4 text-lg font-serif border-b border-gray-700",
                isActive("/blog") && "text-[#e6a54a]",
              )}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href="/planner"
              className={cn(
                "py-3 px-4 text-lg font-serif border-b border-gray-700",
                isActive("/planner") && "text-[#e6a54a]",
              )}
              onClick={closeMenu}
            >
              Planner
            </Link>
            <Link
              href="/contact"
              className={cn(
                "py-3 px-4 text-lg font-serif border-b border-gray-700",
                isActive("/contact") && "text-[#e6a54a]",
              )}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Tab Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 grid grid-cols-5 text-center z-40">
        <Link href="/" className="flex flex-col items-center py-2 text-[#102A43]">
          <i className="fas fa-home text-lg"></i>
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/offerings" className="flex flex-col items-center py-2 text-[#102A43]">
          <i className="fas fa-map-marked-alt text-lg"></i>
          <span className="text-xs mt-1">Tours</span>
        </Link>
        <Link href="/planner" className="flex flex-col items-center py-2 text-[#102A43]">
          <i className="fas fa-calendar-alt text-lg"></i>
          <span className="text-xs mt-1">Planner</span>
        </Link>
        <Link href="/blog" className="flex flex-col items-center py-2 text-[#102A43]">
          <i className="fas fa-book text-lg"></i>
          <span className="text-xs mt-1">Blog</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center py-2 text-[#102A43]">
          <i className="fas fa-envelope text-lg"></i>
          <span className="text-xs mt-1">Contact</span>
        </Link>
      </div>
    </>
  )
}
