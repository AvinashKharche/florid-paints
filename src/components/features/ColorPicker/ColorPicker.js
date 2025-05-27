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
      className={`h-24 w-full rounded-lg shadow-md transition-all duration-300
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
    <div className="relative">
      {/* Remove the header since it's now handled by PaintSelectionSection */}
      
      <div className="space-y-12">
        {/* Category Selection */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-lg bg-gray-100">
            {COLOR_CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`
                  px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-medium text-sm transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'}
                `}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Color Preview */}
        <div className="block lg:hidden bg-white rounded-2xl shadow-vibrant border-2 border-primary-200/50 p-6">
          <div className="flex items-center space-x-6">
            <div
              className="w-20 h-20 rounded-2xl shadow-glow transition-colors duration-500 border-4 border-white"
              style={{ backgroundColor: selectedColor }}
            />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Selected Color</h3>
              <span className="font-mono text-sm bg-gradient-to-r from-primary-50 to-vibrant-green/10 px-4 py-2 rounded-xl border border-primary-200">
                {selectedColor}
              </span>
            </div>
          </div>
        </div>

        {/* Color Display */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
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
            <div className="bg-white rounded-3xl shadow-vibrant border-2 border-primary-200/50 p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-rainbow-stripe"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent-yellow rounded-full animate-float opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent-pink rounded-full animate-float opacity-60" style={{animationDelay: '1s'}}></div>
              
              <div className="mb-8 relative">
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  <span className="bg-gradient-to-r from-primary-600 to-vibrant-green bg-clip-text text-transparent">
                    Color Preview
                  </span>
                </h3>
                <p className="text-gray-600 font-medium">
                  See how your selected color looks in different lighting conditions
                </p>
                <div className="w-12 h-0.5 bg-rainbow-stripe rounded-full mt-3"></div>
              </div>
              
              <div className="space-y-8 relative">
                <div>
                  <div
                    className="h-48 rounded-2xl shadow-glow transition-colors duration-500 border-4 border-white relative overflow-hidden"
                    style={{ backgroundColor: selectedColor }}
                  >
                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <span className="font-bold text-gray-900 text-lg">Selected Color</span>
                    <span className="font-mono text-sm bg-gradient-to-r from-primary-50 to-vibrant-green/10 px-4 py-2 rounded-xl border border-primary-200">
                      {selectedColor}
                    </span>
                  </div>
                </div>

                <button
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-50 to-vibrant-green/10 border-2 border-primary-200 rounded-2xl
                           text-sm font-bold text-primary-700 hover:from-primary-100 hover:to-vibrant-green/20 
                           transition-all duration-300 hover:shadow-vibrant hover:scale-105"
                  onClick={() => setShowCustomPicker(!showCustomPicker)}
                >
                  {showCustomPicker ? '🎨 Hide Custom Picker' : '🎨 Try Custom Color'}
                </button>

                {showCustomPicker && (
                  <div className="mt-6 p-6 bg-gradient-to-br from-primary-50 to-vibrant-green/10 rounded-2xl border-2 border-primary-200/50">
                    <HexColorPicker
                      color={selectedColor}
                      onChange={setSelectedColor}
                      className="w-full max-w-[280px] mx-auto"
                    />
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-primary-200/50">
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-vibrant-green text-white rounded-2xl font-bold
                           hover:from-primary-600 hover:to-primary-500 transition-all duration-300 hover:shadow-vibrant hover:scale-105"
                >
                  💬 Get Professional Advice
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="block lg:hidden space-y-6">
          <button
            className="w-full px-6 py-4 bg-gradient-to-r from-primary-50 to-vibrant-green/10 border-2 border-primary-200 rounded-2xl
                     text-sm font-bold text-primary-700 hover:from-primary-100 hover:to-vibrant-green/20 
                     transition-all duration-300 hover:shadow-vibrant hover:scale-105"
            onClick={() => setShowCustomPicker(!showCustomPicker)}
          >
            {showCustomPicker ? '🎨 Hide Custom Picker' : '🎨 Try Custom Color'}
          </button>

          {showCustomPicker && (
            <div className="p-6 bg-gradient-to-br from-primary-50 to-vibrant-green/10 rounded-2xl border-2 border-primary-200/50">
              <HexColorPicker
                color={selectedColor}
                onChange={setSelectedColor}
                className="w-full max-w-[280px] mx-auto"
              />
            </div>
          )}

          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-vibrant-green text-white rounded-2xl font-bold
                     hover:from-primary-600 hover:to-primary-500 transition-all duration-300 hover:shadow-vibrant hover:scale-105"
          >
            💬 Get Professional Advice
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker; 