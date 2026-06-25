import Link from "next/link";
import { ContentMeta } from "@/lib/content";

interface Props {
  prev: ContentMeta | null;
  next: ContentMeta | null;
  basePath: string;
}

export default function PrevNext({ prev, next, basePath }: Props) {
  if (!prev && !next) return null;

  return (
    <div className="mt-16 pt-8 border-t border-zinc-100 grid grid-cols-2 gap-4 dark:border-white/10">
      <div>
        {prev && (
          <Link
            href={`${basePath}/${prev.slug}`}
            className="group flex flex-col gap-1 rounded-xl border border-zinc-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/[0.08] dark:hover:border-indigo-500/30"
          >
            <span className="text-xs text-zinc-400 dark:text-zinc-500">← Précédent</span>
            <span className="text-sm font-medium text-zinc-700 group-hover:text-indigo-700 transition-colors line-clamp-2 dark:text-zinc-200 dark:group-hover:text-white">
              {prev.title}
            </span>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            href={`${basePath}/${next.slug}`}
            className="group flex flex-col gap-1 rounded-xl border border-zinc-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-right dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/[0.08] dark:hover:border-indigo-500/30"
          >
            <span className="text-xs text-zinc-400 dark:text-zinc-500">Suivant →</span>
            <span className="text-sm font-medium text-zinc-700 group-hover:text-indigo-700 transition-colors line-clamp-2 dark:text-zinc-200 dark:group-hover:text-white">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
