import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-animated particle-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed-2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 animate-slide-up hover-glow">
            <Star className="h-4 w-4 mr-2 text-yellow-400" />
            Trusted by 500+ companies worldwide
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight brand-tagline animate-slide-up" style={{animationDelay: '0.2s'}}>
            WEB + MOBILE DEVELOPMENT
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent block mt-2 text-3xl sm:text-4xl lg:text-5xl brand-tagline animate-gradient">
              IT CONSULTING EXPERTS
            </span>
          </h1>

          {/* Tagline */}
          <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full text-blue-100 text-lg font-semibold mb-6 brand-tagline animate-slide-up animate-pulse-glow" style={{animationDelay: '0.4s'}}>
            Empowering Small Businesses Through Technology
          </div>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
            Professional web development, mobile app creation, and IT consulting services designed specifically for small businesses ready to scale and succeed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{animationDelay: '0.8s'}}>
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-animated hover-lift"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center border border-white/20 hover-glow"
            >
              <Play className="mr-2 h-5 w-5" />
              Schedule a Call
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '1s'}}>
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '5 Years', label: 'Industry Experience' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center hover-lift" style={{animationDelay: `${1.2 + index * 0.1}s`}}>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;