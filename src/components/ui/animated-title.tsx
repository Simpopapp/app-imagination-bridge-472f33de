import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedTitleProps {
  className?: string
}

export const AnimatedTitle = ({ className }: AnimatedTitleProps) => {
  const [isPremium, setIsPremium] = useState(false)
  
  useEffect(() => {
    const handlePremium = () => setIsPremium(true)
    document.addEventListener('premiumActivated', handlePremium)
    return () => document.removeEventListener('premiumActivated', handlePremium)
  }, [])

  const letters = "AKALIBRE FLOW".split("")

  return (
    <motion.h1 
      className={`text-4xl md:text-6xl font-bold flex flex-wrap justify-center gap-1 ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={`inline-block ${
            isPremium 
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500' 
              : ''
          }`}
          animate={isPremium ? {
            scale: [1, 1.2, 1],
            rotate: [0, letter === " " ? 0 : 5, 0],
            color: letter === " " ? "transparent" : undefined,
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1,
          }}
        >
          {letter}
        </motion.span>
      ))}
      {isPremium && (
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-500/20 blur-xl" />
        </motion.div>
      )}
    </motion.h1>
  )
}