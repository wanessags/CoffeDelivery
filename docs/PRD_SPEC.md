# PRD_SPEC.md — Coffee Delivery

**Projeto:** Coffee Delivery  
**Disciplina:** Single Page Application (SPA)  
**Tecnologias:** React, TypeScript e Vite 8  
**Versão:** 1.0  
**Status:** Planejamento  
**Repositório:** https://github.com/wanessags/CoffeDelivery

---

## 1. Visão geral

O Coffee Delivery é uma aplicação web de cafeteria que permite ao cliente consultar um catálogo de cafés, selecionar produtos, definir quantidades, montar um carrinho e realizar um pedido fictício.

A aplicação será desenvolvida como uma Single Page Application (SPA), utilizando React e TypeScript.

O projeto deve reproduzir a estrutura visual apresentada no Figma, respeitando as funcionalidades e os requisitos definidos na atividade acadêmica.

### 1.1 Objetivo geral

Desenvolver uma aplicação de cafeteria funcional, responsiva, acessível e organizada, aplicando os conceitos estudados na disciplina de Single Page Application.

### 1.2 Objetivos específicos

- Construir interfaces reutilizáveis com React.
- Utilizar TypeScript para tipagem.
- Implementar navegação com React Router.
- Gerenciar o carrinho com Context API e useReducer.
- Persistir dados utilizando localStorage.
- Validar formulários com React Hook Form e Zod.
- Consultar uma API pública de CEP.
- Implementar temas claro e escuro.
- Adaptar a aplicação para dispositivos móveis.
- Utilizar imagens exportadas do Figma.
- Criar uma identidade visual original com auxílio de IA.
- Realizar testes e documentar o desenvolvimento.

---

## 2. Problema

O cliente de uma cafeteria precisa visualizar os produtos disponíveis, escolher diferentes tipos de café e organizar seu pedido de forma simples.

O Coffee Delivery apresenta uma experiência digital que reúne catálogo, carrinho, formulário de entrega e confirmação do pedido.

A aplicação simula o processo de compra sem realizar pagamentos reais.

---

## 3. Público-alvo

Pessoas que desejam consultar produtos de uma cafeteria e simular pedidos de entrega pela internet.

A interface deve ser intuitiva para usuários de computadores, tablets e smartphones.

---

## 4. Escopo do produto

### 4.1 Funcionalidades incluídas

- Catálogo de cafés.
- Imagens, nomes, preços, descrições e categorias.
- Seleção de quantidades.
- Adição de produtos ao carrinho.
- Alteração e remoção de itens.
- Contador de unidades no Header.
- Persistência do carrinho.
- Formulário de entrega.
- Consulta automática de endereço por CEP.
- Seleção de forma de pagamento.
- Cálculo de subtotal e entrega.
- Confirmação de pedido fictício.
- Tela de sucesso.
- Tema claro e escuro.
- Interface responsiva.
- Acessibilidade.
- Identidade visual criada com IA.

### 4.2 Funcionalidades excluídas

Não fazem parte do escopo obrigatório:

- Autenticação de usuários.
- Cadastro de contas.
- Backend próprio.
- Banco de dados.
- Pagamento real.
- Integração com instituições financeiras.
- Rastreamento real de entregas.
- Gerenciamento de estoque.

### 4.3 Funcionalidades opcionais

Podem ser consideradas após a conclusão dos requisitos obrigatórios:

- Busca por nome do café.
- Filtro por categorias.
- Histórico local de pedidos.
- Cupons fictícios.
- Página de detalhes de produtos.
- Animações discretas.

As funcionalidades opcionais não devem comprometer a entrega principal.

---

## 5. Referência visual

Enunciado oficial: [Projeto Final 05 no Notion](https://app.notion.com/p/41bdfca74d8d8119a849e30ea492a6af). O PDF fornecido é a referência para os critérios de aceite.

Figma:

https://www.figma.com/design/yGPNTA0Yczb183EikXGIiA/Coffee-Delivery-%E2%80%A2-Projeto-Final-React?node-id=2-1297

O protótipo apresenta as seguintes telas:

1. Home — frame `2:1550`.
2. Checkout — frame `217:511`.
3. Checkout preenchido.
4. Confirmação do pedido — frame `222:824`.
5. Style Guide.

### 5.1 Home

A Home deverá apresentar:

- Logo no Header.
- Localização ilustrativa.
- Botão de carrinho.
- Alternância de tema.
- Banner principal.
- Benefícios da cafeteria.
- Título do catálogo.
- Cards dos cafés.
- Imagens dos produtos.
- Tags de categorias.
- Descrições e preços.
- Controle de quantidade.
- Botão para adicionar ao carrinho.

### 5.2 Checkout

O Checkout deverá apresentar:

- Formulário de endereço.
- Consulta de CEP.
- Campos de entrega.
- Métodos de pagamento.
- Lista de cafés selecionados.
- Controle de quantidades.
- Remoção de produtos.
- Subtotal.
- Taxa de entrega.
- Total geral.
- Botão de confirmação.

### 5.3 Confirmação

A tela de sucesso deverá apresentar:

- Mensagem de confirmação.
- Endereço informado.
- Forma de pagamento escolhida.
- Informações do pedido confirmado.
- Ilustração ou composição visual coerente com o Figma.

---

## 6. Requisitos funcionais

### RF-01 — Catálogo de cafés

O sistema deverá exibir os cafés disponíveis com imagem, nome, descrição, preço e categoria.

**Critérios de aceite:**

- Os produtos são exibidos na Home.
- Cada card apresenta as informações necessárias.
- As imagens correspondem aos cafés cadastrados.
- Os preços são apresentados em reais.

### RF-02 — Seleção de quantidade

O usuário deverá selecionar a quantidade desejada antes de adicionar um café.

**Critérios de aceite:**

- A quantidade deve ser inteira e positiva.
- Os botões de incremento e decremento funcionam.
- Não é possível adicionar uma quantidade inválida.

### RF-03 — Adição ao carrinho

O usuário deverá adicionar cafés ao carrinho.

**Critérios de aceite:**

- O produto é incluído corretamente.
- A quantidade selecionada é respeitada.
- Adicionar novamente o mesmo produto acumula quantidades.
- Produtos repetidos não geram linhas duplicadas.

### RF-04 — Contador do carrinho

O Header deverá mostrar a quantidade total de unidades adicionadas.

**Critérios de aceite:**

- O contador soma as quantidades.
- O contador atualiza imediatamente.
- A contagem não representa apenas os tipos de produto.

### RF-05 — Gerenciamento do carrinho

O usuário deverá aumentar, diminuir e remover produtos individualmente.

**Critérios de aceite:**

- Os controles funcionam corretamente.
- O subtotal é atualizado.
- O contador é atualizado.
- A remoção afeta apenas o produto selecionado.

### RF-06 — Persistência do carrinho

O carrinho deverá ser persistido no localStorage.

**Critérios de aceite:**

- Os produtos permanecem após atualizar a página.
- As quantidades são recuperadas.
- Dados inválidos armazenados não devem quebrar a aplicação.

### RF-07 — Navegação SPA

O sistema deverá utilizar React Router.

**Rotas obrigatórias:**

- `/` — Home.
- `/checkout` — Checkout.
- `/success` — Confirmação.

**Critérios de aceite:**

- A navegação não exige recarregamento completo.
- As telas são acessadas corretamente.
- O fluxo principal permanece funcional.

### RF-08 — Endereço de entrega

O Checkout deverá apresentar formulário com:

- CEP.
- Rua.
- Número.
- Complemento.
- Bairro.
- Cidade.
- UF.

O CEP deverá ser consultado por uma API pública, como ViaCEP.

**Critérios de aceite:**

- CEP válido permite consultar o endereço.
- Rua, bairro, cidade e UF são preenchidos automaticamente quando disponíveis.
- Número e complemento permanecem para preenchimento manual.
- Número é obrigatório.
- Complemento é opcional.
- CEP inválido apresenta erro.
- CEP não encontrado apresenta mensagem.
- Falha de conexão apresenta feedback.
- O usuário pode corrigir os dados necessários.

### RF-09 — Forma de pagamento

O usuário deverá selecionar uma opção:

- Cartão de crédito.
- Cartão de débito.
- Dinheiro.

**Critérios de aceite:**

- Apenas uma opção é selecionada por vez.
- Uma opção válida é obrigatória.
- Nenhuma transação financeira é realizada.

### RF-10 — Resumo financeiro

O Checkout deverá apresentar:

- Subtotal dos produtos.
- Taxa de entrega.
- Total geral.

**Critérios de aceite:**

- Os valores são calculados corretamente.
- Alterar quantidades atualiza o subtotal.
- Remover produtos atualiza o total.
- Todos os valores são formatados em BRL.

### RF-11 — Validação antes da confirmação

O sistema deverá impedir a confirmação de pedidos inválidos.

**Critérios de aceite:**

- Carrinho vazio impede a confirmação.
- Campos obrigatórios são validados.
- A forma de pagamento é obrigatória.
- Mensagens de erro são acessíveis.
- Itens inexistentes não podem ser confirmados.

### RF-12 — Confirmação do pedido

O sistema deverá apresentar uma página de confirmação após a finalização válida.

**Critérios de aceite:**

- O endereço apresentado corresponde ao pedido.
- A forma de pagamento corresponde à opção escolhida.
- O pedido é apresentado corretamente.
- A confirmação representa uma compra fictícia.

### RF-13 — Limpeza do carrinho

O sistema deverá limpar o carrinho após a confirmação do pedido.

**Critérios de aceite:**

- O carrinho é esvaziado.
- O contador é atualizado.
- Os dados do pedido confirmado permanecem disponíveis.
- A página de sucesso não depende dos itens atuais do carrinho.

### RF-14 — Modo claro e escuro

O sistema deverá permitir alternar entre temas claro e escuro.

**Critérios de aceite:**

- Existe um controle acessível.
- A preferência é salva no localStorage.
- A aplicação respeita a preferência inicial do sistema quando não há escolha salva.
- Todas as telas acompanham o tema.
- Textos e controles apresentam contraste adequado.

### RF-15 — Responsividade

A interface deverá funcionar em dispositivos móveis, tablets e desktops.

**Critérios de aceite:**

- A Home se adapta a telas menores.
- O catálogo reorganiza os cards.
- O Checkout reorganiza formulário e resumo.
- Os controles continuam acessíveis.
- Não ocorre rolagem horizontal involuntária.

### RF-16 — Identidade visual criada com IA

O projeto deverá possuir logo original desenvolvida com auxílio de inteligência artificial.

**Critérios de aceite:**

- A logo é original.
- Pelo menos uma proposta é criada com uma ferramenta de geração visual por IA.
- Está integrada ao Header.
- Existe favicon.
- A marca funciona em fundos claros e escuros.
- O processo de criação é documentado.
- O registro inclui ferramenta, prompt, resultado e justificativa da escolha. Verificar a legibilidade em tamanho reduzido e os direitos de uso.

---

## 7. Regras de negócio

### RN-01 — Quantidades

Não permitir quantidade zero ou negativa durante a adição ao carrinho.

No carrinho, a redução de uma unidade para zero removerá o produto.

### RN-02 — Produto único

Ao adicionar novamente o mesmo café, atualizar a quantidade do item existente.

Não criar linhas duplicadas para produtos com o mesmo identificador.

### RN-03 — Cálculo financeiro

Subtotal = soma do preço unitário de cada item multiplicado pela quantidade.

Total = subtotal + taxa de entrega.

**Decisão inicial:** utilizar taxa de entrega fictícia fixa de R$ 3,50 quando o carrinho possuir produtos.

Quando o carrinho estiver vazio, o total será R$ 0,00.

A taxa deverá ser centralizada em uma constante, podendo ser revisada antes da implementação.

### RN-04 — Valores monetários

Os valores deverão ser calculados preferencialmente em centavos, utilizando inteiros para evitar problemas de precisão.

A apresentação deverá utilizar o formato brasileiro de moeda.

### RN-05 — Pagamento fictício

A forma de pagamento será apenas informativa.

Não haverá cobrança real.

### RN-06 — Persistência

O carrinho será persistido no localStorage.

O pedido confirmado deverá possuir uma cópia independente das informações, preservando a confirmação após a limpeza do carrinho.

### RN-07 — Endereço

O complemento será opcional.

Os demais campos exigidos deverão ser validados.

O sistema deverá consultar uma API pública de CEP e tratar carregamento, falhas, CEP inválido e CEP não encontrado.

### RN-08 — Catálogo local

O catálogo poderá ser armazenado em arquivo TypeScript local.

Não será necessário backend próprio.

A API pública de CEP será obrigatória.

### RN-09 — Estados vazios

O sistema deverá apresentar mensagens adequadas quando:

- O carrinho estiver vazio.
- Não existir pedido confirmado válido.

### RN-10 — Navegação e confirmação

Não permitir confirmar pedidos com:

- Formulário inválido.
- Carrinho vazio.
- Produtos inexistentes.
- Quantidades inválidas.

---

## 8. Fluxos do usuário

### Fluxo 01 — Consulta de produtos

1. Usuário acessa a Home.
2. Visualiza o catálogo.
3. Consulta informações dos cafés.
4. Seleciona a quantidade desejada.

### Fluxo 02 — Adição ao carrinho

1. Usuário escolhe um produto.
2. Define a quantidade.
3. Clica no botão de adicionar.
4. O carrinho é atualizado.
5. O contador do Header é atualizado.

### Fluxo 03 — Gerenciamento

1. Usuário acessa o Checkout.
2. Visualiza os produtos.
3. Aumenta, diminui ou remove quantidades.
4. O resumo financeiro é recalculado.

### Fluxo 04 — Preenchimento do endereço

1. Usuário informa o CEP.
2. A aplicação consulta a API pública.
3. Os campos disponíveis são preenchidos.
4. Usuário informa o número.
5. Preenche complemento, se necessário.
6. Corrige outros dados, caso necessário.

### Fluxo 05 — Confirmação do pedido

1. Usuário seleciona a forma de pagamento.
2. Verifica o resumo financeiro.
3. Clica em confirmar.
4. O sistema valida o pedido.
5. Um snapshot do pedido é criado.
6. O carrinho é limpo.
7. O usuário é direcionado à página de sucesso.

### Fluxo 06 — Alternância de tema

1. Usuário aciona o controle de tema.
2. A aplicação alterna entre claro e escuro.
3. A preferência é salva.
4. O tema permanece após atualização da página.

---

## 9. Requisitos não funcionais

### RNF-01 — Responsividade

A aplicação deverá adaptar-se a larguras aproximadas de:

- 320px.
- 375px.
- 390px.
- 768px.
- 1280px.
- 1440px.

### RNF-02 — Acessibilidade

Utilizar WCAG 2.2 AA como referência.

Requisitos:

- Navegação por teclado.
- Foco visível.
- Labels em formulários.
- Mensagens de erro perceptíveis.
- Contraste adequado.
- Controles acessíveis.
- Textos legíveis.

### RNF-03 — Desempenho

A aplicação deverá:

- Evitar renderizações desnecessárias.
- Utilizar imagens otimizadas.
- Manter o carregamento adequado.
- Evitar dependências desnecessárias.

### RNF-04 — Compatibilidade

A aplicação deverá funcionar nas versões atuais dos principais navegadores modernos.

### RNF-05 — Persistência

O carrinho e a preferência de tema deverão permanecer após refresh.

### RNF-06 — Manutenibilidade

O código deverá:

- Utilizar componentes reutilizáveis.
- Possuir tipagem.
- Separar responsabilidades.
- Evitar mutação direta do estado.
- Manter documentação atualizada.

### RNF-07 — Qualidade

Realizar testes de lógica, validação e fluxo.

Não considerar uma funcionalidade concluída sem verificação.

---

## 10. Catálogo de produtos

O catálogo inicial utilizará os 14 cafés apresentados no Figma:

1. Expresso Tradicional.
2. Expresso Americano.
3. Expresso Cremoso.
4. Expresso Gelado.
5. Café com Leite.
6. Latte.
7. Capuccino.
8. Macchiato.
9. Mocaccino.
10. Chocolate Quente.
11. Cubano.
12. Havaiano.
13. Árabe.
14. Irlandês.

As imagens deverão ser carregadas dos arquivos originais fornecidos para o projeto.

Diretório previsto:

`src/assets/coffees/`

Os nomes, descrições, preços e tags deverão seguir o Figma sempre que puderem ser confirmados.

Não inventar dados afirmando que foram extraídos do protótipo.

---

## 11. Identidade visual

### 11.1 Tipografia

Utilizar:

- Baloo 2 para títulos.
- Roboto para textos e controles.

### 11.2 Ícones

Utilizar Phosphor Icons, conforme o Style Guide.

### 11.3 Paleta

A identidade visual de referência utiliza amarelo, roxo e cores neutras.

Os tokens exatos deverão ser documentados no TECH_SPEC.md após validação do Style Guide.

### 11.4 Branding com IA

A identidade visual final deverá incluir:

- Conceito da marca.
- Logo original.
- Versão para fundo claro.
- Versão para fundo escuro.
- Favicon.
- Registro da ferramenta de IA.
- Prompt utilizado.
- Justificativa visual.

---

## 12. Critérios gerais de aceite

O projeto será considerado funcional quando:

- A Home exibir corretamente os cafés.
- As quantidades puderem ser alteradas.
- O carrinho acumular produtos repetidos.
- O contador representar o total de unidades.
- O carrinho persistir após refresh.
- O Checkout validar os campos.
- A API pública de CEP funcionar.
- A forma de pagamento for obrigatória.
- Os cálculos financeiros estiverem corretos.
- Pedidos inválidos forem impedidos.
- A confirmação apresentar o pedido correto.
- O carrinho for limpo após a confirmação.
- O modo escuro funcionar em todas as telas.
- O layout funcionar em dispositivos móveis.
- A logo original estiver implementada.
- A aplicação possuir documentação e testes.

---

## 13. Entregáveis

A entrega final deverá conter:

1. Repositório GitHub público.
2. Aplicação publicada.
3. Código-fonte React e TypeScript.
4. README atualizado.
5. AGENTS.md.
6. PRD_SPEC.md.
7. TECH_SPEC.md.
8. TASKS_SPEC.md.
9. Registro de pelo menos três interações com IA.
10. Evidências de testes.
11. Screenshots desktop e mobile.
12. Screenshots de Home, Checkout, Sucesso e Dark Mode.
13. Breve demonstração do fluxo de compra.

---

## 14. Decisões de produto

| ID    | Decisão                                          | Status   |
| ----- | ------------------------------------------------ | -------- |
| DP-01 | Utilizar React + TypeScript + Vite 8             | Definida |
| DP-02 | Utilizar catálogo local                          | Definida |
| DP-03 | Utilizar carrinho persistido no localStorage     | Definida |
| DP-04 | Utilizar ViaCEP como opção de API pública        | Proposta |
| DP-05 | Utilizar frete fictício de R$ 3,50               | Proposta |
| DP-06 | Remover item ao reduzir a quantidade para zero   | Proposta |
| DP-07 | Utilizar imagens SVG fornecidas pelo responsável | Definida |
| DP-08 | Implementar tema claro e escuro                  | Definida |
| DP-09 | Criar marca original com IA                      | Pendente |
| DP-10 | Não implementar backend nem pagamento real       | Definida |

As decisões propostas deverão ser confirmadas ou revisadas antes da implementação correspondente.

---

## 15. Controle de alterações

| Versão | Alteração                                                              | Status       |
| ------ | ---------------------------------------------------------------------- | ------------ |
| 1.0    | Criação inicial do PRD com os requisitos RF-01 a RF-16 e RN-01 a RN-10 | Planejamento |

Este documento deve ser atualizado sempre que houver uma mudança nos requisitos, regras de negócio, fluxos ou decisões de produto.

Nenhum requisito obrigatório poderá ser removido sem autorização expressa.
