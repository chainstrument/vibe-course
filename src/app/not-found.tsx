import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-8xl font-bold bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent mb-6 leading-none">
        404
      </p>
      <h1 className="text-2xl font-semibold text-white mb-3">
        Page introuvable
      </h1>
      <p className="text-zinc-400 mb-10 max-w-sm">
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
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          Voir les modules
        </Link>
      </div>
    </div>
  );
}
