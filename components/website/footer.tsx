import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { footerColumns } from "@/data/navigation";
import { PaintSplash } from "@/shared/general/paint_splash";
import { Button, Input } from "@/shared/common";
import { PaintStrides } from "@/shared/general/paint_strides";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-foreground text-xs text-background mt-64">
      <PaintStrides position="top" color="dark" />
      <div className="absolute top-0">
        <PaintSplash position="top" color="light" />
      </div>

      <div className="px-4 md:px-8 pt-12 pb-8">
        <div className="grid lg:grid-cols-3 gap-6 max-w-[90%] mx-auto">
          <div className="flex justify-center ">
            <div className="flex lg:flex-row gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-primary transition-colors"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="hover:text-primary transition-colors"
              >
                <DiscordIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@serosoda.com"
                aria-label="Email"
                className="hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-xs">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-bold uppercase tracking-wider mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-background hover:underline hover:decoration-wavy hover:underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-black tracking-tight mb-4">
              Sign up for 10% off your first order!
            </h3>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="email@example.com"
                className="w-full rounded-2xl text-sm h-10 px-4 placeholder:text-background transition-colors"
              />
              <Button
                type="button"
                className="w-full shadow-none hover:shadow-none translate-none hover:-translate-x-0.5 hover:-translate-y-1.5 text-xs font-black h-10 transition bg-background hover:bg-background text-foreground"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6">
        <div className="mx-auto max-w-[90%] px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p className="flex items-center justify-center w-full text-center">
            &copy; 2026, Sero Beverage Co.
          </p>
          <p className="flex items-center justify-center w-full text-center">
            Canada (CAD $)
          </p>
        </div>
      </div>

      <div className="pb-8 px-4 w-full">
        <Image
          src="/SERO.webp"
          alt="SERO"
          width={1200}
          height={350}
          className="mx-auto w-full max-w-[90%]"
        />
      </div>
    </footer>
  );
}
