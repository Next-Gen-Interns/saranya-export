"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProblemSection from "../components/ProblemSection";
import SolutionsSection from "../components/SolutionsSection"
export default function Home() {
  return (

    <div>

      
   <section className="relative h-screen flex items-center">


  <img
    src="/images/hero1.jpg"
    alt="Recycled yarn manufacturing"
    className="absolute inset-0 w-full h-full object-cover"
  />


  <div className="relative z-10 w-full px-6">
    <motion.div
      className="bg-black/60 text-white p-12 max-w-2xl"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Turning Textile Waste into Premium Recycled Yarn
      </h1>

      <p className="text-lg text-gray-200 mb-8">
        We manufacture export-quality recycled yarn using sustainable
        textile waste recycling processes.
      </p>

      <Link href="/contactus">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-sm rounded text-white"
>
          Request Export Details  
        </button>
      </Link>

    </motion.div>
  </div>

</section> 

    


        
  <ProblemSection /> 
   <SolutionsSection />

 <section className="py-28 px-6 md:px-12 bg-gray-50">
  <div className="max-w-6xl mx-auto">

   
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-4">
      Our Premium Recycled Yarns
    </h2>

    <p className="text-gray-600 max-w-2xl mb-16 leading-relaxed">
      Available in multiple yarn counts engineered for towels, bedsheets,
      home textiles, and garment manufacturing.
    </p>

    <div className="space-y-10">

      {[
        { count: "20s", use: "Towels & Bath Linen" },
        { count: "24s", use: "Bedsheets & Home Linen" },
        { count: "26s", use: "Premium Towels" },
        { count: "30s", use: "Home Textiles" },
        { count: "34s", use: "Fine Bedsheets" },
        { count: "36s", use: "High-Quality Linen" },
        { count: "40s", use: "Garment Production" },
        { count: "2/40s", use: "Specialty Applications" },
      ].map((item) => (
        <div key={item.count} className="flex items-center gap-8">
          
         
          <div className="w-20 text-2xl font-semibold text-purple-600">
            {item.count}
          </div>

          <div className="flex-1 h-px bg-gray-300" />

          
          <div className="w-64 text-gray-700 font-medium">
            {item.use}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-20">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Need a specific yarn count?
      </h3>
      <p className="text-gray-600 mb-8 max-w-lg">
        Custom counts and bulk quantities available on request.
      </p>
      <Link href="/contactus">
  <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-sm rounded text-white">
    Request Sample
  </button>
</Link>
    </div>

  </div>
</section>

</div>
    
  );
}
