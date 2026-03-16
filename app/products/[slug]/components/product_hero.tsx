"use client";

import { useState, useCallback } from "react";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import { Minus, Plus, Tag } from "lucide-react";
import type { Product, ProductDetails } from "@/data/products";
import { featureBadges } from "@/data/products";
import {
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
} from "@/shared/common";
import { ProductDetailsTabs } from "./product_details";

function BadgeIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "sugar-free":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-sero-dark"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8h4v8H6z" />
          <path d="M10 10h4v6h-4z" />
          <path d="M14 6h4v10h-4z" />
        </svg>
      );
    case "no-colors":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-sero-dark"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 4l-4 4" />
          <path d="M14 8l-8 8a2 2 0 1 0 3 3l8-8" />
          <path d="M17 7l-1.5 1.5" />
        </svg>
      );
    case "non-gmo":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-sero-dark"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <text
            x="12"
            y="13.5"
            textAnchor="middle"
            fontSize="6"
            fontWeight="bold"
            fill="currentColor"
            stroke="none"
          >
            GMO
          </text>
        </svg>
      );
    case "gluten-free":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-sero-dark"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21V10" />
          <path d="M9 7c0 2 3 3 3 3s3-1 3-3-3-3-3-3-3 1-3 3z" />
          <path d="M9 12c0 1.5 3 2.5 3 2.5s3-.5 3-2.5" />
          <path d="M10 16c0 1 2 2 2 2s2-1 2-2" />
        </svg>
      );
    case "nut-free":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-sero-dark"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4c-3.5 0-6 2.5-6 6 0 4.5 6 10 6 10s6-5.5 6-10c0-3.5-2.5-6-6-6z" />
          <path d="M12 4v6" />
          <path d="M9 7c2 1 4 1 6 0" />
        </svg>
      );
    default:
      return null;
  }
}

interface ProductHeroProps {
  product: Product;
  details: ProductDetails;
}

export function ProductHero({ product, details }: ProductHeroProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(() => {
    addToCart(
      {
        productId: product.id,
        name: product.name,
        price: product.price,
        currency: product.currency,
        image: product.image,
        slug: product.slug,
      },
      quantity,
    );
    setQuantity(1);
  }, [addToCart, product, quantity]);

  return (
    <section className="px-4 md:px-8 py-8 md:py-16 mt-8">
      <div className="mx-auto max-w-[96%] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left: Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative h-[700px] w-full border border-foreground rounded-xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover border border-foreground rounded-xl"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`transition-colors relative h-[150px] cursor-pointer w-full border border-foreground rounded-2xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)] ${
                    selectedImage === i
                      ? "border-primary"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover border border-foreground rounded-2xl"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">
              Ready to ship
            </span>
          </div>

          <h1 className="text-3xl md:text-7xl font-extrabold text-sero-dark">
            {product.name}
          </h1>
          <p className="text-xl font-bold text-sero-dark">
            ${product.price.toFixed(2)} {product.currency}
          </p>
          <p className="text-sm text-muted-foreground">{product.tagline}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-sero-dark">Quantity</span>
            <div className="flex items-center p-2">
              <Button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-background h-6 w-6 border-foreground py-3 transition-transform text-foreground border rounded-full hover:bg-background shadow-[4px_6px_0_0_rgba(117,234,255,0.3)] "
                aria-label="Decrease quantity"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-10 text-center text-sm font-medium">
                {quantity}
              </span>
              <Button
                onClick={() => setQuantity(quantity + 1)}
                size="icon"
                className="bg-background h-6 w-6 border-foreground p-3 transition-transform text-foreground border rounded-full hover:bg-background shadow-[4px_6px_0_0_rgba(117,234,255,0.3)]"
                aria-label="Increase quantity"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Pack Size */}
          <Select defaultValue="6-pack">
            <SelectTrigger className="w-full rounded-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6-pack">6-Pack — $10.99</SelectItem>
              <SelectItem value="12-pack">12-Pack — $19.99</SelectItem>
              <SelectItem value="24-pack">24-Pack — $35.99</SelectItem>
            </SelectContent>
          </Select>

          {/* Subscribe & Save */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="subscribe"
              className="px-4 border-foreground last:border-b rounded-none"
            >
              <AccordionTrigger className="text-sm font-bold hover:no-underline  ">
                <span className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Want more? Subscribe & save!
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 pb-2">
                  <div>
                    <p className="text-sm">
                      <span className="font-bold">
                        Never run out — and save every time.
                      </span>{" "}
                      Join thousands of Sero fans who subscribe and sip on
                      autopilot. You&apos;ll save money, stay stocked, and never
                      have to think about reordering again.
                    </p>
                  </div>

                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>
                      Weekly delivery:{" "}
                      <span className="font-bold">Save 15%</span>
                    </li>
                    <li>
                      Every 2 weeks: <span className="font-bold">Save 10%</span>
                    </li>
                    <li>
                      Every 4 weeks: <span className="font-bold">Save 5%</span>
                    </li>
                  </ol>

                  <p className="text-sm text-muted-foreground">
                    Skip or cancel anytime. No commitments. Just your favourite
                    flavours, always on hand — and always discounted.
                  </p>

                  {/* Purchase type selection */}

                  <p className="text-xs text-muted-foreground">
                    Auto-renews, skip or cancel anytime. View subscription
                    policy
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* OTP */}
          <div className="overflow-hidden">
            <label className="flex items-center justify-between px-4 py-3 cursor-pointer bg-primary-semilight/40">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="purchase-type"
                  value="one-time"
                  defaultChecked
                  className="accent-foreground w-4 h-4"
                />
                <span className="text-sm">One-time purchase</span>
              </div>
              <span className="text-sm font-medium">
                ${product.price.toFixed(2)} {product.currency}
              </span>
            </label>

            <div className="px-4 py-3 bg-primary-semilight/40 mt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold">Subscribe & Save</span>
                <span className="text-sm font-medium">
                  ${(product.price * 0.85).toFixed(2)} {product.currency}
                </span>
              </div>
              <div className="flex flex-col pl-1">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="purchase-type"
                    value="weekly"
                    className="accent-foreground w-4 h-4"
                  />
                  <span className="text-sm">Deliver every week, 15% off</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="purchase-type"
                    value="biweekly"
                    className="accent-foreground w-4 h-4"
                  />
                  <span className="text-sm">
                    Deliver every 2 weeks, 10% off
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="purchase-type"
                    value="monthly"
                    className="accent-foreground w-4 h-4"
                  />
                  <span className="text-sm">Deliver every 4 weeks, 5% off</span>
                </label>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col gap-3">
            <Button
              size="xl"
              className="w-full bg-background text-foreground hover:bg-background hover:text-foreground border border-foreground rounded-3xl h-11 text-base font-bold shadow-[4px_6px_0_0_rgba(117,234,255,0.3)]"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            {/* Buy with Shop Pay */}
            <div>
              <Button
                variant="secondary"
                size="xl"
                className="w-full text-base font-bold rounded-3xl h-11 bg-[#5A31F4] shadow-[4px_6px_0_0_rgba(117,234,255,0.3)] hover:shadow-[4px_6px_0_0_rgba(117,234,255,0.3)] hover:translate-none text-background hover:bg-[#4A28C9]"
              >
                Buy with Shop
              </Button>
              <Button
                variant="link"
                className="text-xs text-foreground rounded-none border-none shadow-none  mt-1"
              >
                More payment options
              </Button>
            </div>
          </div>

          {/* Feature Badges */}
          <Card className="grid grid-cols-5 gap-3 border p-6 shadow-[8px_8px_0_0_rgba(117,211,255,0.9)]">
            {featureBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-3"
              >
                <div className="relative bg-primary-semilight rounded-full h-14 w-14 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 56 56"
                      className="h-full w-full"
                      fill="none"
                    >
                      <line
                        x1="8"
                        y1="48"
                        x2="48"
                        y2="8"
                        stroke="#121212"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <BadgeIcon icon={badge.icon} />
                </div>
                <span className="text-xs text-center whitespace-nowrap font-medium text-sero-dark">
                  {badge.label}
                </span>
              </div>
            ))}
          </Card>

          <ProductDetailsTabs details={details} productName={product.name} />
        </div>
      </div>
    </section>
  );
}
