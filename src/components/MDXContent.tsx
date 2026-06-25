import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeRawCode } from "@/lib/rehypeRawCode";
import CodeBlock from "@/components/CodeBlock";
import Callout from "@/components/Callout";

const options = {
  mdxOptions: {
    rehypePlugins: [
      rehypeRawCode,
      [
        rehypePrettyCode,
        {
          theme: "vesper",
          keepBackground: false,
          onVisitLine(node: { children: { type: string; value: string }[] }) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
    ],
  },
};

const components = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: (props: any) => <CodeBlock {...props} />,
  Callout,
};

interface Props {
  source: string;
}

export default function MDXContent({ source }: Props) {
  return (
    <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:text-zinc-900 dark:prose-headings:text-white prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-li:text-zinc-600 dark:prose-li:text-zinc-300 prose-strong:text-zinc-900 dark:prose-strong:text-white prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-code:text-indigo-600 dark:prose-code:text-indigo-300 prose-code:bg-zinc-100 dark:prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-pre:!p-0 prose-pre:!bg-transparent prose-pre:!border-0 prose-blockquote:border-l-indigo-500 prose-blockquote:text-zinc-500 dark:prose-blockquote:text-zinc-400 prose-hr:border-zinc-200 dark:prose-hr:border-white/10 prose-table:text-zinc-600 dark:prose-table:text-zinc-300 prose-th:text-zinc-900 dark:prose-th:text-white prose-thead:border-zinc-200 dark:prose-thead:border-white/10 prose-tbody:divide-zinc-200 dark:prose-tbody:divide-white/10">
      <MDXRemote source={source} options={options as Parameters<typeof MDXRemote>[0]["options"]} components={components} />
    </div>
  );
}
