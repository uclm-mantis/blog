// components/renderers/PostArticle.tsx
import React from "react";
import { Post } from "@/config";
import { MDXRemote } from "next-mdx-remote";
import FileTreeViewer from "../FileTreeViewer";
import Image from "next/image";

const basePath = process.env.BASE_PATH;

interface PostArticleProps {
  post: Post;
}

export default function PostArticle({ post }: PostArticleProps) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <div className="relative w-full">
        <Image 
          src={post.image? post.image : `${basePath}/img/default-bg-post.png`} 
          alt={`Image for ${post.title}`} 
          className="w-full h-auto object-cover" 
          width={750} height={230} layout="responsive"
        />
      </div>
      <h1 className="mb-1 lg:mb-1">{post.title}</h1>
      {post.author && (<address className="text-gray-600 not-italic">{post.author}</address>)}
      {post.date && (<time className="text-gray-600">{post.date}</time>)}
      <MDXRemote {...post.contentHtml} />
      {post.fileTree && (<FileTreeViewer fileTree={post.fileTree} />)}
    </article>
  );
}

