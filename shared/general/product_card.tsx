"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import {
  Button,
  Card,
  CardFooter,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  CardContent,
} from "../common";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [packSize, setPackSize] = useState("6-pack");

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      productId: `${product.id}-${packSize}`,
      name: `${product.name} (${packSize})`,
      price: product.price,
      currency: product.currency,
      image: product.image,
      slug: product.slug,
    });
  }

  return (
    <Card className="w-full group rounded-xl bg-background p-4 shadow-[6px_6px_0_0_rgba(59,130,246,0.3)] hover:shadow-[6px_6px_0_0_rgba(59,130,246,0.2)]">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden rounded-xl border border-foreground">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-lg group-hover:scale-130 transition-transform duration-300"
          />
        </div>
      </Link>

      <CardContent className="border-none p-0 flex flex-col items-center justify-center">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm text-sero-dark hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mt-1">
          ${product.price.toFixed(2)} {product.currency}
        </p>
      </CardContent>

      <CardFooter
        className="flex flex-col p-0 mb-2"
        onClick={(e) => e.preventDefault()}
      >
        <Select value={packSize} onValueChange={setPackSize}>
          <SelectTrigger className="w-full rounded-full mb-3 h-7">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="6-pack">6-Pack</SelectItem>
            <SelectItem value="12-pack">12-Pack</SelectItem>
            <SelectItem value="24-pack">24-Pack</SelectItem>
          </SelectContent>
        </Select>

        <Button
          className="w-full font-bold shadow-[3px_4px_0_0_rgba(59,130,246,0.3)] hover:shadow-[1px_1px_0_0_rgba(59,130,246,0.2)]"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
