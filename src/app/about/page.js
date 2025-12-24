

"use client";
import Link from "next/link";
import { motion } from "framer-motion";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.28,
    },
  },
};

const line = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


export default function AboutPage() {
  return (
    <>
    <section className="relative h-screen grid grid-cols-4 overflow-hidden">
  <div className="col-span-3 bg-[#EAF7FA] shadow-sm" />
  <div className="col-span-1 bg-white" />

  {/* Image layer */}
  <motion.img
  src="/images/Spinning-Mill-1024x576.webp"
  alt="Hero"
  className="
    absolute
    top-2/5
    left-3/4
    -translate-x-[75%]
    -translate-y-1/2
    w-[520px]
    h-[340px]
    rounded-2xl
    shadow-xl
  "
  initial={{ opacity: 0, y: 32 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  duration: 1.2,     // slower than text
  delay: 0.35,       // starts after first line
  ease: [0.22, 1, 0.36, 1], 
}}
/>
  <div className="absolute inset-0 max-w-7xl mx-auto px-6 pt-24">
  
  {/* Heading */}
  <motion.h1
    className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mt-18 mb-8"
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.span variants={line} className="block">
      Premium Quality.
    </motion.span>

    <motion.span variants={line} className="block">
      Waste Diverted.
    </motion.span>

    <motion.span variants={line} className="block text-purple-600">
      A Circular Future.
    </motion.span>
  </motion.h1>

  <Link href="/contactus">
  <motion.button
    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-lg rounded text-white"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: 1.1,   // appears after headline, before paragraph
      ease: "easeOut",
    }}
  >
    Contact Us
  </motion.button>
</Link>


  {/* Paragraph */}
  <motion.p
    className="mt-12 max-w-4xl text-xl leading-relaxed text-gray-700 font-normal font-sans"
    initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
    transition={{
    duration: 1,   // slower, readable
    delay: 1.4,      // after headline fully settles
    ease: "easeOut",
  }}
  >
    At <strong>Saranya Exports</strong>, we are a trusted name in the recycled
    textile industry, specializing in converting textile waste into
    premium-quality recycled yarns. We combine efficient waste processing
    methods with modern manufacturing systems to deliver strong,
    consistent, and bleach-white recycled yarn suitable for multiple
    fabric applications.
  </motion.p>

  {/* Divider */}
  <motion.hr
    className="w-4xl mt-8 border-gray-500"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.9, ease: "easeOut", delay: 1.6}}
    style={{ transformOrigin: "left" }}
  />

</div>


  
</section>


      {/* WHO WE ARE */}
      <section className="py-24">
        <div className="max-w-6xl ml-auto mr-12 px-6 grid md:grid-cols-2 gap-16 items-center bg-[#F9F7F3] shadow-sm">

          {/* Text */}
          <div>
            <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-purple-600">
              Who We Are
            </span>

            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Manufacturers with a Sustainability-First Approach
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-gray-600">
              Our journey is rooted in responsible manufacturing. We combine
              modern textile engineering with circular economy principles to
              deliver recycled yarn that meets international quality standards.
            </p>
          </div>

          <div className="my-12 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-lg shadow-sm ml-24">
        <img
            src="/images/team.jpeg"
            alt="Textile manufacturing facility"
            className="w-full h-full object-cover"
  />
        </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mb-24 ">
        <div className="max-w-6xl mr-auto  px-6 grid md:grid-cols-2 gap-16 items-center bg-[#F8F9FA] shadow-sm">

          {/* Image */}
           <div className="my-12 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-lg shadow-sm ml-24">
        <img
            src="/images/yarn3.jpg"
            alt="Textile manufacturing facility"
            className="w-full h-full object-cover"
  />
        </div>

          {/* Text */}
          <div>
            <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-purple-600">
              What We Do
            </span>

            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Converting Textile Waste into Export-Quality Yarn
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-gray-600">
              From waste sourcing and fiber processing to spinning and quality
              control, our manufacturing process is designed for consistency,
              traceability, and global compliance.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-purple-600">•</span>
                <span>Controlled recycling and yarn spinning</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-purple-600">•</span>
                <span>Quality checks aligned with export standards</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-purple-600">•</span>
                <span>Reliable supply for global textile brands</span>
              </li>
            </ul>
          </div>

        </div>
      </section>


  {/* Target Market */}
<section className="bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 py-24">

    <span className="block text-sm font-semibold uppercase tracking-widest text-purple-600 text-center mb-3">
      Target Markets
    </span>

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
      Who We Serve
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white p-8 border border-gray-300 rounded-xl">
        <h3 className="text-lg font-semibold mb-3 tracking-tight">
          Textile Manufacturers
        </h3>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Towels, bedsheets, home textiles, and handkerchief production units.
        </p>
      </div>

      <div className="bg-white p-8 border border-gray-300 rounded-xl">
        <h3 className="text-lg font-semibold mb-3 tracking-tight">
          Wholesalers & Distributors
        </h3>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Trading companies sourcing recycled yarn at scale.
        </p>
      </div>

      <div className="bg-white p-8 border border-gray-300 rounded-xl">
        <h3 className="text-lg font-semibold mb-3 tracking-tight">
          B2B Buyers
        </h3>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Direct supply to large manufacturing units with recurring demand.
        </p>
      </div>

      <div className="bg-white p-8 border border-gray-300 rounded-xl">
        <h3 className="text-lg font-semibold mb-3 tracking-tight">
          Export-Oriented Units
        </h3>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Home textile exporters requiring consistent quality and volumes.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Our Leadership */}
<section className="bg-gray-900 text-white py-28">
  <div className="max-w-6xl mx-auto px-6">

    <span className="block text-sm font-semibold uppercase tracking-widest text-purple-400 text-center mb-3">
      Leadership
    </span>

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
      Our Leadership
    </h2>

    <div className="space-y-20">

      {/* Leader 1 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4">
          <h3 className="text-2xl font-semibold tracking-tight mb-1 border-l-2 border-purple-400 pl-4
">
            Karuppanan Ganesan
          </h3>
          <span className="text-sm text-gray-500">10+ Years Experience</span>

          <p className="text-purple-300 font-medium mb-4">
            Director
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            10+ years in manufacturing operations, procurement,
            and market development.
          </p>
        </div>

        <div className="md:col-span-8">
          <ul className="text-gray-300 space-y-3 text-[15px] leading-relaxed">
            <li>— Overseas production efficiency & machinery management</li>
            <li>— Quality control & B2B customer engagement</li>
            <li>— Market development & strategic partnerships</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-700" />

      {/* Leader 2 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4">
          <h3 className="text-2xl font-semibold tracking-tight mb-1 border-l-2 border-purple-400 pl-4
">
            Krishnasamy Bhuvaneswari
          </h3>
          <p className="text-purple-300 font-medium mb-4">
            Director
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            10+ years in textile operations, business management,
            and supply chain coordination.
          </p>
        </div>

        <div className="md:col-span-8">
          <ul className="text-gray-300 space-y-3 text-[15px] leading-relaxed">
            <li>— Overall administration & strategic planning</li>
            <li>— Vendor relationships & supply chain management</li>
            <li>— Production coordination & sales strategy</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>


     
    
    </>
  );
}
