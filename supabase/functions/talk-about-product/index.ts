import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { product } = await req.json();

    if (!product) {
      return new Response(
        JSON.stringify({ error: "Product data is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Prompts
    const systemPrompt = `You are an enthusiastic product expert for a geek/otaku store. Your job is to analyze products and create engaging, informative descriptions that appeal to collectors and fans. Always be accurate about the product details provided.`;

    const userPrompt = `Analyze this product and provide an engaging description:

Product Data:
${JSON.stringify(product, null, 2)}

Please provide a JSON response with the following structure:
{
  "title": "An exciting, catchy title for this product",
  "pitch": "A 2-3 sentence compelling pitch that highlights why this product is special",
  "bullets": ["3-5 key features or highlights as bullet points"],
  "recommendation": "A personalized recommendation explaining who would love this product and why",
  "stock_text": "A natural statement about stock availability (based on stock: ${product.stock})",
  "whatsapp_text": "A pre-formatted message for WhatsApp including product name, SKU, and a friendly inquiry"
}

Important:
- Be enthusiastic but accurate
- Reference the actual product attributes provided
- For limited_edition items, emphasize rarity
- Format prices in Mexican Pesos (MXN)
- Make the WhatsApp text natural and conversational`;

    console.log("Calling Ollama local model...");

    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3.1:8b", // modelo local de tamaño medio
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ollama error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to analyze product" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const data = await response.json();
    console.log("AI response received from Ollama");

    // Ollama devuelve: { message: { content: "..." }, done: true }
    const content = data.message?.content;
    if (!content) {
      console.error("No content in Ollama response");
      return new Response(
        JSON.stringify({ error: "Invalid AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    let analysisResult;
    try {
      analysisResult = JSON.parse(content);
    } catch {
      // si no viene en JSON, devolver texto plano
      analysisResult = { raw_text: content };
    }

    return new Response(
      JSON.stringify(analysisResult),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Error in talk-about-product function:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
