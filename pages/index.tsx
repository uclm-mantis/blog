import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllPosts, PostMetadata } from '../lib/markdown';

interface HomeProps {
  posts: PostMetadata[];
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default function Home({ posts }: HomeProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
