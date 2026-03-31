import { Button } from "@/components/ui/button";
import { Terminal } from "@/components/Terminal";

const SKILL_LINES = [
  "echo \"Full Stack Dev & Security Researcher\"",
  "skills=(\"Next.js\" \"TypeScript\" \"Python\" \"Cloud\" \"OffSec\")",
  "printf '%s\\n' \"Shipping secure, observable systems.\"",
];

type HeroProps = {
  onCtaClick?: () => void;
};

export function Hero({ onCtaClick }: HeroProps) {
  const handleClick = () => {
    if (onCtaClick) onCtaClick();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-start lg:px-8"
    >
      <div className="flex-1 space-y-4">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400/80">Proof-of-work portfolio</p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
          IT Professional,{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Full Stack Dev & Security
          </span>
        </h1>
        <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
          I build secure, observable web systems and document real-world attack labs. This portfolio highlights{" "}
          <span className="font-semibold text-cyan-300">hands-on demos</span> and{" "}
          <span className="font-semibold text-emerald-300">security write-ups</span>.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            onClick={handleClick}
            className="h-9 rounded-full bg-cyan-500 px-4 text-xs font-semibold text-black hover:bg-cyan-400"
          >
            View Proof of Work
          </Button>
          <span className="text-xs text-zinc-500">Scrolls to projects grid</span>
        </div>
      </div>
      <div className="flex-1 w-full max-w-md">
        <Terminal lines={SKILL_LINES} />
      </div>
    </section>
  );
}

