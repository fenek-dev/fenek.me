import { Metadata } from "next";
import { Navigation } from "./_modules/shared/molecules/Navigation";
import "./globals.scss";
import { Fira_Mono } from "next/font/google";

const fira = Fira_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Fenek | Front-end Developer",
  description: "A Frontend developer, React adept and Typescript propagandist",
  keywords: ["fenek", "front-end", "react", "frontend", "frontend developer"],
  alternates: {
    canonical: "https://fenek.vercel.app/",
  },
  robots: {
    follow: true,
    index: true,
  },
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
