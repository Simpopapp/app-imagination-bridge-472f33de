import { Moon, Sun, Zap } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./button"
import { motion } from "framer-motion"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="flex gap-2">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="icon"
          className={`${theme === 'light' ? 'bg-primary text-primary-foreground' : ''}`}
          onClick={() => setTheme('light')}
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="icon"
          className={`${theme === 'dark' ? 'bg-primary text-primary-foreground' : ''}`}
          onClick={() => setTheme('dark')}
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="icon"
          className={`${theme === 'neon' ? 'bg-primary text-primary-foreground' : ''} relative overflow-hidden`}
          onClick={() => setTheme('neon')}
        >
          <Zap className="h-[1.2rem] w-[1.2rem]" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20" />
        </Button>
      </motion.div>
    </div>
  )
}