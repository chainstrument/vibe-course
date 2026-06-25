import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight text-white">
          Vibe Course
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/modules" className="hover:text-white transition-colors">
            Modules
          </Link>
          <Link href="/exercices" className="hover:text-white transition-colors">
            Exercices
          </Link>
          <Link href="/a-propos" className="hover:text-white transition-colors">
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}
