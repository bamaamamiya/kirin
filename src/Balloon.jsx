import { motion } from "framer-motion";

const Balloon = ({ delay = 0, left = 50, size = 40, duration = 5 }) => {
  return (
    <motion.img
      src="/images/balloon.png"
      alt="Balon"
      className="absolute z-20"
      style={{
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -800, opacity: 1 }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

export default Balloon;
