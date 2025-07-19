import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowTrendingUpIcon,
  HandRaisedIcon,
  CpuChipIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
  SparklesIcon,
  HomeIcon,
  ArrowTopRightOnSquareIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EyeIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';

// Navigation Component with Mobile Menu Functionality
export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup body scroll lock when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      // Store current scroll position
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      // Lock body scroll and maintain position
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore body scroll and position
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position
      window.scrollTo(0, scrollPosition);
    }
    
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    
    // Restore body scroll and position
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // Restore scroll position
    window.scrollTo(0, scrollPosition);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <header role="banner">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`} aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" aria-label="DigiHome homepage">
                <img 
                  src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomePinkLogoWhiteText.svg" 
                  alt="DigiHome" 
                  className="h-6 sm:h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-6 lg:space-x-8" role="menubar">
              <li role="none">
                <Link 
                  to="/membership" 
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                  role="menuitem"
                >
                  Membership
                </Link>
              </li>
              <li role="none">
                <Link 
                  to="/partner-relations" 
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                  role="menuitem"
                >
                  Partner Relations
                </Link>
              </li>
              <li role="none">
                <Link 
                  to="/about" 
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                  role="menuitem"
                >
                  About
                </Link>
              </li>
            </ul>
            
            <div className="hidden md:block">
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Sign In</a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden fixed inset-0 z-50 bg-black backdrop-blur-md" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
            onClick={closeMobileMenu}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div 
              className="fixed inset-y-0 right-0 max-w-xs w-full shadow-2xl border-l border-gray-700 p-6" 
              style={{ 
                backgroundColor: '#000000',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                minHeight: '100vh',
                minHeight: '100dvh'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={closeMobileMenu} aria-label="DigiHome homepage">
                  <img 
                    src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomePinkLogoWhiteText.svg" 
                    alt="DigiHome" 
                    className="h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </Link>
                <button 
                  onClick={closeMobileMenu}
                  className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
                  aria-label="Close mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav aria-label="Mobile navigation">
                <h2 id="mobile-menu-title" className="sr-only">Mobile Menu</h2>
                <ul className="space-y-6" role="menu">
                  <li role="none">
                    <Link 
                      to="/membership" 
                      className="block text-white hover:text-[#D4A2FF] transition-colors font-medium text-lg py-3" 
                      onClick={closeMobileMenu}
                      role="menuitem"
                    >
                      Membership
                    </Link>
                  </li>
                  <li role="none">
                    <Link 
                      to="/partner-relations" 
                      className="block text-white hover:text-[#D4A2FF] transition-colors font-medium text-lg py-3" 
                      onClick={closeMobileMenu}
                      role="menuitem"
                    >
                      Partner Relations
                    </Link>
                  </li>
                  <li role="none">
                    <Link 
                      to="/about" 
                      className="block text-white hover:text-[#D4A2FF] transition-colors font-medium text-lg py-3" 
                      onClick={closeMobileMenu}
                      role="menuitem"
                    >
                      About
                    </Link>
                  </li>
                  <li role="none">
                    <a 
                      href="#" 
                      className="block text-white hover:text-[#D4A2FF] transition-colors font-medium text-lg py-3"
                      role="menuitem"
                    >
                      Sign In
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Section Component with Mobile Optimization
export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 min-h-screen" role="main">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//7647259-uhd_3840_2160_24fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzIi8+Cjwvc3ZnPgo="
          aria-label="Background video showcasing DigiHome properties"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-20">
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-6 sm:mb-8">
            <img 
              src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomeLong.svg" 
              alt="DigiHome - AI-powered property management platform" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto mx-auto mb-4 sm:mb-6"
            />
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            The future of home rentals is here. Homes and experiences that move with you across the world.
          </h1>
          
          {/* Action Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto px-4">
            <button 
              onClick={() => scrollToSection('home-humanoid')}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#D4A2FF] hover:bg-[#c490ff] text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap text-sm sm:text-base"
              aria-describedby="find-home-description"
            >
              Find a Home
            </button>
            <span id="find-home-description" className="sr-only">Browse available properties and find your perfect home</span>
            <button 
              onClick={() => scrollToSection('home-humanoid')}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-transparent border-2 border-[#D4A2FF] hover:bg-[#D4A2FF] text-[#D4A2FF] hover:text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
              aria-describedby="become-owner-description"
            >
              Become a DigiHome Owner
            </button>
            <span id="become-owner-description" className="sr-only">Learn about partnering with DigiHome to monetize your property</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" role="presentation">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center" aria-label="Scroll down indicator">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </main>
  );
};

// Property Card Component with Simplified Info and Ellipsis
export const PropertyCard = ({ property }) => {
  return (
    <div className="flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Image Container with Overlay Info */}
      <div className="relative h-72 sm:h-80 md:h-96 lg:h-[520px] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        
        {/* Info Box Overlay */}
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4 bg-white rounded-xl p-2 sm:p-3 md:p-4 shadow-lg">
          <div className="flex items-start gap-2 sm:gap-3">
            {/* DigiHome Logo Square */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex-shrink-0 overflow-hidden">
              <img 
                src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//SquareDigiHomePinkBlack.svg" 
                alt="DigiHome" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-1 sm:mb-2 truncate">{property.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm truncate">{property.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile-Optimized Search Bar Component
export const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchData, setSearchData] = useState({
    location: '',
    moveIn: '',
    moveOut: '',
    guests: '',
    rooms: 'any'
  });

  const roomOptions = ['any', 'studio+', '1+', '2+'];

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search with:', searchData);
    // Handle search logic here
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {!isExpanded ? (
        // Collapsed State - Mobile Optimized
        <div 
          onClick={handleExpand}
          className="bg-white rounded-full shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300 w-full"
        >
          <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex-1 text-gray-500 font-medium text-sm sm:text-base">Where?</div>
            <div className="text-gray-300 mx-2 sm:mx-4">︱</div>
            <div className="flex-1 text-gray-500 font-medium text-sm sm:text-base">When?</div>
            <div className="text-gray-300 mx-2 sm:mx-4">︱</div>
            <button className="bg-[#D4A2FF] text-black px-3 sm:px-6 py-2 rounded-full font-medium hover:bg-[#c490ff] transition-colors text-sm sm:text-base">
              Search
            </button>
          </div>
        </div>
      ) : (
        // Expanded State - Fully Mobile Optimized
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 transition-all duration-300 ease-out w-full">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={handleCollapse}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search Fields - Mobile Stacked Layout */}
          <div className="space-y-4 mb-4">
            {/* Where */}
            <div className="w-full">
              <label className="block text-xs font-medium text-gray-500 mb-2">Where?</label>
              <input
                type="text"
                value={searchData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Search by city"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A2FF] focus:border-transparent outline-none transition-all text-sm sm:text-base"
              />
            </div>

            {/* Date Fields Row */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Move-in */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">Move-in</label>
                <input
                  type="date"
                  value={searchData.moveIn}
                  onChange={(e) => handleInputChange('moveIn', e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A2FF] focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              {/* Move-out */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-2">Move-out</label>
                <input
                  type="date"
                  value={searchData.moveOut}
                  onChange={(e) => handleInputChange('moveOut', e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A2FF] focus:border-transparent outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="w-full">
              <label className="block text-xs font-medium text-gray-500 mb-2">Guests</label>
              <input
                type="number"
                value={searchData.guests}
                onChange={(e) => handleInputChange('guests', e.target.value)}
                placeholder="Select guests"
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A2FF] focus:border-transparent outline-none transition-all text-sm sm:text-base"
              />
            </div>

            {/* Rooms */}
            <div className="w-full">
              <label className="block text-xs font-medium text-gray-500 mb-2">Rooms</label>
              <div className="grid grid-cols-4 gap-2">
                {roomOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleInputChange('rooms', option)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      searchData.rooms === option
                        ? 'bg-[#D4A2FF] text-black'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full bg-[#D4A2FF] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#c490ff] transition-colors text-sm sm:text-base"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile-Optimized Property Cards Section
export const PropertyCardsSection = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef(null);
  
  const properties = [
    {
      id: 1,
      title: "Modern Loft Downtown",
      location: "2BR • NOK 950 • Bergen",
      price: "$120",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 2,
      title: "Cozy Studio Apartment",
      location: "1BR • NOK 750 • Oslo",
      price: "$95",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      location: "3BR • NOK 1200 • Stavanger",
      price: "$200",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 4,
      title: "Charming Townhouse",
      location: "2BR • NOK 850 • Trondheim",
      price: "$85",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: 5,
      title: "Waterfront Condo",
      location: "2BR • NOK 1100 • Tromsø",
      price: "$110",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 6,
      title: "Mountain View Cabin",
      location: "1BR • NOK 650 • Lillehammer",
      price: "$130",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  // Create enough copies to ensure smooth infinite scroll
  const infiniteProperties = [...properties, ...properties, ...properties];
  
  const cardWidth = 240; // Adjusted for smaller mobile cards (224px + 16px gap)
  const originalSetLength = properties.length;

  // Initialize carousel
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const initialScroll = originalSetLength * cardWidth;
      container.scrollLeft = initialScroll;

      const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const singleSetWidth = originalSetLength * cardWidth;
        
        if (scrollLeft >= maxScroll - cardWidth) {
          container.scrollLeft = singleSetWidth;
        } else if (scrollLeft <= cardWidth) {
          container.scrollLeft = singleSetWidth * 2;
        }
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && scrollContainerRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const currentScroll = container.scrollLeft;
          const newScroll = currentScroll + 1; // Slow scroll speed
          
          container.scrollTo({
            left: newScroll,
            behavior: 'auto' // Smooth but not animated scroll
          });
        }
      }, 50); // 50ms interval for smooth movement
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Pause auto-scroll on hover/touch
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  const handleTouchStart = () => {
    setIsAutoScrolling(false);
  };

  const handleTouchEnd = () => {
    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 3000);
  };

  const scroll = (direction) => {
    // Temporarily stop auto-scroll when manual navigation is used
    setIsAutoScrolling(false);
    
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const currentScroll = container.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - cardWidth 
        : currentScroll + cardWidth;
      
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }

    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 3000);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation Arrows - Mobile Optimized */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:opacity-70 transition-opacity backdrop-blur-sm bg-white/40 rounded-full shadow-lg"
        aria-label="Previous properties"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:opacity-70 transition-opacity backdrop-blur-sm bg-white/40 rounded-full shadow-lg"
        aria-label="Next properties"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards Container - Mobile Optimized with Auto-Scroll */}
      <div className="w-full overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-6 sm:px-8 md:px-10 lg:px-16 py-4"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {infiniteProperties.map((property, index) => (
            <PropertyCard key={`${property.id}-${Math.floor(index / originalSetLength)}-${index % originalSetLength}`} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile-Optimized Home Section
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
    <section id="home-humanoid" className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col justify-center py-8 sm:py-12 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Text */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            Book your flexible home
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We turn home rentals into experiences and collaborate with hundreds of home owners globally.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <SearchBar />
        </div>

        {/* Property Cards Section */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <PropertyCardsSection />
        </div>

        {/* View All Properties Button */}
        <div className={`flex justify-center sm:justify-end mt-4 sm:mt-6 md:mt-8 transition-all duration-1000 delay-500 px-4 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="bg-white text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gray-300 font-medium text-sm sm:text-base">
            View all properties
          </button>
        </div>
      </div>
    </section>
  );
};

// Experience Transformation Section - Tech Minimalism
export const ExperienceSection = () => {
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

    const element = document.getElementById('experience-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience-section" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 lg:mb-20">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-8 text-gray-900 tracking-tight">
              Beyond ordinary rentals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Property management reimagined through technology and human-centered design.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "Curated Experiences",
              description: "Data-driven property selection combined with human expertise to create spaces that adapt to your needs.",
              shape: "rectangle"
            },
            {
              title: "Intelligent Management",
              description: "Automated systems monitor and optimize every aspect of your stay, from check-in to maintenance.",
              shape: "triangle"
            },
            {
              title: "Global Standards",
              description: "Consistent quality protocols ensure the same exceptional experience across all locations.",
              shape: "circle"
            }
          ].map((item, index) => (
            <div key={index} className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="mb-8">
                  {item.shape === 'rectangle' && (
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D4A2FF] to-[#B88EFF] rounded-sm"></div>
                  )}
                  {item.shape === 'triangle' && (
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A2FF] to-[#B88EFF] transform rotate-45 rounded-sm"></div>
                    </div>
                  )}
                  {item.shape === 'circle' && (
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D4A2FF] to-[#B88EFF] rounded-full"></div>
                  )}
                </div>
                <h3 className="text-2xl font-thin mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Passive Income Section - Tech Minimalism with Image
export const PassiveIncomeSection = () => {
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

    const element = document.getElementById('passive-income-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="passive-income-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-8 text-gray-900 tracking-tight">
              Algorithmic income optimization
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
              Machine learning algorithms continuously optimize pricing, occupancy, and revenue streams to maximize your property's potential.
            </p>
            <div className="space-y-8">
              {[
                {
                  title: "Guaranteed Revenue",
                  description: "AI-powered demand forecasting ensures consistent monthly income regardless of market fluctuations."
                },
                {
                  title: "Automated Operations",
                  description: "Smart systems handle guest communications, maintenance scheduling, and quality control."
                },
                {
                  title: "Dynamic Pricing",
                  description: "Real-time market analysis adjusts rates to maximize revenue while maintaining high occupancy."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-4 h-4 bg-[#D4A2FF] rounded-none flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-thin text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Professional property management and cleaning operations"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#D4A2FF] rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-thin mb-2">Professional Operations</h3>
                    <p className="text-gray-200 font-light">Maintaining excellence in every detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Flexibility Section - Tech Minimalism
export const FlexibilitySection = () => {
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

    const element = document.getElementById('flexibility-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="flexibility-section" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 lg:mb-20">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-8 text-gray-900 tracking-tight">
              Adaptive living systems
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Technology-enabled spaces that automatically configure to your lifestyle and work requirements.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "Remote Work",
              description: "Spaces equipped with enterprise-grade connectivity, noise cancellation, and ergonomic work environments.",
              metrics: ["Gigabit Internet", "Dedicated Workspace", "Cloud Integration"]
            },
            {
              title: "Academic Housing",
              description: "Study-optimized environments near educational institutions with flexible lease terms and student-focused amenities.",
              metrics: ["University Proximity", "Study Spaces", "Flexible Terms"]
            },
            {
              title: "Corporate Mobility",
              description: "Seamless accommodation for business travel with integrated expense management and corporate billing systems.",
              metrics: ["Expense Integration", "Corporate Billing", "Business Centers"]
            }
          ].map((item, index) => (
            <div key={index} className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full">
                <div className="mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br from-[#D4A2FF] to-[#B88EFF] ${
                    index === 0 ? 'rounded-sm' : 
                    index === 1 ? 'rounded-full' : 
                    'transform rotate-45 rounded-sm'
                  }`}></div>
                </div>
                <h3 className="text-2xl font-thin mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">{item.description}</p>
                <div className="space-y-3">
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#D4A2FF] rounded-none"></div>
                      <span className="text-sm text-gray-500 font-light">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Page Hero Section
export const AboutHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//Home%20Keys.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzIi8+Cjwvc3ZnPgo="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-20">
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-thin text-white tracking-tight">
            About
          </h1>
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

// About Page Mission Section
export const AboutMissionSection = () => {
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

    const element = document.getElementById('mission-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 tracking-tight mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Mission
          </h2>
          <div className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
              To revolutionize property management through AI-powered automation, creating seamless experiences 
              for property owners and guests while maximizing returns and operational efficiency.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            {
              icon: <HomeIcon className="w-12 h-12" />,
              title: "Property Excellence",
              description: "Transform traditional rentals into premium, technology-enabled experiences that exceed guest expectations.",
              color: "#D4A2FF"
            },
            {
              icon: <CpuChipIcon className="w-12 h-12" />,
              title: "AI-First Approach",
              description: "Leverage artificial intelligence to automate operations, optimize pricing, and predict market trends.",
              color: "#FF5A5F"
            },
            {
              icon: <ArrowTrendingUpIcon className="w-12 h-12" />,
              title: "Sustainable Growth",
              description: "Build long-term partnerships that create consistent value for property owners and communities.",
              color: "#253551"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <div className="mb-6 flex items-center justify-center" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Page Team Section
export const AboutTeamSection = () => {
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

    const element = document.getElementById('team-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team-section" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 tracking-tight mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            The Team
          </h2>
          <div className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
              Our diverse, AI-powered microteam combines deep industry expertise with cutting-edge technology 
              to deliver exceptional results at unprecedented speed and scale.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {[
            {
              role: "AI & Technology",
              description: "Machine learning engineers and data scientists building autonomous systems that think, learn, and optimize property management operations.",
              icon: <CpuChipIcon className="w-12 h-12" />,
              color: "#AE68E4",
              skills: ["Machine Learning", "Data Science", "Automation", "AI Systems"]
            },
            {
              role: "Property & Hospitality",
              description: "Industry veterans with decades of experience in property management, hospitality operations, and guest experience optimization.",
              icon: <HomeIcon className="w-12 h-12" />,
              color: "#253551", 
              skills: ["Property Management", "Guest Relations", "Operations", "Quality Control"]
            },
            {
              role: "Business & Strategy",
              description: "Strategic leaders driving market expansion, partnership development, and sustainable growth across multiple industries.",
              icon: <ArrowTrendingUpIcon className="w-12 h-12" />,
              color: "#FF5A5F",
              skills: ["Strategic Planning", "Market Analysis", "Partnerships", "Growth Hacking"]
            }
          ].map((team, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out border border-gray-100 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <div className="mb-6 flex items-center justify-center" style={{ color: team.color }}>
                {team.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4" style={{ color: team.color }}>
                {team.role}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                {team.description}
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-800 text-center mb-3">Key Expertise</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {team.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full text-white"
                      style={{ backgroundColor: team.color }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Photo */}
        <div className={`mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '700ms' }}>
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//Team_BW.jpg"
                alt="DigiHome Team - AI-powered microteam specialists"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg">Meet Our Team</h3>
                <p className="text-lg text-white/90 drop-shadow-md max-w-2xl">
                  The innovative minds behind DigiHome's AI-powered property management revolution
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Philosophy */}
        <div className={`text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ color: '#AE68E4' }}>
                  Microteam Excellence
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Small, highly skilled teams enhanced by AI can outperform traditional large organizations. 
                  We combine human expertise with machine intelligence for maximum impact.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ color: '#AE68E4' }}>
                  Continuous Innovation
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We embrace cutting-edge technology while maintaining the human touch that makes exceptional 
                  experiences possible. Innovation is our competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const AboutStatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    revenue: 0,
    properties: 0,
    owners: 0,
    countries: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('statistics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        revenue: 87,
        properties: 450,
        owners: 312,
        countries: 8
      };

      const duration = 2000;
      const steps = 50;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          revenue: Math.floor(targets.revenue * progress),
          properties: Math.floor(targets.properties * progress),
          owners: Math.floor(targets.owners * progress),
          countries: Math.floor(targets.countries * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="statistics-section" className="py-24" style={{ backgroundColor: '#D4A2FF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-6 tracking-tight transition-all duration-700 ease-out drop-shadow-lg ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Impact
          </h2>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out drop-shadow-md ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            Numbers that reflect our commitment to transforming the property rental industry
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              value: `${counts.revenue}M`,
              label: "Revenue Generated",
              suffix: "NOK",
              description: "Total booking revenue for property owners"
            },
            {
              value: `${counts.properties}+`,
              label: "Properties Managed",
              suffix: "",
              description: "Across multiple cities and regions"
            },
            {
              value: `${counts.owners}+`,
              label: "Property Owners",
              suffix: "",
              description: "Trusting us with their investments"
            },
            {
              value: `${counts.countries}`,
              label: "Countries",
              suffix: "",
              description: "International presence and growth"
            }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  {stat.value}
                  {stat.suffix && <span className="text-2xl lg:text-3xl ml-1">{stat.suffix}</span>}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">
                  {stat.label}
                </h3>
                <p className="text-white/80 text-sm drop-shadow-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Technology Products Section
export const AboutTechnologySection = () => {
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

    const element = document.getElementById('technology-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="technology-section" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 tracking-tight mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Technology Products
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            Cutting-edge solutions that power the future of property management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {[
            {
              icon: <CpuChipIcon className="w-16 h-16" />,
              title: "DigiHome AI Platform",
              subtitle: "Autonomous Property Management",
              description: "Our flagship AI system that handles guest communications, pricing optimization, maintenance scheduling, and performance analytics automatically.",
              features: [
                "Real-time pricing optimization",
                "Automated guest communication",
                "Predictive maintenance alerts",
                "Revenue analytics dashboard"
              ],
              color: "#D4A2FF"
            },
            {
              icon: <ChartBarIcon className="w-16 h-16" />,
              title: "DigiHome Analytics Suite",
              subtitle: "Data-Driven Insights",
              description: "Advanced analytics platform providing deep insights into property performance, market trends, and optimization opportunities.",
              features: [
                "Market trend analysis",
                "Occupancy forecasting",
                "Competitive benchmarking",
                "ROI optimization tools"
              ],
              color: "#FF5A5F"
            }
          ].map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="mb-6 flex items-center justify-center" style={{ color: product.color }}>
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ color: product.color }}>
                {product.title}
              </h3>
              <h4 className="text-lg font-medium text-gray-600 mb-4">
                {product.subtitle}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }}></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About DigiSale Section
export const AboutDigiSaleSection = () => {
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

    const element = document.getElementById('digisale-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="digisale-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 tracking-tight mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Part of DigiSale
          </h2>
          <div className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
              DigiHome is proudly part of DigiSale, a tech group dedicated to creating industry leaders 
              using microteams powered by AI. Our mission is to revolutionize traditional industries 
              through innovative technology and agile development.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The DigiSale Vision
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe in the power of small, highly skilled teams enhanced by artificial intelligence 
              to outperform traditional large organizations. Our microteam approach enables rapid innovation, 
              precise execution, and industry-disrupting solutions.
            </p>
            <div className="space-y-4">
              {[
                { text: "AI-powered microteams for maximum efficiency", color: "#A1D964" },
                { text: "Industry disruption through technology innovation", color: "#A1D964" },  
                { text: "Agile development and rapid market adaptation", color: "#A1D964" },
                { text: "Data-driven decision making at every level", color: "#A1D964" }
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: point.color }}></div>
                  <span className="text-gray-700">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">DigiSale Products</h4>
              <div className="space-y-6">
                <div className="border-l-4 pl-6" style={{ borderLeftColor: '#D4A2FF' }}>
                  <h5 className="text-lg font-semibold mb-2" style={{ color: '#AE68E4' }}>DigiHome</h5>
                  <p className="text-gray-600 text-sm">
                    AI-powered property management platform revolutionizing short and long-term rentals
                  </p>
                </div>
                <div className="border-l-4 pl-6" style={{ borderLeftColor: '#FFFF8A' }}>
                  <h5 className="text-lg font-semibold mb-2" style={{ color: '#B8B800' }}>DigiCar</h5>
                  <p className="text-gray-600 text-sm">
                    Intelligent automotive solutions transforming vehicle management and logistics
                  </p>
                </div>
                <div className="border-l-4 pl-6" style={{ borderLeftColor: '#C7FF8A' }}>
                  <h5 className="text-lg font-semibold mb-2" style={{ color: '#7BB800' }}>Digi...</h5>
                  <p className="text-gray-600 text-sm">
                    Additional industry-leading solutions currently in development under the DigiSale umbrella
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Brand Guidelines Page Component
export const BrandGuidelinesPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'foundation', title: 'Brand Foundation', icon: <CpuChipIcon className="w-5 h-5" /> },
    { id: 'verbal', title: 'Verbal Identity', icon: <ChatBubbleLeftIcon className="w-5 h-5" /> },
    { id: 'visual', title: 'Visual System', icon: <EyeIcon className="w-5 h-5" /> },
    { id: 'accessibility', title: 'Accessibility', icon: <ShieldCheckIcon className="w-5 h-5" /> },
    { id: 'content', title: 'Content Strategy', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { id: 'implementation', title: 'Implementation', icon: <RocketLaunchIcon className="w-5 h-5" /> }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#253551] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomePurple.svg" 
                alt="DigiHome" 
                className="h-12 w-auto"
              />
              <div className="h-8 w-px bg-white/30"></div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-thin text-white mb-2">
                  Master Brand Guidelines
                </h1>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <span>Version 1.0</span>
                  <span>•</span>
                  <span>Production Ready</span>
                  <span>•</span>
                  <span>Last Updated: 19 July 2025</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-white/90 max-w-4xl leading-relaxed">
              The definitive guide for building, scaling, and protecting the DigiHome brand globally. 
              For founders, designers, engineers, marketers, and external partners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Strategic Foundation</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Visual System</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Implementation Guide</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Global Scale Ready</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-gray-50 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Contents</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                      activeSection === section.id 
                        ? 'bg-[#8B5BE8] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 max-w-none">
          <div className="max-w-4xl mx-auto px-8 py-12">

            {/* Overview Section */}
            <section id="overview" className="mb-16">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use This Document</h2>
                <p className="text-lg text-gray-700 mb-6">
                  This comprehensive guide provides every function—design, engineering, marketing, sales, legal—
                  a single source of truth for building and protecting the DigiHome brand globally.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-3">🎯 Primary Users</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Founders & Product Managers</li>
                      <li>• UX/UI Designers & Engineers</li>
                      <li>• Content & Marketing Teams</li>
                      <li>• External Vendors & Partners</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-3">📋 When in Doubt</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Refer to Brand Principles (Section 1.3)</li>
                      <li>• Check Governance Workflow (Section 11)</li>
                      <li>• Contact Brand Director for clarification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#8B5BE8] rounded-lg flex items-center justify-center mb-4">
                    <TrendingUpIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Foundation</h3>
                  <p className="text-gray-600 text-sm">Brand essence, positioning, value pillars, and competitive differentiation framework.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#E53E3E] rounded-lg flex items-center justify-center mb-4">
                    <PaintBrushIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Design System</h3>
                  <p className="text-gray-600 text-sm">Colors, typography, spacing, iconography, and component specifications with design tokens.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#38A169] rounded-lg flex items-center justify-center mb-4">
                    <RocketLaunchIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600 text-sm">Governance, workflows, quality assurance, and roadmap for global brand execution.</p>
                </div>
              </div>
            </section>

            {/* Brand Foundation Section */}
            <section id="foundation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Strategic Foundation</h2>
              
              <div className="space-y-8">
                {/* Purpose, Vision, Mission */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Purpose, Vision & Mission</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-[#8B5BE8] mb-2">Purpose</h4>
                      <p className="text-gray-700 text-sm">Empower property owners to unlock full asset potential via intelligent automation, delivering exceptional guest experiences and sustainable returns.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#8B5BE8] mb-2">Vision (5-Year)</h4>
                      <p className="text-gray-700 text-sm">Become the global standard for intelligent property management—synonymous with reliable AI-driven yield optimization and hospitality excellence.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#8B5BE8] mb-2">Mission</h4>
                      <p className="text-gray-700 text-sm">Combine advanced AI with hospitality expertise to maximize owner returns, elevate guest satisfaction, and eliminate operational friction.</p>
                    </div>
                  </div>
                </div>

                {/* Brand Essence & Positioning */}
                <div className="bg-gradient-to-r from-[#8B5BE8]/10 to-[#253551]/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Brand Essence & Positioning</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-[#8B5BE8] mb-2">Intelligence • Hospitality • Results</h4>
                      <p className="text-gray-600 text-sm">Brand Essence Trinity</p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Positioning Statement</h4>
                      <p className="text-gray-700 italic">
                        "For sophisticated property owners seeking maximum returns and operational excellence, 
                        DigiHome is the AI-powered management platform delivering 30-40% higher revenue through 
                        automated optimization and hotel-grade service—validated by 87M+ NOK performance across 450+ properties."
                      </p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">Primary Tagline</h4>
                      <p className="text-2xl font-medium text-[#253551]">"Intelligence meets hospitality"</p>
                    </div>
                  </div>
                </div>

                {/* Brand Principles */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Brand Principles</h3>
                  <p className="text-gray-600 mb-6 text-sm">Evaluate every brand decision against these core principles:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        principle: "Evidence First",
                        definition: "Claims anchored in verifiable data & transparent methodology",
                        acceptable: "Show metric + timeframe + source",
                        avoid: "Vague superlatives ('best', 'revolutionary')"
                      },
                      {
                        principle: "Human Amplification", 
                        definition: "AI augments—not replaces—human judgment & care",
                        acceptable: "AI does repetitive; humans do complex empathy",
                        avoid: "Fully autonomous tone that removes people"
                      },
                      {
                        principle: "Clarity Over Hype",
                        definition: "Communicate plainly, translate complexity",
                        acceptable: "Benefit → How it works → Result",
                        avoid: "Buzzword stacking"
                      },
                      {
                        principle: "Accessible by Design",
                        definition: "Inclusion is baseline, not retrofit", 
                        acceptable: "Run automated + manual a11y checks",
                        avoid: "Visuals relying on color only"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.principle}</h4>
                        <p className="text-gray-700 text-sm mb-3">{item.definition}</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-start gap-2">
                            <CheckIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-green-700">{item.acceptable}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <XMarkIcon className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-red-700">{item.avoid}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value Pillars */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Value Pillars & Proof Points</h3>
                  <div className="space-y-6">
                    {[
                      {
                        pillar: "Revenue Intelligence",
                        promise: "Maximize yield dynamically", 
                        proof: "30-40% higher returns vs long-term rent (2022-2024, 200+ units)",
                        feature: "AI Pricing Engine",
                        color: "#8B5BE8"
                      },
                      {
                        pillar: "Operational Excellence",
                        promise: "Remove daily management burden",
                        proof: "<2 hrs/month owner involvement (Q1 2025 audit)",
                        feature: "Automated Guest Communications", 
                        color: "#E53E3E"
                      },
                      {
                        pillar: "Partnership Commitment",
                        promise: "Long-term stable income & risk mitigation",
                        proof: "20-year contract options & crisis coverage (policy v2.1)",
                        feature: "Guaranteed Minimum Module",
                        color: "#253551"
                      }
                    ].map((item, index) => (
                      <div key={index} className="border border-gray-100 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: item.color }}></div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2" style={{ color: item.color }}>
                              {item.pillar}
                            </h4>
                            <p className="text-gray-700 mb-2">{item.promise}</p>
                            <p className="text-sm text-gray-600 mb-2">
                              <strong>Proof:</strong> {item.proof}
                            </p>
                            <p className="text-sm text-gray-600">
                              <strong>Key Feature:</strong> {item.feature}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Verbal Identity Section */}
            <section id="verbal" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Verbal Identity System</h2>
              
              <div className="space-y-8">
                {/* Voice Pillars */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Voice Pillars (Weighted)</h3>
                  <div className="space-y-4">
                    {[
                      { pillar: "Intelligent Confident", weight: "35%", desc: "Data-backed authority", sample: "Our AI analyzes 200+ factors every 4 hours." },
                      { pillar: "Professional Partnership", weight: "30%", desc: "Collaborative & accountable", sample: "We handle complexity; you retain strategic control." },
                      { pillar: "Results-Oriented Direct", weight: "25%", desc: "Concrete quantified outcomes", sample: "Average 35% uplift across 450+ properties." },
                      { pillar: "Accessible Technical", weight: "10%", desc: "Translate complexity to benefit", sample: "Predictive maintenance flags issues weeks early." }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{item.pillar}</h4>
                          <span className="text-sm font-medium text-[#8B5BE8]">{item.weight}</span>
                        </div>
                        <p className="text-gray-700 text-sm mb-2">{item.desc}</p>
                        <p className="text-gray-600 text-sm italic">"{item.sample}"</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lexicon */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Brand Lexicon</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-green-600 mb-3">✓ Preferred Terms</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "optimize" (vs improve)</li>
                        <li>• "platform" (vs tool)</li>
                        <li>• "returns" (vs profit)</li>
                        <li>• "predictive" (vs smart)</li>
                        <li>• "transparent" (vs clear)</li>
                        <li>• "intelligence" (vs AI)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">✗ Avoid</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• disruptive</li>
                        <li>• game-changing</li>
                        <li>• magic (literal)</li>
                        <li>• awesome</li>
                        <li>• risk-free</li>
                        <li>• always/never</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-600 mb-3">⚠ Conditional</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "guarantee" (with legal basis)</li>
                        <li>• "crisis-resistant" (with disclosure)</li>
                        <li>• "AI-powered" (limit repetition)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Messaging Templates */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Copy Pattern Library</h3>
                  <div className="space-y-4">
                    {[
                      { context: "Hero Headline", pattern: "[Action Verb] + [Outcome] + through + [Mechanism]", example: "Transform portfolio returns through adaptive pricing." },
                      { context: "Feature Bullet", pattern: "[Benefit] via [Mechanism]", example: "Higher occupancy via event-aware rate adjustments." },
                      { context: "CTA Button", pattern: "[Action] + [Audience] + [Outcome]", example: "Start Maximizing Returns" },
                      { context: "Error Message", pattern: "[Cause] + [Fix Path]", example: "Phone format invalid—use country code (+47)." }
                    ].map((item, index) => (
                      <div key={index} className="border border-gray-100 rounded-lg p-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-900">{item.context}</h4>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">{item.pattern}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-900 italic">"{item.example}"</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Visual System Section */}
            <section id="visual" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visual Identity System</h2>
              
              <div className="space-y-8">
                {/* Color Palette */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Color Architecture</h3>
                  <p className="text-gray-600 mb-6 text-sm">All colors meet WCAG AA contrast requirements (4.5:1 for text, 3:1 for large text)</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Primary Purple Spectrum</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { name: "Primary 050", hex: "#F5F1FC", usage: "Subtle backgrounds" },
                          { name: "Primary 300", hex: "#A56AE8", usage: "Light accents" },
                          { name: "Primary 500", hex: "#8B5BE8", usage: "Primary CTAs" },
                          { name: "Primary 600", hex: "#6B46C1", usage: "Hover states" }
                        ].map((color, index) => (
                          <div key={index} className="text-center">
                            <div 
                              className="w-full h-16 rounded-lg mb-2 border border-gray-200"
                              style={{ backgroundColor: color.hex }}
                            ></div>
                            <p className="text-sm font-medium text-gray-900">{color.name}</p>
                            <p className="text-xs text-gray-600">{color.hex}</p>
                            <p className="text-xs text-gray-500">{color.usage}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Supporting Colors</h4>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                          { name: "Red 500", hex: "#E53E3E", usage: "Alerts, NEKSOR heritage" },
                          { name: "Navy 700", hex: "#1A202C", usage: "Primary text" },
                          { name: "Green 500", hex: "#38A169", usage: "Success states" },
                          { name: "Blue 500", hex: "#3182CE", usage: "Info states" },
                          { name: "Amber 500", hex: "#D69E2E", usage: "Warnings" }
                        ].map((color, index) => (
                          <div key={index} className="text-center">
                            <div 
                              className="w-full h-16 rounded-lg mb-2 border border-gray-200"
                              style={{ backgroundColor: color.hex }}
                            ></div>
                            <p className="text-sm font-medium text-gray-900">{color.name}</p>
                            <p className="text-xs text-gray-600">{color.hex}</p>
                            <p className="text-xs text-gray-500">{color.usage}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typography */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Typography System</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Primary Typeface: Inter</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Professional, highly readable, excellent web performance, extensive language support
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { token: "Display 1", size: "64px", weight: "100-300", usage: "Hero headlines", example: "Transform Your Property" },
                        { token: "Heading 1", size: "40px", weight: "600", usage: "Page titles", example: "Revenue Intelligence" },
                        { token: "Heading 2", size: "32px", weight: "600", usage: "Major sections", example: "How It Works" },
                        { token: "Body Large", size: "20px", weight: "400", usage: "Lead paragraphs", example: "Generate 30-40% higher returns through intelligent automation." },
                        { token: "Body Base", size: "16px", weight: "400", usage: "Core text", example: "Our AI analyzes market conditions every 4 hours." },
                        { token: "Caption", size: "12px", weight: "500", usage: "Labels & metadata", example: "Updated 2 hours ago" }
                      ].map((type, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-4">
                          <div className="grid md:grid-cols-4 gap-4 items-center">
                            <div>
                              <p className="font-medium text-gray-900">{type.token}</p>
                              <p className="text-sm text-gray-600">{type.size} / {type.weight}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">{type.usage}</p>
                            </div>
                            <div className="md:col-span-2">
                              <p 
                                className="text-gray-900"
                                style={{ 
                                  fontSize: Math.min(parseInt(type.size) * 0.75, 32) + 'px',
                                  fontWeight: type.weight.split('-')[0]
                                }}
                              >
                                {type.example}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Iconography */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Iconography Standards</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Guidelines</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• <strong>Library:</strong> Heroicons v2 (Outline + Solid)</li>
                        <li>• <strong>Stroke:</strong> 2px consistent</li>
                        <li>• <strong>Sizes:</strong> 16, 20, 24, 32, 40, 48, 64px</li>
                        <li>• <strong>Colors:</strong> Neutral 700 default, brand purple for emphasis</li>
                        <li>• <strong>Accessibility:</strong> Semantic icons require aria-label or sr-only text</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Example Usage</h4>
                      <div className="grid grid-cols-4 gap-3">
                        {[
                          { icon: <TrendingUpIcon className="w-8 h-8" />, name: "Growth" },
                          { icon: <HomeIcon className="w-8 h-8" />, name: "Property" },
                          { icon: <CpuChipIcon className="w-8 h-8" />, name: "AI/Tech" },
                          { icon: <ShieldCheckIcon className="w-8 h-8" />, name: "Security" }
                        ].map((item, index) => (
                          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-gray-700 flex justify-center mb-2">{item.icon}</div>
                            <p className="text-xs text-gray-600">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacing & Layout */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Spacing & Layout System</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Spacing Scale</h4>
                      <p className="text-sm text-gray-600 mb-4">Base unit: 4px</p>
                      <div className="space-y-2">
                        {[4,8,12,16,20,24,32,40,48,64,80,96].map((size, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div 
                              className="bg-[#8B5BE8] h-4 rounded"
                              style={{ width: `${Math.min(size, 96)}px` }}
                            ></div>
                            <span className="text-sm text-gray-700 font-mono">{size}px</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Grid System</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• <strong>Desktop:</strong> 12-column, 24px gutters</li>
                        <li>• <strong>Tablet:</strong> 8-column, 20px gutters</li>
                        <li>• <strong>Mobile:</strong> 4-column, 16px gutters</li>
                        <li>• <strong>Max Width:</strong> 1280px (marketing)</li>
                        <li>• <strong>Section Spacing:</strong> ≥64px between major sections</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Accessibility Section */}
            <section id="accessibility" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Accessibility & Inclusion</h2>
              
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">WCAG 2.2 AA Standards</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Core Requirements</h4>
                    <div className="space-y-3">
                      {[
                        { category: "Contrast", req: "4.5:1 text; 3:1 large text", tool: "axe, Stark" },
                        { category: "Semantics", req: "Proper landmarks, heading order", tool: "ESLint a11y" },
                        { category: "Keyboard", req: "Tab order logical, focus visible", tool: "Manual testing" },
                        { category: "Screen Reader", req: "Alt text, ARIA labels", tool: "VoiceOver/NVDA" }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="font-medium text-gray-900 text-sm">{item.category}</h5>
                            <span className="text-xs text-gray-500">{item.tool}</span>
                          </div>
                          <p className="text-sm text-gray-700">{item.req}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Quality Assurance Flow</h4>
                    <ol className="space-y-2 text-sm text-gray-700">
                      <li>1. Design spec includes contrast validation</li>
                      <li>2. Component library a11y testing</li>
                      <li>3. Automated CI accessibility checks</li>
                      <li>4. Manual keyboard navigation testing</li>
                      <li>5. Screen reader compatibility verification</li>
                      <li>6. Quarterly accessibility audit review</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Strategy Section */}
            <section id="content" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Content Strategy Framework</h2>
              
              <div className="space-y-8">
                {/* Content Themes */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Content Pillar Themes</h3>
                  <div className="space-y-4">
                    {[
                      { theme: "Yield Intelligence", purpose: "Establish technical authority", example: "Annual Revenue Optimization Report", kpi: "Downloads" },
                      { theme: "Hospitality Excellence", purpose: "Show service differentiation", example: "Guest experience case studies", kpi: "NPS Lift" },
                      { theme: "Partner Success", purpose: "Social proof & trust building", example: "20-year contract showcases", kpi: "Lead Quality" },
                      { theme: "AI Transparency", purpose: "Ethical credibility", example: "Inside Our Pricing Engine", kpi: "Time on Page" }
                    ].map((item, index) => (
                      <div key={index} className="border border-gray-100 rounded-lg p-4">
                        <div className="grid md:grid-cols-4 gap-4">
                          <div>
                            <h4 className="font-medium text-[#8B5BE8]">{item.theme}</h4>
                          </div>
                          <div>
                            <p className="text-sm text-gray-700">{item.purpose}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 italic">{item.example}</p>
                          </div>
                          <div>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{item.kpi}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal & Compliance */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Legal & Compliance Requirements</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">Financial Claims Disclaimers</h4>
                      <div className="bg-white rounded-lg p-4 text-sm">
                        <p className="text-gray-700 mb-2"><strong>Revenue Claims:</strong> "Revenue uplift (30-40%) reflects aggregated DigiHome managed properties (Norway 2022-2024, n=200). Individual results vary by location, condition, regulation, and market demand."</p>
                        <p className="text-gray-700"><strong>87M NOK:</strong> "Total gross rental revenue facilitated Jan 2022-Dec 2024 across DigiHome managed portfolio. Figures audited by [Third-Party]—methodology on request."</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">AI Transparency</h4>
                      <div className="bg-white rounded-lg p-4 text-sm">
                        <p className="text-gray-700">"Automated pricing & communication decisions are reviewed periodically; owners can request manual override at any time."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation Section */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation & Governance</h2>
              
              <div className="space-y-8">
                {/* Roadmap */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Implementation Roadmap</h3>
                  <div className="space-y-6">
                    {[
                      { phase: "Phase 1: Foundation", weeks: "1-8", focus: "Risk mitigation, voice standardization, accessible palette", deliverables: "Disclaimers live, voice guide, design tokens" },
                      { phase: "Phase 2: Enhancement", weeks: "9-16", focus: "Social proof, analytics, localization prep", deliverables: "Case studies, event taxonomy, brand health baseline" },
                      { phase: "Phase 3: Scale", weeks: "17-24", focus: "Thought leadership, personalization, innovation", deliverables: "Annual report, personalized content, API brand kit" }
                    ].map((item, index) => (
                      <div key={index} className="border border-gray-100 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="font-semibold text-[#8B5BE8]">{item.phase}</h4>
                          <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">Weeks {item.weeks}</span>
                        </div>
                        <p className="text-gray-700 mb-3">{item.focus}</p>
                        <p className="text-sm text-gray-600"><strong>Key Deliverables:</strong> {item.deliverables}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Governance */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Brand Governance Framework</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Key Roles & Responsibilities</h4>
                      <div className="space-y-3">
                        {[
                          { role: "Brand Director", responsibility: "Strategy, positioning, major decisions" },
                          { role: "Design System Lead", responsibility: "Visual consistency, component library" },
                          { role: "Content Strategist", responsibility: "Voice consistency, messaging hierarchy" },
                          { role: "Accessibility Lead", responsibility: "WCAG compliance, inclusive design" }
                        ].map((item, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3">
                            <h5 className="font-medium text-gray-900 text-sm">{item.role}</h5>
                            <p className="text-sm text-gray-700">{item.responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Approval Workflow</h4>
                      <ol className="space-y-2 text-sm text-gray-700">
                        <li>1. Creator develops using brand guidelines</li>
                        <li>2. Self-review against brand checklist</li>
                        <li>3. Peer review for compliance</li>
                        <li>4. Content/Design lead approval</li>
                        <li>5. Brand Director sign-off (strategic content)</li>
                        <li>6. Publication and performance monitoring</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Quality Assurance */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Quality Assurance Checklist</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Content Quality Gates</h4>
                      <div className="space-y-2">
                        {[
                          "Voice alignment with brand pillars verified",
                          "Tone appropriate for context and audience", 
                          "Terminology consistent with brand lexicon",
                          "Claims substantiated with disclaimers",
                          "Accessibility requirements met",
                          "Legal/compliance review completed"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Visual Quality Gates</h4>
                      <div className="space-y-2">
                        {[
                          "Colors match approved palette with contrast",
                          "Typography follows scale and hierarchy",
                          "Spacing uses systematic tokens",
                          "Icons consistent with library guidelines", 
                          "Logo usage follows clear space requirements",
                          "Design aligns with brand personality"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer/Contact */}
            <div className="bg-gradient-to-r from-[#253551] to-[#8B5BE8] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Brand Guidelines?</h3>
              <p className="text-white/90 mb-6">
                Contact the Brand Director for clarification, approval workflow questions, or guideline updates.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-white text-[#253551] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Contact Brand Team
                </button>
                <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Download PDF Version
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};
export const AboutCallToActionSection = () => {
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

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-24" style={{ backgroundColor: '#253551' }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-8 tracking-tight drop-shadow-lg">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-md">
            Join hundreds of property owners who have revolutionized their rental business with DigiHome's 
            AI-powered platform. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#D4A2FF] text-black font-semibold text-lg rounded-full hover:bg-[#C490FF] focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Started as Property Owner
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-[#253551] focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 transform hover:scale-105">
              Explore Partnership Options
            </button>
          </div>
          <div className={`mt-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`} style={{ transitionDelay: '400ms' }}>
            <p className="text-white/70 text-sm mb-4">Questions? Get in touch with our team</p>
            <a href="mailto:hello@digihome.no" className="text-[#D4A2FF] hover:text-white transition-colors font-medium">
              hello@digihome.no
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export const AboutWhiteSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleMilestones, setVisibleMilestones] = useState(new Set());

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const milestoneIndex = entry.target.getAttribute('data-milestone');
            if (milestoneIndex) {
              setVisibleMilestones(prev => new Set([...prev, parseInt(milestoneIndex)]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const milestoneElements = document.querySelectorAll('[data-milestone]');
    milestoneElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: "2022",
      title: "Norway's biggest Airbnb operator",
      body: "Founded as a school project at NHH by Njål Eliasson, Olav Rognes & Knut Søråsdekkan. Scaled to Norway's largest Airbnb profile within six months (later overtaken by Dinbnb, summer 2023). First short-term operator company to be awarded a professional hotel linen contract, setting new industry standards.",
      logo: "https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//ChatGPT%20Image%20Jul%2019,%202025,%2002_34_47%20PM.png",
      alt: "NEKSOR logo",
      company: "NEKSOR",
      color: "#FF5A5F", // Airbnb red
      bgColor: "#FFF5F5" // Light red background
    },
    {
      year: "2024",
      title: "Professionalising dynamic rentals",
      body: "Rebrand and pivot from sub-lease to pure property management, challenging rental-broker monopoly \"Utleiemegleren\". First to blend short- and long-term stays in designer units, lowering tenant cost while boosting owners' yield.",
      logo: "https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//Heimby_Dark_Blue.png",
      alt: "Heimby logo",
      company: "Heimby",
      color: "#253551", // Provided color
      bgColor: "#F7F8FA" // Light blue-gray background
    },
    {
      year: "2025",
      title: "AI-powered property technology",
      body: "After 3 years' data, doubled down on AI & prop-tech. Deployed agent-based guest comms, logistics coordination & owner dashboards—now Norway's most efficient property-management platform. Partnered with professional hotel cleaning- and management companies to research how you can autonomously run cities as efficient as hotels.",
      logo: "https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomePurple.svg",
      alt: "DigiHome logo",
      company: "DigiHome",
      color: "#D4A2FF", // Provided color
      bgColor: "#FDF7FF" // Light purple background
    }
  ];

  return (
    <main role="main" className="relative isolate overflow-hidden bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-40">
        <header className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 tracking-tight mb-8">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            From university project to Norway's most efficient property-management platform
          </p>
        </header>

        {/* Desktop Timeline */}
        <section className={`${isDesktop ? 'block' : 'hidden'} relative mb-20`} aria-labelledby="timeline-heading" role="region">
          <h3 id="timeline-heading" className="sr-only">Company History Timeline</h3>
          {/* Timeline Rail - Fixed positioning */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gray-300 z-0" role="presentation"></div>
          
          <div className="relative grid grid-cols-3 gap-16 auto-cols-max">
            {milestones.map((milestone, index) => (
              <article
                key={index}
                data-milestone={index}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  visibleMilestones.has(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: visibleMilestones.has(index) ? 'none' : 'translateY(40px) scale(0.95)'
                }}
                aria-labelledby={`milestone-${milestone.year}-title`}
              >
                {/* Timeline Node with company color */}
                <div 
                  className="relative z-20 w-6 h-6 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 mb-8 group"
                  style={{ backgroundColor: milestone.color }}
                  role="presentation"
                >
                  {/* Animated pulse effect */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-30 animate-ping"
                    style={{ backgroundColor: milestone.color }}
                  ></div>
                  
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"
                    style={{ backgroundColor: milestone.color }}
                  ></div>
                </div>
                
                {/* Logo Container with enhanced styling */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: milestone.bgColor }}
                  role="img"
                  aria-label={`${milestone.company} company logo`}
                >
                  <img 
                    src={milestone.logo} 
                    alt={milestone.alt}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                
                {/* Content with enhanced styling */}
                <div className="max-w-sm">
                  <h4 
                    id={`milestone-${milestone.year}-title`}
                    className="font-mono text-3xl mb-4 font-bold tracking-wide"
                    style={{ color: milestone.color }}
                  >
                    {milestone.year} – {milestone.company}
                  </h4>
                  <h5 className="font-light text-xl text-gray-900 mb-4 leading-tight">
                    {milestone.title}
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {milestone.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Mobile/Tablet Timeline */}
        <section className={`${isDesktop ? 'hidden' : 'block'} relative mb-20`} aria-labelledby="timeline-heading-mobile" role="region">
          <h3 id="timeline-heading-mobile" className="sr-only">Company History Timeline - Mobile View</h3>
          <div className="relative flex flex-col gap-20 pl-8">
            {/* Timeline Rail - Fixed positioning */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-300 z-0" role="presentation"></div>
            
            {milestones.map((milestone, index) => (
              <article
                key={index}
                data-milestone={index}
                className={`relative flex items-start gap-8 transition-all duration-700 ease-out ${
                  visibleMilestones.has(index) 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 -translate-x-10 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: visibleMilestones.has(index) ? 'none' : 'translateX(-40px) scale(0.95)'
                }}
                aria-labelledby={`milestone-mobile-${milestone.year}-title`}
              >
                {/* Timeline Node with company color */}
                <div 
                  className="absolute left-3 top-2 w-6 h-6 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-20 group"
                  style={{ backgroundColor: milestone.color }}
                  role="presentation"
                >
                  {/* Animated pulse effect */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-30 animate-ping"
                    style={{ backgroundColor: milestone.color }}
                  ></div>
                  
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"
                    style={{ backgroundColor: milestone.color }}
                  ></div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Logo Container with enhanced styling */}
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: milestone.bgColor }}
                      role="img"
                      aria-label={`${milestone.company} company logo`}
                    >
                      <img 
                        src={milestone.logo} 
                        alt={milestone.alt}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    
                    <h4 
                      id={`milestone-mobile-${milestone.year}-title`}
                      className="font-mono text-2xl font-bold tracking-wide"
                      style={{ color: milestone.color }}
                    >
                      {milestone.year} – {milestone.company}
                    </h4>
                  </div>
                  
                  <h5 className="font-light text-2xl text-gray-900 mb-4 leading-tight">
                    {milestone.title}
                  </h5>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {milestone.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Revenue Graph Section */}
        <div className="mt-24 lg:mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-gray-900 tracking-tight mb-4">
              Homeowner Revenue Growth
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Total accrued booking revenue generated for our homeowners
            </p>
          </div>
          
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg">
            {/* Revenue Chart */}
            <div className="relative h-96 w-full">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-sm text-gray-500">
                <span className="font-mono">87M</span>
                <span className="font-mono">65M</span>
                <span className="font-mono">43M</span>
                <span className="font-mono">22M</span>
                <span className="font-mono">0M</span>
              </div>
              
              {/* Chart area */}
              <div className="ml-20 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-rows-4 opacity-20">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="border-t border-gray-300"></div>
                  ))}
                </div>
                
                {/* Revenue curve */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
                  <defs>
                    <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#D4A2FF', stopOpacity: 0.8 }} />
                      <stop offset="50%" style={{ stopColor: '#FF5A5F', stopOpacity: 0.6 }} />
                      <stop offset="100%" style={{ stopColor: '#253551', stopOpacity: 0.4 }} />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#253551' }} />
                      <stop offset="40%" style={{ stopColor: '#FF5A5F' }} />
                      <stop offset="100%" style={{ stopColor: '#D4A2FF' }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Area under curve */}
                  <path
                    d="M0,400 Q100,380 200,340 T400,240 T600,160 T800,40 L800,400 Z"
                    fill="url(#revenueGradient)"
                    className={`transition-all duration-2000 ease-out ${
                      visibleMilestones.has(2) ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: '600ms',
                      transform: visibleMilestones.has(2) ? 'none' : 'scaleY(0)',
                      transformOrigin: 'bottom'
                    }}
                  />
                  
                  {/* Revenue line */}
                  <path
                    d="M0,400 Q100,380 200,340 T400,240 T600,160 T800,40"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className={`transition-all duration-2000 ease-out ${
                      visibleMilestones.has(2) ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: '400ms',
                      strokeDasharray: visibleMilestones.has(2) ? 'none' : '2000',
                      strokeDashoffset: visibleMilestones.has(2) ? '0' : '2000'
                    }}
                  />
                  
                  {/* Highlight points */}
                  {[
                    { x: 200, y: 340, revenue: '15M NOK', year: '2022', color: '#FF5A5F' },
                    { x: 400, y: 240, revenue: '38M NOK', year: '2024', color: '#253551' },
                    { x: 800, y: 40, revenue: '87M NOK', year: '2025', color: '#D4A2FF' }
                  ].map((point, index) => (
                    <g key={index}>
                      {/* Point dot */}
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="8"
                        fill={point.color}
                        className={`transition-all duration-500 ease-out ${
                          visibleMilestones.has(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                        style={{ transitionDelay: `${800 + index * 200}ms` }}
                      />
                      
                      {/* Animated pulse */}
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="8"
                        fill={point.color}
                        className={`animate-ping opacity-30 ${
                          visibleMilestones.has(2) ? 'block' : 'hidden'
                        }`}
                        style={{ animationDelay: `${800 + index * 200}ms` }}
                      />
                      
                      {/* Tooltip */}
                      <g
                        className={`transition-all duration-500 ease-out ${
                          visibleMilestones.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                        style={{ transitionDelay: `${1000 + index * 200}ms` }}
                      >
                        <rect
                          x={point.x - 40}
                          y={point.y - 45}
                          width="80"
                          height="30"
                          fill="white"
                          stroke={point.color}
                          strokeWidth="2"
                          rx="6"
                        />
                        <text
                          x={point.x}
                          y={point.y - 32}
                          textAnchor="middle"
                          className="text-xs font-mono font-bold"
                          fill={point.color}
                        >
                          {point.revenue}
                        </text>
                        <text
                          x={point.x}
                          y={point.y - 20}
                          textAnchor="middle"
                          className="text-xs font-light"
                          fill="#666"
                        >
                          {point.year}
                        </text>
                      </g>
                    </g>
                  ))}
                </svg>
              </div>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-20 right-0 flex justify-between text-sm text-gray-500">
                <span className="font-mono">2022</span>
                <span className="font-mono">2023</span>
                <span className="font-mono">2024</span>
                <span className="font-mono">2025</span>
              </div>
            </div>
            
            {/* Revenue statistics */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Total Revenue Generated', value: '87M NOK', color: '#D4A2FF' },
                { label: 'Average Monthly Growth', value: '2.4M NOK', color: '#FF5A5F' },
                { label: 'Active Homeowners', value: '312', color: '#253551' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-lg border transition-all duration-500 ease-out ${
                    visibleMilestones.has(2) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{ 
                    transitionDelay: `${1400 + index * 100}ms`,
                    borderColor: stat.color,
                    backgroundColor: `${stat.color}08`
                  }}
                >
                  <div className="text-2xl font-bold font-mono" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// Earnings Calculator Section with Multi-Step Form
export const EarningsCalculatorSection = () => {
  const [address, setAddress] = useState('');
  const [currentStep, setCurrentStep] = useState(1); // 1: Address, 2: Property Details, 3: Facilities, 4: Contact
  const [isVisible, setIsVisible] = useState(false);
  const [propertyData, setPropertyData] = useState({
    address: '',
    rooms: {
      livingRooms: [],
      bedrooms: [],
      bathrooms: 0,
      toilets: 0
    },
    facilities: {
      balconyTerrace: false,
      dryer: false,
      elevator: false,
      freeParking: false,
      fireplace: false
    },
    contact: {
      fullName: '',
      email: '',
      phone: ''
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('earnings-calculator');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (address.trim()) {
      setPropertyData(prev => ({ ...prev, address }));
      setCurrentStep(2);
    }
  };

  const handleBackToAddress = () => {
    setCurrentStep(1);
  };

  const handlePropertyDetailsSubmit = (roomsData) => {
    setPropertyData(prev => ({ ...prev, rooms: roomsData }));
    setCurrentStep(3);
  };

  const handleFacilitiesSubmit = (facilitiesData) => {
    setPropertyData(prev => ({ ...prev, facilities: facilitiesData }));
    setCurrentStep(4);
  };

  const handleContactSubmit = (contactData) => {
    const finalData = { ...propertyData, contact: contactData };
    console.log('Final property data:', finalData);
    alert('Thank you! We\'ll calculate your earnings and get back to you soon.');
    // Here you would typically send the data to your backend
  };

  const handleBackToPropertyDetails = () => {
    setCurrentStep(2);
  };

  const handleBackToFacilities = () => {
    setCurrentStep(3);
  };

  return (
    <section id="earnings-calculator" className="relative isolate overflow-hidden" style={{ backgroundColor: '#D4A2FF' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-900/20"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {currentStep === 1 ? (
          <AddressStep 
            address={address}
            setAddress={setAddress}
            onSubmit={handleAddressSubmit}
            isVisible={isVisible}
          />
        ) : (
          <>
            {/* Progress Bar */}
            <div className="mx-auto max-w-4xl mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-white text-sm font-semibold drop-shadow-lg bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">Step {currentStep} of 4</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 shadow-inner">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-500 ease-out shadow-sm"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {currentStep === 2 ? (
              <PropertyDetailsStep
                address={propertyData.address}
                onSubmit={handlePropertyDetailsSubmit}
                onBack={handleBackToAddress}
                isVisible={isVisible}
              />
            ) : currentStep === 3 ? (
              <FacilitiesStep
                onSubmit={handleFacilitiesSubmit}
                onBack={handleBackToPropertyDetails}
                isVisible={isVisible}
              />
            ) : (
              <ContactStep
                onSubmit={handleContactSubmit}
                onBack={handleBackToFacilities}
                isVisible={isVisible}
              />
            )}
          </>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

// Address Step Component
const AddressStep = ({ address, setAddress, onSubmit, isVisible }) => (
  <div className="mx-auto max-w-4xl text-center">
    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white tracking-tight mb-8 transition-all duration-700 ease-out drop-shadow-lg ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      Check out what you can earn as a DigiHome owner
    </h2>
    
    <p className={`text-xl sm:text-2xl text-white leading-relaxed font-light transition-all duration-700 ease-out drop-shadow-md mb-12 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`} style={{ transitionDelay: '200ms' }}>
      Enter your property address to see your potential earnings
    </p>
    
    <div className={`max-w-2xl mx-auto transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`} style={{ transitionDelay: '400ms' }}>
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter your property address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-6 py-4 text-lg rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
            required
          />
        </div>
        <button
          type="submit"
          className="px-8 py-4 bg-white text-purple-600 font-semibold text-lg rounded-full hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          Continue
        </button>
      </form>
    </div>
  </div>
);

// Property Details Step Component
const PropertyDetailsStep = ({ address, onSubmit, onBack, isVisible }) => {
  const [rooms, setRooms] = useState({
    livingRooms: [{ 
      id: 1, 
      dinnerTable: { seats: 0 }, 
      sofa: 0, 
      sofaBeds: [], 
      beds: [] 
    }],
    bedrooms: [],
    bathrooms: 1,
    toilets: 0
  });

  const bedSizes = [
    { value: 'single', label: 'Single' },
    { value: 'double', label: 'Double' },
    { value: 'queen', label: 'Queen' },
    { value: 'king', label: 'King' },
    { value: 'sofa-bed', label: 'Sofa Bed Size' }
  ];

  const addLivingRoom = () => {
    setRooms(prev => ({
      ...prev,
      livingRooms: [...prev.livingRooms, { 
        id: prev.livingRooms.length + 1, 
        dinnerTable: { seats: 0 }, 
        sofa: 0, 
        sofaBeds: [], 
        beds: [] 
      }]
    }));
  };

  const addBedroom = () => {
    setRooms(prev => ({
      ...prev,
      bedrooms: [...prev.bedrooms, { 
        id: prev.bedrooms.length + 1, 
        beds: [], 
        sofaBeds: [] 
      }]
    }));
  };

  const updateLivingRoom = (index, field, value) => {
    setRooms(prev => ({
      ...prev,
      livingRooms: prev.livingRooms.map((room, i) => 
        i === index ? { ...room, [field]: value } : room
      )
    }));
  };

  const updateBedroom = (index, field, value) => {
    setRooms(prev => ({
      ...prev,
      bedrooms: prev.bedrooms.map((room, i) => 
        i === index ? { ...room, [field]: value } : room
      )
    }));
  };

  const addBedToRoom = (roomType, roomIndex, bedType, size) => {
    setRooms(prev => ({
      ...prev,
      [roomType]: prev[roomType].map((room, i) => 
        i === roomIndex ? {
          ...room,
          [bedType]: [...room[bedType], { id: Date.now(), size, count: 1 }]
        } : room
      )
    }));
  };

  const updateBedInRoom = (roomType, roomIndex, bedType, bedId, field, value) => {
    setRooms(prev => ({
      ...prev,
      [roomType]: prev[roomType].map((room, i) => 
        i === roomIndex ? {
          ...room,
          [bedType]: room[bedType].map(bed => 
            bed.id === bedId ? { ...bed, [field]: value } : bed
          )
        } : room
      )
    }));
  };

  const removeBedFromRoom = (roomType, roomIndex, bedType, bedId) => {
    setRooms(prev => ({
      ...prev,
      [roomType]: prev[roomType].map((room, i) => 
        i === roomIndex ? {
          ...room,
          [bedType]: room[bedType].filter(bed => bed.id !== bedId)
        } : room
      )
    }));
  };

  const removeLivingRoom = (index) => {
    if (rooms.livingRooms.length > 1) {
      setRooms(prev => ({
        ...prev,
        livingRooms: prev.livingRooms.filter((_, i) => i !== index)
      }));
    }
  };

  const removeBedroom = (index) => {
    setRooms(prev => ({
      ...prev,
      bedrooms: prev.bedrooms.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(rooms);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-8">
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white tracking-tight mb-4 transition-all duration-700 ease-out drop-shadow-lg ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Property Details
        </h2>
        <p className={`text-xl text-white mb-2 transition-all duration-700 ease-out drop-shadow-md ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          {address}
        </p>
        <p className={`text-lg text-white/90 transition-all duration-700 ease-out drop-shadow-sm ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '300ms' }}>
          Tell us about your property to get accurate earnings calculation
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Living Rooms */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white drop-shadow-md">Living Rooms</h3>
            <button
              type="button"
              onClick={addLivingRoom}
              className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-medium"
            >
              + Add Living Room
            </button>
          </div>
          
          {rooms.livingRooms.map((room, index) => (
            <div key={room.id} className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-medium text-white">Living Room {index + 1}</h4>
                {rooms.livingRooms.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeLivingRoom(index)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
              
              <div className="space-y-6">
                {/* Dinner Table */}
                <div className="bg-white/5 p-4 rounded-lg">
                  <h5 className="text-white font-medium mb-3">Dinner Table</h5>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-3 text-white/90 cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={room.dinnerTable.seats > 0}
                          onChange={(e) => updateLivingRoom(index, 'dinnerTable', 
                            e.target.checked ? { seats: 4 } : { seats: 0 }
                          )}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                          room.dinnerTable.seats > 0 
                            ? 'bg-white border-white' 
                            : 'border-white/40 hover:border-white/60'
                        }`}>
                          {room.dinnerTable.seats > 0 && (
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="font-medium">Has dinner table</span>
                    </label>
                    {room.dinnerTable.seats > 0 && (
                      <div className="flex items-center gap-2 ml-4">
                        <span className="text-white/90">Seats:</span>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          value={room.dinnerTable.seats}
                          onChange={(e) => updateLivingRoom(index, 'dinnerTable', 
                            { seats: parseInt(e.target.value) || 0 }
                          )}
                          className="w-20 px-2 py-1 bg-white/10 border border-white/20 rounded text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Sofa */}
                <div className="bg-white/5 p-4 rounded-lg">
                  <h5 className="text-white font-medium mb-3">Sofas</h5>
                  <div className="flex items-center gap-2">
                    <span className="text-white/90">Number of sofas:</span>
                    <input
                      type="number"
                      min="0"
                      value={room.sofa}
                      onChange={(e) => updateLivingRoom(index, 'sofa', parseInt(e.target.value) || 0)}
                      className="w-20 px-2 py-1 bg-white/10 border border-white/20 rounded text-white"
                    />
                  </div>
                </div>

                {/* Sofa Beds */}
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-white font-medium">Sofa Beds</h5>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          addBedToRoom('livingRooms', index, 'sofaBeds', e.target.value);
                          e.target.value = '';
                        }
                      }}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                    >
                      <option value="">Add Sofa Bed</option>
                      {bedSizes.slice(0, 4).map(size => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  {room.sofaBeds.map((bed) => (
                    <div key={bed.id} className="flex items-center gap-3 mb-2 p-2 bg-white/5 rounded">
                      <span className="text-white/90 capitalize">{bed.size}</span>
                      <input
                        type="number"
                        min="1"
                        value={bed.count}
                        onChange={(e) => updateBedInRoom('livingRooms', index, 'sofaBeds', bed.id, 'count', parseInt(e.target.value) || 1)}
                        className="w-16 px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeBedFromRoom('livingRooms', index, 'sofaBeds', bed.id)}
                        className="text-white/70 hover:text-white text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                {/* Beds */}
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-white font-medium">Beds</h5>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          addBedToRoom('livingRooms', index, 'beds', e.target.value);
                          e.target.value = '';
                        }
                      }}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                    >
                      <option value="">Add Bed</option>
                      {bedSizes.slice(0, 4).map(size => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  {room.beds.map((bed) => (
                    <div key={bed.id} className="flex items-center gap-3 mb-2 p-2 bg-white/5 rounded">
                      <span className="text-white/90 capitalize">{bed.size}</span>
                      <input
                        type="number"
                        min="1"
                        value={bed.count}
                        onChange={(e) => updateBedInRoom('livingRooms', index, 'beds', bed.id, 'count', parseInt(e.target.value) || 1)}
                        className="w-16 px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeBedFromRoom('livingRooms', index, 'beds', bed.id)}
                        className="text-white/70 hover:text-white text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bedrooms */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white drop-shadow-md">Bedrooms</h3>
            <button
              type="button"
              onClick={addBedroom}
              className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-medium"
            >
              + Add Bedroom
            </button>
          </div>
          
          {rooms.bedrooms.map((room, index) => (
            <div key={room.id} className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-medium text-white">Bedroom {index + 1}</h4>
                <button
                  type="button"
                  onClick={() => removeBedroom(index)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Beds */}
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-white font-medium">Beds</h5>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          addBedToRoom('bedrooms', index, 'beds', e.target.value);
                          e.target.value = '';
                        }
                      }}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                    >
                      <option value="">Add Bed</option>
                      {bedSizes.slice(0, 4).map(size => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  {room.beds.map((bed) => (
                    <div key={bed.id} className="flex items-center gap-3 mb-2 p-2 bg-white/5 rounded">
                      <span className="text-white/90 capitalize">{bed.size}</span>
                      <input
                        type="number"
                        min="1"
                        value={bed.count}
                        onChange={(e) => updateBedInRoom('bedrooms', index, 'beds', bed.id, 'count', parseInt(e.target.value) || 1)}
                        className="w-16 px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeBedFromRoom('bedrooms', index, 'beds', bed.id)}
                        className="text-white/70 hover:text-white text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                {/* Sofa Beds */}
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-white font-medium">Sofa Beds</h5>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          addBedToRoom('bedrooms', index, 'sofaBeds', e.target.value);
                          e.target.value = '';
                        }
                      }}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                    >
                      <option value="">Add Sofa Bed</option>
                      {bedSizes.slice(0, 4).map(size => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  {room.sofaBeds.map((bed) => (
                    <div key={bed.id} className="flex items-center gap-3 mb-2 p-2 bg-white/5 rounded">
                      <span className="text-white/90 capitalize">{bed.size}</span>
                      <input
                        type="number"
                        min="1"
                        value={bed.count}
                        onChange={(e) => updateBedInRoom('bedrooms', index, 'sofaBeds', bed.id, 'count', parseInt(e.target.value) || 1)}
                        className="w-16 px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeBedFromRoom('bedrooms', index, 'sofaBeds', bed.id)}
                        className="text-white/70 hover:text-white text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bathrooms and Toilets */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 className="text-2xl font-semibold text-white drop-shadow-md mb-6">Bathrooms & Toilets</h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Bathrooms</label>
              <input
                type="number"
                min="0"
                value={rooms.bathrooms}
                onChange={(e) => setRooms(prev => ({ ...prev, bathrooms: parseInt(e.target.value) || 0 }))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Toilets (without shower)</label>
              <input
                type="number"
                min="0"
                value={rooms.toilets}
                onChange={(e) => setRooms(prev => ({ ...prev, toilets: parseInt(e.target.value) || 0 }))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={onBack}
            className="px-8 py-4 bg-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/30"
          >
            Back to Address
          </button>
          <button
            type="submit"
            className="px-8 py-4 bg-white text-purple-600 font-semibold text-lg rounded-full hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Next: Extra Facilities
          </button>
        </div>
      </form>
    </div>
  );
};

// Facilities Step Component
const FacilitiesStep = ({ onSubmit, onBack, isVisible }) => {
  const [facilities, setFacilities] = useState({
    balconyTerrace: false,
    dryer: false,
    elevator: false,
    freeParking: false,
    fireplace: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(facilities);
  };

  const updateFacility = (key, value) => {
    setFacilities(prev => ({ ...prev, [key]: value }));
  };

  const facilitiesOptions = [
    { key: 'balconyTerrace', label: 'Balcony/Terrace' },
    { key: 'dryer', label: 'Dryer' },
    { key: 'elevator', label: 'Elevator' },
    { key: 'freeParking', label: 'Free parking' },
    { key: 'fireplace', label: 'Fireplace' }
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-8">
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white tracking-tight mb-4 transition-all duration-700 ease-out drop-shadow-lg ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Extra Facilities
        </h2>
        <p className={`text-xl text-white transition-all duration-700 ease-out drop-shadow-md ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          Select special facilities that your property has. We assume you have standard furniture and electrical appliances.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilitiesOptions.map((facility) => (
              <div key={facility.key} className="flex items-center">
                <label className="flex items-center gap-4 text-white/90 cursor-pointer w-full p-4 rounded-xl hover:bg-white/5 transition-all duration-200">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={facilities[facility.key]}
                      onChange={(e) => updateFacility(facility.key, e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                      facilities[facility.key] 
                        ? 'bg-white border-white' 
                        : 'border-white/40 hover:border-white/60'
                    }`}>
                      {facilities[facility.key] && (
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-lg">{facility.label}</span>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={onBack}
            className="px-8 py-4 bg-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/30"
          >
            Back to Property Details
          </button>
          <button
            type="submit"
            className="px-8 py-4 bg-white text-purple-600 font-semibold text-lg rounded-full hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Next: Contact Information
          </button>
        </div>
      </form>
    </div>
  );
};

// Contact Step Component
const ContactStep = ({ onSubmit, onBack, isVisible }) => {
  const [contact, setContact] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
  };

  const updateContact = (key, value) => {
    setContact(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-8">
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white tracking-tight mb-4 transition-all duration-700 ease-out drop-shadow-lg ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          One last thing!
        </h2>
        <p className={`text-xl text-white transition-all duration-700 ease-out drop-shadow-md ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          Please leave your contact information so that we are able to send you your rental estimates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-semibold text-white drop-shadow-md mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={contact.fullName}
                onChange={(e) => updateContact('fullName', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={contact.email}
                onChange={(e) => updateContact('email', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+47 123 45 678"
                value={contact.phone}
                onChange={(e) => updateContact('phone', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                required
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={onBack}
            className="px-8 py-4 bg-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/30"
          >
            Back to Facilities
          </button>
          <button
            type="submit"
            className="px-8 py-4 bg-white text-purple-600 font-semibold text-lg rounded-full hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Calculate My Earnings
          </button>
        </div>
      </form>
    </div>
  );
};

// Partner Relations Hero Section
export const PartnerRelationsHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('partner-hero');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="partner-hero" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//Floor%20Plan.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzIi8+Cjwvc3ZnPgo="
          aria-label="Background video showcasing DigiHome floor plans and property layouts"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-thin mb-8 tracking-tight transition-all duration-1000 ease-out drop-shadow-lg ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Partner with DigiHome
        </h1>
        
        <p className={`text-xl sm:text-2xl lg:text-3xl font-light mb-12 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 ease-out drop-shadow-md ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          We work with property owners, investors, and developers to transform traditional rentals into profitable, AI-powered experiences
        </p>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <button 
            className="px-8 py-4 bg-[#D4A2FF] text-white font-semibold text-lg rounded-full hover:bg-[#C490FF] focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
            onClick={() => document.getElementById('partner-benefits').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Partnership
          </button>
          <button 
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:scale-105 border border-white/20"
            onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
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

// Partner Relations Content Section
export const PartnerRelationsContent = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Why Partner With Us */}
      <section id="partner-benefits" data-section="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 mb-6 tracking-tight transition-all duration-700 ease-out ${
              visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Why Partner With DigiHome?
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out ${
              visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              Transform your property portfolio with our AI-powered platform and proven track record of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ArrowTrendingUpIcon className="w-12 h-12" />,
                title: "Increased Revenue",
                description: "Generate 30-40% higher returns compared to traditional long-term rentals through our dynamic pricing and occupancy optimization.",
                color: "#D4A2FF"
              },
              {
                icon: <HandRaisedIcon className="w-12 h-12" />,
                title: "Long-term Partnership",
                description: "Secure contracts up to 20 years provide stable, guaranteed income without vacancy risks or marketing headaches.",
                color: "#FF5A5F"
              },
              {
                icon: <CpuChipIcon className="w-12 h-12" />,
                title: "AI-Powered Operations",
                description: "Fully automated guest communication, pricing optimization, and property management through our advanced AI platform.",
                color: "#253551"
              },
              {
                icon: <BriefcaseIcon className="w-12 h-12" />,
                title: "Zero Hassle Management",
                description: "We handle everything from guest screening to maintenance coordination. You collect returns while we manage operations.",
                color: "#D4A2FF"
              },
              {
                icon: <ChartBarIcon className="w-12 h-12" />,
                title: "Real-time Analytics",
                description: "Access comprehensive dashboards with property performance, revenue tracking, and market insights at your fingertips.",
                color: "#FF5A5F"
              },
              {
                icon: <ShieldCheckIcon className="w-12 h-12" />,
                title: "Risk Mitigation",
                description: "Our hybrid model combines short and long-term rentals for crisis-resistant returns and reduced seasonal volatility.",
                color: "#253551"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out border border-gray-100 hover:scale-105 ${
                  visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${400 + index * 100}ms`,
                  borderColor: `${benefit.color}20`
                }}
              >
                <div className="mb-6 flex items-center justify-center" style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4" style={{ color: benefit.color }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Business Model */}
      <section data-section="model" className="py-24" style={{ backgroundColor: '#D4A2FF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-6 tracking-tight transition-all duration-700 ease-out drop-shadow-lg ${
              visibleSections.has('model') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our Business Model
            </h2>
            <p className={`text-xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out drop-shadow-md ${
              visibleSections.has('model') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              We transform properties into fully digital, design-focused experiences that maximize both revenue and guest satisfaction
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Partnership Agreement",
                description: "We establish long-term partnerships with property owners through flexible contract models including lease agreements, revenue sharing, or management contracts."
              },
              {
                step: "02", 
                title: "Property Optimization",
                description: "Our design team transforms spaces with high-quality furnishing, smart home technology, and our signature aesthetic to maximize appeal and functionality."
              },
              {
                step: "03",
                title: "Digital Integration",
                description: "We install our AI-powered infrastructure for seamless guest experiences, automated operations, and real-time performance monitoring."
              },
              {
                step: "04",
                title: "Revenue Generation",
                description: "Properties serve both short-term travelers and long-term residents through our hybrid model, optimizing revenue across all seasons and market conditions."
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ease-out ${
                  visibleSections.has('model') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-md">
                  {step.title}
                </h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section data-section="options" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 mb-6 tracking-tight transition-all duration-700 ease-out ${
              visibleSections.has('options') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Partnership Models
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out ${
              visibleSections.has('options') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              Choose the partnership model that best fits your investment goals and risk tolerance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Master Lease",
                subtitle: "Fixed Income Model",
                description: "We lease your entire property on long-term contracts (5-20 years) and pay guaranteed rent regardless of occupancy.",
                benefits: ["Guaranteed monthly income", "No vacancy risk", "Zero management hassle", "Property improvements included"],
                color: "#FF5A5F",
                ideal: "Conservative investors seeking stable returns"
              },
              {
                title: "Revenue Share",
                subtitle: "Growth Partnership",
                description: "We manage your property and share revenue based on performance. Higher risk, higher reward potential.",
                benefits: ["Higher income potential", "Performance-based returns", "Shared investment in success", "Transparent reporting"],
                color: "#D4A2FF",
                ideal: "Investors comfortable with variable income",
                popular: true
              },
              {
                title: "Management Only",
                subtitle: "Professional Service",
                description: "Keep full ownership while we handle operations, marketing, guest management, and optimization.",
                benefits: ["Full asset control", "Professional management", "Technology platform access", "Flexible terms"],
                color: "#253551",
                ideal: "Hands-off owners wanting control"
              }
            ].map((option, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out relative overflow-hidden ${
                  visibleSections.has('options') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${option.popular ? 'ring-4 ring-purple-200 scale-105' : ''}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                {option.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-purple-600 text-white px-4 py-2 text-sm font-semibold rounded-bl-2xl">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${option.color}20` }}>
                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: option.color }}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-lg font-medium mb-4" style={{ color: option.color }}>{option.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {option.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: option.color }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Ideal for:</strong> {option.ideal}
                  </p>
                  <button 
                    className="w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    style={{ 
                      backgroundColor: option.color,
                      color: 'white'
                    }}
                    onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" data-section="contact" className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-6 tracking-tight transition-all duration-700 ease-out drop-shadow-lg ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to Partner?
          </h2>
          <p className={`text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto transition-all duration-700 ease-out drop-shadow-md ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            Let's discuss how DigiHome can transform your property investment strategy. Our team is ready to create a custom partnership solution.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-700 ease-out ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <button className="px-8 py-4 bg-[#D4A2FF] text-white font-semibold text-lg rounded-full hover:bg-[#C490FF] focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:scale-105 border border-white/20">
              Download Partnership Guide
            </button>
          </div>

          <div className={`grid sm:grid-cols-3 gap-8 text-white transition-all duration-700 ease-out ${
            visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '600ms' }}>
            <div>
              <h4 className="font-semibold mb-2 drop-shadow-md">Email</h4>
              <p className="text-gray-300 drop-shadow-sm">partnerships@digihome.no</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 drop-shadow-md">Phone</h4>
              <p className="text-gray-300 drop-shadow-sm">+47 123 45 678</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 drop-shadow-md">Response Time</h4>
              <p className="text-gray-300 drop-shadow-sm">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Membership Hero Section
export const MembershipHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('membership-hero');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="membership-hero" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//Partners.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-thin mb-8 tracking-tight transition-all duration-1000 ease-out drop-shadow-lg ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Welcome to DigiHome Members
        </h1>
        
        <p className={`text-xl sm:text-2xl lg:text-3xl font-light mb-8 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 ease-out drop-shadow-md ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          Join our exclusive community and unlock the best rates, premium perks, and personalized experiences
        </p>

        <p className={`text-lg text-white/90 mb-12 font-light transition-all duration-1000 ease-out drop-shadow-sm ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '300ms' }}>
          Let's be guests with benefits — all for free
        </p>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <button 
            className="px-10 py-4 bg-[#D4A2FF] text-white font-semibold text-lg rounded-full hover:bg-[#C490FF] focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
            onClick={() => document.getElementById('member-benefits').scrollIntoView({ behavior: 'smooth' })}
          >
            Join Free Now
          </button>
          <button 
            className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:scale-105 border border-white/20"
            onClick={() => document.getElementById('member-benefits').scrollIntoView({ behavior: 'smooth' })}
          >
            See Benefits
          </button>
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

// Membership Content Section
export const MembershipContent = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Member Benefits */}
      <section id="member-benefits" data-section="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 mb-6 tracking-tight transition-all duration-700 ease-out ${
              visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Member Benefits
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out ${
              visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              Enjoy great perks at no extra cost. Instant rewards, no loyalty points, no tiers — just effortless benefits from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <CurrencyDollarIcon className="w-12 h-12" />,
                title: "15% Off Every Stay",
                description: "Unlock the best rates automatically when you book directly with DigiHome. No promo codes, no gimmicks — just better prices, always.",
                highlight: "Save instantly on every booking"
              },
              {
                icon: <CalendarIcon className="w-12 h-12" />,
                title: "Up to 40% Off Extended Stays",
                description: "Stay longer, save more. Get 25% off stays of 7+ nights, and up to 40% off monthly stays. Perfect for business trips or workcations.",
                highlight: "Bigger savings for longer stays"
              },
              {
                icon: <ClockIcon className="w-12 h-12" />,
                title: "Flexible Check-in & Check-out",
                description: "Sleep in until 12 PM with free late check-out, or start your day early with 2 PM check-in. Your stay fits your schedule.",
                highlight: "Free flexibility when you need it"
              },
              {
                icon: <StarIcon className="w-12 h-12" />,
                title: "Exclusive Member Deals",
                description: "Get first access to new properties, last-minute availability, surprise discounts, and member-only offers we don't share anywhere else.",
                highlight: "Early access to the best deals"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out border border-gray-100 hover:scale-105 relative overflow-hidden ${
                  visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative">
                  <div className="mb-6 flex items-center justify-center text-[#D4A2FF]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {benefit.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-700 ease-out ${
            visibleSections.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '1000ms' }}>
            <button className="px-10 py-4 bg-[#D4A2FF] text-white font-semibold text-lg rounded-full hover:bg-[#C490FF] focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Join DigiHome Members — It's Free!
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section data-section="how-it-works" className="py-24" style={{ backgroundColor: '#D4A2FF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-6 tracking-tight transition-all duration-700 ease-out drop-shadow-lg ${
              visibleSections.has('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              How It Works
            </h2>
            <p className={`text-xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out drop-shadow-md ${
              visibleSections.has('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              Join our community of smart travelers in three simple steps and start saving immediately
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Sign Up Free",
                description: "Create your DigiHome member account in seconds. No fees, no commitments — just instant access to better rates.",
                icon: <SparklesIcon className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "Book & Save",
                description: "Browse our AI-curated properties and watch your 15% discount apply automatically. No codes needed, just better prices.",
                icon: <HomeIcon className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Enjoy Premium Perks",
                description: "Access flexible check-in times, exclusive deals, and personalized recommendations tailored to your travel style.",
                icon: <ArrowTopRightOnSquareIcon className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ease-out ${
                  visibleSections.has('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-white/30 relative">
                    <span className="text-white">{step.icon}</span>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-md">
                  {step.title}
                </h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 transition-all duration-700 ease-out ${
            visibleSections.has('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '1200ms' }}>
            <button className="px-10 py-4 bg-white text-purple-600 font-semibold text-lg rounded-full hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Saving Today
            </button>
          </div>
        </div>
      </section>

      {/* Business Travelers Section */}
      <section data-section="business" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-700 ease-out ${
            visibleSections.has('business') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-8 flex items-center justify-center text-[#253551]">
              <BriefcaseIcon className="w-16 h-16" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-thin text-gray-900 mb-6 tracking-tight">
              Business Traveler?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Upgrade to DigiHome Business and unlock seamless corporate accommodation solutions — so you can get back to work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-[#253551] text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                Explore Business Solutions
              </button>
              <button 
                className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300"
                onClick={() => document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" data-section="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 mb-6 tracking-tight transition-all duration-700 ease-out ${
              visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Questions?
            </h2>
            <p className={`text-xl text-gray-600 transition-all duration-700 ease-out ${
              visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              Let's answer them now, so you can make the most of your membership
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is DigiHome Members?",
                answer: "DigiHome Members is our way of saying thanks to loyal guests. Join for free and enjoy better rates, more flexibility, AI-powered recommendations, and early access to our best offers — every time you stay with us."
              },
              {
                question: "How much do I save as a member?",
                answer: "Members automatically receive 15% off every booking when booking directly with DigiHome. No promo codes, no gimmicks — just better prices, always. This discount is valid for all DigiHome locations."
              },
              {
                question: "Do I get better deals for longer stays?",
                answer: "Yes! If you're staying 7 nights or more, you'll get 25% off, and for monthly stays of 30+ days, you can save up to 40% off. Perfect for extended business trips, relocations, or workcations."
              },
              {
                question: "What are the check-in and check-out perks?",
                answer: "Members can choose free early check-in from 2 PM or late check-out until 12 PM, subject to availability. Your stay fits your schedule, not the other way around."
              },
              {
                question: "What kind of exclusive offers can I expect?",
                answer: "As a member, you'll unlock early access to new property listings, last-minute availability deals, seasonal promotions, and surprise discounts we don't offer anywhere else. Plus, our AI learns your preferences to send personalized recommendations."
              },
              {
                question: "Is membership really free?",
                answer: "Yes! DigiHome membership is completely free with no hidden fees, no annual charges, and no obligations. You can cancel your membership anytime if you choose to."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-2xl transition-all duration-700 ease-out ${
                  visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 transition-all duration-700 ease-out ${
            visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '1000ms' }}>
            <button className="px-10 py-4 bg-[#D4A2FF] text-white font-semibold text-lg rounded-full hover:bg-[#C490FF] focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Ready to Join? Sign Up Free
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

// Updated Footer with DigiHome Branding
export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomeLong.svg" 
                alt="DigiHome - AI-powered property management platform" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              The future of home rentals is here. Connecting travelers with unique homes and experiences across the world.
            </p>
            <nav aria-label="Social media links">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow DigiHome on Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow DigiHome on Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Connect with DigiHome on LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <nav aria-labelledby="services-heading">
            <h3 id="services-heading" className="text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Find Homes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Become Owner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Business Travel</a></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="company-heading">
            <h3 id="company-heading" className="text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Press</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2025 DigiHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};