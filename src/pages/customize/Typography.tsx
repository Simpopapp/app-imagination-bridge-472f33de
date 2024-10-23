import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { Type } from "lucide-react"
import useSound from "use-sound"
import { useAchievements } from "@/hooks/useAchievements"

const fontOptions = [
  {
    name: "Moderna",
    fontFamily: "Inter, sans-serif",
    description: "Clean e minimalista",
    preview: "The quick brown fox jumps over the lazy dog"
  },
  {
    name: "Clássica",
    fontFamily: "Merriweather, serif",
    description: "Elegante e sofisticada",
    preview: "The quick brown fox jumps over the lazy dog"
  },
  {
    name: "Criativa",
    fontFamily: "Outfit, sans-serif",
    description: "Única e expressiva",
    preview: "The quick brown fox jumps over the lazy dog"
  }
]

const Typography = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const { unlockAchievement } = useAchievements()
  const [playHover] = useSound('/sounds/hover.mp3', { volume: 0.5 })
  const [playSelect] = useSound('/sounds/select.mp3', { volume: 0.7 })

  const handleSelectFont = (fontName: string) => {
    playSelect()
    unlockAchievement('first_font')
    toast({
      title: "Fonte selecionada!",
      description: `A fonte ${fontName} foi aplicada com sucesso.`,
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
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <Type className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Escolha a Tipografia
            </h1>
          </motion.div>
          <p className="text-muted-foreground text-lg">
            Selecione o estilo de fonte que melhor expressa sua identidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {fontOptions.map((font, index) => (
            <motion.div
              key={font.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => playHover()}
            >
              <Card 
                className="p-6 cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary"
                onClick={() => handleSelectFont(font.name)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <h2 className="text-xl font-semibold">{font.name}</h2>
                  <p className="text-muted-foreground">{font.description}</p>
                  <div 
                    className="w-full p-4 bg-primary/5 rounded-lg"
                    style={{ fontFamily: font.fontFamily }}
                  >
                    <p className="text-lg">{font.preview}</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p className="text-xs">abcdefghijklmnopqrstuvwxyz</p>
                      <p className="text-xs">0123456789</p>
                    </div>
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
            onClick={() => navigate("/preview")}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
          >
            Finalizar
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Typography