export default function Navbar() {
  return (
    <nav className="w-full bg-[#FFF9EA] px-10 py-6 flex justify-between items-center">
      
      {/* Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Uplers_logo.svg/2560px-Uplers_logo.svg.png"
        alt="logo"
        className="w-32"
      />

      {/* Links */}
      <div className="hidden md:flex gap-6 text-gray-800 text-sm font-medium">
        <span>Page ⌄</span>
        <span>For Companies ⌄</span>
        <span>For Talent ⌄</span>
        <span>AI Recruitment</span>
        <span>Blogs</span>
        <span>Pricing</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="bg-yellow-400 px-4 py-2 rounded-md font-medium">
          Hire a Talent
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-md font-medium">
          Find a Job
        </button>
      </div>
    </nav>
  );
}
