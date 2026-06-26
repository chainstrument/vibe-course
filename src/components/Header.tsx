import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/80 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight text-stone-900 dark:text-white">
          Vibe Course
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm text-stone-600 dark:text-zinc-400">
            <Link href="/modules" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Modules
            </Link>
            <Link href="/exercices" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Exercices
            </Link>
            <Link href="/a-propos" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              À propos
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
