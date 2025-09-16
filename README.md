# Bianca Moura Lash Designer - Website Profissional

## 📋 Sobre o Projeto

Website profissional desenvolvido para Bianca Moura Lash Designer, especialista em extensão de cílios em Belo Horizonte. O site apresenta os serviços oferecidos, informações sobre cursos, depoimentos de clientes e formulário de contato integrado ao WhatsApp.

## 🚀 Tecnologias Utilizadas

### Escolha da Stack
- **React + Vite**: Escolhido por oferecer melhor performance de desenvolvimento, hot reload mais rápido e build otimizado comparado ao Create React App
- **TypeScript**: Para tipagem estática e melhor experiência de desenvolvimento
- **Tailwind CSS**: Framework CSS utilitário para desenvolvimento rápido e consistente
- **Lucide React**: Biblioteca de ícones moderna e leve

### Justificativa das Tecnologias
- **Vite**: Build tool mais rápida que Webpack, ideal para desenvolvimento e produção
- **Tailwind CSS**: Sistema de design consistente com classes utilitárias, permitindo customização sem CSS adicional
- **Lucide React**: Ícones SVG otimizados e tree-shakable, reduzindo o bundle size

## 🎨 Características do Design

- **Design Responsivo**: Mobile-first com breakpoints otimizados
- **Paleta de Cores**: Tons dourados, rosa e neutros para transmitir elegância
- **Sistema de Espaçamento**: Grid baseado em 8px para alinhamento perfeito
- **Tipografia**: Hierarquia clara com 3 pesos de fonte máximo
- **Animações**: Micro-interações sutis para melhor UX

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   ├── Header.tsx          # Navegação fixa com scroll effect
│   ├── Hero.tsx           # Seção principal com CTA
│   ├── Services.tsx       # Grade de serviços com imagens
│   ├── WhyChooseUs.tsx    # Diferenciais com ícones animados
│   ├── Testimonials.tsx   # Slider de depoimentos
│   ├── Courses.tsx        # Informações sobre cursos
│   ├── About.tsx          # Seção sobre a profissional
│   ├── Contact.tsx        # Formulário integrado ao WhatsApp
│   ├── Footer.tsx         # Rodapé com links sociais
│   └── FloatingWhatsApp.tsx # Botão flutuante multi-opções
├── App.tsx                # Componente principal
├── main.tsx              # Entry point
└── index.css             # Estilos base do Tailwind
```

## 🖼️ Gestão de Imagens

### Organização das Fotos
- **Hero Section**: WhatsApp Image 2025-09-13 at 18.55.54.jpeg (Bianca blazer rosa)
- **Cursos**: WhatsApp Image 2025-09-13 at 18.55.53.jpeg (Bianca blazer vermelho com pinças)
- **Sobre Mim**: WhatsApp Image 2025-09-11 at 00.55.57 (3).jpeg (Bianca blazer rosa com pinças)
- **Serviços**: 
  - WhatsApp Image 2025-09-13 at 18.55.49.jpeg (resultado cílios 1)
  - WhatsApp Image 2025-09-13 at 18.55.50 (1).jpeg (resultado cílios 2)

### Regras de Uso
✅ **Permitido**: Usar apenas as imagens fornecidas pelo cliente
✅ **Otimizado**: Todas as imagens estão em `/public/images/`
❌ **Proibido**: Imagens de terceiros, stock photos ou conteúdo sem licença
❌ **Proibido**: Repetir a mesma imagem em seções diferentes

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Comandos

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🚀 Deploy no Vercel

### Opção 1: Deploy Automático via GitHub
1. Conecte seu repositório ao Vercel
2. O deploy será automático a cada push na branch main

### Opção 2: Deploy via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Configurações do Vercel
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 🎯 Funcionalidades

### Componentes Principais
- **Header Responsivo**: Menu hambúrguer em mobile, navegação smooth scroll
- **Hero Section**: CTAs para WhatsApp e agendamento
- **Grade de Serviços**: Imagens com hover effects e lista de procedimentos
- **Slider de Depoimentos**: Navegação automática e manual
- **Formulário de Contato**: Validação e redirecionamento para WhatsApp
- **WhatsApp Flutuante**: Multi-opções (Agendar, Cursos, Informações)

### Integrações
- **WhatsApp Business**: Links diretos com mensagens pré-formatadas
- **Meta Tags SEO**: Open Graph e Twitter Cards configurados
- **Acessibilidade**: ARIA labels, navegação por teclado, semântica HTML5

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px (layout em coluna única)
- **Tablet**: 768px - 1024px (layout híbrido)
- **Desktop**: > 1024px (layout completo)

### Otimizações Mobile
- Touch targets de 44px mínimo
- Texto legível sem zoom (16px+)
- Navegação por swipe nos testimonials
- Formulário otimizado para mobile

## ♿ Acessibilidade

### Implementações
- Navegação por teclado completa
- Contraste de cores WCAG AA
- Alt texts descritivos em imagens  
- ARIA labels em botões e links
- Estrutura semântica HTML5
- Focus indicators visíveis

## 📄 Licença e Direitos

- **Código**: Desenvolvido exclusivamente para Bianca Moura Lash Designer
- **Imagens**: Propriedade exclusiva do cliente, uso autorizado apenas neste projeto
- **Conteúdo**: Textos e informações fornecidos pelo cliente

---

**Desenvolvido com ❤️ para Bianca Moura Lash Designer**