// components/Footer.tsx
import React from "react";
import { SITE_NAME } from "@/config";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>{SITE_NAME} © 2024 Mantis Research Group</p>
    </footer>
  );
}
