import Image from "next/image";
import Label from "../sectionLabel/Label";
import htmlImg from "../../assets/icons/html.png";
import cssImg from "../../assets/icons/css.png";
import tailwindcssImg from "../../assets/icons/tailwindcss.png";
import jsImg from "../../assets/icons/javascript.png";
import reactImg from "../../assets/icons/react.png";
import firebaseImg from "../../assets/icons/firebase.png";
import nodejsImg from "../../assets/icons/nodejs.png";
import expressImg from "../../assets/icons/express.png";
import mongodbImg from "../../assets/icons/mongodb.png";
import nextjsImg from "../../assets/icons/nextjs.png";

const Skills = () => {
  const technologies = [
    {
      title: "HTML5",
      imgUrl: htmlImg,
    },
    {
      title: "CSS3",
      imgUrl: cssImg,
    },
    {
      title: "Tailwindcss",
      imgUrl: tailwindcssImg,
    },
    {
      title: "JavaScript",
      imgUrl: jsImg,
    },
    {
      title: "React",
      imgUrl: reactImg,
    },
    {
      title: "Firebase",
      imgUrl: firebaseImg,
    },
    {
      title: "NodeJs",
      imgUrl: nodejsImg,
    },
    {
      title: "ExpressJs",
      imgUrl: expressImg,
    },
    {
      title: "Mongodb",
      imgUrl: mongodbImg,
    },
    {
      title: "NextJs",
      imgUrl: nextjsImg,
    },
  ];
  return (
    <>
      <section className="bg-base-100" id="skills">
        <div className="main-container mt-12 md:mt-20 lg:mt-32 py-12 md:py-20 lg:py-32">
          <Label text="Skills" />
          <h2 className="text-2xl md:text-4xl font-bold text-base-content mt-6">
            What I Bring to the Table
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 md:mt-12">
            {technologies.map((technology, idx) => (
              <div className="bg-base-200 rounded-lg p-6" key={idx}>
                <div className="w-14 h-14 mx-auto">
                  <Image
                    src={technology.imgUrl}
                    className="w-full h-full object-contain"
                    alt={technology.title}
                  />
                </div>
                <h2 className="text-xl font-bold mt-6 text-center">
                  {technology.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
