import React from "react";
import Link from "next/link";
import { Post } from "@/config";

interface PostSummaryProps {
  post: Post;
}

export default function PostSummary({ post }: PostSummaryProps) {
  return (
    <div className="border rounded-lg shadow-lg bg-gray-50 hover:bg-gray-100">
      {/* Título del post con banda de color */}
      <h2 className="bg-gray-800 rounded-t-lg text-blue-100 font-bold text-lg py-2 px-4">
        <Link href={`/content/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>

      {/* Fecha y autor */}
      <p className="text-sm bg-gray-300 text-gray-500 mt-0 px-4">
        {post.date
          ? `Posted by ${post.author || "Unknown Author"} on ${new Date(
              post.date
            ).toLocaleDateString()}`
          : `Posted by ${post.author || "Unknown Author"}`}
      </p>

      {/* Descripción */}
      {post.description && (
        <p className="mt-2 px-4 text-gray-700">{post.description}</p>
      )}
    </div>
  );
}
