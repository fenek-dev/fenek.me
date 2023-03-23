import Head from "next/head";
import { Lato } from "next/font/google";
import { Header } from "../components/Header";
import { Preview } from "../components/Preview";

export default function Home() {
  return (
    <>
      <Header />
      <Preview />
    </>
  );
}
