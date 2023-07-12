// import { Inter } from "next/font/google";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />

      <About />
      <Qualification />
      <Projects />
      <Contact />
    </>
  );
}
