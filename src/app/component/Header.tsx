"use client";
import React from 'react';
import { SlMagnifier } from 'react-icons/sl';
import { MdLogin } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-24 px-6 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_joinplus-3a4cec.svg" className="h-12 mr-2" alt="Logo" />
      </div>

      {/* Search Input */}
      <div className="relative w-full max-w-lg">
        <SlMagnifier className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
        <input
          type="text"
          className="pl-10 pr-[300px] py-2 bg-[#D9EBF3] w-[700px] rounded-md focus:outline-none"
          placeholder="Search Products Here..."
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <MdLogin className="text-2xl" />
          <p className="text-[25px] ml-1">Login</p>
        </Link>
        
        <Link href="/cart" className="flex items-center">
          <BsCart3 className="text-2xl" />
          <p className="text-[25px] ml-1">Cart</p>
        </Link>
        
        <Link href="/" className="flex items-center">
          <CiShop className="text-3xl" />
          <p className="text-[25px] ml-1">Become a Seller</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
