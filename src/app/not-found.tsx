import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-8xl font-bold bg-gradient-to-b from-zinc-900 to-zinc-400 bg-clip-text text-transparent dark:from-white dark:to-zinc-600 mb-6 leading-none">
        404
      </p>
      <h1 className="text-2xl font-semibold text-zinc-900 mb-3 dark:text-white">
        Page introuvable
      </h1>
      <p className="text-zinc-500 mb-10 max-w-sm dark:text-zinc-400">
        Cette page n'existe pas ou a été déplacée. Retourne à l'accueil pour
        continuer ton parcours.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all"
        >
          Retour à l'accueil
        </Link>
        <Link
          href="/modules"
          className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors dark:text-zinc-400 dark:hover:text-zinc-300"
        >
          Voir les modules
        </Link>
      </div>
    </div>
  );
}
