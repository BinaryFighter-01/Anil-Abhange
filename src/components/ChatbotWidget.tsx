
import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  options?: Option[];
}

interface Option {
  text: string;
  action: 'reply' | 'link';
  value: string;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your AI assistant. How can I help you?",
      sender: 'bot',
      options: [
        { text: "Tell me about Anil", action: "reply", value: "about" },
        { text: "What are Anil's skills?", action: "reply", value: "skills" },
        { text: "Contact Anil", action: "reply", value: "contact" },
        { text: "See Anil's projects", action: "reply", value: "projects" }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOptionClick = (option: Option) => {
    if (option.action === 'reply') {
      handleUserMessage(option.text);
      processUserQuery(option.value);
    } else if (option.action === 'link') {
      window.open(option.value, '_blank');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    handleUserMessage(inputValue);
    processUserQuery(inputValue.toLowerCase());
  };

  const handleUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
  };

  const processUserQuery = (query: string) => {
    setTimeout(() => {
      let botResponse: Message;
      
      if (query === 'about' || query.includes('about') || query.includes('who is anil')) {
        botResponse = {
          id: Date.now().toString(),
          text: "Anil Abhange is an AI & Data Science Engineer with expertise in machine learning, deep learning, and building intelligent solutions. He has experience working with various AI technologies and frameworks.",
          sender: 'bot',
          options: [
            { text: "What are his skills?", action: "reply", value: "skills" },
            { text: "Show me his experience", action: "reply", value: "experience" }
          ]
        };
      } else if (query === 'skills' || query.includes('skills') || query.includes('what can anil do')) {
        botResponse = {
          id: Date.now().toString(),
          text: "Anil's key skills include: Python, Machine Learning, Deep Learning, TensorFlow, PyTorch, Data Analysis, Computer Vision, Natural Language Processing, and more.",
          sender: 'bot',
          options: [
            { text: "Show me his projects", action: "reply", value: "projects" },
            { text: "What's his experience?", action: "reply", value: "experience" }
          ]
        };
      } else if (query === 'projects' || query.includes('project') || query.includes('portfolio')) {
        botResponse = {
          id: Date.now().toString(),
          text: "Anil has worked on various AI and data science projects, including machine learning models, deep learning applications, and data analysis solutions. You can check out his project section for more details.",
          sender: 'bot',
          options: [
            { text: "How can I contact him?", action: "reply", value: "contact" },
            { text: "What are his qualifications?", action: "reply", value: "education" }
          ]
        };
      } else if (query === 'contact' || query.includes('contact') || query.includes('reach') || query.includes('email')) {
        botResponse = {
          id: Date.now().toString(),
          text: "You can contact Anil through email, LinkedIn, or the contact form on this website. Would you like me to direct you to any of these options?",
          sender: 'bot',
          options: [
            { text: "Go to contact form", action: "link", value: "#contact" },
            { text: "LinkedIn Profile", action: "link", value: "https://linkedin.com/" },
            { text: "GitHub Profile", action: "link", value: "https://github.com/" }
          ]
        };
      } else if (query === 'experience' || query.includes('experience') || query.includes('work')) {
        botResponse = {
          id: Date.now().toString(),
          text: "Anil has professional experience in data science and AI engineering roles, working on various projects involving machine learning, deep learning, and data analysis.",
          sender: 'bot',
          options: [
            { text: "Tell me about education", action: "reply", value: "education" },
            { text: "Show me achievements", action: "reply", value: "achievements" }
          ]
        };
      } else if (query === 'education' || query.includes('education') || query.includes('study') || query.includes('qualification')) {
        botResponse = {
          id: Date.now().toString(),
          text: "Anil has a strong educational background in computer science with specialization in AI and data science. He's also completed various certifications in the field.",
          sender: 'bot',
          options: [
            { text: "Show me achievements", action: "reply", value: "achievements" },
            { text: "What are his skills?", action: "reply", value: "skills" }
          ]
        };
      } else if (query === 'achievements' || query.includes('achievements') || query.includes('awards')) {
        botResponse = {
          id: Date.now().toString(),
          text: "Anil has received various recognitions and certifications in the field of AI and data science. Check out the achievements section for more details.",
          sender: 'bot',
          options: [
            { text: "How can I contact him?", action: "reply", value: "contact" },
            { text: "Tell me more about Anil", action: "reply", value: "about" }
          ]
        };
      } else {
        botResponse = {
          id: Date.now().toString(),
          text: "I'm not sure I understand. Can I help you with any of these topics?",
          sender: 'bot',
          options: [
            { text: "About Anil", action: "reply", value: "about" },
            { text: "Anil's Skills", action: "reply", value: "skills" },
            { text: "Contact Information", action: "reply", value: "contact" },
            { text: "Projects", action: "reply", value: "projects" }
          ]
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  return (
    <div className="chatbot-widget">
      {/* Chat Button */}
      <button 
        onClick={toggleChatbot}
        className="chatbot-button"
        aria-label="Toggle chatbot"
        style={{ cursor: 'pointer' }}
      >
        {isOpen ? (
          <X size={24} color="#fff" style={{ cursor: 'pointer' }} />
        ) : (
          <Bot size={24} color="#fff" style={{ cursor: 'pointer' }} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window chatbot-animation-enter-active">
          <div className="chatbot-header">
            <div className="flex items-center gap-2">
              <Bot size={18} />
              <span>AI Assistant</span>
            </div>
            <button 
              onClick={toggleChatbot} 
              className="text-white/80 hover:text-white"
              style={{ cursor: 'pointer' }}
            >
              <X size={18} style={{ cursor: 'pointer' }} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id}>
                <div 
                  className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}
                >
                  {message.text}
                </div>
                
                {message.options && message.sender === 'bot' && (
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="bg-ai-dark/80 border border-ai-cyan/30 text-ai-cyan text-sm rounded-full px-3 py-1 hover:bg-ai-cyan/20 transition-colors"
                        style={{ cursor: 'pointer' }}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={handleInputChange}
              style={{ cursor: 'text' }}
            />
            <button 
              type="submit" 
              aria-label="Send message"
              style={{ cursor: 'pointer' }}
            >
              <Send size={18} color="#fff" style={{ cursor: 'pointer' }} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
