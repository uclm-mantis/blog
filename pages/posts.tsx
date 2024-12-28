import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAll, Post } from '../lib/markdown';

interface BlogProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAll<Post>('Blog');
  return { props: { posts } };
};

export default function Blog({ posts }: BlogProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
