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
  AboutMissionSection,
  AboutTeamSection,
  AboutWhiteSection,
  AboutStatisticsSection,
  AboutTechnologySection,
  AboutDigiSaleSection,
  AboutCallToActionSection,
  PartnerRelationsHero,
  PartnerRelationsContent,
  MembershipHero,
  MembershipContent,
  BrandGuidelinesPage,
  DigiSalePage,
  DigiSaleTechnologyPage,
  DigiSalePortfolioPage,
  DigiSaleInvestmentPage,
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
      <BlankWhiteSection />
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
      <AboutMissionSection />
      <AboutTeamSection />
      <AboutWhiteSection />
      <AboutStatisticsSection />
      <AboutTechnologySection />
      <AboutDigiSaleSection />
      <AboutCallToActionSection />
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

const Membership = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <MembershipHero />
      <MembershipContent />
      <Footer />
    </div>
  );
};

const DigiSale = () => {
  return <DigiSalePage />;
};

const DigiSaleTechnology = () => {
  return <DigiSaleTechnologyPage />;
};

const DigiSalePortfolio = () => {
  return <DigiSalePortfolioPage />;
};

const DigiSaleInvestment = () => {
  return <DigiSaleInvestmentPage />;
};

const BrandGuidelines = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <BrandGuidelinesPage />
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
          <Route path="/membership" element={<Membership />} />
          <Route path="/brand-guidelines" element={<BrandGuidelines />} />
          <Route path="/digisale" element={<DigiSale />} />
          <Route path="/digisale/technology" element={<DigiSaleTechnology />} />
          <Route path="/digisale/portfolio" element={<DigiSalePortfolio />} />
          <Route path="/digisale/investment" element={<DigiSaleInvestment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;