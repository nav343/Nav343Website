import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MouseType from "../../types/MouseType";

export default function Cursor({ setMousePosition, mousePosition, cursorVariant }: MouseType) {
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#A926F9",
      mixBlendMode: "overlay"
    }
  }

  return (
    <motion.div
      className="h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none bg-transparent bg-white z-50"
      variants={variants}
      animate={cursorVariant} />
  )
}
