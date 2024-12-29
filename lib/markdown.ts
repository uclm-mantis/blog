import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import math from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeMermaid from 'rehype-mermaid';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BaseItem {
  title: string;
  slug: string;
  section: string;
  order?: number;
  content?: string;
  contentHtml?: TrustedHTML;
}

export interface Project extends BaseItem {
  date?: string;
  description?: string;
  tags?: string[];
}

export interface TeamMember extends BaseItem {
  id?: string;
  position?: string;
  email?: string;
  github?: string;
}

export interface Post extends BaseItem {
  date?: string;
}

function getFilesRecursively(dir: string): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  return files.flatMap((file) =>
    file.isDirectory()
      ? getFilesRecursively(path.join(dir, file.name))
      : path.join(dir, file.name)
  ).filter((filePath) => fs.statSync(filePath).isFile());
}

export function getAll<T extends BaseItem = BaseItem>(section?: string): T[] {
  const filePaths = getFilesRecursively(contentDirectory);

  return filePaths
    .filter((filePath) => filePath.endsWith('.md'))
    .map((filePath) => {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      const slug = path
        .relative(contentDirectory, filePath)
        .replace(/\.md$/, '')
        .split(path.sep)
        .join('/');

      return {
        ...data,
        content,
        slug,
      } as T;
    })
    .filter((post) => (section ? post.section === section : true));
}

export async function getBySlug<T extends BaseItem = BaseItem>(slug: string) {
  const filepath = path.join(contentDirectory, slug) + '.md';

  if (!fs.existsSync(filepath)) {
    throw new Error(`Archivo no encontrado: ${filepath}`);
  }

  const fileContents = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(fileContents);

  const processor = unified()
    .use(remarkParse)
    .use(math)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex)
    .use(rehypeMermaid)
    .use(rehypeStringify, { allowDangerousHtml: true });
    ;

  const processedContent = await processor.process(content);

  return {
    ...data,
    contentHtml: processedContent.toString() as unknown as TrustedHTML,
  } as T;
}
