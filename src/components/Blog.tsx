import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Building Scalable Mobile Apps: Best Practices and Patterns',
      excerpt: 'Learn how to architect mobile applications that can grow with your business needs and user base.',
      author: 'Mike Chen',
      date: 'Dec 12, 2024',
      readTime: '8 min read',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Cloud Security: Protecting Your Digital Assets in 2024',
      excerpt: 'Essential security practices and tools to keep your cloud infrastructure and applications secure.',
      author: 'Emily Rodriguez',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      category: 'Cloud & Security',
      image: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'UI/UX Design Principles for Better User Engagement',
      excerpt: 'Discover design strategies that create intuitive user experiences and drive higher conversion rates.',
      author: 'David Park',
      date: 'Dec 8, 2024',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'AI and Machine Learning: Practical Applications for Business',
      excerpt: 'Real-world examples of how AI and ML can transform business operations and customer experiences.',
      author: 'Lisa Wang',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
      category: 'AI & Analytics',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'DevOps Best Practices: Streamlining Development Workflows',
      excerpt: 'Optimize your development process with proven DevOps strategies and automation tools.',
      author: 'Alex Thompson',
      date: 'Dec 3, 2024',
      readTime: '9 min read',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

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
                
                <button className="group-hover:text-blue-600 text-gray-700 font-medium text-sm transition-colors duration-200 flex items-center">
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
          <p className="text-xs text-gray-500 mt-3">
            Free download: "Top 10 App Development Tips" - A comprehensive guide for business owners
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;