import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import celestialBg from '../../imports/Gemini_Generated_Image_p1gs0yp1gs0yp1gs.png';
import kundliImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_38_32_AM.png';
import horoscopeImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_36_49_AM.png';
import zodiacWheel from '../../imports/240_F_999898861_tkRpLuivJqmdBz6dLOGGua5Fb9586LUX.jpg';
import celestialBanner from '../../imports/240_F_794875557_qa5hIqGI18y8D7i5iEy0KisEac0e7hUS.jpg';

export default function Blog() {
  const featuredPost = {
    title: 'Complete Guide to Understanding Your Birth Chart',
    excerpt: 'Unlock the secrets of your Kundli and discover how planetary positions at your birth influence your entire life journey. This comprehensive guide covers all 12 houses and their significance.',
    date: 'June 5, 2026',
    readTime: '10 min read',
    category: 'Astrology Basics',
    image: kundliImg,
  };

  const blogPosts = [
    {
      title: 'Mercury Retrograde 2026: What You Need to Know',
      excerpt: 'Learn how to navigate Mercury retrograde periods and turn potential challenges into opportunities for growth and reflection.',
      date: 'June 1, 2026',
      readTime: '7 min read',
      category: 'Planetary Transits',
      image: horoscopeImg,
    },
    {
      title: 'Zodiac Sign Compatibility in Relationships',
      excerpt: 'Discover which zodiac signs are most compatible with yours and understand the dynamics of astrological relationships.',
      date: 'May 28, 2026',
      readTime: '8 min read',
      category: 'Relationships',
      image: zodiacWheel,
    },
    {
      title: 'The Power of Vedic Astrology Remedies',
      excerpt: 'Explore effective remedies from Vedic astrology to overcome obstacles and enhance positive planetary influences in your life.',
      date: 'May 25, 2026',
      readTime: '6 min read',
      category: 'Remedies',
      image: celestialBanner,
    },
    {
      title: 'Career Predictions Based on Your 10th House',
      excerpt: 'Understanding how the 10th house in your birth chart reveals your career path and professional success.',
      date: 'May 20, 2026',
      readTime: '9 min read',
      category: 'Career',
      image: kundliImg,
    },
    {
      title: 'Full Moon Energy: Harnessing Lunar Power',
      excerpt: 'Learn how to work with full moon energy for manifestation, release, and spiritual growth.',
      date: 'May 15, 2026',
      readTime: '5 min read',
      category: 'Lunar Astrology',
      image: celestialBg,
    },
    {
      title: 'Numerology: The Meaning Behind Numbers',
      excerpt: 'Decode the significance of numbers in your life and discover your life path number.',
      date: 'May 10, 2026',
      readTime: '7 min read',
      category: 'Numerology',
      image: horoscopeImg,
    },
    {
      title: 'Vastu Tips for a Prosperous Home',
      excerpt: 'Simple Vastu Shastra principles to bring positive energy and prosperity to your living space.',
      date: 'May 5, 2026',
      readTime: '6 min read',
      category: 'Vastu Shastra',
      image: zodiacWheel,
    },
    {
      title: 'Saturn Return: Your Cosmic Coming of Age',
      excerpt: 'What to expect during your Saturn return and how to make the most of this transformative period.',
      date: 'April 30, 2026',
      readTime: '8 min read',
      category: 'Planetary Transits',
      image: celestialBanner,
    },
    {
      title: 'Tarot Reading for Beginners',
      excerpt: 'A comprehensive introduction to Tarot cards and how to perform your first reading.',
      date: 'April 25, 2026',
      readTime: '10 min read',
      category: 'Tarot',
      image: kundliImg,
    },
  ];

  const categories = [
    'Astrology Basics',
    'Planetary Transits',
    'Relationships',
    'Career',
    'Remedies',
    'Numerology',
    'Vastu Shastra',
    'Tarot',
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
          <h1 className="text-white mb-4">Astrology Blog</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Insights, wisdom, and guidance from the world of astrology
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[var(--gold)] mb-4">
              <TrendingUp className="w-5 h-5" />
              <span>Featured Article</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-[var(--purple-50)] to-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-80 lg:h-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[var(--gold)] text-[var(--purple-dark)] px-4 py-2 rounded-full">
                  {featuredPost.category}
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-[var(--purple-dark)] mb-4">{featuredPost.title}</h2>
                <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 bg-[var(--purple-dark)] text-white px-6 py-3 rounded-full hover:bg-[var(--purple-light)] transition-colors duration-300 self-start">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--purple-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-[var(--purple-dark)] mb-4">Discover the World of Astrology</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    index === 0
                      ? 'bg-[var(--purple-dark)] text-white'
                      : 'bg-white text-[var(--purple-dark)] hover:bg-[var(--purple-dark)] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[var(--purple-dark)] mb-8">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--purple-dark)] text-white px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[var(--purple-dark)] mb-3 line-clamp-2">{post.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-[var(--gold)] hover:text-yellow-600 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[var(--purple-dark)] to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Get Personalized Astrological Guidance</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            While our blog provides general insights, nothing beats a personalized consultation tailored to your unique birth chart
          </p>
          <a
            href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--gold)] text-[var(--purple-dark)] px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
