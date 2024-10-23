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
      className={`text-4xl md:text-6xl font-bold flex flex-wrap justify-center gap-1 relative ${className} cyberpunk-text`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-purple-900/20 to-black/40 blur-sm" />
      
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={`inline-block relative ${
            isPremium 
              ? 'premium-glitch text-red-600' 
              : 'text-slate-200'
          }`}
          animate={isPremium ? {
            x: [0, -2, 2, -2, 0],
            filter: [
              'brightness(1) contrast(1)',
              'brightness(1.2) contrast(1.5)',
              'brightness(1) contrast(1)'
            ]
          } : {}}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.05,
          }}
        >
          {letter}
          {isPremium && (
            <motion.div
              className="absolute inset-0 -z-10 opacity-80"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.1,
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-red-900 via-purple-900 to-red-900 blur-sm" />
            </motion.div>
          )}
        </motion.span>
      ))}
    </motion.h1>
  )
}