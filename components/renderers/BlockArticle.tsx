// components/renderers/BlockArticle.tsx
import React from "react";
import { Block } from "@/lib/content";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { slug2anchor } from '@/lib/content';

interface BlockArticleProps {
  block: Block & { mdxContent: MDXRemoteSerializeResult };
}

export default function BlockArticle({ block }: BlockArticleProps) {
  const anchor = slug2anchor(block.slug);
  return (
    <section id={anchor} key={block.slug}  className={`prose lg:prose-xl mx-auto max-w-none ${block.style||''}`}>
      <MDXRemote {...block.contentHtml} />
    </section>
  );
}

