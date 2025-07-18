import React, { useState, useEffect, useRef } from 'react';

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
          <div className="flex items-center">
            <img 
              src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomeLong.svg" 
              alt="DigiHome" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Medlemmer</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Partnere</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Forretningsreiser</a>
          </div>
          
          <div className="hidden md:block">
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Logg inn</a>
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900" style={{ height: 'calc(100vh + 20px)' }}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//7647259-uhd_3840_2160_24fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-8">
            <img 
              src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//DigiHomeLong.svg" 
              alt="DigiHome" 
              className="h-16 md:h-24 w-auto mx-auto mb-6"
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
            The future of home rentals is here. Homes and experiences that move with you across the world.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button 
              onClick={() => scrollToSection('home-humanoid')}
              className="w-full sm:w-auto px-8 py-4 bg-[#D4A2FF] hover:bg-[#c490ff] text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Find a Home
            </button>
            <button 
              onClick={() => scrollToSection('home-humanoid')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#D4A2FF] hover:bg-[#D4A2FF] text-[#D4A2FF] hover:text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
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

// Property Card Component
export const PropertyCard = ({ property }) => {
  return (
    <div className="flex-shrink-0 w-80 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Image Container with Overlay Info - Restored to original tall height */}
      <div className="relative h-[520px] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Info Box Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-start gap-3">
            {/* Logo Square */}
            <div className="w-12 h-12 bg-purple-300 rounded-lg flex-shrink-0 flex items-center justify-center">
              <span className="text-white text-xs font-medium">Logo</span>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-medium text-gray-900 truncate">{property.title}</h3>
                <div className="flex items-center ml-2">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-600">{property.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-2 truncate">{property.location}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl text-gray-900">{property.price}</span>
                  <span className="text-gray-500 text-sm">/ night</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Search Bar Component
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
    <div className="max-w-4xl mx-auto">
      {!isExpanded ? (
        // Collapsed State
        <div 
          onClick={handleExpand}
          className="bg-white rounded-full shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center px-6 py-4">
            <div className="flex-1 text-gray-500 font-medium">Where?</div>
            <div className="text-gray-300 mx-4">︱</div>
            <div className="flex-1 text-gray-500 font-medium">When?</div>
            <div className="text-gray-300 mx-4">︱</div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      ) : (
        // Expanded State - Vertical expansion maintaining horizontal layout
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 px-6 py-6 transition-all duration-300 ease-out">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={handleCollapse}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search Fields in Horizontal Layout */}
          <div className="flex items-end gap-4 mb-4">
            {/* Where */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-2">Where?</label>
              <input
                type="text"
                value={searchData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Search by city"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Move-in */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-2">Move-in</label>
              <input
                type="date"
                value={searchData.moveIn}
                onChange={(e) => handleInputChange('moveIn', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Move-out */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-2">Move-out</label>
              <input
                type="date"
                value={searchData.moveOut}
                onChange={(e) => handleInputChange('moveOut', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-all transition-all"
              />
            </div>

            {/* Guests */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-2">Guests</label>
              <input
                type="number"
                value={searchData.guests}
                onChange={(e) => handleInputChange('guests', e.target.value)}
                placeholder="Select guests"
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Rooms */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-2">Rooms</label>
            <div className="flex gap-2">
              {roomOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange('rooms', option)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    searchData.rooms === option
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export const PropertyCardsSection = () => {
  const scrollContainerRef = useRef(null);
  
  const properties = [
    {
      id: 1,
      title: "Skostredet",
      location: "Bergen • 1200 kr • Sentrum",
      price: "1,200 kr",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 2,
      title: "Bryggen Loft",
      location: "Bergen • 1800 kr • Bryggen",
      price: "1,800 kr",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
    },
    {
      id: 3,
      title: "Oslo Central",
      location: "Oslo • 2200 kr • Sentrum",
      price: "2,200 kr",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 4,
      title: "Stavanger Haven",
      location: "Stavanger • 1500 kr • Gamle Stavanger",
      price: "1,500 kr",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: 5,
      title: "Trondheim Cozy",
      location: "Trondheim • 1300 kr • Bakklandet",
      price: "1,300 kr",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 6,
      title: "Ålesund View",
      location: "Ålesund • 1600 kr • Brosundet",
      price: "1,600 kr",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  // Create enough copies to ensure smooth infinite scroll
  const infiniteProperties = [...properties, ...properties, ...properties, ...properties, ...properties];
  
  const cardWidth = 344; // 320px width + 24px gap
  const originalSetLength = properties.length;
  const totalCards = infiniteProperties.length;

  // Initialize carousel and set up infinite scroll monitoring
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Start at the second set to allow scrolling in both directions
      const initialScroll = originalSetLength * cardWidth;
      container.scrollLeft = initialScroll;

      // Monitor scroll position for infinite loop
      const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const singleSetWidth = originalSetLength * cardWidth;
        
        // If we're near the end, jump to the beginning + some buffer
        if (scrollLeft >= maxScroll - cardWidth) {
          container.scrollLeft = singleSetWidth;
        }
        // If we're near the beginning, jump to the end - some buffer
        else if (scrollLeft <= cardWidth) {
          container.scrollLeft = singleSetWidth * 3;
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
    <div className="relative w-full">
      {/* Left Arrow */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity transform-none backdrop-blur-sm bg-white/20 rounded-full"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity transform-none backdrop-blur-sm bg-white/20 rounded-full"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide gap-6 px-16 py-4"
      >
        {infiniteProperties.map((property, index) => (
          <PropertyCard key={`${property.id}-${Math.floor(index / originalSetLength)}-${index % originalSetLength}`} property={property} />
        ))}
      </div>
    </div>
  );
};

// Home Humanoid Section Component - Clean Slate
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
    <section id="home-humanoid" className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col justify-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Text */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Book your flexible home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We turn home rentals into experiences and collaborate with hundreds of home owners across Norway.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${
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

        {/* View All Properties Tab */}
        <div className={`flex justify-end mt-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="bg-white text-gray-700 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gray-300 font-medium">
            View all properties
          </button>
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