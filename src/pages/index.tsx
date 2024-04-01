import { GetStaticPropsContext } from "next";
import HeroSection from "@/partials/Hero";
import AboutSection from "@/partials/About";
import ExperienceSection from "@/partials/Experiences";
import EducationSection from "@/partials/Education";
import ProjectsSection from "@/partials/Projects";
import SkillsSection from "@/partials/Skills";
import CertificationsSection from "@/partials/Certifications";
import ContactSection from "@/partials/Contact";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      metadata: {
        title: "Portfolio of Komi Moise TENGUE",
        description:
          "This is the portfolio of Komi Moise TENGUE. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges."
      },
      messages: (await import(`../i18n/${locale}.json`)).default
    }
  };
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
