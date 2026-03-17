"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button, Input } from "@/shared/common";
import { BotAvatar } from "./bot-avatar";
import { products } from "@/data/products";

interface Message {
  role: "user" | "bot";
  content: string;
}

function parseProductLinks(text: string) {
  const parts = text.split(/(\[PRODUCT:[^\]]+\])/g);

  return parts.map((part, i) => {
    const match = part.match(/\[PRODUCT:([^\]]+)\]/);
    if (match) {
      const slug = match[1];
      const product = products.find((p) => p.slug === slug);
      if (product) {
        return (
          <Link
            key={i}
            href={`/products/${slug}`}
            className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-sm font-semibold text-primary-light hover:bg-primary/30 transition-colors"
          >
            {product.name} &rarr;
          </Link>
        );
      }
    }

    // Handle bold markdown
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bp, j) => {
      const boldMatch = bp.match(/\*\*([^*]+)\*\*/);
      if (boldMatch) {
        return (
          <strong key={`${i}-${j}`} className="font-semibold">
            {boldMatch[1]}
          </strong>
        );
      }
      return <span key={`${i}-${j}`}>{bp}</span>;
    });
  });
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-primary/50"
          style={{
            animation: `typing-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

interface BotChatProps {
  messages: Message[];
  isLoading: boolean;
  onSend: (message: string) => void;
  onClose: () => void;
}

export function BotChat({ messages, isLoading, onSend, onClose }: BotChatProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const value = formData.get("message") as string;
    if (!value.trim()) return;
    onSend(value.trim());
    form.reset();
    inputRef.current?.focus();
  }

  return (
    <div className="flex flex-col w-[calc(100vw-2rem)] sm:w-[360px] h-[480px] rounded-2xl bg-white shadow-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-sero-dark text-white">
        <BotAvatar size="sm" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">Sero Bot</p>
          <p className="text-xs text-white/60">Your drink assistant</p>
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          className="text-white hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-sero-dark text-white rounded-br-md"
                  : "bg-primary/10 text-sero-dark rounded-bl-md"
              }`}
            >
              {msg.role === "bot"
                ? parseProductLinks(msg.content)
                : msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-primary/10 rounded-2xl rounded-bl-md">
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-border">
        <Input
          ref={inputRef}
          name="message"
          placeholder="How are you feeling?"
          autoComplete="off"
          className="flex-1 text-sm"
        />
        <Button type="submit" size="sm" disabled={isLoading}>
          Send
        </Button>
      </form>
    </div>
  );
}
