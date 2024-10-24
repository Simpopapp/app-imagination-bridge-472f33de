# AKAFLOW - Documentação Técnica

## Arquitetura do Sistema

### Core Components (`/src/components/ui/`)

#### Componentes Base
- `avatar.tsx`: Implementa componente de avatar usando Radix UI (`@radix-ui/react-avatar`)
  - Suporta imagens, fallbacks e customização via className
  - Implementa forwardRef para referências DOM

- `badge.tsx`: Badge component usando class-variance-authority
  - Variantes: default, secondary, destructive, outline
  - Customizável via className e variant props

- `progress.tsx`: Barra de progresso usando Radix UI
  - Animação suave via CSS transforms
  - Suporte a valores dinâmicos (0-100)

#### Componentes de Interface
- `premium-button.tsx`: Botão premium com efeitos visuais
  - Integração com sistema de sons via useSound
  - Animações com Framer Motion
  - Feedback via toast notifications

- `animated-title.tsx`: Título animado com efeitos glitch
  - Efeitos cyberpunk via CSS animations
  - Integração com modo premium
  - Animações responsivas com Framer Motion

### Hooks Customizados (`/src/hooks/`)

- `useAchievements.ts`: Gerenciamento de conquistas
  - Estado persistente via Zustand
  - Sistema de pontuação
  - Notificações toast para feedback

- `use-toast.ts`: Sistema de notificações
  - Queue management para múltiplos toasts
  - Customização de duração e aparência
  - Limite de toasts simultâneos

### Pages (`/src/pages/`)

#### Fluxo Principal
- `Index.tsx`: Página inicial
  - Apresentação do produto
  - Integração com modo premium
  - Navegação principal

- `Onboarding.tsx`: Processo de introdução
  - Theme switcher integration
  - Animações de entrada
  - Sistema de navegação

#### Customização
- `Customize.tsx`: Hub central de customização
  - Rotas para subseções (theme, layout, typography)
  - Animações de transição
  - Grid responsivo de opções

- `customize/Theme.tsx`: Customização de temas
  - Esquemas de cores predefinidos
  - Preview em tempo real
  - Integração com achievements

- `customize/Layout.tsx`: Configuração de layouts
  - Opções de grid responsivo
  - Previews interativos
  - Sistema de feedback sonoro

- `customize/Typography.tsx`: Gestão tipográfica
  - Seleção de fontes
  - Preview em tempo real
  - Integração com sistema de conquistas

### Utilitários (`/src/lib/`)

- `utils.ts`: Funções utilitárias
  - Merge de classes Tailwind
  - Helpers para tipagem

### Estilização

#### CSS Global (`/src/index.css`)
- Configuração de temas via CSS variables
- Animações globais
- Efeitos visuais cyberpunk

#### Tailwind Config
- Extensão de cores
- Configuração de plugins
- Animações customizadas

## Tecnologias Core

### Frontend
- React 18.3.1 com TypeScript
- Vite para build e desenvolvimento
- Tailwind CSS para estilização
- Framer Motion para animações
- shadcn/ui para componentes base

### Estado & Data Fetching
- Zustand para gerenciamento de estado
- TanStack Query para data fetching
- Local Storage para persistência

### UI/UX
- Radix UI para componentes acessíveis
- Lucide React para ícones
- use-sound para feedback sonoro
- Sonner para toasts

## Setup & Desenvolvimento

```bash
# Instalação de dependências
bun install

# Desenvolvimento
bun dev

# Build de produção
bun build
```

### Estrutura de Arquivos
```
src/
├── components/
│   └── ui/              # Componentes shadcn/ui e customizados
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários
├── pages/              # Páginas e rotas
│   └── customize/      # Páginas de customização
└── styles/             # Estilos globais
```

## Padrões de Desenvolvimento

### Componentes
- Uso de TypeScript para type safety
- Implementação de forwardRef quando necessário
- Integração com sistema de temas
- Responsividade via Tailwind

### Estado
- Zustand para estado global
- React Query para cache e fetching
- Local Storage para persistência

### Estilização
- Tailwind CSS para estilos
- CSS Variables para temas
- Animações via Framer Motion

## Contribuição

### Setup do Ambiente
1. Fork do repositório
2. Clone local
3. Instalação de dependências
4. Setup do ESLint e TypeScript

### Workflow
1. Branch feature/fix
2. Desenvolvimento
3. Testes
4. Pull Request

## Licença
MIT License - Veja LICENSE para detalhes

---
Documentação mantida por AKAFLOW Team