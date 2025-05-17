"use client";
import React from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface NavigateButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
}

export const NavigateButton: React.FC<NavigateButtonProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  const router = useRouter();

  return (
    <button
      {...props}
      onClick={() => router.push(href)}
      className={clsx(
        "rounded-full bg-red-500 p-2 font-semibold text-white transition-opacity duration-300 hover:opacity-80",
        className
      )}
    >
      {children}
    </button>
  );
};
