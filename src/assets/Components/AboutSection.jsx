import React from 'react';

const AboutSection = () => {
  return (
    <div className="min-h-screen flex items-center bg-gray-100">
      <div className="container mx-auto px-16">
        <div className="flex justify-between items-center gap-52"> {/* Increased gap between arches and content */}
          {/* Left Content */}
          <div className="max-w-3xl">
            <h2 className="text-[3rem] font-bold text-[#1a1a1a] mb-6 whitespace-nowrap"> {/* Reduced font size */}
              About Us
            </h2>

            <p className="text-lg leading-relaxed text-gray-500 whitespace-normal" style={{ wordSpacing: '0.1em' }}> {/* Reduced font size */}
              At TAG & Co., We Are Dedicated To Serving Our Clients With Integrity, Innovation, 
              {' '}And Expertise. Founded By Saurabh Agarwal And Mukul Giria, Our Firm Has Quickly 
              {' '}Become A Recognized Name In The Field Of Chartered Accountancy Since 2017. Our 
              {' '}Vision Is To Provide Accurate Accounting, Financial, And Advisory Services, 
              {' '}Empowering Our Clients To Thrive In A Complex World.
            </p>
          </div>

          {/* Right Content - Founders */}
          <div className="flex gap-20"> {/* Maintains consistent spacing between the arches */}
            {/* Founder 1 */}
            <div className="relative">
              <div className="w-80 h-96 bg-gray-200 rounded-t-full"></div>
              <div className="absolute bottom-0 left-[-5%] bg-white px-12 py-3 rounded-full shadow-md transform translate-y-1/2">
                <h3 className="text-[#00327A] font-bold text-sm">Saurabh Agarwal</h3> {/* Slightly smaller text */}
                <p className="text-gray-500 text-xs font-semibold">Co - Founder</p> {/* Slightly smaller text */}
              </div>
            </div>

            {/* Founder 2 */}
            <div className="relative">
              <div className="w-80 h-96 bg-gray-200 rounded-t-full"></div>
              <div className="absolute bottom-0 left-[-5%] bg-white px-12 py-3 rounded-full shadow-md transform translate-y-1/2">
                <h3 className="text-[#00327A] font-bold text-sm">Mukul Giria</h3> {/* Slightly smaller text */}
                <p className="text-gray-500 text-xs font-semibold">Co - Founder</p> {/* Slightly smaller text */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
