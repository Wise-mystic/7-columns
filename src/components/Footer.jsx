import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import LogoImage from '@/assets/images/7-columns-bg-r.png';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/7colums' },
    { icon: Twitter, url: 'https://twitter.com/7colums' },
    { icon: Instagram, url: 'https://instagram.com/7colums' },
    { icon: Linkedin, url: 'https://linkedin.com/company/7colums' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-7columns-black py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-4 mb-6">
              <img 
                src={LogoImage} 
                alt="7 Columns Logo" 
                className="h-40 w-64 object-contain" 
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Transforming architectural visions into future-forward realities across Ghana. Innovative design, sustainable solutions, and cultural sensitivity at the heart of every project.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-7columns-gold transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-gray-300 hover:text-7columns-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-7columns-gold flex-shrink-0" />
                <span className="text-gray-300">
                  Boabab Street, Ashongman Estate, Dome-Kwabenya, Ghana
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-7columns-gold flex-shrink-0" />
                <span className="text-gray-300">+233 530 853 779</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-7columns-gold flex-shrink-0" />
                <span className="text-gray-300">info@7columns.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} 7 Columns. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
