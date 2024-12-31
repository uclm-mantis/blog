// components/renderers/ProjectArticle.tsx
import React from "react";
import { Block } from "@/lib/content";

interface BlockArticleProps {
    block: Block;
}

export default function ContentSummary({ block }: BlockArticleProps) {
  return (
    <section id={block.slug} key={block.slug}  className="prose lg:prose-xl mx-auto max-w-none mb-8">
        <h2 id={block.slug}>{block.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: block.contentHtml || '' }} />
    </section>
  );
}

