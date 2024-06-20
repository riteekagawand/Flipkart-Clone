import React from 'react';

function Middle() {
  return (
    <div className="flex flex-col items-center py-10 px-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Best of Electronics</h2>
      <h3 className="text-xl font-medium text-gray-700 mb-4">Monitor</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-white shadow-md overflow-hidden">
          <img src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" className="w-full h-auto object-fit:cover" />
          <div className="p-4">
            <p className="text-base font-medium text-gray-700 mb-1">Apple</p>
            <p className="text-sm text-gray-600 mb-1">Apple 2020 Macbook Air </p>
            <p className="text-sm text-gray-600 mb-2">Apple M1 </p>
            <p className="text-lg font-semibold text-gray-800 mb-2">₹82,790</p>
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium focus:outline-none hover:bg-blue-700">Add to Cart</button>
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-md overflow-hidden">
          <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/b/s/o/-original-imagt86kchfhpwgz.jpeg?q=70" alt="Monitor" className="w-full h-auto object-fit:cover" />
          <div className="p-4">
            <p className="text-base font-medium text-gray-700 mb-1">Watch</p>
            <p className="text-sm text-gray-600 mb-1">Wave Neo with 1.69 inch, 2.5D Curved Display & Multiple Sports Modes</p>
            <p className="text-sm text-gray-600 mb-2">Boat</p>
            <p className="text-lg font-semibold text-gray-800 mb-2">₹1,999</p>
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium focus:outline-none hover:bg-blue-700">Add to Cart</button>
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-md overflow-hidden">
          <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/b/s/o/-original-imagt86kchfhpwgz.jpeg?q=70" alt="Monitor" className="w-full h-auto object-fit:cover" />
          <div className="p-4">
            <p className="text-base font-medium text-gray-700 mb-1">Watch</p>
            <p className="text-sm text-gray-600 mb-1">Wave Neo with 1.69 inch, 2.5D Curved Display & Multiple Sports Modes</p>
            <p className="text-sm text-gray-600 mb-2">Boat</p>
            <p className="text-lg font-semibold text-gray-800 mb-2">₹1,999</p>
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium focus:outline-none hover:bg-blue-700">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
