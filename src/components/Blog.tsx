import React from 'react';
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, X } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
      fullContent: `
        <h3>The Future of Web Development: Trends to Watch in 2024</h3>
        <p>The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and interact with web applications.</p>
        
        <h4>1. AI-Powered Development Tools</h4>
        <p>Artificial Intelligence is revolutionizing the development process. From code completion to automated testing, AI tools are making developers more productive than ever. GitHub Copilot, ChatGPT, and other AI assistants are becoming essential parts of the modern developer toolkit.</p>
        
        <h4>2. Progressive Web Apps (PWAs)</h4>
        <p>PWAs continue to bridge the gap between web and native applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs are becoming the preferred choice for businesses looking to reach users across all platforms.</p>
        
        <h4>3. WebAssembly (WASM)</h4>
        <p>WebAssembly is enabling high-performance applications in the browser. From gaming to complex data processing, WASM is opening new possibilities for web applications that were previously only possible with native apps.</p>
        
        <h4>4. Serverless Architecture</h4>
        <p>Serverless computing is simplifying deployment and scaling. With platforms like Vercel, Netlify, and AWS Lambda, developers can focus on code while the infrastructure scales automatically.</p>
        
        <h4>5. Enhanced Security Measures</h4>
        <p>With increasing cyber threats, security is becoming paramount. Zero-trust architecture, advanced authentication methods, and automated security scanning are becoming standard practices.</p>
        
        <p><strong>Conclusion:</strong> The future of web development is bright, with AI, performance improvements, and better user experiences leading the way. Staying updated with these trends is crucial for any development team.</p>
      `,
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Building Scalable Mobile Apps: Best Practices and Patterns',
      excerpt: 'Learn how to architect mobile applications that can grow with your business needs and user base.',
      fullContent: `
        <h3>Building Scalable Mobile Apps: Best Practices and Patterns</h3>
        <p>Creating mobile applications that can scale with your business growth requires careful planning and implementation of proven architectural patterns.</p>
        
        <h4>1. Choose the Right Architecture</h4>
        <p>MVVM (Model-View-ViewModel) and Clean Architecture patterns provide separation of concerns and testability. These patterns make your app maintainable as it grows in complexity.</p>
        
        <h4>2. Implement Proper State Management</h4>
        <p>For React Native: Redux Toolkit or Zustand. For Flutter: Provider or Bloc pattern. Proper state management prevents performance issues and makes debugging easier.</p>
        
        <h4>3. Optimize for Performance</h4>
        <p>Use lazy loading, image optimization, and efficient data structures. Implement proper caching strategies and minimize API calls to ensure smooth user experience.</p>
        
        <h4>4. Plan for Offline Functionality</h4>
        <p>Implement offline-first architecture with local databases like SQLite or Realm. Sync data when connectivity is restored to provide seamless user experience.</p>
        
        <h4>5. Automated Testing Strategy</h4>
        <p>Unit tests, integration tests, and end-to-end testing ensure your app works correctly across different devices and scenarios. Implement CI/CD pipelines for automated testing.</p>
        
        <p><strong>Key Takeaway:</strong> Scalable mobile apps require thoughtful architecture, performance optimization, and robust testing from day one.</p>
      `,
      author: 'Mike Chen',
      date: 'Dec 12, 2024',
      readTime: '8 min read',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Cloud Security: Protecting Your Digital Assets in 2024',
      excerpt: 'Essential security practices and tools to keep your cloud infrastructure and applications secure.',
      fullContent: `
        <h3>Cloud Security: Protecting Your Digital Assets in 2024</h3>
        <p>As businesses increasingly move to the cloud, security becomes more critical than ever. Here's how to protect your digital assets in 2024.</p>
        
        <h4>1. Zero Trust Architecture</h4>
        <p>Never trust, always verify. Implement zero trust principles where every user and device must be authenticated and authorized before accessing resources.</p>
        
        <h4>2. Multi-Factor Authentication (MFA)</h4>
        <p>Enable MFA for all accounts and services. Use hardware tokens or authenticator apps rather than SMS for better security.</p>
        
        <h4>3. Regular Security Audits</h4>
        <p>Conduct quarterly security assessments, penetration testing, and vulnerability scans. Use tools like AWS Security Hub or Azure Security Center.</p>
        
        <h4>4. Data Encryption</h4>
        <p>Encrypt data at rest and in transit. Use strong encryption algorithms and manage keys securely with services like AWS KMS or Azure Key Vault.</p>
        
        <h4>5. Incident Response Plan</h4>
        <p>Have a documented incident response plan. Practice breach scenarios and ensure your team knows how to respond quickly to security incidents.</p>
        
        <p><strong>Remember:</strong> Security is not a one-time setup but an ongoing process that requires constant vigilance and updates.</p>
      `,
      author: 'Emily Rodriguez',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      category: 'Cloud & Security',
      image: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'UI/UX Design Principles for Better User Engagement',
      excerpt: 'Discover design strategies that create intuitive user experiences and drive higher conversion rates.',
      fullContent: `
        <h3>UI/UX Design Principles for Better User Engagement</h3>
        <p>Great design is invisible. When users can accomplish their goals effortlessly, you've succeeded in creating an exceptional user experience.</p>
        
        <h4>1. User-Centered Design</h4>
        <p>Always start with user research. Understand your users' needs, pain points, and behaviors through surveys, interviews, and usability testing.</p>
        
        <h4>2. Consistency is Key</h4>
        <p>Maintain consistent design patterns, colors, typography, and interactions throughout your application. Use design systems to ensure consistency.</p>
        
        <h4>3. Minimize Cognitive Load</h4>
        <p>Reduce the mental effort required to use your app. Use familiar patterns, clear navigation, and progressive disclosure to guide users.</p>
        
        <h4>4. Mobile-First Approach</h4>
        <p>Design for mobile devices first, then scale up. This ensures your design works well on the most constrained screens.</p>
        
        <h4>5. Accessibility Matters</h4>
        <p>Design for all users, including those with disabilities. Use proper color contrast, keyboard navigation, and screen reader compatibility.</p>
        
        <p><strong>Pro Tip:</strong> Test your designs with real users early and often. User feedback is invaluable for creating engaging experiences.</p>
      `,
      author: 'David Park',
      date: 'Dec 8, 2024',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'AI and Machine Learning: Practical Applications for Business',
      excerpt: 'Real-world examples of how AI and ML can transform business operations and customer experiences.',
      fullContent: `
        <h3>AI and Machine Learning: Practical Applications for Business</h3>
        <p>AI and ML are no longer just buzzwords. They're practical tools that can transform how businesses operate and serve customers.</p>
        
        <h4>1. Customer Service Automation</h4>
        <p>Chatbots and virtual assistants can handle routine inquiries 24/7, freeing up human agents for complex issues. Modern AI can understand context and provide personalized responses.</p>
        
        <h4>2. Predictive Analytics</h4>
        <p>Use historical data to predict future trends, customer behavior, and business outcomes. This helps in inventory management, demand forecasting, and strategic planning.</p>
        
        <h4>3. Personalization Engines</h4>
        <p>Deliver personalized content, product recommendations, and experiences based on user behavior and preferences. This significantly improves conversion rates.</p>
        
        <h4>4. Process Automation</h4>
        <p>Automate repetitive tasks like data entry, document processing, and quality control. This reduces errors and frees up employees for higher-value work.</p>
        
        <h4>5. Fraud Detection</h4>
        <p>ML algorithms can identify unusual patterns and potential fraud in real-time, protecting both businesses and customers from financial losses.</p>
        
        <p><strong>Getting Started:</strong> Start small with one use case, measure results, and gradually expand AI implementation across your business.</p>
      `,
      author: 'Lisa Wang',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
      category: 'AI & Analytics',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'DevOps Best Practices: Streamlining Development Workflows',
      excerpt: 'Optimize your development process with proven DevOps strategies and automation tools.',
      fullContent: `
        <h3>DevOps Best Practices: Streamlining Development Workflows</h3>
        <p>DevOps is about breaking down silos between development and operations teams to deliver software faster and more reliably.</p>
        
        <h4>1. Continuous Integration/Continuous Deployment (CI/CD)</h4>
        <p>Automate your build, test, and deployment processes. Use tools like GitHub Actions, Jenkins, or GitLab CI to ensure consistent and reliable deployments.</p>
        
        <h4>2. Infrastructure as Code (IaC)</h4>
        <p>Manage your infrastructure using code with tools like Terraform or AWS CloudFormation. This ensures consistency and makes infrastructure changes trackable.</p>
        
        <h4>3. Monitoring and Observability</h4>
        <p>Implement comprehensive monitoring with tools like Prometheus, Grafana, or DataDog. Monitor not just uptime, but user experience and business metrics.</p>
        
        <h4>4. Automated Testing</h4>
        <p>Build a robust testing pyramid with unit tests, integration tests, and end-to-end tests. Automate testing to catch issues early in the development cycle.</p>
        
        <h4>5. Security Integration (DevSecOps)</h4>
        <p>Integrate security scanning and compliance checks into your CI/CD pipeline. Security should be everyone's responsibility, not an afterthought.</p>
        
        <p><strong>Culture Matters:</strong> DevOps is as much about culture as it is about tools. Foster collaboration, shared responsibility, and continuous learning.</p>
      `,
      author: 'Alex Thompson',
      date: 'Dec 3, 2024',
      readTime: '9 min read',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <button 
                  onClick={() => openModal(post)}
                  className="group-hover:text-blue-600 text-gray-700 font-medium text-sm transition-colors duration-200 flex items-center hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            View All Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay in the Loop</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tech insights, industry trends, and project updates delivered to your inbox. Plus, get our free "Top 10 App Development Tips" PDF!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Get Free PDF
            </button>
          </div>
          <div className="mt-4">
            <p className="text-xs text-gray-500">
              Free download: "Top 10 App Development Tips" - A comprehensive guide for business owners
            </p>
            <p className="text-xs text-gray-400 mt-1">
              📧 Delivered instantly to your inbox
            </p>
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {selectedPost.readTime}
                    </div>
                  </div>
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
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
              />
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Published by <strong>{selectedPost.author}</strong> on {selectedPost.date}
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Close Article
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

export default Blog;