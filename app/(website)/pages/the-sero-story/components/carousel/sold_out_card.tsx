"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import {
  Card,
  CardFooter,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  CardContent,
} from "../../../../../../shared/common";

interface SoldOutCardProps {
  product: Product;
}

export function SoldOutCard({ product }: SoldOutCardProps) {
  const [packSize, setPackSize] = useState("6-pack");

  return (
    <Card className="relative w-full group rounded-xl bg-background p-4 shadow-[6px_6px_0_0_rgba(117,234,255,0.9)]">
      {/* Sold Out Badge */}
      <div className="absolute -top-4 -left-6 z-10 w-32 h-32 bg-black rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm text-center leading-tight">
          Sold Out
        </span>
      </div>

      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden rounded-xl bg-black">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-110 border-2 border-foreground transition-transform duration-300"
          />
        </div>
      </Link>

      <CardContent className="border-none p-0 flex flex-col items-center justify-center mt-3">
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
        className="flex flex-col p-0 mb-2 mt-3"
        onClick={(e) => e.preventDefault()}
      >
        <Select value={packSize} onValueChange={setPackSize}>
          <SelectTrigger className="w-full rounded-2xl mb-3 h-9">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="6-pack">6-Pack</SelectItem>
            <SelectItem value="12-pack">12-Pack</SelectItem>
            <SelectItem value="24-pack">24-Pack</SelectItem>
          </SelectContent>
        </Select>

        <p className="w-full text-center text-gray-400 font-semibold text-sm">
          Sold Out
        </p>
      </CardFooter>
    </Card>
  );
}
