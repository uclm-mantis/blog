import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Mi Sitio Web' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/about">Acerca de</Link></li>
          </ul>
        </nav>
      </header>
      <main className={`${geistSans.variable} ${geistMono.variable} antialiased prose`}>{children}</main>
      <footer>
        <p>© 2024 Mi Sitio Web</p>
      </footer>
    </>
  );
}
