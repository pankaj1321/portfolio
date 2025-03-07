import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentBreakpoint, addResizeListener } from '../utils/responsive';

// Create context
const ResponsiveContext = createContext();

/**
 * Provider component that shares responsive state with all children
 */
export const ResponsiveProvider = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState('md');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Set up resize listener to update breakpoint
    const removeListener = addResizeListener(() => {
      const current = getCurrentBreakpoint();
      setBreakpoint(current);
      setIsMobile(current === 'xs' || current === 'sm');
    });
    
    // Cleanup listener on unmount
    return () => removeListener();
  }, []);
  
  const value = {
    breakpoint,
    isMobile,
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl',
  };
  
  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

/**
 * Hook to use responsive context
 */
export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};
