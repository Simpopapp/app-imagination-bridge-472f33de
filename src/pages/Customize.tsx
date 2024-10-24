import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { Paintbrush, Layout, Type, ArrowLeft, ArrowRight } from "lucide-react"

const CustomizeOptions = [
  {
    title: "Cores & Estilo",
    description: "Escolha as cores e o estilo visual do seu app",
    icon: Paintbrush,
    path: "/customize/theme"
  },
  {
    title: "Layout",
    description: "Defina como os elementos serão organizados",
    icon: Layout,
    path: "/customize/layout"
  },
  {
    title: "Tipografia",
    description: "Selecione as fontes que combinam com sua ideia",
    icon: Type,
    path: "/customize/typography"
  }
]

const Customize = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12 pt-8"
      >
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-light tracking-tight"
          >
            Personalize sua Experiência
          </motion.h1>
          <p className="text-muted-foreground text-lg">
            Escolha como você quer que seu app se pareça
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {CustomizeOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="p-8 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-primary"
                onClick={() => navigate(option.path)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <option.icon className="w-12 h-12 text-primary" />
                  <h2 className="text-xl font-medium">{option.title}</h2>
                  <p className="text-muted-foreground">{option.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 pt-8">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Button>
          <Button
            onClick={() => navigate("/preview")}
            className="group"
          >
            Visualizar
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Customize