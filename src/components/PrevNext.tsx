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
    <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
      <div>
        {prev && (
          <Link
            href={`${basePath}/${prev.slug}`}
            className="group flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all"
          >
            <span className="text-xs text-zinc-500">← Précédent</span>
            <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors line-clamp-2">
              {prev.title}
            </span>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            href={`${basePath}/${next.slug}`}
            className="group flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all text-right"
          >
            <span className="text-xs text-zinc-500">Suivant →</span>
            <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors line-clamp-2">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
