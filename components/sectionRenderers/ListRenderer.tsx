// components/sectionRenderers/ListRenderer.tsx
import { Content, Post } from '@/config';
import ContentRenderer from '../ContentRenderer';
import PostFeatured from '../renderers/PostFeatured';
import { featured } from '../../config';
import { useMemo } from 'react';

interface ListRendererProps {
  items: Content[];
  currentSection: string;
}

export default function ListRenderer({ items, currentSection }: ListRendererProps) {
  // Filtrar los elementos destacados
  const featuredItems = useMemo(() => {
    const slugs = featured[currentSection as keyof typeof featured] || [];
    return items.filter((item) => slugs.includes(item.slug));
  }, [items, currentSection]);

  return (
    <div className="mx-auto p-6">
        <div className='prose lg:prose-xl mb-4'><h1>{currentSection}</h1></div>
        {/* Sección Featured */}
        {featuredItems.length > 0 && (
            <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredItems.map((item) => (
                <PostFeatured post={item as Post} />
                ))}
            </div>
            </section>
        )}
      <ul className="divide-y divide-gray-300">
        {items.map((content) => (
          <li key={`li-${content.slug}`} className="p-4">
            <ContentRenderer content={content} variant="summary" />
          </li>
        ))}
      </ul>
    </div>
  );
}
