import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getExercise, getExercises } from "@/lib/content";
import MDXContent from "@/components/MDXContent";
import RevealSolution from "@/components/RevealSolution";

interface Props {
  params: Promise<{ slug: string }>;
}

const levelColors: Record<string, string> = {
  débutant: "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/25",
  intermédiaire: "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/25",
  avancé: "bg-red-500/15 text-red-400 ring-1 ring-red-500/25",
};

export async function generateStaticParams() {
  return getExercises().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = getExercise(slug);
  if (!data) return {};
  return { title: `${data.meta.title} — Vibe Course` };
}

export default async function ExercicePage({ params }: Props) {
  const { slug } = await params;
  const data = getExercise(slug);
  if (!data) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/exercices"
        className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8 inline-block"
      >
        ← Tous les exercices
      </Link>

      <div className="flex items-start justify-between gap-4 mb-3">
        <h1 className="text-3xl font-bold text-white">{data.meta.title}</h1>
        {data.meta.level && (
          <span className={`flex-none text-xs font-medium px-2.5 py-1 rounded-full mt-1 ${levelColors[data.meta.level] ?? "bg-zinc-800 text-zinc-400"}`}>
            {data.meta.level}
          </span>
        )}
      </div>

      {data.meta.description && (
        <p className="text-zinc-400 mb-10">{data.meta.description}</p>
      )}

      <MDXContent source={data.statement} />

      {data.solution && (
        <RevealSolution>
          <MDXRemote source={data.solution} />
        </RevealSolution>
      )}
    </div>
  );
}
