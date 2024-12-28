import React from 'react';

const Perfumes = () => {
  const perfumeData = [
    { id: 1, name: 'bvlgari', price: 12000, description: 'Luxury perfume', image: '/bvlgari.png' },
    { id: 2, name: 'ladymillion', price: 8000, description: 'Sporty design', image: '/ladymillion.png' },
    { id: 3, name: 'swissmiss', price: 25000, description: 'Elegant timepiece', image: '/swissmiss.jpg' },
    { id: 4, name: 'dolce', price: 5000, description: 'Sporty and stylish', image: '/dolce.jpg' },
    { id: 5, name: 'medorona', price: 7000, description: 'Bold and rugged', image: '/medorona.png' },
    { id: 6, name: 'dior', price: 1000, description: 'Affordable and reliable', image: '/dior.jpg' },
  ];

  return (
    <div className="perfume grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
    {perfumeData.map(perfume => (
      <div key={perfume.id} className="perfume-card bg-white p-5 rounded-md shadow-md text-center">
        <img src={perfume.image} alt={perfume.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
        <h3 className="mt-4 text-2xl font-bold">{perfume.name}</h3>
        <p className="text-gray-500">{perfume.description}</p>
        <div className="price text-blue-500 text-xl font-semibold mt-2">${perfume.price}</div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
      </div>
    ))}
  </div>
);
};

export default Perfumes;
