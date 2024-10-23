import { motion } from "framer-motion"
import { Crown } from "lucide-react"
import { cn } from "@/lib/utils"

interface PremiumBadgeProps {
  className?: string
}

export const PremiumBadge = ({ className }: PremiumBadgeProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 text-black shadow-lg",
        className
      )}
    >
      <Crown className="w-4 h-4" />
      <span>AKAFLOW Premium</span>
    </motion.div>
  )
}