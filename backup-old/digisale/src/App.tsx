import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightIcon,
  PlayIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  UsersIcon
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-tech-black opacity-95 backdrop-blur-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="w-10 h-10 bg-gradient-digisale rounded-lg flex items-center justify-center">
              <span className="text-tech-black font-bold text-2xl">DS</span>
            </div>
            <span className="text-2xl font-bold text-white">DigiSale</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8" style={{ display: 'none' }}>
            <a href="#philosophy" className="text-tech-light hover:text-digisale-primary transition-colors">Philosophy</a>
            <a href="#technology" className="text-tech-light hover:text-digisale-primary transition-colors">Technology</a>
            <a href="#impact" className="text-tech-light hover:text-digisale-primary transition-colors">Impact</a>
            <a href="#investment" className="text-tech-light hover:text-digisale-primary transition-colors">Investment</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button button-primary"
            >
              Join the Future
            </motion.button>
          </div>
        </div>
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
        <div 
          className="absolute bg-digisale-primary rounded-full blur-3xl float-animation"
          style={{
            top: '25%',
            left: '25%',
            width: '384px',
            height: '384px',
            opacity: 0.2
          }}
        ></div>
        <div 
          className="absolute rounded-full blur-3xl float-animation" 
          style={{
            bottom: '25%',
            right: '25%',
            width: '320px',
            height: '320px',
            backgroundColor: '#00D2FF',
            opacity: 0.2,
            animationDelay: '2s'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '72px', lineHeight: '1.1' }}
          >
            Building Industry Leaders
            <br />
            <span 
              className="text-digisale-primary"
              style={{
                background: 'linear-gradient(to right, #C7FF8A, #00FF94)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Through AI Microteams
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-tech-light mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: '24px', maxWidth: '896px' }}
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
                <div 
                  className="text-digisale-primary mb-2 font-bold"
                  style={{ fontSize: '64px' }}
                >
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
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(199, 255, 138, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="button button-primary glow-effect flex items-center space-x-4"
            >
              <span>See Our Philosophy</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button button-secondary flex items-center space-x-4"
            >
              <PlayIcon className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute left-1/2 transform"
        style={{
          bottom: '32px',
          transform: 'translateX(-50%)',
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="border-2 border-digisale-primary rounded-full flex justify-center"
             style={{ width: '24px', height: '40px' }}>
          <div 
            className="bg-digisale-primary rounded-full"
            style={{ width: '4px', height: '12px', marginTop: '8px' }}
          ></div>
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
          <h2 className="text-6xl font-bold text-white mb-8">
            Our <span className="text-digisale-primary">Philosophy</span>
          </h2>
          <p className="text-xl text-tech-light max-w-3xl mx-auto leading-relaxed">
            We believe the future belongs to organizations that embrace AI as a fundamental 
            building block, not just a tool. Our philosophy shapes everything we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-12">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="rounded-2xl p-8 border border-tech-gray hover:border-digisale-primary transition-all"
              style={{ 
                backgroundColor: 'rgba(42, 42, 42, 0.5)',
                backdropFilter: 'blur(4px)'
              }}
            >
              <div 
                className="bg-gradient-digisale rounded-2xl flex items-center justify-center mb-6 hover:scale-110 transition-transform"
                style={{ width: '64px', height: '64px' }}
              >
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
          className="mt-20 text-center rounded-3xl p-12"
          style={{ 
            background: 'linear-gradient(to right, #0D0D0D, #2A2A2A)',
            border: '1px solid rgba(199, 255, 138, 0.3)'
          }}
        >
          <blockquote className="text-3xl font-light text-white italic mb-6">
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
    <div className="bg-tech-black min-h-screen">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
    </div>
  );
}
