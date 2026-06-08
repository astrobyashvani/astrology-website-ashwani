import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import logo from '../../imports/ChatGPT_Image_Jun_3__2026__11_08_33_PM.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Astrologer Ashvani" className="h-16 w-auto" />
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--purple-dark)]'
                      : 'text-gray-700 hover:text-[var(--purple-dark)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--purple-dark)] text-white px-6 py-2.5 rounded-full hover:bg-[var(--purple-light)] transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-[var(--purple-dark)]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--purple-dark)]'
                      : 'text-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[var(--purple-dark)] text-white px-6 py-2.5 rounded-full"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
