import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Apprends à builder
          <br />
          <span className="text-indigo-600">avec l'IA</span>
        </h1>
        <p className="mt-6 text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          Le vibecoding a ouvert le développement logiciel à tout le monde.
          Cette plateforme t'apprend à construire l'application que tu veux —
          sans jamais avoir écrit une ligne de code.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/modules"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
          >
            Commencer les modules →
          </Link>
          <Link
            href="/exercices"
            className="rounded-lg border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            Voir les exercices
          </Link>
        </div>
      </section>

      {/* Ce qu'on apprend */}
      <section className="py-16 border-t border-zinc-100">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-10 text-center">
          Ce que tu vas apprendre
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
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
              className="rounded-xl border border-zinc-100 bg-zinc-50 p-6"
            >
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 border-t border-zinc-100">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-10 text-center">
          Comment ça marche ?
        </h2>
        <div className="flex flex-col gap-6 max-w-xl mx-auto">
          {[
            { step: "1", text: "Lis un module théorique sur la plateforme" },
            {
              step: "2",
              text: "Fais l'exercice avec l'IA de ton choix (Claude, ChatGPT, Cursor...)",
            },
            {
              step: "3",
              text: "Reviens consulter le corrigé et compare ton approche",
            },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <span className="flex-none w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold text-sm flex items-center justify-center">
                {item.step}
              </span>
              <p className="text-zinc-600 pt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 border-t border-zinc-100 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
          Prêt à commencer ?
        </h2>
        <p className="text-zinc-500 mb-8">
          Aucune connaissance en code requise. Juste une envie de builder.
        </p>
        <Link
          href="/modules"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
        >
          Voir les modules →
        </Link>
      </section>
    </div>
  );
}
