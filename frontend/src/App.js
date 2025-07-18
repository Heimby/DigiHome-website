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
  AboutHeroSection,
  AboutWhiteSection,
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;