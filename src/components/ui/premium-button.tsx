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
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    toast({
      title: "Bem-vindo ao AKAFLOW Premium!",
      description: "Você agora tem acesso a todos os recursos premium.",
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
            className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black hover:from-amber-600 hover:to-yellow-400"
          >
            Torne-se AKAFLOW Premium
          </Button>
        </motion.div>
      ) : (
        <PremiumBadge />
      )}
    </AnimatePresence>
  )
}