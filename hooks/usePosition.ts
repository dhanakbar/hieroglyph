import { useEffect, useState, RefObject } from "react";

const usePosition = (ref: RefObject<HTMLElement>) => {
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const pos = ref.current.getBoundingClientRect();
        setPosition({ top: pos.top, left: pos.left });
      }
      requestAnimationFrame(updatePosition);
    };

    const animationFrameId = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationFrameId);
  }, [ref]);

  return { ...position };
};

export default usePosition;
