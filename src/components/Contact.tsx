import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Send email via backend API
    fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      setIsSubmitting(false);
      if (data.success) {
        setShowNotification(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
        // Auto-hide notification after 5 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      } else {
        console.error('Email error:', data);
        alert(`Failed to send email: ${data.details || data.error}. Please try again or contact us directly at carveittech@gmail.com`);
      }
    })
    .catch(error => {
      setIsSubmitting(false);
      console.error('Error:', error);
      alert('Network error: Failed to send email. Please try again or contact us directly at carveittech@gmail.com');
    });
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+92 (348) 9300422',
      description: 'Mon-Fri 2PM-12AM PST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'carveittech@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Fazal e Haq Rd, Block D G 6/2 Blue Area, Islamabad, Pakistan',
      description: 'By appointment only'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      {/* Email Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-white border border-green-200 rounded-lg shadow-lg p-4 max-w-sm animate-slide-in-right">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-semibold text-gray-900">Message Sent Successfully!</h3>
              <p className="text-sm text-gray-600 mt-1">
                Your message has been sent successfully via our secure email system. We'll get back to you within 24 hours.
              </p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <Mail className="h-3 w-3 mr-1" />
                Delivered to: carveittech@gmail.com
              </div>
            </div>
            <button
              onClick={closeNotification}
              className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-3 bg-green-50 rounded-md p-2">
            <p className="text-xs text-green-700">
              💡 <strong>Secure:</strong> Your message was sent through our encrypted email system for maximum security.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to see how technology can transform your business? Schedule a free consultation and get a custom quote for your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 scroll-animate hover-glow">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-blue-600 mr-3 service-icon" />
              <h3 className="text-2xl font-bold text-gray-900">Get Your Free Quote</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover-glow transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover-glow transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover-glow transition-all duration-200"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover-glow transition-all duration-200"
                  >
                    <option value="">Select a service</option>
<option value="web-development">Web Development</option>
<option value="mobile-development">Mobile App Development</option>
<option value="it-consulting">IT Consulting</option>
<option value="legal-services">Legal Services</option>
<option value="content-writing">Content Writing & Publishing</option>
<option value="multiple">Multiple Services</option>
<option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover-glow transition-all duration-200"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-20k">$10,000 - $20,000</option>
                  <option value="20k-30k">$20,000 - $30,000</option>
                  <option value="over-50k">Over $50,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none hover-glow transition-all duration-200"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center btn-animated hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Get Free Quote
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="scroll-animate" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 hover-lift" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                  <div className="p-3 bg-blue-100 rounded-lg hover-glow">
                    <info.icon className="h-6 w-6 text-blue-600 service-icon" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-900 mb-1">{info.content}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8 hover-glow scroll-animate" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-blue-600 mr-2 service-icon" />
                <h4 className="text-lg font-semibold text-blue-900">Fast Response Guarantee</h4>
              </div>
              <p className="text-blue-800 text-sm">
                We respond to all quote requests within 4 hours during business hours. 
                For urgent projects, call us directly for immediate assistance.
              </p>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-xl p-6 hover-glow scroll-animate" style={{animationDelay: '0.8s'}}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900">2:00 PM - 12:00 AM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900">10:00 AM - 2:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 scroll-animate">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'How much does a typical project cost?',
                answer: 'Costs vary by project scope. Simple business websites start at $2,000, mobile apps at $5,000, and IT consulting at $50/hour. We provide detailed quotes after understanding your needs.'
              },
              {
                question: 'How long do projects typically take?',
                answer: 'Simple websites take 2-4 weeks, mobile apps 6-8 weeks, and complex systems 3-6 months. We provide realistic timelines and keep you updated throughout the process.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! Every project includes 6 months of free support. After that, we offer affordable maintenance plans starting at $200/month to keep your systems running smoothly.'
              },
              {
                question: 'What makes TechFlow different?',
               question: 'What makes CARVEIT TECH different?',
               answer: 'We specialize in small businesses and understand your unique challenges. We provide transparent pricing, dedicated project managers, and build solutions that actually improve your bottom line.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Chat & Social CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white scroll-animate hover-glow">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started? Let's Connect!</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Multiple ways to reach us! Schedule a call, send an email, or connect with us on social media for instant updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 btn-animated hover-lift">
              Schedule Call
            </button>
            <a 
              href="mailto:carveittech@gmail.com"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 inline-block btn-animated hover-lift"
            >
              Send Email
            </a>
            <a 
              href="www.linkedin.com/in/carveit-tech
"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 inline-block btn-animated hover-lift"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;