import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomePinkLogoWhiteText.svg" 
                alt="DigiHome" 
                className="h-6 sm:h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Membership</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Partner Relations</a>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors font-medium">About</Link>
          </div>
          
          <div className="hidden md:block">
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Sign In</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
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
          className="md:hidden fixed inset-0 z-50 bg-black backdrop-blur-md" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          onClick={closeMobileMenu}
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
              <Link to="/" onClick={closeMobileMenu}>
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
            
            <div className="space-y-6">
              <a href="#" className="block text-white hover:text-[#D4A2FF] transition-colors font-medium text-lg py-3">
                Membership
              </a>
              <a href="#" className="block text-white hover:text-[#D4A2FF] transition-colors font-medium text-lg py-3">
                Partner Relations
              </a>
              <Link to="/about" className="block text-white hover:text-[#D4A2FF] transition-colors font-medium text-lg py-3">
                About
              </Link>
              <a href="#" className="block text-white hover:text-[#D4A2FF] transition-colors font-medium text-lg py-3">
                Sign In
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
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
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 min-h-screen">
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
              alt="DigiHome" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto mx-auto mb-4 sm:mb-6"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            The future of home rentals is here. Homes and experiences that move with you across the world.
          </p>
          
          {/* Action Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto px-4">
            <button 
              onClick={() => scrollToSection('home-humanoid')}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#D4A2FF] hover:bg-[#c490ff] text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap text-sm sm:text-base"
            >
              Find a Home
            </button>
            <button 
              onClick={() => scrollToSection('home-humanoid')}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-transparent border-2 border-[#D4A2FF] hover:bg-[#D4A2FF] text-[#D4A2FF] hover:text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
            >
              Become a DigiHome Owner
            </button>
          </div>
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

  const scroll = (direction) => {
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

      {/* Cards Container - Mobile Optimized */}
      <div className="w-full overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-6 sm:px-8 md:px-10 lg:px-16 py-4"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
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

// About Page White Section with History Timeline
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
      logo: "https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//NEKSOR%20Logo.jpeg",
      alt: "NEKSOR logo",
      company: "NEKSOR",
      color: "#FF5A5F", // Airbnb red
      bgColor: "#FFF5F5" // Light red background
    },
    {
      year: "2024",
      title: "Professionalising dynamic rentals",
      body: "Rebrand and pivot from sub-lease to pure property management, challenging rental-broker monopoly \"Utleiemegleren\". First to blend short- and long-term stays in designer units, lowering tenant cost while boosting owners' yield.",
      logo: "https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//HeimbyLogoWhite.png",
      alt: "Heimby logo",
      company: "Heimby",
      color: "#253551", // Provided color
      bgColor: "#F7F8FA" // Light blue-gray background
    },
    {
      year: "2025",
      title: "AI-powered property technology",
      body: "After 3 years' data, doubled down on AI & prop-tech. Deployed agent-based guest comms, logistics coordination & owner dashboards—now Norway's most efficient property-management platform. Partnered with professional hotel cleaning- and management companies to research how you can autonomously run cities as efficient as hotels.",
      logo: "https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomeLong.svg",
      alt: "DigiHome logo",
      company: "DigiHome",
      color: "#D4A2FF", // Provided color
      bgColor: "#FDF7FF" // Light purple background
    }
  ];

  return (
    <section id="history" className="relative isolate overflow-hidden bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-40">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 tracking-tight mb-8">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            From university project to Norway's most efficient property-management platform
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className={`${isDesktop ? 'block' : 'hidden'} relative mb-20`}>
          {/* Timeline Rail - Fixed positioning */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gray-300 z-0"></div>
          
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
              >
                {/* Timeline Node with company color */}
                <div 
                  className="relative z-20 w-6 h-6 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 mb-8 group"
                  style={{ backgroundColor: milestone.color }}
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
                >
                  <img 
                    src={milestone.logo} 
                    alt={milestone.alt}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                
                {/* Content with enhanced styling */}
                <div className="max-w-sm">
                  <h3 
                    className="font-mono text-3xl mb-4 font-bold tracking-wide"
                    style={{ color: milestone.color }}
                  >
                    {milestone.year} – {milestone.company}
                  </h3>
                  <h4 className="font-light text-xl text-gray-900 mb-4 leading-tight">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {milestone.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className={`${isDesktop ? 'hidden' : 'block'} relative mb-20`}>
          <div className="relative flex flex-col gap-20 pl-8">
            {/* Timeline Rail - Fixed positioning */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-300 z-0"></div>
            
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
              >
                {/* Timeline Node with company color */}
                <div 
                  className="absolute left-3 top-2 w-6 h-6 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-20 group"
                  style={{ backgroundColor: milestone.color }}
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
                    >
                      <img 
                        src={milestone.logo} 
                        alt={milestone.alt}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    
                    <h3 
                      className="font-mono text-2xl font-bold tracking-wide"
                      style={{ color: milestone.color }}
                    >
                      {milestone.year} – {milestone.company}
                    </h3>
                  </div>
                  
                  <h4 className="font-light text-2xl text-gray-900 mb-4 leading-tight">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {milestone.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

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
    </section>
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
        ) : currentStep === 2 ? (
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
    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white tracking-tight mb-8 transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      Check out what you can earn as a DigiHome owner
    </h2>
    
    <p className={`text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed font-light transition-all duration-700 ease-out ${
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
          Calculate Earnings
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
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-thin text-white tracking-tight mb-4 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Property Details
        </h2>
        <p className={`text-xl text-white/90 mb-2 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          {address}
        </p>
        <p className={`text-lg text-white/80 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '300ms' }}>
          Tell us about your property to get accurate earnings calculation
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Living Rooms */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Living Rooms</h3>
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
            <h3 className="text-2xl font-semibold text-white">Bedrooms</h3>
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
          <h3 className="text-2xl font-semibold text-white mb-6">Bathrooms & Toilets</h3>
          
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
            Calculate My Earnings
          </button>
        </div>
      </form>
    </div>
  );
};

// Updated Footer with DigiHome Branding
export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomeLong.svg" 
                alt="DigiHome" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              The future of home rentals is here. Connecting travelers with unique homes and experiences across the world.
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Find Homes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Become Owner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Business Travel</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2025 DigiHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};