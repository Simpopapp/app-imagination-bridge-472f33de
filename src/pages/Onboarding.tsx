import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { PremiumBadge } from "@/components/ui/premium-badge"
import { AnimatedTitle } from "@/components/ui/animated-title"
import { useNavigate } from "react-router-dom"

const Onboarding = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="relative w-full">
              <AnimatedTitle className="text-3xl md:text-4xl" />
            </div>
            <PremiumBadge />
          </div>
          
          <p className="text-muted-foreground">
            Personalize sua experiência escolhendo o tema que mais combina com você
          </p>
        </div>

        <div className="flex justify-center py-8">
          <ThemeSwitcher />
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
            size="lg"
            onClick={() => navigate("/customize")}
          >
            Continuar
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Onboarding