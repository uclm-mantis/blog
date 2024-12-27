import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
}

export interface PostContent extends PostMetadata {
  contentHtml: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllPosts(): PostMetadata[] {
  const filenames = fs.readdirSync(contentDirectory);
  return filenames.map((filename) => {
    const filepath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filepath, 'utf8');
    const { data } = matter(fileContents);

    return {
      ...(data as Omit<PostMetadata, 'slug'>),
      slug: filename.replace('.md', ''),
    };
  });
}

export function getPostBySlug(slug: string): PostContent {
  const filepath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();

  return {
    ...(data as PostMetadata),
    slug,
    contentHtml,
  };
}
