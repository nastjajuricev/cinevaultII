import { Link, useLocation } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-lg font-medium tracking-tight">Nastja Juricev</a>
        </Link>

        {/* Desktop View */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`hover:text-foreground/80 transition-colors ${
                  location === link.href ? "text-foreground" : "text-foreground/60"
                }`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
          <span className="text-sm text-foreground/60">Freelance graphic designer</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-background border-b md:hidden"
            >
              <div className="flex flex-col py-4">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`px-4 py-2 hover:bg-foreground/5 ${
                        location === link.href ? "text-foreground" : "text-foreground/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <div className="px-4 py-2 text-sm text-foreground/60">
                  Freelance graphic designer
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}