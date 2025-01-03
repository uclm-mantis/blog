// components/sectionRenderers/LinearRenderer.tsx
import { Content } from '@/config';
import ContentRenderer from '../ContentRenderer';

interface LinearRendererProps {
  items: Content[];
  currentSection: string;
}

export default function LinearRenderer({ items }: LinearRendererProps) {
  return (
    <div className="mx-auto">
      {items.map((content) => (<ContentRenderer key={content.slug} content={content} variant="article" />))}
    </div>
  );
}