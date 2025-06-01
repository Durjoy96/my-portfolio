import Image from "next/image";
import bannerImg from "../../assets/images/banner.png";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="main-container mt-12">
        <div className="flex flex-col-reverse gap-8 md:gap-12 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
          <div data-aos="fade-right" className="max-w-xl">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                <span className="font-pacifico">1st</span> , I'm a{" "}
                <mark className="bg-[#D2CBC6] ">
                  <span className="text-[#2E1A05] inline-block p-2 -rotate-1">
                    Web Developer
                  </span>
                </mark>{" "}
                <span className="font-pacifico">2nd</span>, Hello, I'm Md
                Durjoy!
                <span className="text-3xl md:text-5xl lg:text-6xl">😊</span>
              </h1>
            </div>
            <p className="text-sm md:text-base font-normal text-base-content-secondary mt-5">
              I love building clean, user-friendly websites that just work.
              Let’s make something awesome together!
            </p>
            <Link
              href="https://drive.google.com/file/d/1yyz-CtcpEas52duuQJEV1PIU2R8IGO_y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary-btn mt-12">Download resume</button>
            </Link>
          </div>
          <div data-aos="fade-up">
            <Image src={bannerImg} alt="hero-image"></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
