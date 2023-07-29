import { m } from "framer-motion";
import React, { useMemo } from "react";
import cn from "classnames";

interface PopAnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const PopAnimatedText = ({
  text,
  delay = 0,
  className,
}: PopAnimatedTextProps) => {
  const letters = useMemo(() => text.split(""), [text]);
  return (
    <>
      {letters.map((letter, index) => (
        <m.span
          className={cn("inline-block", className)}
          initial={{ scale: 0, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.1,
            delay: 0.05 * index + delay,
          }}
          key={index}
        >
          {letter}
        </m.span>
      ))}
    </>
  );
};
