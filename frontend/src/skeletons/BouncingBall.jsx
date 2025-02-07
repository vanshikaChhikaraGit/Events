import { motion } from "framer-motion";

const BouncingBall = () => {
  return (
    <motion.div
      className="bg-green-500 size-3 rounded-full"
      animate={{
        y: [0, -1,0], // Moves up and down
      }}
      transition={{
        duration: 1.0, // Duration of one bounce
        repeat: Infinity, // Loop forever
        repeatType: "mirror", // Smooth transition
        ease: "easeInOut", // Easing for smooth effect
      }}
    />
  );
};

export default BouncingBall;
