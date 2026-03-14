"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { shopLinks, aboutLinks } from "@/data/navigation";
import { TfiUser } from "react-icons/tfi";
import { PiHandbagBold } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { useCart } from "@/hooks/use-cart";
import { CartSheet } from "@/shared/general/cart_sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/common/dropdown_menu";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { totalItems } = useCart();

  return (
    <header
      className={cn(
        "w-full z-50",
        isHome
          ? "absolute top-0 left-0 bg-transparent text-white"
          : "relative bg-background text-foreground",
        className,
      )}
    >
      <nav className="flex h-16 w-full items-center justify-between px-4 md:px-8">
        {/* Left: Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Shop dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold hover:text-primary transition-colors outline-none">
              Shop <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {shopLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="text-sm">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold hover:text-primary transition-colors outline-none">
              All About Sero <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {aboutLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="text-sm font-bold">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/blog"
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            The Sero Spill
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Center: Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/IMG_2441.webp"
            alt="SERO"
            width={120}
            height={45}
            className="h-10.5 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Account"
            className="hover:text-primary transition-colors"
          >
            <TfiUser className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative hover:text-primary transition-colors"
            onClick={() => setCartOpen(true)}
          >
            <PiHandbagBold className="h-6 w-6 stroke-0.5" />
            {totalItems > 0 && (
              <span className="absolute -bottom-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[10px] font-bold leading-none text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6">
          <div className="py-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Shop
            </p>
            {shopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-gray-700 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="py-3 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              All About Sero
            </p>
            {aboutLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-gray-700 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="py-3 border-t border-gray-100">
            <Link
              href="/blog"
              className="block py-2 text-sm text-gray-700 hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              The Sero Spill
            </Link>
          </div>
        </div>
      )}

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}
