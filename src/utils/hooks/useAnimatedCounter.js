import { useEffect, useState, useRef } from 'react';

const useAnimatedCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const startTime = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const increment = Math.floor((target * progress) / duration);

      if (increment < target) {
        setCount(increment);
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return count;
};

export default useAnimatedCounter;
