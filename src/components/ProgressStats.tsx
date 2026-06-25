"use client";

import { useProgress } from "@/lib/useProgress";
import Link from "next/link";

interface Props {
  totalModules: number;
  totalExercises: number;
}

export default function ProgressStats({ totalModules, totalExercises }: Props) {
  const { progress, mounted } = useProgress();

  if (!mounted) return null;

  const doneModules = progress.modules.length;
  const doneExercises = progress.exercises.length;

  if (doneModules === 0 && doneExercises === 0) return null;

  const modulePct = Math.round((doneModules / totalModules) * 100);
  const exercisePct = Math.round((doneExercises / totalExercises) * 100);

  return (
    <section className="py-10 border-t border-zinc-100 dark:border-white/10">
      <h2 className="text-lg font-semibold text-zinc-900 mb-6 text-center dark:text-white">
        Ta progression
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        <Link href="/modules" className="group rounded-xl border border-zinc-100 bg-white p-5 shadow-sm hover:shadow-md transition-all dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/[0.08]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Modules</span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-white">{doneModules}/{totalModules}</span>
          </div>
          <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden dark:bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
              style={{ width: `${modulePct}%` }}
            />
          </div>
        </Link>
        <Link href="/exercices" className="group rounded-xl border border-zinc-100 bg-white p-5 shadow-sm hover:shadow-md transition-all dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/[0.08]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Exercices</span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-white">{doneExercises}/{totalExercises}</span>
          </div>
          <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden dark:bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{ width: `${exercisePct}%` }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
