import { GetStaticPaths, GetStaticProps } from 'next';
import { getAll, getBySlug, Project } from '../../lib/markdown';

interface ProjectProps {
  project: Project;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAll<Project>('Projects');
  const paths = projects.map((project) => ({
    params: { slug: project.slug.split('/') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  if (!params?.slug || !Array.isArray(params.slug)) {
    return { notFound: true };
  }

  const slug = params.slug.join('/'); // Reconstruir el slug como una ruta relativa
  const project = getBySlug<Project>(slug);

  return {
    props: {
      project,
    },
  };
};

export default function ProjectPage({ project }: ProjectProps) {

  return (
    <article>
      <h1>{project.title}</h1>
      <time>{project.date}</time>
      <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </article>
  );
}
