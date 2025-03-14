
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teamup-dark text-white pt-16 pb-8" id="contact">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-xl font-bold flex items-center mb-6">
              <span className="text-teamup-blue mr-1">Team</span>
              <span>Up</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              The ultimate platform for sports facility booking and team management.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teamup-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teamup-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teamup-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teamup-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Terms & Conditions</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Be Our Partner</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Facility Owners</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Event Organizers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Sports Brands</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Affiliate Program</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-teamup-blue flex-shrink-0 mt-1" />
                <span>123 Sports Avenue, Manipal University Campus, Karnataka, India</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-teamup-blue flex-shrink-0" />
                <a href="mailto:info@teamup.com" className="hover:text-white transition-colors">
                  info@teamup.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-teamup-blue flex-shrink-0" />
                <a href="tel:+918765432100" className="hover:text-white transition-colors">
                  +91 8765432100
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 TeamUp. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <button
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md transition-colors"
              aria-label="Toggle theme"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
