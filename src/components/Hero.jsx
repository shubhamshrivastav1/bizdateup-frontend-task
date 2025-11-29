export default function Hero() {
  return (
    <section className="bg-[#FFF9EA] text-center px-6 py-16">
      
      {/* Top tagline */}
      <p className="bg-white px-5 py-2 rounded-lg inline-block text-sm text-gray-500 border">
        Find, hire & manage your offshore team seamlessly.
      </p>

      {/* Main headline */}
      <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
        Hire Top Talents quickly <br /> with AI & Human Intelligence
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        Uplers is an end-to-end AI hiring platform for tech companies to hire top engineering & marketing talent from India.
      </p>

      {/* Search box */}
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        
        <input
          placeholder="Location"
          className="border rounded-md px-4 py-3 w-72"
        />

        <input
          placeholder="Keywords / Job title / Company"
          className="border rounded-md px-4 py-3 w-72"
        />

        <button className="bg-yellow-400 px-5 py-3 rounded-md font-medium">
          Find a Job
        </button>

        <button className="bg-black text-white px-5 py-3 rounded-md font-medium">
          Drop Resume
        </button>

      </div>
    </section>
  );
}
