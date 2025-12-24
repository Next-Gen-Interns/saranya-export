export default function ContactUs() {
    return (
        <>
        {/* CONTACT US SECTION */}
<section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Let’s Create Sustainable Textiles Together
      </h2>
      <p className="max-w-2xl mx-auto text-gray-300 text-lg">
        Whether you're a manufacturer, distributor, or brand looking for reliable recycled yarn — 
        we’re here to supply quality, consistency, and sustainability.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Contact Info */}
      <div className="space-y-10">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            Reach out for yarn samples, bulk pricing, or long-term supply partnerships.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold">Email</h4>
              <a href="mailto:saranyaexportsmr@gmail.com" className="text-gray-300 hover:text-purple-400 transition">
                saranyaexportsmr@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold">Phone / WhatsApp</h4>
              <a href="https://wa.me/919500259628" className="text-gray-300 hover:text-purple-400 transition">
                +91 95002 59628
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold">Factory Address</h4>
              <p className="text-gray-300">
                832/2, Sendevipalayam Road,<br />
                Karumathampatti, Somanur,<br />
                Tamil Nadu 641668, India
              </p>
            </div>
          </div>
        </div>

        {/* Quick Note */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h4 className="font-bold text-lg mb-2">⚡ Quick Response</h4>
          <p className="text-gray-300 text-sm">
            We typically respond within 2–4 hours during business days. For urgent inquiries, 
            WhatsApp is the fastest way to reach us.
          </p>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
        <h3 className="text-2xl font-bold mb-6">Send Your Inquiry</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Your Name *</label>
              <input
                type="text"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Company Name</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Textile Manufacturers Ltd."
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email Address *</label>
            <input
              type="email"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="hello@company.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">What are you looking for? *</label>
            <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option value="">Select an option</option>
              <option value="yarn">Recycled Yarn Supply</option>
              <option value="sample">Request Sample</option>
              <option value="bulk">Bulk Order Inquiry</option>
              <option value="partnership">Business Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message *</label>
            <textarea
              rows="4"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Tell us about your yarn requirements, count, quantity, timeline, etc."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>

          <p className="text-gray-400 text-sm text-center">
            We respect your privacy. Your information will never be shared.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
        </>
    );

}