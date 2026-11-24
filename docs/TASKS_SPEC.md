# TASKS_SPEC.md — Coffee Delivery

**Projeto:** Coffee Delivery  
**Disciplina:** Single Page Application (SPA)  
**Stack:** React + TypeScript + Vite 8  
**Versão:** 1.0  
**Status:** Planejamento  
**Repositório:** https://github.com/wanessags/CoffeDelivery

---

## 1. Objetivo

Este documento organiza o desenvolvimento do Coffee Delivery em tarefas pequenas, sequenciais e verificáveis.

O planejamento segue o Projeto Final 05 — Coffee Delivery — React + TypeScript + IA.

Documentos de referência:

- `AGENTS.md`
- `docs/PRD_SPEC.md`
- `docs/TECH_SPEC.md`
- `docs/TASKS_SPEC.md`
- [Enunciado oficial no Notion](https://app.notion.com/p/41bdfca74d8d8119a849e30ea492a6af), conferido pelo PDF fornecido.

Referência visual:

https://www.figma.com/design/yGPNTA0Yczb183EikXGIiA/Coffee-Delivery-%E2%80%A2-Projeto-Final-React?node-id=2-1297

O objetivo é implementar todos os requisitos RF-01 a RF-16 e RN-01 a RN-10, mantendo qualidade, acessibilidade, documentação e testes.

---

## 2. Regras de execução

O OpenCode deverá seguir estas regras:

1. Ler AGENTS.md, PRD_SPEC.md, TECH_SPEC.md e TASKS_SPEC.md antes de iniciar.
2. Verificar o estado atual do repositório.
3. Identificar a próxima tarefa pendente.
4. Implementar somente a tarefa selecionada.
5. Não remover funcionalidades existentes.
6. Não modificar arquivos fora do escopo sem justificativa.
7. Atualizar os documentos SPEC quando necessário.
8. Executar os testes aplicáveis.
9. Registrar evidências da validação.
10. Informar a mensagem de commit semântico.
11. Não realizar push sem autorização.
12. Não marcar uma tarefa como concluída sem validação.
13. Não substituir imagens originais do Figma por imagens genéricas.
14. Não inventar valores afirmando que foram extraídos do Figma.
15. Manter TypeScript com tipagem adequada.
16. Não utilizar `any` como atalho.
17. Trabalhar com alterações pequenas e revisáveis.

Quando solicitado pelo usuário, apresentar o conteúdo completo dos arquivos modificados.

---

## 3. Status das tarefas

Utilizar os seguintes estados:

- `[ ]` Pendente.
- `[x]` Concluída e validada.

Tarefas iniciadas, mas ainda não validadas, devem permanecer desmarcadas e receber uma observação de andamento.

Cada tarefa deverá registrar:

- ID.
- Objetivo.
- Requisitos relacionados.
- Arquivos afetados.
- Critérios de aceite.
- Testes.
- Status.
- Commit.

---

# 4. Planejamento de implementação

## T01 — Inicializar React + TypeScript + Vite 8

**Status:** Concluída.

**Objetivo:**
Criar a aplicação React com TypeScript utilizando Vite 8.

**Requisitos relacionados:**
Base técnica da aplicação.

**Arquivos envolvidos:**

- package.json
- package-lock.json
- vite.config.ts
- tsconfig.json
- src/App.tsx
- src/main.tsx
- index.html

**Critérios de aceite:**

- [x] Projeto React criado.
- [x] TypeScript configurado.
- [x] Vite 8 utilizado.
- [x] Dependências iniciais instaladas.
- [x] Repositório Git próprio criado.
- [x] Repositório remoto configurado.

**Validação:**

- Confirmar `npm run dev`.
- Confirmar `npm run build`.
- Confirmar a versão instalada do Vite.

Os resultados de execução deverão ser registrados quando verificados.

**Commit registrado:**

`5180531 — chore: inicializa Coffee Delivery com React TypeScript e Vite 8`

---

## T02 — Criar documentação inicial

**Status:** Em andamento.

**Objetivo:**
Documentar produto, arquitetura, tarefas e instruções para o assistente de IA.

**Requisitos relacionados:**
RF-01 a RF-16 e RN-01 a RN-10.

**Arquivos envolvidos:**

- AGENTS.md
- docs/PRD_SPEC.md
- docs/TECH_SPEC.md
- docs/TASKS_SPEC.md

**Critérios de aceite:**

- [x] AGENTS.md elaborado.
- [x] PRD_SPEC.md elaborado.
- [x] TECH_SPEC.md elaborado.
- [ ] TASKS_SPEC.md salvo e revisado.
- [ ] Consistência entre os documentos verificada.
- [ ] Documentos versionados no GitHub.

**Testes:**

- Verificar existência dos arquivos.
- Conferir cobertura de RF-01 a RF-16.
- Conferir cobertura de RN-01 a RN-10.
- Verificar links e caminhos.
- Conferir consistência das decisões técnicas.

**Commit sugerido:**

`docs: adiciona plano de implementacao do Coffee Delivery`

---

## T03 — Configurar infraestrutura de qualidade

**Status:** Pendente.

**Objetivo:**
Preparar bibliotecas, ambiente de testes e ferramentas de desenvolvimento.

**Requisitos relacionados:**
Qualidade técnica e critérios de entrega.

**Arquivos previstos:**

- package.json
- package-lock.json
- vite.config.ts
- src/tests/
- docs/TECH_SPEC.md
- docs/TASKS_SPEC.md

**Atividades:**

- [ ] Verificar dependências instaladas.
- [ ] Confirmar React Router.
- [ ] Confirmar styled-components.
- [ ] Confirmar React Hook Form.
- [ ] Confirmar Zod.
- [ ] Confirmar Phosphor Icons.
- [ ] Instalar e configurar Vitest.
- [ ] Instalar React Testing Library.
- [ ] Configurar ambiente DOM de testes.
- [ ] Criar scripts de teste.
- [ ] Verificar ESLint.
- [ ] Executar build.

**Critérios de aceite:**

- Dependências funcionando.
- Testes básicos executáveis.
- Build sem erros.
- Nenhuma funcionalidade existente removida.

**Commit sugerido:**

`test: configura infraestrutura de testes`

---

## T04 — Criar identidade visual com IA

**Status:** Pendente.

**Objetivo:**
Definir identidade visual original e implementar a base dos temas.

**Requisitos relacionados:**
RF-14, RF-16.

**Arquivos previstos:**

- src/assets/branding/
- public/favicon.svg
- src/styles/themes.ts
- src/styles/GlobalStyles.ts
- src/styles/styled.d.ts
- docs/AI_USAGE.md
- docs/TECH_SPEC.md
- README.md

**Atividades:**

- [ ] Definir conceito da marca.
- [ ] Criar pelo menos uma proposta original com uma ferramenta de geração visual por IA.
- [ ] Registrar ferramenta e prompt.
- [ ] Escolher a logo.
- [ ] Criar versão para fundo claro.
- [ ] Criar versão para fundo escuro.
- [ ] Criar favicon.
- [ ] Confirmar tipografia Baloo 2 e Roboto.
- [ ] Configurar tokens semânticos.
- [ ] Preparar paletas light e dark.
- [ ] Documentar decisões visuais.

**Critérios de aceite:**

- Logo original disponível.
- Favicon funcionando.
- Identidade documentada.
- Fontes configuradas.
- Tokens tipados.
- Contraste inicial verificado.

**Testes:**

- Verificar carregamento de fontes.
- Verificar presença da logo.
- Verificar favicon.
- Verificar legibilidade em tamanhos reduzidos.
- Verificar os direitos de uso da proposta.

**Commit sugerido:**

`style: cria identidade visual e tokens de tema`

---

## T05 — Implementar estrutura de navegação e Header

**Status:** Pendente.

**Objetivo:**
Criar a estrutura principal da SPA.

**Requisitos relacionados:**
RF-04, RF-07, RF-14.

**Arquivos previstos:**

- src/App.tsx
- src/main.tsx
- src/components/Header/
- src/components/CartBadge/
- src/components/PageLayout/
- src/components/ThemeToggle/
- src/pages/Home/
- src/pages/Checkout/
- src/pages/Success/
- src/pages/NotFound/

**Atividades:**

- [ ] Configurar React Router.
- [ ] Criar rota `/`.
- [ ] Criar rota `/checkout`.
- [ ] Criar rota `/success`.
- [ ] Criar fallback de rota inválida.
- [ ] Implementar PageLayout.
- [ ] Criar Header.
- [ ] Exibir logo.
- [ ] Criar botão do carrinho.
- [ ] Preparar indicador de quantidade.
- [ ] Criar controle de tema.
- [ ] Garantir navegação acessível.

**Critérios de aceite:**

- Rotas funcionais.
- Navegação sem refresh completo.
- Header reutilizável.
- Layout adaptável.
- Ícones acessíveis.

**Testes:**

- Navegação entre rotas.
- Rota inexistente.
- Acesso por teclado.
- Renderização do Header.

**Commit sugerido:**

`feat: implementa rotas e header principal`

---

## T06 — Implementar catálogo de cafés

**Status:** Pendente.

**Objetivo:**
Construir a Home e apresentar os produtos.

**Requisitos relacionados:**
RF-01, RF-15.

**Arquivos previstos:**

- src/data/coffees.ts
- src/types/coffee.ts
- src/components/CoffeeCard/
- src/components/CoffeeCatalog/
- src/pages/Home/
- src/assets/coffees/

**Atividades:**

- [ ] Adicionar os assets originais.
- [ ] Conferir os 14 produtos.
- [ ] Cadastrar identificadores únicos.
- [ ] Definir nomes e descrições.
- [ ] Definir preços em centavos.
- [ ] Definir tags.
- [ ] Criar CoffeeCard.
- [ ] Criar CoffeeCatalog.
- [ ] Criar seção principal da Home.
- [ ] Implementar grid responsivo.
- [ ] Verificar fidelidade visual ao Figma.

**Critérios de aceite:**

- Os 14 cafés aparecem.
- Cada café possui imagem correta.
- Nome, preço e descrição são exibidos.
- As tags aparecem.
- Grid responsivo.

**Testes:**

- Renderização do catálogo.
- Quantidade de produtos.
- Identificadores únicos.
- Assets válidos.
- Responsividade básica.

**Commit sugerido:**

`feat: implementa home e catalogo de cafes`

---

## T07 — Implementar controles de quantidade

**Status:** Pendente.

**Objetivo:**
Permitir que o usuário selecione quantidades válidas.

**Requisitos relacionados:**
RF-02, RN-01.

**Arquivos previstos:**

- src/components/QuantityInput/
- src/components/CoffeeCard/
- src/tests/

**Atividades:**

- [ ] Criar botão de incremento.
- [ ] Criar botão de decremento.
- [ ] Definir quantidade inicial.
- [ ] Impedir valores inválidos.
- [ ] Garantir interação por teclado.
- [ ] Implementar nomes acessíveis.
- [ ] Integrar controles aos cards.

**Critérios de aceite:**

- Quantidades inteiras e positivas.
- Controles funcionais.
- Quantidades inválidas bloqueadas.
- Feedback visual adequado.

**Testes:**

- Incremento.
- Decremento.
- Quantidade mínima.
- Interação por teclado.

**Commit sugerido:**

`feat: adiciona controles de quantidade`

---

## T08 — Implementar carrinho com Context API e useReducer

**Status:** Pendente.

**Objetivo:**
Criar o gerenciamento global do carrinho.

**Requisitos relacionados:**
RF-03, RF-04, RF-05, RN-01, RN-02.

**Arquivos previstos:**

- src/contexts/CartContext.tsx
- src/reducers/cartReducer.ts
- src/hooks/useCart.ts
- src/types/cart.ts
- src/components/CartBadge/
- src/components/CoffeeCard/
- src/tests/

**Atividades:**

- [ ] Criar tipos do carrinho.
- [ ] Criar estado inicial.
- [ ] Criar ADD_ITEM.
- [ ] Criar INCREMENT_ITEM.
- [ ] Criar DECREMENT_ITEM.
- [ ] Criar REMOVE_ITEM.
- [ ] Criar CLEAR_CART.
- [ ] Criar CartProvider.
- [ ] Criar useCart.
- [ ] Integrar botão de adicionar.
- [ ] Atualizar contador do Header.
- [ ] Impedir duplicações.
- [ ] Preservar imutabilidade.

**Critérios de aceite:**

- Produtos adicionados.
- Quantidades acumuladas.
- Itens únicos por café.
- Contador correto.
- Reducer puro.

**Testes:**

- Adição.
- Adição repetida.
- Incremento.
- Decremento.
- Remoção.
- Limpeza.
- Contagem total.

**Commit sugerido:**

`feat: implementa carrinho com context api e reducer`

---

## T09 — Implementar persistência do carrinho

**Status:** Pendente.

**Objetivo:**
Preservar os itens após atualização da página.

**Requisitos relacionados:**
RF-06, RN-06.

**Arquivos previstos:**

- src/contexts/CartContext.tsx
- src/hooks/useLocalStorage.ts
- src/tests/
- docs/TECH_SPEC.md

**Atividades:**

- [ ] Definir chave de armazenamento.
- [ ] Recuperar estado salvo.
- [ ] Validar dados persistidos.
- [ ] Remover itens inválidos.
- [ ] Ignorar produtos inexistentes.
- [ ] Persistir alterações.
- [ ] Tratar armazenamento indisponível.
- [ ] Evitar mutações no reducer.

**Critérios de aceite:**

- Carrinho permanece após refresh.
- Quantidades corretas.
- Dados inválidos não quebram a aplicação.
- Carrinho funciona em memória se o armazenamento falhar.

**Testes:**

- Recuperação do carrinho.
- Persistência.
- Dados inválidos.
- Produto inexistente.
- Falha no armazenamento.

**Commit sugerido:**

`feat: adiciona persistencia do carrinho`

---

## T10 — Implementar formulário de endereço e API de CEP

**Status:** Pendente.

**Objetivo:**
Criar o formulário de entrega e consultar o CEP automaticamente.

**Requisitos relacionados:**
RF-08, RN-07, RN-08.

**Arquivos previstos:**

- src/components/DeliveryAddressForm/
- src/schemas/checkoutSchema.ts
- src/types/address.ts
- src/utils/cep.ts
- src/pages/Checkout/
- src/tests/

**Atividades:**

- [ ] Criar campos de endereço.
- [ ] Configurar React Hook Form.
- [ ] Criar schema Zod.
- [ ] Validar CEP.
- [ ] Integrar ViaCEP.
- [ ] Preencher rua automaticamente.
- [ ] Preencher bairro automaticamente.
- [ ] Preencher cidade automaticamente.
- [ ] Preencher UF automaticamente.
- [ ] Manter número manual.
- [ ] Manter complemento opcional.
- [ ] Exibir carregamento.
- [ ] Tratar CEP inválido.
- [ ] Tratar CEP não encontrado.
- [ ] Tratar falha de conexão.
- [ ] Permitir correção manual.
- [ ] Evitar respostas antigas sobrescrevendo consultas recentes.

**Critérios de aceite:**

- Formulário funcional.
- CEP consultado.
- Campos disponíveis preenchidos.
- Validações corretas.
- Erros acessíveis.

**Testes:**

- CEP válido.
- CEP inválido.
- CEP não encontrado.
- API indisponível.
- Número obrigatório.
- Complemento opcional.
- Correção manual.

**Commit sugerido:**

`feat: implementa formulario de entrega e consulta cep`

---

## T11 — Implementar itens do carrinho e resumo financeiro

**Status:** Pendente.

**Objetivo:**
Construir a seção de produtos selecionados do Checkout.

**Requisitos relacionados:**
RF-05, RF-10, RN-03, RN-04, RN-09.

**Arquivos previstos:**

- src/components/CartItem/
- src/components/CartSummary/
- src/components/EmptyCart/
- src/utils/calculateCart.ts
- src/utils/formatCurrency.ts
- src/pages/Checkout/
- src/tests/

**Atividades:**

- [ ] Exibir produtos selecionados.
- [ ] Exibir imagens.
- [ ] Exibir preço.
- [ ] Permitir incrementar.
- [ ] Permitir decrementar.
- [ ] Permitir remover.
- [ ] Calcular subtotal.
- [ ] Aplicar frete documentado.
- [ ] Calcular total.
- [ ] Formatar valores em BRL.
- [ ] Exibir estado de carrinho vazio.
- [ ] Adaptar layout ao mobile.

**Critérios de aceite:**

- Itens corretos.
- Quantidades atualizadas.
- Cálculos consistentes.
- Remoção funcional.
- Estado vazio apropriado.

**Testes:**

- Subtotal.
- Frete.
- Total.
- Remoção.
- Atualização de quantidade.
- Carrinho vazio.

**Commit sugerido:**

`feat: implementa resumo financeiro do checkout`

---

## T12 — Implementar métodos de pagamento

**Status:** Pendente.

**Objetivo:**
Permitir selecionar a forma de pagamento fictícia.

**Requisitos relacionados:**
RF-09, RN-05.

**Arquivos previstos:**

- src/components/PaymentMethodSelector/
- src/types/order.ts
- src/schemas/checkoutSchema.ts
- src/pages/Checkout/
- src/tests/

**Atividades:**

- [ ] Criar opção de crédito.
- [ ] Criar opção de débito.
- [ ] Criar opção de dinheiro.
- [ ] Permitir apenas uma opção ativa.
- [ ] Integrar ao formulário.
- [ ] Validar opção obrigatória.
- [ ] Criar feedback visual.
- [ ] Garantir acessibilidade por teclado.

**Critérios de aceite:**

- Seleção funcional.
- Pagamento obrigatório.
- Apenas uma opção selecionada.
- Nenhum pagamento real realizado.

**Testes:**

- Seleção de opção.
- Alternância entre opções.
- Validação obrigatória.
- Navegação por teclado.

**Commit sugerido:**

`feat: implementa selecao de pagamento`

---

## T13 — Implementar confirmação do pedido

**Status:** Pendente.

**Objetivo:**
Concluir o fluxo de compra fictícia.

**Requisitos relacionados:**
RF-11, RF-12, RF-13, RN-06, RN-09, RN-10.

**Arquivos previstos:**

- src/pages/Success/
- src/types/order.ts
- src/pages/Checkout/
- src/contexts/CartContext.tsx
- src/utils/
- src/tests/

**Atividades:**

- [ ] Validar carrinho.
- [ ] Validar endereço.
- [ ] Validar pagamento.
- [ ] Bloquear itens inválidos.
- [ ] Criar identificador do pedido.
- [ ] Criar snapshot dos itens.
- [ ] Preservar preços e quantidades.
- [ ] Preservar endereço.
- [ ] Preservar método de pagamento.
- [ ] Preservar valores financeiros.
- [ ] Limpar carrinho.
- [ ] Navegar para Success.
- [ ] Exibir confirmação.
- [ ] Tratar ausência de pedido.
- [ ] Garantir funcionamento após refresh.

**Critérios de aceite:**

- Pedido válido confirmado.
- Pedido inválido bloqueado.
- Snapshot independente.
- Carrinho limpo.
- Sucesso exibido corretamente.

**Testes:**

- Pedido válido.
- Formulário inválido.
- Carrinho vazio.
- Produto inexistente.
- Limpeza do carrinho.
- Refresh na confirmação.
- Ausência de pedido válido.

**Commit sugerido:**

`feat: implementa confirmacao de pedido`

---

## T14 — Finalizar modo claro e escuro

**Status:** Pendente.

**Objetivo:**
Garantir alternância de tema consistente em todas as telas.

**Requisitos relacionados:**
RF-14, RF-16.

**Arquivos previstos:**

- src/contexts/ThemeContext.tsx
- src/hooks/useTheme.ts
- src/components/ThemeToggle/
- src/styles/themes.ts
- src/styles/GlobalStyles.ts
- src/pages/
- src/components/
- src/tests/

**Atividades:**

- [ ] Implementar ThemeProvider.
- [ ] Implementar alternância.
- [ ] Persistir preferência.
- [ ] Implementar fallback do sistema.
- [ ] Adaptar Header.
- [ ] Adaptar catálogo.
- [ ] Adaptar carrinho.
- [ ] Adaptar Checkout.
- [ ] Adaptar pagamento.
- [ ] Adaptar Success.
- [ ] Conferir logo nos dois temas.
- [ ] Verificar contraste e estados de foco.

**Critérios de aceite:**

- Tema alterna corretamente.
- Preferência persiste.
- Todas as telas acompanham o tema.
- Nenhum componente permanece ilegível.

**Testes:**

- Alternância de tema.
- Persistência.
- Preferência do sistema.
- Contraste.
- Navegação entre rotas.

**Commit sugerido:**

`style: finaliza modo claro e escuro`

---

## T15 — Finalizar responsividade e acessibilidade

**Status:** Pendente.

**Objetivo:**
Garantir uso adequado em dispositivos móveis e por teclado.

**Requisitos relacionados:**
RF-15 e requisitos não funcionais.

**Arquivos previstos:**

- src/pages/
- src/components/
- src/styles/
- src/tests/

**Atividades:**

- [ ] Testar 320px.
- [ ] Testar 375px.
- [ ] Testar 390px.
- [ ] Testar 768px.
- [ ] Testar 1280px.
- [ ] Testar 1440px.
- [ ] Revisar grid.
- [ ] Revisar Header.
- [ ] Revisar Checkout.
- [ ] Revisar Success.
- [ ] Verificar rolagem horizontal.
- [ ] Verificar navegação por teclado.
- [ ] Verificar foco visível.
- [ ] Verificar labels.
- [ ] Verificar mensagens acessíveis.
- [ ] Verificar contraste.
- [ ] Verificar alvos de toque.
- [ ] Verificar imagens e textos alternativos.

**Critérios de aceite:**

- Fluxo completo utilizável no mobile.
- Nenhuma sobreposição impeditiva.
- Navegação por teclado funcional.
- Formulário acessível.
- Contraste adequado.
- Layout sem rolagem horizontal involuntária.

**Testes:**

- Testes responsivos.
- Navegação por teclado.
- Inspeção de acessibilidade.
- Fluxo completo em celular.

**Commit sugerido:**

`style: melhora responsividade e acessibilidade`

---

## T16 — Testes automatizados e validação geral

**Status:** Pendente.

**Objetivo:**
Validar a aplicação completa e suas regras de negócio.

**Requisitos relacionados:**
RF-01 a RF-16 e RN-01 a RN-10.

**Arquivos previstos:**

- src/tests/
- tests/
- package.json
- vite.config.ts
- docs/TASKS_SPEC.md
- docs/TECH_SPEC.md

**Atividades:**

- [ ] Testar catálogo.
- [ ] Testar controles de quantidade.
- [ ] Testar reducer.
- [ ] Testar persistência.
- [ ] Testar contador.
- [ ] Testar cálculos.
- [ ] Testar CEP.
- [ ] Testar formulário.
- [ ] Testar pagamento.
- [ ] Testar confirmação.
- [ ] Testar snapshot.
- [ ] Testar limpeza do carrinho.
- [ ] Testar modo escuro.
- [ ] Testar navegação.
- [ ] Testar estados vazios.
- [ ] Testar responsividade.
- [ ] Revisar acessibilidade.
- [ ] Executar lint.
- [ ] Executar build.
- [ ] Corrigir falhas encontradas.
- [ ] Registrar resultados.

**Critérios de aceite:**

- Testes aplicáveis executados.
- Falhas impeditivas corrigidas.
- Build concluído.
- Fluxos principais validados.
- Evidências registradas.

**Commit sugerido:**

`test: valida fluxos principais do Coffee Delivery`

---

## T17 — Atualizar documentação e evidências

**Status:** Pendente.

**Objetivo:**
Preparar os documentos finais do projeto.

**Requisitos relacionados:**
Documentação e uso obrigatório de IA.

**Arquivos previstos:**

- README.md
- docs/PRD_SPEC.md
- docs/TECH_SPEC.md
- docs/TASKS_SPEC.md
- docs/AI_USAGE.md
- docs/evidences/

**Atividades:**

- [ ] Atualizar README.
- [ ] Revisar PRD.
- [ ] Revisar TECH.
- [ ] Revisar TASKS.
- [ ] Registrar pelo menos três interações com IA.
- [ ] Registrar branding com IA.
- [ ] Adicionar screenshots da Home.
- [ ] Adicionar screenshots do Checkout.
- [ ] Adicionar screenshots da confirmação.
- [ ] Adicionar screenshots mobile.
- [ ] Adicionar screenshots dark mode.
- [ ] Preparar uma breve demonstração de Home → Checkout → Confirmação.
- [ ] Documentar testes.
- [ ] Documentar decisões técnicas.
- [ ] Documentar instruções de instalação.

**Critérios de aceite:**

- Documentação consistente.
- Requisitos rastreáveis.
- Evidências disponíveis.
- Histórico de IA registrado.
- README completo.

**Commit sugerido:**

`docs: finaliza documentacao e evidencias`

---

## T18 — Publicar aplicação

**Status:** Pendente.

**Objetivo:**
Publicar o Coffee Delivery e validar sua execução online.

**Requisitos relacionados:**
Entrega final do projeto.

**Arquivos previstos:**

- README.md
- Configuração de deploy
- docs/TASKS_SPEC.md

**Atividades:**

- [ ] Escolher plataforma de hospedagem.
- [ ] Configurar deploy.
- [ ] Configurar fallback SPA.
- [ ] Executar build de produção.
- [ ] Publicar aplicação.
- [ ] Testar Home publicada.
- [ ] Testar Checkout publicado.
- [ ] Testar Success publicado.
- [ ] Testar refresh nas rotas.
- [ ] Testar carregamento de imagens.
- [ ] Testar integração de CEP.
- [ ] Testar tema claro e escuro.
- [ ] Adicionar link ao README.
- [ ] Registrar evidências da publicação.

**Critérios de aceite:**

- Aplicação acessível por URL pública.
- Funcionalidades principais operacionais.
- Rotas funcionando.
- Assets carregando.
- README com link de publicação.

**Commit sugerido:**

`chore: prepara publicacao do Coffee Delivery`

---

# 5. Matriz de rastreabilidade

| Requisito | Tarefas            |
| --------- | ------------------ |
| RF-01     | T06, T16           |
| RF-02     | T07, T16           |
| RF-03     | T08, T16           |
| RF-04     | T05, T08, T16      |
| RF-05     | T08, T11, T16      |
| RF-06     | T09, T16           |
| RF-07     | T05, T16           |
| RF-08     | T10, T16           |
| RF-09     | T12, T16           |
| RF-10     | T11, T16           |
| RF-11     | T13, T16           |
| RF-12     | T13, T16           |
| RF-13     | T13, T16           |
| RF-14     | T04, T05, T14, T16 |
| RF-15     | T06, T11, T15, T16 |
| RF-16     | T04, T16, T17      |

Todas as regras RN-01 a RN-10 deverão ser verificadas nas tarefas correspondentes e na validação geral.

---

# 6. Ordem de execução

Sequência planejada:

T01 -> T02 -> T03 -> T04 -> T05 -> T06 -> T07 -> T08 -> T09 -> T10 -> T11 -> T12 -> T13 -> T14 -> T15 -> T16 -> T17 -> T18

O OpenCode não deverá iniciar uma tarefa dependente de outra ainda não concluída.

A ordem poderá ser ajustada quando houver justificativa técnica e atualização da documentação.

---

# 7. Definição de pronto

Uma tarefa está concluída quando:

- Os critérios de aceite foram atendidos.
- As funcionalidades estão operacionais.
- Os testes aplicáveis foram executados.
- Não existem erros impeditivos conhecidos.
- Os documentos SPEC foram atualizados.
- O código foi revisado.
- As alterações foram registradas em commit.

Não marcar uma tarefa como concluída apenas porque o código foi escrito.

---

# 8. Registro de execução

Para cada tarefa, adicionar um registro com o seguinte modelo:

```text
Tarefa:
Data:
Objetivo:
Arquivos modificados:
Requisitos atendidos:
Testes executados:
Resultados:
Pendências:
Commit:
```

Registrar resultados reais.

Não inventar testes, screenshots ou resultados de execução.

### Conferência com o enunciado do Notion

- **Escopo:** atualização documental de T02 e dos critérios de T04, T17 e T18, sem encerrar essas tarefas.
- **Alterações:** frames do Figma, uso obrigatório de gerador visual, registro de branding e demonstração do fluxo.
- **Pendências de entrega:** capturas de Home, Checkout, Sucesso e Dark Mode mobile; evidências desktop/mobile no README; repositório público e link do deploy validado.
- **Branding:** a ferramenta visual retornou erro de credencial. O SVG criado com assistência do OpenCode serve como rascunho e não comprova, sozinho, o uso do gerador visual.

### Revisão dos exports visuais (T02; referência para T10–T13 e T15)

- **Arquivos fornecidos:** `Coffee Delivery - Checkout Filled.svg` e `Coffee Delivery - Success.svg`.
- **Validação:** layout do Checkout conferido no material enviado; Confirmação renderizada localmente em Chromium. Verificados os `viewBox` de ambos e a presença de duas imagens incorporadas no Checkout.
- **Resultado:** referências descritas no PRD e no TECH. A implementação e a validação mobile dessas telas continuam pendentes.

### T06 — Fotos e ajustes da Home

- **Status:** em andamento; não foi possível comparar a Home final diretamente com o SVG anexo.
- **Arquivos:** catálogo tipado em `src/data/coffees.ts`, fotos em `src/assets/coffees/`, arte em `src/assets/home/` e teste em `src/tests/catalog.test.ts`. Os ajustes da grade, dos cards e do banner estão na implementação local.
- **Validação:** lint, build e quatro testes aprovados. No Chromium, as 14 imagens carregaram sem rolagem horizontal em 320, 375, 390, 768, 1280 e 1440 px.
- **Commit parcial:** `feat: adiciona fotos de referencia ao catalogo`.

### T10 — Prévia do endereço no Checkout

- **Escopo:** formulário de entrega, validação e ViaCEP (RF-08, RN-07 e RN-08). O resumo, os pagamentos e a confirmação continuam pendentes.
- **Arquivos:** `src/pages/Checkout/`, `src/components/DeliveryAddressForm/DeliveryAddressForm.tsx`, `src/schemas/checkoutSchema.ts`, `src/utils/cep.ts` e `src/tests/checkout-address.test.tsx`.
- **Validação:** lint e build aprovados; oito testes passaram, incluindo quatro sobre endereço com respostas simuladas. Checkout e PNG do Header renderizados na prévia local em Chromium.
- **Commit:** `feat: implementa endereco e consulta de CEP no checkout`.

### T13 — Interface de confirmação e ilustração (parcial)

- **Escopo independente:** componente que recebe um snapshot pronto e modo vazio quando o snapshot está ausente (RF-12 e RN-09). A criação do pedido e a limpeza do carrinho permanecem pendentes.
- **Arquivos:** `src/components/OrderSuccess/`, `src/pages/Success/`, `src/assets/success/delivery.png` e `src/tests/order-success.test.tsx`. O roteamento da prévia local fornece o snapshot ao componente.
- **Validação:** lint, build e dez testes aprovados; no navegador, `/success` exibiu o estado vazio e carregou o PNG original de 492 × 293 px. O estado preenchido foi validado com um snapshot de teste.
- **Commit parcial:** `feat: cria interface de confirmacao com ilustracao original`.

### T11 — Cafés selecionados e resumo financeiro

- **Escopo:** itens reais, alteração de quantidade, remoção, subtotal, taxa de entrega e total (RF-05, RF-10, RN-03, RN-04 e RN-09). Pagamento e finalização não foram incluídos.
- **Arquivos:** `src/components/CartItem/`, `src/components/CartSummary/`, `src/components/EmptyCart/`, `src/pages/Checkout/`, `src/utils/calculateCart.ts` e `src/tests/cart-summary.test.tsx`.
- **Validação:** lint, build e 12 testes aprovados. Na prévia do navegador, uma unidade de Café com Leite exibiu subtotal de R$ 9,90, frete de R$ 3,50 e total de R$ 13,40.
- **Commit:** `feat: mostra itens e totais do carrinho no checkout`. A prévia local passa o estado do carrinho pela rota; essa ligação permanece em `src/App.tsx` junto ao código de navegação ainda não versionado.

### T12 — Pagamento fictício

- **Escopo:** cartão de crédito, cartão de débito e dinheiro, com seleção única e obrigatória (RF-09, RN-05).
- **Arquivos:** `src/components/PaymentMethodSelector/`, `src/pages/Checkout/` e `src/tests/payment.test.tsx`.
- **Validação:** lint, build e dois testes específicos aprovados, incluindo seleção pelo teclado.
- **Commit:** `feat: adiciona selecao de pagamento no checkout`.

### T13 — Finalização do pedido

- **Escopo:** botão de confirmação, validação completa, snapshot independente e navegação para `/success` após limpar o carrinho (RF-11 a RF-13, RN-06, RN-09 e RN-10).
- **Arquivos:** `src/pages/Checkout/`, `src/App.tsx`, `src/contexts/OrderContext.tsx`, `src/utils/confirmedOrder.ts` e `src/tests/confirm-order.test.tsx`.
- **Validação:** lint e build aprovados; 17 testes passaram. O teste de integração confirma a compra fictícia, a limpeza do carrinho e a restauração da confirmação ao montar de novo a aplicação. O ViaCEP foi simulado nesse teste.
- **Commit:** `feat: confirma pedido e preserva snapshot da entrega`. A integração da estrutura já implementada da SPA foi registrada separadamente em `39f2048`.

### T17 — README e evidências

- **Arquivos:** `README.md` e `docs/evidences/`.
- **Escopo:** instalação, demonstração, arquitetura, branding e capturas da aplicação.
- **Validação:** fluxo Home → Checkout → Confirmação executado em Chromium com dados de demonstração e ViaCEP simulado. Capturas desktop (1440 px) e mobile (390 px), incluindo o modo escuro.
- **Pendências:** marca autoral gerada por ferramenta visual e publicação definitiva.
- **Commit:** `docs: apresenta o projeto e registra evidencias da aplicacao`.

### T18 — Configuração da Vercel (parcial)

- **Arquivos:** `vercel.json`, `README.md` e `docs/TECH_SPEC.md`.
- **Escopo:** preset Vite, build, saída estática e fallback da SPA.
- **Pendências:** obter uma URL pública definitiva e validar as rotas nela.
- **Commit:** `chore: prepara hospedagem da SPA na Vercel`.

**Atualização:** a URL de implantação informada foi adicionada ao README. O acesso sem login redireciona para a autenticação da Vercel; a validação pública continua pendente.

---

# 9. Checklist de entrega final

- [ ] Aplicação compila sem erros.
- [ ] Home apresenta os cafés.
- [ ] Carrinho acumula produtos repetidos.
- [ ] Contador apresenta unidades totais.
- [ ] Carrinho persiste após refresh.
- [ ] Controles de quantidade funcionam.
- [ ] CEP é consultado por API pública.
- [ ] Formulário apresenta validações.
- [ ] Pagamento fictício é obrigatório.
- [ ] Subtotal, frete e total estão corretos.
- [ ] Pedidos inválidos são bloqueados.
- [ ] Pedido válido é confirmado.
- [ ] Carrinho é limpo após confirmação.
- [ ] Snapshot do pedido é preservado.
- [ ] Logo original com IA implementada.
- [ ] Favicon configurado.
- [ ] Modo claro e escuro funcional.
- [ ] Tema persiste após refresh.
- [ ] Home responsiva.
- [ ] Checkout responsivo.
- [ ] Confirmação responsiva.
- [ ] Acessibilidade revisada.
- [ ] Testes executados.
- [ ] Documentação atualizada.
- [ ] Pelo menos três interações com IA registradas.
- [ ] Screenshots adicionados.
- [ ] Aplicação publicada.
- [ ] README com link de deploy.
- [ ] Repositório GitHub atualizado.

---

# 10. Histórico do documento

| Versão | Descrição                                  | Status |
| ------ | ------------------------------------------ | ------ |
| 1.0    | Planejamento inicial das tarefas T01 a T18 | Criado |

Este arquivo deve ser atualizado após cada etapa de desenvolvimento.
