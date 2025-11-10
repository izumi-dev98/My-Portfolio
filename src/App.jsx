import React from "react";
import Navbar from "./componemts/Navbar";
import HeroSection from "./componemts/HeroSection";
import SkillsProgress from "./componemts/SkillsProgress";
import ProjectsSection from "./componemts/ProjectsSection";
import WorkExperienceSection from "./componemts/WorkExperienceSection";
import ContactForm from "./componemts/ContactForm";
import Footer from "./componemts/Footer";


function App() {
  return (
     <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <SkillsProgress />
      <ProjectsSection />
      <WorkExperienceSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
