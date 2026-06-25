interface Props {
  type?: "note" | "tip" | "warning" | "danger";
  children: React.ReactNode;
}

const config = {
  note: {
    icon: "📝",
    label: "Note",
    classes: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200",
    labelClass: "text-blue-600 dark:text-blue-400",
  },
  tip: {
    icon: "💡",
    label: "Astuce",
    classes: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",
    labelClass: "text-emerald-600 dark:text-emerald-400",
  },
  warning: {
    icon: "⚠️",
    label: "Attention",
    classes: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200",
    labelClass: "text-amber-600 dark:text-amber-400",
  },
  danger: {
    icon: "🚫",
    label: "Important",
    classes: "border-red-200 bg-red-50 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200",
    labelClass: "text-red-600 dark:text-red-400",
  },
};

export default function Callout({ type = "note", children }: Props) {
  const c = config[type];
  return (
    <div className={`my-6 rounded-xl border px-5 py-4 ${c.classes}`}>
      <p className={`mb-2 text-xs font-semibold uppercase tracking-wider ${c.labelClass}`}>
        {c.icon} {c.label}
      </p>
      <div className="text-sm leading-relaxed [&>p]:mb-0">{children}</div>
    </div>
  );
}
