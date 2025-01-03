// components/renderers/ProjectArticle.tsx
import React from "react";
import { Project } from "@/config";
import FileTreeViewer from "../FileTreeViewer";

interface ProjectArticleProps {
    project: Project;
}

export default function ProjectArticle({ project }: ProjectArticleProps) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{project.title}</h1>
      <time>{project.start}</time>
      <div dangerouslySetInnerHTML={{ __html: project?.contentHtml || '' }} />
      {project.fileTree && (<FileTreeViewer title="Project files" fileTree={project.fileTree} />)}
    </article>
  );
}
