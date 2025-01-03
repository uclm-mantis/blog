// components/sectionRenderers/ListRenderer.tsx
import { Content, Post, featured } from '@/config';
import ContentRenderer from '../ContentRenderer';
import PostFeatured from '../renderers/PostFeatured';
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
              <PostFeatured key={`ppost-${item.slug}`} post={item as Post} />
              ))}
          </div>
          </section>
      )}
      <div className='prose lg:prose-xl mb-1'><h2>Latest posts</h2></div>
      <ul>
        {items.map((content) => (
          <li key={`li-${content.slug}`} className="px-0 py-2">
            <ContentRenderer content={content} variant="summary" />
          </li>
        ))}
      </ul>
    </div>
  );
}
