import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import math from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';

const contentDirectory = path.join(process.cwd(), 'content');

interface BaseItem {
  slug: string;
  section: string;
  content?: string;
  contentHtml?: TrustedHTML;
}

export interface Project extends BaseItem {
  title: string;
  date?: string;
  description?: string;
  tags?: string[];
}

export interface TeamMember extends BaseItem {
  name: string;
  id?: string;
  position?: string;
  email?: string;
  github?: string;
}

export interface Post extends BaseItem {
  title: string;
  date?: string;
  content?: string;
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

export function getBySlug<T extends BaseItem = BaseItem>(slug: string) {
  const filepath = path.join(contentDirectory, slug) + '.md';

  if (!fs.existsSync(filepath)) {
    throw new Error(`Archivo no encontrado: ${filepath}`);
  }

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
    contentHtml: processedContent.toString() as TrustedHTML,
  } as T;
}
