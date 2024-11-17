import React from 'react';
import { 
  Calculator, 
  Receipt, 
  FileText, 
  ClipboardCheck, 
  Rocket, 
  TrendingUp, 
  BarChart2, 
  FileSignature, 
  Users 
} from 'lucide-react';

const ServiceCard = ({ Icon, title, description, iconColor, bgColor }) => (
  <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow min-h-[400px] flex flex-col items-center">
    <div className={`w-32 h-20 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
      <Icon className={`w-10 h-10 ${iconColor}`} />
    </div>
    <h3 className="text-xl font-semibold mb-6">{title}</h3>
    <p className="text-gray-600 flex-grow leading-relaxed">{description}</p>
  </div>
);

const AccountingServices = () => {
  const services = [
    {
      Icon: Calculator,
      title: "Accounting",
      description: "Our Expert Accountants Ensure Accurate And Timely Financial Reporting, Helping Businesses Maintain Transparency And Compliance",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      Icon: Receipt,
      title: "GST",
      description: "Navigate The Complexities Of Goods And Services Tax (GST) With Our Comprehensive GST Services, Including Registration, Filing, And Compliance.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      Icon: FileText,
      title: "Income Tax",
      description: "From Tax Planning To Filing, Our Team Provides Expert Guidance To Individuals And Businesses, Optimizing Tax Strategies And Minimizing Liabilities.",
      iconColor: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      Icon: ClipboardCheck,
      title: "Audit & Assurance",
      description: "Trust Our Experienced Auditors To Conduct Thorough Audits And Provide Valuable Insights To Enhance Internal Controls And Mitigate Risks",
      iconColor: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      Icon: Rocket,
      title: "Start-Up Consultancy",
      description: "Launch Your Venture With Confidence With Our Start-Up Consultancy Services, Including Business Planning, Financial Forecasting, And Regulatory Compliance.",
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      Icon: TrendingUp,
      title: "Valuation & Financial Modeling",
      description: "Make Informed Business Decisions With Our Valuation And Financial Modeling Services, Tailored To Your Specific Industry And Objectives.",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      Icon: BarChart2,
      title: "Virtual CFO",
      description: "Access Strategic Financial Expertise Without The Overhead Costs Of A Full-Time CFO, With Our Virtual CFO Services Designed To Support Your Business Growth.",
      iconColor: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      Icon: FileSignature,
      title: "Secretarial Services",
      description: "Ensure Compliance With Regulatory Requirements And Streamline Corporate Governance With Our Secretarial Services, Covering Company Law And Regulatory Filings.",
      iconColor: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      Icon: Users,
      title: "Family Tax Planning",
      description: "Protect And Maximize Your Family's Wealth With Our Specialized Tax Planning Services, Tailored To Your Unique Financial Goals And Circumstances.",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-20">
        <p className="text-blue-600 mb-2">Everything You Need Is Here</p>
        <h1 className="text-3xl font-bold mb-6">Your Accounting Done Right.</h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Tagcompany, We Offer A Wide Range Of Professional Services To Meet Your Financial Needs. Our Services Include Auditing, Taxation, Financial Advisory, GST And Income Tax Laws, Litigation, And Business Consulting. Our Team Of Experts Is Dedicated To Providing End-To-End Financial Advisory, Tax Consulting, And Business Advisory Under One Roof, With A Focus On Individual Client Needs. We Pride Ourselves On Our Ability To Offer Comprehensive Tailored Solutions To Meet Your Unique Financial Needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
            iconColor={service.iconColor}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountingServices;