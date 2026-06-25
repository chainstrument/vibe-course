import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Vibe Course",
  description: "Le manifeste de Vibe Course : pourquoi le vibecoding change tout, et ce qu'on t'apprend ici.",
};

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-4">
          Manifeste
        </p>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
          Pourquoi Vibe Course existe
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
          Une plateforme d'apprentissage du vibecoding. Pas pour apprendre à coder —
          pour apprendre à <em className="text-zinc-700 dark:text-zinc-200 not-italic font-medium">builder</em>.
        </p>
      </div>

      {/* Manifeste */}
      <div className="space-y-12 text-zinc-600 dark:text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Le contexte</h2>
          <p>
            Pendant des décennies, construire un logiciel nécessitait des années d'apprentissage.
            Python, JavaScript, SQL, les frameworks, les outils, les conventions — une montagne
            que la majorité des gens n'avaient ni le temps ni l'envie de gravir.
          </p>
          <p className="mt-4">
            Résultat : des idées qui restaient dans des carnets. Des problèmes qu'on résolvait
            avec Excel parce qu'on ne savait pas faire autrement. Des produits qu'on imaginait
            mais qu'on ne construisait jamais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Ce qui a changé</h2>
          <p>
            Les modèles de langage ont atteint un niveau où ils peuvent générer du code
            fonctionnel, corriger des bugs, expliquer des concepts techniques et construire
            des applications entières — si on sait leur parler.
          </p>
          <p className="mt-4">
            Ce "si on sait leur parler" est clé. L'IA ne remplace pas la capacité à penser
            un produit, à décomposer un problème, à évaluer un résultat. Elle remplace
            la nécessité de savoir coder pour exécuter ces idées.
          </p>
          <p className="mt-4">
            C'est ce qu'Andrej Karpathy a appelé le <strong className="text-zinc-900 dark:text-white">vibecoding</strong> en 2025 :
            construire en collaborant avec l'IA, en faisant confiance au processus, en itérant.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Ce qu'on croit</h2>
          <div className="space-y-4">
            {[
              "Builder est une compétence. Coder en est une autre. Les deux ne sont pas liées.",
              "N'importe qui avec une idée et une méthode peut construire quelque chose qui fonctionne.",
              "Apprendre à prompter efficacement est plus utile aujourd'hui qu'apprendre à coder depuis zéro.",
              "L'IA est un outil de direction, pas d'abdication. Tu restes aux commandes.",
              "Le meilleur moment pour construire ce que tu veux, c'est maintenant.",
            ].map((belief, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
                <p>{belief}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Ce que Vibe Course n'est pas</h2>
          <p>
            Ce n'est pas un outil no-code avec des blocs à glisser-déposer. Ce n'est pas
            un générateur automatique d'applications. Ce n'est pas une promesse que tu
            n'auras jamais à comprendre ce que tu construis.
          </p>
          <p className="mt-4">
            C'est une plateforme pédagogique. On t'apprend à penser, à structurer, à
            communiquer avec une IA pour construire ce que tu veux — en comprenant assez
            pour diriger, itérer et corriger.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Comment c'est construit</h2>
          <p>
            Vibe Course est elle-même un exemple de vibecoding. Elle a été construite
            avec Next.js, Tailwind CSS et Claude Code — sans équipe, sans infrastructure
            complexe, sans mois de développement.
          </p>
          <p className="mt-4 text-zinc-400">
            Stack : Next.js · Tailwind CSS · MDX · Vercel
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-16 pt-10 border-t border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/modules"
          className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all"
        >
          Commencer les modules →
        </Link>
        <Link href="/exercices" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
          Voir les exercices
        </Link>
      </div>
    </div>
  );
}
