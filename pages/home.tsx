import { GetStaticProps } from 'next';
import { getAll, getBySlug, BaseItem } from '../lib/markdown';
import { getSections, Section } from '../lib/getSections';

interface HomeProps {
  files: BaseItem[];
  sections: Section[];
}

export const getStaticProps: GetStaticProps = async () => {
  const metadata = getAll<BaseItem>('Home'); // Obtener solo los metadatos

  // Usar Promise.all para manejar las operaciones asincrónicas
  const files = await Promise.all(
    metadata.map(async (file) => {
      const contentHtml = (await getBySlug<BaseItem>(file.slug)).contentHtml;
      return {
        ...file,
        contentHtml,
        slug: file.slug.replace(/\//g, '-'), // Convertir slugs en formato válido para IDs
      };
    })
  );

  // Modificar la sección "Home" con los slugs ajustados
  const sections = getSections();
  const homeSectionIndex = sections.findIndex((section) => section.name === 'Home');
  if (homeSectionIndex >= 0) {
    sections[homeSectionIndex].items = files.map((file) => ({
      title: file.title,
      slug: `#${file.slug}`, // Enlaces del menú en formato #<slug>
      order: file.order || 0,
    }));
  }

  return { props: { files, sections } };
};

export default function Home({ files }: HomeProps) {
  return (
    <div>
      <h1>Inicio</h1>
      {files.map((file) => (
        <section id={file.slug} key={file.slug} className="prose max-w-none mb-8">
          <h2 id={file.slug}>{file.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: file.contentHtml || '' }} />
        </section>
      ))}
    </div>
  );
}
