import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAll, Post } from '../lib/markdown';
import { getSections, Section } from '../lib/getSections';

interface BlogProps {
  posts: Post[];
  sections: Section[];
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAll<Post>('Blog'); // Cargar los posts del blog
  const sections = getSections(); // Obtener las secciones
  return { props: { posts, sections } };
};

export default function Blog({ posts }: BlogProps) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
