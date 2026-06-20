import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import celestialBg from '../../imports/Gemini_Generated_Image_p1gs0yp1gs0yp1gs.png';
import kundliImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_38_32_AM.png';
import horoscopeImg from '../../imports/ChatGPT_Image_Jun_4__2026__04_36_49_AM.png';
import zodiacWheel from '../../imports/240_F_999898861_tkRpLuivJqmdBz6dLOGGua5Fb9586LUX.jpg';
import celestialBanner from '../../imports/240_F_794875557_qa5hIqGI18y8D7i5iEy0KisEac0e7hUS.jpg';


export default function Blog() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const featuredPost = {
    title: 'Complete Guide to Understanding Your Birth Chart',
    excerpt: 'Your Kundli, or birth chart, is a cosmic map created from the exact date, time, and place of your birth, revealing the unique patterns that shape your personality, relationships, career, finances, and spiritual journey. Each of the 12 houses governs different areas of life, while the positions of planets and their interactions influence opportunities, strengths, challenges, and life lessons. The ascendant, planetary aspects, yogas, dashas, and transits all work together to create a highly personalized blueprint that cannot be understood through sun signs alone. Even small differences in birth details can lead to significant variations in interpretation, making a deeper understanding of the chart essential for uncovering hidden potentials, recognizing obstacles, and making informed decisions during important phases of life.',
    date: 'June 5, 2026',
    readTime: '10 min read',
    category: 'Astrology Basics',
    image: kundliImg,
  };

  const blogPosts = [
    {
      title: 'Mercury Retrograde 2026: What You Need to Know',
      excerpt: `Mercury Retrograde is one of the most discussed astrological events, occurring when Mercury appears to move backward in the sky from Earth's perspective. This period is often associated with communication delays, misunderstandings, travel disruptions, technological issues, and unexpected changes in plans. However, it is also a powerful time for reflection, reassessment, and revisiting unfinished tasks or relationships from the past. Rather than fearing Mercury Retrograde, understanding its influence can help you slow down, think carefully before making important decisions, improve communication, and turn temporary challenges into valuable opportunities for personal growth, self-awareness, and positive transformation.`,
      date: 'June 1, 2026',
      readTime: '7 min read',
      category: 'Planetary Transits',
      image: horoscopeImg,
    },
    {
      title: 'Zodiac Sign Compatibility in Relationships',
      excerpt: `Zodiac compatibility goes far beyond simply matching Sun signs. Every relationship is influenced by a unique combination of planetary positions, Moon signs, Venus and Mars placements, emotional needs, communication styles, and long-term life goals. Understanding astrological compatibility can reveal why certain connections feel effortless while others require patience and growth. It can help you identify strengths, potential challenges, emotional patterns, and areas where mutual understanding is needed. Whether you are seeking love, strengthening an existing relationship, or simply curious about your cosmic connections, exploring zodiac compatibility offers fascinating insights into attraction, trust, communication, and the deeper dynamics that shape meaningful and lasting relationships.`,
      date: 'May 28, 2026',
      readTime: '8 min read',
      category: 'Relationships',
      image: zodiacWheel,
    },
    {
      title: 'The Power of Vedic Astrology Remedies',
      excerpt: `Vedic astrology offers a wide range of time-tested remedies designed to harmonize planetary energies and reduce the impact of challenging astrological influences. These remedies may include mantras, meditation, charitable acts, gemstones, fasting, spiritual practices, and lifestyle adjustments that encourage inner balance and positive transformation. Rather than changing destiny, these practices are believed to strengthen favorable energies, improve mental clarity, increase confidence, and help individuals navigate obstacles with greater awareness and resilience. Since every birth chart contains a unique combination of planetary placements, the effectiveness and suitability of remedies can vary significantly, making a deeper understanding of one's astrological patterns essential for choosing the most meaningful and beneficial path toward growth, prosperity, and well-being.`,
      date: 'May 25, 2026',
      readTime: '6 min read',
      category: 'Remedies',
      image: celestialBanner,
    },
    {
      title: 'Career Predictions Based on Your 10th House',
      excerpt: `The 10th House, often called the House of Career and Reputation, plays a significant role in shaping your professional journey, ambitions, public image, leadership qualities, and long-term achievements. The sign on the 10th House, its ruling planet, and the placement and aspects of planets within it can reveal your natural talents, preferred work environment, potential career paths, and areas where recognition and success are likely to emerge. It may also highlight professional challenges, periods of growth, changes in direction, and opportunities for advancement. Since every birth chart contains a unique combination of planetary influences, even individuals with the same profession can have entirely different strengths, motivations, and life purposes. Understanding the deeper patterns of the 10th House can provide meaningful insights into career decisions, personal fulfillment, and the path toward lasting success and recognition.`,
      date: 'May 20, 2026',
      readTime: '9 min read',
      category: 'Career',
      image: kundliImg,
    },
    {
      title: 'Full Moon Energy: Harnessing Lunar Power',
      excerpt: `The Full Moon has long been regarded as a powerful period of heightened energy, emotional awareness, and spiritual illumination. In astrology, it represents culmination, clarity, and the completion of cycles, making it an ideal time for reflection, gratitude, manifestation, and releasing what no longer serves your growth. Many people experience increased intuition, vivid dreams, stronger emotions, and a deeper connection to their inner selves during this phase. Full Moon practices such as meditation, journaling, intention setting, and mindful rituals can help channel this energy toward personal transformation and emotional healing. Since each Full Moon interacts differently with individual birth charts and planetary placements, its influence can bring unique opportunities, challenges, and insights that encourage self-discovery, renewal, and meaningful spiritual growth.`,
      date: 'May 15, 2026',
      readTime: '5 min read',
      category: 'Lunar Astrology',
      image: celestialBg,
    },
    {
      title: 'Numerology: The Meaning Behind Numbers',
      excerpt: `Numerology is the ancient study of numbers and their symbolic influence on personality, relationships, career choices, and life's major events. Among its most important concepts is the Life Path Number, derived from your birth date, which is believed to reveal your natural talents, strengths, challenges, and the lessons you are meant to experience throughout your journey. Each number carries unique vibrations and characteristics that can influence decision-making, emotional patterns, compatibility, and personal aspirations. Beyond the Life Path Number, other numerological elements such as Destiny, Soul Urge, and Personality Numbers provide additional layers of insight into your true potential and purpose. Since every individual possesses a unique combination of numbers and energies, understanding these patterns can offer valuable guidance for self-discovery, personal growth, and making more informed choices in different areas of life.`,
      date: 'May 10, 2026',
      readTime: '7 min read',
      category: 'Numerology',
      image: horoscopeImg,
    },
    {
      title: 'Vastu Tips for a Prosperous Home',
      excerpt: `Vastu Shastra is an ancient Indian architectural science that focuses on creating harmony between living spaces and the natural elements of earth, water, fire, air, and space. It offers practical guidelines for the placement of rooms, entrances, furniture, colors, and sacred spaces to encourage balance, positivity, and well-being within a home or workplace. According to Vastu principles, the flow of energy in a space can influence peace of mind, relationships, health, financial stability, and overall prosperity. Simple adjustments such as optimizing directions, improving natural light, and arranging key areas thoughtfully can contribute to a more balanced and uplifting environment. Since every property has a unique layout and every individual has different needs and life circumstances, understanding the deeper principles of Vastu can provide valuable insights for creating spaces that support growth, harmony, and long-term success.`,
      date: 'May 5, 2026',
      readTime: '6 min read',
      category: 'Vastu Shastra',
      image: zodiacWheel,
    },
    {
      title: 'Saturn Return: Your Cosmic Coming of Age',
      excerpt: `A Saturn Return is one of the most significant and transformative periods in astrology, occurring approximately every 29 to 30 years when Saturn returns to the exact position it occupied at your birth. Often associated with increased responsibilities, major life decisions, career changes, relationship shifts, and personal growth, this period encourages individuals to reevaluate their priorities and build a stronger foundation for the future. While it can bring challenges, delays, and moments of self-doubt, Saturn's lessons are ultimately focused on discipline, maturity, resilience, and long-term success. Many people experience important turning points during their Saturn Return, such as changes in career direction, commitments in relationships, or a deeper understanding of their life's purpose. Since the influence of Saturn varies according to individual birth charts, house placements, and planetary aspects, each person's journey through this cosmic milestone can unfold in unique and deeply meaningful ways.`,
      date: 'April 30, 2026',
      readTime: '8 min read',
      category: 'Planetary Transits',
      image: celestialBanner,
    },
    {
      title: 'Tarot Reading for Beginners',
      excerpt: `Tarot is an ancient system of symbolic cards used for self-reflection, intuition, and gaining deeper insights into life's questions and possibilities. A traditional Tarot deck consists of 78 cards, including the Major Arcana, which represents significant life lessons and spiritual themes, and the Minor Arcana, which reflects everyday experiences, emotions, relationships, and challenges. Learning Tarot involves understanding the meanings, symbolism, and energy of each card while developing the intuition to interpret their messages in different situations. Whether you are seeking guidance about love, career, personal growth, or future opportunities, Tarot can serve as a powerful tool for introspection and self-discovery. Since every reading is influenced by the question asked, the card combinations drawn, and the unique circumstances of an individual, Tarot often reveals deeply personal insights that encourage clarity, reflection, and a greater understanding of one's life journey.`,
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
                  <p className={`text-gray-600 mb-4 transition-all duration-300 ${
                    expandedPost === index ? '' : 'line-clamp-3' }`} >
                    {post.excerpt}
                  </p>
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
                  <button
                    onClick={() =>
                     setExpandedPost(
                     expandedPost === index ? null : index
                        )
                        }
                        className="inline-flex items-center text-[var(--gold)] hover:text-yellow-600 transition-colors"
                        >
                       {expandedPost === index ? 'Read Less' : 'Read More'}

                       <ArrowRight
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                        expandedPost === index ? 'rotate-90' : ''
                       }`}
                         />
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
