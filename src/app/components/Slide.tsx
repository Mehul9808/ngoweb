import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Slide({ children, delay, className }: props) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: -80 },
        visible: { opacity: 1, translateX: 0 },
      }}
      transition={{
        type: "ease-in",
        duration: 1,
        damping: 300,
        delay: 0.4,
        stiffness: 0,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}