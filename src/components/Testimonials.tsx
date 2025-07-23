import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      company: 'Tony\'s Pizza',
      role: 'Owner',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'TechFlow built our online ordering system and it completely transformed our business. We went from struggling during COVID to having our best year ever. The system is so easy to use and our customers love it.',
      quote: 'CARVEIT TECH built our online ordering system and it completely transformed our business. We went from struggling during COVID to having our best year ever. The system is so easy to use and our customers love it.',
      rating: 5,
      result: '40% increase in orders'
    },
    {
      name: 'Michael Johnson',
      company: 'Johnson & Associates Law',
      role: 'Managing Partner',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'The case management system TechFlow developed has saved us countless hours. What used to take our staff 2 hours now takes 20 minutes. The client portal has also improved our client satisfaction significantly.',
      quote: 'The case management system CARVEIT TECH developed has saved us countless hours. What used to take our staff 2 hours now takes 20 minutes. The client portal has also improved our client satisfaction significantly.',
      rating: 5,
      result: '50% time savings'
    },
    {
      name: 'Lisa Chen',
      company: 'FlexFit Studio',
      role: 'Studio Manager',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'The mobile app TechFlow created for our fitness studio has been a game-changer. Class bookings are up, no-shows are down, and our members love the convenience. Best investment we\'ve made.',
      quote: 'The mobile app CARVEIT TECH created for our fitness studio has been a game-changer. Class bookings are up, no-shows are down, and our members love the convenience. Best investment we\'ve made.',
      rating: 5,
      result: '60% reduction in no-shows'
    },
    {
      name: 'David Rodriguez',
      company: 'BuildRight Construction',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'The project tracking app has revolutionized how we manage construction projects. Real-time updates, photo documentation, and client communication all in one place. Our projects finish faster and clients are happier.',
      rating: 5,
      result: '25% faster completion'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what small business owners say about working with CARVEIT TECH.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 hover-lift scroll-animate" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 hover-glow"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-scale-in" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2 animate-float" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg hover-glow">
                <p className="text-green-800 text-sm font-semibold">
                  Result: {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center scroll-animate">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Trusted by Growing Businesses</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              'Tony\'s Pizza',
              'FlexFit Studio', 
              'Johnson & Associates',
              'BuildRight Construction',
              'Downtown Family Medicine',
              'Sunshine Retail',
              'TechStart Inc',
              'Local Cafe Co'
            ].map((client, index) => (
              <div key={index} className="text-center hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gray-200 h-16 w-32 mx-auto rounded-lg flex items-center justify-center hover-glow">
                  <span className="text-gray-600 font-medium text-sm">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;