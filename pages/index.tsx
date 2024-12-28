import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
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
              Mi Portfolio
            </motion.div>
            <ul className="flex space-x-6">
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/projects">Proyectos</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#projects" className="hover:text-blue-400">
                  Proyectos
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#contact" className="hover:text-blue-400">
                  Contacto
                </a>
              </motion.li>
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
            Hola, soy <span className="text-blue-400">[Tu Nombre]</span>
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

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
          <p className="text-lg text-gray-400">
            Soy un apasionado del desarrollo web con experiencia en diseño
            creativo e innovación tecnológica. Trabajo con tecnologías modernas
            como React, Tailwind CSS y mucho más.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg transition-all"
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Proyecto+${project}`}
                  alt={`Proyecto ${project}`}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold">Proyecto {project}</h3>
                <p className="text-gray-400">
                  Descripción breve del proyecto {project}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Contáctame</h2>
          <p className="text-lg text-gray-400 mb-6">
            Si tienes alguna pregunta o quieres colaborar, no dudes en
            contactarme.
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:tucorreo@ejemplo.com"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg shadow-lg"
          >
            Enviar un correo
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
