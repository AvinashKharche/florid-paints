import React from 'react';
import SectionLayout from '../layout/SectionLayout';

const PricingDownloadSection = () => {
  return (
    <SectionLayout
      id="pricing-download"
      background="white"
    >
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Need Detailed Pricing?
        </h3>
        <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
          Download our comprehensive price list with detailed rates for all services and paint products. 
          Get instant access to pricing for interior, exterior, and specialty paints.
        </p>
        <a
          href="/documents/florid-paints-price-list.pdf"
          download="Florid-Paints-Price-List.pdf"
          className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-xl 
                   font-semibold hover:bg-primary-600 transform hover:scale-105 
                   transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
        >
          <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Complete Price List
        </a>
      </div>
    </SectionLayout>
  );
};

export default PricingDownloadSection; 