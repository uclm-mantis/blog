import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, getPostBySlug, PostContent } from '../../lib/markdown';

interface PostProps {
  post: PostContent;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);
  return { props: { post } };
};

export default function Post({ post }: PostProps) {
  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
