import { products } from "@/data/products";
import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const productCatalog = products
  .map(
    (p) =>
      `- ${p.name} (slug: ${p.slug}): ${p.tagline} — ${p.description}`
  )
  .join("\n");

const systemPrompt = `You are Sero Bot, a friendly and enthusiastic drink recommendation assistant for Sero Soda — a zero-sugar soda brand.

Your job is to suggest the perfect Sero drink based on the user's mood, preferences, or cravings. Be conversational, fun, and brief (2-3 sentences max).

Available products:
${productCatalog}

IMPORTANT: When recommending a product, you MUST include exactly one product link tag in this format: [PRODUCT:slug]
For example: [PRODUCT:citrus-twist] or [PRODUCT:root-beer]

You can use **bold** for product names. Keep responses short and energetic. Always recommend exactly one product.`;

export async function POST(request: Request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({ error: "Message is required" }, { status: 400 });
  }

  try {
    const { text } = await generateText({
      model: anthropic("claude-haiku-4-5-20251001"),
      system: systemPrompt,
      prompt: message,
    });

    return Response.json({ reply: text });
  } catch (error) {
    console.error("Sero Bot API error:", error);
    return Response.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
