import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between h-10 bg-[#000C66] text-gray-500 px-4 h-[350px]">
  <div className=''>
    <span className="text-white hover:text-blue-500">Contact Us: contact@yourcompany.com</span><br />
    <span className="text-white hover:text-blue-500 ml-4">About Us: /about-us</span><br />
  </div>
  <div>
    <span className="text-white hover:text-blue-500 mr-2">Facebook</span><br />
    <span className="text-white hover:text-blue-500">Twitter</span><br />
  </div>
  <div className="text-white flex flex justify-between">© 2024 Company Name</div>
</footer>

  );
};

export default Footer;