"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "@public/assets/logo.svg";
import { scrollToSection } from "@/lib/utils";
import { UserRole } from "@/models/users";
import axios from "axios";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  isAdminContext?: boolean;
}

const defaultNavItems: NavItem[] = [
  { label: "Sobre Nós", href: "#about-us" },
  { label: "Projetos", href: "#projects" },
  { label: "Protocolo", href: "#protocol" },
  { label: "Nicolinas", href: "#nicolinas" },
  { label: "Podcast", href: "#podcast" },
  { label: "Arquivo", href: "#archive" },
  { label: "Contato", href: "#contact" },
];

const Header: React.FC<HeaderProps> = ({ isAdminContext = false }) => {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  const [navItems, setNavItems] = useState<NavItem[]>(defaultNavItems);
  const [active, setActive] = useState<string>(defaultNavItems[0].label);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/auth/me");
        const data = res.data;
        if (data.authenticated && data.role === UserRole.ADMIN) {
          setIsUserAdmin(true);
        }
      } catch {
        setIsUserAdmin(false);
      } finally {
        setAuthChecked(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (!authChecked && isAdminContext) {
      return;
    }

    if (isAdminContext) {
      const items: NavItem[] = [{ label: "arquivo", href: "/acesso" }];
      if (isUserAdmin) {
        items.push({ label: "cadastrar usuário", href: "/cadastro" });
      }
      setNavItems(items);
      setActive(items[0].label);
    } else {
      setNavItems(defaultNavItems);
      setActive(defaultNavItems[0].label);
    }
  }, [authChecked, isUserAdmin, isAdminContext]);

  if (isAdminContext && !authChecked) {
    return null;
  }

  function handleClick(item: NavItem) {
    setActive(item.label);
    if (isAdminContext) {
      router.push(item.href);
    } else {
      scrollToSection(item.href);
    }
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-full mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <Logo className="w-20 h-20" />
          </Link>

          {/* desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                isActive={active === item.label}
                onClick={() => handleClick(item)}
              />
            ))}
          </div>

          {/* mobile toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen((s) => !s)}>
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                isActive={active === item.label}
                onClick={() => handleClick(item)}
              />
            ))}
            <div className="flex items-center space-x-2 px-4"></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
