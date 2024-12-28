import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  sections: Section[];
  currentSlug?: string; // Slug actual para determinar la sección activa
}

interface Section {
  name: string;
  slug: string;
  items: { title: string; slug: string; order: number }[];
}

export default function Layout({ children, title = 'Mi Sitio Web', sections, currentSlug }: LayoutProps) {
  const currentSection = sections?.find(section => section.slug === `/${currentSlug}`);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        {/* Barra Superior */}
        <header className="bg-gray-800 text-white py-4 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Mi Sitio Web
            </Link>
            <ul className="flex space-x-4">
              {sections?.map(section => (
                <li key={section.slug}>
                  <Link href={section.slug} className="hover:text-blue-400">
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="flex flex-1">
          {/* Columna Lateral */}
          {currentSection && currentSection.items.length > 0 && (
            <aside className="w-64 bg-gray-100 border-r border-gray-300 p-4">
              <ul>
                {currentSection.items
                  .sort((a, b) => a.order - b.order)
                  .map(item => (
                    <li key={item.slug}>
                      <Link href={`${currentSection.slug}${item.slug}`} className="block py-1 hover:text-blue-500">
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </aside>
          )}

          {/* Contenido Principal */}
          <main className="flex-1 p-6">{children}</main>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>© 2024 Mi Sitio Web</p>
        </footer>
      </div>
    </>
  );
}
