import { Toast } from "@/components/ui/toast"
import { Trophy } from "lucide-react"
import { motion } from "framer-motion"
import confetti from 'canvas-confetti'

interface AchievementToastProps {
  title: string
  description: string
  points?: number
}

export const showAchievement = ({ title, description, points = 100 }: AchievementToastProps) => {
  // Dispara confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  })

  return (
    <Toast>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg text-white"
      >
        <div className="flex-shrink-0">
          <Trophy className="w-8 h-8" />
        </div>
        <div>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-sm opacity-90">{description}</p>
          {points && (
            <p className="text-sm font-semibold mt-1">
              +{points} pontos
            </p>
          )}
        </div>
      </motion.div>
    </Toast>
  )
}