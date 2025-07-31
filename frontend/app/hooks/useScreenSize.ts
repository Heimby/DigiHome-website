import { useEffect, useState } from "react";

/**
 * Custom hook to get current screen size and breakpoint info.
 * @returns {object} - { width, height, isMobile, isTablet, isDesktop }
 */
export interface ScreenSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeScreen: boolean;
}

export function useScreenSize(): ScreenSize {
  const [size, setSize] = useState<ScreenSize>(calculateScreenSize());

  useEffect(() => {
    function handleResize() {
      setSize(calculateScreenSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

function calculateScreenSize(): ScreenSize {
  const width = typeof window !== "undefined" ? window.innerWidth : 1200;
  const height = typeof window !== "undefined" ? window.innerHeight : 800;
  return {
    width,
    height,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    isLargeScreen: width >= 1600,
  };
}
