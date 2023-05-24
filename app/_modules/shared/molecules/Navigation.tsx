"use client";
import React from "react";
import { NavLink } from "../atoms/NavLink";
import { ROUTES } from "../../app/routes/links";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <motion.nav
      className="p-2 flex fixed bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 rounded-full bg-opacity-80"
      initial={{ bottom: "-5rem" }}
      animate={{ bottom: "1.5rem" }}
      transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
      aria-label="Main"
    >
      <ul className="flex gap-2">
        {ROUTES.map(({ href, Icon, title, divide, blank }, index) => (
          <React.Fragment key={index}>
            <motion.li
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.2,
                delay: 0.2 * index + 0.4,
              }}
              whileTap={{
                scale: 0.8,
                transition: {
                  delay: 0,
                },
              }}
            >
              <NavLink
                data-checked={pathname === href}
                href={href}
                blank={blank}
                className="group relative 
              data-[checked=true]:before:block before:hidden before:w-1 before:h-1 before:rounded before:bg-stone-500 before:absolute before:bottom-1"
                title={title}
                whileHover={{
                  scale: 2,
                  translateY: "-1.5rem",
                  marginRight: "1.5rem",
                  marginLeft: "1.5rem",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 0.2,
                  mass: 0.5,
                }}
              >
                <Icon className="fill-stone-500 group-hover:fill-stone-400 transition-all duration-300" />
              </NavLink>
            </motion.li>
            {divide && <li className="h-full w-px bg-neutral-700 mx-1" />}
          </React.Fragment>
        ))}
      </ul>
    </motion.nav>
  );
};
