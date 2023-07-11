// import { Inter } from "next/font/google";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SideBar from "./components/navbar/SideBar";
import Projects from "./components/projects/Projects";
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
