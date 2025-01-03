// components/sectionRenderers/GridRenderer.tsx
import { Content } from '@/config';
import ContentRenderer from '../ContentRenderer';

interface GridRendererProps {
  items: Content[];
  currentSection: string;
}

export default function GridRenderer({ items }: GridRendererProps) {
  return (
    <div className="mx-auto p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {items.map((content) => (
        <div key={content.slug} className="p-4">
          <ContentRenderer content={content} variant="summary" />
        </div>
      ))}
    </div>
    </div>
  );
}
