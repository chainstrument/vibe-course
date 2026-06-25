import Link from "next/link";
import { getModules, getExercises } from "@/lib/content";
import ProgressStats from "@/components/ProgressStats";

export default function HomePage() {
  const modules = getModules();
  const exercises = getExercises();

  return (
    <div className="relative">
      {/* Glow de fond hero */}
      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
        <div className="h-[600px] w-[900px] rounded-full bg-indigo-500/10 blur-[120px] -translate-y-1/4 dark:bg-indigo-600/20" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-4 py-1.5 text-xs text-zinc-500 mb-8 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            7 modules · 7 exercices · 100% gratuit
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-b from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-400">
              Apprends à builder
              <br />
              avec l'IA
            </span>
          </h1>

          <p className="mt-6 text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed dark:text-zinc-400">
            Le vibecoding a ouvert le développement logiciel à tout le monde.
            Cette plateforme t'apprend à construire l'application que tu veux —
            sans jamais avoir écrit une ligne de code.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/modules"
              className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-90 transition-all"
            >
              Commencer les modules →
            </Link>
            <Link
              href="/exercices"
              className="rounded-lg border border-zinc-100 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 transition-all dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              Voir les exercices
            </Link>
          </div>
        </section>

        {/* Ce qu'on apprend */}
        <section className="py-16 border-t border-zinc-100 dark:border-white/10">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-10 text-center dark:text-white">
            Ce que tu vas apprendre
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Penser une app",
                desc: "Avant de demander quoi que ce soit à une IA, apprends à structurer ton idée en fonctionnalités concrètes.",
              },
              {
                title: "Prompter efficacement",
                desc: "La qualité de ce que tu obtiens dépend de la qualité de ce que tu demandes. On t'apprend la méthode.",
              },
              {
                title: "Itérer avec l'IA",
                desc: "Le vibecoding, c'est une conversation. On t'apprend à corriger, affiner, et faire avancer ton projet.",
              },
              {
                title: "Déployer ton app",
                desc: "Une app qui reste sur ton ordi n'existe pas. On t'apprend à la mettre en ligne gratuitement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/[0.07] dark:shadow-none"
              >
                <h3 className="font-semibold text-zinc-900 mb-2 dark:text-white">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-16 border-t border-zinc-100 dark:border-white/10">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-10 text-center dark:text-white">
            Comment ça marche ?
          </h2>
          <div className="flex flex-col gap-6 max-w-xl mx-auto">
            {[
              { step: "1", text: "Lis un module théorique sur la plateforme" },
              { step: "2", text: "Fais l'exercice avec l'IA de ton choix (Claude, ChatGPT, Cursor...)" },
              { step: "3", text: "Reviens consulter le corrigé et compare ton approche" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="flex-none w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm flex items-center justify-center ring-1 ring-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-400 dark:ring-indigo-500/30">
                  {item.step}
                </span>
                <p className="text-zinc-600 pt-1 dark:text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Progression */}
        <ProgressStats totalModules={modules.length} totalExercises={exercises.length} />

        {/* CTA final */}
        <section className="py-16 border-t border-zinc-100 dark:border-white/10 text-center">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4 dark:text-white">
            Prêt à commencer ?
          </h2>
          <p className="text-zinc-500 mb-8 dark:text-zinc-400">
            Aucune connaissance en code requise. Juste une envie de builder.
          </p>
          <Link
            href="/modules"
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:opacity-90 transition-all"
          >
            Voir les modules →
          </Link>
        </section>
      </div>
    </div>
  );
}
