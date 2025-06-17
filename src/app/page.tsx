import BioSection from "@/components/sections/BioSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Page() {
  return (
    <>
      <BioSection className="mt-28" />
      <SkillsSection />
      <ProjectsSection className="pb-5 mt-28" />
      <ContactSection className="my-20" />
    </>
  );
}
