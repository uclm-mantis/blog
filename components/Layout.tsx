// components/Layout.tsx
import React from "react";
import Head from "next/head";
import Header from "./Header";
import TOCSidebar from "./TOCSidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  sections: Section[];
  currentSection?: string;
  isSinglePage?: boolean;
}

interface Section {
  name: string;
  slug: string;
  items: { title: string; slug: string; order: number }[];
}

export default function Layout({
  children,
  title,
  sections,
  currentSection,
  isSinglePage
}: LayoutProps) {

  const section = sections.find((sec) => (sec.name === currentSection)) as Section;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header sections={sections} />
        <div className="flex flex-1 justify-center relative">
          <main className="flex-1 flex justify-center p-6 bg-gray-100 transition-all duration-500">
            <div className="w-full max-w-screen-lg bg-white shadow-lg rounded">
              {children}
            </div>
          </main>
          <TOCSidebar
            currentSection={section}
            isSinglePage={isSinglePage || false}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}