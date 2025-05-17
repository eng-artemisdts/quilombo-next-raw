"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";

const adminPrefixes = ["/acesso", "/cadastro", "/admin", "/arquivo"];

const AppHeader: React.FC = () => {
  const pathname = usePathname();
  const isAdmin = adminPrefixes.some((p) => pathname.startsWith(p));

  return <Header isAdminContext={isAdmin} />;
};

export default AppHeader;
