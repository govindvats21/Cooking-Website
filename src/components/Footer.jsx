import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-gray-700 bottom-0 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-3">🍲 About Us</h3>
          <p>
            Welcome to Flavors & Fire! We share delicious homemade recipes,
            kitchen tips, and cooking love from our heart to your plate.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-3">🔗 Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/recipes" className="hover:underline">Recipes</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Newsletter / Socials */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-3">📬 Stay Connected</h3>
          <p className="mb-2">Get the latest recipes in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex gap-4">
            <a href="#" className="hover:text-orange-500">Facebook</a>
            <a href="#" className="hover:text-orange-500">Instagram</a>
            <a href="#" className="hover:text-orange-500">YouTube</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Flavors & Fire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
