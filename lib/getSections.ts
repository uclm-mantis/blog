import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

          if (data.section && data.title) {
            const sectionName = data.section;
            if (!sections[sectionName]) {
              sections[sectionName] = {
                name: sectionName,
                slug: `/${sectionName.toLowerCase().replace(/\s+/g, '-')}`,
                items: [],
              };
            }

            sections[sectionName].items.push({
              title: data.title,
              slug: entryPath
                .replace(contentPath, '')
                .replace(/\\/g, '/')
                .replace(/\.md$/, ''),
              order: data.order || 0,
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
