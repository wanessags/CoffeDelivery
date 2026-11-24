import { getCoffeeById } from "../data/coffees";
import type { CartItem } from "../types/cart";

/** Taxa fixa e fictícia, centralizada conforme RN-03. */
export const DELIVERY_FEE_IN_CENTS = 350;

export interface CartTotals {
  itemCount: number;
  subtotalInCents: number;
  deliveryFeeInCents: number;
  totalInCents: number;
}

export function getCartTotals(items: readonly CartItem[]): CartTotals {
  let itemCount = 0;
  let subtotalInCents = 0;

  for (const item of items) {
    const coffee = getCoffeeById(item.coffeeId);
    if (!coffee || !Number.isSafeInteger(item.quantity) || item.quantity < 1) {
      continue;
    }

    itemCount += item.quantity;
    subtotalInCents += coffee.priceInCents * item.quantity;
  }

  const deliveryFeeInCents = itemCount > 0 ? DELIVERY_FEE_IN_CENTS : 0;

  return {
    itemCount,
    subtotalInCents,
    deliveryFeeInCents,
    totalInCents: subtotalInCents + deliveryFeeInCents,
  };
}
