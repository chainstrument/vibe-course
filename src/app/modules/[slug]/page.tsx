import { notFound } from "next/navigation";
import { getContent, getModules } from "@/lib/content";
import { readingTime } from "@/lib/readingTime";
import MDXContent from "@/components/MDXContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrevNext from "@/components/PrevNext";
import TableOfContents from "@/components/TableOfContents";
import ProgressCheckbox from "@/components/ProgressCheckbox";
import ShareButton from "@/components/ShareButton";

const siteUrl = "https://vibe-course.vercel.app";

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

  const modules = getModules();
  const idx = modules.findIndex((m) => m.slug === slug);
  const prev = idx > 0 ? modules[idx - 1] : null;
  const next = idx < modules.length - 1 ? modules[idx + 1] : null;

  const time = readingTime(data.source);
  const pageUrl = `${siteUrl}/modules/${slug}`;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 flex gap-16 items-start">
      <div className="flex-1 min-w-0">
        <Breadcrumbs
          crumbs={[
            { label: "Modules", href: "/modules" },
            { label: data.meta.title },
          ]}
        />
        <h1 className="text-3xl font-bold text-white mb-3">{data.meta.title}</h1>
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            {data.meta.description && <span>{data.meta.description}</span>}
            <span className="text-zinc-700">·</span>
            <span>{time}</span>
          </div>
          <ShareButton title={data.meta.title} url={pageUrl} />
        </div>
        <MDXContent source={data.source} />
        <div className="mt-10 pt-8 border-t border-white/10">
          <ProgressCheckbox type="modules" slug={slug} />
        </div>
        <PrevNext prev={prev} next={next} basePath="/modules" />
      </div>
      <TableOfContents source={data.source} />
    </div>
  );
}
