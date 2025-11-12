"use client";
import { useState } from "react";
import Searchbar from "./Searchbar";
import { usePathname } from "next/navigation";
//import { useSearch } from "./SearchContext";

export default function NavbarLoggedIn() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  //const { searchQuery, setSearchQuery } = useSearch();

 // const handleSearch = (e) => {
  //  e.preventDefault();
  //};

  const menuItems = [
    { name: "Home", href: "/Home" },
    { name: "Challenge", href: "/Challenge" },
    { name: "Profile", href: "/Profile" },
  ];

  return (
    <div className="fixed w-full px-5 py-3 flex items-center justify-between bg-white z-50">
      {/* Logo (always left) */}
      <div>
        <a href="/Home">
          <h1 className="uppercase font-rubikmaps text-5xl text-blue">
            Neraki
          </h1>
        </a>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex md:items-center md:gap-6">
        <ul className="flex flex-col md:flex-row md:text-center md:justify-between md:bg-[#FFF9DA] md:rounded-full md:gap-1.5">
          {menuItems.map((link) => (
            <li
              key={link.href}
              className={`px-5 py-2 md:py-3 rounded-full ${
                pathname === link.href
                  ? "bg-[#FFE074] font-semibold"
                  : "hover:bg-[#FFE074]"
              }`}
            >
              <a
                href={link.href}
                className={`text-blue ${
                  pathname === link.href ? "font-semibold" : "font-medium"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <Searchbar
            variant="blue"
            size="lg"
           // value={searchQuery}
           // onChange={setSearchQuery}
           // onSubmit={handleSearch}
          />
        </div>
      </div>

      {/* Mobile: burger button */}
      <div className="md:hidden relative">
        <button
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((s) => !s)}
          className="p-2 rounded-md bg-white/70 hover:bg-white text-blue"
        >
          <span className="sr-only">Open menu</span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {open && (
          <div
            id="mobile-menu"
            className="absolute right-4 top-full mt-2 w-[92vw] max-w-xs bg-white rounded-lg shadow-lg p-4"
          >
            <div className="mb-3">
              <Searchbar variant="blue" size="sm" />
            </div>

            <nav>
              <ul className="flex flex-col gap-2">
                {menuItems.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2 rounded-md text-blue ${
                        pathname === link.href
                          ? "bg-[#FFE074] font-semibold"
                          : "hover:bg-[#FFE074] font-medium"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
