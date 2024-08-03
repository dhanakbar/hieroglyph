import React from "react";
import { motion } from "framer-motion";
import { CloudType } from "@/types/components/cloud_type";

import useDimensions from "@/hooks/useDimension";

const Cloud = ({ customClass }: CloudType) => {
  const dimension = useDimensions();

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
    ></motion.div>
  );
};

export default Cloud;
