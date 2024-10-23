import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { Palette } from "lucide-react"
import useSound from "use-sound"
import { PremiumBadge } from "@/components/ui/premium-badge"

const colorSchemes = [
  {
    name: "Neon Cyberpunk",
    colors: ["#FF00FF", "#00FFFF", "#FF0000"],
    className: "bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-red-500"
  },
  {
    name: "Ocean Breeze",
    colors: ["#0077BE", "#50C878", "#87CEEB"],
    className: "bg-gradient-to-r from-blue-500 via-green-400 to-sky-400"
  },
  {
    name: "Sunset Vibes",
    colors: ["#FF7F50", "#FF4500", "#FFD700"],
    className: "bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400"
  }
]

const Theme = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [playHover] = useSound('./sounds/hover.mp3', { volume: 0.5 })
  const [playSelect] = useSound('./sounds/select.mp3', { volume: 0.7 })

  const handleSelectTheme = (themeName: string) => {
    playSelect()
    toast({
      title: "Tema selecionado!",
      description: `O tema ${themeName} foi aplicado com sucesso.`,
      duration: 2000
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto space-y-8 pt-8"
      >
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="flex items-center justify-center gap-3"
            >
              <Palette className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                AKAFLOW - Escolha seu Tema
              </h1>
            </motion.div>
            <PremiumBadge />
          </div>
          <p className="text-muted-foreground text-lg">
            Selecione a combinação de cores que melhor representa seu app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {colorSchemes.map((scheme, index) => (
            <motion.div
              key={scheme.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => playHover()}
            >
              <Card 
                className="p-6 cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary overflow-hidden"
                onClick={() => handleSelectTheme(scheme.name)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-full h-24 rounded-lg ${scheme.className}`} />
                  <h2 className="text-xl font-semibold">{scheme.name}</h2>
                  <div className="flex gap-2">
                    {scheme.colors.map((color) => (
                      <div
                        key={color}
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            Voltar
          </Button>
          <Button
            onClick={() => navigate("/customize/layout")}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
          >
            Próximo
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Theme
