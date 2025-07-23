import React from 'react';
import { Globe, Smartphone, Settings, ArrowRight, CheckCircle, Code, Database, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies to drive business growth and streamline operations.',
      benefits: 'Increase online presence by 300% and automate business processes',
      features: ['Responsive Business Websites', 'E-commerce Solutions', 'Customer Portals', 'Booking Systems', 'CMS Integration'],
      pricing: 'Starting at $2,500',
      technologies: ['React', 'Node.js', 'WordPress', 'Shopify']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage customers and drive business growth through innovative features.',
      benefits: 'Increase customer engagement by 250% with mobile-first approach',
      features: ['iOS & Android Apps', 'Cross-Platform Development', 'Push Notifications', 'Offline Functionality', 'App Store Publishing'],
      pricing: 'Starting at $8,000',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize operations, enhance security, and accelerate digital transformation.',
      benefits: 'Reduce IT costs by 40% while improving efficiency and security',
      features: ['Technology Audits', 'Cloud Migration', 'Security Assessment', 'Digital Strategy', 'DevOps Implementation'],
      pricing: 'Starting at $150/hour',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    }
  ];

const trustBadges = [
  { name: 'AWS', logo: '☁️' },
  { name: 'React', logo: '⚛️' },
  { name: 'Node.js', logo: '🟢' },
  { name: 'Flutter', logo: '💙' },
  { name: 'MongoDB', logo: '🍃' },
  { name: 'Docker', logo: '🐳' },
  { name: 'Android/iOS', logo: '📱' },
  { name: 'Paralegal Content Writer', logo: '🖋️' }
];


  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed specifically for small businesses ready to grow and compete.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2 hover-lift scroll-animate">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 service-icon">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300 service-icon" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <div className="text-orange-600 font-semibold text-lg mb-4">{service.pricing}</div>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6 hover-glow">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 font-medium">{service.benefits}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-600 btn-animated">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center mb-16 scroll-animate">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Technologies We Master</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <span className="text-2xl">{badge.logo}</span>
                <span className="text-gray-700 font-medium">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center scroll-animate">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white hover-glow">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a free consultation and custom quote for your project. No obligation, just expert advice on how technology can help your business grow.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 btn-animated hover-lift"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;