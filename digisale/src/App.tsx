import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightIcon,
  PlayIcon,
  ChartBarIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  BoltIcon,
  StarIcon,
  TrophyIcon,
  UsersIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-tech-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-digisale rounded-lg flex items-center justify-center">
              <span className="text-tech-black font-bold text-xl">DS</span>
            </div>
            <span className="text-2xl font-bold text-white">DigiSale</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#philosophy" className="text-tech-light hover:text-digisale-primary transition-colors">Philosophy</a>
            <a href="#technology" className="text-tech-light hover:text-digisale-primary transition-colors">Technology</a>
            <a href="#impact" className="text-tech-light hover:text-digisale-primary transition-colors">Impact</a>
            <a href="#investment" className="text-tech-light hover:text-digisale-primary transition-colors">Investment</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-digisale text-tech-black px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Join the Future
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`h-0.5 bg-white mt-1 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-tech-black/95 backdrop-blur-md rounded-b-2xl"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="#philosophy" className="block text-tech-light hover:text-digisale-primary transition-colors">Philosophy</a>
                <a href="#technology" className="block text-tech-light hover:text-digisale-primary transition-colors">Technology</a>
                <a href="#impact" className="block text-tech-light hover:text-digisale-primary transition-colors">Impact</a>
                <a href="#investment" className="block text-tech-light hover:text-digisale-primary transition-colors">Investment</a>
                <button className="w-full bg-gradient-digisale text-tech-black px-6 py-3 rounded-full font-semibold">
                  Join the Future
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const [currentStats, setCurrentStats] = useState(0);
  
  const stats = [
    { value: "87M+ NOK", label: "Revenue Generated" },
    { value: "450+", label: "Industry Leaders Built" },
    { value: "98%", label: "AI Efficiency Gain" },
    { value: "15x", label: "Faster Growth" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-tech overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-digisale-primary/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-blue/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Industry Leaders
            <br />
            <span className="bg-gradient-to-r from-digisale-primary to-tech-green bg-clip-text text-transparent">
              Through AI Microteams
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-tech-light mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We don't just build software. We architect the future of business through 
            <span className="text-digisale-primary font-semibold"> AI-first microteams</span> that 
            transform industries and create market leaders.
          </motion.p>

          {/* Dynamic Stats */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStats}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold text-digisale-primary mb-2">
                  {stats[currentStats].value}
                </div>
                <div className="text-tech-light text-lg">
                  {stats[currentStats].label}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6 items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(199, 255, 138, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-digisale text-tech-black px-10 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:shadow-2xl transition-all glow-effect"
            >
              <span>See Our Philosophy</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-digisale-primary text-digisale-primary px-10 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-digisale-primary hover:text-tech-black transition-all"
            >
              <PlayIcon className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-digisale-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-digisale-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

// Philosophy Section
const PhilosophySection = () => {
  const philosophyPoints = [
    {
      title: "AI-First Architecture",
      description: "Every solution we build starts with AI at its core, not as an afterthought. We design systems that learn, adapt, and evolve.",
      icon: CpuChipIcon
    },
    {
      title: "Microteam Revolution",
      description: "Small, autonomous teams powered by AI can outperform traditional large organizations. We prove this daily.",
      icon: UsersIcon
    },
    {
      title: "Industry Transformation",
      description: "We don't just solve problems—we redefine entire industries through systematic innovation and breakthrough thinking.",
      icon: RocketLaunchIcon
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-tech-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Our <span className="text-digisale-primary">Philosophy</span>
          </h2>
          <p className="text-xl text-tech-light max-w-3xl mx-auto leading-relaxed">
            We believe the future belongs to organizations that embrace AI as a fundamental 
            building block, not just a tool. Our philosophy shapes everything we create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-tech-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-tech-gray hover:border-digisale-primary transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-digisale rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="w-8 h-8 text-tech-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
              <p className="text-tech-light leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-tech-black to-tech-gray rounded-3xl p-12 border border-digisale-primary/30"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-white italic mb-6">
            "The question isn't whether AI will transform business—it's whether 
            your organization will lead that transformation or be left behind."
          </blockquote>
          <cite className="text-digisale-primary font-semibold text-lg">
            — DigiSale Founding Principles
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="App bg-tech-black min-h-screen">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
    </div>
  );
}
