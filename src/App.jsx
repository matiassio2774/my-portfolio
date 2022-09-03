import "./App.css";
import AboutMeSection from "./components/AboutMeSection";
import MainContent from "./components/MainContent";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App w-full flex flex-col justify-center  px-8 pt-20  dark:bg-gray-900 dark:text-slate-200 sm:px-20 md:px-30">
      <MainContent />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
