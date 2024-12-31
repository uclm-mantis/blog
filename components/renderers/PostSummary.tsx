// components/renderers/PostSummary.tsx
import React from "react";
import Link from 'next/link';
import { Post } from "@/lib/content";

interface PostSummaryProps {
    post: Post;
}

export default function PostSummary({ post }: PostSummaryProps) {
  return (
    <Link href={`/content/${post.slug}`}>{post.title}</Link>
  );
}
