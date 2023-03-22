import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import cn from "classnames";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={cn(
        lato.className,
        "h-screen w-screen bg-gradient-radial from-[#E5000C] to-[#4E0005]"
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
