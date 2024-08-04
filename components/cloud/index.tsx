import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CloudType } from "@/types/components/cloud_type";

const Cloud = ({ customClass, config }: CloudType) => {
  useEffect(() => {}, [config]);

  return (
    <motion.div
      className={`absolute bg-contain bg-no-repeat bg-center ${customClass}`}
      drag
      dragConstraints={{
        top: -80,
        left: -20,
        right: 20,
        bottom: 80,
      }}
      initial={{ x: -50 }}
      animate={{ x: 50 }}
      transition={config}
    ></motion.div>
  );
};

export default Cloud;
