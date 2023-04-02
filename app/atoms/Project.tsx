import React from "react";
import { Bebas_Neue } from "next/font/google";
import cn from "classnames";

const font = Bebas_Neue({ weight: "400", subsets: ["latin"] });

interface ProjectProps {
  role: string;
  category: string;
  name: string;
  href: string;
}

export const Project = ({
  role,
  category,
  name,
  href,
  children,
}: React.PropsWithChildren<ProjectProps>) => {
  return (
    <div className="w-full border-b-gray-400 border-b-2 py-4">
      <div className="px-24 flex justify-between">
        {children}
        <span className="uppercase ml-auto block text-sm">
          {role} / <br />
          {category}
        </span>
      </div>
      <div>
        <a
          href={href}
          className={cn(
            font.className,
            "uppercase text-[12vw] whitespace-nowrap"
          )}
        >
          {name}
        </a>
      </div>
    </div>
  );
};
