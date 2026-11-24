import { Trash } from "@phosphor-icons/react";
import type { Coffee } from "../../types/coffee";
import { formatCurrency } from "../../utils/formatCurrency";
import { QuantityInput } from "../QuantityInput/QuantityInput";

interface CartItemProps {
  coffee: Coffee;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

export function CartItem({ coffee, quantity, onIncrement, onDecrement, onRemove }: CartItemProps) {
  return (
    <li className="checkout-cart-item">
      <img src={coffee.image} alt="" width="64" height="64" />
      <div className="checkout-item-body">
        <div className="checkout-item-heading">
          <h3>{coffee.name}</h3>
          <strong>{formatCurrency(coffee.priceInCents * quantity)}</strong>
        </div>
        <div className="checkout-item-actions">
          <QuantityInput
            value={quantity}
            itemName={coffee.name}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            compact
            allowZero
          />
          <button type="button" onClick={onRemove} aria-label={`Remover ${coffee.name}`}>
            <Trash size={16} aria-hidden="true" />
            Remover
          </button>
        </div>
      </div>
    </li>
  );
}
