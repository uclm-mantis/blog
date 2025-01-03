import React from 'react';
import { FileNode } from '@/lib/markdown';

const FileTree = ({ tree }: { tree: FileNode }) => {
  return (
    <li className="mb-1 w-full">
      <div className="flex items-start gap-3 w-full leading-tight"> {/* Ajuste de línea */}
        {/* Columna izquierda: Nombres */}
        <div className="flex-[2] break-all">
          {tree.type === 'file' ? '📄 ' : '📁 '}
          {tree.slug ? (
            <a href={`/${tree.slug}`} target="_blank" rel="noopener noreferrer">
              {tree.name}
            </a>
          ) : (
            tree.name
          )}
        </div>
        {/* Columna derecha: Descripciones */}
        <div className="flex-[3] text-sm text-gray-500 break-words">
          {tree.description || ''}
        </div>
      </div>
      {/* Subdirectorios/archivos */}
      {tree.type === 'directory' && tree.children && (
        <ul className="pl-6 mt-1 w-full">
          {tree.children.map((child) => (
            <FileTree key={child.name} tree={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const FileTreeViewer = ({ fileTree, title }: { fileTree: FileNode[]; title?: string }) => {
  return (
    fileTree &&
    Array.isArray(fileTree) &&
    fileTree.length > 0 && (
      <div className="not-prose w-full">
        {title && <h2>{title}</h2>}
        <ul>
          {fileTree.map((tree) => (
            <FileTree key={tree.name} tree={tree} />
          ))}
        </ul>
      </div>
    )
  );
};

export default FileTreeViewer;
