import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Khan',
      role: 'Dairy Farm Owner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Vivadhara’s Maize DDGS has improved the milk yield of my cattle significantly. The quality is consistent, clean, and always delivered on time. A trustworthy supplier for dairy farms.',
    },
    {
      id: 2,
      name: 'Sai Samuel',
      role: 'Poultry Farm Manage',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Their Mixed DDGS (35% Protein) has helped us improve feed conversion ratio and bird growth. Excellent quality and very cost-effective compared to other suppliers.',
    },
    {
      id: 3,
      name: 'Shankar Reddy',
      role: 'Cattle Nutrition Provider',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    text: 'Vivadhara’s Rice DDGS is rich in digestible protein and energy. My clients have seen better body weight gain and improved digestion in their herds. Highly recommended.',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Feed Mills',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
     text: 'We regularly procure Maize DOC and E-Fiber from Vivadhara. The moisture and protein levels are always accurate. Great supplier for bulk feed production.',
    },
    {
      id: 5,
      name: 'Fathima Queera',
      role: 'Goat & Sheep Farming',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Corn Cob Powder and Groundnut Shell Powder from Vivadhara have been excellent roughage sources for my goats and sheep. Very economical and natural.',
    },
    {
      id: 6,
      name: 'Vijay Surya',
      role: 'Aquaculture Farmer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'For fish and shrimp, the protein quality in Vivadhara DDGS is excellent. Growth rates and feed efficiency in our ponds have improved drastically.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-[#FAFDD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Client
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-blue-200" size={32} />
                  <p className="text-gray-600 leading-relaxed pl-6">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFDD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#99540f] rounded-2xl p-12 text-center text-[#f2c379]">
            <h2 className="text-3xl font-bold mb-4">Join Our Happy Clients</h2>
            <p className="text-xl mb-8 text-blue-100">
              Experience the same level of excellence and professionalism
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm">Client Satisfaction</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg">
                <p className="text-3xl font-bold">250+</p>
                <p className="text-sm">Projects Delivered</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg">
                <p className="text-3xl font-bold">4.9/5</p>
                <p className="text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
