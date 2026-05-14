"use client";

import { useState } from "react";
import { Check, Copy, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

type Props = {
  url: string;
  title: string;
};

export function ShareButtons({ url, title }: Props) {
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
          className={`inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors ${b.className}`}
        >
          <b.icon className="w-4 h-4" />
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Bağlantıyı kopyala"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
      >
        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
      </button>
      {copied && <span className="text-xs text-green-600 font-medium">Kopyalandı!</span>}
    </div>
  );
}
