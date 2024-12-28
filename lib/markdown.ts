import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import math from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllPosts() {
  const filenames = fs.readdirSync(contentDirectory);
  return filenames.map((filename) => {
    const filepath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filepath, 'utf8');
    const { data } = matter(fileContents);

    return { ...data, slug: filename.replace('.md', '') };
  });
}

export function getPostBySlug(slug: string) {
  const filepath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = remark()
    .use(math)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(content);

  return {
    ...data,
    slug,
    contentHtml: processedContent.toString(),
  };
}
