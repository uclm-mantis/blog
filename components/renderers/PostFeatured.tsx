import React from "react";
import Link from "next/link";
import { Post } from "@/config";

const basePath = process.env.BASE_PATH;

interface PostFeaturedProps {
  post: Post;
}

export default function PostFeatured({ post }: PostFeaturedProps) {
  const defaultImage = `${basePath}/img/default-bg-post.png`; // Ruta al patrón estándar

  return (
    <Link href={`/content/${post.slug}`} className="block">
      <div className="border rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        {/* Imagen o patrón estándar en la parte superior */}
        <div
          className="h-48 w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.image || defaultImage})`,
          }}
        />

        {/* Información del post */}
        <div className="p-4">
          {/* Título */}
          <h2 className="text-lg font-bold mb-2">{post.title}</h2>

          {/* Autor */}
          {post.author && <p className="text-sm text-gray-600">{post.author}</p>}

          {/* Fecha */}
          {post.date && <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>}
        </div>
      </div>
    </Link>
  );
}
