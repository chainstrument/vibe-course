import CopyButton from "@/components/CopyButton";

type Props = React.ComponentPropsWithoutRef<"pre"> & { raw?: string };

export default function CodeBlock({ children, raw, ...props }: Props) {
  const language = (props as Record<string, unknown>)["data-language"] as string | undefined;

  return (
    <div className="relative group my-6">
      {language && (
        <span className="absolute left-4 top-3 text-xs text-zinc-400 font-mono select-none dark:text-zinc-500">
          {language}
        </span>
      )}
      {raw && <CopyButton code={raw} />}
      <pre
        {...props}
        className="overflow-x-auto rounded-xl border border-zinc-100 bg-zinc-50 px-5 py-5 pt-8 text-sm leading-relaxed shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:shadow-none"
      >
        {children}
      </pre>
    </div>
  );
}
