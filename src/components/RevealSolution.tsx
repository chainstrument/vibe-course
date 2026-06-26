"use client";

import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function RevealSolution({ children }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mt-12">
      <div className="border-t border-stone-200 pt-10 dark:border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-white">Corrigé</h2>
          <button
            onClick={() => setRevealed((v) => !v)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {revealed ? "Masquer le corrigé" : "Voir le corrigé →"}
          </button>
        </div>

        {!revealed ? (
          <div className="rounded-xl border border-dashed border-stone-300 bg-stone-100/50 p-8 text-center text-stone-400 text-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-500">
            Tente l'exercice avec ton IA avant de regarder le corrigé.
          </div>
        ) : (
          <div className="prose prose-stone max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-code:bg-stone-100 dark:prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-pre:!p-0 prose-pre:!bg-transparent prose-pre:!border-0">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
