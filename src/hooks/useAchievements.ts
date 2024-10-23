import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { showAchievement } from '@/components/ui/achievement-toast'

interface Achievement {
  id: string
  title: string
  description: string
  points: number
  unlocked: boolean
}

interface AchievementsState {
  achievements: Achievement[]
  totalPoints: number
  unlockAchievement: (id: string) => void
}

export const useAchievements = create<AchievementsState>()(
  persist(
    (set) => ({
      achievements: [
        {
          id: 'first_theme',
          title: 'Designer Iniciante',
          description: 'Escolheu seu primeiro tema',
          points: 100,
          unlocked: false
        },
        {
          id: 'theme_master',
          title: 'Mestre dos Temas',
          description: 'Experimentou todos os temas disponíveis',
          points: 250,
          unlocked: false
        },
        {
          id: 'first_layout',
          title: 'Arquiteto Visual',
          description: 'Definiu seu primeiro layout',
          points: 100,
          unlocked: false
        },
        {
          id: 'first_font',
          title: 'Tipógrafo Iniciante',
          description: 'Escolheu sua primeira fonte',
          points: 100,
          unlocked: false
        },
        {
          id: 'customization_master',
          title: 'Mestre da Customização',
          description: 'Completou todas as etapas de personalização',
          points: 500,
          unlocked: false
        }
      ],
      totalPoints: 0,
      unlockAchievement: (id) => {
        set((state) => {
          const achievement = state.achievements.find(a => a.id === id)
          if (achievement && !achievement.unlocked) {
            showAchievement({
              title: achievement.title,
              description: achievement.description,
              points: achievement.points
            })
            return {
              achievements: state.achievements.map(a => 
                a.id === id ? { ...a, unlocked: true } : a
              ),
              totalPoints: state.totalPoints + achievement.points
            }
          }
          return state
        })
      }
    }),
    {
      name: 'achievements-storage'
    }
  )
)