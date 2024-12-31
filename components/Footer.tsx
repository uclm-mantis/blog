// components/Footer.tsx
import React from "react";
import { SITE_NAME } from "../config";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© 2024 {SITE_NAME}</p>
    </footer>
  );
}
