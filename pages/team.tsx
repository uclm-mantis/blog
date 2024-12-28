// pages/team.tsx
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAll, TeamMember } from '../lib/markdown';
import { getSections, Section } from '../lib/getSections';

interface TeamProps {
  members: TeamMember[];
  sections: Section[];
}

export const getStaticProps: GetStaticProps = async () => {
  const members = getAll<TeamMember>('Team'); // Cargar los miembros del equipo
  const sections = getSections(); // Obtener las secciones
  return { props: { members, sections } };
};

export default function Team({ members }: TeamProps) {
  return (
    <div>
      <h1>Equipo</h1>
      <ul>
        {members.map((member) => (
          <li key={member.slug}>
            <Link href={`/team/${member.slug}`}>{member.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
