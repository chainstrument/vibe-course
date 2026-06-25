interface Props {
  type?: "note" | "tip" | "warning" | "danger";
  children: React.ReactNode;
}

const config = {
  note: {
    icon: "📝",
    label: "Note",
    classes: "border-blue-500/30 bg-blue-500/10 text-blue-200",
    labelClass: "text-blue-400",
  },
  tip: {
    icon: "💡",
    label: "Astuce",
    classes: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
    labelClass: "text-emerald-400",
  },
  warning: {
    icon: "⚠️",
    label: "Attention",
    classes: "border-amber-500/30 bg-amber-500/10 text-amber-200",
    labelClass: "text-amber-400",
  },
  danger: {
    icon: "🚫",
    label: "Important",
    classes: "border-red-500/30 bg-red-500/10 text-red-200",
    labelClass: "text-red-400",
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
