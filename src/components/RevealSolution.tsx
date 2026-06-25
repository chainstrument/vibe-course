"use client";

import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function RevealSolution({ children }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mt-12">
      <div className="border-t border-zinc-100 pt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-zinc-900">Corrigé</h2>
          <button
            onClick={() => setRevealed((v) => !v)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            {revealed ? "Masquer le corrigé" : "Voir le corrigé →"}
          </button>
        </div>

        {!revealed ? (
          <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-8 text-center text-zinc-400 text-sm">
            Tente l'exercice avec ton IA avant de regarder le corrigé.
          </div>
        ) : (
          <div className="prose prose-zinc max-w-none prose-headings:font-semibold prose-a:text-indigo-600 prose-code:text-indigo-600 prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
