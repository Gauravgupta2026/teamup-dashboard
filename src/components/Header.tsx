
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
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
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold flex items-center">
            <span className="gradient-text mr-1">Team</span>
            <span className="font-extrabold">Up</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#about" className="text-sm font-medium hover:text-teamup-blue transition-colors">About</a>
          <a href="#memberships" className="text-sm font-medium hover:text-teamup-blue transition-colors">Memberships</a>
          <a href="#events" className="text-sm font-medium hover:text-teamup-blue transition-colors">Events</a>
          <a href="#contact" className="text-sm font-medium hover:text-teamup-blue transition-colors">Contact</a>
        </nav>

        <Button 
          className="hidden md:flex items-center gap-2 bg-teamup-blue hover:bg-teamup-blue/90 text-white"
          size="sm"
        >
          <Download size={16} /> 
          <span>Download the TeamUp app</span>
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
              className="text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#memberships" 
              className="text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Memberships
            </a>
            <a 
              href="#events" 
              className="text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="w-full flex items-center justify-center gap-2 bg-teamup-blue hover:bg-teamup-blue/90 text-white"
              size="sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={16} /> 
              <span>Download the TeamUp app</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
