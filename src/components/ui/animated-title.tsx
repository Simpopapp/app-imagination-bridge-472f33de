import { motion } from "framer-motion"

interface AnimatedTitleProps {
  className?: string
}

export const AnimatedTitle = ({ className }: AnimatedTitleProps) => {
  return (
    <motion.h1 
      className={`text-4xl md:text-6xl font-light tracking-tight glow-text ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.span 
        className="text-cyan-400 font-medium inline-block"
        animate={{ 
          textShadow: [
            "0 0 10px rgba(0, 255, 255, 0.5)",
            "0 0 20px rgba(0, 255, 255, 0.7)",
            "0 0 10px rgba(0, 255, 255, 0.5)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        AKA
      </motion.span>
      <motion.span 
        className="text-foreground inline-block ml-2"
        animate={{ 
          textShadow: [
            "0 0 10px rgba(128, 0, 255, 0.5)",
            "0 0 20px rgba(128, 0, 255, 0.7)",
            "0 0 10px rgba(128, 0, 255, 0.5)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        FLOW
      </motion.span>
    </motion.h1>
  )
}