import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import celestialBg from '../../imports/Gemini_Generated_Image_p1gs0yp1gs0yp1gs.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `
Hello Ashvani Ji,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
  `;

  const whatsappUrl =
    `https://wa.me/918756871600?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      details: ['+91 8756871600', 'Available for consultation'],
      action: 'https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you.',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['astrobyashvani@gmail.com', 'For inquiries'],
      action: 'mailto:astrobyashvani@gmail.com',
    },
    {
      icon: Clock,
      title: 'Availability',
      details: ['Open for consultation', 'Book via WhatsApp'],
      action: null,
    },
    
  ];

  const services = [
    'Kundli Reading',
    'Love & Relationship Guidance',
    'Career Consultation',
    'Palm Reading',
    'Numerology',
    'Gemstone Suggestion',
    'General Consultation',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[var(--purple-dark)] to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={celestialBg}
            alt="Celestial Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Book Your Consultation</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Connect with me on WhatsApp for personalized astrology guidance
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-[var(--purple-50)] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                    <Icon className="w-8 h-8 text-[var(--purple-dark)]" />
                  </div>
                  <h3 className="text-[var(--purple-dark)] mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700">
                      {info.action && idx === 0 ? (
                        <a href={info.action} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--purple-dark)] transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-[var(--purple-dark)] to-purple-900 rounded-2xl p-8 text-white text-center mb-8">
                <MessageCircle className="w-16 h-16 mx-auto mb-4 text-[var(--gold)]" />
                <h2 className="text-white mb-4">Book via WhatsApp</h2>
                <p className="text-gray-200 mb-6">
                  All consultations are currently done through WhatsApp for your convenience. Click the button below to start your consultation.
                </p>
                <a
                  href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20ba5a] transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <h2 className="text-[var(--purple-dark)] mb-6">Or Send Us an Email</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--purple-dark)] focus:ring-2 focus:ring-[var(--purple-light)] outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--purple-dark)] focus:ring-2 focus:ring-[var(--purple-light)] outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--purple-dark)] focus:ring-2 focus:ring-[var(--purple-light)] outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--purple-dark)] focus:ring-2 focus:ring-[var(--purple-light)] outline-none transition-all"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--purple-dark)] focus:ring-2 focus:ring-[var(--purple-light)] outline-none transition-all resize-none"
                    placeholder="Tell us about your consultation needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--purple-dark)] text-white px-6 py-4 rounded-full hover:bg-[var(--purple-light)] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-[var(--purple-dark)] mb-6">Why Choose Me</h2>

              <div className="bg-[var(--purple-50)] rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>5+ years of expert astrology experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Accurate predictions with proven track record</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Personalized guidance for your unique situation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Confidential consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hindi & English language support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Practical remedies and spiritual solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trusted by 1000+ satisfied clients</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[var(--purple-50)] to-white rounded-xl p-6">
                <h3 className="text-[var(--purple-dark)] mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[var(--purple-dark)]" />
                    <a href="https://wa.me/918756871600" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[var(--purple-dark)]">
                      +91 8756871600
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[var(--purple-dark)]" />
                    <a href="mailto:astrobyashvani@gmail.com" className="text-gray-700 hover:text-[var(--purple-dark)]">
                      astrobyashvani@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                     <Instagram className="w-5 h-5 text-[var(--purple-dark)]" />
                     <a
                     href="https://www.instagram.com/astrobyashvani1?igsh=MTBvZ3Bkbmk4ejE="
                      target="_blank"
                      rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[var(--purple-dark)]"
                          >
                          @astrobyashvani1
                            </a>
                 </div>
                 <div className="flex items-start gap-3">
                   <MapPin className="w-5 h-5 text-[var(--purple-dark)] mt-1" />
                   <span className="text-gray-700">
                   District Varanasi <br />
                   Post Maidagin <br />
                   PIN: 221001
                   </span>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
