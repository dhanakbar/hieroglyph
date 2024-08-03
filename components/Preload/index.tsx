import { useEffect } from "react";
import { gsap } from "gsap";

const Preload: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(".ball", { scale: 0, duration: 2 })
      .to(".ball", {
        scale: 100,
        duration: 1,
        yoyo: true,
        ease: "bounce.out",
      })
      .to(".preload", { opacity: 0, duration: 1, delay: 1 });
  }, []);

  return (
    <div
      className="preload bg-primary-600 fixed left-0 top-0 z-50 w-screen h-screen overflow-hidden"
      style={{ opacity: 1 }}
    >
      <div className="ball w-12 h-12 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-100" />
    </div>
  );
};

export default Preload;
