import { Button } from "@/components/ui/button"
import { PremiumButton } from "@/components/ui/premium-button"
import { AnimatedTitle } from "@/components/ui/animated-title"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Sparkles } from "lucide-react"

const Index = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-12 max-w-2xl mx-auto relative z-10"
      >
        <div className="space-y-6">
          <AnimatedTitle />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            Transforme suas ideias em realidade com uma experiência verdadeiramente inovadora
          </motion.p>
        </div>

        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg"
              onClick={() => navigate("/onboarding")}
              className="w-full md:w-auto px-8 py-6 text-lg tech-border group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Iniciar Jornada
                <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              </span>
              <div className="absolute inset-0 tech-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </motion.div>
          <div className="pt-2">
            <PremiumButton />
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" />
        </div>
      </motion.div>
    </div>
  )
}

export default Index