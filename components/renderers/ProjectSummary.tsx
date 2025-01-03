// components/renderers/ProjectSummary.tsx
import React from "react";
import Link from 'next/link';
import { Project } from "@/config";

interface ProjectSummaryProps {
    project: Project;
}

export default function ProjectSummary({ project }: ProjectSummaryProps) {
  return (
    <Link className="w-full h-full" href={`/content/${project.slug}`} passHref>
      <div className="group relative rounded-lg shadow-lg overflow-hidden cursor-pointer bg-gray-800 hover:shadow-2xl transition-shadow duration-300 h-full w-full">
        {/* Background Image */}
        {project.image && (
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-75 group-hover:brightness-50 transition-all duration-300 h-full w-full"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
        )}

        {/* Overlay Content */}
        <div className="relative z-10 p-4 h-full flex flex-col justify-end text-white">
          {/* Title */}
          <h3 className="text-xl font-extrabold mb-2 group-hover:text-blue-400 transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
          {/* Description */}
          {project.description && (
            <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300 mb-3 leading-relaxed">
              {project.description}
            </p>
          )}
          {/* Additional Details */}
          {(project.start || project.end || project.budget) && (
            <div className="text-sm space-y-1">
              {project.start && (
                <p className="text-xs leading-snug">
                  <strong className="font-medium text-gray-200">Start:</strong> {project.start}
                </p>
              )}
              {project.end && (
                <p className="text-xs leading-snug">
                  <strong className="font-medium text-gray-200">End:</strong> {project.end}
                </p>
              )}
              {project.budget && (
                <p className="text-xs leading-snug">
                  <strong className="font-medium text-gray-200">Budget:</strong> ${project.budget.toLocaleString()}
                </p>
              )}
              {project.funding && (
                <p className="text-xs leading-snug">
                  <strong className="font-medium text-gray-200">Funding:</strong> {project.funding}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Hover Details */}
        {(project.funding || (project.tags && project.tags.length > 0)) && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
