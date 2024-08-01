import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className=" text-white text-base sm:text-lg md:text-xl lg:text-2xl"
      >
        {label}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 rounded shadow-lg"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;