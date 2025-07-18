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
          <div className="text-white text-2xl font-bold italic">DigiHome</div>
          
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

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900" style={{ height: 'calc(100vh + 20px)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://hentgspgiocaufznprrw.supabase.co/storage/v1/object/public/public-images//vendome-living-smoked-dark-wood-timber-oak-wall-panelling-veneer-bambo-luxury-decorative-panels-ezgif.com-webp-to-jpg-converter.png"
          alt="DigiHome Interior"
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
            DigiHome
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The future of home rentals is here. Homes and experiences that move with you across the world.
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
    <section id="home-humanoid" className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Book your flexible home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We turn home rentals into experiences and collaborate with hundreds of home owners across Norway.
          </p>
        </div>
        
        {/* Ready for new content */}
        <div className={`text-center transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            {/* This space is ready for your new content */}
          </div>
        </div>
      </div>
    </section>
  );
};

// Advanced Search Bar Component
export const SearchBar = () => {
  const [searchState, setSearchState] = useState('collapsed'); // collapsed, location, dates
  const [location, setLocation] = useState('');
  const [moveInDate, setMoveInDate] = useState(null);
  const [moveOutDate, setMoveOutDate] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [flexibleDates, setFlexibleDates] = useState({ moveIn: 0, moveOut: 0 });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState('');

  const norwegianCities = [
    'Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Kristiansand', 'Fredrikstad', 
    'Drammen', 'Skien', 'Bodø', 'Tromsø', 'Ålesund', 'Tønsberg', 'Moss'
  ];

  const recentSearches = [
    { location: 'Oslo', dates: '15 Jul - 18 Jul 2025' },
    { location: 'Bergen', dates: '22 Jul - 25 Jul 2025' },
    { location: 'Stavanger', dates: '1 Aug - 4 Aug 2025' }
  ];

  const filteredCities = norwegianCities.filter(city => 
    city.toLowerCase().includes(location.toLowerCase())
  );

  const formatDate = (date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    }).format(date);
  };

  const handleLocationClick = () => {
    setSearchState('location');
    setShowSuggestions(true);
    setShowCalendar(false);
  };

  const handleDatesClick = () => {
    setSearchState('dates');
    setShowCalendar(true);
    setShowSuggestions(false);
  };

  const handleLocationSelect = (city) => {
    setLocation(city);
    setShowSuggestions(false);
    setSearchState('dates');
    setShowCalendar(true);
  };

  const handleDateSelect = (date) => {
    if (!moveInDate || (moveInDate && moveOutDate)) {
      setMoveInDate(date);
      setMoveOutDate(null);
    } else if (date > moveInDate) {
      setMoveOutDate(date);
    } else {
      setMoveInDate(date);
      setMoveOutDate(null);
    }
  };

  const handleSearch = () => {
    setValidationError('');
    
    if (!location) {
      setValidationError('Please choose a location');
      setSearchState('location');
      setShowSuggestions(true);
      return;
    }
    
    if (!moveInDate || !moveOutDate) {
      setValidationError('Please select your move-in and move-out dates');
      setSearchState('dates');
      setShowCalendar(true);
      return;
    }

    setIsLoading(true);
    setSearchState('summary');
    setShowCalendar(false);
    setShowSuggestions(false);
    
    // Simulate search
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Close overlays when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowCalendar(false);
        setShowSuggestions(false);
        if (searchState !== 'summary') {
          setSearchState('collapsed');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchState]);

  const renderCalendar = () => {
    const today = new Date();
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    // Generate calendar days
    for (let i = 0; i < 42; i++) {
      const isCurrentMonth = current.getMonth() === currentMonth.getMonth();
      const isToday = current.toDateString() === today.toDateString();
      const isSelected = (moveInDate && current.toDateString() === moveInDate.toDateString()) ||
                        (moveOutDate && current.toDateString() === moveOutDate.toDateString());
      const isInRange = moveInDate && moveOutDate && current >= moveInDate && current <= moveOutDate;
      const isPast = current < today;

      days.push(
        <button
          key={i}
          onClick={() => !isPast && handleDateSelect(new Date(current))}
          disabled={isPast}
          className={`
            w-10 h-10 rounded-lg text-sm font-medium transition-colors
            ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
            ${isSelected ? 'bg-blue-600 text-white' : ''}
            ${isInRange && !isSelected ? 'bg-blue-100 text-blue-600' : ''}
            ${isToday && !isSelected ? 'bg-gray-100 text-gray-900' : ''}
            ${isPast ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100'}
            ${!isPast && !isSelected ? 'hover:bg-gray-100' : ''}
          `}
        >
          {current.getDate()}
        </button>
      );
      
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  return (
    <div className="max-w-4xl mx-auto relative search-container">
      {/* Main Search Pill */}
      <div className="bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
        <div className="flex items-center">
          {/* Location Section */}
          <div className="flex-1 relative">
            <button
              onClick={handleLocationClick}
              className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              {searchState === 'location' ? (
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Where?</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Search by city or area"
                    className="w-full text-gray-900 bg-transparent border-none outline-none placeholder-gray-400"
                    autoFocus
                  />
                </div>
              ) : (
                <div>
                  <span className="text-gray-500 text-sm">Where?</span>
                  {location && (
                    <div className="text-gray-900 font-medium">{location}</div>
                  )}
                </div>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="w-px h-12 bg-gray-200"></div>

          {/* Dates Section */}
          <div className="flex-1 relative">
            <button
              onClick={handleDatesClick}
              className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              {searchState === 'dates' || (moveInDate && moveOutDate) ? (
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">When?</label>
                  <div className="text-gray-900 font-medium">
                    {moveInDate && moveOutDate 
                      ? `${formatDate(moveInDate)} - ${formatDate(moveOutDate)}`
                      : moveInDate 
                      ? `${formatDate(moveInDate)} - Select checkout`
                      : 'Select dates'
                    }
                  </div>
                </div>
              ) : (
                <span className="text-gray-500 text-sm">When?</span>
              )}
            </button>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className={`px-8 py-4 rounded-r-full font-medium transition-colors ${
              location && moveInDate && moveOutDate
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>

      {/* Validation Error */}
      {validationError && (
        <div className="mt-2 text-red-600 text-sm text-center animate-pulse">
          {validationError}
        </div>
      )}

      {/* Location Suggestions */}
      {showSuggestions && searchState === 'location' && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
          {recentSearches.length > 0 && (
            <div className="p-4 border-b border-gray-100">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Recent searches</h4>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(search.location)}
                  className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="font-medium text-gray-900">{search.location}</div>
                  <div className="text-sm text-gray-500">{search.dates}</div>
                </button>
              ))}
            </div>
          )}
          
          {filteredCities.length > 0 && (
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Cities in Norway</h4>
              {filteredCities.map((city, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(city)}
                  className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="font-medium text-gray-900">{city}</div>
                  <div className="text-sm text-gray-500">Norway</div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Calendar Overlay */}
      {showCalendar && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-medium text-gray-900">Select dates</h4>
              <button
                onClick={() => setShowCalendar(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Date Headers */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Move-in</label>
                <div className="text-gray-900 font-medium bg-gray-50 px-3 py-2 rounded-lg">
                  {moveInDate ? formatDate(moveInDate) : 'Select date'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Move-out</label>
                <div className="text-gray-900 font-medium bg-gray-50 px-3 py-2 rounded-lg">
                  {moveOutDate ? formatDate(moveOutDate) : 'Select date'}
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h4 className="text-lg font-medium text-gray-900">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h4>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                {renderCalendar()}
              </div>
            </div>

            {/* Flexible Dates */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h5 className="text-sm font-medium text-gray-700 mb-3">Flexible dates</h5>
              <div className="flex flex-wrap gap-2">
                {[1, 3, 5, 7].map(days => (
                  <button
                    key={days}
                    onClick={() => setFlexibleDates({ ...flexibleDates, moveIn: days })}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      flexibleDates.moveIn === days
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ±{days} days
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
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