import Image from "next/image";
import parazImg from "../../../assets/images/paraz.png";
import { ExternalLink } from "lucide-react";

const Paraz = () => {
  return (
    <>
      <section className="main-container flex flex-col md:flex-row items-start gap-6 my-12 md:my-20 lg:my-32">
        <div className="bg-base-300 p-6 rounded-lg border border-white/40 max-w-xl ">
          <Image
            className="rounded-lg"
            src={parazImg}
            alt="paraz project screenshot"
          />
        </div>
        <div className="max-w-xl">
          <p className="text-base text-base-content-secondary">
            Paraz is an online sports equipment store that allows users to
            register, log in, and manage their equipment data. Users can add,
            update, and delete equipment items while interacting with the
            database. The website also offers both dark mode and light mode
            options for a customized experience.
          </p>

          <ul className="mt-4 text-base-content-secondary">
            <li>
              <span className="text-base-content font-semibold">Frontend:</span>{" "}
              React, Tailwind CSS
            </li>
            <li>
              <span className="text-base-content font-semibold">Backend:</span>{" "}
              Node.js, Express.js, MongoDB
            </li>
            <li>
              <span className="text-base-content font-semibold">
                Authentication:
              </span>{" "}
              Firebase
            </li>
            <li>
              <span className="text-base-content font-semibold">
                Libraries:
              </span>{" "}
              React-icons, React Rating Stars Component, React Fast Marquee,
              SweetAlert2, Swiper
            </li>
          </ul>
          <div className="mt-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-base-content">
                Challenges I Faced
              </h2>
              <p className="text-base-content-secondary text-base mt-2">
                Mongodb operations was quite a challenge for me!
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-base-content">
                Potential Improvements and Future Plans
              </h2>
              <p className="text-base-content-secondary text-base mt-2">
                I plan to enhance the user interface by incorporating more
                interactive elements and animations. Additionally, I aim to
                optimize the backend for better performance and scalability.
                Implementing a recommendation system for users based on their
                activity and preferences is also on the roadmap.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              className="inline-flex gap-1 items-center text-lg text-primary hover:underline hover:underline-offset-1 mt-4 transition-all delay-100"
              href="https://sports-equipment-store-a7db9.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
            <a
              className="inline-flex gap-1 items-center text-lg text-primary hover:underline hover:underline-offset-1 mt-4 transition-all delay-100"
              href="https://github.com/Durjoy96/sports-equipment-store-web  "
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paraz;
