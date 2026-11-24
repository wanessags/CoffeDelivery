import { isKnownCoffeeId } from "../data/coffees";
import type { CartAction, CartState } from "../types/cart";

export const initialCartState: CartState = { items: [] };

function isValidQuantity(quantity: number): boolean {
  return Number.isInteger(quantity) && quantity > 0;
}

/** Reducer puro: todas as regras do carrinho ficam concentradas aqui. */
export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { coffeeId, quantity } = action.payload;
      if (!isKnownCoffeeId(coffeeId) || !isValidQuantity(quantity)) {
        return state;
      }

      const existing = state.items.find((item) => item.coffeeId === coffeeId);

      if (!existing) {
        return { items: [...state.items, { coffeeId, quantity }] };
      }

      return {
        items: state.items.map((item) =>
          item.coffeeId === coffeeId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      };
    }

    case "INCREMENT_ITEM": {
      const { coffeeId } = action.payload;
      if (!isKnownCoffeeId(coffeeId)) return state;

      return {
        items: state.items.map((item) =>
          item.coffeeId === coffeeId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }

    case "DECREMENT_ITEM": {
      const { coffeeId } = action.payload;
      const item = state.items.find((entry) => entry.coffeeId === coffeeId);
      if (!item) return state;

      // RN-01: ao chegar a zero, a linha é removida do carrinho.
      if (item.quantity <= 1) {
        return {
          items: state.items.filter((entry) => entry.coffeeId !== coffeeId),
        };
      }

      return {
        items: state.items.map((entry) =>
          entry.coffeeId === coffeeId
            ? { ...entry, quantity: entry.quantity - 1 }
            : entry,
        ),
      };
    }

    case "REMOVE_ITEM": {
      return {
        items: state.items.filter((item) => item.coffeeId !== action.payload.coffeeId),
      };
    }

    case "CLEAR_CART": {
      return initialCartState;
    }

    default:
      return state;
  }
}
