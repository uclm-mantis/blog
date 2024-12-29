import React from "react";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  sections: Section[];
  currentSlug?: string;
}

interface Section {
  name: string;
  slug: string;
  items: { title: string; slug: string; order: number }[];
}

export default function Layout({
  children,
  title = "Mi Sitio Web",
  sections,
  currentSlug,
}: LayoutProps) {
  const currentSection = sections?.find(
    (section) => section.slug === `/${currentSlug}`
  );

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
              {sections?.map((section) => (
                <li key={section.slug}>
                  <Link href={section.slug} className="hover:text-blue-400">
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Contenedor Principal */}
        <div className="flex flex-1 relative">
          {/* Contenido Principal */}
          <main className="flex-1 p-6 bg-gray-100">{children}</main>

          {/* Sidebar */}
          <Sidebar>
            <ul>
              {currentSection?.items
                .sort((a, b) => a.order - b.order)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`${currentSection.slug}${item.slug}`}
                      className="block py-1 hover:text-blue-500"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </Sidebar>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>© 2024 Mi Sitio Web</p>
        </footer>
      </div>
    </>
  );
}
