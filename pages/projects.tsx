// pages/projects.tsx
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAll, Project } from '../lib/markdown';

interface ProjectsProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAll<Project>('Projects');
  return { props: { projects } };
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
