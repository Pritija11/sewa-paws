import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import OurWork from "@/components/sections/OurWork";
import Impact from "@/components/sections/Impact";
import Stories from "@/components/sections/Stories";
import GetInvolved from "@/components/sections/GetInvolved";
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurWork />
      <Impact />
      <Stories />
      <GetInvolved />
      <Contact />
    </main>
  );
}