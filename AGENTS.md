# AGENTS.md — Coffee Delivery

## 1. Identificação do projeto

Nome: Coffee Delivery

Tipo: Single Page Application (SPA)

Disciplina: Single Page Application — Projeto Final 05

Tecnologias principais:

- React
- TypeScript
- Vite 8
- React Router
- Context API
- useReducer
- React Hook Form
- Zod
- styled-components
- Phosphor Icons
- localStorage

Repositório:
https://github.com/wanessags/CoffeDelivery

Referência visual:
https://www.figma.com/design/yGPNTA0Yczb183EikXGIiA/Coffee-Delivery-%E2%80%A2-Projeto-Final-React?node-id=2-1297

O projeto é acadêmico e deve seguir as orientações do documento "Projeto Final 05 — Coffee Delivery — React + TypeScript + IA".

---

## 2. Papel do assistente de IA

Atue como desenvolvedor frontend sênior e mentor especializado em React, TypeScript, arquitetura de SPA, acessibilidade e testes.

Sua função é auxiliar no planejamento, implementação, revisão, depuração, documentação e validação da aplicação.

Regras obrigatórias:

1. Antes de implementar, ler AGENTS.md e os arquivos da pasta docs.
2. Analisar o Figma e os recursos visuais disponíveis.
3. Desenvolver uma tarefa pequena por vez.
4. Não implementar o projeto inteiro de uma só vez.
5. Preservar funcionalidades existentes.
6. Não remover requisitos obrigatórios.
7. Evitar mudanças fora do escopo da tarefa.
8. Explicar decisões técnicas relevantes.
9. Utilizar TypeScript com tipagem adequada.
10. Não utilizar `any` para contornar problemas.
11. Testar cada funcionalidade implementada.
12. Atualizar os documentos SPEC a cada etapa.
13. Registrar alterações com commits semânticos.
14. Nunca afirmar que um teste passou sem executá-lo.
15. Não inventar informações ou propriedades do Figma.
16. Não publicar ou alterar o repositório remoto sem autorização.
17. Não substituir imagens originais sem necessidade.
18. Não apagar arquivos, funcionalidades ou histórico Git sem autorização.

O assistente deve priorizar qualidade, simplicidade, clareza e conformidade com o projeto acadêmico.

---

## 3. Referências obrigatórias

### Figma

O Figma é a referência principal para a construção visual.

Telas previstas:

- Home
- Checkout vazio
- Checkout preenchido
- Confirmação do pedido
- Style Guide

Ao implementar cada tela, observar:

- Estrutura do layout
- Tipografia
- Cores
- Espaçamentos
- Bordas
- Dimensões
- Ícones
- Imagens
- Hierarquia visual
- Responsividade

Não inventar dimensões ou tokens afirmando que foram extraídos do Figma.

Caso alguma propriedade não esteja acessível, registrar a limitação e utilizar uma aproximação visual documentada.

A personalização da marca é permitida, desde que mantenha todos os requisitos funcionais.

### Assets

As imagens dos cafés serão fornecidas pelo responsável pelo projeto.

Diretório:

`src/assets/coffees/`

Preferir os SVGs originais exportados do Figma.

Não substituir esses arquivos por emojis, imagens genéricas ou imagens externas.

Manter nomes de arquivos consistentes e utilizar imports válidos.

Não assumir que todos os assets já foram adicionados.

---

## 4. Identidade visual

### Tipografia

O Style Guide utiliza:

**Baloo 2**

- Title XL: 48px, ExtraBold, 130%
- Title L: 32px, ExtraBold, 130%
- Title M: 24px, ExtraBold, 130%
- Title S: 20px, Bold, 130%
- Title XS: 18px, Bold, 130%

**Roboto**

- Text L: 20px, Regular/Bold, 130%
- Text M: 16px, Regular/Bold, 130%
- Text S: 14px, Regular, 130%
- Text XS: 12px, Bold, 130%
- Tag: 10px, Bold, 130%
- Button G: 14px, Bold, 160%
- Button M: 12px, Regular, 160%

Utilizar Google Fonts ou arquivos de fontes com direitos de uso adequados.

### Cores

A referência do Figma utiliza principalmente:

- Amarelo
- Roxo
- Tons neutros
- Superfícies claras
- Textos escuros

Utilizar os valores exatos do Style Guide quando estiverem disponíveis.

Criar tokens semânticos para:

- Background
- Surface
- Text
- Text secondary
- Primary
- Secondary
- Border
- Focus
- Error
- Success
- Disabled

### Ícones

Utilizar preferencialmente:

`@phosphor-icons/react`

Os ícones devem ser coerentes com o Style Guide e possuir identificação acessível quando necessário.

### Logo

A logo deve ser original e criada com auxílio de IA.

Requisitos:

- Funcionar em fundos claros e escuros.
- Estar presente no Header.
- Possuir favicon.
- Ser legível em tamanhos reduzidos.
- Ter processo de criação documentado.
- Não utilizar a logo do Figma como se fosse uma criação autoral.

---

## 5. Requisitos funcionais

Todos os requisitos RF-01 a RF-16 são obrigatórios.

### Catálogo

RF-01: Mostrar cafés com imagem, nome, descrição, preço e tags.

RF-02: Permitir escolher uma quantidade inteira positiva.

RF-03: Adicionar cafés ao carrinho, acumulando quantidades de produtos repetidos.

RF-04: Mostrar no Header um contador com o total de unidades.

### Carrinho

RF-05: Permitir aumentar, diminuir e remover individualmente os produtos.

RF-06: Persistir o carrinho utilizando localStorage.

RF-07: Implementar navegação SPA entre Home, Checkout e Confirmação.

### Checkout

RF-08: Validar endereço e consultar uma API pública de CEP para preencher automaticamente os campos disponíveis.

RF-09: Permitir selecionar cartão de crédito, cartão de débito ou dinheiro.

RF-10: Exibir subtotal, taxa de entrega e valor total.

RF-11: Impedir a finalização com carrinho vazio ou formulário inválido.

### Confirmação

RF-12: Mostrar os dados corretos do pedido confirmado.

RF-13: Limpar o carrinho após a confirmação, preservando os dados do pedido concluído.

### Interface

RF-14: Implementar tema claro e escuro com persistência.

RF-15: Implementar responsividade mobile.

RF-16: Integrar logo original criada com IA e documentar sua criação.

Não remover ou simplificar qualquer requisito obrigatório sem autorização expressa.

---

## 6. Regras de negócio

RN-01:
Não aceitar quantidade zero ou negativa na adição. No carrinho, a redução de 1 para 0 deve seguir uma regra definida e documentada.

RN-02:
Produtos iguais devem ocupar uma única linha no carrinho, acumulando suas quantidades.

RN-03:
Subtotal = soma de preço unitário multiplicado pela quantidade.
Total = subtotal + taxa de entrega.

A taxa de entrega deve ser centralizada e documentada.

RN-04:
Utilizar valores monetários em reais (BRL), com duas casas decimais. Preferir cálculos em centavos.

RN-05:
O pagamento é exclusivamente fictício, sem transação financeira real.

RN-06:
Persistir o carrinho após atualizar a página. O pedido concluído precisa possuir um snapshot independente.

RN-07:
Consultar uma API pública de CEP, como ViaCEP. Número é obrigatório e informado manualmente. Complemento é opcional. Tratar CEP inválido, não encontrado, carregamento e falha de consulta.

RN-08:
O catálogo pode ser um arquivo local tipado. Backend e banco de dados não são necessários. A integração com API de CEP é obrigatória.

RN-09:
Apresentar estados vazios apropriados para carrinho e confirmação.

RN-10:
Não confirmar compras com itens inexistentes, dados inválidos ou erros de validação.

---

## 7. Arquitetura

A aplicação deve utilizar uma arquitetura modular.

Estrutura sugerida:

coffee-delivery/

- public/
- src/
  - assets/
    - coffees/
  - components/
  - contexts/
  - data/
  - hooks/
  - pages/
  - reducers/
  - schemas/
  - styles/
  - types/
  - utils/
  - tests/
  - App.tsx
  - main.tsx
- docs/
  - PRD_SPEC.md
  - TECH_SPEC.md
  - TASKS_SPEC.md
  - AI_USAGE.md
- AGENTS.md
- README.md

### Componentes sugeridos

- Header
- ThemeToggle
- CoffeeCard
- CoffeeCatalog
- QuantityInput
- CartBadge
- CartItem
- CartSummary
- DeliveryAddressForm
- PaymentMethodSelector
- OrderSuccess
- EmptyCart
- PageLayout

Os componentes devem possuir responsabilidades bem definidas.

Não concentrar toda a lógica no App.tsx.

---

## 8. Gerenciamento de estado

Utilizar Context API e useReducer para o carrinho.

Ações previstas:

- ADD_ITEM
- INCREMENT_ITEM
- DECREMENT_ITEM
- REMOVE_ITEM
- CLEAR_CART

Regras:

- Não modificar diretamente o estado.
- Atualizar arrays e objetos de maneira imutável.
- Centralizar a lógica do carrinho no reducer.
- Utilizar tipos e interfaces.
- Persistir o estado com tratamento de erros.
- Validar dados recuperados do localStorage.

Utilizar useState, useEffect e custom Hooks quando apropriado.

---

## 9. Rotas

Utilizar React Router.

Rotas obrigatórias:

`/` — Home

`/checkout` — Checkout

`/success` — Confirmação

Não utilizar recarregamento completo para navegar entre as telas.

Tratar rotas inválidas de maneira adequada.

A tela de sucesso não deve exibir um pedido inexistente.

---

## 10. Formulário e CEP

Utilizar:

- React Hook Form
- Zod
- @hookform/resolvers

Campos:

- CEP
- Rua
- Número
- Complemento
- Bairro
- Cidade
- UF

O número é obrigatório.

O complemento é opcional.

Consultar uma API pública quando o CEP estiver válido.

Preencher automaticamente apenas os dados disponíveis na resposta.

Exibir feedback acessível durante carregamento, erro e sucesso.

Não apagar os dados manuais desnecessariamente.

Não bloquear permanentemente a correção manual de campos.

---

## 11. Dark mode

O modo escuro é obrigatório.

Requisitos:

- Alternância acessível.
- Preferência persistida no localStorage.
- Fallback para prefers-color-scheme.
- Tokens semânticos.
- Contraste adequado.
- Foco visível.
- Aplicação consistente em todas as rotas.

Não implementar modo escuro apenas alterando o fundo da página.

Cards, formulários, botões, Header, carrinho e confirmação também devem respeitar o tema.

---

## 12. Responsividade

Adotar uma abordagem mobile first.

Testar aproximadamente:

- 320px
- 375px
- 390px
- 768px
- 1280px
- 1440px

Requisitos:

- Evitar rolagem horizontal.
- Não sobrepor textos.
- Adaptar grids.
- Organizar checkout em coluna no mobile.
- Manter botões utilizáveis por toque.
- Preservar legibilidade.
- Evitar imagens deformadas.

Utilizar WCAG 2.2 AA como referência de acessibilidade.

---

## 13. Testes e qualidade

Criar testes de lógica e validação, além de verificar os fluxos principais.

Cobrir:

- Adicionar produto
- Adicionar produto repetido
- Incrementar quantidade
- Decrementar quantidade
- Remover produto
- Contador do Header
- Cálculo de subtotal
- Cálculo do total
- Persistência após refresh
- Carrinho vazio
- CEP válido
- CEP inválido
- CEP não encontrado
- Falha de API
- Formulário obrigatório
- Seleção de pagamento
- Confirmação de pedido
- Snapshot do pedido
- Limpeza do carrinho
- Modo escuro persistente
- Navegação SPA

Utilizar Vitest e React Testing Library para testes unitários e de componentes, se configurados no projeto.

Utilizar Playwright quando apropriado para testes end-to-end.

Antes de finalizar cada tarefa, executar os comandos aplicáveis:

`npm run lint`

`npm run build`

`npm run test`

Não executar um script inexistente sem antes configurá-lo.

Não declarar que testes passaram sem evidência real.

---

## 14. Documentação obrigatória

Manter os seguintes documentos:

### docs/PRD_SPEC.md

Deve conter:

- Visão do produto
- Público-alvo
- Objetivos
- Escopo
- RF-01 a RF-16
- RN-01 a RN-10
- Fluxos
- Requisitos não funcionais
- Critérios de aceite

### docs/TECH_SPEC.md

Deve conter:

- Tecnologias
- Justificativas
- Arquitetura
- Estrutura de pastas
- Modelagem de tipos
- Context API
- useReducer
- Persistência
- Rotas
- Formulários
- Temas
- Estratégia de testes

### docs/TASKS_SPEC.md

Cada tarefa deve possuir:

- ID
- Objetivo
- Requisitos relacionados
- Arquivos afetados
- Critérios de aceite
- Testes
- Status
- Commit relacionado

### docs/AI_USAGE.md

Registrar pelo menos três interações relevantes com IA, incluindo:

- Prompt utilizado
- Objetivo
- Resumo da resposta
- Decisão tomada
- Evidência

### README.md

Deve conter:

- Apresentação do projeto
- Tecnologias
- Instalação
- Scripts
- Requisitos
- Screenshots
- Branding com IA
- Referência do Figma
- Documentação
- Testes
- Link do deploy

Atualizar a documentação sempre que uma mudança relevante ocorrer.

---

## 15. Fluxo de desenvolvimento

Trabalhar em tarefas pequenas e sequenciais.

Ordem recomendada:

T01 — Configuração inicial do React com Vite 8.

T02 — Criação de PRD_SPEC, TECH_SPEC, TASKS_SPEC e AGENTS.md.

T03 — Identidade visual, logo, tokens e tipografia.

T04 — Header e estrutura visual da aplicação.

T05 — Home e catálogo.

T06 — Controles de quantidade.

T07 — Carrinho com Context API e useReducer.

T08 — Persistência do carrinho.

T09 — Checkout e integração de CEP.

T10 — Formas de pagamento e resumo financeiro.

T11 — Confirmação do pedido.

T12 — Dark mode completo.

T13 — Responsividade e acessibilidade.

T14 — Testes automatizados e revisão.

T15 — Documentação final, GitHub e deploy.

A numeração e o planejamento detalhado devem ser definidos em TASKS_SPEC.md.

Não iniciar uma tarefa dependente de outra ainda não concluída.

---

## 16. Controle de versão

Utilizar commits semânticos.

Padrões:

- feat: nova funcionalidade
- fix: correção
- docs: documentação
- style: ajustes visuais
- refactor: reorganização sem mudança funcional
- test: testes
- chore: configuração e manutenção

Exemplos:

`feat: implementa catalogo de cafes`

`feat: adiciona carrinho com useReducer`

`fix: corrige validacao do CEP`

`style: implementa tema escuro`

`test: adiciona testes do carrinho`

`docs: atualiza especificacoes do checkout`

Não utilizar push --force.

Não sobrescrever alterações do usuário.

Não misturar mudanças não relacionadas no mesmo commit.

Antes de cada commit, revisar os arquivos modificados.

O repositório principal é:

https://github.com/wanessags/CoffeDelivery

---

## 17. Como responder ao responsável pelo projeto

Ao iniciar uma tarefa:

1. Informar o ID da tarefa.
2. Explicar brevemente o objetivo.
3. Identificar requisitos relacionados.
4. Informar os arquivos afetados.
5. Explicar as alterações planejadas.

Ao concluir:

1. Resumir o que foi implementado.
2. Informar os arquivos modificados.
3. Apresentar os testes executados e seus resultados.
4. Informar possíveis limitações.
5. Atualizar os arquivos SPEC.
6. Sugerir a mensagem de commit.

Quando forem solicitados códigos pelo chat, fornecer os arquivos completos, prontos para copiar e colar, e não somente diffs ou fragmentos.

Priorizar instruções claras para Windows 11 e PowerShell.

Não avançar automaticamente por várias tarefas sem necessidade.

---

## 18. Restrições

Não implementar:

- Backend próprio
- Banco de dados
- Autenticação
- Pagamento real
- Integrações financeiras
- Funcionalidades extras sem autorização

Não remover:

- Carrinho
- Persistência
- Consulta de CEP
- Validações
- Checkout
- Confirmação
- Dark mode
- Responsividade
- Requisitos de acessibilidade

Busca, filtros, cupons, histórico de pedidos e outras funcionalidades são opcionais.

Priorizar o escopo obrigatório.

---

## 19. Critérios de conclusão

Uma tarefa está concluída somente quando:

- A implementação está funcional.
- Os requisitos relacionados foram atendidos.
- Os testes aplicáveis foram realizados.
- Não existem erros conhecidos impeditivos.
- A documentação foi atualizada.
- O código foi revisado.
- O commit foi preparado ou registrado.

Não marcar tarefas como concluídas sem validação.

---

## 20. Instrução inicial obrigatória

Antes de escrever código, leia:

1. AGENTS.md
2. docs/PRD_SPEC.md
3. docs/TECH_SPEC.md
4. docs/TASKS_SPEC.md

Se algum arquivo obrigatório ainda não existir, priorize sua criação.

Depois:

- Analise o estado atual do repositório.
- Verifique os requisitos.
- Identifique a próxima tarefa pendente.
- Apresente um plano pequeno.
- Implemente apenas a tarefa correspondente.
- Execute os testes aplicáveis.
- Atualize a documentação.
- Informe o commit recomendado.

Objetivo final: entregar uma SPA Coffee Delivery completa, funcional, acessível, responsiva, documentada, testada e alinhada às exigências do projeto final.
