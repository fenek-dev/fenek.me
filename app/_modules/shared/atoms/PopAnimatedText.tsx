import { motion } from "framer-motion";
import React, { useMemo } from "react";

interface PopAnimatedTextProps {
  text: string;
  delay?: number;
}

export const PopAnimatedText = ({
  text,
  delay = 0.2,
}: PopAnimatedTextProps) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <>
      {letters.map((letter, index) => (
        <motion.span
          className="inline-block"
          initial={{ scale: 0, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.1,
            delay: 0.1 * index + delay,
          }}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};
