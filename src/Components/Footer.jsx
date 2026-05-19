const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold text-white">I</div>
              <span className="text-xl font-bold">ISERK PC</span>
            </div>
            <p className="text-sm text-gray-600">
              Hassle-free computing experience with precision-built PCs designed just for you. We deeply consider a PC is an investment to POWER YOUR JOURNEY
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
              <li><a href="/prebuild" className="hover:text-orange-500">Prebuild</a></li>
              <li><a href="/accessories" className="hover:text-orange-500">Accessories</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="/refund-policy" className="hover:text-orange-500">Refund Policy</a></li>
              <li><a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-orange-500">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Reach to us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-orange-500 font-semibold">For Support</p>
                <a href="mailto:support@nukepc.in" className="hover:text-orange-500">support@nukepc.in</a>
              </li>
              <li>
                <p className="text-orange-500 font-semibold">For Sales</p>
                <a href="mailto:enquiry@nukepc.in" className="hover:text-orange-500">enquiry@nukepc.in</a>
              </li>
              <li>
                <p className="text-orange-500 font-semibold">For Instant Replies</p>
                <a href="tel:+919025380083" className="hover:text-orange-500">+91 90253 80083</a>
              </li>
              <li>
                <p className="text-orange-500 font-semibold">Our Address</p>
                <p>Chennai, TN</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 py-6 border-t border-gray-300">
          <a href="https://instagram.com/nukepc.in" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600">📷</a>
          <a href="https://youtube.com/@NukePCofficial" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600">▶</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 border-t border-gray-300 pt-6">
          <p>© 2026 <a href="/" className="hover:text-orange-500">ISERK Technologies Private Limited</a>. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
