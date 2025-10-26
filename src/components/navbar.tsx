"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimda", label: "Hakkımda" },
    { href: "/programlar", label: "Online Programlar" },
    { href: "/blog", label: "Blog" },
    { href: "/tarifler", label: "Tarifler" },
    { href: "/hesaplayicilar", label: "Hesaplayıcılar" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Ezgi Evgin Aktaş - Beslenme ve Diyet Danışmanlığı"
              width={180}
              height={50}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className="text-sm">
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://wa.me/905333104970?text=Merhaba"
              target="_blank"
            >
              <Button className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:opacity-90 text-white">
                WhatsApp İletişim
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/905333104970?text=Merhaba"
              target="_blank"
              className="block mt-4"
            >
              <Button className="w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white">
                WhatsApp İletişim
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
