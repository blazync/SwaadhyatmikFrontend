import { motion } from "framer-motion";

// Define the animation variants
export const slideInFromTop = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
};

// Create a function to apply the animation
export const applyAnimation = (children, variants) => {
  return (
    <motion.div
      variants={variants}
      whileHover="whileHover"
      whileTap="whileTap"
      className="Welcome-box py-[8px] px-[7px] border-0 opacity-[0.9]"
    >
      {children}
    </motion.div>
  );
};
