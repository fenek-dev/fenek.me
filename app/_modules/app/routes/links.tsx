import { HomeIcon, ProjectsIcon, SkillsIcon } from "../assets/icons";

export interface RouteType {
  href: string;
  Icon: React.FC<React.ComponentProps<"svg">>;
  title: string;
}

export const ROUTES: RouteType[] = [
  {
    href: "/",
    Icon: HomeIcon,
    title: "Home",
  },
  {
    href: "/skills",
    Icon: SkillsIcon,
    title: "Skills",
  },
  {
    href: "/projects",
    Icon: ProjectsIcon,
    title: "Projects",
  },
];
