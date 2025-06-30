
import { useState } from 'react';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Message');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:anilabhange219411@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ai-light mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-ai-dark/50 border border-ai-cyan/20 rounded-lg text-ai-light placeholder-ai-light/50 focus:outline-none focus:border-ai-cyan/50 transition-colors"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ai-light mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-ai-dark/50 border border-ai-cyan/20 rounded-lg text-ai-light placeholder-ai-light/50 focus:outline-none focus:border-ai-cyan/50 transition-colors"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ai-light mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-ai-dark/50 border border-ai-cyan/20 rounded-lg text-ai-light placeholder-ai-light/50 focus:outline-none focus:border-ai-cyan/50 transition-colors"
          placeholder="Subject of your message"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ai-light mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-ai-dark/50 border border-ai-cyan/20 rounded-lg text-ai-light placeholder-ai-light/50 focus:outline-none focus:border-ai-cyan/50 transition-colors resize-none"
          placeholder="Your message here..."
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-ai-purple to-ai-cyan hover:from-ai-cyan hover:to-ai-purple text-white font-semibold py-3 rounded-lg shadow-lg hover-glow flex items-center justify-center gap-2"
      >
        <Send size={18} />
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
