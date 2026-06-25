import { notFound } from "next/navigation";
import Link from "next/link";
import { getContent, getModules } from "@/lib/content";
import MDXContent from "@/components/MDXContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getModules().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = getContent("modules", slug);
  if (!data) return {};
  return { title: `${data.meta.title} — Vibe Course` };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const data = getContent("modules", slug);
  if (!data) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/modules"
        className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors mb-8 inline-block"
      >
        ← Tous les modules
      </Link>
      <h1 className="text-3xl font-bold text-zinc-900 mb-3">{data.meta.title}</h1>
      {data.meta.description && (
        <p className="text-zinc-500 mb-10">{data.meta.description}</p>
      )}
      <MDXContent source={data.source} />
    </div>
  );
}
