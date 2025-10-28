"use client";

import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterLandingPage() {
  const quickLinks = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Our Features", href: "/#feature" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <footer className="bg-blue px-10 py-5 md:px-28 lg:px-40 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-5xl text-white uppercase font-rubikmaps">Neraki</h1>

        <div className="flex flex-col md:flex-row gap-3 md:gap-10">
          <div className="flex flex-col gap-2 text-white">
            <h3 className="text-sm font-light">Quick Links</h3>
            <ul className="flex flex-col gap-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:underline text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} color="white" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} color="white" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} color="white" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <p className="text-sm text-white">
          &copy; 2025 Neraki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
