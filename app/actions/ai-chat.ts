"use server";

// Define the type for chat history
type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

// Enhanced AI response system using direct Groq API calls
export async function generateAIResponse(
  userMessage: string,
  chatHistory: ChatMessage[]
): Promise<string> {
  try {
    console.log(process.env.GROQ_API_KEY, "API Key")
    // Try to use Groq API directly
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            {
              role: "system",
              content: `You are an AI customer service assistant for Myanmar Express Hub, a company that provides international shipping, purchasing, and consulting services.
                        SERVICES OFFERED:
                        1. Buy For Me: We purchase products on behalf of customers from international retailers that don't ship to Myanmar.
                        2. Consulting Service: We provide expert guidance to help businesses navigate international markets, optimize logistics, and expand globally.
                        3. Ship for me: We provide reliable international shipping for packages from around the world to Myanmar.

                        PRICING INFORMATION:
                        - Buy For Me service fee: 10% of product price (minimum $5)
                        - Shipping rates: Start from $8 for small packages from Thailand to Myanmar
                        - Consulting packages: Range from $1,500 to $7,500 depending on needs

                        CONTACT INFORMATION:
                        - Phone: +95 9 123 456 789
                        - Email: info@myanmarexpresshub.com
                        - Facebook Page: https://www.facebook.com/myanmarexpresshub
                        - Address: 123 Main Street, Yangon, Myanmar
                        - Business hours: Monday-Friday 9 AM - 5 PM, Saturday 9 AM - 12 PM

                        Your responses should be:
                        - Helpful, friendly, and professional
                        - Concise (keep responses under 150 words when possible)
                        - Focused on addressing the customer's specific question
                        - Proactive in offering relevant information
                        - Encouraging customers to provide more details when needed

                        If you don't know the answer to a specific question, acknowledge that and offer to connect the customer with a human representative.`,
            },
            ...chatHistory.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            {
              role: "user",
              content: userMessage,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return (
        data.choices[0]?.message?.content ||
        "I'm sorry, I couldn't generate a response. Please try again."
      );
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error generating AI response:", error);

    // Enhanced fallback response system
    const lowercaseInput = userMessage.toLowerCase();

    // Shipping related queries
    if (
      lowercaseInput.includes("shipping") ||
      lowercaseInput.includes("ship") ||
      lowercaseInput.includes("delivery")
    ) {
      if (
        lowercaseInput.includes("cost") ||
        lowercaseInput.includes("price") ||
        lowercaseInput.includes("rate")
      ) {
        return "Our shipping rates start from $8 for small packages from Thailand to Myanmar. Rates vary based on weight, dimensions, and origin country. For a specific quote, please provide package details or contact us at +95 9 123 456 789.";
      } else if (
        lowercaseInput.includes("time") ||
        lowercaseInput.includes("how long")
      ) {
        return "Shipping times vary by origin: Thailand (3-5 days), Japan/Singapore (5-7 days), US/UK/Europe (7-14 days). These are estimates and actual delivery times may vary due to customs clearance.";
      } else if (
        lowercaseInput.includes("track") ||
        lowercaseInput.includes("tracking")
      ) {
        return "We provide real-time tracking for all shipments. Once your package is shipped, you'll receive a tracking number and link to monitor your package's progress from our warehouse to your doorstep.";
      } else {
        return "We offer international shipping from the US, UK, Japan, Thailand, Singapore, South Korea, Australia, and Germany to Myanmar. We handle customs clearance, tracking, and doorstep delivery. How can I help with your shipping needs?";
      }
    }

    // Buy For Me service queries
    else if (
      lowercaseInput.includes("buy") ||
      lowercaseInput.includes("purchase") ||
      lowercaseInput.includes("shopping")
    ) {
      if (
        lowercaseInput.includes("fee") ||
        lowercaseInput.includes("cost") ||
        lowercaseInput.includes("price")
      ) {
        return "Our Buy For Me service fee is 10% of the product's purchase price, with a minimum fee of $5. This includes product verification, purchase processing, and preparation for shipping. Additional shipping costs apply separately.";
      } else if (
        lowercaseInput.includes("how") ||
        lowercaseInput.includes("work")
      ) {
        return "Here's how our Buy For Me service works: 1) Submit a purchase request with product details, 2) We provide a quote, 3) After payment, we purchase and ship to our warehouse, 4) We inspect and ship to your address in Myanmar.";
      } else {
        return "Our Buy For Me service allows you to purchase products from international retailers that don't ship to Myanmar. We handle the entire process from purchase to delivery, including product verification and customs clearance. What would you like to buy?";
      }
    }

    // Consulting service queries
    else if (
      lowercaseInput.includes("consult") ||
      lowercaseInput.includes("business") ||
      lowercaseInput.includes("strategy")
    ) {
      if (
        lowercaseInput.includes("price") ||
        lowercaseInput.includes("cost") ||
        lowercaseInput.includes("package")
      ) {
        return "Our consulting packages range from $1,500 (Basic) to $7,500 (Enterprise). We offer logistics optimization, market entry strategy, supply chain consulting, and business strategy services. Would you like details about a specific package?";
      } else {
        return "Our consulting services help businesses optimize logistics, enter new markets, and expand globally. We provide expert guidance on international business, supply chain management, and strategic planning. Would you like to schedule a consultation?";
      }
    }

    // Pricing queries
    else if (
      lowercaseInput.includes("price") ||
      lowercaseInput.includes("cost") ||
      lowercaseInput.includes("fee") ||
      lowercaseInput.includes("rate")
    ) {
      return "Our pricing: Buy For Me (10% of product price, min $5), Shipping (from $8 for small packages), Consulting ($1,500-$7,500). Prices vary based on specific requirements. What service are you interested in for a detailed quote?";
    }

    // Contact information queries
    else if (
      lowercaseInput.includes("contact") ||
      lowercaseInput.includes("phone") ||
      lowercaseInput.includes("email") ||
      lowercaseInput.includes("address") ||
      lowercaseInput.includes("hours")
    ) {
      return "Contact us at: Phone: +95 9 123 456 789, Email: info@myanmarexpresshub.com, Address: 123 Main Street, Yangon, Myanmar. Business hours: Monday-Friday 9 AM-5 PM, Saturday 9 AM-12 PM. How can we help you today?";
    }

    // FAQ related queries
    else if (
      lowercaseInput.includes("faq") ||
      lowercaseInput.includes("question") ||
      lowercaseInput.includes("help")
    ) {
      return "I can help answer questions about our shipping, purchasing, and consulting services. Common topics include pricing, shipping times, service processes, and contact information. What specific information are you looking for?";
    }

    // Greeting responses
    else if (
      lowercaseInput.includes("hello") ||
      lowercaseInput.includes("hi") ||
      lowercaseInput.includes("hey") ||
      lowercaseInput.includes("good")
    ) {
      return "Hello! Welcome to Myanmar Express Hub. We provide international shipping, purchasing, and consulting services. How can I assist you today?";
    }

    // Thank you responses
    else if (
      lowercaseInput.includes("thank") ||
      lowercaseInput.includes("thanks")
    ) {
      return "You're welcome! Is there anything else I can help you with regarding our services? Feel free to ask about shipping, purchasing, or consulting services.";
    }

    // Default response
    else {
      return "Thank you for contacting Myanmar Express Hub! We offer three main services: Buy For Me (international purchasing), Ship for me (international shipping), and Consulting Services (business guidance). How can I help you today?";
    }
  }
}
