export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export const shopLinks: NavLink[] = [
  { label: "Soda", href: "/collections/sodas" },
  { label: "Merch", href: "/collections/merch" },
  { label: "Find In Store", href: "/pages/find-in-store" },
  { label: "Wholesale", href: "/pages/wholesale" },
];

export const aboutLinks: NavLink[] = [
  { label: "Why Sero?", href: "/pages/about-us" },
  { label: "The Sero Story", href: "/pages/the-sero-story" },
  { label: "The Sero Spill", href: "/pages/the-sero-spill" },
  { label: "Find Your Flavor", href: "/pages/soda-quiz" },
];

export const helpLinks: NavLink[] = [
  { label: "FAQ", href: "/pages/faq" },
  { label: "Contact Us", href: "/pages/contact-us" },
  { label: "Privacy Policy", href: "/pages/privacy-policy" },
  { label: "Refund Policy", href: "/pages/refund-policy" },
  { label: "Terms of Service", href: "/pages/terms-of-service" },
];

export const socialLinks = [
  { label: "X", href: "https://x.com", icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Discord", href: "https://discord.com", icon: "discord" },
  { label: "Email", href: "mailto:hello@serosoda.com", icon: "mail" },
] as const;

export const footerColumns: NavGroup[] = [
  { title: "Shop", links: shopLinks },
  { title: "Learn", links: aboutLinks },
  { title: "Help", links: helpLinks },
];
