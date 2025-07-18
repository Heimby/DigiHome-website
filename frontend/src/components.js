import React, { useState, useEffect } from 'react';

// Navigation Component
export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-white text-2xl font-bold">1X</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">NEO</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">A</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">STORIES</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">CAREERS</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">ABOUT</a>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">GET UPDATES</a>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1631882456892-54a30e92fe4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxodW1hbm9pZCUyMHJvYm90fGVufDB8fHx3aGl0ZXwxNzUyODE2ODA4fDA&ixlib=rb-4.1.0&q=85"
          alt="NEO Robot"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wide">
            NEO
            <span className="block text-4xl md:text-6xl font-thin text-gray-300 mt-2">
              Gamma
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The future of home robotics is here. Meet NEO Gamma, your intelligent humanoid companion.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Home Humanoid Section Component
export const HomeHumanoidSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('home-humanoid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home-humanoid" className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Home
              <span className="block text-gray-600">
                Humanoid
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The generational embodied AI assistant and companion
            </p>
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              NEO Gamma represents the next evolution in home robotics. With advanced AI capabilities, 
              natural movement, and intuitive interaction, it seamlessly integrates into your daily life 
              to assist, learn, and grow alongside your family.
            </p>
            <div className="mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Robot Image */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507162728832-5b8fdb5f99fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxodW1hbm9pZCUyMHJvYm90fGVufDB8fHx3aGl0ZXwxNzUyODE2ODA4fDA&ixlib=rb-4.1.0&q=85"
                alt="NEO Robot Face"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Capabilities Section Component
export const CapabilitiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('capabilities');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      title: "Natural Movement",
      description: "Advanced bipedal locomotion with human-like gait and balance",
      icon: "🚶"
    },
    {
      title: "AI-Powered Intelligence",
      description: "Powered by Redwood AI for complex task understanding and execution",
      icon: "🧠"
    },
    {
      title: "Household Tasks",
      description: "Laundry, cleaning, organization, and daily assistance",
      icon: "🏠"
    },
    {
      title: "Safe Design",
      description: "Soft materials and safety-first engineering for family environments",
      icon: "🛡️"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Built for Life
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            NEO Gamma is designed to understand and adapt to your home environment, 
            making it the perfect companion for modern families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-xl font-medium text-white mb-4">{capability.title}</h3>
              <p className="text-gray-300 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Technology Section Component
export const TechnologySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('technology');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Technology Image */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <img 
              src="https://images.unsplash.com/photo-1581092333322-31d2fd38a35e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlY2hub2xvZ3l8ZW58MHx8fHdoaXRlfDE3NTI4MTY4MjF8MA&ixlib=rb-4.1.0&q=85"
              alt="Robotics Technology"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Advanced
              <span className="block text-gray-600">
                Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Cutting-edge robotics meets artificial intelligence
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Redwood AI</h3>
                  <p className="text-gray-600">Our proprietary AI model enabling natural language understanding and complex task execution</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Embodied Intelligence</h3>
                  <p className="text-gray-600">Full-body coordination for seamless interaction with the physical world</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Adaptive Learning</h3>
                  <p className="text-gray-600">Continuous learning and adaptation to your family's unique preferences and routines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-6">1X</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading the future of humanoid robotics and AI. Building intelligent, 
              safe, and helpful robots for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NEO Gamma</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">EVE</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Redwood AI</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 1X Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};