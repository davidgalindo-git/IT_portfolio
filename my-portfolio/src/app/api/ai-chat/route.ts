export const runtime = "edge";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as { messages: ChatMessage[] | undefined };
  const last = body.messages?.[body.messages.length - 1];

  const reply =
    last && last.role === "user"
      ? `This is a placeholder response. In production, this endpoint will query a Supabase vector store of my resume and labs to answer: "${last.content}".`
      : "This is a placeholder AI response wired for future Supabase vector integration.";

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

