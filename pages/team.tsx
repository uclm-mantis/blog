// pages/team.tsx
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAll, TeamMember } from '../lib/markdown';

interface TeamProps {
  members: TeamMember[];
}

export const getStaticProps: GetStaticProps = async () => {
  const members = getAll<TeamMember>('Team');
  return { props: { members } };
};

export default function Team({ members }: TeamProps) {
  return (
    <ul>
      {members.map((member) => (
        <li key={member.slug}>
          <Link href={`/team/${member.slug}`}>
            {member.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
