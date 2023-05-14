import Link from "next/link";
import React from "react";

interface NavLinkProps extends React.ComponentProps<"button"> {
  href: string;
}

export const NavLink = ({
  children,
  href,
  ...props
}: React.PropsWithChildren<NavLinkProps>) => {
  return (
    <Link href={href} className="w-10 h-10">
      <button
        className="w-10 h-10 bg-neutral-700 rounded-full bg-gradient-to-tr from-neutral-700/50 via-neutral-700 to-neutral-800/50 shadow-inner shadow-neutral-600/60"
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};
