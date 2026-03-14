"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button, Input } from "@/shared/common";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/shared/common/sheet";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeFromCart, updateQuantity } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
          <SheetClose asChild>
            <button
              aria-label="Close cart"
              className="rounded-sm opacity-70 transition-opacity hover:opacity-100"
            >
              <X className="h-5 w-5" />
            </button>
          </SheetClose>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center px-6">
            <p className="text-muted-foreground text-sm">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {items.map((item) => {
              const packMatch = item.name.match(/\(([^)]+)\)/);
              const packSize = packMatch ? packMatch[1] : null;
              const displayName = item.name.replace(/\s*\([^)]*\)/, "");

              return (
                <div key={item.productId} className="flex gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium leading-tight">
                        {displayName}
                      </p>
                      {packSize && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {packSize}
                        </p>
                      )}
                      <p className="text-sm mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-full">
                        <button
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-muted transition-colors"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-muted transition-colors"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        className="text-xs text-muted-foreground underline hover:text-foreground transition-colors"
                        onClick={() => removeFromCart(item.productId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <label
                htmlFor="order-note"
                className="text-xs text-muted-foreground mb-1 block"
              >
                Add a note to your order
              </label>
              <Input id="order-note" className="text-sm" />
            </div>
          </div>
        )}

        {items.length > 0 && (
          <SheetFooter className="flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Subtotal</span>
              <span className="text-sm font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping &amp; taxes calculated at checkout
            </p>
            <Button className="w-full" size="lg">
              Check Out
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
