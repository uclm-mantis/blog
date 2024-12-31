// components/sectionRenderers/LinearRenderer.tsx
import { Content } from '@/lib/content';
import ContentRenderer from '../ContentRenderer';

interface LinearRendererProps {
  items: Content[];
  currentSection: string;
}

export default function LinearRenderer({ items }: LinearRendererProps) {
  return (
    <>
      {items.map((content) => (<ContentRenderer key={content.slug} content={content} variant="article" />))}
    </>
  );
}