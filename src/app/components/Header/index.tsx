'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { FaSearch } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';

const Header: React.FC = () => {  
  const [active, setActive] = useState<string>('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems = [    
    { label: 'Sobre Nos', href: '#about-us' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Protocolo', href: '#protocol' },
    { label: 'Nicolinas', href: '#nicolinas' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'Arquivo', href: '#archive' },
    { label: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">          
          <div className="flex-shrink-0">
            <Link href="/" className='text-xl font-bold'>
              Logo
            </Link>
          </div>

          {/* Menu para telas maiores */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                label={item.label}
                isActive={active === item.label}
                onClick={() => {
                  setActive(item.label);
                  scrollToSection(item.href);
                }}
              />
            ))}
            {/* Botão de buscas */}
            <button className="px-4 py-2 rounded hover:bg-[#F4AB0B] transition-colors">
              <FaSearch />
            </button>
            {/* Botão para seleção de idioma */}
            <button className="px-4 py-2 rounded hover:bg-[#F4AB0B] transition-colors">
              <FiGlobe />
            </button>
          </div>

          {/* Botão do menu mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                label={item.label}
                isActive={active === item.label}
                onClick={() => {
                  setActive(item.label);
                  scrollToSection(item.href);
                  setIsMobileMenuOpen(false);
                }}
              />
            ))}
            <div className="flex items-center space-x-2 px-4">
              <button className="px-4 py-2 rounded hover:bg-[#F4AB0B] transition-colors">
                <FaSearch />
              </button>
              <button className="px-4 py-2 rounded hover:bg-[#F4AB0B] transition-colors">
                <FiGlobe />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
