import { motion } from "framer-motion"

interface AnimatedTitleProps {
  className?: string
}

export const AnimatedTitle = ({ className }: AnimatedTitleProps) => {
  return (
    <motion.h1 
      className={`text-4xl md:text-6xl font-light tracking-tight ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="text-primary font-medium">AKA</span>
      <span className="text-foreground">FLOW</span>
    </motion.h1>
  )
}