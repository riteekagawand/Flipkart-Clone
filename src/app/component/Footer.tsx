import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000C66] text-gray-300 py-8 h-[500px]">
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="footer-col">
            <h4 className="text-[30px] font-bold mb-4">Company</h4>
            <ul>
              <li><a href="#" className="hover:text-white text-[20px]">About Us</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Our Services</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4 className="text-[30px] font-bold mb-4">Get Help</h4>
            <ul>
              <li><a href="#" className="hover:text-white text-[20px]">FAQ</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Shipping</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Returns</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Order Status</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Payment Options</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4 className="text-[30px] font-bold mb-4">Online Shop</h4>
            <ul>
              <li><a href="#" className="hover:text-white text-[20px]">Watch</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Bag</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Shoes</a></li>
              <li><a href="#" className="hover:text-white text-[20px]">Dress</a></li>
            </ul>
          </div>

        
          

          {/* Column 4 */}
          <div className="footer-col">
            <h4 className="text-[30px] font-bold mb-4">Follow Us</h4>
            <div className="social-links flex "> 
              <a href="#" className="text-white hover:text-gray-400 text-[40px] mr-4"><FaFacebook /></a>
              <a href="#" className="text-white hover:text-gray-400 text-[40px] mr-4"><FaLinkedin /></a>
              <a href="#" className="text-white hover:text-gray-400 text-[40px] mr-4"><FaInstagramSquare /></a>
              <a href="#" className="text-white hover:text-gray-400 text-[40px]"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
