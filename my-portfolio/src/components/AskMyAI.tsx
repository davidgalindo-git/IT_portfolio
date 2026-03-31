"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export function AskMyAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;
    const newMessages: ChatMessage[] = [
      ...messages,
      { id: nextId, role: "user", content: input.trim() },
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages.map(({ role, content }) => ({ role, content })) }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = (await res.json()) as { reply: string };
      setMessages((prev) => [
        ...prev,
        { id: prev.length ? prev[prev.length - 1].id + 1 : 1, role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length ? prev[prev.length - 1].id + 1 : 1,
          role: "assistant",
          content: "The AI backend is not configured yet, but the UI is ready for integration.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 text-black shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400"
        aria-label="Ask my AI about my experience"
      >
        <MessageCircle className="h-5 w-5" />
      </button>
      {isOpen ? (
        <div className="fixed bottom-20 right-5 z-50 flex h-80 w-80 flex-col rounded-2xl border border-zinc-800 bg-zinc-950/95 p-3 text-xs shadow-2xl backdrop-blur">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Ask My AI
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[10px] text-zinc-500 hover:text-zinc-300"
            >
              Close
            </button>
          </div>
          <div className="flex-1 space-y-1 overflow-y-auto rounded-lg bg-zinc-950/80 p-2">
            {messages.length === 0 ? (
              <p className="text-[11px] text-zinc-500">
                Ask about my experience, projects, or security labs. The backend is wired to query a
                Supabase vector store once configured.
              </p>
            ) : (
              messages.map((m) => (
                <div
                  key={m.id}
                  className={`rounded-lg px-2 py-1 ${
                    m.role === "user"
                      ? "ml-auto max-w-[80%] bg-cyan-500 text-black"
                      : "mr-auto max-w-[85%] bg-zinc-900 text-zinc-100"
                  }`}
                >
                  {m.content}
                </div>
              ))
            )}
          </div>
          <div className="mt-2 flex items-center gap-1">
            <input
              className="h-8 flex-1 rounded-md border border-zinc-800 bg-zinc-950 px-2 text-[11px] text-zinc-100 outline-none focus:border-cyan-500"
              placeholder="Ask about my experience…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  void handleSend();
                }
              }}
            />
            <Button
              size="sm"
              className="h-8 rounded-md bg-cyan-500 px-2 text-[11px] text-black hover:bg-cyan-400"
              disabled={isLoading}
              type="button"
              onClick={() => void handleSend()}
            >
              {isLoading ? "…" : "Send"}
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

