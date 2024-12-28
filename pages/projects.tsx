// pages/projects.tsx
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAll, Project } from '../lib/markdown';
import { getSections, Section } from '../lib/getSections';

interface ProjectsProps {
  projects: Project[];
  sections: Section[];
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAll<Project>('Projects'); // Cargar los proyectos
  const sections = getSections(); // Obtener las secciones
  return { props: { projects, sections } };
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
