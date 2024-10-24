import { Button } from "@/components/ui/button"
import { PremiumButton } from "@/components/ui/premium-button"
import { AnimatedTitle } from "@/components/ui/animated-title"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const Index = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-12 max-w-2xl mx-auto"
      >
        <div className="space-y-6">
          <AnimatedTitle />
          <p className="text-lg text-muted-foreground">
            Transforme suas ideias em realidade de forma simples e eficiente
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            size="lg"
            className="w-full md:w-auto px-8 py-6 text-lg group"
            onClick={() => navigate("/onboarding")}
          >
            Começar Jornada
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="pt-2">
            <PremiumButton />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Index