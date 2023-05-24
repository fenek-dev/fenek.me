import HomeIcon from "../assets/icons/home.svg";
import SkillsIcon from "../assets/icons/skills.svg";
import ProjectsIcon from "../assets/icons/projects.svg";
import TelegramIcon from "../assets/icons/telegram.svg";
import MainIcon from "../assets/icons/mail.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";

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
  {
    href: "https://github.com/MaksFenek",
    Icon: GithubIcon,
    title: "Github",
    blank: true,
  },
];
