// pages/section/[...slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAll } from '@/lib/markdown';
import { Content } from '@/lib/content';
import { getSections, Section } from '@/lib/getSections';
import { sectionRenderers, SectionRenderers } from '@/components/sectionRenderers';

interface SectionProps {
  items: Content[];
  sections: Section[];
  currentSection: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sections = getSections(); 
  const paths = sections.map((sec) => ({
    params: { slug: [ sec.name ] },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || !Array.isArray(params.slug)) {
    return { notFound: true };
  }
  const currentSection = params.slug.at(-1);
  const items =await getAll(currentSection);
  const sections = getSections(); // Obtener las secciones
  return { props: { items, sections, currentSection } };
};

export default function SectionPage({ items, currentSection }: SectionProps) {
  const Renderer = sectionRenderers[currentSection as keyof SectionRenderers] || (() => <p>Renderer for {currentSection} not found</p>);

  return (
    <div className="prose lg:prose-xl mx-auto">
      <Renderer items={items} currentSection={currentSection} />
    </div>
  );
}
