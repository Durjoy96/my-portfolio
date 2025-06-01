import Image from "next/image";
import Label from "../sectionLabel/Label";
import proyojonImg from "../../assets/images/proyojon.png";
import titlyImg from "../../assets/images/titly.png";
import parazImg from "../../assets/images/paraz.png";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Proyojon",
      url: "/projects/proyojon",
      image: proyojonImg,
    },
    {
      title: "Titly",
      url: "/projects/titly",
      image: titlyImg,
    },
    {
      title: "Paraz",
      url: "/projects/paraz",
      image: parazImg,
    },
  ];
  return (
    <>
      <section className="bg-base-200 py-12 md:py-20 lg:py-32" id="projects">
        <div className="main-container">
          <Label text="Projects" />
          <h2 className="text-2xl md:text-4xl font-bold text-base-content mt-6">
            Built with Code, Fueled by Passion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
            {projects.map((project, idx) => (
              <Link key={idx} href={project.url}>
                <div
                  data-aos="fade-up"
                  className="bg-transparent rounded-lg group"
                >
                  <div className="relative">
                    <Image
                      className="rounded-lg"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="group-hover:bg-black/50 absolute top-0 bottom-0 left-0 right-0 rounded-lg"></div>
                    <Link
                      href={project.url}
                      className="hidden group-hover:inline-flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 primary-btn"
                    >
                      View Details
                    </Link>
                  </div>
                  <h3 className="mt-3 group-hover:text-primary text-xl font-medium text-base-content-secondary">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
