export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  slug: string;
  tagline: string;
  description: string;
  images: string[];
  color: string;
}

export interface ProductDetailSection {
  title: string;
  benefit: string;
  listItems: string[];
}

export interface ProductDetails {
  whyYoullLoveIt: ProductDetailSection;
  shippingAndGuarantee: ProductDetailSection;
  whatYoureGetting: ProductDetailSection;
  faqs: { question: string; answer: string }[];
  reviews: {
    rating: number;
    highlight: string;
    text: string;
    name: string;
  }[];
}

export const products: Product[] = [
  {
    id: "citrus-twist",
    name: "Citrus Twist",
    price: 10.99,
    currency: "CAD",
    image: "/Citrus_Front.webp",
    slug: "citrus-twist",
    tagline: "A zesty burst of sunshine in every sip.",
    description:
      "Bright, bold, and impossibly refreshing — Citrus Twist combines real citrus flavour with zero sugar for a guilt-free soda that actually tastes like a treat.",
    images: ["/Citrus_Front.webp", "/no_bg_sero.webp", "/ice_sero.webp"],
    color: "#FFC940",
  },
  {
    id: "doctor-sero",
    name: "Doctor Sero",
    price: 10.99,
    currency: "CAD",
    image: "/Doctor_Front.webp",
    slug: "doctor-sero",
    tagline: "The doctor is in — and it tastes incredible.",
    description:
      "A smooth, complex blend of 23 flavours reimagined with zero sugar and no artificial sweeteners. Doctor Sero is the nostalgic classic you've been waiting for.",
    images: ["/Doctor_Front.webp", "/no_bg_sero.webp", "/ice_sero.webp"],
    color: "#8B2252",
  },
  {
    id: "rocket-soda",
    name: "Rocket Soda",
    price: 10.99,
    currency: "CAD",
    image: "/Rocket_Front.webp",
    slug: "rocket-soda",
    tagline: "Blast off with bold, fizzy flavour.",
    description:
      "Rocket Soda delivers an out-of-this-world taste experience with explosive fizz and zero sugar crash. Fuel your day without the junk.",
    images: ["/Rocket_Front.webp", "/no_bg_sero.webp", "/ice_sero.webp"],
    color: "#FF4D4D",
  },
  {
    id: "grape",
    name: "Grape",
    price: 10.99,
    currency: "CAD",
    image: "/Tire_Front.webp",
    slug: "grape",
    tagline: "Bold grape flavour, zero guilt.",
    description:
      "Juicy, vibrant, and full of flavour — Grape delivers the classic taste you crave with absolutely none of the sugar or artificial sweeteners.",
    images: ["/Tire_Front.webp", "/no_bg_sero.webp", "/ice_sero.webp"],
    color: "#7B2D8B",
  },
  {
    id: "root-beer",
    name: "Root Beer",
    price: 10.99,
    currency: "CAD",
    image: "/Root_Front.webp",
    slug: "root-beer",
    tagline: "Classic root beer, reimagined clean.",
    description:
      "Rich, creamy, and perfectly spiced — our Root Beer brings back the nostalgic flavour you love, completely free of sugar and artificial sweeteners.",
    images: ["/Root_Front.webp", "/no_bg_sero.webp", "/ice_sero.webp"],
    color: "#5C3317",
  },
  {
    id: "rocketed-soda",
    name: "Rocketed Soda",
    price: 10.99,
    currency: "CAD",
    image: "/Rocket_Front.webp",
    slug: "rocketed-soda",
    tagline: "Blast off with bold, fizzy flavour.",
    description:
      "Rocketed Soda delivers an out-of-this-world taste experience with explosive fizz and zero sugar crash. Fuel your day without the junk.",
    images: ["/Rocket_Front.webp", "/no_bg_sero.webp", "/ice_sero.webp"],
    color: "#FF4D4D",
  },
];

export const featureBadges = [
  { label: "Sugar Free", icon: "sugar-free" },
  { label: "No Artificial Colors", icon: "no-colors" },
  { label: "Non GMO", icon: "non-gmo" },
  { label: "Gluten Free", icon: "gluten-free" },
  { label: "Nut Free", icon: "nut-free" },
];

export const sharedFaqs: { question: string; answer: string }[] = [
  {
    question: "What makes Sero different?",
    answer:
      "Sero is the only soda with zero sugar, no artificial sweeteners, and no artificial colours — while still tasting like a real, full-flavour soda. We use monk fruit and stevia to sweeten naturally.",
  },
  {
    question: "What's it sweetened with?",
    answer:
      "We use a blend of monk fruit extract and stevia leaf extract. Both are naturally derived, zero-calorie sweeteners that don't spike your blood sugar.",
  },
  {
    question: "Does it taste like a real soda?",
    answer:
      "Yes! That's our whole thing. We spent over a year perfecting each flavour so it actually tastes like a treat — not a compromise.",
  },
  {
    question: "Is this safe to drink every day?",
    answer:
      "Absolutely. Sero is made with clean, simple ingredients. No artificial sweeteners, no artificial colours, no preservatives. Sip freely.",
  },
  {
    question: "Do you ship across Canada and the US?",
    answer:
      "We currently ship across Canada with flat-rate shipping. US shipping is coming soon — sign up for our newsletter to be the first to know.",
  },
  {
    question: "What if I don't like it?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not loving Sero, reach out to us and we'll make it right.",
  },
  {
    question: "Can I subscribe and save?",
    answer:
      "Yes! Subscribe to any flavour and save 15% on every order. You can pause, skip, or cancel anytime — no commitment.",
  },
  {
    question: "Do you ever sell out?",
    answer:
      "Some flavours move fast! Subscribing is the best way to make sure you never miss a drop. We also restock regularly.",
  },
  {
    question: 'Oh no. Does Sero taste "healthy"?',
    answer:
      "Not even a little. Sero tastes like a proper soda — crisp, fizzy, and full of flavour. The healthy part is just a bonus.",
  },
  {
    question: "Where did you come from?",
    answer:
      "Sero was born in Canada by a team obsessed with making soda better. We wanted a drink we could feel good about without giving up the taste we love.",
  },
];

export const sharedReviews = [
  {
    rating: 5,
    highlight: "Best soda I've ever had!",
    text: "I was skeptical about zero-sugar sodas but Sero completely changed my mind. The flavour is incredible and I love that it's actually good for me.",
    name: "Sarah M.",
  },
  {
    rating: 5,
    highlight: "Goodbye diet cola",
    text: "I've been drinking diet sodas for years and always hated the aftertaste. Sero has none of that. It's crisp, refreshing, and I can drink it guilt-free.",
    name: "James K.",
  },
  {
    rating: 5,
    highlight: "My kids love it too",
    text: "Finally a soda I can feel good about giving my kids. No sugar, no junk, and they actually ask for it. That's a win in my book.",
    name: "Michelle T.",
  },
  {
    rating: 5,
    highlight: "Subscribe and never look back",
    text: "I subscribed after my first order and haven't looked back. The 15% savings plus free shipping make it a no-brainer. And the soda is genuinely delicious.",
    name: "David L.",
  },
  {
    rating: 5,
    highlight: "Clean ingredients, real taste",
    text: "I read every label and Sero passes with flying colours. Monk fruit, stevia, natural flavours — and it still tastes like a proper soda. Impressed.",
    name: "Priya R.",
  },
];

export const productDetails: Record<string, ProductDetails> = {
  "citrus-twist": {
    whyYoullLoveIt: {
      title: 'This tastes like soda — not a "healthy" alternative.',
      benefit:
        "Full flavour, zero compromise. Citrus Twist is bold, refreshing, and made with ingredients you can actually feel good about.",
      listItems: [
        "Bright, tangy citrus flavour that hits different",
        "Zero sugar — naturally sweetened with monk fruit & stevia",
        "No artificial colours, sweeteners, or preservatives",
        "Only 5 calories per can",
        "Perfect for mixing or sipping solo",
      ],
    },
    shippingAndGuarantee: {
      title: "Fast shipping. No-risk guarantee.",
      benefit:
        "We ship quickly across Canada and stand behind every can with a 100% satisfaction guarantee.",
      listItems: [
        "Free shipping on orders over $50 CAD",
        "Flat-rate $9.99 shipping across Canada",
        "Orders ship within 1-2 business days",
        "100% satisfaction guarantee — love it or we'll make it right",
        "Subscribe and save 15% on every order",
      ],
    },
    whatYoureGetting: {
      title: "What's in the box",
      benefit:
        "Premium, clean-ingredient soda made in Canada — available in the size that fits your lifestyle.",
      listItems: [
        "355ml cans of Citrus Twist zero-sugar soda",
        "Available in 6-Pack, 12-Pack, or 24-Pack",
        "Sweetened naturally with monk fruit and stevia",
        "Made in Canada with premium, clean ingredients",
        "Fully recyclable aluminum cans",
      ],
    },
    faqs: sharedFaqs,
    reviews: sharedReviews,
  },
  "doctor-sero": {
    whyYoullLoveIt: {
      title: 'This tastes like soda — not a "healthy" alternative.',
      benefit:
        "A smooth, complex 23-flavour blend that's impossibly delicious — with none of the junk.",
      listItems: [
        "A bold 23-flavour blend that's impossibly smooth",
        "Zero sugar — naturally sweetened with monk fruit & stevia",
        "No artificial colours, sweeteners, or preservatives",
        "Only 5 calories per can",
        "The nostalgic taste you love, cleaned up",
      ],
    },
    shippingAndGuarantee: {
      title: "Fast shipping. No-risk guarantee.",
      benefit:
        "We ship quickly across Canada and stand behind every can with a 100% satisfaction guarantee.",
      listItems: [
        "Free shipping on orders over $50 CAD",
        "Flat-rate $9.99 shipping across Canada",
        "Orders ship within 1-2 business days",
        "100% satisfaction guarantee — love it or we'll make it right",
        "Subscribe and save 15% on every order",
      ],
    },
    whatYoureGetting: {
      title: "What's in the box",
      benefit:
        "Premium, clean-ingredient soda made in Canada — available in the size that fits your lifestyle.",
      listItems: [
        "355ml cans of Doctor Sero zero-sugar soda",
        "Available in 6-Pack, 12-Pack, or 24-Pack",
        "Sweetened naturally with monk fruit and stevia",
        "Made in Canada with premium, clean ingredients",
        "Fully recyclable aluminum cans",
      ],
    },
    faqs: sharedFaqs,
    reviews: sharedReviews,
  },
  "rocket-soda": {
    whyYoullLoveIt: {
      title: 'This tastes like soda — not a "healthy" alternative.',
      benefit:
        "Explosive fizz and out-of-this-world flavour — bold enough to replace your energy drink habit.",
      listItems: [
        "Explosive fizz and out-of-this-world flavour",
        "Zero sugar — naturally sweetened with monk fruit & stevia",
        "No artificial colours, sweeteners, or preservatives",
        "Only 5 calories per can",
        "Bold enough to replace your energy drink habit",
      ],
    },
    shippingAndGuarantee: {
      title: "Fast shipping. No-risk guarantee.",
      benefit:
        "We ship quickly across Canada and stand behind every can with a 100% satisfaction guarantee.",
      listItems: [
        "Free shipping on orders over $50 CAD",
        "Flat-rate $9.99 shipping across Canada",
        "Orders ship within 1-2 business days",
        "100% satisfaction guarantee — love it or we'll make it right",
        "Subscribe and save 15% on every order",
      ],
    },
    whatYoureGetting: {
      title: "What's in the box",
      benefit:
        "Premium, clean-ingredient soda made in Canada — available in the size that fits your lifestyle.",
      listItems: [
        "355ml cans of Rocket Soda zero-sugar soda",
        "Available in 6-Pack, 12-Pack, or 24-Pack",
        "Sweetened naturally with monk fruit and stevia",
        "Made in Canada with premium, clean ingredients",
        "Fully recyclable aluminum cans",
      ],
    },
    faqs: sharedFaqs,
    reviews: sharedReviews,
  },
  "root-beer": {
    whyYoullLoveIt: {
      title: 'This tastes like soda — not a "healthy" alternative.',
      benefit:
        "Rich, creamy, and perfectly spiced — Root Beer brings back the nostalgic flavour you love, completely clean.",
      listItems: [
        "Rich, creamy root beer with the perfect spice balance",
        "Zero sugar — naturally sweetened with monk fruit & stevia",
        "No artificial colours, sweeteners, or preservatives",
        "Only 5 calories per can",
        "Tastes just like the classic — minus the guilt",
      ],
    },
    shippingAndGuarantee: {
      title: "Fast shipping. No-risk guarantee.",
      benefit:
        "We ship quickly across Canada and stand behind every can with a 100% satisfaction guarantee.",
      listItems: [
        "Free shipping on orders over $50 CAD",
        "Flat-rate $9.99 shipping across Canada",
        "Orders ship within 1-2 business days",
        "100% satisfaction guarantee — love it or we'll make it right",
        "Subscribe and save 15% on every order",
      ],
    },
    whatYoureGetting: {
      title: "What's in the box",
      benefit:
        "Premium, clean-ingredient soda made in Canada — available in the size that fits your lifestyle.",
      listItems: [
        "355ml cans of Root Beer zero-sugar soda",
        "Available in 6-Pack, 12-Pack, or 24-Pack",
        "Sweetened naturally with monk fruit and stevia",
        "Made in Canada with premium, clean ingredients",
        "Fully recyclable aluminum cans",
      ],
    },
    faqs: sharedFaqs,
    reviews: sharedReviews,
  },
  grape: {
    whyYoullLoveIt: {
      title: 'This tastes like soda — not a "healthy" alternative.',
      benefit:
        "Juicy, vibrant grape that bursts with flavour — a childhood favourite, grown-up style.",
      listItems: [
        "Juicy, vibrant grape that bursts with flavour",
        "Zero sugar — naturally sweetened with monk fruit & stevia",
        "No artificial colours, sweeteners, or preservatives",
        "Only 5 calories per can",
        "A childhood favourite, grown-up style",
      ],
    },
    shippingAndGuarantee: {
      title: "Fast shipping. No-risk guarantee.",
      benefit:
        "We ship quickly across Canada and stand behind every can with a 100% satisfaction guarantee.",
      listItems: [
        "Free shipping on orders over $50 CAD",
        "Flat-rate $9.99 shipping across Canada",
        "Orders ship within 1-2 business days",
        "100% satisfaction guarantee — love it or we'll make it right",
        "Subscribe and save 15% on every order",
      ],
    },
    whatYoureGetting: {
      title: "What's in the box",
      benefit:
        "Premium, clean-ingredient soda made in Canada — available in the size that fits your lifestyle.",
      listItems: [
        "355ml cans of Grape zero-sugar soda",
        "Available in 6-Pack, 12-Pack, or 24-Pack",
        "Sweetened naturally with monk fruit and stevia",
        "Made in Canada with premium, clean ingredients",
        "Fully recyclable aluminum cans",
      ],
    },
    faqs: sharedFaqs,
    reviews: sharedReviews,
  },
};
