import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      {/* Main Form Section */}
      <div className="bg-blue-600 text-white py-16 px-8 flex justify-center sm:justify-start rounded-lg">
        <div className="w-full max-w-lg p-8">
          <h1 className="text-left text-3xl md:text-4xl font-semibold mb-8">
            Fill the details and we will get back to you!
          </h1>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="First and last name"
              className="w-full p-4 rounded-lg bg-blue-500 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-4 rounded-lg bg-blue-500 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="tel"
              placeholder="Contact number"
              className="w-full p-4 rounded-lg bg-blue-500 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {/* Smaller button below Contact number */}
            <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition self-start">
              Contact us now <span className="ml-2">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Increased spacing between Form and Footer */}
      <div className="mt-20"></div>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold">
              <span className="font-light">Your Partner In</span> Progress
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
              Nisi Ut.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold">Important Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#support" className="text-white hover:underline">
                  Support center
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white hover:underline">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#sitemap" className="text-white hover:underline">
                  Site map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="mt-4 text-sm">123 456 7890</p>
            <p className="mt-2 text-sm">123 456 7890</p>
            <p className="mt-2 text-sm">Info@Yourcompany.Com</p>

            {/* Social Links Section */}
            <div className="flex space-x-4 mt-6 justify-center">
              <a
                href="#facebook"
                className="bg-blue-500 hover:bg-blue-400 text-white p-3 rounded-md"
              >
                fb
              </a>
              <a
                href="#instagram"
                className="bg-blue-500 hover:bg-blue-400 text-white p-3 rounded-md"
              >
                ig
              </a>
              <a
                href="#youtube"
                className="bg-blue-500 hover:bg-blue-400 text-white p-3 rounded-md"
              >
                yt
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-blue-700 py-4 text-center text-sm">
          <p>Copyright Your Company Name Goes Here</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;
