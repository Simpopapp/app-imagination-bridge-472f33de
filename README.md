# Creative Vibe Editor 🎨

## Visão Geral
Creative Vibe Editor é uma aplicação mobile-first que transforma a experiência de idealização de apps em uma jornada interativa e envolvente. Em vez de confrontar usuários com formulários técnicos, guiamos eles através de uma experiência gamificada que revela naturalmente suas preferências e ideias.

## Objetivo
Criar uma plataforma onde usuários possam expressar suas ideias para apps de forma natural e divertida, sem a intimidação técnica tradicional.

## Arquitetura do Projeto

### Fluxo Principal
1. **Onboarding Interativo**
   - Introdução visual e envolvente
   - Seleção de tema inicial (Light/Dark/Neon)
   - Tutorial gamificado

2. **Jornada de Descoberta**
   - Escolha de paletas de cores
   - Seleção de layouts preferidos
   - Interações com elementos de UI
   - Mini-jogos de design

3. **Ideação Natural**
   - Campo de expressão livre
   - Sugestões contextuais
   - Visualização instantânea

### Tecnologias Principais
- React + Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- Tanstack Query
- Framer Motion

### Estrutura de Diretórios
```
src/
├── components/
│   ├── ui/          # Componentes shadcn/ui
│   ├── layout/      # Componentes de layout
│   └── features/    # Componentes específicos
├── pages/           # Páginas da aplicação
├── hooks/           # Hooks customizados
├── utils/           # Utilitários
├── types/           # Tipos TypeScript
└── styles/          # Estilos globais
```

## Funcionalidades Principais

### 1. Sistema de Temas
- Temas: Light, Dark, Neon
- Transições suaves
- Persistência local

### 2. Gamificação
- Sistema de conquistas
- Feedback visual e sonoro
- Progresso desbloqueável

### 3. Customização
- Personalização de interface
- Previews em tempo real
- Exportação de preferências

### 4. Métricas e Analytics
- Tracking de interações
- Análise de preferências
- Relatórios de uso

## Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Construir para produção
npm run build
```

## Próximos Passos
1. Implementação do sistema de temas
2. Desenvolvimento do onboarding interativo
3. Criação do sistema de gamificação
4. Integração de feedback sonoro
5. Implementação de animações fluidas

## Instruções para GPT Engineer

Para cada atualização, por favor forneça:
1. Lista detalhada de alterações implementadas
2. Screenshots ou descrições visuais das mudanças
3. Novos componentes ou hooks adicionados
4. Alterações na estrutura de arquivos
5. Dependências adicionadas ou removidas
6. Problemas encontrados e soluções aplicadas