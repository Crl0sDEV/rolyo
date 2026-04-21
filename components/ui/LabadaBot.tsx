"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function LabadaBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello boss! Ako si LabadaBot. May katanungan ka ba about sa services namin?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll pababa pag may bagong message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMsg }],
        }),
      });

      const data = await res.json();
      
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.reply || "Error getting response." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Sorry boss, offline pa si bot. Text niyo na lang kami sa 0920 927 4185!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            style={{ height: "450px" }}
          >
            {/* Chat Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <h3 className="font-bold">LabadaBot</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-blue-200 transition">
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" ? "bg-primary text-white rounded-br-none" : "bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 text-slate-500 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-primary" /> Nagta-type...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={sendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-slate-100 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 transition"
              >
                <Send size={16} className="ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-blue-500/50 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}