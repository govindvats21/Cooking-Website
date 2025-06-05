import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 px-6 py-10 bg-white shadow-xl rounded-lg">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">About Us</h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Welcome to <strong>[Your Website Name]</strong> – your one-stop destination for all things cooking! Whether you're just learning to boil water or you're a seasoned home chef, our platform is here to inspire and guide your cooking journey.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our mission is simple: to make cooking <span className="font-semibold text-orange-600">easy, fun, and delicious</span> for everyone. We believe food connects people, and we're passionate about sharing recipes that bring families and friends together.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        From traditional classics to quick weekday meals and trendy recipes, every dish on our site is tested, loved, and easy to follow. We also offer ingredient tips, cooking hacks, and inspiration for every skill level.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Thank you for being part of our growing foodie community. We can’t wait to cook with you!
      </p>

      <p className="text-gray-700 text-md mt-8 italic">
        — The [Your Website Name] Team 👨‍🍳👩‍🍳
      </p>
    </div>
  );
};

export default About;
