// pages/blog/[...slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAll, getBySlug } from '../../lib/markdown';
import { Content } from '../../lib/content';
import { getSections, Section } from '../../lib/getSections';
import ContentRenderer from '@/components/ContentRenderer';

interface PostProps {
  content: Content;
  sections: Section[];
  currentSection: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAll();
  const paths = posts.map((post) => ({
    params: { slug: post.slug.split('/') },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || !Array.isArray(params.slug)) {
    return { notFound: true };
  }

  const slug = params.slug.join('/'); // Reconstruir el slug como una ruta relativa
  const content = await getBySlug(slug);

  const sections = getSections(); // Obtener las secciones
  const currentSection = content.section;

  return {
    props: {
      content,
      sections,
      currentSection,
    },
  };
};

export default function PostPage({ content }: PostProps) {
  return (<ContentRenderer content={content} variant="article" />);
}
