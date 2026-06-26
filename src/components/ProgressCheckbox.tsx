"use client";

import { useProgress } from "@/lib/useProgress";

interface Props {
  type: "modules" | "exercises";
  slug: string;
  label?: string;
}

export default function ProgressCheckbox({ type, slug, label }: Props) {
  const { isDone, toggle, mounted } = useProgress();

  if (!mounted) return null;

  const done = isDone(type, slug);

  return (
    <button
      onClick={() => toggle(type, slug)}
      className={`flex items-center gap-2.5 text-sm font-medium transition-colors ${
        done ? "text-emerald-600 dark:text-emerald-400" : "text-stone-400 hover:text-stone-600 dark:text-zinc-500 dark:hover:text-zinc-300"
      }`}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${
          done
            ? "border-emerald-500 bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
            : "border-stone-300 bg-transparent dark:border-zinc-700"
        }`}
      >
        {done && (
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label ?? (done ? "Marqué comme lu" : "Marquer comme lu")}
    </button>
  );
}
