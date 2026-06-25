import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight text-zinc-900">
          Vibe Course
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-600">
          <Link href="/modules" className="hover:text-zinc-900 transition-colors">
            Modules
          </Link>
          <Link href="/exercices" className="hover:text-zinc-900 transition-colors">
            Exercices
          </Link>
        </nav>
      </div>
    </header>
  );
}
