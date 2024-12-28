import { motion } from 'framer-motion';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSections, Section } from '../lib/getSections';

interface HomeProps {
  sections: Section[];
}

export const getStaticProps: GetStaticProps = async () => {
  const sections = getSections(); // Obtener las secciones
  return {
    props: {
      sections,
    },
  };
};

export default function Home({ sections }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-white"
            >
              Mantis Research Group
            </motion.div>
            <ul className="flex space-x-6">
              {sections.map((section) => (
                <motion.li key={section.slug} whileHover={{ scale: 1.1 }}>
                  <Link href={section.slug} className="hover:text-blue-400">
                    {section.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-blue-400">Mantis Research Group</span>
          </h1>
          <p className="text-lg mb-6">Desarrollador web | Diseñador | Innovador</p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg shadow-lg"
          >
            Ver mis proyectos
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
