import { Navigation } from "./_modules/shared/molecules/Navigation";
import "./globals.scss";
import { Fira_Mono } from "next/font/google";

const fira = Fira_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Fenek | Front-end Developer",
  description: "Fenek Front-end Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fira.className} bg-main-active`}>
        <main className="container mx-auto">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
