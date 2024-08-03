import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CloudType } from "@/types/components/cloud_type";
import gsap from "gsap";

const Cloud = ({ customClass, config }: CloudType) => {
  const gsapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(gsapRef.current, config);
  }, []);

  return (
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
    ></motion.div>
  );
};

export default Cloud;
