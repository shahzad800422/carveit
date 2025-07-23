import React from 'react';
import { MapPin, Clock, DollarSign, Users, Coffee, Laptop, Heart, Trophy } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: ['5+ years experience', 'React/Node.js expertise', 'Cloud platforms', 'Team collaboration']
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Develop cutting-edge mobile applications for iOS and Android using React Native and Flutter.',
      requirements: ['3+ years mobile dev', 'React Native/Flutter', 'App Store publishing', 'UI/UX understanding']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Austin',
      type: 'Full-time',
      salary: '$110k - $150k',
      description: 'Manage and optimize our cloud infrastructure, CI/CD pipelines, and deployment processes.',
      requirements: ['AWS/Azure experience', 'Docker/Kubernetes', 'CI/CD systems', 'Infrastructure as Code']
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Los Angeles',
      type: 'Full-time',
      salary: '$80k - $120k',
      description: 'Create beautiful and intuitive user experiences for web and mobile applications.',
      requirements: ['Portfolio required', 'Figma/Sketch expertise', 'User research skills', 'Prototyping experience']
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Remote / Chicago',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Lead cross-functional teams to deliver projects on time and within budget using Agile methodologies.',
      requirements: ['PMP certification preferred', 'Agile/Scrum experience', 'Client management', 'Technical background']
    },
    {
      title: 'Software Engineering Intern',
      department: 'Engineering',
      location: 'Remote / On-site',
      type: 'Internship',
      salary: '$25 - $35/hour',
      description: 'Learn and contribute to real projects while working with experienced developers.',
      requirements: ['Computer Science student', 'Basic programming skills', 'Eagerness to learn', 'Problem-solving mindset']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance with wellness programs.'
    },
    {
      icon: Laptop,
      title: 'Remote-First',
      description: 'Work from anywhere with flexible hours and modern equipment provided.'
    },
    {
      icon: Coffee,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference tickets, and skill development programs.'
    },
    {
      icon: Trophy,
      title: 'Performance Rewards',
      description: 'Competitive salary, equity options, and performance-based bonuses.'
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with us and work on exciting projects that make a real impact. We're always looking for talented individuals to join our growing team.
          </p>
        </div>

        {/* Company Culture */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why CARVEIT TECH?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At CARVEIT TECH, we believe that great work happens when talented people are given the freedom to be creative, 
                the tools to be productive, and the support to grow professionally. We're building a company where everyone 
                can do their best work.
              </p>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-blue-600" />
                  50+ Team Members
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                  Global Remote
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Open Positions</h3>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">{job.title}</h4>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span key={reqIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-6">
                    <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Don't See the Right Role?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always interested in connecting with talented individuals. Send us your resume and tell us how you'd like to contribute to our mission.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Send Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;