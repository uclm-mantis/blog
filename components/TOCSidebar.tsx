// components/TOCSidebar.tsx
import { motion } from 'framer-motion';
import React from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

interface TOCSidebarProps {
  currentSection?: {
    slug: string;
    items: { title: string; slug: string; order: number }[];
  };
}

export default function TOCSidebar({ currentSection }: TOCSidebarProps) {
  const forceCollapsed = !currentSection || currentSection.items.length <= 1;
  const hasContent = !!currentSection && currentSection.items.length > 0;

  return (
    <Sidebar forceCollapsed={forceCollapsed} hasContent={hasContent}>
      <ul>
        {currentSection?.items
          .sort((a, b) => a.order - b.order)
          .map((item) => (
            <motion.li key={item.slug} whileHover={{ scale: 1.1 }}>
              <Link
                href={`/content${item.slug}` }
                className="block py-1 hover:text-blue-500"
              >
                {item.title}
              </Link>
            </motion.li>
          ))}
      </ul>
    </Sidebar>
  );
}
