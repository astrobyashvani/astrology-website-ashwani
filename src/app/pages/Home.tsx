import { Link } from 'react-router-dom';
import { Star, Users, Award, TrendingUp, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroBg from '../../imports/2080b3c7e0180d9768f6dbd0f13c0797.0000000.jpg';
import astrologerImg from '../../imports/ChatGPT_Image_Jun_4__2026__12_20_56_AM.png';
import celestialBanner from '../../imports/240_F_794875557_qa5hIqGI18y8D7i5iEy0KisEac0e7hUS.jpg';
import kundliImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_38_32_AM.png';
import horoscopeImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_36_49_AM.png';
import futureImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_41_00_AM.png';
import zodiacWheel from '../../imports/240_F_999898861_tkRpLuivJqmdBz6dLOGGua5Fb9586LUX.jpg';
import ashvaniImg from '../../imports/Ashvani-photo.png';

export default function Home() {
  const services = [
    {
      title: 'Kundli Reading',
      description: 'Complete birth chart analysis for career, marriage, finance, and health.',
      image: kundliImg,
    },
    {
      title: 'Love & Relationship Guidance',
      description: 'Relationship compatibility, breakup issues, and marriage prediction.',
      image: horoscopeImg,
    },
    {
      title: 'Career Consultation',
      description: 'Job change, business growth, government job yoga, and career direction.',
      image: futureImg,
    },
    {
      title: 'Palm Reading',
      description: 'Life line, fate line, marriage line, and personality analysis.',
      image: zodiacWheel,
    },
    {
      title: 'Numerology',
      description: 'Name correction and lucky number guidance.',
      image: kundliImg,
    },
    {
      title: 'Gemstone Suggestion',
      description: 'Astrological gemstone recommendations based on horoscope.',
      image: celestialBanner,
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Astrologer Ashvani\'s guidance completely transformed my life. His predictions are incredibly accurate!',
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best astrologer I\'ve consulted. His career guidance helped me make the right decisions.',
    },
    {
      name: 'Anita Desai',
      rating: 5,
      text: 'His marriage consultation was spot on. Highly recommend for relationship advice.',
    },
  ];

  const stats = [
    { icon: Award, value: '5+ Years', label: 'Experience' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Star, value: 'Accurate', label: 'Predictions' },
    { icon: TrendingUp, value: 'Trusted', label: 'By Clients' },
  ];

  const blogPosts = [
    {
      title: 'Understanding Your Birth Chart',
      excerpt: 'Learn how to read and interpret your astrological birth chart for better self-awareness.',
      date: 'May 15, 2026',
    },
    {
      title: 'Mercury Retrograde: What It Means',
      excerpt: 'Discover how Mercury retrograde affects your daily life and how to navigate it.',
      date: 'May 10, 2026',
    },
    {
      title: 'Vedic Astrology vs Western Astrology',
      excerpt: 'Explore the key differences between these two major astrological systems.',
      date: 'May 5, 2026',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple-dark)] via-purple-900 to-indigo-900">
          <ImageWithFallback
            src={heroBg}
            alt="Celestial Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <ImageWithFallback
              src={astrologerImg}
              alt="Astrologer Ashvani"
              className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-[var(--gold)] shadow-2xl"
            />
          </div>
          <h1 className="mb-6">
            <span className="block">Unlock Your Destiny Through</span>
            <span className="block text-[var(--gold)]">Ancient Vedic Astrology</span>
            <span className="block text-[var(--gold)]">In just ₹301</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 mb-8">
            Professional Vedic Astrologer with expertise in Kundli Analysis, Palm Reading, Relationship Guidance & Spiritual Remedies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--purple-dark)] px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20ba5a] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Consult Now • ₹301
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--purple-dark)] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover comprehensive astrology services tailored to illuminate your path
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[var(--purple-dark)] mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[var(--gold)] hover:text-yellow-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">

  <div className="flex justify-center">
    <ImageWithFallback
      src={ashvaniImg}
      alt="Astro by Ashvani"
      className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
    />
  </div>

  <div>
    <h2 className="text-[var(--purple-dark)] mb-6">
      About Ashvani Ji
    </h2>

    <p className="text-gray-700 leading-8 mb-5">
  Ashvani Ji has been helping individuals and families navigate life's
  important decisions through the timeless wisdom of Vedic Astrology.
  With years of practical consultation experience, he provides
  personalized guidance for career, marriage, relationships, education,
  business, finances, health, and personal growth. Every consultation is
  centered on understanding the unique circumstances of each individual
  and offering meaningful insights based on traditional astrological
  principles.
</p>

<p className="text-gray-700 leading-8 mb-5">
  With a strong understanding of Vedic Astrology, Kundli Analysis,
  Horoscope Matching (Kundli Milan), Planetary Doshas, Dashas, Gochar
  (planetary transits), Muhurat Selection, and Remedial Astrology,
  Ashvani Ji carefully studies every birth chart before providing
  guidance. Rather than offering generic advice, he analyzes planetary
  positions, yogas, and life patterns to help clients gain clarity,
  confidence, and a better understanding of the opportunities and
  challenges ahead.
</p>

<p className="text-gray-700 leading-8 mb-5">
  His consultations are known for being patient, confidential, and
  personalized. Along with detailed horoscope analysis, he recommends
  suitable Vedic remedies such as mantra guidance, gemstone suggestions,
  spiritual practices, and practical solutions tailored to each person's
  horoscope. His goal is to help individuals make informed decisions with
  greater confidence while maintaining a balanced approach rooted in
  authentic Vedic traditions.
</p>

<p className="text-gray-700 leading-8">
  Whether someone is seeking guidance for career growth, marriage,
  relationships, business success, financial planning, family harmony, or
  spiritual well-being, Ashvani Ji is committed to providing thoughtful
  consultations with honesty, compassion, and professionalism. His
  approach combines traditional astrological knowledge with practical
  guidance, empowering clients to move forward with greater clarity,
  confidence, and peace of mind.
</p>

  </div>

</div>

          <div className="mb-12">
            <h3 className="text-center text-[var(--purple-dark)] mb-8">Consult With Me Abouth</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Vedic Astrology', 'Palm Reading', 'Match Making', 'Career Guidance', 'Love & Relationship', 'Spiritual Remedies'].map((skill, index) => (
                <div
                  key={index}
                  className="bg-[var(--purple-50)] rounded-lg p-4 text-center hover:bg-[var(--purple-dark)] hover:text-white transition-all duration-300"
                >
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--purple-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--purple-dark)] mb-4">Why Choose Me</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: '5+ Years Experience' },
              { label: 'Accurate Predictions' },
              { label: 'Personalized Guidance' },
              { label: 'Confidential Consultation' },
              { label: 'Hindi & English Support' },
              { label: 'Trusted By Clients' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[var(--purple-dark)]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--purple-dark)] mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our satisfied clients have to say
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[var(--purple-50)] rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="text-[var(--purple-dark)]">{testimonial.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-[var(--gold)] hover:text-yellow-600 transition-colors"
            >
              View All Testimonials
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[var(--purple-dark)] to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src={celestialBanner}
            alt="Celestial"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Latest from Our Blog</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay updated with astrological insights and wisdom
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-[var(--gold)] mb-2">{post.date}</div>
                <h3 className="text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-[var(--gold)] hover:text-yellow-400 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[var(--purple-dark)] to-purple-900 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-white mb-4">Ready to Unlock Your Destiny?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Book a consultation today and discover what the stars have in store for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--purple-dark)] px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Book Consultation
              </a>
              <a
                href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20ba5a] transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
