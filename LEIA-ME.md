# 🪞 KomparAI — App Completo Pronto para Publicar

> **Compare. Descubra. Compartilhe.**
> 365 famosos · 8 religiões · 4 horóscopos · 50 quizzes · 200+ mensagens de mentores

---

## ✅ O que está incluído

### Dados
- **365 famosos enriquecidos** (gender, temperamento, altura, peso, quote, popularity)
- **96 anos de curiosidades** (1930–2025)
- **200+ mensagens de mentores** (4 temperamentos × principais + alternativos)
- **8 tradições religiosas** com datas fixas e móveis
- **4 horóscopos** (Ocidental, Grego, Chinês, Védico, Judaico)
- **31 histórias inspiradoras** (rotativas por dia)
- **50 perguntas de quiz**
- **35 frases de humor** (7 × 5 moods)

### Funcionalidades
- 🚪 Onboarding com Nome + Data
- 🏠 Home personalizada
- 🪞 **Teste de Coincidências** (motor de match com 365 famosos)
- 🧠 Teste de Temperamento → revela mentor
- 🎯 Quiz de 50 perguntas
- 🌅 Humor Matinal
- ♈ Horóscopo em 5 sistemas
- 🙏 **Aba Espiritualidade** (calendário religioso completo)
- 👤 Perfil com dados de vida + Financeiro
- 💾 LocalStorage (persiste perfil)
- ↗ Botões de compartilhar nativos
- ♿ Acessibilidade (aria-labels)
- 🛡️ Validações em todos os inputs

---

## 📂 Estrutura do projeto

```
komparai_app_final/
├── package.json
├── public/
│   ├── index.html
│   └── manifest.json
└── src/
    ├── App.jsx          ← App principal
    ├── index.js
    ├── index.css
    └── data/
        ├── famosos.json
        ├── yearFacts.js
        ├── mentorMessages.js
        ├── espiritualidade.js
        ├── horoscopos.js
        └── conteudo.js
```

---

## 🚀 PASSO A PASSO PARA PUBLICAR

### 1. Instalar Node.js
Baixe LTS em https://nodejs.org e instale.

### 2. Criar projeto base
```bash
npx create-react-app komparai
cd komparai
```

### 3. Substituir os arquivos
Copie **TODOS os arquivos** desta pasta para dentro do projeto criado, mantendo a estrutura.

Importante:
- Renomeie `App.js` que existe → para `App.jsx` (com X)
- Cole o conteúdo do nosso `App.jsx`
- Crie a pasta `src/data/` e cole os 6 arquivos de dados lá
- Substitua `src/index.js`, `src/index.css`
- Substitua `public/index.html`, `public/manifest.json`

### 4. Testar local
```bash
npm start
```
Abre `localhost:3000`. Teste:
- [ ] Onboarding aparece e calcula signo
- [ ] Recarregar mantém perfil (LocalStorage)
- [ ] 5 abas funcionando
- [ ] Famoso do Dia carrega
- [ ] Teste de Coincidências encontra matches
- [ ] Espiritualidade mostra eventos
- [ ] Botões compartilhar funcionam

### 5. Subir no GitHub
```bash
git init
git add .
git commit -m "KomparAI v1.0 - MVP completo"
```

Crie repo em github.com (nome: `komparai`) e:
```bash
git remote add origin https://github.com/SEU_USUARIO/komparai.git
git branch -M main
git push -u origin main
```

### 6. Publicar na Vercel
1. Acesse vercel.com → Sign up with GitHub
2. Add New Project → selecione `komparai`
3. Deploy (configurações padrão)

⏱️ 2-3 minutos depois você tem `https://komparai.vercel.app`

### 7. Testar no iPhone
1. Safari → digite o link
2. Compartilhar → Adicionar à Tela de Início
3. App vira ícone (efeito PWA)

---

## 🧪 Plano de validação com 50 testers

Mande o link com a mensagem:
> *"Acabei de lançar um app: descobre o que você tem em comum com 365 famosos. Leva 1 minuto. Me conta o que achou."*

Métricas:
- Conclusão do onboarding > 80%
- Uso do teste de coincidência > 60%
- Share rate > 25%
- Nota média > 4/5

---

## 🚨 Solução de problemas

| Erro | Solução |
|---|---|
| `Module not found: famosos.json` | Confirme que arquivo está em `src/data/` |
| Build falha na Vercel | Veja logs — geralmente import errado |
| Página em branco | Console do navegador (F12) mostra erro |
| Onboarding não passa | Veja se data está válida |

---

## 📈 Roadmap pós-lançamento

1. **Google Analytics** — adicione GA4 no `index.html`
2. **Backend Supabase** — ranking global do Quiz
3. **Notificações Push** — Firebase
4. **OG Image customizada** — preview no WhatsApp/Instagram
5. **App nativo** — React Native quando validar

---

**Status:** 🚀 PRONTO PARA PUBLICAR
