import React from "react";
import cn from "classnames";
import { HTMLMotionProps, m } from "framer-motion";
import { Link } from "react-router-dom";

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
    <Link to={href} className="inline" target={blank ? "_blank" : ""}>
      <m.button className={cn("btn-rounded", className)} {...props}>
        {children}
      </m.button>
    </Link>
  );
};
