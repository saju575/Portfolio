// import { Inter } from "next/font/google";

import { About } from "./components/About";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Projects } from "./components/projects/Projects";
import Qualification from "./components/qualification/Qualification";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <About />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
