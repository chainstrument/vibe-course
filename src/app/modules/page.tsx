import Link from "next/link";
import { getModules } from "@/lib/content";

export const metadata = {
  title: "Modules — Vibe Course",
};

export default function ModulesPage() {
  const modules = getModules();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 mb-2">Modules théoriques</h1>
      <p className="text-zinc-500 mb-12">
        Les concepts essentiels du vibecoding, expliqués sans code.
      </p>

      {modules.length === 0 ? (
        <p className="text-zinc-400 italic">Les modules arrivent bientôt.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {modules.map((mod, i) => (
            <Link
              key={mod.slug}
              href={`/modules/${mod.slug}`}
              className="group flex items-start gap-5 rounded-xl border border-zinc-100 bg-zinc-50 p-6 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
            >
              <span className="flex-none w-8 h-8 rounded-full bg-white border border-zinc-200 text-zinc-400 text-sm font-semibold flex items-center justify-center group-hover:border-indigo-300 group-hover:text-indigo-500 transition-colors">
                {i + 1}
              </span>
              <div>
                <h2 className="font-semibold text-zinc-900 group-hover:text-indigo-700 transition-colors">
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
