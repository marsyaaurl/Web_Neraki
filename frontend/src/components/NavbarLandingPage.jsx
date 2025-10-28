"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function NavbarLandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Our Features", href: "/#feature" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-4 py-3">
      <div className="flex justify-between items-center">
        <Link href="#home" className="px-2">
          <h1 className="uppercase font-rubikmaps text-5xl text-blue">
            Neraki
          </h1>
        </Link>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={32} color="#8c2b02" />
          ) : (
            <Menu size={32} color="#374F86" />
          )}
        </button>

        <div className="hidden md:flex md:items-center gap-3">
          <ul className="flex md:bg-[#FFF9DA] md:rounded-full md:gap-1.5">
            {links.map((link) => (
              <li
                key={link.href}
                className="px-3 py-2 md:py-3 rounded-full hover:bg-yellow"
              >
                <Link href={link.href} className="text-blue font-semibold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/login">
            <Button label="Log In" variant="blue" className="w-36 py-2.5" />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-3 mt-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 rounded-full text-blue font-semibold hover:bg-blueHover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/login">
            <Button label="Log In" variant="blue" className="w-full py-2.5" />
          </Link>
        </div>
      )}
    </nav>
  );
}
