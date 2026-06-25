"use client";

import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function RevealSolution({ children }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mt-12">
      <div className="border-t border-white/10 pt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Corrigé</h2>
          <button
            onClick={() => setRevealed((v) => !v)}
            className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {revealed ? "Masquer le corrigé" : "Voir le corrigé →"}
          </button>
        </div>

        {!revealed ? (
          <div className="rounded-xl border border-dashed border-white/10 bg-white/5 p-8 text-center text-zinc-500 text-sm">
            Tente l'exercice avec ton IA avant de regarder le corrigé.
          </div>
        ) : (
          <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-white prose-a:text-indigo-400 prose-code:text-indigo-300 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-blockquote:border-l-indigo-500 prose-blockquote:text-zinc-400 prose-hr:border-white/10">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
