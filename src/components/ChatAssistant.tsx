import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Anil's AI Assistant. Ask me anything about his skills, projects, or experience.", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Initialize GoogleGenAI with the API key from the environment variable.
      // Ensure your vite.config.ts maps process.env.API_KEY correctly.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: `Context: ${SYSTEM_INSTRUCTION}\n\nUser Question: ${userMsg.text}` }] }
        ],
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const reply = response.text || "I'm having trouble thinking right now. Please try again.";
      
      setMessages(prev => [...prev, { role: 'model', text: reply, timestamp: new Date() }]);
    } catch (error) {
      console.error("GenAI Error:", error);
      let errorMessage = "Oops! My AI brain is temporarily offline. Please check the connection.";
      if (error instanceof Error && (error.message.includes("API Key") || error.message.includes("400"))) {
         errorMessage = "Connection Issue: Please ensure the API Key is configured correctly in your .env file and vite.config.ts.";
      }
      setMessages(prev => [...prev, { role: 'model', text: errorMessage, timestamp: new Date() }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 ring-1 ring-orange-500/30 transition-all animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
                <h3 className="text-white font-bold text-sm tracking-wide">Anil's AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-900/95 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-white text-black rounded-tr-none' 
                    : 'bg-neutral-800 text-gray-100 border border-neutral-700 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
                <div className="flex justify-start">
                    <div className="bg-neutral-800 rounded-2xl rounded-tl-none px-4 py-3 border border-neutral-700">
                        <Loader2 className="w-5 h-5 text-orange-500 animate-spin" />
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-neutral-900 border-t border-neutral-800">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my projects..."
                className="w-full bg-neutral-800 text-white placeholder-gray-500 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 border border-neutral-700 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-2 p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-full text-white hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl text-white transition-all duration-300 hover:scale-110 group relative ${isOpen ? 'bg-neutral-800 rotate-90' : 'bg-gradient-to-r from-orange-500 to-red-600'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        
        {/* Pulse Effect */}
        {!isOpen && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;