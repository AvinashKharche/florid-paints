import React, { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import PaintProduct from '../PaintProduct/PaintProduct';

// Sample product data - in a real app, this would come from an API
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: 'Premium Interior Paint',
    description: 'High-quality, low-VOC paint perfect for interior walls and ceilings.',
    coveragePerLiter: 12,
    dryingTime: '1-2 hours',
    imageUrl: '/images/interior-paint.jpg',
    basePrice: 24.99,
    features: [
      'Low VOC',
      'Excellent Coverage',
      'Easy Application',
      'Washable Finish',
      'Environmentally Friendly',
      'Quick Drying'
    ]
  },
  {
    id: 2,
    name: 'Weather Shield Exterior',
    description: 'Durable exterior paint with advanced weather protection technology.',
    coveragePerLiter: 10,
    dryingTime: '2-4 hours',
    imageUrl: '/images/exterior-paint.jpg',
    basePrice: 29.99,
    features: [
      'Weather Resistant',
      'UV Protection',
      'Anti-Fungal',
      'Fade Resistant',
      'Long Lasting',
      'Easy Maintenance'
    ]
  }
];

const Products = () => {
  const [cart, setCart] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, id: Date.now() }]);
    // In a real app, you'd probably want to show a toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Find Your Perfect Color
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Explore our wide range of premium paints and discover the perfect shade for your space
            </p>
          </div>
        </div>
      </div>

      {/* Color Picker Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Color Selection</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Use our advanced color picker to find the perfect shade or explore our trending colors
            </p>
          </div>
          <ColorPicker onColorSelect={setSelectedColor} />
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Premium Paints</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose from our selection of high-quality paints, available in any color you select
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {SAMPLE_PRODUCTS.map((product) => (
            <PaintProduct
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Paint Tips Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Painting Tips & Resources</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Get the most out of your paint with our expert tips and guides
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Add your painting tips cards here */}
              {/* This is a placeholder for future content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 