import Link from "next/link";
import { getExercises } from "@/lib/content";

export const metadata = {
  title: "Exercices — Vibe Course",
};

const levelColors: Record<string, string> = {
  débutant: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:ring-emerald-500/25",
  intermédiaire: "bg-amber-50 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-400 dark:ring-amber-500/25",
  avancé: "bg-red-50 text-red-700 ring-1 ring-red-200 dark:bg-red-500/15 dark:text-red-400 dark:ring-red-500/25",
};

export default function ExercicesPage() {
  const exercises = getExercises();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-stone-900 mb-2 dark:text-white">Exercices pratiques</h1>
      <p className="text-stone-500 mb-12 dark:text-zinc-400">
        Mets en pratique ce que tu as appris avec l'IA de ton choix.
      </p>

      {exercises.length === 0 ? (
        <p className="text-stone-400 italic">Les exercices arrivent bientôt.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {exercises.map((ex) => (
            <Link
              key={ex.slug}
              href={`/exercices/${ex.slug}`}
              className="group flex items-start justify-between gap-4 rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm hover:shadow-md hover:border-indigo-200 hover:bg-indigo-50/30 transition-all dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/[0.08] dark:hover:border-indigo-500/30"
            >
              <div>
                <h2 className="font-semibold text-stone-800 group-hover:text-indigo-700 transition-colors dark:text-zinc-100 dark:group-hover:text-white">
                  {ex.title}
                </h2>
                {ex.description && (
                  <p className="text-sm text-stone-500 mt-1">{ex.description}</p>
                )}
              </div>
              {ex.level && (
                <span className={`flex-none text-xs font-medium px-2.5 py-1 rounded-full ${levelColors[ex.level] ?? "bg-stone-100 text-stone-600 ring-1 ring-stone-200"}`}>
                  {ex.level}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
