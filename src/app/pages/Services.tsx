import { BookOpen, Heart, Briefcase, Hand, Hash, Gem, Star, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import kundliImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_38_32_AM.png';
import horoscopeImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_36_49_AM.png';
import futureImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_41_00_AM.png';
import zodiacWheel from '../../imports/240_F_999898861_tkRpLuivJqmdBz6dLOGGua5Fb9586LUX.jpg';
import celestialBg from '../../imports/Gemini_Generated_Image_p1gs0yp1gs0yp1gs.png';
import celestialBanner from '../../imports/240_F_794875557_qa5hIqGI18y8D7i5iEy0KisEac0e7hUS.jpg';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Kundli Reading',
      description: 'Get a complete birth chart analysis covering career, marriage, finance, and health. Understand your planetary positions, dasha predictions, and life path through detailed Kundli interpretation.',
      features: ['Birth chart analysis', 'Career predictions', 'Marriage timing', 'Financial guidance', 'Health insights', 'Remedial solutions'],
      image: kundliImg,
    },
    {
      icon: Heart,
      title: 'Love & Relationship Guidance',
      description: 'Expert guidance for relationship compatibility, breakup issues, marriage predictions, and love life matters. Get clarity on your romantic relationships and find solutions to relationship challenges.',
      features: ['Compatibility matching', 'Breakup solutions', 'Marriage prediction', 'Relationship healing', 'Love life guidance', 'Partner analysis'],
      image: horoscopeImg,
    },
    {
      icon: Briefcase,
      title: 'Career Consultation',
      description: 'Navigate your professional journey with astrological insights. Get guidance on job changes, business growth, government job possibilities, and ideal career direction based on your birth chart.',
      features: ['Job change timing', 'Business consultation', 'Government job yoga', 'Career direction', 'Promotion predictions', 'Professional growth'],
      image: futureImg,
    },
    {
      icon: Hand,
      title: 'Palm Reading',
      description: 'Comprehensive palmistry analysis covering life line, fate line, marriage line, and personality traits. Discover what your palm reveals about your past, present, and future.',
      features: ['Life line analysis', 'Fate line reading', 'Marriage line interpretation', 'Personality insights', 'Career indications', 'Health predictions'],
      image: zodiacWheel,
    },
    {
      icon: Hash,
      title: 'Numerology',
      description: 'Unlock the power of numbers with name correction and lucky number guidance. Learn how numbers influence your life and get personalized numerology recommendations.',
      features: ['Name correction', 'Lucky numbers', 'Birth date analysis', 'Life path number', 'Destiny number', 'Personal year forecast'],
      image: celestialBanner,
    },
    {
      icon: Gem,
      title: 'Gemstone Suggestion',
      description: 'Get personalized gemstone recommendations based on your horoscope. Learn which gemstones can enhance positive planetary influences and bring prosperity to your life.',
      features: ['Personalized recommendations', 'Planetary gemstones', 'Wearing instructions', 'Gemstone benefits', 'Quality guidance', 'Timing suggestions'],
      image: celestialBg,
    },
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
          <h1 className="text-white mb-4">Our Services</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Expert astrology services to guide you through every aspect of life
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--purple-dark)] to-transparent opacity-60"></div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--purple-50)] rounded-full mb-6">
                      <Icon className="w-8 h-8 text-[var(--purple-dark)]" />
                    </div>
                    <h2 className="text-[var(--purple-dark)] mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="text-[var(--purple-dark)] mb-3">What's Included:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-[var(--gold)] rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--purple-dark)] px-6 py-3 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[var(--purple-dark)] to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-16 h-16 text-[var(--gold)] mx-auto mb-6" />
          <h2 className="text-white mb-4">Ready to Book Your Consultation?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Connect with me on WhatsApp for personalized astrology consultation. Get accurate predictions and practical remedies for your life's challenges.
          </p>
          <a
            href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--purple-dark)] px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            Chat on WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
