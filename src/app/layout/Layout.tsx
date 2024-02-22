import React from "react";
import { Grid } from "./Grid";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="w-full h-screen">
      {children}
      <Grid />
    </main>
  );
};
