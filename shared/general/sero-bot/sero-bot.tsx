"use client";

import { useState, useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { BotAvatar } from "./bot-avatar";
import { BotChat } from "./bot-chat";

interface Message {
  role: "user" | "bot";
  content: string;
}

const GREETING =
  "Hey there! I'm Sero Bot 🤖 Tell me how you're feeling or what flavour you're craving, and I'll suggest the perfect Sero drink for you!";

export function SeroBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: GREETING },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = useCallback(async (text: string) => {
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      const botMsg: Message = {
        role: "bot",
        content: data.reply ?? "Sorry, something went wrong. Try again!",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Oops, I had a hiccup! Try asking again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50">
          <BotChat
            messages={messages}
            isLoading={isLoading}
            onSend={handleSend}
            onClose={handleClose}
          />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          if (!isOpen) {
            setMessages([{ role: "bot", content: GREETING }]);
          }
          setIsOpen((prev) => !prev);
        }}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        style={!isOpen ? { animation: "sero-bot-bob 3s ease-in-out infinite" } : undefined}
        aria-label={isOpen ? "Close Sero Bot" : "Open Sero Bot"}
      >
        {isOpen ? (
          <MessageCircle className="h-6 w-6 text-sero-dark" />
        ) : (
          <BotAvatar size="sm" />
        )}
      </button>
    </>
  );
}
