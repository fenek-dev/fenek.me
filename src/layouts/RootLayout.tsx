import { Dock } from "../shared/molecules/Dock";
import { LazyMotion, domAnimation } from "framer-motion";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <LazyMotion features={domAnimation}>
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Dock />
    </LazyMotion>
  );
};
