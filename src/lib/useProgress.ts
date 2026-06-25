"use client";

import { useEffect, useState } from "react";

interface Progress {
  modules: string[];
  exercises: string[];
}

const STORAGE_KEY = "vibe-course:progress";

function load(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { modules: [], exercises: [] };
}

function save(progress: Progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({ modules: [], exercises: [] });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProgress(load());
    setMounted(true);
  }, []);

  function toggle(type: "modules" | "exercises", slug: string) {
    setProgress((prev) => {
      const list = prev[type];
      const next = list.includes(slug)
        ? list.filter((s) => s !== slug)
        : [...list, slug];
      const updated = { ...prev, [type]: next };
      save(updated);
      return updated;
    });
  }

  function isDone(type: "modules" | "exercises", slug: string) {
    return progress[type].includes(slug);
  }

  return { progress, toggle, isDone, mounted };
}
