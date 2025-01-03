// components/renderers/BlockArticle.tsx
import React from "react";
import { Block } from "@/config";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { slug2anchor } from '@/lib/util';
import FileTreeViewer from "../FileTreeViewer";

interface BlockArticleProps {
  block: Block & { mdxContent: MDXRemoteSerializeResult };
}

export default function BlockArticle({ block }: BlockArticleProps) {
  const anchor = slug2anchor(block.slug);
  return (
    <div id={anchor} key={block.slug}  className={`prose lg:prose-xl mx-auto max-w-none ${block.style||''}`}>
      <MDXRemote {...block.contentHtml} />
      {block.fileTree && (<FileTreeViewer title={block.title} fileTree={block.fileTree} />)}
    </div>
  );
}

