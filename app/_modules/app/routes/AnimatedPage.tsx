"use client";
import React, { forwardRef, useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type AnimatedPageProps = HTMLMotionProps<"div">;
type AnimatedPageRef = React.ForwardedRef<HTMLDivElement>;

function AnimatedPage(
  { children, ...rest }: AnimatedPageProps,
  ref: AnimatedPageRef
) {
  const onTheRight = { opacity: 0 };
  const inTheCenter = { opacity: 1 };
  const onTheLeft = { opacity: 0 };

  const transition = { duration: 0.5, ease: "easeInOut" };

  return (
    <motion.div
      ref={ref}
      initial={onTheRight}
      animate={inTheCenter}
      exit={onTheLeft}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(AnimatedPage);
