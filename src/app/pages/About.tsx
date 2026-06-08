import { Award, BookOpen, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import astrologerImg from '../../imports/ChatGPT_Image_Jun_4__2026__12_20_56_AM.png';
import celestialBg from '../../imports/Gemini_Generated_Image_p1gs0yp1gs0yp1gs.png';

export default function About() {
  const achievements = [
    '5+ years of experience in Vedic astrology',
    'Certified Vedic Astrologer',
    'Expert in Kundli Analysis and Palm Reading',
    'Specialized in Love & Relationship Guidance',
    'Over 1000 satisfied clients',
    'Accurate predictions with personalized remedies',
  ];

  const certifications = [
    { title: 'Vedic Astrology', org: 'Certified Vedic Astrologer', year: '2020' },
    { title: 'Palm Reading', org: 'Professional Palm Reader', year: '2021' },
    { title: 'Numerology', org: 'Numerology Specialist', year: '2022' },
    { title: 'Match Making', org: 'Relationship Compatibility Expert', year: '2023' },
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
          <h1 className="text-white mb-4">About Astrologer Ashvani</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Your trusted guide to cosmic wisdom and spiritual enlightenment
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={astrologerImg}
                alt="Astrologer Ashvani"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-[var(--purple-dark)] mb-6">Meet Your Astrologer</h2>
              <p className="text-gray-700 mb-4">
                I am Ashvani, a professional Vedic astrologer with 5 years of experience in astrology consultation, palm reading, relationship guidance, and spiritual remedies. I help people find clarity in career, love, marriage, finance, and life decisions through authentic Vedic knowledge.
              </p>
              <p className="text-gray-700 mb-4">
                My expertise includes Kundli Analysis, Palm Reading, Match Making, Career Guidance, Love & Relationship consultation, and Spiritual Remedies. I combine traditional Vedic wisdom with personalized guidance to provide accurate predictions and practical solutions.
              </p>
              <p className="text-gray-700 mb-6">
                My compassionate approach and commitment to helping people navigate life's challenges have earned the trust of over 1000 clients. Whether you seek guidance on career, relationships, health, or spiritual growth, I am here to illuminate your path through the ancient wisdom of Vedic astrology.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Users className="w-8 h-8 text-[var(--purple-dark)]" />
                  </div>
                  <div>
                    <div className="text-[var(--purple-dark)]">1000+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Award className="w-8 h-8 text-[var(--purple-dark)]" />
                  </div>
                  <div>
                    <div className="text-[var(--purple-dark)]">5+ Years</div>
                    <div className="text-gray-600">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--purple-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--purple-dark)] mb-4">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--purple-50)] rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-[var(--purple-dark)]" />
              </div>
              <h3 className="text-[var(--purple-dark)] mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To help people find clarity in career, love, marriage, finance, and life decisions through authentic Vedic knowledge, personalized guidance, and spiritual remedies.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--purple-50)] rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-[var(--purple-dark)]" />
              </div>
              <h3 className="text-[var(--purple-dark)] mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become a trusted guide for thousands seeking authentic Vedic astrology consultation, spreading awareness about the profound connection between cosmic energies and human destiny with accuracy and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--purple-dark)] mb-4">Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones in the journey of spiritual service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-[var(--purple-50)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-1" />
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[var(--purple-dark)] to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Certifications & Credentials</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional qualifications and expertise in various spiritual sciences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Award className="w-12 h-12 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-300 mb-1">{cert.org}</p>
                    <p className="text-[var(--gold)]">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
