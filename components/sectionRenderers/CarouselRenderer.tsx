// components/sectionRenderers/CarouselRenderer.tsx
import { Content } from '@/lib/content';
import ContentRenderer from '../ContentRenderer';

interface CarouselRendererProps {
  items: Content[];
  currentSection: string;
}

export default function CarouselRenderer({ items }: CarouselRendererProps) {
  return (
    <div className="prose lg:prose-xl mx-auto p-6">
      <div className="carousel">
        {items.map((content) => (
          <div key={content.slug} className="carousel-item">
              <ContentRenderer content={content} variant="summary" />
          </div>
        ))}
      </div>
    </div>
  );
}