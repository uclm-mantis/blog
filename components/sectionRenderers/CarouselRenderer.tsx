import { motion, AnimatePresence } from 'framer-motion';
import { Content } from '@/config';
import ContentRenderer from '../ContentRenderer';
import { useState, useMemo, useEffect } from 'react';
import { featured } from '../../config';

interface CarouselRendererProps {
  items: Content[];
  currentSection: string;
}

export default function CarouselRenderer({
  items,
  currentSection,
}: CarouselRendererProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtrar los elementos destacados
  const featuredItems = useMemo(() => {
    const slugs = featured[currentSection as keyof typeof featured] || [];
    return items.filter((item) => slugs.includes(item.slug));
  }, [items, currentSection]);

  const nextItem = () =>
    setCurrentIndex((prev) => (prev + 1) % items.length);

  const prevItem = () =>
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  // Configurar el cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextItem, 5000);
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [items]);

  return (
    <div className="mx-auto p-6 relative no-underline">
      <div className="carousel flex items-center justify-center overflow-hidden relative h-64">
        {/* Botón de navegación izquierdo */}
        <button
          onClick={prevItem}
          className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md"
        >
          &lt;
        </button>

        {/* Contenedor animado */}
        <AnimatePresence initial={false}>
          <motion.div
            key={items[currentIndex].slug}
            className="carousel-item absolute w-3/4 h-full bg-white shadow-lg rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <ContentRenderer
              content={items[currentIndex]}
              variant="summary"
            />
          </motion.div>
        </AnimatePresence>

        {/* Botón de navegación derecho */}
        <button
          onClick={nextItem}
          className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md"
        >
          &gt;
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Sección Featured */}
      {featuredItems.length > 0 && (
        <section className="mt-8">
          <div className='prose lg:prose-xl'><h2>Featured</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredItems.map((item) => (
              <ContentRenderer
                key={item.slug}
                content={item}
                variant="summary"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
