import Head from "next/head";
import { Aside } from "../components/Aside";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Nav } from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind CSS</title>
      </Head>
      <Header />
      <Aside />
      <MainContent />
      <Nav />
    </>
  );
}
