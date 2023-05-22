import {
  ContactIcon,
  HomeIcon,
  ProjectsIcon,
  SkillsIcon,
  LinkedInIcon,
  MainIcon,
  TelegramIcon,
} from "../assets/icons";

export interface RouteType {
  href: string;
  Icon: React.FC<React.ComponentProps<"svg">>;
  title: string;
  divide?: boolean;
  blank?: boolean;
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
    divide: true,
  },
  {
    href: "https://t.me/m_fenek",
    Icon: TelegramIcon,
    title: "Telegram",
    blank: true,
  },
  {
    href: "mailto:makstreonin@gmail.com",
    Icon: MainIcon,
    title: "Mail",
  },
  {
    href: "https://www.linkedin.com/in/fenek",
    Icon: LinkedInIcon,
    title: "LinkedIn",
    blank: true,
  },
];
