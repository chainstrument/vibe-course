import Link from "next/link";
import { getModules } from "@/lib/content";

export const metadata = {
  title: "Modules — Vibe Course",
};

export default function ModulesPage() {
  const modules = getModules();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 mb-2 dark:text-white">Modules théoriques</h1>
      <p className="text-zinc-500 mb-12 dark:text-zinc-400">
        Les concepts essentiels du vibecoding, expliqués sans code.
      </p>

      {modules.length === 0 ? (
        <p className="text-zinc-400 italic">Les modules arrivent bientôt.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {modules.map((mod, i) => (
            <Link
              key={mod.slug}
              href={`/modules/${mod.slug}`}
              className="group flex items-start gap-5 rounded-xl border border-zinc-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-indigo-200 hover:bg-indigo-50/30 transition-all dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/[0.08] dark:hover:border-indigo-500/30"
            >
              <span className="flex-none w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-400 text-sm font-semibold flex items-center justify-center group-hover:border-indigo-200 group-hover:text-indigo-500 group-hover:bg-indigo-50 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:group-hover:bg-indigo-500/20 dark:group-hover:text-indigo-400">
                {i + 1}
              </span>
              <div>
                <h2 className="font-semibold text-zinc-800 group-hover:text-indigo-700 transition-colors dark:text-zinc-100 dark:group-hover:text-white">
                  {mod.title}
                </h2>
                {mod.description && (
                  <p className="text-sm text-zinc-500 mt-1">{mod.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
