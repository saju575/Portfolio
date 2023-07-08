// import { Inter } from "next/font/google";

import { About } from "./components/About";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <About />
    </>
  );
}
