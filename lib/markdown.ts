import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import math from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive'
import rehypeMermaid from 'rehype-mermaid';
import rehypePrism from 'rehype-prism';
import { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';
import { Content } from '@/config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function replaceBasePath(value: any): any {
  if (typeof value === 'string') {
    return value.replace(/{{basePath}}/g, process.env.BASE_PATH || '');
  }
  if (Array.isArray(value)) {
    return value.map(replaceBasePath);
  }
  if (typeof value === 'object' && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [key, replaceBasePath(val)])
    );
  }
  return value;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function preprocessMarkdown(content: string): { content: string; data: any } {
  const { data, content: rawContent } = matter(content);

  const processedData = replaceBasePath(data);
  const processedContent = replaceBasePath(rawContent);

  return { content: processedContent, data: processedData };
}


const contentDirectory = path.join(process.cwd(), 'content');
const filesDirectory = path.join(process.cwd(), 'public');

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

export interface FileNode {
  name: string;
  type: 'file' | 'directory';
  slug?: string;
  description?: string;
  children?: FileNode[];
}

function getFolderTree(dirPath: string): FileNode {
  const stats = fs.lstatSync(dirPath);
  const name = path.basename(dirPath);

  if (stats.isDirectory()) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    const children = entries.map((entry) => getFolderTree(path.join(dirPath, entry.name)));
    return { name, type: 'directory', children };
  } else {
    return { name, type: 'file', slug:path.relative(filesDirectory, dirPath) };
  }
}

function getMetadata(slug: string, filepath: string): Omit<Content, 'contentHtml'> {
  if (!fs.existsSync(filepath)) {
    throw new Error(`Archivo no encontrado: ${filepath}`);
  }

  const fileContents = fs.readFileSync(filepath, 'utf8');
  const { data, content } = preprocessMarkdown(fileContents);

  let fileTree: FileNode[] = [];

  if (data.files && Array.isArray(data.files)) {
    fileTree = data.files.map((fPath: string) => {
      const absolutePath = path.join(filesDirectory, fPath);
      if (fs.existsSync(absolutePath)) {
        return getFolderTree(absolutePath);
      } else {
        console.warn(`Ruta no válida: ${fPath}`);
        return { name: fPath, type: 'file' };
      }
    });
  }

  return {
    id: data.id || slug,
    ...data,
    content,
    slug,
    fileTree,
  } as Content;
}

function myRemarkPlugin() {
  return function (tree: Root): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visit(tree, (node: any) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (node.name !== 'note') return

        const data = node.data || (node.data = {})
        const tagName = node.type === 'textDirective' ? 'span' : 'div'

        data.hName = tagName
        data.hProperties = h(tagName, node.attributes || {}).properties
      }
    });
  };
}

import { serialize } from "next-mdx-remote/serialize";

async function renderContent(contents: Content[]): Promise<Content[]> {
  return Promise.all(
    contents.map(async (content) => {
      // Procesa contenido como MDX
      const mdxSource = await serialize(content.content || '', {
        mdxOptions: {
          remarkPlugins: [remarkDirective, myRemarkPlugin, math, remarkGfm],
          rehypePlugins: [rehypeKatex, rehypeMermaid, rehypePrism],
        },
      });
      return {
        ...content,
        contentHtml: mdxSource, // Devuelve la fuente MDX
      };
    })
  );
}

import { contentCompare } from '@/config';

export async function getAll(
  section?: string,
  type?: Content['type']
): Promise<Content[]> {
  const filePaths = getFilesRecursively(contentDirectory);

  // Obtener metadatos de todos los archivos
  const allMetadata = filePaths
    .filter((filePath) => filePath.endsWith('.md') || filePath.endsWith('.mdx'))
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

  // Ordenar los contenidos
  const sortedMetadata = filteredMetadata.sort((a, b) => {
    // Prioridad de orden inverso por `order`
    if (a.order !== undefined && b.order !== undefined) {
      return b.order - a.order;
    }

    // Usar comparadores específicos según `type` en `contentCompare`
    if (contentCompare[a.type as keyof typeof contentCompare]) {
      const comparator = contentCompare[a.type as keyof typeof contentCompare];
      return comparator(a, b);
    }

    return 0; // Sin cambios si no hay criterios de comparación aplicables
  });

  // Renderizar solo los contenidos filtrados y ordenados
  return renderContent(sortedMetadata);
}


export async function getBySlug(slug: string): Promise<Content> {
  const md = path.join(contentDirectory, slug) + '.md';
  const mdx = path.join(contentDirectory, slug) + '.mdx';

  const metadata = (fs.existsSync(md) ? getMetadata(slug, md) : getMetadata(slug, mdx));
  const [renderedContent] = await renderContent([metadata]);
  return renderedContent;
}

export interface Section {
    name: string;
    slug: string;
    items: { title: string; slug: string; order: number }[];
  }
  
export const getSections = (): Section[] => {
    const contentPath = path.join(process.cwd(), 'content');
    const sections: Record<string, Section> = {};
  
    const processMarkdownFiles = (folderPath: string) => {
      const entries = fs.readdirSync(folderPath, { withFileTypes: true });
      entries.forEach((entry) => {
        const entryPath = path.join(folderPath, entry.name);
  
        if (entry.isDirectory()) {
          processMarkdownFiles(entryPath);
        } else if (entry.name.endsWith('.md')) {
          const fileContents = fs.readFileSync(entryPath, 'utf8');
          try {
            const { data } = matter(fileContents);
            const processedData = replaceBasePath(data);

            if (processedData.section && processedData.title) {
              const sectionName = processedData.section;
              if (!sections[sectionName]) {
                sections[sectionName] = {
                  name: sectionName,
                  slug: `/section/${sectionName.replace(/\s+/g, '-')}`,
                  items: [],
                };
              }
  
              sections[sectionName].items.push({
                title: processedData.title,
                slug: entryPath
                  .replace(contentPath, '')
                  .replace(/\\/g, '/')
                  .replace(/\.md$/, ''),
                order: processedData.order || 0,
              });
            } else {
              console.warn(`Archivo Markdown ignorado (faltan campos): ${entryPath}`);
            }
          } catch (err) {
            console.error(`Error procesando el archivo ${entryPath}:`, err);
          }
        }
      });
    };
  
    if (fs.existsSync(contentPath)) {
      processMarkdownFiles(contentPath);
    } else {
      console.error(`El directorio ${contentPath} no existe.`);
    }
  
    return Object.values(sections);
  };
  