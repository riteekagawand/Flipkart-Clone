"use client"
import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

// Define the Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}

const Cart = () => {
  // State hooks
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showBuyNowForm, setShowBuyNowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    pinCode: '',
    address: '',
  });

  // Fetch cart data on component mount
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('/api/get-cart');
        const data = await response.json();
        const productsWithQuantity: Product[] = data.map((product: Product) => ({
          ...product,
          quantity: product.quantity || 1,
        }));
        setSelectedProducts(productsWithQuantity);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  // Function to update quantity of a product
  const updateQuantity = async (productId: number, quantity: number) => {
    const updatedProducts = selectedProducts.map((product) =>
      product.id === productId ? { ...product, quantity } : product
    );
    setSelectedProducts(updatedProducts);

    // Persist the updated cart data
    try {
      await fetch('/api/update-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProducts),
      });
    } catch (error) {
      console.error('Error updating cart data:', error);
    }
  };

  // Increase quantity of a product
  const handleIncrease = (productId: number) => {
    const product = selectedProducts.find((product) => product.id === productId);
    if (product) {
      updateQuantity(productId, product.quantity + 1);
    }
  };

  // Decrease quantity of a product
  const handleDecrease = (productId: number) => {
    const product = selectedProducts.find((product) => product.id === productId);
    if (product && product.quantity > 1) {
      updateQuantity(productId, product.quantity - 1);
    }
  };

  // Remove a product from the cart
  const handleRemove = async (productId: number) => {
    const updatedProducts = selectedProducts.filter((product) => product.id !== productId);
    setSelectedProducts(updatedProducts);

    // Persist the updated cart data
    try {
      await fetch('/api/update-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProducts),
      });
    } catch (error) {
      console.error('Error updating cart data:', error);
    }
  };

  // Calculate total price of a product based on its quantity
  const calculateTotalPrice = (product: Product) => {
    return product.price * product.quantity;
  };

  // Show Buy Now form
  const handleBuyNow = () => {
    setShowBuyNowForm(true);
  };

  // Hide Buy Now form
  const handleCancel = () => {
    setShowBuyNowForm(false);
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare data to save
    const dataToSave = {
      ...formData,
      products: selectedProducts,
    };

    // Save form data to server
    try {
      const response = await fetch('/api/save-form-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        console.log('Form data saved successfully');
        setShowBuyNowForm(false);
        // Optionally, reset form state here
      } else {
        console.error('Failed to save form data');
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  // Render the cart component
  return (
    <div>
      <Header />
      <div className="bg-blue-500 flex justify-start items-center h-[70px]">
        <h2 className="text-[40px] font-black font-serif ml-5">Cart:</h2>
      </div>
      <div className="flex justify-center bg-gray-200">
        <div className="mt-10 w-full max-w-[1550px] flex flex-col bg-white">
          {selectedProducts.map((product) => (
            <div key={product.id} className="flex items-center space-x-4 p-4 border-b">
              <img src={product.image} className="w-40 h-40 object-contain" alt={product.title} />
              <div className="flex-grow">
                <p className="font-semibold mt-3">{product.title}</p>
                <p>${product.price}</p>
                <p>{product.category}</p>

                <div className="flex items-center mt-3 space-x-2">
                  <button onClick={() => handleDecrease(product.id)} className="border border-black px-4 rounded-3xl">-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleIncrease(product.id)} className="border border-black px-4 rounded-3xl">+</button>
                </div>
                <p className="text-[20px] font-semibold mt-3 font-sans">Total: ${calculateTotalPrice(product)}</p>

                <button onClick={handleBuyNow} className="border border-green-700 mt-3 h-10 w-[90px] bg-green-500 rounded-3xl font-semibold">Buy Now</button>
                <button onClick={() => handleRemove(product.id)} className="border border-red-700 mt-3 h-10 w-[90px] bg-red-500 rounded-3xl ml-10 font-semibold">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buy Now Form */}
      {showBuyNowForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white border border-red-500 p-8 rounded-lg shadow-lg max-w-[600px] w-full">
            <h3 className="text-4xl flex items-center justify-center font-semibold mb-4">Enter Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-lg font-medium mb-1">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-lg font-medium mb-1">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" required className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium mb-1">Phone:</label>
                  <input type="text" id="phone" name="phone" required className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium mb-1">Email:</label>
                  <input type="email" id="email" name="email" required className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="city" className="block text-lg font-medium mb-1">City:</label>
                  <input type="text" id="city" name="city" required className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="pinCode" className="block text-lg font-medium mb-1">Pin Code:</label>
                  <input type="text" id="pinCode" name="pinCode" required className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300" onChange={handleChange} />
                </div>
                <div className="col-span-2">
                  <label htmlFor="address" className="block text-lg font-medium mb-1">Address:</label>
                  <input type="text" id="address" name="address" required className="border border-gray-300 rounded-md px-3 h-[90px] py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300" onChange={handleChange} />
                </div>
              </div>

              <div className="flex justify-center mt-[50px]">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 mr-4">Submit</button>
                <button type="button" onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-800 transition duration-300">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="md-10">
        <div className="flex flex-col h-[25px] bg-gray-200"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
