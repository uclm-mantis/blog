// pages/section/[...slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAll, getSections, Section } from '@/lib/markdown';
import { Content, sectionRenderers, SectionRenderers } from '@/config';

interface SectionProps {
  items: Content[];
  sections: Section[];
  currentSection: string;
  isSinglePage: boolean;
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
  const isSinglePage = sectionRenderers[currentSection as keyof SectionRenderers]?.isSinglePage || false;
  const items = await getAll(currentSection);
  const sections = getSections();
  return { props: { items, sections, currentSection, isSinglePage } };
};

export default function SectionPage({ items, currentSection }: SectionProps) {
  const Renderer = sectionRenderers[currentSection as keyof SectionRenderers]?.renderer || (() => <p>Renderer for {currentSection} not found</p>);
  return (<Renderer items={items} currentSection={currentSection} />);
}
