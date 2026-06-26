"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function parseHeadings(source: string): Heading[] {
  const lines = source.split("\n");
  const headings: Heading[] = [];
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ id, text, level: match[1].length });
    }
  }
  return headings;
}

interface Props {
  source: string;
}

export default function TableOfContents({ source }: Props) {
  const headings = parseHeadings(source);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px" }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav className="hidden xl:block sticky top-24 self-start w-52 shrink-0">
      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3 dark:text-zinc-500">
        Sur cette page
      </p>
      <ul className="space-y-1.5">
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ paddingLeft: level === 3 ? "0.75rem" : "0" }}>
            <a
              href={`#${id}`}
              className={`block text-sm transition-colors leading-snug ${
                activeId === id
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-stone-400 hover:text-stone-700 dark:text-zinc-500 dark:hover:text-zinc-300"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
