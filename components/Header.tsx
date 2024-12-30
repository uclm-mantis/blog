// components/Header.tsx
import React from "react";
import Link from "next/link";

interface HeaderProps {
  sections: { name: string; slug: string }[];
}

export default function Header({ sections }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Mi Sitio Web
        </Link>
        <ul className="flex space-x-4">
          {sections.map((section) => (
            <li key={section.slug}>
              <Link href={section.slug} className="hover:text-blue-400">
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
