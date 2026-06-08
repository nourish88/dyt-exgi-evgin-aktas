"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { buildWhatsAppApiUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

type NavLeaf = { href: string; label: string };
type NavGroup = { label: string; items: NavLeaf[]; basePath: string };
type NavItem = NavLeaf | NavGroup;

const isGroup = (item: NavItem): item is NavGroup =>
  (item as NavGroup).items !== undefined;

const districtItems: NavLeaf[] = [
  { href: "/eryaman-diyetisyen", label: "Eryaman" },
  { href: "/ankara-kilo-verme-diyetisyen", label: "Ankara Kilo Verme" },
];

const toolsItems: NavLeaf[] = [
  { href: "/blog", label: "Blog" },
  { href: "/tarifler", label: "Tarifler" },
  { href: "/hesaplayicilar", label: "Hesaplayıcılar" },
];

const navItems: NavItem[] = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/online-diyetisyen", label: "Uzaktan Takip" },
  { label: "Bölgeler", items: districtItems, basePath: "diyetisyen" },
  { label: "İçerik", items: toolsItems, basePath: "icerik" },
  { href: "/randevu", label: "Randevu Al" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/ezgi_evgin.png"
              alt="Ezgi Evgin Beslenme ve Diyet Danışmanlığı - Beslenme ve Diyet Danışmanlığı"
              width={180}
              height={50}
              className="h-11 w-auto md:h-12"
              priority
            />
            <div className="hidden 2xl:flex flex-col justify-center max-w-[260px]">
              <p className="text-[13px] font-bold tracking-[0.06em] whitespace-nowrap bg-gradient-to-r from-[#312858] via-[#7c216e] to-[#dc107d] bg-clip-text text-transparent">
                Dyt. Ezgi Evgin Aktaş
              </p>
              <p className="text-[10px] font-medium tracking-[0.08em] text-muted-foreground whitespace-nowrap">
                Beslenme ve Diyet Danışmanlığı
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              if (isGroup(item)) {
                const isActive = item.items.some((sub) => pathname === sub.href);
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger
                      className={cn(
                        "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors outline-none",
                        isActive
                          ? "text-[var(--brand-primary)] bg-pink-50"
                          : "text-muted-foreground hover:text-[var(--brand-dark)] hover:bg-slate-50"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-[200px]">
                      {item.items.map((sub) => (
                        <DropdownMenuItem key={sub.href} asChild>
                          <Link
                            href={sub.href}
                            className={cn(
                              "w-full cursor-pointer",
                              pathname === sub.href &&
                                "text-[var(--brand-primary)] bg-pink-50"
                            )}
                          >
                            {sub.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
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
              );
            })}
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
              href="https://www.instagram.com/dyt_ezgievgin"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:scale-105 hover:shadow-lg transition-all"
              title="Bizi Instagram'da Takip Edin"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
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
            className="xl:hidden p-2 rounded-lg hover:bg-accent"
            aria-label="Menüyü Aç/Kapat"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="xl:hidden border-t bg-white/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => {
              if (isGroup(item)) {
                return (
                  <div key={item.label} className="space-y-1">
                    <div className="px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block px-6 py-2 rounded-lg transition-colors text-sm font-medium",
                          pathname === sub.href
                            ? "bg-pink-50 text-[var(--brand-primary)]"
                            : "hover:bg-accent text-[var(--brand-dark)]"
                        )}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
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
              );
            })}
            <a
              href="https://www.instagram.com/dyt_ezgievgin"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="outline" className="w-full text-pink-600 border-pink-200 hover:bg-pink-50">
                Instagram'da Takip Et
              </Button>
            </a>
            <a
              href="https://www.doktortakvimi.com/ezgi-evgin/diyetisyen-beslenme-uzmani/ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2"
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
