import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const COLOR_COLLECTIONS = {
  trending: [
    { name: 'Coastal Calm', hex: '#E6EEF3', category: 'Relaxing' },
    { name: 'Urban Gray', hex: '#808487', category: 'Modern' },
    { name: 'Natural Sage', hex: '#9CAF88', category: 'Nature' },
    { name: 'Warm Terracotta', hex: '#E2725B', category: 'Warm' },
    { name: 'Classic Navy', hex: '#2C3E50', category: 'Classic' },
    { name: 'Desert Sand', hex: '#E5C7A3', category: 'Neutral' },
    { name: 'Olive Grove', hex: '#8B9B6E', category: 'Nature' },
    { name: 'Slate Blue', hex: '#6A8CAF', category: 'Serene' },
    { name: 'Coral Bliss', hex: '#FF7F50', category: 'Vibrant' }
  ],
  classic: [
    { name: 'Pure White', hex: '#FFFFFF', category: 'Neutral' },
    { name: 'Eggshell', hex: '#F3E5D0', category: 'Warm' },
    { name: 'Navy Blue', hex: '#1B3C59', category: 'Traditional' },
    { name: 'Forest Green', hex: '#2C4A3E', category: 'Traditional' },
    { name: 'Burgundy', hex: '#800020', category: 'Rich' },
    { name: 'Charcoal', hex: '#36454F', category: 'Neutral' },
    { name: 'Cream', hex: '#FFFDD0', category: 'Warm' },
    { name: 'Colonial Blue', hex: '#4C516D', category: 'Traditional' },
    { name: 'Rich Brown', hex: '#8B4513', category: 'Traditional' }
  ],
  modern: [
    { name: 'Concrete', hex: '#C4C4C4', category: 'Industrial' },
    { name: 'Matte Black', hex: '#2D2D2D', category: 'Contemporary' },
    { name: 'Arctic White', hex: '#F8F8F8', category: 'Minimalist' },
    { name: 'Steel Blue', hex: '#4682B4', category: 'Contemporary' },
    { name: 'Dusty Rose', hex: '#DCAE96', category: 'Trendy' },
    { name: 'Sage Green', hex: '#B2AC88', category: 'Natural' },
    { name: 'Slate Gray', hex: '#708090', category: 'Industrial' },
    { name: 'Blush Pink', hex: '#FFB6C1', category: 'Trendy' },
    { name: 'Teal Accent', hex: '#008080', category: 'Contemporary' }
  ]
};

const COLOR_CATEGORIES = [
  { id: 'trending', name: 'Trending' },
  { id: 'classic', name: 'Classic' },
  { id: 'modern', name: 'Modern' }
];

const ColorSwatch = ({ color, name, onSelect, isSelected }) => (
  <button 
    className={`group relative transition-transform hover:scale-105 focus:outline-none`}
    onClick={() => onSelect(color)}
    style={{ width: 'fit-content' }}
  >
    <div
      className={`h-16 w-16 rounded-lg shadow-lg transition-all duration-200 ${
        isSelected ? 'ring-2 ring-primary-500 ring-offset-2' : 'hover:ring-2 hover:ring-primary-300 hover:ring-offset-2'
      }`}
      style={{ backgroundColor: color }}
    />
    <div className="mt-2 text-sm font-medium text-gray-900 text-center w-16">{name}</div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 
                  group-hover:opacity-100 transition-opacity bg-black bg-opacity-20 rounded-lg"
                  style={{ width: '4rem', height: '4rem' }}>
      <span className="bg-white px-2 py-0.5 rounded-full text-xs font-medium text-gray-900">
        Preview
      </span>
    </div>
  </button>
);

const ColorPicker = () => {
  const [selectedCategory, setSelectedCategory] = useState('trending');
  const [selectedColor, setSelectedColor] = useState(COLOR_COLLECTIONS[selectedCategory][0].hex);
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedColor(COLOR_COLLECTIONS[categoryId][0].hex);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Category Selection */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {COLOR_CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`
                  whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                  ${selectedCategory === category.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Color Display */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              {COLOR_CATEGORIES.find(cat => cat.id === selectedCategory)?.name} Colors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {COLOR_COLLECTIONS[selectedCategory].map((color) => (
                <ColorSwatch
                  key={color.hex}
                  color={color.hex}
                  name={color.name}
                  onSelect={setSelectedColor}
                  isSelected={selectedColor === color.hex}
                />
              ))}
            </div>
          </div>

          <div className="col-span-2 bg-gray-50 p-6 rounded-lg">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Color Preview</h3>
              <p className="text-gray-600 text-sm">
                See how your selected color looks in different lighting conditions
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <div
                  className="h-32 rounded-lg shadow-inner"
                  style={{ backgroundColor: selectedColor }}
                />
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Selected Color</span>
                  <span className="text-sm font-mono uppercase">{selectedColor}</span>
                </div>
              </div>

              <button
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm 
                         text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none 
                         focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                onClick={() => setShowCustomPicker(!showCustomPicker)}
              >
                {showCustomPicker ? 'Hide Custom Picker' : 'Try Custom Color'}
              </button>

              {showCustomPicker && (
                <div className="mt-4">
                  <HexColorPicker
                    color={selectedColor}
                    onChange={setSelectedColor}
                    className="w-full"
                  />
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 
                         transition-colors duration-200"
              >
                Get Professional Advice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker; 