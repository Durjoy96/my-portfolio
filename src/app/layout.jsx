import { Bricolage_Grotesque, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/navbar/Navbar";
import Footer from "@/shared/footer/Footer";
import Aos from "@/lib/aos";

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Durjoy | Web Developer",
  description:
    "Portfolio of Md Durjoy, a web developer specializing in Next.js and React.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body
        className={`${bricolageGrotesque.variable} ${pacifico.variable} antialiased font-bricolageGrotesque`}
      >
        <header>
          <Navbar />
        </header>
        <main>
          {" "}
          <Aos>{children}</Aos>{" "}
        </main>
        <Footer />
      </body>
    </html>
  );
}
