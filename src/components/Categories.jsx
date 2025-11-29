// src/components/Categories.jsx
const items = [
  "Software Engineers",
  "Data Engineers",
  "ML Engineers",
  "DevOps",
  "Solutions Architect",
];

export default function Categories() {
  return (
    <section className="py-12 bg-[#FFF9E6]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Browse by category
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {items.map((item, i) => (
            <div
              key={item}
              className={
                "w-44 h-32 rounded-2xl border flex items-center justify-center text-sm font-medium shadow-sm " +
                (i === 0
                  ? "bg-[#FFD43A] border-[#F0C530]"
                  : "bg-white border-[#E5E0C9]")
              }
            >
              {item}
            </div>
          ))}
        </div>

        <button className="bg-[#FFD43A] hover:bg-[#f2c72f] px-8 py-3 rounded-full font-semibold text-sm">
          Browse more
        </button>
      </div>
    </section>
  );
}
