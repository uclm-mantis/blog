// lib/getSections.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Section {
  name: string;
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
        const { data } = matter(fileContents);

        if (data.section && data.title) {
          const sectionName = data.section;
          if (!sections[sectionName]) {
            sections[sectionName] = {
              name: sectionName,
              items: [],
            };
          }

          sections[sectionName].items.push({
            title: data.title,
            slug: entryPath
              .replace(contentPath, '')
              .replace(/\\/g, '/')
              .replace(/\\.md$/, ''),
            order: data.order || 0,
          });
        }
      }
    });
  };

  processMarkdownFiles(contentPath);

  return Object.values(sections).map((section) => ({
    ...section,
    items: section.items.sort((a, b) => a.order - b.order),
  }));
};
