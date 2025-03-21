
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download, ArrowRightCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/90 dark:bg-teamup-dark/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className=" mx-32 flex items-center justify-between">
        <div className="flex">
          <a href="/" className="text-xl font-bold flex items-center">
            <span className="text-black text-2xl font-sans">Team</span>
            <span className="text-black text-2xl font-sans">Up</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#about" className="text-sm font-normal hover:text-teamup-blue transition-colors">About</a>
          <a href="#memberships" className="text-sm font-normal hover:text-teamup-blue transition-colors">Memberships</a>
          <a href="#events" className="text-sm font-normal hover:text-teamup-blue transition-colors">Events</a>
          <a href="#contact" className="text-sm font-normal hover:text-teamup-blue transition-colors">Contact</a>
        </nav>

        <Button variant='link'
          className="bg-black md:flex items-center gap-4 rounded-full text-white"
          size="lg" 
        >
          <ArrowRightCircle size={32} /> 
          <span>Book Court</span>
        </Button>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-teamup-dark shadow-lg absolute top-full left-0 right-0 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-sm font-light py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#memberships" 
              className="text-sm font-light py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Memberships
            </a>
            <a 
              href="#events" 
              className="text-sm font-light py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </a>
            <a 
              href="#contact" 
              className="text-sm font-light py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>

            <Link
            to="/download"
            className="hidden md:inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Download App</span>
          </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
