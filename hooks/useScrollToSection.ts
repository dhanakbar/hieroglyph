import { useEffect } from "react";

const useScrollToSection = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window?.removeEventListener("wheel", handleScroll);
    };
  }, [ref]);
};

export default useScrollToSection;
