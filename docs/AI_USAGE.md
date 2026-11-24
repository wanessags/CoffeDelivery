# Uso de IA — Coffee Delivery

## Conferência do enunciado

- **Prompt:** “SEGUE ISSO DO NOTIOM TB”, acompanhado do PDF da atividade.
- **Objetivo:** conferir os critérios oficiais e ajustar o planejamento.
- **Resposta e decisão:** usar o PDF como referência de aceite e explicitar os frames do Figma, a exigência de geração visual do logo e as evidências de entrega. Não marcar critérios como concluídos sem validação.
- **Evidência:** alterações em `PRD_SPEC.md`, `TECH_SPEC.md` e `TASKS_SPEC.md`.

## Tentativa de geração visual da marca

- **Ferramenta:** gerador de imagens do OpenCode (`opencode/grok-imagine-image-2.0`).
- **Prompt para a versão clara:** “Original flat vector logo icon for a fictional Brazilian coffee delivery brand. A minimal stylized takeaway coffee cup with a small bean and a curved steam/delivery swoosh, cheerful and premium. Palette: warm coffee brown, golden yellow and purple. Solid deep purple circular badge background, centered composition, thick clean shapes, no gradients, no text, no letters, no words, no mockup, no photorealism. Square 1:1, designed to stay legible at 32px.”
- **Objetivo:** criar uma marca original legível em tamanho reduzido, com versões para fundos claros e escuros.
- **Resultado e decisão:** as duas tentativas falharam por credencial inválida. Os SVGs preparados pelo assistente são rascunhos; nenhum resultado de geração visual foi obtido.
- **Evidência:** retorno `Invalid credential` do gerador e ressalva registrada em `TASKS_SPEC.md`.

## Análise das referências visuais

- **Entrada fornecida na conversa:** exports `Coffee Delivery - Checkout Filled.svg` e `Coffee Delivery - Success.svg`, além da imagem do Checkout.
- **Objetivo:** transformar os exemplos do Figma em orientações verificáveis para os componentes.
- **Resposta e decisão:** conferida a divisão do Checkout em formulário e resumo e a composição da Confirmação com painel e ilustração. Manter campos interativos, dados dinâmicos e marca própria, sem usar os exports como telas prontas.
- **Evidência:** análise registrada em `TECH_SPEC.md` e `TASKS_SPEC.md`; o SVG da Confirmação foi renderizado localmente para conferência.

## Proposta de marca autoral em SVG

- **Ferramentas:** gerador visual do OpenCode (`opencode/grok-imagine-image-2.0`) e assistente OpenCode para desenhar o SVG como código.
- **Prompt visual:** “Design ONE original logo symbol for a Brazilian academic coffee delivery web app named Coffee Delivery. Just the symbol, absolutely no text, no numbers, no typography. A minimal flat vector-style mark that fuses a tilted porcelain coffee cup viewed from the side and a single coffee bean as the cup's visible interior, with a simple two-stroke steam curl bending forward like a small route. No rocket, no takeout tumbler, no wings, no location pin, no arrows, no imitation of existing coffee brands. Make it legible as a 16px favicon: thick shapes, clear negative space, no detail, no shadows, gradients, texture, thin strokes, or outlines. Put it in a flat deep violet softly rounded square tile (dark violet #4B2995) with shapes in cream (#FFF5E1) and golden amber (#F1BE58), visually centered and generously padded. Single square output, crisp edge, flat solid #FFFFFF outside the tile, no border or mockup. The contrast should work on both white and near-black pages.”
- **Objetivo:** criar uma marca distinta do foguete do protótipo, com um símbolo utilizável no cabeçalho e no favicon.
- **Resultado e decisão:** o gerador novamente retornou `Invalid credential`. Para avaliação local, o assistente desenhou uma proposta em SVG com xícara, grão e vapor. As formas foram criadas no próprio arquivo, sem reutilizar a arte do Figma; o texto fica no HTML e segue o tema. A proposta não comprova geração pela ferramenta visual exigida no enunciado.
- **Evidência:** [arquivo SVG](../src/assets/branding/marca-autoral.svg). O desenho foi integrado ao Header e ao favicon apenas durante a avaliação da proposta.

## Estampa do copo na ilustração da Home

- **Prompt da usuária:** “NAO ESSE LOGO DESSE COPO”, acompanhado de um recorte do banner.
- **Objetivo:** trocar a marca impressa no copo, não a marca no cabeçalho.
- **Decisão e ferramenta:** o assistente editou a imagem com Canvas, usando amostras da textura da faixa para limpar a estampa antiga. Aplicou um grão com traços de movimento e manteve o nome em duas linhas e a inclinação da estampa original. A ilustração de referência foi preservada separadamente.
- **Decisão nessa etapa:** esse primeiro teste de estampa não entrou na aplicação.

## Seleção da proposta para o cabeçalho

- **Prompt da usuária:** “NAO AQUELE Q PEDI P VC FAZER IGUAL AO DO PROFESSOR”.
- **Decisão:** recuperar a versão desenhada pelo assistente com copo roxo, grão claro e traços de movimento. Após aprovação, aplicar a mesma marca no Header, no favicon e no copo do banner, com uma paleta clara para a faixa escura. O gerador visual para essa versão retornou `Invalid credential`; a adaptação do banner foi feita com Canvas.
- **Evidência:** [SVG escolhido](../src/assets/branding/marca-copo.svg) e [banner editado](../src/assets/home/hero-marca-copo.png). A comparação de pixels confirmou que a edição ficou restrita à região da estampa.
