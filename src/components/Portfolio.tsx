import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Local Restaurant Online Ordering',
      category: 'Web Development', 
      description: 'Custom online ordering system with payment processing, order management, and customer loyalty program for a local restaurant chain.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Stripe', 'SMS API'],
      results: '40% increase in online orders',
      client: 'Tony\'s Pizza (3 locations)'
    },
    {
      title: 'Fitness Studio Booking App',
      category: 'Mobile Development',
      description: 'iOS and Android app for class bookings, membership management, and push notifications for a local fitness studio.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Push Notifications'],
      results: '60% reduction in no-shows',
      client: 'FlexFit Studio'
    },
    {
      title: 'Law Firm Case Management',
      category: 'Web Development',
      description: 'Custom case management system with client portal, document sharing, and automated billing for a small law practice.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: '50% time savings on admin tasks',
      client: 'Johnson & Associates Law'
    },
    {
      title: 'Retail Inventory Management',
      category: 'IT Consulting',
      description: 'Cloud migration and inventory management system implementation for a growing retail business with multiple locations.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS', 'PostgreSQL', 'React', 'API Integration'],
      results: '30% reduction in IT costs',
      client: 'Sunshine Retail Group'
    },
    {
      title: 'Medical Practice Patient Portal',
      category: 'Web Development',
      description: 'HIPAA-compliant patient portal with appointment scheduling, secure messaging, and prescription management.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'HIPAA Compliance', 'Twilio'],
      results: '70% reduction in phone calls',
      client: 'Downtown Family Medicine'
    },
    {
      title: 'Construction Project Tracker',
      category: 'Mobile Development',
      description: 'Mobile app for construction project management with photo documentation, progress tracking, and client updates.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'AWS S3', 'Real-time Updates'],
      results: '25% faster project completion',
      client: 'BuildRight Construction'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Projects, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped small businesses like yours streamline operations, increase revenue, and serve customers better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover-lift scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full animate-pulse-glow">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors hover-lift">
                      <ExternalLink className="h-4 w-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors hover-lift">
                      <Github className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover-glow">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 text-sm">
                    <Award className="h-4 w-4 mr-1" />
                    {project.results}
                  </div>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors hover-lift">
                    Case Study →
                  </button>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Client: {project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center scroll-animate">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a custom solution that drives real results for your business.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 btn-animated hover-lift"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;