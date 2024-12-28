// components/NavBar.tsx
import Link from 'next/link';

interface NavBarProps {
  sections: {
    name: string;
    items: { title: string; slug: string; order: number }[];
  }[];
}

export default function NavBar({ sections }: NavBarProps) {
  return (
    <nav>
      <ul className="flex space-x-4">
        {sections.map((section) => (
          <li key={section.name} className="group relative">
            <span className="cursor-pointer font-bold">{section.name}</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link href={item.slug} className="block px-4 py-2 hover:bg-gray-200">{item.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
