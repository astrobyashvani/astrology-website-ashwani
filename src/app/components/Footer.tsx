import { Link } from 'react-router-dom';
import {Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../imports/ChatGPT_Image_Jun_3__2026__11_08_33_PM.png';

export default function Footer() {
  return (
    <footer className="bg-[var(--purple-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">Astrologer Ashvani</div>
            <p className="text-gray-300 mb-4">
              Professional Vedic Astrologer with 5+ years of experience in Kundli Analysis, Palm Reading & Spiritual Guidance.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/astrobyashvani1?igsh=MTBvZ3Bkbmk4ejE=" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[var(--gold)] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[var(--gold)] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[var(--gold)] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[var(--gold)] transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-[var(--gold)] transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[var(--gold)] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--gold)] mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Kundli Reading</li>
              <li>Love & Relationship</li>
              <li>Career Consultation</li>
              <li>Palm Reading</li>
              <li>Numerology</li>
              <li>Gemstone Suggestion</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--gold)] mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="https://wa.me/918756871600" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                    +91 8756871600
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:astrobyashvani@gmail.com" className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                  astrobyashvani@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
               <span className="text-gray-300">
                  District Varanasi,<br />
                  Post Maidagin,<br />
                 221001
                   </span>
               </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="text-center">
               © 2026 Astrologer Ashvani. All rights reserved.
               <br />
                 <p>
                         Website Designed & Developed by Ankit Prajapati
                          </p>
          </p>
        </div>
      </div>
    </footer>
  );
}
