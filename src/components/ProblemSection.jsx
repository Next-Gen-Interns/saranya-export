"use client";

export default function ProblemsSection() {
  return (
    <section className="py-28 px-6 md:px-12 bg-gradient-to-b from-emerald-100 via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
    
        {/* Section Label */}
        <span className="block text-sm font-semibold uppercase tracking-widest text-purple-600 text-center mb-3">
          Industry Reality
        </span>
    
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 tracking-tight">
          The Problem with Recycled Yarn Today
        </h2>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-purple-600 mx-auto my-8" />

        {/* Intro */}
        <p className="text-gray-600 text-center mb-20 max-w-2xl mx-auto leading-relaxed">
          Textile manufacturers face consistent challenges in sourcing recycled yarn —
          leading to production delays, quality issues, and higher costs.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              stat: "38%",
              title: "Inconsistent Quality",
              text:
                "Uneven strength, impurities, and shade variations caused by non-standardized recycling processes.",
            },
            {
              stat: "52%",
              title: "Delayed Supply",
              text:
                "Unreliable timelines disrupt production planning for towels, bedsheets, and home textiles.",
            },
            {
              stat: "30%",
              title: "Limited Stock",
              text:
                "Lack of bulk ready inventory makes forecasting and scale-up extremely difficult.",
            },
            {
              stat: "40%",
              title: "Rising Costs",
              text:
                "Fluctuating raw material pricing impacts yarn affordability and long-term sourcing stability.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-2xl border border-gray-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-3">
                  {item.stat}
                </div>

                <h3 className="text-lg font-semibold mb-3 tracking-tight text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-[15px] leading-relaxed max-w-[26ch]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
