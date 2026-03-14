import { notFound } from "next/navigation";
import { products, productDetails } from "@/data/products";
import { ProductHero } from "./components/product_hero";
import { SeroVsOthers } from "./components/sero_vs_others";
import { ReviewsCarousel } from "./components/reviews_carousel";
import { SodaShowdown } from "./components/soda_showdown";
import { ProductFaq } from "./components/product_faq";
import { ProductRecommendations } from "./components/product_recommendations";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const details = productDetails[slug];
  if (!details) {
    notFound();
  }

  return (
    <main>
      <ProductHero product={product} details={details} />
      <SeroVsOthers product={product} />
      <ReviewsCarousel reviews={details.reviews} />
      <SodaShowdown />
      <ProductFaq faqs={details.faqs} />
      <ProductRecommendations currentSlug={slug} />
    </main>
  );
}
