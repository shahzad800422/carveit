import React, { useState } from 'react';
import { ExternalLink, Github, Award, X, CheckCircle, TrendingUp, Users, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Local Restaurant Online Ordering',
      category: 'Web Development', 
      description: 'Custom online ordering system with payment processing, order management, and customer loyalty program for a local restaurant chain.',
      fullDescription: 'Tony\'s Pizza was struggling during the pandemic with limited takeout options. We developed a comprehensive online ordering system that transformed their business model and helped them not only survive but thrive.',
      challenge: 'The restaurant needed a way to accept online orders, manage inventory, process payments, and maintain customer relationships during COVID-19 lockdowns.',
      solution: 'We built a custom web application with real-time order management, integrated payment processing, SMS notifications, and a customer loyalty program.',
      keyFeatures: [
        'Real-time order tracking and management',
        'Integrated Stripe payment processing',
        'SMS notifications for order updates',
        'Customer loyalty points system',
        'Inventory management integration',
        'Multi-location support',
        'Mobile-responsive design',
        'Admin dashboard for analytics'
      ],
      metrics: [
        { label: 'Increase in Orders', value: '40%', icon: TrendingUp },
        { label: 'Customer Retention', value: '65%', icon: Users },
        { label: 'Project Duration', value: '8 weeks', icon: Calendar }
      ],
      testimonial: {
        text: "CARVEIT TECH saved our business. The online ordering system they built helped us increase orders by 40% and maintain customer relationships during the toughest time in our industry.",
        author: "Tony Martinez, Owner"
      },
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Stripe', 'SMS API'],
      results: '40% increase in online orders',
      client: 'Tony\'s Pizza (3 locations)'
    },
    {
      id: 2,
      title: 'Fitness Studio Booking App',
      category: 'Mobile Development',
      description: 'iOS and Android app for class bookings, membership management, and push notifications for a local fitness studio.',
      fullDescription: 'FlexFit Studio needed a modern solution to manage class bookings and reduce no-shows. Our mobile app revolutionized their operations and improved member satisfaction.',
      challenge: 'High no-show rates, manual booking processes, and poor communication with members were affecting the studio\'s profitability and member experience.',
      solution: 'We developed a native mobile app with automated booking, push notifications, waitlist management, and integrated payment processing.',
      keyFeatures: [
        'Easy class booking and cancellation',
        'Push notifications for reminders',
        'Waitlist management system',
        'Membership tracking and renewals',
        'In-app payment processing',
        'Class schedule management',
        'Member progress tracking',
        'Social features and challenges'
      ],
      metrics: [
        { label: 'Reduction in No-shows', value: '60%', icon: TrendingUp },
        { label: 'App Store Rating', value: '4.8★', icon: Award },
        { label: 'Development Time', value: '12 weeks', icon: Calendar }
      ],
      testimonial: {
        text: "The app has been a game-changer for our studio. No-shows dropped by 60% and our members love the convenience. It\'s exactly what we needed.",
        author: "Lisa Chen, Studio Manager"
      },
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Push Notifications'],
      results: '60% reduction in no-shows',
      client: 'FlexFit Studio'
    },
    {
      id: 3,
      title: 'Law Firm Case Management',
      category: 'Web Development',
      description: 'Custom case management system with client portal, document sharing, and automated billing for a small law practice.',
      fullDescription: 'Johnson & Associates needed to modernize their case management and reduce administrative overhead. Our solution streamlined their entire workflow.',
      challenge: 'Manual case tracking, inefficient document management, and time-consuming billing processes were reducing productivity and profitability.',
      solution: 'We built a comprehensive case management system with client portals, automated workflows, and integrated billing to streamline operations.',
      keyFeatures: [
        'Comprehensive case tracking',
        'Secure client portal',
        'Document management system',
        'Automated time tracking',
        'Integrated billing system',
        'Calendar and deadline management',
        'Secure messaging system',
        'Compliance reporting tools'
      ],
      metrics: [
        { label: 'Time Savings', value: '50%', icon: TrendingUp },
        { label: 'Client Satisfaction', value: '95%', icon: Users },
        { label: 'ROI Achievement', value: '6 months', icon: Calendar }
      ],
      testimonial: {
        text: "This system has transformed our practice. We\'re saving 50% of our time on administrative tasks and our clients love the transparency and communication.",
        author: "Michael Johnson, Managing Partner"
      },
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: '50% time savings on admin tasks',
      client: 'Johnson & Associates Law'
    },
    {
      id: 4,
      title: 'Retail Inventory Management',
      category: 'IT Consulting',
      description: 'Cloud migration and inventory management system implementation for a growing retail business with multiple locations.',
      fullDescription: 'Sunshine Retail Group was struggling with outdated systems and needed to modernize their infrastructure to support growth across multiple locations.',
      challenge: 'Legacy systems, manual inventory tracking, and high IT maintenance costs were limiting growth and operational efficiency.',
      solution: 'We migrated their infrastructure to AWS and implemented a modern inventory management system with real-time synchronization across all locations.',
      keyFeatures: [
        'Cloud infrastructure migration',
        'Real-time inventory tracking',
        'Multi-location synchronization',
        'Automated reorder points',
        'Sales analytics dashboard',
        'Mobile inventory management',
        'Supplier integration',
        'Cost optimization tools'
      ],
      metrics: [
        { label: 'IT Cost Reduction', value: '30%', icon: TrendingUp },
        { label: 'System Uptime', value: '99.9%', icon: Award },
        { label: 'Migration Time', value: '4 weeks', icon: Calendar }
      ],
      testimonial: {
        text: "CARVEIT TECH\'s cloud migration and inventory system have been incredible. We\'ve reduced IT costs by 30% while improving reliability and scalability.",
        author: "Sarah Williams, Operations Director"
      },
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS', 'PostgreSQL', 'React', 'API Integration'],
      results: '30% reduction in IT costs',
      client: 'Sunshine Retail Group'
    },
    {
      id: 5,
      title: 'Medical Practice Patient Portal',
      category: 'Web Development',
      description: 'HIPAA-compliant patient portal with appointment scheduling, secure messaging, and prescription management.',
      fullDescription: 'Downtown Family Medicine needed a HIPAA-compliant solution to improve patient communication and reduce administrative workload.',
      challenge: 'High volume of phone calls, manual appointment scheduling, and inefficient patient communication were overwhelming staff and affecting patient satisfaction.',
      solution: 'We developed a secure, HIPAA-compliant patient portal with online scheduling, secure messaging, and prescription management capabilities.',
      keyFeatures: [
        'HIPAA-compliant security',
        'Online appointment scheduling',
        'Secure patient messaging',
        'Prescription management',
        'Lab results portal',
        'Insurance verification',
        'Telehealth integration',
        'Mobile-responsive design'
      ],
      metrics: [
        { label: 'Reduction in Calls', value: '70%', icon: TrendingUp },
        { label: 'Patient Satisfaction', value: '92%', icon: Users },
        { label: 'Compliance Score', value: '100%', icon: Award }
      ],
      testimonial: {
        text: "The patient portal has revolutionized our practice. Phone calls dropped by 70% and our patients love the convenience and transparency.",
        author: "Dr. Jennifer Smith, Family Medicine"
      },
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'HIPAA Compliance', 'Twilio'],
      results: '70% reduction in phone calls',
      client: 'Downtown Family Medicine'
    },
    {
      id: 6,
      title: 'Construction Project Tracker',
      category: 'Mobile Development',
      description: 'Mobile app for construction project management with photo documentation, progress tracking, and client updates.',
      fullDescription: 'BuildRight Construction needed a mobile solution to track project progress, document work, and keep clients informed in real-time.',
      challenge: 'Manual progress reporting, poor client communication, and lack of visual documentation were causing delays and client dissatisfaction.',
      solution: 'We built a mobile app that enables real-time project tracking, photo documentation, and automated client updates throughout the construction process.',
      keyFeatures: [
        'Real-time progress tracking',
        'Photo documentation system',
        'Client communication portal',
        'Task and milestone management',
        'Weather and delay tracking',
        'Budget and cost tracking',
        'Subcontractor coordination',
        'Quality control checklists'
      ],
      metrics: [
        { label: 'Faster Completion', value: '25%', icon: TrendingUp },
        { label: 'Client Satisfaction', value: '98%', icon: Users },
        { label: 'App Adoption', value: '100%', icon: Award }
      ],
      testimonial: {
        text: "This app has transformed how we manage projects. Clients love the transparency and we\'re completing projects 25% faster with better quality control.",
        author: "David Rodriguez, Project Manager"
      },
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'AWS S3', 'Real-time Updates'],
      results: '25% faster project completion',
      client: 'BuildRight Construction'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

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
                  <button 
                    onClick={() => openModal(project)}
                    className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors hover-lift hover:underline"
                  >
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

      {/* Project Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedProject.title}</h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-8">
              {/* Project Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedProject.fullDescription}</p>
                
                {/* Key Metrics */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {selectedProject.metrics.map((metric, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl text-center">
                      <metric.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                      <div className="text-gray-700 font-medium">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-red-900 mb-4">The Challenge</h4>
                  <p className="text-red-800 leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-900 mb-4">Our Solution</h4>
                  <p className="text-green-800 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Key Features Delivered</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-xl text-white mb-8">
                <h4 className="text-xl font-bold mb-4">Client Testimonial</h4>
                <blockquote className="text-lg italic mb-4">
                  "{selectedProject.testimonial.text}"
                </blockquote>
                <cite className="text-blue-200 font-medium">— {selectedProject.testimonial.author}</cite>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-6 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h4>
                <p className="text-gray-600 mb-6">
                  Let's discuss how we can create a similar solution for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      closeModal();
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
                  >
                    Get Your Free Quote
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;