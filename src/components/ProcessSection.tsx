import React from 'react';
import { Search, Palette, Code, Rocket, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      title: 'Discovery & Planning',
      duration: '1-2 weeks',
      description: 'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
      deliverables: ['Project scope document', 'Technical specifications', 'Timeline & milestones', 'Budget breakdown'],
      color: 'blue'
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      duration: '2-3 weeks',
      description: 'Our design team creates wireframes, mockups, and interactive prototypes that bring your vision to life.',
      deliverables: ['Wireframes & user flows', 'Visual design mockups', 'Interactive prototypes', 'Design system'],
      color: 'purple'
    },
    {
      icon: Code,
      title: 'Development & Testing',
      duration: '4-12 weeks',
      description: 'Clean, scalable code development with continuous testing and quality assurance throughout the process.',
      deliverables: ['Frontend development', 'Backend architecture', 'Database design', 'Quality assurance testing'],
      color: 'green'
    },
    {
      icon: Rocket,
      title: 'Launch & Deployment',
      duration: '1 week',
      description: 'Seamless deployment to production with performance optimization and security configurations.',
      deliverables: ['Production deployment', 'Performance optimization', 'Security setup', 'Go-live support'],
      color: 'orange'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support & Maintenance',
      duration: 'Ongoing',
      description: '6 months free support included, with optional maintenance plans to keep your solution running smoothly.',
      deliverables: ['Bug fixes & updates', 'Performance monitoring', 'Security patches', '24/7 support available'],
      color: 'teal'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial concept to ongoing support, we follow a structured approach that ensures your project's success at every stage.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 via-green-200 via-orange-200 to-teal-200"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-xl ${getColorClasses(step.color)} border-2`}>
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-sm font-medium text-gray-500">{step.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step Number (Mobile) */}
                <div className="lg:hidden absolute -left-4 top-8 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and walk through our process together. We'll provide a detailed timeline and transparent pricing for your specific needs.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Transparent Communication',
              description: 'Regular updates, milestone reviews, and direct access to your project team throughout the entire process.',
              icon: '💬'
            },
            {
              title: 'Quality Assurance',
              description: 'Rigorous testing at every stage ensures your solution is bug-free, secure, and performs optimally.',
              icon: '✅'
            },
            {
              title: 'On-Time Delivery',
              description: '98% of our projects are delivered on schedule thanks to our structured approach and experienced team.',
              icon: '⏰'
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;