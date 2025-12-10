# Tema WordPress - Lúmen Piscinas e Lazer

Tema WordPress fiel ao design do site Lúmen Piscinas e Lazer, criado para replicar 100% o design original.

## Características

- **Design 100% Fiel**: Replica exatamente o design do site original
- **Responsivo**: Totalmente adaptável para mobile, tablet e desktop
- **Paleta de Cores**: Azul marinho profundo (#0a192f) e dourado (#c9a961)
- **Tipografia**: Lato (sans-serif) e Playfair Display (serif)
- **Templates Incluídos**:
  - `index.php` - Template principal do blog
  - `archive.php` - Arquivos e categorias
  - `single.php` - Posts individuais
  - `page.php` - Páginas estáticas
  - `header.php` - Cabeçalho com navegação
  - `footer.php` - Rodapé completo

## Instalação

1. Copie a pasta `wordpress-theme` para o diretório `wp-content/themes/` do seu WordPress
2. Renomeie a pasta para `lumen-piscinas` (opcional, mas recomendado)
3. Acesse o painel administrativo do WordPress
4. Vá em **Aparência > Temas**
5. Ative o tema "Lúmen Piscinas e Lazer"

## Configuração

### Menu de Navegação

1. Vá em **Aparência > Menus**
2. Crie um novo menu com os seguintes itens:
   - Início (link para a página inicial)
   - Sobre
   - Serviços
   - Portfólio
   - Blog
   - Contato
3. Atribua o menu à localização "Menu Principal"

### Imagens Destacadas

O tema suporta imagens destacadas (featured images) para posts. Certifique-se de adicionar uma imagem destacada a cada post do blog.

### Personalização

O tema usa variáveis CSS para facilitar a personalização. As cores principais podem ser ajustadas no arquivo `style.css`:

```css
:root {
  --primary: #0a192f; /* Azul marinho profundo */
  --secondary: #c9a961; /* Dourado */
  --background: #ffffff;
  --foreground: #0a192f;
}
```

## Estrutura de Arquivos

```
wordpress-theme/
├── style.css          # Estilos principais do tema
├── functions.php      # Funções do tema
├── header.php         # Cabeçalho
├── footer.php         # Rodapé
├── index.php          # Template principal
├── archive.php        # Template de arquivos
├── single.php         # Template de posts individuais
├── page.php           # Template de páginas
├── js/
│   └── theme.js       # JavaScript do tema
└── README.md          # Este arquivo
```

## Funcionalidades

- **Header Fixo com Scroll**: O header muda de aparência ao fazer scroll
- **Menu Mobile**: Menu responsivo para dispositivos móveis
- **Blog Grid**: Layout em grid para listagem de posts
- **Post Individual**: Template otimizado para leitura
- **Footer Completo**: Rodapé com informações de contato e links
- **Paginação**: Navegação entre páginas de posts
- **Comentários**: Suporte a comentários nativos do WordPress

## Compatibilidade

- WordPress 5.0+
- PHP 7.4+
- Navegadores modernos (Chrome, Firefox, Safari, Edge)

## Suporte

Para questões ou sugestões, entre em contato através do site oficial.

## Licença

Este tema está licenciado sob a GPL v2 ou posterior.

