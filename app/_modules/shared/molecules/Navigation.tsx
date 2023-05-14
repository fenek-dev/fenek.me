"use client";
import React from "react";
import { NavLink } from "../atoms/NavLink";
import { ROUTES } from "../../app/routes/links";
import {
  useSpring,
  animated,
  useTransition,
  useSpringRef,
  useChain,
} from "@react-spring/web";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  const appearRef = useSpringRef();
  const appear = useSpring({
    ref: appearRef,
    from: { bottom: "-5rem" },
    to: { bottom: "1.5rem" },
  });

  const transRef = useSpringRef();
  const transitions = useTransition(ROUTES, {
    ref: transRef,
    trail: 100,
    from: { scale: 0 },
    enter: { scale: 1 },
    leave: { scale: 0 },
  });

  useChain([appearRef, transRef], [0, 0.4]);

  return (
    <animated.nav
      className="p-2 flex fixed bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 rounded-full bg-opacity-80 "
      style={{
        ...appear,
      }}
    >
      <ul className="flex gap-2">
        {transitions((style, { href, Icon, title }) => (
          <animated.span style={style as any} key={href}>
            <NavLink
              aria-checked={pathname === href}
              href={href}
              className="group relative hover:scale-[2] hover:-translate-y-6 hover:mx-6 transition-all duration-300 
              aria-checked:before:block before:hidden before:w-1 before:h-1 before:rounded before:bg-stone-500 before:absolute before:bottom-1"
              title={title}
            >
              <Icon className="fill-stone-500 group-hover:fill-stone-400 transition-all duration-300" />
            </NavLink>
          </animated.span>
        ))}
      </ul>
    </animated.nav>
  );
};
