import { useState, useEffect } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: 1000,
    height: 1000,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window?.innerWidth, height: window?.innerHeight });
    };

    window?.addEventListener("resize", handleResize);
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, [dimensions]);

  return dimensions;
};

export default useDimensions;
