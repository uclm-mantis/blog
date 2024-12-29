import { GetStaticPaths, GetStaticProps } from 'next';
import { getAll, getBySlug, TeamMember } from '../../lib/markdown';
import { getSections, Section } from '../../lib/getSections';

interface MemberProps {
  member: TeamMember;
  sections: Section[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const members = getAll<TeamMember>('Team');
  const paths = members.map((post) => ({
    params: { slug: post.slug.split('/') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || !Array.isArray(params.slug)) {
    return { notFound: true };
  }

  const slug = params.slug.join('/'); // Reconstruir el slug como una ruta relativa
  const member = await getBySlug<TeamMember>(slug);
  const sections = getSections(); // Obtener las secciones

  return {
    props: {
      member,
      sections,
    },
  };
};

export default function MemberPage({ member }: MemberProps) {
  return (
    <article>
      <h1>{member.title}</h1>
      <div className="email">{member.email}</div>
      <div dangerouslySetInnerHTML={{ __html: member?.contentHtml || '' }} />
    </article>
  );
}
