'use client'
import { motion } from "motion/react";

type MotionButtonProps = {
  children: React.ReactNode
  className?: string
  onClick: ()=> void
}

export default function MotionButton({ children, className = '', onClick }: MotionButtonProps){
  return (
    <motion.button
      className={`${className}`}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.1,
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}