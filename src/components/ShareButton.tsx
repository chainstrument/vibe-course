"use client";

import { useState } from "react";

interface Props {
  title: string;
  url: string;
}

export default function ShareButton({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${title}" — sur Vibe Course`)}&url=${encodeURIComponent(url)}`;

  async function handleCopyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:bg-white/10 hover:text-zinc-200 transition-all"
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Partager
      </a>
      <button
        onClick={handleCopyLink}
        className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-all ${
          copied
            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200"
        }`}
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
          <path d="M6.5 9.5l-2 2a2.121 2.121 0 003 3l3-3a2.121 2.121 0 000-3l-.5-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9.5 6.5l2-2a2.121 2.121 0 00-3-3l-3 3a2.121 2.121 0 000 3l.5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {copied ? "Lien copié !" : "Copier le lien"}
      </button>
    </div>
  );
}
