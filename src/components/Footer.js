export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Saranya Exports</h3>
        <p className="text-gray-300">
          Turning textile waste into premium recycled yarn for a sustainable textile industry.
        </p>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <p className="text-gray-300">📞 +91 95002 59628</p>
        <p className="text-gray-300">✉️ saranyaexportsmr@gmail.com</p>
        <p className="text-gray-300 mt-2">
          832/2, Sendevipalayam Road,<br />
          Somanur, Tamil Nadu 641668
        </p>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="/contactus" className="text-gray-300 hover:text-white">Contact</a></li>
          <li><a href="/about" className="text-gray-300 hover:text-white">About us</a></li>
        </ul>
      </div>
    </div>
    
    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
      <p>© 2024 Saranya Exports. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
}
