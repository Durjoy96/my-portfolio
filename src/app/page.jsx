import About from "@/components/about/About";
import Hero from "@/components/heroSection/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
