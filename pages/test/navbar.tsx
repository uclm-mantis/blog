// pages/index.tsx
import { GetStaticProps } from 'next';
import NavBar from '../../components/NavBar';
import { getSections } from '../../lib/getSections';

export const getStaticProps: GetStaticProps = async () => {
  const sections = getSections();
  return { props: { sections } };
};

interface HomeProps {
  sections: {
    name: string;
    items: { title: string; slug: string; order: number }[];
  }[];
}

export default function Home({ sections }: HomeProps) {
  return (
    <div>
      <NavBar sections={sections} />
      <main>
        <h1>Bienvenido a la Web del Grupo</h1>
      </main>
    </div>
  );
}
