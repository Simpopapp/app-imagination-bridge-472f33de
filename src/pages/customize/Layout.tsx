import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { Layout as LayoutIcon, Columns, Rows, Grid } from "lucide-react"
import useSound from "use-sound"
import { useAchievements } from "@/hooks/useAchievements"

const layoutOptions = [
  {
    name: "Colunas",
    icon: Columns,
    description: "Layout em colunas verticais",
    preview: "grid grid-cols-2 md:grid-cols-3"
  },
  {
    name: "Linhas",
    icon: Rows,
    description: "Layout em linhas horizontais",
    preview: "grid grid-rows-2"
  },
  {
    name: "Grade",
    icon: Grid,
    description: "Layout em grade responsiva",
    preview: "grid grid-cols-2 md:grid-cols-4"
  }
]

const Layout = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const { unlockAchievement } = useAchievements()
  const [playHover] = useSound('/sounds/hover.mp3', { volume: 0.5 })
  const [playSelect] = useSound('/sounds/select.mp3', { volume: 0.7 })

  const handleSelectLayout = (layoutName: string) => {
    playSelect()
    unlockAchievement('first_layout')
    toast({
      title: "Layout selecionado!",
      description: `O layout ${layoutName} foi aplicado com sucesso.`,
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
            <LayoutIcon className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Escolha o Layout
            </h1>
          </motion.div>
          <p className="text-muted-foreground text-lg">
            Defina como os elementos serão organizados na tela
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {layoutOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => playHover()}
            >
              <Card 
                className="p-6 cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary"
                onClick={() => handleSelectLayout(option.name)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <option.icon className="w-12 h-12 text-primary" />
                  <h2 className="text-xl font-semibold">{option.name}</h2>
                  <p className="text-muted-foreground">{option.description}</p>
                  <div className={`w-full h-24 border-2 border-dashed border-primary/30 rounded-lg ${option.preview}`}>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="bg-primary/10 m-1 rounded" />
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
            onClick={() => navigate("/customize/typography")}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
          >
            Próximo
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Layout