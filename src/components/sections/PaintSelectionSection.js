import React from 'react';
import PaintTypeCard from '../ui/PaintTypeCard';
import ColorPicker from '../features/ColorPicker/ColorPicker';
import { PAINT_TYPES } from '../../constants/data';

const PaintSelectionSection = () => {
  return (
    <section id="paint-selection" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Paints</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our selection of high-quality paints for every project
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PAINT_TYPES.map((type, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <PaintTypeCard type={type} />
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-xl p-12 shadow-lg animate-scale-in">
          <ColorPicker />
        </div>
      </div>
    </section>
  );
};

export default PaintSelectionSection; 