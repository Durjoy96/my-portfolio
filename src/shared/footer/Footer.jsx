import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-base-100 py-3 md:py-4 lg:py-5">
        <div className="main-container py-2 md:py-4">
          <div className="flex items-center justify-between w-full">
            <div>
              <Link href="/">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  durjoy.dev
                </h2>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://github.com/Durjoy96"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="hover:stroke-primary transition-all delay-100" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-durjoy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="hover:stroke-primary transition-all delay-100" />
              </a>
              <a
                href="https://web.facebook.com/NaymurRahmanDurjoy11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="hover:stroke-primary transition-all delay-100" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
