import Image from "next/image";
import proyojonImg from "../../../assets/images/proyojon.png";
import { ExternalLink } from "lucide-react";

const Proyojon = () => {
  return (
    <>
      <section className="main-container flex items-start gap-6 mt-12">
        <div className="bg-base-300 p-6 rounded-lg border border-white/40 max-w-xl ">
          <Image className="rounded-lg" src={proyojonImg} alt="proyojon" />
        </div>
        <div className="max-w-xl">
          <p className="text-base text-base-content-secondary">
            An advanced MERN stack-based Parcel Management System designed to
            simplify the booking and delivery process. With a focus on
            scalability, clean code, and a user-friendly experience, this
            platform provides role-based dashboards, real-time notifications,
            and seamless parcel tracking.
          </p>

          <ul className="mt-4 to-base-content-secondary">
            <li>
              <span className="text-base-content font-semibold">Frontend:</span>{" "}
              React, Tailwind CSS, Radix UI
            </li>
            <li>
              <span className="text-base-content font-semibold">Backend: </span>{" "}
              Node.js, Express.js MongoDB
            </li>
            <li>
              <span className="text-base-content font-semibold">
                Authentication:
              </span>{" "}
              Firebase, JWT
            </li>
            <li>
              <span className="text-base-content font-semibold">Payments:</span>{" "}
              Stripe API
            </li>
            <li>
              <span className="text-base-content font-semibold">
                Libraries:
              </span>{" "}
              Axios, ApexCharts, Leaflet, Mapbox, React Query, SweetAlert2,
              Lottie
            </li>
          </ul>
          <div className="mt-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-base-content">
                Challenges I Faced
              </h2>
              <p className="text-base-content-secondary text-base mt-2">
                Using Leaflet for maps and integrating Stripe for payments was
                quite a challenge for me!
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-base-content">
                Potential improvements and future plans
              </h2>
              <p className="text-base-content-secondary text-base mt-2">
                Implement a mail notification system for both the delivery
                personnel and the users. This system will notify them of any
                updates regarding their parcels, such as status changes,
                estimated delivery times, and any issues that may arise during
                the delivery process.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              className="inline-flex gap-1 items-center text-lg text-primary hover:underline hover:underline-offset-1 mt-4 transition-all delay-100"
              href="https://parcel-management-a12.web.app/"
              target="_blank"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
            <a
              className="inline-flex gap-1 items-center text-lg text-primary hover:underline hover:underline-offset-1 mt-4 transition-all delay-100"
              href="https://github.com/Durjoy96/parcel-management-client-side"
              target="_blank"
            >
              GitHub Repository <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyojon;
