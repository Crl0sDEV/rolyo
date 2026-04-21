import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

interface ChatMessage {
  role: "user" | "bot";
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `You are LabadaBot, the friendly, helpful, and energetic customer service assistant for 'Rolyo Laundry Services' in Cabanatuan City. 
      You speak in conversational Taglish (Tagalog-English). 
      
      Here are the business details you must know:
      - Location: Lorenzo Bldg., Avida Town Center, Brgy. Sta. Arcadia, Cabanatuan City.
      - Hours: Open Daily from 9:00 AM to 6:00 PM.
      - Services: Wash-Dry-Fold, Comforter & Bulky washing, Pickup & Delivery.
      - Contact: 0920 927 4185.
      
      Rules:
      1. Be polite, accommodating, and use local terms like 'boss', 'sir', 'ma'am'.
      2. Keep responses short and direct (1-3 sentences max).
      3. If someone asks for exact pricing, tell them it depends on the weight (kilos) and advise them to message the Facebook page or text the contact number for a direct quote.
      
      CRITICAL RULE: DO NOT write any "Chain of Thought", "Goals", "Thinking process", "Drafts", or bullet points. Output ONLY the final conversational Taglish text that the user will see. DO NOT use asterisks (*) or any formatting tags. Just speak directly.`,
    });

    const history = messages
      .slice(0, -1)
      .filter((m: ChatMessage, index: number) => !(index === 0 && m.role === "bot"))
      .map((m: ChatMessage) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      }));

    const chat = model.startChat({ history });
    let latestMessage = messages[messages.length - 1].content;

    if (history.length === 0) {
        latestMessage = `${latestMessage}\n\n[STRICT REMINDER: Speak directly. Do NOT output any internal reasoning, goals, or bullet points. Output ONLY your exact reply to the user.]`;
    }

    const result = await chat.sendMessage(latestMessage);
    const finalText = result.response.text().trim();

    return Response.json({ reply: finalText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return Response.json(
      { error: "Pasensya na boss, nagka-error ang system natin. Try again!" },
      { status: 500 }
    );
  }
}