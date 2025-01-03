import React from 'react';
import { FileNode } from '@/lib/markdown';

const FileTree = ({ tree }: { tree: FileNode }) => {
  if (tree.type === 'file') {
    return (
      <li className='mb-0 mt-0 lg:mb-0 lg:mt-0'>
        📄{' '}
        {tree.slug && (<a href={`/${tree.slug}`} target="_blank" rel="noopener noreferrer">{tree.name}</a>) || tree.name}
      </li>
    );
  }

  return (
    <li className='mb-0 mt-0 lg:mb-0 lg:mt-0'>
      📁 {tree.name}
      {tree.children && (
        <ul className='mb-0 mt-0 lg:mb-0 lg:mt-0'>
          {tree.children.map((child) => (
            <FileTree key={child.name} tree={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const FileTreeViewer = ({ fileTree, title }: { fileTree: FileNode[], title?: string }) => {
  return fileTree && Array.isArray(fileTree) && fileTree.length > 0 && (
  <div>
    {title && (<h2>{title}</h2>)}
    {fileTree.length > 1 && (
      <ul>
        {fileTree.map((tree) => (
          <FileTree key={tree.name} tree={tree} />
        ))}
      </ul>
    )}
    {fileTree.length === 1 && (<FileTree key={fileTree[0].name} tree={fileTree[0]} />)}
  </div>
)};

export default FileTreeViewer;
