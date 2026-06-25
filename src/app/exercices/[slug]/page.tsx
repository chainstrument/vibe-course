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
  débutant: "bg-green-100 text-green-700",
  intermédiaire: "bg-yellow-100 text-yellow-700",
  avancé: "bg-red-100 text-red-700",
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
        className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors mb-8 inline-block"
      >
        ← Tous les exercices
      </Link>

      <div className="flex items-start justify-between gap-4 mb-3">
        <h1 className="text-3xl font-bold text-zinc-900">{data.meta.title}</h1>
        {data.meta.level && (
          <span
            className={`flex-none text-xs font-medium px-2.5 py-1 rounded-full mt-1 ${levelColors[data.meta.level] ?? "bg-zinc-100 text-zinc-600"}`}
          >
            {data.meta.level}
          </span>
        )}
      </div>

      {data.meta.description && (
        <p className="text-zinc-500 mb-10">{data.meta.description}</p>
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
