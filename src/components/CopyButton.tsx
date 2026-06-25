"use client";

import { useState } from "react";

interface Props {
  code: string;
}

export default function CopyButton({ code }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
        copied
          ? "bg-emerald-500/20 text-emerald-400"
          : "bg-white/10 text-zinc-400 hover:bg-white/15 hover:text-zinc-200"
      }`}
    >
      {copied ? (
        <>
          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copié
        </>
      ) : (
        <>
          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
            <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 11V3h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Copier
        </>
      )}
    </button>
  );
}
