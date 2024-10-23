import { Button } from "@/components/ui/button"
import { PremiumButton } from "@/components/ui/premium-button"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          AKAFLOW APP
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
          Transforme suas ideias em realidade de forma divertida e intuitiva
        </p>

        <div className="space-y-4">
          <Button 
            size="lg"
            className="w-full md:w-auto px-8 py-6 text-lg"
            onClick={() => navigate("/onboarding")}
          >
            Começar Jornada
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