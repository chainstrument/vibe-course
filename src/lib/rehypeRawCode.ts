import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";

// Runs BEFORE rehype-pretty-code to capture raw text and attach it to <pre>
export function rehypeRawCode() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "pre") return;
      const code = node.children.find(
        (c): c is Element => (c as Element).tagName === "code"
      );
      if (!code) return;
      const raw = code.children
        .map((c) => ("value" in c ? c.value : ""))
        .join("");
      node.properties = node.properties ?? {};
      node.properties["raw"] = raw;
    });
  };
}
