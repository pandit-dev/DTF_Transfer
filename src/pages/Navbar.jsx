import React, { useEffect, useRef, useState } from 'react';
import { Search, User, ShoppingBag, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef(null);
  // const menuOpenRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsDropdownOpen(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="w-full bg-black hidden md:flex justify-center text-white  py-2 text-sm">
        FREE SHIPPING OVER $100 - SAME DAY SHIPPING IF ORDERED BY 10 AM PST
      </header>
      <nav className="flex justify-between  px-10 py-4 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-xl font-bold">
          <img src="/home/kinglogo.png" alt="KINGS DTF" className="w-36" />
        </h1>
         {/* Hamburger Menu (Mobile) */}
         <button
          className="text-2xl md:hidden   focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <ul
          className={`fixed z-10 py-8 top-16 left-0 w-full h-auto bg-gray-200 flex flex-col  space-x-8 justify-center space-y-8 transform md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:space-y-0 md:space-x-6 md:py-0 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer font-medium ${isActive ? 'underline font-bold' : ''}`
            }
          >
            Home
          </NavLink>
          <div ref={dropdownRef} className="relative cursor-pointer font-medium flex items-center">
            <span
              className={`flex items-center ${
                isDropdownOpen ? 'underline font-bold' : ''
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              CUSTOM DTF TRANSFERS
              {isDropdownOpen ? (
                <ChevronUp className="w-4 h-4 ml-1" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-1" />
              )}
            </span>

            {isDropdownOpen && (
              <ul className="absolute flex flex-col top-full left-0 bg-white shadow-lg py-2 w-56">
                <NavLink
                  to="/products/2"
                  className={({ isActive }) =>
                    `px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      isActive ? 'underline font-bold' : ''
                    }`
                  }
                >
                  DTF GANG SHEET TRANSFERS
                </NavLink>
                <NavLink
                  to="/products/1"
                  className={({ isActive }) =>
                    `px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      isActive ? 'underline font-bold' : ''
                    }`
                  }
                >
                  DTF TRANSFERS BY SIZE
                </NavLink>
                <NavLink
                  to="/products/3"
                  className={({ isActive }) =>
                    `px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      isActive ? 'underline font-bold' : ''
                    }`
                  }
                >
                  DTF Transfers Custom Sizing
                </NavLink>
              </ul>
            )}
          </div>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `cursor-pointer font-medium ${isActive ? 'underline font-bold' : ''}`
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `cursor-pointer font-medium ${isActive ? 'underline font-bold' : ''}`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer font-medium ${isActive ? 'underline font-bold' : ''}`
            }
          >
            Contact
          </NavLink>
          </ul>
        <div className=" space-x-8 hidden md:flex">
          <Search className="cursor-pointer w-6 h-6" />
          <User className="cursor-pointer w-6 h-6" />
          <ShoppingBag className="cursor-pointer w-6 h-6" />
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
