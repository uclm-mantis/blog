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
import { Content } from './content';

const contentDirectory = path.join(process.cwd(), 'content');

function getFilesRecursively(dir: string): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  return files
    .flatMap((file) =>
      file.isDirectory()
        ? getFilesRecursively(path.join(dir, file.name))
        : path.join(dir, file.name)
    )
    .filter((filePath) => fs.statSync(filePath).isFile());
}

function getMetadata(slug: string, filepath: string): Omit<Content, 'contentHtml'> {
  if (!fs.existsSync(filepath)) {
    throw new Error(`Archivo no encontrado: ${filepath}`);
  }

  const fileContents = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id: data.id || slug,
    ...data,
    content,
    slug,
  } as Content;
}

import { serialize } from "next-mdx-remote/serialize";

async function renderContent(contents: Content[]): Promise<Content[]> {
  return Promise.all(
    contents.map(async (content) => {
      if (content.type === "post" || content.type === "block") {
        // Procesa contenido como MDX
        const mdxSource = await serialize(content.content || '', {
          mdxOptions: {
            remarkPlugins: [math],
            rehypePlugins: [rehypeKatex, rehypeMermaid],
          },
        });
        return {
          ...content,
          contentHtml: mdxSource, // Devuelve la fuente MDX
        };
      }

      // Para otros tipos, usa el pipeline existente
      const processor = unified()
        .use(remarkParse)
        .use(math)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeKatex)
        .use(rehypeMermaid)
        .use(rehypeStringify, { allowDangerousHtml: true });

      const processedContent = await processor.process(content.content);
      return {
        ...content,
        contentHtml: processedContent.toString(),
      };
    })
  );
}


export async function getAll(
  section?: string,
  type?: Content['type']
): Promise<Content[]> {
  const filePaths = getFilesRecursively(contentDirectory);

  // Obtener metadatos de todos los archivos
  const allMetadata = filePaths
    .filter((filePath) => (filePath.endsWith('.md') || filePath.endsWith('.mdx')))
    .map((filePath) => {
      const slug = path
        .relative(contentDirectory, filePath)
        .replace(/\.(md|mdx)$/, '')
        .split(path.sep)
        .join('/');
      return getMetadata(slug, filePath);
    });

  // Filtrar los contenidos según los criterios
  const filteredMetadata = allMetadata.filter(
    (item) =>
      (section ? section === item.section : true) &&
      (type ? item.type === type : true)
  );

  // Renderizar solo los contenidos filtrados
  return renderContent(filteredMetadata);
}

export async function getBySlug(slug: string): Promise<Content> {
  const md = path.join(contentDirectory, slug) + '.md';
  const mdx = path.join(contentDirectory, slug) + '.mdx';

  const metadata = (fs.existsSync(md) ? getMetadata(slug, md) : getMetadata(slug, mdx));
  const [renderedContent] = await renderContent([metadata]);
  return renderedContent;
}
