import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "./symbols";

interface SidebarProps {
  children: ReactNode;
  hasContent?: boolean; // Nuevo atributo opcional para verificar si hay contenido
}

export default function Sidebar({
  children,
  hasContent = true,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true); // Marca el slider como inicializado para animaciones
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.aside
        className="pointer-events-auto absolute top-0 bottom-0 right-0 bg-gray-100 shadow-lg border-l border-gray-300 overflow-hidden z-30"
        initial={{ width: 0 }}
        animate={{
          width: isOpen ? "200px" : "0px",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 h-full">{children}</div>
      </motion.aside>

      {hasContent && (
        <motion.button
          className="
            pointer-events-auto
            absolute
            text-white
            rounded-l-md
            shadow-md
            bg-gray-500
            z-40
            flex
            items-center
            justify-center
          "
          style={{
            width: "20px",
            height: "80px",
            top: "calc(50vh - 40px)", // Centrado exacto
          }}
          onClick={() => setIsOpen(!isOpen)}
          animate={initialized ? { right: isOpen ? 200 : 0 } : undefined}
          initial={{ right: 0 }}
          transition={initialized ? { duration: 0.5 } : { duration: 0 }}
          whileTap={{ scale: 0.95 }}
        >
          {!isOpen ? (<ArrowLeftIcon />) : (<ArrowRightIcon />)}
        </motion.button>
      )}
    </div>
  );
}
