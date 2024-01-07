 // eslint-disable-next-line no-unused-vars
 import React, {  Fragment, useState  } from 'react';
 import { Menu, Transition } from "@headlessui/react";
 import { BiChevronDown } from "react-icons/bi";
 import { CgProfile } from "react-icons/cg";
 import { HiMenuAlt3 } from "react-icons/hi";
 import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
 import { Link } from "react-router-dom";

import CustomButton from './CustomButton';

 const Navbar = () => {
   const user = {};
   const [isOpen, setIsOpen] = useState(false);

   const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);

   };

   return (
    <>
      <div className='relative bg-[#f7fdfd] z-50'>
        <nav className = "container mx-auto flex items-center justify-between p-5">
          <div>
            <Link to='/' className='text-blue-600 font-bold text-xl'>
              Gig<span className = 'text-[#1677cccb]'>Connect</span>
            </Link>
          </div>

          <ul className = "hidden lg:flex gap-10 text-base">
            <li>
                <Link to='/'>Find Job</Link>      
            </li>
            <li>
                <Link to='/'>Listers</Link>      
            </li> <li>
                <Link to='/upload-job'>Upload Job</Link>      
            </li> <li>
                <Link to='/about-us'>About Us</Link>      
            </li>           
          </ul>

          <div className=' lg:block'>
            {
              !user?.token ? (
                <Link to='user/auth'>
                  <CustomButton title="Sign In"

                  containerStyles=""/>
                </Link>

              ): ""
            }
            
          </div>

        </nav>

      </div>
    </>
   )
   
 };
 
 export default Navbar;