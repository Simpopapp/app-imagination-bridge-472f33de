import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Onboarding from "./pages/Onboarding"
import Customize from "./pages/Customize"
import Theme from "./pages/customize/Theme"
import Layout from "./pages/customize/Layout"
import Typography from "./pages/customize/Typography"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider themes={['light', 'dark', 'neon']} defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/customize/theme" element={<Theme />} />
            <Route path="/customize/layout" element={<Layout />} />
            <Route path="/customize/typography" element={<Typography />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
)

export default App