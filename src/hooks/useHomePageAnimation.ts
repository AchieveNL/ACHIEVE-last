import { useState, useEffect } from "react";

export const useHomePageAnimation = (variant: string = "HomePage") => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(`/animations/json/${variant}.json`);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    loadAnimation();
  }, [variant]);

  return { animationData, loading };
};
