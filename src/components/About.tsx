import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We implement industry-leading security practices to protect your digital assets and user data.'
    },
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Our team holds certifications in cutting-edge technologies and follows best practices.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We work closely with you throughout the project to ensure your vision becomes reality.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile methodology ensures rapid development without compromising on quality.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CARVEIT TECH?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            5+ years of proven expertise helping small businesses transform their operations through custom technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">About Our Team</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2019 by experienced developers and IT consultants, TechFlow specializes in helping small businesses leverage technology for growth. Our team combines deep technical expertise with business acumen to deliver solutions that actually move the needle.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We understand the unique challenges small businesses face - limited budgets, tight timelines, and the need for solutions that work from day one. That's why we focus on practical, scalable technology that grows with your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AWS Certified</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Google Partner</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Microsoft Certified</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Team collaboration" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600">5+ Years</div>
              <div className="text-gray-600">Serving SMBs</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover-lift scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
              <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 service-icon" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-white text-center scroll-animate hover-glow">
          <h3 className="text-3xl font-bold mb-8">Why Small Businesses Choose TechFlow</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'On-Time Delivery', description: '98% of projects delivered on schedule with transparent milestone tracking' },
              { title: 'Transparent Pricing', description: 'Fixed-price quotes with no hidden fees. You know exactly what you\'re paying upfront' },
              { title: 'Technical Expertise', description: 'Certified developers with 5+ years experience in modern web and mobile technologies' },
              { title: 'Ongoing Support', description: '6 months free support included with every project, plus affordable maintenance plans' },
              { title: 'Business Focus', description: 'We understand SMB challenges and build solutions that actually improve your bottom line' },
              { title: 'Local Partnership', description: 'Based in the US with dedicated project managers for clear, consistent communication' }
            ].map((benefit, index) => (
              <div key={index} className="text-center hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;