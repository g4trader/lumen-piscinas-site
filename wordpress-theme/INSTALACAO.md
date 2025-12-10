# Guia de Instalação - Tema Lúmen Piscinas

## Passo a Passo Completo

### 1. Preparação

1. Faça backup do seu WordPress atual
2. Certifique-se de que está usando WordPress 5.0 ou superior
3. Certifique-se de que está usando PHP 7.4 ou superior

### 2. Upload do Tema

**Opção A: Via FTP/SFTP (Recomendado)**

1. Conecte-se ao seu servidor via FTP/SFTP
2. Navegue até `wp-content/themes/`
3. Faça upload da pasta `wordpress-theme` completa
4. Renomeie a pasta para `lumen-piscinas` (opcional, mas recomendado)

**Opção B: Via Painel WordPress**

1. Comprima a pasta `wordpress-theme` em um arquivo ZIP
2. No painel WordPress, vá em **Aparência > Temas > Adicionar Novo**
3. Clique em **Enviar Tema**
4. Selecione o arquivo ZIP e clique em **Instalar Agora**
5. Após a instalação, clique em **Ativar**

### 3. Configuração do Menu

1. No painel WordPress, vá em **Aparência > Menus**
2. Clique em **Criar um novo menu**
3. Dê um nome ao menu (ex: "Menu Principal")
4. Adicione os seguintes itens:
   - **Página Personalizada**: Início (link: `/`)
   - **Página Personalizada**: Sobre (link: `/sobre`)
   - **Página Personalizada**: Serviços (link: `/servicos`)
   - **Página Personalizada**: Portfólio (link: `/portfolio`)
   - **Página**: Blog (ou link: `/blog`)
   - **Página Personalizada**: Contato (link: `/contato`)
5. Marque a opção **Menu Principal** na seção "Exibir localização"
6. Clique em **Salvar Menu**

### 4. Configuração do Blog

1. Vá em **Configurações > Leitura**
2. Defina a **Página de posts** como a página do blog
3. Certifique-se de que **Imagens destacadas** estão habilitadas

### 5. Criar Páginas Necessárias

Crie as seguintes páginas no WordPress:

1. **Blog** - Use o template padrão
2. **Sobre** - Página sobre a empresa
3. **Serviços** - Página de serviços
4. **Portfólio** - Página de portfólio
5. **Contato** - Página de contato

### 6. Configurar Posts do Blog

Para cada post do blog:

1. Adicione uma **Imagem Destacada** (recomendado: 1200x675px)
2. Adicione uma **Categoria** ao post
3. Use o editor Gutenberg ou Classic Editor normalmente
4. O tema irá formatar automaticamente

### 7. Personalização (Opcional)

#### Cores

Para alterar as cores, edite o arquivo `style.css` e modifique as variáveis CSS:

```css
:root {
  --primary: #0a192f; /* Azul marinho profundo */
  --secondary: #c9a961; /* Dourado */
}
```

#### Logo

O tema usa um logo em texto. Para usar uma imagem:

1. Edite o arquivo `header.php`
2. Substitua o código do logo por uma tag `<img>`

### 8. Verificação Final

Verifique se:

- [ ] O menu está funcionando corretamente
- [ ] O header muda ao fazer scroll
- [ ] O menu mobile funciona em dispositivos móveis
- [ ] Os posts do blog estão sendo exibidos corretamente
- [ ] O footer está completo com informações de contato
- [ ] As imagens destacadas estão aparecendo nos posts

### 9. Troubleshooting

**Problema: Menu não aparece**
- Solução: Certifique-se de que criou o menu e atribuiu à localização "Menu Principal"

**Problema: Estilos não carregam**
- Solução: Limpe o cache do WordPress e do navegador

**Problema: JavaScript não funciona**
- Solução: Verifique se o arquivo `js/theme.js` está na pasta correta

**Problema: Imagens não aparecem**
- Solução: Certifique-se de adicionar imagens destacadas aos posts

### 10. Suporte

Se encontrar problemas, verifique:

1. Versão do WordPress (deve ser 5.0+)
2. Versão do PHP (deve ser 7.4+)
3. Permissões de arquivo (pastas devem ter permissão 755, arquivos 644)
4. Logs de erro do WordPress

## Próximos Passos

Após a instalação, você pode:

1. Personalizar as cores no `style.css`
2. Adicionar widgets na sidebar (se necessário)
3. Configurar plugins de SEO
4. Otimizar imagens para melhor performance
5. Configurar cache para melhor velocidade

---

**Nota**: Este tema foi criado para ser fiel ao design do site original. Qualquer modificação deve ser feita com cuidado para manter a consistência visual.

