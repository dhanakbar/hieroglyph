import { Layout } from "@/components";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useScroll from "@/hooks/useScroll";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import gsap from "gsap";
import usePosition from "@/hooks/usePosition";

gsap.registerPlugin(MotionPathPlugin);

const Journey = () => {
  const scroll = useScroll();
  const refG = useRef<any>(null);

  const { top, left } = usePosition(refG);

  useEffect(() => {
    gsap.to("#leaf", {
      duration: 30,
      yoyo: true,
      // repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: 12,
        alignOrigin: [0.5, 1],
      },
    });
  }, []);

  return (
    <Layout title="Journey">
      <motion.section className={`text-primary-600 p-4`}>
        <svg
          className="h-lvh w-full px-8"
          viewBox="0 2 1350 1050"
          preserveAspectRatio="none"
        >
          <path
            visibility={"hidden"}
            stroke="#444444"
            color="#000"
            fill="none"
            id="path"
            d="M1 0C35.5222 113.778 425.911 336 973 336C1378.5 336 1220 36 1066 66.5C857.5 107.794 476.5 559.5 268.623 566.792C84.7759 573.24 -33.0481 367.709 148 306.5C359 235.165 884 808 1148 816.5C1428.13 825.519 1378.48 488.5 961.5 543C880.318 553.611 366.725 638.221 226 688.5C11.6017 765.101 108 953.5 730 978.5"
          />
        </svg>
        <svg
          id="leaf"
          width="160px"
          height="100px"
          // viewBox="0 0 74 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.2305 26.4977C66.2305 26.4977 59.4051 38.2149 39.263 25.707C28.3192 18.9097 13.3879 18.6711 5.69585 38.4391C12.6849 34.2541 29.2509 26.5414 42.7219 37.4749C42.7219 37.4749 28.5745 28.5273 6.80988 43.3988C10.8125 50.4906 21.6919 65.9836 38.0276 60.5781C59.6081 53.433 66.2305 26.4977 66.2305 26.4977Z"
            fill="#3A7F0D"
          />
          <path
            d="M6.90138 43.3382C22.6733 52.8395 42.8406 53.1176 58.9338 42.9948C64.2456 34.5355 66.2305 26.4977 66.2305 26.4977C66.2305 26.4977 59.4051 38.2149 39.2629 25.707C28.3192 18.9097 13.3879 18.6711 5.69585 38.4391C12.6849 34.2541 29.2509 26.5414 42.7219 37.4749C42.7212 37.4742 28.6137 28.5549 6.90138 43.3382Z"
            fill="#49A010"
          />
        </svg>
      </motion.section>
    </Layout>
  );
};

export default Journey;
