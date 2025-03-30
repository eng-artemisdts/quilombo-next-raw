import React from 'react';

interface NavLinkProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full font-bold text-black transition-colors text-base leading-none cursor-pointer  ${
        isActive ? 'bg-[#F4AB0B] text-white' : 'hover:bg-[#F4AB0B] hover:text-white'
      }`} onClick={onClick}>
        {label}      
    </button>
  );
};

export default NavLink;
