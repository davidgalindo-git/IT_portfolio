import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

type CompileOptions = {
  source: string;
};

export async function compileLabMdx<TFrontmatter extends Record<string, unknown>>({
  source,
}: CompileOptions) {
  const result = await compileMDX<TFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            // @ts-expect-error rehype-pretty-code types
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: false,
            },
          ],
        ],
      },
    },
  });

  return result;
}

