import React, { useEffect, useRef, useState } from 'react'
import { Search, User, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null)

  useEffect(() => {
   function handleClickOutside(e){
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false)
    }
   }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown",handleClickOutside)
  }, [])

  useEffect(() => {
    function handleScroll(){
      setIsDropdownOpen(false)
    }
    window.addEventListener("scroll",handleScroll)
  
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  
  return (
  <>
    
    <header className="w-full bg-black text-white text-center py-2 text-sm">
      FREE SHIPPING OVER $100 - SAME DAY SHIPPING IF ORDERED BY 10 AM PST
    </header>
    <nav className="w-full flex justify-between items-center px-10 py-4 bg-white shadow-md sticky top-0 z-10">
      <h1 className="text-xl font-bold">
        <img src="/home/kinglogo.png" alt="KINGS DTF" className='w-36' />
      </h1>
      <ul className="flex space-x-6 text-gray-700">
        <NavLink to={"/"} className="cursor-pointer font-medium">Home</NavLink>
        <NavLink
        ref={dropdownRef}
            className="relative cursor-pointer font-medium flex items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            // onScroll={()=>setIsDropdownOpen(false)}
          >
            CUSTOM DTF TRANSFERS
            {isDropdownOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" /> }
            

            {isDropdownOpen && (
              <ul className="absolute flex flex-col top-full left-0 bg-white shadow-lg py-2 w-56">
                <NavLink to={"/products/2"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  DTF GANG SHEET TRANSFERS
                </NavLink>
                <NavLink to={"/products/1"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  DTF TRANSFERS BY SIZE
                </NavLink>
                <NavLink to={"/products/3"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  DTF Transfers Custom Sizing
                </NavLink>
              </ul>
            )}
          </NavLink>
        <NavLink to={"/faq"} className="cursor-pointer font-medium">FAQ</NavLink>
        <NavLink  to={"/blogs"} className="cursor-pointer font-medium">Blogs</NavLink>
        <NavLink to={"/contact"} className="cursor-pointer font-medium">Contact</NavLink>
      </ul>
      <div className="flex space-x-8">
          <Search className="cursor-pointer w-6 h-6" />
          <User className="cursor-pointer w-6 h-6" />
          <ShoppingBag className="cursor-pointer w-6 h-6" />
        </div>
    </nav>
    </>
    
  )
}

export default Navbar
