import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import menu from "./DropdownMenu.module.css"

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
          className={menu.containerMenu}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-white hover:bg-gray-600 no-underline"
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