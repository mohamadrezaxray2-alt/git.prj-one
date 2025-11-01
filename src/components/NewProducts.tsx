"use client";
import React from 'react';
import Slider from 'react-slick';

// Placeholder for the Product Card component
const ProductCard = ({ name, code, imageUrl }: { name: string; code: string; imageUrl: string }) => (
  <div className="p-4">
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="pt-4">
        <h3 className="text-lg font-bold text-black">{name}</h3>
        <p className="text-sm text-gray-600">{code}</p>
      </div>
    </div>
  </div>
);


const NewProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const products = [
    { name: 'Vossen CV3-R', code: 'V001', imageUrl: 'https://picsum.photos/300/200?random=11' },
    { name: 'BBS Super RS', code: 'B002', imageUrl: 'https://picsum.photos/300/200?random=12' },
    { name: 'Rays Volk TE37', code: 'R003', imageUrl: 'https://picsum.photos/300/200?random=13' },
    { name: 'Enkei RPF1', code: 'E004', imageUrl: 'https://picsum.photos/300/200?random=14' },
    { name: 'Work Meister S1', code: 'W005', imageUrl: 'https://picsum.photos/300/200?random=15' },
    { name: 'OZ Superturismo', code: 'O006', imageUrl: 'https://picsum.photos/300/200?random=16' },
  ];

  return (
    <div className="container mx-auto mt-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-black">New Products</h2>
        <a href="/products" className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
          View All
        </a>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </Slider>
    </div>
  );
};

export default NewProducts;
