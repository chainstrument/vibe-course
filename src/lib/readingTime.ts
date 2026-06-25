export function readingTime(source: string): string {
  const words = source.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min de lecture`;
}
