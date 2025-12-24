
"use client";
export default function SolutionsSection() {
  return (
    <section className="px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <span className="block text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">
          Our Approach
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-6">
          How We Solve It
        </h2>

        {/* Intro */}
        <p className="text-gray-600 max-w-2xl mb-16 leading-relaxed">
          Saranya Exports delivers reliable, high-quality recycled yarn through
          controlled processes, stable supply, and cost-efficient sourcing.
        </p>

        {/* Bands */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">

          {/* Band 1 – Featured */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 bg-purple-50/40 rounded-xl">
            <div className="md:col-span-4">
              <div className="text-base font-semibold text-purple-600 mb-2">
                01
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                Consistent Quality
              </h3>
            </div>

            <div className="md:col-span-4 border-l-2 border-purple-600 pl-4">
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                We deliver bleach-white recycled yarn with uniform strength,
                controlled impurities, and consistent shade through standardized
                processing and strict quality checks at every stage.
              </p>
            </div>
          </div>

          {/* Band 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
            <div className="md:col-span-4">
              <div className="text-base font-semibold text-purple-600 mb-2">
                02
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                Ready Stock & Bulk Supply
              </h3>
            </div>

            <div className="md:col-span-4 border-l-2 border-purple-600 pl-4">
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                With steady inventory and scalable production capacity, we ensure
                reliable lead times and uninterrupted supply for bulk and
                repeat orders.
              </p>
            </div>
          </div>

          {/* Band 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
            <div className="md:col-span-4">
              <div className="text-base font-semibold text-purple-600 mb-2">
                03
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                Sustainable & Cost-Efficient
              </h3>
            </div>

            <div className="md:col-span-4 border-l-2 border-purple-600 pl-4">
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                Optimized waste sourcing and efficient manufacturing help us
                control costs while supporting sustainability goals and
                reducing environmental impact.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
