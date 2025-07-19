import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Navigation, 
  HeroSection, 
  HomeHumanoidSection,
  ExperienceSection,
  PassiveIncomeSection,
  FlexibilitySection,
  EarningsCalculatorSection,
  AboutHeroSection,
  AboutWhiteSection,
  PartnerRelationsHero,
  PartnerRelationsContent,
  Footer 
} from "./components";

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      <HomeHumanoidSection />
      <ExperienceSection />
      <PassiveIncomeSection />
      <FlexibilitySection />
      <EarningsCalculatorSection />
      <Footer />
    </div>
  );
};

const About = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <AboutHeroSection />
      <AboutWhiteSection />
      <Footer />
    </div>
  );
};

const PartnerRelations = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <PartnerRelationsHero />
      <PartnerRelationsContent />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/partner-relations" element={<PartnerRelations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;