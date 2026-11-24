import { getCoffeeById } from "../../data/coffees";
import type { CartItem as CartEntry } from "../../types/cart";
import { getCartTotals } from "../../utils/calculateCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItem } from "../CartItem/CartItem";
import { EmptyCart } from "../EmptyCart/EmptyCart";

export interface CartSummaryProps {
  items: CartEntry[];
  incrementItem: (coffeeId: string) => void;
  decrementItem: (coffeeId: string) => void;
  removeItem: (coffeeId: string) => void;
}

export function CartSummary({ items, incrementItem, decrementItem, removeItem }: CartSummaryProps) {
  const { itemCount, subtotalInCents, deliveryFeeInCents, totalInCents } = getCartTotals(items);

  if (itemCount === 0) return <EmptyCart />;

  return (
    <>
      <ul className="checkout-cart-items" aria-label="Itens do carrinho">
        {items.map(({ coffeeId, quantity }) => {
          const coffee = getCoffeeById(coffeeId);
          if (!coffee || !Number.isSafeInteger(quantity) || quantity < 1) return null;
          return (
            <CartItem
              key={coffeeId}
              coffee={coffee}
              quantity={quantity}
              onIncrement={() => incrementItem(coffeeId)}
              onDecrement={() => decrementItem(coffeeId)}
              onRemove={() => removeItem(coffeeId)}
            />
          );
        })}
      </ul>
      <dl className="checkout-totals" aria-label="Valores do pedido" aria-live="polite">
        <div><dt>Total de itens</dt><dd>{formatCurrency(subtotalInCents)}</dd></div>
        <div><dt>Entrega</dt><dd>{formatCurrency(deliveryFeeInCents)}</dd></div>
        <div><dt>Total</dt><dd>{formatCurrency(totalInCents)}</dd></div>
      </dl>
    </>
  );
}
