// components/TOCSidebar.tsx
import { motion } from 'framer-motion';
import React from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { slug2anchor } from '@/lib/content';

interface TOCSidebarProps {
  currentSection?: {
    slug: string;
    items: { title: string; slug: string; order: number }[];
  };
  isSinglePage?: boolean;
}

export default function TOCSidebar({ currentSection, isSinglePage }: TOCSidebarProps) {
  const forceCollapsed = !currentSection || currentSection.items.length <= 1;
  const hasContent = !!currentSection && currentSection.items.length > 0;

  return (
    <Sidebar forceCollapsed={forceCollapsed} hasContent={hasContent}>
      <ul>
        {currentSection?.items
          .sort((a, b) => a.order - b.order)
          .map((item) => {
            const slug = (isSinglePage ? `#${slug2anchor(item.slug)}` : `/content${item.slug}`);
            return (
              <motion.li key={item.slug} whileHover={{ scale: 1.1 }}>
                <Link href={slug} className="block py-1 hover:text-blue-500">
                  {item.title}
                </Link>
              </motion.li>
            )
          }
        )}
      </ul>
    </Sidebar>
  );
}
