// components/renderers/ProjectSummary.tsx
import React from "react";
import Link from 'next/link';
import { Project } from "@/lib/content";

interface ProjectSummaryProps {
    project: Project;
}

export default function ProjectSummary({ project }: ProjectSummaryProps) {
  return (
    <Link href={`/content/${project.slug}`}>{project.title}</Link>
  );
}
