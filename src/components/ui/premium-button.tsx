import { useState } from "react"
import { Button } from "./button"
import { PremiumBadge } from "./premium-badge"
import { useToast } from "@/hooks/use-toast"
import confetti from "canvas-confetti"
import { motion, AnimatePresence } from "framer-motion"
import useSound from "use-sound"

export const PremiumButton = () => {
  const [isPremium, setIsPremium] = useState(false)
  const { toast } = useToast()
  const [playSuccess] = useSound('/sounds/success.mp3', { volume: 0.5 })

  const handlePremium = () => {
    setIsPremium(true)
    playSuccess()
    
    // Multiple confetti bursts
    const duration = 3000
    const end = Date.now() + duration
    
    const frame = () => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 }
      })
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 }
      })
    
      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()

    // Notify all components about premium status
    document.dispatchEvent(new CustomEvent('premiumActivated'))
    
    toast({
      title: "Bem-vindo ao AKAFLOW Premium!",
      description: "Sua experiência agora será ainda mais incrível!",
      duration: 5000,
    })
  }

  return (
    <AnimatePresence>
      {!isPremium ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            onClick={handlePremium}
            className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black hover:from-amber-600 hover:to-yellow-400 relative overflow-hidden"
          >
            <span className="relative z-10">Torne-se AKAFLOW Premium</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ opacity: 0.3 }}
            />
          </Button>
        </motion.div>
      ) : (
        <PremiumBadge />
      )}
    </AnimatePresence>
  )
}