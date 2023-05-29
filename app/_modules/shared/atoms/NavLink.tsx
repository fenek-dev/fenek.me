import Link from "next/link";
import React from "react";
import cn from "classnames";
import { HTMLMotionProps, m } from "framer-motion";

interface NavLinkProps extends HTMLMotionProps<"button"> {
  href: string;
  blank?: boolean;
}

export const NavLink = ({
  children,
  href,
  className,
  blank,
  ...props
}: React.PropsWithChildren<NavLinkProps>) => {
  return (
    <Link href={href} className="inline" target={blank ? "_blank" : ""}>
      <m.button className={cn("btn-rounded", className)} {...props}>
        {children}
      </m.button>
    </Link>
  );
};
