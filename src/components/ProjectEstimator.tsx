import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, DollarSign, Clock, Users } from 'lucide-react';

const ProjectEstimator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    complexity: '',
    features: [],
    timeline: '',
    budget: '',
    teamSize: '',
    maintenance: ''
  });
  const [estimate, setEstimate] = useState(null);

  const projectTypes = [
    { id: 'website', name: 'Business Website', basePrice: 2000, description: 'Professional website with CMS' },
    { id: 'ecommerce', name: 'E-commerce Store', basePrice: 5000, description: 'Online store with payment processing' },
    { id: 'webapp', name: 'Web Application', basePrice: 8000, description: 'Custom web application' },
    { id: 'mobile', name: 'Mobile App', basePrice: 8000, description: 'iOS/Android mobile application' },
    { id: 'consulting', name: 'IT Consulting', basePrice: 50, description: 'Hourly consulting services' }
  ];

  const complexityLevels = [
    { id: 'simple', name: 'Simple', multiplier: 1, description: 'Basic functionality, standard design' },
    { id: 'moderate', name: 'Moderate', multiplier: 1.5, description: 'Custom features, integrations' },
    { id: 'complex', name: 'Complex', multiplier: 2.2, description: 'Advanced features, multiple integrations' },
    { id: 'enterprise', name: 'Enterprise', multiplier: 3, description: 'Large scale, high security requirements' }
  ];

  const availableFeatures = [
    { id: 'auth', name: 'User Authentication', price: 800 },
    { id: 'payment', name: 'Payment Processing', price: 1200 },
    { id: 'api', name: 'API Integration', price: 600 },
    { id: 'admin', name: 'Admin Dashboard', price: 1500 },
    { id: 'analytics', name: 'Analytics & Reporting', price: 900 },
    { id: 'notifications', name: 'Push Notifications', price: 500 },
    { id: 'chat', name: 'Live Chat', price: 200 },
    { id: 'search', name: 'Advanced Search', price: 800 }
  ];

  const calculateEstimate = () => {
    const projectType = projectTypes.find(p => p.id === formData.projectType);
    const complexity = complexityLevels.find(c => c.id === formData.complexity);
    
    if (!projectType || !complexity) return;

    let basePrice = projectType.basePrice;
    let totalPrice = basePrice * complexity.multiplier;
    
    // Add feature costs
    const featureCosts = formData.features.reduce((total, featureId) => {
      const feature = availableFeatures.find(f => f.id === featureId);
      return total + (feature ? feature.price : 0);
    }, 0);
    
    totalPrice += featureCosts;
    
    // Timeline estimation
    let timelineWeeks = 4;
    if (formData.complexity === 'moderate') timelineWeeks = 8;
    if (formData.complexity === 'complex') timelineWeeks = 16;
    if (formData.complexity === 'enterprise') timelineWeeks = 24;
    
    setEstimate({
      price: Math.round(totalPrice),
      timeline: timelineWeeks,
      features: formData.features.length,
      projectType: projectType.name
    });
  };

  const handleFeatureToggle = (featureId) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateEstimate();
      setCurrentStep(5);
    }
  };

  const resetEstimator = () => {
    setCurrentStep(1);
    setFormData({
      projectType: '',
      complexity: '',
      features: [],
      timeline: '',
      budget: '',
      teamSize: '',
      maintenance: ''
    });
    setEstimate(null);
  };

  return (
    <section id="estimator" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Project Cost Estimator
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your project in just a few clicks. No commitment required.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Step {currentStep} of 4</span>
              <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / 4) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What type of project do you need?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFormData({...formData, projectType: type.id})}
                    className={`p-6 rounded-lg border-2 text-left transition-all duration-200 ${
                      formData.projectType === type.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                    <p className="text-blue-600 font-semibold">
                      Starting at ${type.basePrice.toLocaleString()}
                      {type.id === 'consulting' && '/hour'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Complexity */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's the complexity level?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {complexityLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setFormData({...formData, complexity: level.id})}
                    className={`p-6 rounded-lg border-2 text-left transition-all duration-200 ${
                      formData.complexity === level.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{level.name}</h4>
                    <p className="text-gray-600 text-sm">{level.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Features */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Select additional features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {availableFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                      formData.features.includes(feature.id)
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-md font-semibold text-gray-900">{feature.name}</h4>
                        <p className="text-blue-600 font-medium">+${feature.price}</p>
                      </div>
                      {formData.features.includes(feature.id) && (
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Timeline & Budget */}
          {currentStep === 4 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Timeline and Budget Preferences</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Timeline</label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['ASAP', '1-3 months', '3-6 months', 'Flexible'].map((timeline) => (
                      <button
                        key={timeline}
                        onClick={() => setFormData({...formData, timeline})}
                        className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                          formData.timeline === timeline
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Budget Range</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Under $5k', '$5k-$15k', '$15k-$30k', '$30k+'].map((budget) => (
                      <button
                        key={budget}
                        onClick={() => setFormData({...formData, budget})}
                        className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                          formData.budget === budget
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Results */}
          {currentStep === 5 && estimate && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Project Estimate</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${estimate.price.toLocaleString()}
                  </div>
                  <p className="text-gray-600">Estimated Cost</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {estimate.timeline} weeks
                  </div>
                  <p className="text-gray-600">Timeline</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {estimate.features}
                  </div>
                  <p className="text-gray-600">Extra Features</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-600 mb-4">
                  This estimate is for a <strong>{estimate.projectType}</strong> with your selected features. 
                  Final pricing may vary based on specific requirements and scope.
                </p>
                <p className="text-sm text-gray-500">
                  * Estimate includes 6 months free support and maintenance
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center"
                >
                  Get Detailed Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={resetEstimator}
                  className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep < 5 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !formData.projectType) ||
                  (currentStep === 2 && !formData.complexity)
                }
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
              >
                {currentStep === 4 ? 'Calculate Estimate' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            This is an automated estimate based on typical project requirements. 
            Actual costs may vary depending on specific needs, integrations, and complexity. 
            Contact us for a detailed, personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;