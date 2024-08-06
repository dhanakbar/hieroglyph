import { useEffect, useRef } from "react";

const useSVGScrollAnimation = (
  svgRef: React.RefObject<SVGSVGElement>,
  pathRef: React.RefObject<SVGPathElement>
) => {
  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      const percentage = distance / totalDistance;
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength / 2}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
      console.log({
        distance,
        totalDistance,
        percentage,
        pathLength,
      });
    };

    window.addEventListener("scroll", scroll);
    scroll(); // Initial call to set the correct strokeDashoffset on mount

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [svgRef, pathRef]);
};

export default useSVGScrollAnimation;
