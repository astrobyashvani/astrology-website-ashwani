import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import celestialBg from '../../imports/Gemini_Generated_Image_p1gs0yp1gs0yp1gs.png';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      rating: 5,
      text: 'Astrologer Ashvani completely transformed my life with his accurate predictions and practical guidance. His insights into my career helped me make the right decisions at the right time. I am forever grateful!',
      service: 'Career Guidance',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      rating: 5,
      text: 'The best astrologer I have ever consulted! His Kundli analysis was incredibly detailed and accurate. He predicted major life events that came true exactly as he said. Highly recommend his services.',
      service: 'Kundli Analysis',
    },
    {
      name: 'Anita Desai',
      location: 'Bangalore, India',
      rating: 5,
      text: 'His marriage consultation was spot on. He helped us understand compatibility issues and provided remedies that brought harmony to our relationship. Thank you so much!',
      service: 'Marriage Consultation',
    },
    {
      name: 'Vikram Singh',
      location: 'Jaipur, India',
      rating: 5,
      text: 'I was skeptical at first, but Ashvani\'s horoscope readings changed my perspective. His predictions about my business expansion were accurate down to the month. Amazing!',
      service: 'Business Consultation',
    },
    {
      name: 'Meera Patel',
      location: 'Ahmedabad, India',
      rating: 5,
      text: 'The Vastu consultation for our new home was invaluable. The positive energy in our house is palpable. Our family has been experiencing peace and prosperity ever since.',
      service: 'Vastu Consultation',
    },
    {
      name: 'Arjun Reddy',
      location: 'Hyderabad, India',
      rating: 5,
      text: 'His numerology reading opened my eyes to aspects of my personality I never understood. The remedies he suggested have made a significant positive impact on my life.',
      service: 'Numerology',
    },
    {
      name: 'Kavita Joshi',
      location: 'Pune, India',
      rating: 5,
      text: 'Astrologer Ashvani is not just knowledgeable but also very compassionate. He took time to explain everything in detail and his guidance has been life-changing.',
      service: 'Horoscope Reading',
    },
    {
      name: 'Sanjay Gupta',
      location: 'Kolkata, India',
      rating: 5,
      text: 'The Tarot reading session was incredibly insightful. It gave me clarity on decisions I was struggling with. His intuition is remarkable!',
      service: 'Tarot Reading',
    },
    {
      name: 'Deepa Menon',
      location: 'Chennai, India',
      rating: 5,
      text: 'I have consulted many astrologers, but none come close to Ashvani\'s accuracy and depth of knowledge. His remedies are simple yet highly effective.',
      service: 'Kundli Analysis',
    },
    {
      name: 'Amit Verma',
      location: 'Lucknow, India',
      rating: 5,
      text: 'His career guidance helped me navigate a difficult job transition. Everything he predicted came true, and I am now in a much better position professionally.',
      service: 'Career Guidance',
    },
    {
      name: 'Ritu Saxena',
      location: 'Chandigarh, India',
      rating: 5,
      text: 'The marriage timing consultation was perfect. We got married during the auspicious period he suggested, and our married life has been blissful.',
      service: 'Marriage Consultation',
    },
    {
      name: 'Karthik Nair',
      location: 'Kochi, India',
      rating: 5,
      text: 'Astrologer Ashvani\'s business consultation helped me avoid major losses. His timing predictions for investments were spot on. Highly recommended!',
      service: 'Business Consultation',
    },
  ];

  const stats = [
    { value: '1000+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: 'Accurate', label: 'Predictions' },
    { value: 'Trusted', label: 'Astrologer' },
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
          <h1 className="text-white mb-4">Client Testimonials</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Read what our satisfied clients have to say about their transformative experiences
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--purple-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[var(--purple-dark)] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
              >
                <div className="absolute top-4 right-4 text-[var(--purple-50)]">
                  <Quote className="w-12 h-12" />
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-[var(--purple-dark)] mb-1">{testimonial.name}</div>
                    <div className="text-gray-600 mb-2">{testimonial.location}</div>
                    <div className="inline-block bg-[var(--purple-50)] text-[var(--purple-dark)] px-3 py-1 rounded-full">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[var(--purple-dark)] to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Experience the Transformation?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied clients who have found clarity and direction through expert astrological guidance
          </p>
          <a
            href="https://wa.me/918756871600?text=Hello%20Ashvani%20Ji%2C%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--gold)] text-[var(--purple-dark)] px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
