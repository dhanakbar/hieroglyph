import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CloudType } from "@/types/components/cloud_type";
import gsap from "gsap";

const Cloud = ({ customClass }: CloudType) => {
  const gsapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(gsapRef.current, {
      x: "-100px",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div>
      <motion.div
        ref={gsapRef}
        className={`absolute bg-contain bg-no-repeat bg-center ${customClass}`}
        drag
        dragConstraints={{
          top: -80,
          left: -20,
          right: 20,
          bottom: 80,
        }}
        dragElastic={0.2}
        onDragEnd={(event, info) => {
          console.log({ info });
          info.point.x = 0;
          info.point.y = 0;
        }}
      ></motion.div>
    </div>
  );
};

export default Cloud;
