import Image from "next/image";
import aboutImg from "../../assets/images/about_img.jpg";

const About = () => {
  return (
    <>
      <section className="main-container mt-32" id="about">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-6">
            <div className="w-56 h-52">
              <Image
                src={aboutImg}
                alt="about"
                className="h-full w-full rounded-lg object-cover object-top"
              ></Image>
            </div>
            <div className="space-y-5 max-w-lg">
              <p className="text-base font-medium text-base-content">
                Hey, It's Md Durjoy! 👋{" "}
              </p>
              <p className="text-base font-normal text-base-content-secondary">
                A web developer who loves building things that actually work and
                make people’s lives easier.
              </p>
              <p className="text-base font-normal text-base-content-secondary">
                My journey into programming started with pure curiosity. I loved
                tinkering with code, breaking things (a lot), and figuring out
                how to fix them. Over time, that curiosity turned into a
                passion, and now, I build websites using{" "}
                <span className="text-base-content font-medium">
                  React, JavaScript, Tailwindcss and Nextjs
                </span>
                .
              </p>
            </div>
          </div>
          <div className="space-y-5 mt-6">
            <p className="text-base font-normal text-base-content-secondary">
              <span className="text-base-content font-medium">
                What I enjoy most?
              </span>{" "}
              Solving problems and making the web a better place. Whether it’s
              crafting smooth user interfaces, optimizing performance, or
              debugging something that refuses to cooperate, I’m always up for
              the challenge.
            </p>
            <p className="text-base font-normal text-base-content-secondary">
              But hey, I’m not just about code! When I’m not at my desk, you’ll
              probably find me exploring new tech, reading books, or just
              hanging out with friends and family.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
