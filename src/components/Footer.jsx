import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, X, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">7 Colums</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ghana's futuristic architecture firm, combining local expertise with international standards to create exceptional spaces that inspire and endure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <X className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-amber-500 transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-amber-500 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-amber-500 transition-colors text-sm">
                Services
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-amber-500 transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-amber-500 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Our Services</span>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Residential Design</p>
              <p className="text-gray-300 text-sm">Commercial Architecture</p>
              <p className="text-gray-300 text-sm">Sustainable Design</p>
              <p className="text-gray-300 text-sm">Cultural Buildings</p>
              <p className="text-gray-300 text-sm">Construction Management</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Contact Info</span>
            <div className="space-y-3">
              <a 
                href="https://www.google.com/maps/search/123+Liberation+Road+East+Legon,+Accra" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start space-x-3 group"
              >
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0 group-hover:text-orange-600 transition-colors" />
                <p className="text-gray-300 text-sm group-hover:text-amber-500 transition-colors">
                  Boabab Street,<br />
                  Ashongman Estate, Dome-Kwabenya<br />
                  GE-066-0000<br />
                  Greater Accra Region, Ghana
                </p>
              </a>
              <a 
                href="tel:+233-530-853-779"   
                className="flex items-center space-x-3 group"
              >
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0 group-hover:text-orange-600 transition-colors" />
                <p className="text-gray-300 text-sm group-hover:text-amber-500 transition-colors">+233 530 853 779</p>
              </a>
              <a 
                href="mailto:info@7colums.com" 
                className="flex items-center space-x-3 group"
              >
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0 group-hover:text-orange-600 transition-colors" />
                <p className="text-gray-300 text-sm group-hover:text-amber-500 transition-colors">info@7colums.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 7 Colums. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
