type LabStatsProps = {
  difficulty: string;
  category: string;
  timeToCompromise: string;
  tools: string[];
};

export function LabStats({ difficulty, category, timeToCompromise, tools }: LabStatsProps) {
  return (
    <div className="mb-6 grid gap-3 rounded-xl border border-zinc-800/80 bg-zinc-950/80 px-4 py-3 text-xs text-zinc-300 sm:grid-cols-4 sm:text-[11px]">
      <div>
        <div className="text-[10px] uppercase tracking-wide text-zinc-500">Difficulty</div>
        <div className="mt-1 font-semibold text-emerald-400">{difficulty}</div>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wide text-zinc-500">Category</div>
        <div className="mt-1 font-semibold text-cyan-300">{category}</div>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wide text-zinc-500">Time to Compromise</div>
        <div className="mt-1 font-semibold text-zinc-100">{timeToCompromise}</div>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wide text-zinc-500">Key Tools</div>
        <div className="mt-1 flex flex-wrap gap-1">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-zinc-900/80 px-2 py-0.5 text-[10px] font-medium text-zinc-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

