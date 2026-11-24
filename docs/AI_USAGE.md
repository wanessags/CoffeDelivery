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
