import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setInitialized(true);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.aside
        className="
          pointer-events-auto
          absolute
          top-0
          bottom-0
          right-0
          bg-gray-100
          shadow-lg
          border-l
          border-gray-300
          overflow-hidden
          z-30
        "
        initial={{ width: 0 }}
        animate={{ width: isOpen || isLargeScreen ? "200px" : "0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 h-full">{children}</div>
      </motion.aside>

      {!isLargeScreen && (
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
          top: "calc(50% - 40px)", // Centrado exacto
        }}
        onClick={() => setIsOpen(!isOpen)}
        animate={initialized ? { right: isOpen ? 200 : 0 } : undefined}
        initial={{ right: 0 }}
        transition={initialized ? { duration: 0.5 } : { duration: 0 }}
        whileTap={{ scale: 0.95 }}
      >
        {!isOpen ? (
          // SVG para la flecha hacia la izquierda
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        ) : (
          // SVG para la flecha hacia la derecha
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        )}
      </motion.button>
      
      )}
    </div>
  );
}
