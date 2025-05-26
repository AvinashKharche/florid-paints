import React from 'react';
import Carousel from '../ui/Carousel';
import SectionLayout from '../layout/SectionLayout';

// Import paint box images
import paintBox1 from '../../assets/images/carousel/paint_box_1.jpeg';
import paintBox2 from '../../assets/images/carousel/paint_box_2.jpeg';
import paintBox3 from '../../assets/images/carousel/paint_box_3.jpeg';
import paintBox4 from '../../assets/images/carousel/paint_box_4.jpeg';
import paintBox5 from '../../assets/images/carousel/paint_box_5.jpeg';
import paintBox6 from '../../assets/images/carousel/paint_box_6.jpeg';
import paintBox7 from '../../assets/images/carousel/paint_box_7.jpeg';
import paintBox8 from '../../assets/images/carousel/paint_box_8.jpeg';

const PaintGallerySection = () => {
  const paintBoxImages = [
    {
      src: paintBox1,
      alt: 'Premium Paint Collection - Box 1',
      title: 'Premium Interior Paints',
      description: 'High-quality paints for beautiful interior spaces'
    },
    {
      src: paintBox2,
      alt: 'Premium Paint Collection - Box 2',
      title: 'Exterior Paint Solutions',
      description: 'Weather-resistant paints for lasting protection'
    },
    {
      src: paintBox3,
      alt: 'Premium Paint Collection - Box 3',
      title: 'Specialty Finishes',
      description: 'Unique textures and finishes for distinctive looks'
    },
    {
      src: paintBox4,
      alt: 'Premium Paint Collection - Box 4',
      title: 'Color Variety',
      description: 'Extensive range of colors to match your vision'
    },
    {
      src: paintBox5,
      alt: 'Premium Paint Collection - Box 5',
      title: 'Professional Grade',
      description: 'Commercial-quality paints for demanding projects'
    },
    {
      src: paintBox6,
      alt: 'Premium Paint Collection - Box 6',
      title: 'Eco-Friendly Options',
      description: 'Environmentally conscious paint solutions'
    },
    {
      src: paintBox7,
      alt: 'Premium Paint Collection - Box 7',
      title: 'Quick Dry Formula',
      description: 'Fast-drying paints for efficient project completion'
    },
    {
      src: paintBox8,
      alt: 'Premium Paint Collection - Box 8',
      title: 'Complete Paint Systems',
      description: 'Everything you need for professional results'
    }
  ];

  return (
    <SectionLayout
      id="paint-gallery"
      title="Our Paint Collection"
      description="Explore our premium range of paints and finishes designed to transform any space"
      background="gradient"
    >
      <Carousel 
        images={paintBoxImages}
        autoPlay={true}
        autoPlayInterval={5000}
        showDots={true}
        showArrows={true}
        className="mb-12"
      />
      
      {/* Additional info section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
          <p className="text-gray-600">All our paints undergo rigorous quality testing to ensure superior performance and durability.</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Wide Selection</h3>
          <p className="text-gray-600">From vibrant colors to subtle tones, find the perfect paint for every room and style preference.</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Application</h3>
          <p className="text-gray-600">Our advanced formulas provide excellent coverage and quick drying times for efficient project completion.</p>
        </div>
      </div>


    </SectionLayout>
  );
};

export default PaintGallerySection; 