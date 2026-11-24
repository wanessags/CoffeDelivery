import { Minus, Plus } from "@phosphor-icons/react";
import { Container, Quantity, StepButton } from "./styles";

interface QuantityInputProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  itemName: string;
  compact?: boolean;
  allowZero?: boolean;
}

export function QuantityInput({
  value,
  onIncrement,
  onDecrement,
  itemName,
  compact = false,
  allowZero = false,
}: QuantityInputProps) {
  const canDecrease = allowZero || value > 1;

  return (
    <Container $compact={compact}>
      <StepButton
        type="button"
        onClick={onDecrement}
        disabled={!canDecrease}
        aria-label={`Diminuir quantidade de ${itemName}`}
      >
        <Minus size={compact ? 12 : 14} weight="bold" aria-hidden="true" />
      </StepButton>
      <Quantity aria-label={`Quantidade de ${itemName}: ${value}`} $compact={compact}>
        {value}
      </Quantity>
      <StepButton
        type="button"
        onClick={onIncrement}
        aria-label={`Aumentar quantidade de ${itemName}`}
      >
        <Plus size={compact ? 12 : 14} weight="bold" aria-hidden="true" />
      </StepButton>
    </Container>
  );
}
