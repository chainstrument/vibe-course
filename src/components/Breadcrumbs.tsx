import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: Props) {
  return (
    <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-zinc-700">/</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-zinc-300 transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-zinc-300">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
