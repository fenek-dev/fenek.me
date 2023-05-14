"use client";
import React from "react";
import { NavLink } from "../atoms/NavLink";
import { ROUTES } from "../../app/routes/links";

export const Navigation = () => {
  return (
    <nav className="p-2 flex absolute bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 rounded-full bg-opacity-80 ">
      <ul className="flex gap-2">
        {ROUTES.map(({ href, Icon, title }) => (
          <NavLink
            href={href}
            key={href}
            className="group hover:scale-[2] hover:-translate-y-6 hover:mx-6 transition-all duration-300"
            title={title}
          >
            <Icon className="fill-stone-500 group-hover:fill-stone-400 transition-all duration-300" />
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
