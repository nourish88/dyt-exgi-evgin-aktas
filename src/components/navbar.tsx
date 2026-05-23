"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimda", label: "Hakkımda" },
    { href: "/online-diyet-ankara", label: "Online Diyet" },
    { href: "/programlar", label: "Programlar" },
    { href: "/hesaplayicilar", label: "Hesaplayıcılar" },
    { href: "/tarifler", label: "Tarifler" },
    { href: "/blog", label: "Blog" },
    { href: "/randevu", label: "Randevu Al" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/ezgi_evgin.png"
              alt="Ezgi Evgin Aktaş - Beslenme ve Diyet Danışmanlığı"
              width={180}
              height={50}
              className="h-11 w-auto md:h-12"
              priority
            />
            <div className="hidden lg:flex flex-col justify-center">
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase bg-gradient-to-r from-[#dc107d] to-[#312858] bg-clip-text text-transparent mb-0.5">
                Diyetisyen
              </p>
              <p className="text-[15px] font-bold tracking-[0.08em] bg-gradient-to-r from-[#312858] via-[#7c216e] to-[#dc107d] bg-clip-text text-transparent">
                Ezgi Evgin Aktaş
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "text-[var(--brand-primary)] bg-pink-50"
                    : "text-muted-foreground hover:text-[var(--brand-dark)] hover:bg-slate-50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+905462650440"
              className="hidden xl:inline-flex items-center text-sm text-muted-foreground hover:text-[var(--brand-dark)]"
            >
              <Phone className="w-4 h-4 mr-1.5" />
              0546 265 04 40
            </a>
            <a
              href="https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="text-[var(--brand-primary)] border-[var(--brand-primary)] hover:bg-pink-50">
                Doktor Takvimi
              </Button>
            </a>
            <a
              href={buildWhatsAppApiUrl("Merhaba, randevu almak istiyorum.", "navbar_desktop")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("navbar_desktop")}
            >
              <Button className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:opacity-90 text-white">
                Randevu Al
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent"
            aria-label="Menüyü Aç/Kapat"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2.5 rounded-lg transition-colors text-sm font-medium",
                  pathname === item.href
                    ? "bg-pink-50 text-[var(--brand-primary)]"
                    : "hover:bg-accent text-[var(--brand-dark)]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="outline" className="w-full text-[var(--brand-primary)] border-[var(--brand-primary)]">
                Doktor Takvimi
              </Button>
            </a>
            <a
              href={buildWhatsAppApiUrl("Merhaba, randevu almak istiyorum.", "navbar_mobile_menu")}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2"
              onClick={() => trackWhatsAppClick("navbar_mobile_menu")}
            >
              <Button className="w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white">
                Randevu Al
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
