import Image from "next/image";
import titlyImg from "../../../assets/images/titly.png";
import { ExternalLink } from "lucide-react";

const Titly = () => {
  return (
    <>
      <section className="main-container flex flex-col md:flex-row items-start gap-6 my-12 md:my-20 lg:my-32">
        <div className="bg-base-300 p-6 rounded-lg border border-white/40 max-w-xl ">
          <Image
            className="rounded-lg"
            src={titlyImg}
            alt="Titly project screenshot"
          />
        </div>
        <div className="max-w-xl">
          <p className="text-base text-base-content-secondary">
            Titly is an online tutor booking platform that connects users with
            tutors across various languages and subjects. It offers an
            easy-to-use interface for finding, reviewing, and booking tutors,
            making learning accessible and convenient for everyone.
          </p>

          <ul className="mt-4 text-base-content-secondary">
            <li>
              <span className="text-base-content font-semibold">Frontend:</span>{" "}
              React, Tailwind CSS, Daisy UI
            </li>
            <li>
              <span className="text-base-content font-semibold">Backend:</span>{" "}
              Node.js, Express.js, MongoDB
            </li>
            <li>
              <span className="text-base-content font-semibold">
                Authentication:
              </span>{" "}
              Firebase, JWT
            </li>
            <li>
              <span className="text-base-content font-semibold">
                Libraries:
              </span>{" "}
              Axios, React-countUp, React-icons, React-tooltip, SweetAlert2,
              Lottie
            </li>
          </ul>
          <div className="mt-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-base-content">
                Challenges I Faced
              </h2>
              <p className="text-base-content-secondary text-base mt-2">
                Using JWT for security and real-time data updates on the UI was
                quite a challenge for me!
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-base-content">
                Potential Improvements and Future Plans
              </h2>
              <p className="text-base-content-secondary text-base mt-2">
                I plan to integrate a chatting feature to facilitate direct
                communication between tutors and students. The search
                functionality with advanced filters and sorting options to
                improve user experience.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              className="inline-flex gap-1 items-center text-lg text-primary hover:underline hover:underline-offset-1 mt-4 transition-all delay-100"
              href="https://tutor-booking-cadf2.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
            <a
              className="inline-flex gap-1 items-center text-lg text-primary hover:underline hover:underline-offset-1 mt-4 transition-all delay-100"
              href="https://github.com/Durjoy96/tutor-booking-client-side"
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

export default Titly;
