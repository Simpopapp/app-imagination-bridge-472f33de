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
      className={`text-4xl md:text-6xl font-bold flex flex-wrap justify-center gap-1 relative ${className}`}
      style={{
        textShadow: isPremium ? "0 0 20px rgba(123, 97, 255, 0.7)" : "none",
      }}
    >
      <div className={`absolute inset-0 ${isPremium ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-blue-500/20 blur-xl" />
        <div className="absolute -top-8 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />
        <div className="absolute -bottom-8 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm" />
      </div>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={`inline-block relative ${
            isPremium 
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500' 
              : ''
          }`}
          animate={isPremium ? {
            y: [0, -5, 0],
            scale: [1, 1.1, 1],
            rotateX: [0, 360, 0],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1,
          }}
        >
          {letter}
          {isPremium && (
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.1,
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 blur-xl" />
            </motion.div>
          )}
        </motion.span>
      ))}
    </motion.h1>
  )
}