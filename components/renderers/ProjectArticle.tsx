// components/renderers/ProjectArticle.tsx
import React from "react";
import { Project } from "@/lib/content";

interface ProjectArticleProps {
    project: Project;
}

export default function ProjectArticle({ project }: ProjectArticleProps) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{project.title}</h1>
      <time>{project.date}</time>
      <div dangerouslySetInnerHTML={{ __html: project?.contentHtml || '' }} />
    </article>
  );
}
