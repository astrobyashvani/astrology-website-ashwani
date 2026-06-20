import kuberYantra from "../../imports/kuber-yantra.jpeg";
import gemstone from "../../imports/gemstone.jpeg";
import rudraksha from "../../imports/rudraksha.jpeg";
import crystal from "../../imports/crystal.jpeg";
import mahakalYantra from "../../imports/mahakal-yantra.jpeg";
import mixCrystal from "../../imports/mix-crystal.jpeg";

const products = [
  {
    id: 1,  
    name: "Kuber Yantra",
    price: 2500,
    image: kuberYantra,
    description:
      "Energized Kuber Yantra that helps attract wealth, prosperity, financial growth, abundance, and positive energies into your home and business.",
    reviews: [
      "⭐ Very beautiful and powerful yantra.",
      "⭐ Positive energy increased in my office.",
      "⭐ Highly recommended for prosperity.",
    ],
  },

  {
    id: 2,
    name: "Gemstone",
    price: 2500,
    image: gemstone,
    description:
      "Natural gemstone selected according to astrological needs to improve confidence, luck, health, success, and planetary balance.",
    reviews: [
      "⭐ Genuine quality gemstone.",
      "⭐ Felt positive changes after wearing.",
      "⭐ Excellent finishing.",
    ],
  },

  {
    id: 3,
    name: "Rudraksha",
    price: 2500,
    image: rudraksha,
    description:
      "Sacred Rudraksha beads known for peace of mind, spiritual growth, protection, mental stability, and positive vibrations.",
    reviews: [
      "⭐ Authentic and original.",
      "⭐ Excellent spiritual experience.",
      "⭐ Good quality product.",
    ],
  },

  {
    id: 4,
    name: "Crystal",
    price: 2500,
    image: crystal,
    description:
      "Healing crystals that attract positivity, emotional balance, success, protection, and remove negative energies.",
    reviews: [
      "⭐ Beautiful crystal.",
      "⭐ Positive vibes increased.",
      "⭐ Excellent packaging.",
    ],
  },

  {
    id: 5,
    name: "Mahakal Yantra",
    price: 2500,
    image: mahakalYantra,
    description:
      "Powerful Mahakal Yantra for divine protection, spiritual growth, inner strength, and removal of negativity.",
    reviews: [
      "⭐ Felt spiritually connected.",
      "⭐ Very powerful yantra.",
      "⭐ Great craftsmanship.",
    ],
  },

  {
    id: 6,
    name: "Mix Crystal",
    price: 2500,
    image: mixCrystal,
    description:
      "A combination of healing crystals designed for prosperity, peace, positivity, and balancing energy fields.",
    reviews: [
      "⭐ Amazing energy.",
      "⭐ Beautiful combination.",
      "⭐ Worth purchasing.",
    ],
  },
];

export default function Store() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-[var(--purple-dark)] mb-4">
          Spiritual Store
        </h1>

        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Explore our energized spiritual products for prosperity, protection,
          positivity, and spiritual growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => {
            const whatsappMessage = encodeURIComponent(
              `Hello Ashvani Ji,

I want to buy:

Product: ${product.name}
Price: ₹${product.price}

Please provide more details.`
            );

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-contain bg-gray-100 p-4"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[var(--purple-dark)] mb-3">
                    {product.name}
                  </h2>

                  <p className="text-gray-600 mb-4 min-h-[120px]">
                    {product.description}
                  </p>

                  <h3 className="text-3xl font-bold text-yellow-600 mb-4">
                    ₹{product.price}
                  </h3>

                  <div className="mb-5">
                    {product.reviews.map((review, index) => (
                      <p
                        key={index}
                        className="text-sm text-gray-500 mb-1"
                      >
                        {review}
                      </p>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/918756871600?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block
                      text-center
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      py-3
                      rounded-xl
                      font-bold
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    Buy on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}