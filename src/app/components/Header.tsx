import React from 'react';
import logo from '../images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShop, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const iconStyle = { fontSize: '20px' }; // Adjust this value for desired size

  return (
    <div className="flex items-center rounded-3xl justify-between h-24 bg-[#E6FFFF] px-6">
      <div className="flex items-center">
        <img src={logo} className="h-12 mr-2" alt="Logo" />
      </div>
      <input
        type="text"
        
        className="px-[300px] py-2 border border-green-500 rounded-3xl"
        placeholder="Search Products Here..."
      />
      <div className="nav-right flex flex-row items-center gap-[30px]">
      <button className='btn btn-outline text-[20px] flex items-center'>
          <FontAwesomeIcon icon={faRightToBracket}  /> <p className='text-[30px] font-bold'>Login</p>  {/* Changed icon name */}
        </button>
        <button className="btn btn-primary flex items-center ">
         <FontAwesomeIcon icon={faShoppingCart} /> <p className='text-[30px] font-bold'>Cart</p>
        </button>
        <button className="btn btn-outline flex items-center"> {/* Added 'items-center' for alignment */}
          <FontAwesomeIcon icon={faShop} /> <p className='text-[20px] font-bold'>Become a Seller</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
