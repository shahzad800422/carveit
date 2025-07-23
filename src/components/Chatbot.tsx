import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm CARVE AI, your virtual assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "What services do you offer?",
    "How much does a website cost?",
    "Can I get a quote?",
    "Do you build mobile apps?",
    "What's your process?",
    "How long does development take?"
  ];

  const botResponses = {
    "what services do you offer": "We offer three main services:\n\n🌐 **Web Development** - Custom websites and web applications starting at $2,000\n📱 **Mobile App Development** - iOS & Android apps starting at $8,000\n⚙️ **IT Consulting** - Strategic technology consulting at $150/hour\n\nWould you like to know more about any specific service?",
    
    "how much does a website cost": "Our website development starts at $2,000 for basic business websites. The final cost depends on:\n\n• Complexity level (Simple to Enterprise)\n• Custom features needed\n• Design requirements\n• Timeline\n\nWould you like to try our **Project Estimator** for a personalized quote? I can guide you there!",
    
    "can i get a quote": "Absolutely! I'd be happy to help you get a quote. You have a few options:\n\n1. **Quick Estimate** - Try our interactive Project Estimator\n2. **Detailed Quote** - Fill out our contact form\n3. **Schedule a Call** - Speak directly with our team\n\nWhich option works best for you?",
    
    "do you build mobile apps": "Yes! We specialize in mobile app development:\n\n📱 **iOS & Android Apps** - Native and cross-platform\n🔧 **Technologies**: React Native, Flutter, Swift, Kotlin\n💰 **Starting at $8,000**\n\nOur apps include:\n• Push notifications\n• Offline functionality\n• App store publishing\n• 6 months free support\n\nInterested in learning more?",
    
    "what's your process": "Our proven 5-step process ensures project success:\n\n1. **Discovery & Planning** (1-2 weeks)\n2. **Design & Prototyping** (2-3 weeks)\n3. **Development & Testing** (4-12 weeks)\n4. **Launch & Deployment** (1 week)\n5. **Support & Maintenance** (Ongoing)\n\nEach step includes specific deliverables and milestone reviews. Would you like details about any specific phase?",
    
    "how long does development take": "Timeline depends on project complexity:\n\n⚡ **Simple websites**: 2-4 weeks\n🏢 **Business applications**: 6-12 weeks\n📱 **Mobile apps**: 8-16 weeks\n🏗️ **Enterprise solutions**: 3-6 months\n\nWe provide detailed timelines after understanding your requirements. Ready to discuss your project timeline?"
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Keyword-based responses
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
      return botResponses["how much does a website cost"];
    }
    
    if (lowerMessage.includes('mobile') || lowerMessage.includes('app')) {
      return botResponses["do you build mobile apps"];
    }
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return botResponses["what services do you offer"];
    }
    
    if (lowerMessage.includes('quote') || lowerMessage.includes('estimate')) {
      return botResponses["can i get a quote"];
    }
    
    if (lowerMessage.includes('process') || lowerMessage.includes('how do you work')) {
      return botResponses["what's your process"];
    }
    
    if (lowerMessage.includes('time') || lowerMessage.includes('long') || lowerMessage.includes('duration')) {
      return botResponses["how long does development take"];
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Great to meet you! 👋 I'm here to help you learn about CARVEIT TECH's services. What would you like to know?";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "You can reach us at:\n\n📧 **Email**: carveittech@gmail.com\n📞 **Phone**: +92 (348) 9300422\n🕒 **Hours**: Mon-Fri 9AM-6PM PST\n\nWould you like me to help you get a quote or schedule a call?";
    }
    
    // Default response
    return "I'd be happy to help! I can assist you with information about:\n\n• Our services and pricing\n• Getting a project quote\n• Our development process\n• Timeline estimates\n• Contact information\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow hover-lift"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
        <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
          Chat with CARVE AI
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'} w-80`}>
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">CARVE AI</h3>
              <p className="text-xs text-blue-100">Online now</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${message.isBot ? 'bg-blue-600 text-white' : 'bg-gray-600 text-white'}`}>
                      {message.isBot ? <Bot className="h-3 w-3" /> : <User className="h-3 w-3" />}
                    </div>
                    <div className={`p-3 rounded-lg ${message.isBot ? 'bg-white border border-gray-200' : 'bg-blue-600 text-white'}`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-xs">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3" />
                    </div>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="p-3 border-t border-gray-200 bg-white">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;