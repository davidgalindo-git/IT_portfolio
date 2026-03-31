type TerminalProps = {
  lines: string[];
};

export function Terminal({ lines }: TerminalProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-zinc-900 shadow-[0_0_40px_rgba(56,189,248,0.35)]">
      <div className="flex items-center gap-2 border-b border-zinc-800/80 bg-zinc-900/80 px-3 py-2 text-xs text-zinc-500">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="ml-2 font-mono text-[10px] text-zinc-500">zsh — portfolio</span>
      </div>
      <div className="space-y-1.5 bg-gradient-to-b from-zinc-950/80 to-zinc-900/60 px-4 py-3 font-mono text-xs text-zinc-200">
        {lines.map((line, index) => (
          <div key={`${line}-${index}`} className="flex">
            <span className="mr-2 text-cyan-400">$</span>
            <span className="whitespace-pre-wrap">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

