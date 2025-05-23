import Link from "next/link"

export default function Footer() {
  return (
    <div className="bg-[#102A43] text-white px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" className="text-xl cursor-pointer hover:text-[#e6a54a] transition-colors">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-xl cursor-pointer hover:text-[#e6a54a] transition-colors">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-xl cursor-pointer hover:text-[#e6a54a] transition-colors">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="#" className="text-xl cursor-pointer hover:text-[#e6a54a] transition-colors">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6">
        <div>
          <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/offerings" className="hover:text-white">
                Tours
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/planner" className="hover:text-white">
                Planner
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Our Tours</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>
              <Link href="/offerings/ancient-dublin" className="hover:text-white">
                Ancient Dublin Tour
              </Link>
            </li>
            <li>
              <Link href="/offerings/pub-culture" className="hover:text-white">
                Pub Culture Tour
              </Link>
            </li>
            <li>
              <Link href="/offerings/bespoke" className="hover:text-white">
                Bespoke Tours
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>Dublin, Ireland</li>
            <li>info@talesandtrails.ie</li>
            <li>+353 1 234 5678</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-right text-xs text-gray-400 mt-4">
        <p>Brought to You by EGB Tours</p>
        <p className="mt-1">© {new Date().getFullYear()} Tales and Trails. All rights reserved.</p>
      </div>
    </div>
  )
}
