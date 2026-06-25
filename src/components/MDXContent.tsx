import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  source: string;
}

export default function MDXContent({ source }: Props) {
  return (
    <div className="prose prose-zinc max-w-none prose-headings:font-semibold prose-a:text-indigo-600 prose-code:text-indigo-600 prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal">
      <MDXRemote source={source} />
    </div>
  );
}
