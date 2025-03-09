import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FINISHES = [
  { id: 'matte', name: 'Matte', description: 'Non-reflective, perfect for hiding surface imperfections' },
  { id: 'eggshell', name: 'Eggshell', description: 'Slight sheen, easy to clean' },
  { id: 'satin', name: 'Satin', description: 'Pearl-like finish, great for high-traffic areas' },
  { id: 'semi-gloss', name: 'Semi-Gloss', description: 'Highly durable and moisture-resistant' },
];

const SIZES = [
  { id: '1L', name: '1 Liter', price: 24.99 },
  { id: '4L', name: '4 Liters', price: 89.99 },
  { id: '10L', name: '10 Liters', price: 199.99 },
];

const PaintProduct = ({
  name,
  description,
  coveragePerLiter,
  dryingTime,
  imageUrl,
  basePrice,
  features,
  onAddToCart
}) => {
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0].id);
  const [selectedSize, setSelectedSize] = useState(SIZES[0].id);
  const [quantity, setQuantity] = useState(1);

  const selectedSizeDetails = SIZES.find(size => size.id === selectedSize);
  const totalPrice = (selectedSizeDetails?.price || basePrice) * quantity;

  const handleAddToCart = () => {
    onAddToCart({
      name,
      finish: FINISHES.find(f => f.id === selectedFinish).name,
      size: selectedSize,
      quantity,
      totalPrice
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Product Image */}
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={imageUrl}
            alt={name}
          />
        </div>

        {/* Product Details */}
        <div className="p-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div className="text-2xl font-bold text-primary-600">
              ${totalPrice.toFixed(2)}
            </div>
          </div>

          {/* Product Specifications */}
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Coverage:</span> {coveragePerLiter}m²/L
            </div>
            <div>
              <span className="font-medium">Drying Time:</span> {dryingTime}
            </div>
          </div>

          {/* Features */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Features</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Finish Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Select Finish</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {FINISHES.map((finish) => (
                <button
                  key={finish.id}
                  className={`px-3 py-2 text-sm rounded-md ${
                    selectedFinish === finish.id
                      ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedFinish(finish.id)}
                >
                  {finish.name}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {SIZES.map((size) => (
                <button
                  key={size.id}
                  className={`px-3 py-2 text-sm rounded-md ${
                    selectedSize === size.id
                      ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedSize(size.id)}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="text-gray-900 font-medium">{quantity}</span>
              <button
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 
                       transform hover:scale-105 transition-all duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PaintProduct.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coveragePerLiter: PropTypes.number.isRequired,
  dryingTime: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default PaintProduct; 