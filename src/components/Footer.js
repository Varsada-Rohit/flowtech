import React from 'react';
import logo from '../assests/Flowtech.png';
import { Link } from 'react-router-dom';
export default function Footer() {
   return (
      <div className='myfooter '>
         <div className='container'>
            <div className='row '>
               <div className='col-lg-3 col-md-6 brand-footer'>
                  <h5 className='footer-heading'>FLOWTECH POLYMERS</h5>
                  <img
                     src={logo}
                     alt=''
                     style={{
                        height: '4rem',
                     }}
                  />
                  <p className='socialMedia-icon mt-4'>
                     <Link href='#' className='mr-3'>
                        <i class='fab fa-instagram'></i>
                     </Link>
                     <Link href='#' className='mr-3'>
                        <i class='fab fa-facebook-f'></i>
                     </Link>
                     <Link href='#' className='mr-3'>
                        <i class='fab fa-twitter'></i>
                     </Link>
                     <Link href='#' className='mr-3'>
                        <i class='fab fa-whatsapp'></i>
                     </Link>
                  </p>
               </div>

               <div className='col-lg-3 col-md-6 products-footer'>
                  <h5 className='footer-heading'>Our Products</h5>
                  <ul>
                     <li>
                        <Link href='#'>Flush tank</Link>
                     </li>
                     <li>
                        <Link href='#'>Flush Valve</Link>
                     </li>
                     <li>
                        <Link href='#'>Seat Cover</Link>
                     </li>
                  </ul>
               </div>

               <div className='col-lg-3 col-md-6 products-footer'>
                  <h5 className='footer-heading'>We Are</h5>
                  <ul>
                     <li>
                        <Link href='#'>About</Link>
                     </li>
                     <li>
                        <Link href='#'>Contact</Link>
                     </li>
                  </ul>
               </div>

               <div className='col-lg-3 col-md-6 contact-us'>
                  <h5 className='footer-heading'>Contact us</h5>
                  <p>
                     Madhav Industrial Estate, Plot No.3-4, Opp. ABC LPG Gas
                     Pump, Rajkot-Morbi Highway, At-Virpur(M), Ta-Tankara, Dist
                     - Morbi - 363641, Gujarat
                  </p>
                  <div
                     className='
              '
                     style={{ textAlign: 'left' }}
                  >
                     <a href='mailto:flowtechpolymers@gmail.com'>
                        <i className='far fa-envelope'></i>
                        flowtechpolymers@gmail.com
                     </a>
                     <br />

                     <a href='tel:+919712022140'>
                        <i className='fas fa-phone'></i>
                        +91 97120 22140
                     </a>
                     {/* <br />
                     <Link href='tel:+919612833333'>
                        <i className='fas fa-phone'></i>
                        +919612833333
                     </Link> */}
                  </div>
               </div>
            </div>
         </div>
         <div className='copyright text-center'>Copyright 2020</div>
      </div>
   );
}
