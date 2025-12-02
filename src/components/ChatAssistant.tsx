import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";
import { ChatMessage } from "../types";
import { SYSTEM_INSTRUCTION } from "../constants";

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hi! I'm Anil's AI Assistant. Ask me anything about his skills, projects, or experience.",
      timestamp: new Date(),
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // BACKEND CALL
  const sendMessageToAI = async (text: string) => {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Context:\n${SYSTEM_INSTRUCTION}\n\nUser:\n${text}`,
        }),
      });

      const data = await res.json();

      if (data.error) return `Error: ${data.error}`;
      return data.reply || "I'm thinking... try again.";
    } catch (err) {
      console.error("AI ERROR:", err);
      return "Server error: Unable to reach AI service.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const response = await sendMessageToAI(userMessage.text);

    setMessages((prev) => [
      ...prev,
      {
        role: "model",
        text: response,
        timestamp: new Date(),
      },
    ]);

    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-neutral-900 border border-neutral-700 rounded-2xl shadow-xl flex flex-col overflow-hidden mb-4">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <h3 className="text-white font-bold text-sm">Anil's AI Assistant</h3>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-900">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm rounded-2xl ${
                    msg.role === "user"
                      ? "bg-white text-black rounded-tr-none"
                      : "bg-neutral-800 text-gray-100 border border-neutral-700 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 px-4 py-3 rounded-2xl border border-neutral-700">
                  <Loader2 className="w-5 h-5 text-orange-500 animate-spin" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-neutral-900 border-t border-neutral-800">
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-full py-3 px-4 pr-12"
                placeholder="Ask about my projects..."
              />

              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-full text-white disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl text-white ${
          isOpen ? "bg-neutral-800 rotate-90" : "bg-gradient-to-r from-orange-500 to-red-600"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatAssistant;
