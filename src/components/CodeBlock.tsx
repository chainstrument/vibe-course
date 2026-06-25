import CopyButton from "@/components/CopyButton";

type Props = React.ComponentPropsWithoutRef<"pre"> & { raw?: string };

export default function CodeBlock({ children, raw, ...props }: Props) {
  const language = (props as Record<string, unknown>)["data-language"] as string | undefined;

  return (
    <div className="relative group my-6">
      {language && (
        <span className="absolute left-4 top-3 text-xs text-zinc-500 font-mono select-none">
          {language}
        </span>
      )}
      {raw && <CopyButton code={raw} />}
      <pre
        {...props}
        className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-900 px-5 py-5 pt-8 text-sm leading-relaxed"
      >
        {children}
      </pre>
    </div>
  );
}
