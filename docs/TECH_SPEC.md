# TECH_SPEC.md — Coffee Delivery

**Projeto:** Coffee Delivery  
**Disciplina:** Single Page Application (SPA)  
**Versão:** 1.0  
**Status:** Planejamento técnico  
**Repositório:** https://github.com/wanessags/CoffeDelivery

---

## 1. Objetivo

Este documento define a arquitetura, tecnologias, organização de arquivos, tipos, gerenciamento de estado, regras de persistência, validações, estilização e testes da aplicação Coffee Delivery.

A implementação deve atender aos requisitos descritos em `PRD_SPEC.md` e seguir as diretrizes estabelecidas em `AGENTS.md`.

O sistema será uma Single Page Application desenvolvida com React, TypeScript e Vite 8, sem backend próprio.

O desenvolvimento será realizado em etapas pequenas e verificáveis, registradas em `TASKS_SPEC.md`.

---

## 2. Tecnologias utilizadas

| Tecnologia            | Finalidade                          |
| --------------------- | ----------------------------------- |
| React                 | Construção da interface             |
| TypeScript            | Tipagem estática                    |
| Vite 8                | Ambiente de desenvolvimento e build |
| React Router          | Navegação SPA                       |
| Context API           | Compartilhamento de estado          |
| useReducer            | Gerenciamento do carrinho           |
| useState              | Estados locais                      |
| useEffect             | Efeitos e sincronização             |
| localStorage          | Persistência local                  |
| React Hook Form       | Gerenciamento do formulário         |
| Zod                   | Validação dos dados                 |
| @hookform/resolvers   | Integração entre formulário e Zod   |
| styled-components     | Estilização e temas                 |
| Phosphor Icons        | Ícones da interface                 |
| ViaCEP                | Consulta pública de endereço        |
| Vitest                | Testes unitários                    |
| React Testing Library | Testes de componentes               |
| Playwright            | Testes end-to-end                   |
| ESLint                | Análise estática do código          |
| Git e GitHub          | Versionamento                       |

As bibliotecas de teste deverão ser instaladas na etapa de configuração dos testes.

As versões exatas das dependências serão registradas no `package.json` e no `package-lock.json`.

---

## 3. Arquitetura geral

A aplicação seguirá uma arquitetura frontend modular, baseada em componentes reutilizáveis e separação de responsabilidades.

Fluxo geral:

```text
Usuário
   |
   v
Interface React
   |
   +-- Home
   |     |
   |     +-- Catálogo
   |     +-- Cards de café
   |     +-- Controles de quantidade
   |
   +-- Checkout
   |     |
   |     +-- Endereço
   |     +-- Consulta ViaCEP
   |     +-- Pagamento
   |     +-- Carrinho
   |     +-- Resumo financeiro
   |
   +-- Success
         |
         +-- Pedido confirmado
         +-- Endereço
         +-- Forma de pagamento

Estado compartilhado:
Context API + useReducer

Persistência:
localStorage
```

O frontend será responsável pela apresentação e pelo fluxo de compra fictícia.

Não haverá servidor próprio, autenticação ou processamento financeiro.

---

## 4. Estrutura de diretórios

Estrutura planejada:

```text
coffee-delivery/
|
|-- public/
|   |-- favicon.svg
|
|-- src/
|   |-- assets/
|   |   |-- coffees/
|   |   |-- branding/
|   |
|   |-- components/
|   |   |-- Header/
|   |   |-- ThemeToggle/
|   |   |-- CoffeeCard/
|   |   |-- CoffeeCatalog/
|   |   |-- QuantityInput/
|   |   |-- CartBadge/
|   |   |-- CartItem/
|   |   |-- CartSummary/
|   |   |-- DeliveryAddressForm/
|   |   |-- PaymentMethodSelector/
|   |   |-- EmptyCart/
|   |   |-- PageLayout/
|   |
|   |-- contexts/
|   |   |-- CartContext.tsx
|   |   |-- ThemeContext.tsx
|   |
|   |-- reducers/
|   |   |-- cartReducer.ts
|   |
|   |-- hooks/
|   |   |-- useCart.ts
|   |   |-- useTheme.ts
|   |   |-- useLocalStorage.ts
|   |
|   |-- pages/
|   |   |-- Home/
|   |   |-- Checkout/
|   |   |-- Success/
|   |   |-- NotFound/
|   |
|   |-- data/
|   |   |-- coffees.ts
|   |
|   |-- types/
|   |   |-- coffee.ts
|   |   |-- cart.ts
|   |   |-- address.ts
|   |   |-- order.ts
|   |
|   |-- schemas/
|   |   |-- checkoutSchema.ts
|   |
|   |-- styles/
|   |   |-- themes.ts
|   |   |-- GlobalStyles.ts
|   |   |-- styled.d.ts
|   |
|   |-- utils/
|   |   |-- formatCurrency.ts
|   |   |-- calculateCart.ts
|   |   |-- cep.ts
|   |
|   |-- tests/
|   |
|   |-- App.tsx
|   |-- main.tsx
|
|-- docs/
|   |-- PRD_SPEC.md
|   |-- TECH_SPEC.md
|   |-- TASKS_SPEC.md
|   |-- AI_USAGE.md
|
|-- AGENTS.md
|-- README.md
|-- package.json
|-- vite.config.ts
```

A estrutura poderá ser ajustada quando necessário.

Cada alteração arquitetural deverá ser registrada neste documento.

Não criar arquivos ou componentes sem uma responsabilidade definida.

---

## 5. Organização das páginas

### 5.1 Home

Rota:

`/`

Responsabilidades:

- Apresentar a cafeteria.
- Exibir o catálogo.
- Mostrar informações dos cafés.
- Permitir selecionar quantidades.
- Adicionar produtos ao carrinho.
- Atualizar o contador do Header.

Requisitos relacionados:

RF-01, RF-02, RF-03 e RF-04.

### 5.2 Checkout

Rota:

`/checkout`

Responsabilidades:

- Exibir produtos selecionados.
- Permitir editar quantidades.
- Permitir remover itens.
- Mostrar formulário de entrega.
- Consultar o CEP.
- Selecionar pagamento.
- Calcular os valores.
- Validar e confirmar o pedido.

Requisitos relacionados:

RF-05, RF-08, RF-09, RF-10 e RF-11.

### 5.3 Success

Rota:

`/success`

Responsabilidades:

- Exibir confirmação do pedido.
- Mostrar endereço.
- Mostrar forma de pagamento.
- Utilizar o snapshot do pedido confirmado.
- Exibir estado apropriado quando não existir pedido válido.

Requisitos relacionados:

RF-12 e RF-13.

### 5.4 NotFound

Responsabilidade:

- Exibir mensagem para rotas inexistentes.
- Permitir retornar à Home.

A página NotFound é uma decisão técnica de navegação e não substitui qualquer rota obrigatória.

---

## 6. Modelagem de dados

Utilizar TypeScript com interfaces e tipos explícitos.

Não utilizar `any` para contornar problemas de tipagem.

### 6.1 Coffee

Representa um produto do catálogo.

```typescript
export interface Coffee {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  image: string;
  tags: string[];
}
```

Regras:

- `id` deve ser único.
- `name` é obrigatório.
- `priceInCents` deve ser inteiro e não negativo.
- `image` deve apontar para um asset válido.
- `tags` representa as categorias do produto.

### 6.2 CartItem

Representa um produto adicionado ao carrinho.

```typescript
export interface CartItem {
  coffeeId: string;
  quantity: number;
}
```

O carrinho utilizará o identificador do produto como referência ao catálogo.

Preço, nome e imagem serão obtidos do catálogo validado.

Essa abordagem evita duplicação desnecessária de informações no estado persistido.

### 6.3 DeliveryAddress

Representa o endereço informado no Checkout.

```typescript
export interface DeliveryAddress {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}
```

O complemento é opcional.

Número, CEP e demais campos obrigatórios devem ser validados.

### 6.4 PaymentMethod

```typescript
export type PaymentMethod = "credit" | "debit" | "cash";
```

Os valores representam:

- `credit`: cartão de crédito.
- `debit`: cartão de débito.
- `cash`: dinheiro.

### 6.5 OrderItem

Representa um item registrado no pedido concluído.

```typescript
export interface OrderItem {
  coffeeId: string;
  name: string;
  unitPriceInCents: number;
  quantity: number;
}
```

O snapshot guarda os dados necessários para representar corretamente a compra, independentemente de mudanças posteriores no catálogo.

### 6.6 Order

```typescript
export interface Order {
  id: string;
  items: OrderItem[];
  address: DeliveryAddress;
  paymentMethod: PaymentMethod;
  subtotalInCents: number;
  deliveryFeeInCents: number;
  totalInCents: number;
  createdAt: string;
}
```

O pedido deverá ser criado somente após a validação do carrinho, endereço e pagamento.

---

## 7. Catálogo de cafés

O catálogo ficará inicialmente em:

`src/data/coffees.ts`

Será um array tipado de produtos.

O catálogo deverá conter os 14 cafés apresentados no Figma:

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

As imagens serão importadas de:

`src/assets/coffees/`

Preferir os arquivos SVG fornecidos pelo responsável pelo projeto.

Não utilizar imagens externas quando houver assets originais disponíveis.

Os dados comerciais deverão seguir o protótipo quando estiverem disponíveis.

Não afirmar que valores aproximados foram extraídos diretamente do Figma.

**Referência utilizada na T06:** os 14 PNGs e os SVGs do banner foram obtidos da [referência educacional da Rocketseat](https://github.com/rocketseat-education/ignite-challenge-solution-reactjs-coffee-delivery/tree/main/public/images). Cada foto teve uma correspondência visual distinta na folha de contato gerada com o ZIP fornecido. Como o ZIP e o SVG da Home não continuaram disponíveis, isso confirma a correspondência visual, não a identidade byte a byte com os anexos. O preço unitário de demonstração de R$ 9,90 segue o catálogo da referência educacional.

O banner e os cards são renderizados com HTML, CSS e imagens locais. O layout usa uma, duas, três ou quatro colunas conforme a largura. A identidade original do projeto continua separada dos arquivos do protótipo.

---

## 8. Gerenciamento de estado

O carrinho deverá utilizar:

- Context API.
- useReducer.
- Custom Hook `useCart`.

### 8.1 Estado

```typescript
export interface CartState {
  items: CartItem[];
}
```

### 8.2 Ações

```typescript
export type CartAction =
  | {
      type: "ADD_ITEM";
      payload: CartItem;
    }
  | {
      type: "INCREMENT_ITEM";
      payload: { coffeeId: string };
    }
  | {
      type: "DECREMENT_ITEM";
      payload: { coffeeId: string };
    }
  | {
      type: "REMOVE_ITEM";
      payload: { coffeeId: string };
    }
  | {
      type: "CLEAR_CART";
    };
```

### 8.3 Regras do reducer

O reducer deverá:

- Ser uma função pura.
- Não acessar diretamente o localStorage.
- Não modificar o estado recebido.
- Utilizar operações imutáveis.
- Acumular quantidades de produtos repetidos.
- Impedir quantidades inválidas.
- Remover um item quando a redução chegar a zero.
- Manter identificadores de produtos únicos.

A validação do produto existente deverá ocorrer antes da operação de inclusão, ou por meio de dados de catálogo validados disponíveis à camada de domínio.

### 8.4 Context API

O contexto deverá disponibilizar:

- Itens do carrinho.
- Adição de produtos.
- Incremento de quantidade.
- Decremento de quantidade.
- Remoção.
- Limpeza.
- Quantidade total de unidades.
- Subtotal.

O contexto não deverá concentrar regras de formulário ou renderização de páginas.

---

## 9. Persistência com localStorage

Requisito relacionado:

RF-06.

Chave proposta:

`coffee-delivery:cart`

Fluxo:

1. Inicializar o estado a partir do localStorage.
2. Validar a estrutura recuperada.
3. Descartar itens inválidos.
4. Ignorar produtos inexistentes no catálogo.
5. Salvar alterações válidas no localStorage.

Utilizar tratamento de exceções para situações nas quais o armazenamento esteja indisponível ou bloqueado.

Não executar operações de armazenamento dentro do reducer.

O carrinho deverá permanecer funcional em memória mesmo se o localStorage falhar.

---

## 10. Cálculos financeiros

Requisitos relacionados:

RF-10, RN-03 e RN-04.

### 10.1 Subtotal

```text
subtotal = soma(preço em centavos × quantidade)
```

### 10.2 Entrega

Decisão de produto proposta no PRD:

Taxa fixa fictícia de R$ 3,50.

```typescript
export const DELIVERY_FEE_IN_CENTS = 350;
```

A constante deverá ficar centralizada.

Quando o carrinho estiver vazio, não deverá existir cobrança de entrega.

### 10.3 Total

```text
total = subtotal + entrega
```

### 10.4 Formatação

Utilizar `Intl.NumberFormat`:

```typescript
const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
```

Converter centavos para reais apenas na apresentação.

Evitar operações monetárias baseadas em números decimais quando não forem necessárias.

---

## 11. Formulário de Checkout

Utilizar:

- React Hook Form.
- Zod.
- @hookform/resolvers.

### 11.1 Campos

Campos obrigatórios:

- CEP.
- Rua.
- Número.
- Bairro.
- Cidade.
- UF.
- Forma de pagamento.

Campo opcional:

- Complemento.

### 11.2 Validação

O schema deverá verificar:

- CEP com oito dígitos.
- Rua não vazia.
- Número informado.
- Bairro não vazio.
- Cidade não vazia.
- UF válida.
- Método de pagamento permitido.

O CEP poderá ser apresentado com máscara `00000-000`, mas a consulta deverá utilizar os oito dígitos.

### 11.3 Mensagens

As mensagens deverão ser claras e acessíveis.

Exemplos:

- Informe um CEP válido.
- Informe o número do endereço.
- Selecione uma forma de pagamento.
- Não foi possível consultar o CEP.
- CEP não encontrado.

Os erros deverão estar associados aos respectivos campos.

O formulário não poderá confirmar um pedido inválido.

---

## 12. Integração com ViaCEP

Requisito relacionado:

RF-08.

Endpoint previsto:

`https://viacep.com.br/ws/{cep}/json/`

O CEP deverá ser validado antes da consulta.

### 12.1 Fluxo de consulta

1. Usuário informa oito dígitos.
2. Sistema valida o formato.
3. Sistema inicia consulta.
4. Interface apresenta carregamento.
5. Sistema processa a resposta.
6. Campos disponíveis são preenchidos.
7. Usuário completa ou corrige o endereço.

### 12.2 Tratamento de falhas

Tratar:

- CEP incompleto.
- CEP inválido.
- CEP não encontrado.
- Falha de conexão.
- Resposta inesperada.
- Indisponibilidade da API.
- Respostas antigas chegando após uma consulta mais recente.

O sistema deverá permitir nova tentativa.

Não apagar número e complemento ao atualizar os campos retornados pela API.

Na T10, o formulário consulta o ViaCEP ao completar oito dígitos, permite tentar novamente e cancela a consulta anterior quando o CEP muda. Número e complemento nunca são preenchidos pela API. Se a pessoa editar um campo durante a consulta, a resposta não sobrescreve essa edição. O schema do endereço valida a UF contra as 27 siglas oficiais.

### 12.3 Segurança

Não enviar informações de pagamento para a API de CEP.

Não armazenar informações sensíveis desnecessárias.

O projeto utiliza apenas métodos de pagamento fictícios.

---

## 13. Confirmação do pedido

Requisitos relacionados:

RF-12 e RF-13.

### 13.1 Fluxo

1. Validar endereço.
2. Validar forma de pagamento.
3. Validar itens.
4. Calcular valores.
5. Criar um snapshot do pedido.
6. Preservar o pedido confirmado.
7. Limpar o carrinho.
8. Navegar para `/success`.

A ordem deverá garantir que a limpeza do carrinho não elimine os dados exibidos na confirmação.

### 13.2 Persistência do pedido concluído

Decisão técnica inicial:

Utilizar `sessionStorage` para preservar o último pedido confirmado durante a sessão, inclusive após atualização da página.

Chave proposta:

`coffee-delivery:last-order`

Se o armazenamento estiver indisponível, manter o pedido em memória enquanto a aplicação estiver ativa.

O uso de `sessionStorage` é uma decisão de implementação proposta, não uma exigência literal do enunciado.

### 13.3 Estado vazio

Se não houver pedido válido, a página deverá apresentar uma mensagem apropriada e permitir o retorno à Home.

Não exibir dados fictícios de um pedido inexistente.

O componente `OrderSuccess` recebe o snapshot por propriedade e apresenta endereço, pagamento e previsão fictícia de 20 a 30 minutos. A arte fornecida foi importada como PNG decorativo, sem texto embutido, e o layout passa de uma para duas colunas em telas maiores. A criação do snapshot pelo checkout continua pendente.

---

## 14. Tema claro e escuro

Requisito relacionado:

RF-14.

Utilizar `styled-components` e `ThemeProvider`.

### 14.1 Estratégia

Criar dois temas:

- Light.
- Dark.

Ambos deverão utilizar os mesmos nomes de tokens semânticos.

### 14.2 Tokens previstos

- background.
- surface.
- surfaceSecondary.
- text.
- textSecondary.
- primary.
- primaryHover.
- secondary.
- border.
- focus.
- error.
- success.
- disabled.

As cores específicas deverão ser confirmadas com o Style Guide e registradas neste documento.

### 14.3 Persistência

Chave proposta:

`coffee-delivery:theme`

Comportamento:

1. Verificar preferência salva.
2. Se houver preferência válida, aplicá-la.
3. Se não houver, consultar `prefers-color-scheme`.
4. Permitir alternância manual.
5. Persistir a escolha.

Tratar exceções de leitura e escrita no localStorage.

### 14.4 Componentes afetados

O tema deverá funcionar em:

- Header.
- Home.
- Cards.
- Controles de quantidade.
- Checkout.
- Formulários.
- Métodos de pagamento.
- Resumo do pedido.
- Botões.
- Mensagens de erro.
- Success.

Não implementar o dark mode apenas mudando o fundo da página.

---

## 15. Identidade visual

O Figma será utilizado como referência visual.

Os frames de referência do enunciado são Home (`2:1550`), Checkout (`217:511`) e Confirmação (`222:824`). A consulta direta ao Figma não retornou conteúdo suficiente para inspecionar os frames, mas os exports desktop fornecidos de Checkout preenchido e Confirmação foram analisados. Ambos possuem `viewBox="0 0 1440 1013"`; essas dimensões descrevem os exports, não o tamanho fixo da aplicação. A Home e o Style Guide não foram confirmados por esses arquivos.

- **Checkout:** endereço e pagamento na coluna principal; cafés selecionados, subtotal, entrega, total e botão de confirmação na coluna lateral. Em telas pequenas, organizar em uma coluna. Usar controles reais e labels associados, mesmo que o exemplo visual use texto dentro dos campos.
- **Confirmação:** título e mensagem de sucesso acima do painel com endereço, previsão e pagamento; ilustração decorativa ao lado no desktop. Exibir dados do snapshot em HTML e adaptar o painel e a ilustração para mobile.
- **Assets:** o SVG do Checkout contém duas imagens de cafés incorporadas. Elas não constituem um catálogo completo. As telas exportadas servem como referência, não como substitutas da interface ou como evidência de execução do projeto. A logo do exemplo não substitui a marca original com IA.

Link:

https://www.figma.com/design/yGPNTA0Yczb183EikXGIiA/Coffee-Delivery-%E2%80%A2-Projeto-Final-React?node-id=2-1297

### 15.1 Tipografia

Fontes definidas pelo Style Guide:

- Baloo 2.
- Roboto.

Baloo 2 será utilizada principalmente em títulos.

Roboto será utilizada principalmente em textos, campos e botões.

### 15.2 Cores

A referência utiliza:

- Amarelo.
- Roxo.
- Tons neutros.

As cores exatas serão documentadas após confirmação dos valores no Style Guide.

### 15.3 Ícones

Utilizar Phosphor Icons.

Biblioteca:

`@phosphor-icons/react`

### 15.4 Logo

Criar pelo menos uma proposta original com uma ferramenta de geração de imagem ou identidade visual por IA.

A marca deverá possuir:

- Versão para fundo claro.
- Versão para fundo escuro.
- Favicon.
- Documentação do processo criativo.

A ferramenta, o prompt, o resultado e a justificativa da escolha deverão ser registrados no README ou na documentação de branding. Verificar a legibilidade em tamanho reduzido e os direitos de uso.

A prévia local usa temporariamente o PNG do protótipo enviado pela responsável, com suporte claro atrás da imagem no modo escuro. Esse PNG não comprova o RF-16 e não substitui uma marca original na entrega.

---

## 16. Responsividade

Requisito relacionado:

RF-15.

Utilizar abordagem mobile first.

Larguras de referência:

| Dispositivo      | Largura |
| ---------------- | ------- |
| Celular compacto | 320px   |
| Celular          | 375px   |
| Celular          | 390px   |
| Tablet           | 768px   |
| Desktop          | 1280px  |
| Desktop amplo    | 1440px  |

### 16.1 Home

- Adaptar o Header.
- Reorganizar o banner.
- Ajustar o grid de produtos.
- Preservar a legibilidade dos cards.
- Evitar cortes e deformações nas imagens.

### 16.2 Checkout

- Organizar formulário e resumo em coluna no celular.
- Adaptar campos.
- Manter botões de pagamento acessíveis.
- Evitar rolagem horizontal.
- Manter o botão de confirmação utilizável.

### 16.3 Success

- Adaptar texto e ilustração.
- Evitar sobreposição de conteúdo.
- Preservar as informações do pedido.

---

## 17. Acessibilidade

Utilizar WCAG 2.2 AA como referência.

Requisitos:

- Navegação por teclado.
- Foco visível.
- Labels associados aos inputs.
- Contraste adequado.
- Textos alternativos.
- Mensagens de erro acessíveis.
- Feedback perceptível.
- Botões com nomes acessíveis.
- Controles com áreas de toque adequadas.
- Estrutura semântica.
- Respeito à preferência de movimento reduzido.

As imagens decorativas deverão utilizar texto alternativo vazio quando apropriado.

Os botões de adicionar, aumentar, diminuir e remover produtos deverão possuir nomes acessíveis que identifiquem suas ações.

O seletor de pagamento deverá funcionar com teclado e tecnologias assistivas.

---

## 18. Estratégia de testes

Os testes deverão verificar regras de negócio e fluxos principais.

### 18.1 Ferramentas previstas

- Vitest.
- React Testing Library.
- Playwright.

As ferramentas serão configuradas nas respectivas tarefas do plano de implementação.

### 18.2 Testes de carrinho

| ID    | Cenário                         |
| ----- | ------------------------------- |
| CT-01 | Adicionar um produto            |
| CT-02 | Adicionar produto repetido      |
| CT-03 | Incrementar quantidade          |
| CT-04 | Decrementar quantidade          |
| CT-05 | Remover produto                 |
| CT-06 | Impedir quantidade inválida     |
| CT-07 | Somar unidades do Header        |
| CT-08 | Recuperar carrinho após refresh |

### 18.3 Testes financeiros

| ID    | Cenário                     |
| ----- | --------------------------- |
| CT-09 | Calcular subtotal           |
| CT-10 | Aplicar taxa de entrega     |
| CT-11 | Calcular total              |
| CT-12 | Formatador BRL              |
| CT-13 | Carrinho vazio sem cobrança |

### 18.4 Testes do Checkout

| ID    | Cenário                      |
| ----- | ---------------------------- |
| CT-14 | CEP válido                   |
| CT-15 | CEP inválido                 |
| CT-16 | CEP não encontrado           |
| CT-17 | Falha na consulta            |
| CT-18 | Validação de número          |
| CT-19 | Complemento opcional         |
| CT-20 | Pagamento obrigatório        |
| CT-21 | Bloquear carrinho vazio      |
| CT-22 | Bloquear formulário inválido |

### 18.5 Testes de confirmação

| ID    | Cenário                      |
| ----- | ---------------------------- |
| CT-23 | Criar pedido válido          |
| CT-24 | Preservar snapshot           |
| CT-25 | Limpar carrinho              |
| CT-26 | Apresentar endereço correto  |
| CT-27 | Apresentar pagamento correto |
| CT-28 | Tratar ausência de pedido    |

### 18.6 Testes de interface

| ID    | Cenário               |
| ----- | --------------------- |
| CT-29 | Navegação SPA         |
| CT-30 | Alternância de tema   |
| CT-31 | Persistência de tema  |
| CT-32 | Layout mobile         |
| CT-33 | Navegação por teclado |
| CT-34 | Exibição dos assets   |

Os testes deverão ser implementados progressivamente.

Não afirmar que um teste passou sem executá-lo.

---

## 19. Scripts e validação

Scripts iniciais esperados no projeto Vite:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

Após configurar o Vitest, adicionar um script para execução dos testes.

Exemplo planejado:

```bash
npm run test
```

Antes de encerrar uma tarefa, executar os comandos aplicáveis e registrar os resultados.

Os testes de interface poderão ser complementados com Playwright.

Não considerar uma compilação bem-sucedida como prova de que todos os fluxos funcionam.

---

## 20. Segurança e boas práticas

- Não armazenar credenciais reais.
- Não criar pagamentos reais.
- Não expor informações privadas.
- Validar entradas do usuário.
- Tratar erros de APIs externas.
- Evitar dependências desnecessárias.
- Não utilizar `any` como solução de tipagem.
- Não modificar diretamente o estado React.
- Não acessar localStorage diretamente em reducers.
- Não armazenar informações sensíveis desnecessárias.
- Não versionar arquivos `.env` contendo segredos.

A aplicação é acadêmica e simula operações de compra.

---

## 21. Versionamento

Repositório:

https://github.com/wanessags/CoffeDelivery

Branch principal:

`main`

Padrão de commits:

- `feat:` funcionalidades.
- `fix:` correções.
- `docs:` documentação.
- `style:` interface.
- `refactor:` reorganização.
- `test:` testes.
- `chore:` manutenção.

Cada tarefa deverá ser implementada, validada e documentada antes do respectivo commit.

Não utilizar `git push --force`.

---

## 22. Documentação e uso de IA

Os documentos obrigatórios são:

- `AGENTS.md`.
- `docs/PRD_SPEC.md`.
- `docs/TECH_SPEC.md`.
- `docs/TASKS_SPEC.md`.
- `README.md`.

Registrar pelo menos três interações relevantes com IA.

Arquivo sugerido:

`docs/AI_USAGE.md`

Cada registro deverá conter:

- Prompt.
- Objetivo.
- Resumo da resposta.
- Decisão tomada.
- Evidência.

O uso de IA deverá ser documentado de forma transparente, incluindo limitações e decisões que precisaram de revisão humana.

---

## 23. Implantação

A aplicação deverá ser publicada em uma plataforma de hospedagem frontend.

Opções previstas:

- Vercel.
- Netlify.

A implantação deverá:

- Compilar a aplicação.
- Disponibilizar a Home.
- Permitir navegação entre rotas.
- Suportar refresh em rotas internas por configuração de fallback SPA.
- Carregar os assets.
- Manter os fluxos funcionando.
- Não expor segredos.

O link final deverá ser incluído no README.

---

## 24. Rastreabilidade de requisitos

| Requisito | Implementação principal          |
| --------- | -------------------------------- |
| RF-01     | CoffeeCatalog e CoffeeCard       |
| RF-02     | QuantityInput                    |
| RF-03     | CartContext e cartReducer        |
| RF-04     | CartBadge                        |
| RF-05     | CartItem e cartReducer           |
| RF-06     | CartContext e localStorage       |
| RF-07     | React Router                     |
| RF-08     | DeliveryAddressForm e ViaCEP     |
| RF-09     | PaymentMethodSelector            |
| RF-10     | calculateCart e CartSummary      |
| RF-11     | Zod e regras de confirmação      |
| RF-12     | Success e Order                  |
| RF-13     | Snapshot e CLEAR_CART            |
| RF-14     | ThemeContext e styled-components |
| RF-15     | Layout responsivo                |
| RF-16     | Branding, logo e favicon         |

As regras RN-01 a RN-10 do PRD também deverão ser verificadas durante a implementação e os testes.

---

## 25. Decisões técnicas pendentes

| ID    | Decisão                           | Status    |
| ----- | --------------------------------- | --------- |
| DT-01 | React + TypeScript + Vite 8       | Definida  |
| DT-02 | React Router                      | Definida  |
| DT-03 | Context API + useReducer          | Definida  |
| DT-04 | styled-components                 | Definida  |
| DT-05 | React Hook Form + Zod             | Definida  |
| DT-06 | ViaCEP                            | Proposta  |
| DT-07 | Taxa de entrega de R$ 3,50        | Proposta  |
| DT-08 | sessionStorage para último pedido | Proposta  |
| DT-09 | Vitest + Testing Library          | Planejada |
| DT-10 | Playwright                        | Planejada |
| DT-11 | Identidade visual autoral         | Pendente  |
| DT-12 | Tokens exatos do Figma            | Pendente  |
| DT-13 | Plataforma de deploy              | Pendente  |

As propostas deverão ser confirmadas ou ajustadas antes da implementação correspondente.

---

## 26. Definição de pronto

Uma tarefa será considerada concluída quando:

1. Os requisitos associados forem atendidos.
2. A implementação estiver funcional.
3. Os testes aplicáveis forem executados.
4. O build não apresentar erros impeditivos.
5. A documentação estiver atualizada.
6. As decisões técnicas estiverem registradas.
7. O código estiver revisado.
8. O commit estiver preparado ou realizado.

Não marcar tarefas como concluídas sem evidências.

---

## 27. Histórico de alterações

| Versão | Descrição                                                                             | Status       |
| ------ | ------------------------------------------------------------------------------------- | ------------ |
| 1.0    | Definição inicial da arquitetura técnica, tipos, estado, persistência, temas e testes | Planejamento |

Este documento deverá permanecer atualizado durante todo o desenvolvimento do Coffee Delivery.
