import Image from "next/image";
import Label from "../sectionLabel/Label";
import proyojonImg from "../../assets/images/proyojon.png";
import titlyImg from "../../assets/images/titly.png";
import parazImg from "../../assets/images/paraz.png";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Proyojon",
      url: "/projects/proyojon",
      image: proyojonImg,
    },
    {
      title: "Titly",
      url: "",
      image: titlyImg,
    },
    {
      title: "Paraz",
      url: "",
      image: parazImg,
    },
  ];
  return (
    <>
      <section className="main-container py-12 md:py-20 lg:py-32" id="projects">
        <div className="">
          <Label text="Projects" />
          <h2 className="text-2xl md:text-4xl font-bold text-base-content mt-6">
            Built with Code, Fueled by Passion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-base-300 p-6 rounded-lg border border-white/40"
              >
                <Image
                  className="rounded-lg"
                  src={project.image}
                  key={project.title}
                />
                <h3 className="mt-6 text-2xl font-medium text-base-content">
                  {project.title}
                </h3>
                <Link
                  href={project.url}
                  className="mt-2 underline underline-offset-2 inline-flex items-center gap-1 text-base text-base-content-secondary hover:text-primary transition-all delay-100"
                >
                  Details
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
