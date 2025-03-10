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
  <div 
    className="group relative transition-all duration-300 hover:scale-102"
    onMouseEnter={() => onSelect(color)}
  >
    <div
      className={`h-24 w-full rounded-xl shadow-md transition-all duration-300 
        ${isSelected 
          ? 'ring-2 ring-primary-500 ring-offset-2 shadow-lg scale-105' 
          : 'hover:shadow-lg hover:ring-2 hover:ring-primary-300 hover:ring-offset-2'}`}
      style={{ backgroundColor: color }}
    />
    <div className="mt-3 text-sm font-medium text-gray-800">
      <p className="truncate">{name}</p>
      <p className="text-xs font-mono text-gray-500 mt-1">{color}</p>
    </div>
  </div>
);

const ColorPicker = () => {
  const [selectedCategory, setSelectedCategory] = useState('trending');
  const [selectedColor, setSelectedColor] = useState(COLOR_COLLECTIONS[selectedCategory][0].hex);
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedColor(COLOR_COLLECTIONS[categoryId][0].hex);
  };

  // Get colors based on screen size
  const displayColors = (colors) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return colors.slice(0, 4);
    }
    return colors;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Color</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our curated collection of premium paints to find the perfect shade for your space
        </p>
      </div>
      
      <div className="space-y-12">
        {/* Category Selection */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-gray-100/80 backdrop-blur-sm">
            {COLOR_CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`
                  px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-sm transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'}
                `}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Color Preview */}
        <div className="block lg:hidden bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center space-x-4">
            <div
              className="w-16 h-16 rounded-lg shadow-inner transition-colors duration-500"
              style={{ backgroundColor: selectedColor }}
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">Selected Color</h3>
              <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded-full">
                {selectedColor}
              </span>
            </div>
          </div>
        </div>

        {/* Color Display */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-8">
              {COLOR_CATEGORIES.find(cat => cat.id === selectedCategory)?.name} Colors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {displayColors(COLOR_COLLECTIONS[selectedCategory]).map((color) => (
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

          {/* Desktop Color Preview */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Color Preview</h3>
                <p className="text-gray-600">
                  See how your selected color looks in different lighting conditions
                </p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div
                    className="h-40 rounded-xl shadow-inner transition-colors duration-500"
                    style={{ backgroundColor: selectedColor }}
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-medium text-gray-900">Selected Color</span>
                    <span className="font-mono text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {selectedColor}
                    </span>
                  </div>
                </div>

                <button
                  className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl
                           text-sm font-medium text-gray-700 hover:bg-gray-50 
                           transition-all duration-300 hover:shadow-md"
                  onClick={() => setShowCustomPicker(!showCustomPicker)}
                >
                  {showCustomPicker ? 'Hide Custom Picker' : 'Try Custom Color'}
                </button>

                {showCustomPicker && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <HexColorPicker
                      color={selectedColor}
                      onChange={setSelectedColor}
                      className="w-full max-w-[280px] mx-auto"
                    />
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-medium
                           hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
                >
                  Get Professional Advice
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="block lg:hidden space-y-4">
          <button
            className="w-full px-6 py-3 bg-white border border-gray-200 rounded-xl
                     text-sm font-medium text-gray-700 hover:bg-gray-50 
                     transition-all duration-300 hover:shadow-md"
            onClick={() => setShowCustomPicker(!showCustomPicker)}
          >
            {showCustomPicker ? 'Hide Custom Picker' : 'Try Custom Color'}
          </button>

          {showCustomPicker && (
            <div className="p-4 bg-gray-50 rounded-xl">
              <HexColorPicker
                color={selectedColor}
                onChange={setSelectedColor}
                className="w-full max-w-[280px] mx-auto"
              />
            </div>
          )}

          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-medium
                     hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
          >
            Get Professional Advice
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker; 