import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "py-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b-2 border-black dark:border-white"
          : "py-8 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div
          className="group cursor-pointer flex items-center space-x-2"
          onClick={() => onNavigate("/")}
        >
          <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-xl group-hover:rotate-[360deg] transition-transform duration-700">
            L
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase">Valdivia.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigate(link.href)}
              className="nav-item hover:opacity-60"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 border-2 border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-1">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 transform ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } md:hidden`}
      >
        <button
          className="absolute top-8 right-8"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => {
              onNavigate(link.href);
              setIsMenuOpen(false);
            }}
            className="text-4xl font-black uppercase tracking-tighter hover:opacity-50 transition-all"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
