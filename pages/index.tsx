import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/markdown';

interface Post {
  title: string;
  slug: string;
}

interface HomeProps {
  posts: Post[];
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
          <Link href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
