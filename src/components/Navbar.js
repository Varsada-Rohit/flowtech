import React, { useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import logo from '../assests/Flowtech.png';
import { motion } from 'framer-motion';

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const history = useHistory();

   const currentTab = (history, path) => {
      if (history.location.pathname === path) {
         console.log('path', history.location.pathname);
         return { color: '#ca2026' };
      } else {
         return { color: 'black' };
      }
   };

   return (
      <motion.nav
         animate={{ y: 0, opacity: 1 }}
         initial={{ y: -100, opacity: 0 }}
      >
         <div className='brand'>
            <Link to='/'>
               <img src={logo} alt='' width='100%' height='100%' />
            </Link>
         </div>
         <div className='nav-links-container'>
            <div className='nav-links'>
               <Link to='/' style={currentTab(history, '/')}>
                  Home
               </Link>
            </div>
            <div className='nav-links'>
               <Link style={currentTab(history, '/products')}>Products</Link>
            </div>
            <div className='nav-links'>
               <Link style={currentTab(history, '/about')}>About</Link>
            </div>
            <div className='nav-links'>
               <Link style={currentTab(history, '/contactus')} to='/contactus'>
                  Contact
               </Link>
            </div>
         </div>
         <div className='icon-container'>
            <div className='mail'>
               <i className='far fa-envelope'></i>
            </div>
            <div className='phone'>
               <i className='fas fa-phone'></i>
            </div>
            <div
               className='hamburger'
               id='hamburger'
               onClick={() => {
                  setIsOpen(!isOpen);
               }}
            >
               <div
                  className={isOpen ? 'line line-1-active' : 'line'}
                  id='line-1'
               ></div>
               <div
                  className={isOpen ? 'line line-2-active' : 'line'}
                  id='line-2'
               ></div>
               <div
                  className={isOpen ? 'line line-3-active' : 'line'}
                  id='line-3'
               ></div>
            </div>
         </div>

         <div
            className={
               isOpen ? 'nav-mobile-container active' : 'nav-mobile-container'
            }
         >
            <div className='nav-links'>
               <Link>Home</Link>
            </div>
            <div className='nav-links'>
               <Link>Categories</Link>
            </div>
            <div className='nav-links'>
               <Link>About</Link>
            </div>
            <div className='nav-links'>
               <Link>Contact</Link>
            </div>
         </div>
      </motion.nav>
   );
}

export default withRouter(Navbar);
