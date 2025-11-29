# Deploy na Vercel

Este projeto está configurado para deploy na Vercel como um site estático (SPA).

## Configuração

O projeto já está configurado com:
- `vercel.json` - Configuração do build e routing
- `build:vercel` - Script de build otimizado para Vercel
- `.vercelignore` - Arquivos ignorados no deploy

## Como fazer o deploy

1. **Conecte o repositório na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Importe o repositório do GitHub/GitLab/Bitbucket
   - A Vercel detectará automaticamente as configurações do `vercel.json`

2. **Configure as variáveis de ambiente (se necessário):**
   No painel da Vercel, adicione as seguintes variáveis de ambiente se seu projeto as utilizar:
   - `VITE_ANALYTICS_ENDPOINT`
   - `VITE_ANALYTICS_WEBSITE_ID`
   - `VITE_OAUTH_PORTAL_URL`
   - `VITE_APP_ID`
   - `VITE_FRONTEND_FORGE_API_KEY`
   - `VITE_FRONTEND_FORGE_API_URL`

3. **Deploy automático:**
   - A Vercel fará deploy automaticamente a cada push na branch principal
   - Pull requests gerarão preview deployments

## Estrutura do Build

- **Build Command:** `pnpm build:vercel`
- **Output Directory:** `dist/public`
- **Framework:** Vite (detectado automaticamente)

## SPA Routing

O arquivo `vercel.json` está configurado para redirecionar todas as rotas para `index.html`, permitindo que o roteamento do cliente (wouter) funcione corretamente.

