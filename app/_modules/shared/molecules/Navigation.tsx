import React from "react";
import { NavLink } from "../atoms/NavLink";

export const Navigation = () => {
  return (
    <nav className="p-2 flex absolute bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 rounded-full bg-opacity-70">
      <ul className="flex gap-2">
        <NavLink href="/">A</NavLink>
        <NavLink href="/">A</NavLink>
        <NavLink href="/">A</NavLink>
        <NavLink href="/">A</NavLink>
        <NavLink href="/">A</NavLink>
      </ul>
    </nav>
  );
};
