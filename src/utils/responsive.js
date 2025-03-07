/**
 * Responsive utilities for the portfolio
 * Handles responsive behaviors and provides helper functions
 */

// Breakpoints matching CSS media queries
export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

/**
 * Check if the current viewport is below a specified breakpoint
 * @param {string} breakpoint - The breakpoint to check against (sm, md, lg, xl)
 * @returns {boolean} - True if viewport is below the breakpoint
 */
export const isBelowBreakpoint = (breakpoint) => {
  const width = window.innerWidth;
  return width < breakpoints[breakpoint];
};

/**
 * Get the current active breakpoint
 * @returns {string} - The current active breakpoint name
 */
export const getCurrentBreakpoint = () => {
  const width = window.innerWidth;
  
  if (width < breakpoints.sm) return 'xs';
  if (width < breakpoints.md) return 'sm';
  if (width < breakpoints.lg) return 'md';
  if (width < breakpoints.xl) return 'lg';
  return 'xl';
};

/**
 * Add a resize event listener with debounce
 * @param {Function} callback - The function to call on resize
 * @param {number} delay - Debounce delay in ms
 * @returns {Function} - Function to remove the event listener
 */
export const addResizeListener = (callback, delay = 250) => {
  let timeoutId;
  
  const handleResize = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, delay);
  };
  
  window.addEventListener('resize', handleResize);
  
  // Call once initially
  callback();
  
  // Return function to remove listener
  return () => {
    window.removeEventListener('resize', handleResize);
    clearTimeout(timeoutId);
  };
};

/**
 * Add responsive classes to an element based on viewport size
 * @param {HTMLElement} element - The element to add classes to
 * @param {Object} classes - Object with breakpoint keys and class values
 */
export const addResponsiveClasses = (element, classes) => {
  if (!element) return;
  
  const currentBreakpoint = getCurrentBreakpoint();
  const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl'];
  const currentIndex = breakpointOrder.indexOf(currentBreakpoint);
  
  // Clear existing responsive classes
  element.classList.remove(...Object.values(classes));
  
  // Add classes for current and larger breakpoints
  for (let i = 0; i <= currentIndex; i++) {
    const bp = breakpointOrder[i];
    if (classes[bp]) {
      element.classList.add(classes[bp]);
    }
  }
};
