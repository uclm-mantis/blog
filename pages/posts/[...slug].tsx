import { GetStaticPaths, GetStaticProps } from 'next';
import { getAll, getBySlug, Post } from '../../lib/markdown';

interface PostProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAll<Post>('Blog');

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
  const post = getBySlug<Post>(slug);

  return {
    props: {
      post,
    },
  };
};

export default function PostPage({ post }: PostProps) {

  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post?.contentHtml || '' }} />
    </article>
  );
}
