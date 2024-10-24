import { Moon, Sun, Zap } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./button"
import { motion } from "framer-motion"
import useSound from "use-sound"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const [playHover] = useSound('./sounds/hover.mp3', { volume: 0.5 })
  const [playSelect] = useSound('./sounds/select.mp3', { volume: 0.7 })

  const handleThemeChange = (newTheme: string) => {
    playSelect()
    setTheme(newTheme)
  }

  return (
    <div className="flex gap-2">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => playHover()}
      >
        <Button
          variant="outline"
          size="icon"
          className={`${theme === 'light' ? 'bg-primary text-primary-foreground' : ''} relative overflow-hidden`}
          onClick={() => handleThemeChange('light')}
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 opacity-20" />
        </Button>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => playHover()}
      >
        <Button
          variant="outline"
          size="icon"
          className={`${theme === 'dark' ? 'bg-primary text-primary-foreground' : ''} relative overflow-hidden`}
          onClick={() => handleThemeChange('dark')}
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-20" />
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => playHover()}
      >
        <Button
          variant="outline"
          size="icon"
          className={`${theme === 'neon' ? 'bg-primary text-primary-foreground' : ''} relative overflow-hidden`}
          onClick={() => handleThemeChange('neon')}
        >
          <Zap className="h-[1.2rem] w-[1.2rem]" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-20" />
        </Button>
      </motion.div>
    </div>
  )
}