// components/sectionRenderers/GridRenderer.tsx
import { Content } from '@/lib/content';
import ContentRenderer from '../ContentRenderer';

interface GridRendererProps {
  items: Content[];
  currentSection: string;
}

export default function GridRenderer({ items }: GridRendererProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((content) => (
        <div key={content.slug} className="card p-4 bg-gray-100 rounded-lg shadow-md">
          <ContentRenderer content={content} variant="summary" />
        </div>
      ))}
    </div>
  );
}
