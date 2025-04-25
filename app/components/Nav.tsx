"use client";

import { motion, AnimatePresence } from "framer-motion";
import { slideIn } from "../lib/animations";
import { cn } from "@/lib/utils";
import { Text } from "./Text";
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#work-experience", label: "Work" },
    { href: "#news", label: "News" },
    { href: "#awards", label: "Awards" },
    { href: "#tech-stack", label: "Tech" },
    { href: "#contact", label: "Contact" },
  ];

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        variants={slideIn}
        initial="initial"
        animate="animate"
        className="fixed top-0 left-0 right-0 z-50 h-16 
                 bg-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-black/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between">
          <a
            href="/"
            className="font-heading text-xl font-semibold text-gray-100 hover:text-white transition-colors"
          >
            Victor Elexpe
          </a>
          
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className={cn(
                  "text-sm font-medium text-gray-400 transition-colors duration-200 ease-in-out",
                  "hover:text-accent",
                  "focus:outline-none focus-visible:text-accent focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-gray-300 hover:text-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-md"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 top-16 z-40 bg-black/90 backdrop-blur-sm md:hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col items-center space-y-5">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={handleCloseMenu}
                  className={cn(
                    "block py-1 text-xl font-medium text-gray-300 transition-colors",
                    "hover:text-accent",
                    "focus:outline-none focus-visible:text-accent"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
