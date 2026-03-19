import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/common";
import { PaintStrides } from "@/shared/general/paint_strides";
import Image from "next/image";

export function BasicsHero() {
  const merch = [
    {
      id: 1,
      title: "Garment-Dyed Heavyweight T-Shirt",
      price: "$35.99 CAD",
      image: "/sero_shirt.webp",
      variants: ["Black / S", "Black / M", "Black / L", "Black / XL"],
    },
    {
      id: 2,
      title: "Heavyweight Hooded Sweatshirt",
      price: "$89.99 CAD",
      image: "/sero_hoodie.webp",
      variants: [
        "Black / XS",
        "Black / S",
        "Black / M",
        "Black / L",
        "Black / XL",
      ],
    },
    {
      id: 3,
      title: "Heavyweight Crewneck Sweatshirt",
      price: "$84.99 CAD",
      image: "/sero_sweat_shirt.webp",
      variants: [
        "Black / XS",
        "Black / S",
        "Black / M",
        "Black / L",
        "Black / XL",
      ],
    },
  ];

  const capColors = ["Black", "Blue"];

  return (
    <div className="mt-96">
      <section className="relative overflow-hidden bg-primary-semilight p-4 md:p-6">
        <PaintStrides position="top" color="primary-semi-light" mirrored />
        <PaintStrides position="bottom" color="primary-semi-light" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {merch.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="relative aspect-square border border-foreground rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover border border-foreground rounded-xl"
                />
              </div>
              <CardContent>
                <CardDescription className="text-center space-y-3 font-semibold">
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </CardDescription>
              </CardContent>

              <CardFooter className="flex flex-col gap-2">
                <Select defaultValue={item.variants[0]}>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {item.variants.map((variant) => (
                      <SelectItem key={variant} value={variant}>
                        {variant}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="w-full font-black rounded-2xl h-12 shadow-[6px_6px_0_0_rgba(117,211,255,0.3)]">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}

          <Card className="relative p-4">
            <div className="relative aspect-square border border-foreground rounded-xl">
              <Image
                src="/sero_blue_cap.webp"
                alt="5 Panel Mid Profile Baseball Cap"
                fill
                className="object-cover border border-foreground rounded-xl"
              />
            </div>
            <CardContent>
              <CardDescription className="text-center space-y-3 font-semibold">
                <p>5 Panel Mid Profile Baseball Cap</p>
                <p>$35.99 CAD</p>
              </CardDescription>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <div className="flex flex-col items-center justify-center  gap-2">
                <div className="flex gap-2 items-center">
                  {capColors.map((color) => (
                    <Button
                      key={color}
                      variant={color === "Blue" ? "default" : "outline"}
                      size="sm"
                      className="rounded-full"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit rounded-2xl"
                >
                  OS
                </Button>
              </div>
              <Button className="w-full font-black rounded-2xl h-12 shadow-[6px_6px_0_0_rgba(117,211,255,0.3)]">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
