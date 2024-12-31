import { motion } from 'framer-motion';
import React from "react";
import Link from "next/link";
import { SITE_NAME } from "../config";

interface HeaderProps {
  sections: { name: string; slug: string }[];
}

export default function Header({ sections }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <nav className="max-w-7xl container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-white"
        >
          <Link href="/" className="text-2xl font-bold">
            {SITE_NAME}
          </Link>
        </motion.div>
        <ul className="flex space-x-4">
          {sections.map((section) => (
            <motion.li key={section.slug} whileHover={{ scale: 1.1 }}>
              <Link href={section.slug} className="hover:text-blue-400">
                {section.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
