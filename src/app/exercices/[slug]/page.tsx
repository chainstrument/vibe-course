import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getExercise, getExercises } from "@/lib/content";
import { readingTime } from "@/lib/readingTime";
import MDXContent from "@/components/MDXContent";
import RevealSolution from "@/components/RevealSolution";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrevNext from "@/components/PrevNext";
import ProgressCheckbox from "@/components/ProgressCheckbox";
import ShareButton from "@/components/ShareButton";

const siteUrl = "https://vibe-course.vercel.app";

interface Props {
  params: Promise<{ slug: string }>;
}

const levelColors: Record<string, string> = {
  débutant: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 dark:ring-1 dark:ring-emerald-500/25",
  intermédiaire: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400 dark:ring-1 dark:ring-amber-500/25",
  avancé: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400 dark:ring-1 dark:ring-red-500/25",
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

  const time = readingTime(data.statement);
  const pageUrl = `${siteUrl}/exercices/${slug}`;
  const exercises = getExercises();
  const idx = exercises.findIndex((e) => e.slug === slug);
  const prev = idx > 0 ? exercises[idx - 1] : null;
  const next = idx < exercises.length - 1 ? exercises[idx + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Breadcrumbs
        crumbs={[
          { label: "Exercices", href: "/exercices" },
          { label: data.meta.title },
        ]}
      />

      <div className="flex items-start justify-between gap-4 mb-3">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{data.meta.title}</h1>
        {data.meta.level && (
          <span className={`flex-none text-xs font-medium px-2.5 py-1 rounded-full mt-1 ${levelColors[data.meta.level] ?? "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"}`}>
            {data.meta.level}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3 text-sm text-zinc-500">
          {data.meta.description && <span>{data.meta.description}</span>}
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <span>{time}</span>
        </div>
        <ShareButton title={data.meta.title} url={pageUrl} />
      </div>

      <MDXContent source={data.statement} />

      {data.solution && (
        <RevealSolution>
          <MDXRemote source={data.solution} />
        </RevealSolution>
      )}

      <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-white/10">
        <ProgressCheckbox type="exercises" slug={slug} label="Marquer comme fait" />
      </div>
      <PrevNext prev={prev} next={next} basePath="/exercices" />
    </div>
  );
}
