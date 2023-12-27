import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 600);
      if (screenWidth > 600) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar-container'>
      <img src='/Images/Logo.png' alt='Company Logo' className='logo-image' />
      {isMobile ? (
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      ) : (
        <ul className='hidden md:flex'>
          <li className='p-4'>SERVICE</li>
          <li className='p-4'>ABOUT US</li>
          <li className='p-4'>CONTACT US</li>
          <li className='p-4'>CAREERS</li>
        </ul>
      )}
      <ul
        className={
          nav
            ? 'fixed left-0 top-20 w-[60%] h-full border-r border-r-gray-900 bg-[#6B3CC9] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >     
        <li className='p-4'>SERVICE</li>
        <li className='p-4'>ABOUT US</li>
        <li className='p-4'>CONTACT US</li>
        <li className='p-4'>CAREERS</li>
      </ul>
    </div>
  );
};
export default Navbar;
