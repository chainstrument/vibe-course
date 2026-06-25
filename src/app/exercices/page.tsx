import Link from "next/link";
import { getExercises } from "@/lib/content";

export const metadata = {
  title: "Exercices — Vibe Course",
};

const levelColors: Record<string, string> = {
  débutant: "bg-green-100 text-green-700",
  intermédiaire: "bg-yellow-100 text-yellow-700",
  avancé: "bg-red-100 text-red-700",
};

export default function ExercicesPage() {
  const exercises = getExercises();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 mb-2">Exercices pratiques</h1>
      <p className="text-zinc-500 mb-12">
        Mets en pratique ce que tu as appris avec l'IA de ton choix.
      </p>

      {exercises.length === 0 ? (
        <p className="text-zinc-400 italic">Les exercices arrivent bientôt.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {exercises.map((ex) => (
            <Link
              key={ex.slug}
              href={`/exercices/${ex.slug}`}
              className="group flex items-start justify-between gap-4 rounded-xl border border-zinc-100 bg-zinc-50 p-6 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
            >
              <div>
                <h2 className="font-semibold text-zinc-900 group-hover:text-indigo-700 transition-colors">
                  {ex.title}
                </h2>
                {ex.description && (
                  <p className="text-sm text-zinc-500 mt-1">{ex.description}</p>
                )}
              </div>
              {ex.level && (
                <span
                  className={`flex-none text-xs font-medium px-2.5 py-1 rounded-full ${levelColors[ex.level] ?? "bg-zinc-100 text-zinc-600"}`}
                >
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
