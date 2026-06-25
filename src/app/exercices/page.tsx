import Link from "next/link";
import { getExercises } from "@/lib/content";

export const metadata = {
  title: "Exercices — Vibe Course",
};

const levelColors: Record<string, string> = {
  débutant: "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/25",
  intermédiaire: "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/25",
  avancé: "bg-red-500/15 text-red-400 ring-1 ring-red-500/25",
};

export default function ExercicesPage() {
  const exercises = getExercises();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Exercices pratiques</h1>
      <p className="text-zinc-400 mb-12">
        Mets en pratique ce que tu as appris avec l'IA de ton choix.
      </p>

      {exercises.length === 0 ? (
        <p className="text-zinc-500 italic">Les exercices arrivent bientôt.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {exercises.map((ex) => (
            <Link
              key={ex.slug}
              href={`/exercices/${ex.slug}`}
              className="group flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all"
            >
              <div>
                <h2 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {ex.title}
                </h2>
                {ex.description && (
                  <p className="text-sm text-zinc-500 mt-1">{ex.description}</p>
                )}
              </div>
              {ex.level && (
                <span className={`flex-none text-xs font-medium px-2.5 py-1 rounded-full ${levelColors[ex.level] ?? "bg-zinc-800 text-zinc-400"}`}>
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
