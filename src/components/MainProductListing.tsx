"use client";
import React, { useState } from 'react';

// Placeholder for Car Icon
const CarIcon = ({ brand }: { brand: string }) => {
    // In a real app, you might use an SVG icon library
    return <span className="mr-4 text-2xl">🚗</span>;
};

const ProductListItem = ({ product }: { product: { name: string; code: string; brand: string } }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50">
    <div className="flex items-center">
      <CarIcon brand={product.brand} />
      <div>
        <p className="text-lg font-bold text-black">{product.name}</p>
        <p className="text-sm text-gray-500">{product.code}</p>
      </div>
    </div>
    <button className="text-yellow-500 hover:text-yellow-600 font-bold">
      View
    </button>
  </div>
);

const MainProductListing = () => {
  const [activeTab, setActiveTab] = useState('normal');

  const normalProducts = [
    { name: 'Pirelli P Zero', code: 'PZ-01', brand: 'Pirelli' },
    { name: 'Michelin Pilot Sport 4S', code: 'PS4S-02', brand: 'Michelin' },
    { name: 'Continental ExtremeContact', code: 'EC-03', brand: 'Continental' },
    { name: 'Goodyear Eagle F1', code: 'EF1-04', brand: 'Goodyear' },
    { name: 'Bridgestone Potenza', code: 'BP-05', brand: 'Bridgestone' },
  ];

  const forgedProducts = [
    { name: 'HRE P101', code: 'HRE-P101', brand: 'HRE' },
    { name: 'BBS FI-R', code: 'BBS-FIR', brand: 'BBS' },
    { name: 'Volk Racing TE37 Ultra', code: 'VR-TE37U', brand: 'Volk' },
    { name: 'Advan GT', code: 'AD-GT', brand: 'Advan' },
    { name: 'Forgiato Tecnica', code: 'FG-TEC', brand: 'Forgiato' },
  ];

  const products = activeTab === 'normal' ? normalProducts : forgedProducts;

  return (
    <div className="container mx-auto mt-16">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Our Products</h2>
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center border-b-2 border-gray-200 mb-4">
          <button
            onClick={() => setActiveTab('normal')}
            className={`py-3 px-8 text-lg font-semibold transition-colors duration-300 ${activeTab === 'normal' ? 'border-b-4 border-yellow-400 text-black' : 'text-gray-500'}`}
          >
            Normal
          </button>
          <button
            onClick={() => setActiveTab('forged')}
            className={`py-3 px-8 text-lg font-semibold transition-colors duration-300 ${activeTab === 'forged' ? 'border-b-4 border-yellow-400 text-black' : 'text-gray-500'}`}
          >
            Forged
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          {products.map((product) => (
            <ProductListItem key={product.code} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProductListing;
