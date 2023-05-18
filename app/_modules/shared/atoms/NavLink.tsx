import Link from "next/link";
import React from "react";
import cn from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";

interface NavLinkProps extends HTMLMotionProps<"button"> {
  href: string;
}

export const NavLink = ({
  children,
  href,
  className,
  ...props
}: React.PropsWithChildren<NavLinkProps>) => {
  return (
    <Link href={href} className="inline">
      <motion.button
        className={cn(
          "w-12 h-12 bg-neutral-700 rounded-full bg-gradient-to-tr from-neutral-700/50 via-neutral-700 to-neutral-800/50 shadow-inner shadow-neutral-600/60 flex justify-center items-center",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    </Link>
  );
};
