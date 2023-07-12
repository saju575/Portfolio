import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/navbar/SideBar";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Portfolio | Sakil Ahmed",
  description: "Personal portfolio of Sakil Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
