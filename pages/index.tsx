import Head from "next/head";
import { Lato } from "next/font/google";
import { Header } from "../components/Header";
import { Preview } from "../components/Preview";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Preview />
      <Projects />
    </>
  );
}
