// components/renderers/PostArticle.tsx
import React from "react";
import { Post } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote";

interface PostArticleProps {
  post: Post;
}

export default function PostArticle({ post }: PostArticleProps) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{post.title}</h1>
      <time className="text-gray-600">{post.date}</time>
      <MDXRemote {...post.contentHtml} />
    </article>
  );
}

