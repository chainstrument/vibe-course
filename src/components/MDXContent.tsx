import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  source: string;
}

export default function MDXContent({ source }: Props) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-white prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-code:text-indigo-300 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-blockquote:border-l-indigo-500 prose-blockquote:text-zinc-400 prose-hr:border-white/10 prose-table:text-zinc-300 prose-th:text-white prose-thead:border-white/10 prose-tbody:divide-white/10">
      <MDXRemote source={source} />
    </div>
  );
}
