"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: "Beranda", href: "/" },
  { name: "Sejarah", href: "/sejarah" },
  { name: "Visi Misi", href: "/visi-misi" },
  { name: "Tenaga Pendidik", href: "/tenaga-pendidik" },
  { name: "Fasilitas Sekolah", href: "/fasilitas-sekolah" },
  { name: "Jurusan", href: "/jurusan" },
  { name: "Kurikulum", href: "/kurikulum" },
  { name: "Kalender Akademik", href: "/kalender" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col fixed w-full z-20 top-0">
      <nav className="w-full z-20 left-0 bg-white/85 backdrop-blur-md shadow-sm">
        <div className="w-full flex flex-wrap items-center justify-between px-4 py-[10px] md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="SMKS Imelda Medan"
              className="w-6 h-6"
              width={100}
              height={100}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-zinc-900">
              SMKS Imelda Medan
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="w-full md:block md:w-auto" id="navbar-menu">
            {/* Mobile Menu (with animation) */}
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  className="flex flex-col p-4 md:hidden mt-4 text-sm font-normal rounded-lg bg-white"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={variants}
                  transition={{ duration: 0.3 }}
                >
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 transition-colors duration-200 ${
                          isActive(item.href)
                            ? "text-black"
                            : "text-gray-700 md:hover:text-zinc-950"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            {/* Desktop Menu (no animation) */}
            <ul className="hidden md:flex md:items-center flex-col p-4 md:p-0 mt-4 text-sm font-normal rounded-lg md:flex-row md:space-x-8 md:mt-0 bg-white md:bg-transparent">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-black"
                        : "text-gray-700 md:hover:text-zinc-950"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* admin area link */}
              <li>
                <Link
                  href="/siprakerin"
                  className={`rounded-full block py-2 px-4 transition-colors duration-200 ${
                    isActive("/siprakerin")
                      ? "text-black"
                      : "text-gray-700 md:hover:text-zinc-950"
                  }`}
                >
                  Siprakerin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
