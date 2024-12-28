import { GetStaticPaths, GetStaticProps } from 'next';
import { getAll, getBySlug, TeamMember } from '../../lib/markdown';

interface MemberProps {
  member: TeamMember;
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
  const member = getBySlug<TeamMember>(slug);

  return {
    props: {
      member,
    },
  };
};

export default function PostPage({ member }: MemberProps) {

  return (
    <article>
      <h1>{member.name}</h1>
      <div className='email'>{member.email}</div>
      <div dangerouslySetInnerHTML={{ __html: member?.contentHtml || '' }} />
    </article>
  );
}
