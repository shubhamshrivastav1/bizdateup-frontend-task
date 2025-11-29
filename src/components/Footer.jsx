import { FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFF9EA] py-12 px-6 border-t">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>How it Works</li>
              <li>Why Uplers</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Blog</li>
              <li>Success Stories</li>
              <li>AI in Recruitment</li>
              <li>Knowledge Base</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">For Talents</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Find a Job</li>
              <li>Knowledge Base</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Why Uplers?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Our Talent Community</li>
              <li>Mission Focused</li>
              <li>Untapped Talent Markets</li>
              <li>Browse Talent</li>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-between">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Uplers_logo.svg/2560px-Uplers_logo.svg.png"
              alt="Uplers Logo"
              className="w-28"
            />
            <div className="flex gap-4 text-xl mt-4">
              <FaLinkedin />
              <FaYoutube />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-sm">
            <p className="font-semibold">+1 618 740 6131</p>
            <p className="text-gray-600">hello@uplers.com</p>
          </div>

          <div className="flex gap-4 items-center">
            <span className="px-4 py-2 border rounded-full flex items-center gap-2 text-sm">
              <FaLinkedin /> <strong>1M+</strong> Followers
            </span>

            <span className="px-4 py-2 border rounded-full text-sm">
              ⭐ 4.9 <span className="text-gray-600">126 reviews</span>
            </span>

            <span className="px-4 py-2 border rounded-full text-sm">
              ⭐ 4.1 <span className="text-gray-600">396 reviews</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
