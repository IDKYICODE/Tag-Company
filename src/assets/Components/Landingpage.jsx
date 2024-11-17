import React from 'react';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navItems = ['Home', 'About Us', 'Services', 'Teams', 'Contact Us'];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center ">
        <div className="flex items-center">
          <img 
            src="logo1.png"
            alt="TAG & COMPANY" 
            className="h-16"
          />
        </div>
        
        <div className="flex gap-12 ml-32">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-gray-700 hover:text-blue-600">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-24 flex items-center justify-between gap-24">
        {/* Left Section with Graph */}
        <div className="w-1/2 relative">
          <div className="relative">
            <img 
              src="graph1.png"
              alt="Financial Growth Graph" 
              className="w-full max-w-xl"
            />
            <div className="absolute bottom-0 left-0">
              
              
            </div>
          </div>
        </div>

        {/* Right Section - Updated with exact styling and layout */}
        <div className="w-1/2 flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <h2 className="text-[2.5rem] font-bold text-[#003366] leading-tight mb-8">
              Providing the best Chartered Accountancy
              Services!
            </h2>
            
            <p className="text-[#1a237e] text-xl mb-12 leading-relaxed">
              Welcome to TAG & Co. Chartered Accountants, your trusted 
              partner in financial excellence. Since our establishment in 
              2017, we've been committed to providing top-tier 
              accounting, financial, and advisory services to clients across 
              Hyderabad and beyond.
            </p>

            <button className="bg-[#4169E1] text-white px-8 py-4 rounded-lg flex items-center gap-3 text-lg hover:bg-blue-600 transition-colors mx-auto">
              Contact us now
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;