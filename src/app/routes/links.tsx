import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as SkillsIcon } from "../assets/icons/skills.svg";
import { ReactComponent as ProjectsIcon } from "../assets/icons/projects.svg";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as MainIcon } from "../assets/icons/mail.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";

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
    href: "https://t.me/fenekdev",
    Icon: TelegramIcon,
    title: "Telegram",
    blank: true,
  },
  {
    href: "mailto:fenekdev@gmail.com",
    Icon: MainIcon,
    title: "Mail",
  },
  {
    href: "https://github.com/fenek-dev",
    Icon: GithubIcon,
    title: "Github",
    blank: true,
  },
];
