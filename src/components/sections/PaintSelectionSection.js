import React from 'react';
import PaintTypeCard from '../ui/PaintTypeCard';
import ColorPicker from '../features/ColorPicker/ColorPicker';
import SectionLayout from '../layout/SectionLayout';
import { PAINT_TYPES } from '../../constants/data';

const PaintSelectionSection = () => {
  return (
    <SectionLayout
      id="paint-selection"
      title="Premium Paints"
      description="Discover our selection of high-quality paints for every project"
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {PAINT_TYPES.map((type, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <PaintTypeCard type={type} />
          </div>
        ))}
      </div>
      <div className="bg-gray-50 rounded-xl p-12 shadow-lg animate-scale-in">
        <ColorPicker />
      </div>
    </SectionLayout>
  );
};

export default PaintSelectionSection; 