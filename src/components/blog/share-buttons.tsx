"use client";

import { useState } from "react";
import { Check, Copy, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

type Props = {
  url: string;
  title: string;
  compact?: boolean;
};

export function ShareButtons({ url, title, compact = false }: Props) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // noop
    }
  };

  const buttons = [
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      className: "bg-green-500 hover:bg-green-600 text-white",
    },
    {
      label: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      label: "X (Twitter)",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      className: "bg-black hover:bg-gray-800 text-white",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      className: "bg-sky-700 hover:bg-sky-800 text-white",
    },
  ];

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-gray-500 mr-1">Paylaş:</span>
        {buttons.map((b) => (
          <a
            key={b.label}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${b.label} ile paylaş`}
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${b.className}`}
          >
            <b.icon className="w-3.5 h-3.5" />
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Bağlantıyı kopyala"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
        {copied && <span className="text-xs text-green-600 font-medium">Kopyalandı!</span>}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Share part */}
      <div className="p-4 rounded-xl border bg-slate-50 flex flex-col justify-center">
        <h4 className="text-sm font-bold text-gray-700 mb-3">Bu yazıyı paylaşın:</h4>
        <div className="flex flex-wrap items-center gap-2">
          {buttons.map((b) => (
            <a
              key={b.label}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${b.label} ile paylaş`}
              className={`inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors ${b.className}`}
            >
              <b.icon className="w-4 h-4" />
            </a>
          ))}
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Bağlantıyı kopyala"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border hover:bg-gray-50 text-gray-700 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </button>
          {copied && <span className="text-xs text-green-600 font-medium">Kopyalandı!</span>}
        </div>
      </div>

      {/* Follow part */}
      <div className="p-4 rounded-xl border bg-gradient-to-tr from-pink-50 to-purple-50 flex flex-col justify-center">
        <h4 className="text-sm font-bold text-gray-700 mb-3">Bizi takip edin:</h4>
        <a href="https://www.instagram.com/dyt_ezgievgin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </div>
          @dyt_ezgievgin
        </a>
      </div>
    </div>
  );
}
