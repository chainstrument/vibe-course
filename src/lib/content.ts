import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  order?: number;
  level?: "débutant" | "intermédiaire" | "avancé";
}

function readDir(subdir: "modules" | "exercises"): ContentMeta[] {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        order: data.order,
        level: data.level,
      };
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getModules(): ContentMeta[] {
  return readDir("modules");
}

export function getExercises(): ContentMeta[] {
  return readDir("exercises");
}

export function getContent(
  subdir: "modules" | "exercises",
  slug: string
): { meta: ContentMeta; source: string } | null {
  const filePath = path.join(contentDir, subdir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      order: data.order,
      level: data.level,
    },
    source: content,
  };
}

const SOLUTION_DELIMITER = "---corrige---";

export function getExercise(slug: string): {
  meta: ContentMeta;
  statement: string;
  solution: string;
} | null {
  const data = getContent("exercises", slug);
  if (!data) return null;
  const parts = data.source.split(SOLUTION_DELIMITER);
  return {
    meta: data.meta,
    statement: parts[0]?.trim() ?? "",
    solution: parts[1]?.trim() ?? "",
  };
}
