import React from 'react';
import { CheckCircle, Headphones, Briefcase, DollarSign } from 'lucide-react';

const ServiceFeatures = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-32 py-8">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        {/* Left Text Section */}
        <div className="lg:w-2/5">
          <div className="flex items-start gap-8">
            <div>
              <span className="text-blue-500 font-medium mb-2 block">Best Offer For You</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Do More, In Less Time!</h2>
              <p className="text-gray-600 mb-6 max-w-sm">
                Send Reminders To Your Debtors In Just A Few Clicks. Simply Set-Up And Automate Follow-Ups To Get Paid More Quickly.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors">
                Discover All Service
                <span className="w-5 h-5 bg-white rounded-full text-blue-600 flex items-center justify-center">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Features Grid - Now positioned to align with the top text */}
        <div className="lg:w-3/5 grid grid-cols-2 gap-4">
          {/* Certified Platform */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="mb-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Certified Platform</h3>
            <p className="text-gray-600 text-xs">
              Certification with plan and assessments
            </p>
          </div>

          {/* 24/7 Service */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="mb-2">
              <Headphones className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="font-semibold text-sm mb-1">24/7 Service</h3>
            <p className="text-gray-600 text-xs">
              Service that is available at every time and every day.
            </p>
          </div>

          {/* 12+ Years Experience */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="mb-2">
              <Briefcase className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-semibold text-sm mb-1">12+ Years Experience</h3>
            <p className="text-gray-600 text-xs">
              9+ years experience in accounting service
            </p>
          </div>

          {/* High Value, Low Price */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="mb-2">
              <DollarSign className="w-5 h-5 text-yellow-500" />
            </div>
            <h3 className="font-semibold text-sm mb-1">High Value, Low Price</h3>
            <p className="text-gray-600 text-xs">
              Low Cost With Premium Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;