import React from 'react';
import PaintTypeCard from '../ui/PaintTypeCard';
import ColorPicker from '../features/ColorPicker/ColorPicker';
import SectionLayout from '../layout/SectionLayout';
import VibrantSectionHeader from '../ui/VibrantSectionHeader';
import { PAINT_TYPES } from '../../constants/data';

const PaintSelectionSection = () => {
  return (
    <SectionLayout
      id="paint-selection"
      title="Premium Paints"
      description="Discover our selection of high-quality paints for every project"
      background="gradient"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {PAINT_TYPES.map((type, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <PaintTypeCard type={type} />
          </div>
        ))}
      </div>
      
      {/* Color Picker Section */}
      <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
        <VibrantSectionHeader
          title="Find Your Perfect Color"
          description="Explore our curated collection of premium paints to find the perfect shade for your space"
          className="mb-8"
        />
        <ColorPicker />
      </div>
    </SectionLayout>
  );
};

export default PaintSelectionSection; 