import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

import { isKnownCoffeeId } from "../data/coffees";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { cartReducer } from "../reducers/cartReducer";
import type { CartItem } from "../types/cart";
import { getCartTotals } from "../utils/calculateCart";
import { CartContext, type CartContextValue } from "./contextValues";

export const CART_STORAGE_KEY = "coffee-delivery:cart";

function parseStoredItems(raw: string): CartItem[] | null {
  const data: unknown = JSON.parse(raw);
  if (!Array.isArray(data)) {
    return null;
  }

  const seen = new Set<string>();
  const items: CartItem[] = [];

  for (const entry of data) {
    if (!entry || typeof entry !== "object") continue;

    const { coffeeId, quantity } = entry as Record<string, unknown>;
    if (
      typeof coffeeId !== "string" ||
      !isKnownCoffeeId(coffeeId) ||
      seen.has(coffeeId) ||
      typeof quantity !== "number" ||
      !Number.isInteger(quantity) ||
      quantity < 1
    ) {
      continue;
    }

    seen.add(coffeeId);
    items.push({ coffeeId, quantity });
  }

  return items;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [storedItems, setStoredItems] = useLocalStorage<CartItem[]>(
    CART_STORAGE_KEY,
    [],
    "local",
    parseStoredItems,
  );

  const [state, dispatch] = useReducer(cartReducer, undefined, () => ({
    items: storedItems,
  }));

  useEffect(() => {
    setStoredItems(state.items);
  }, [setStoredItems, state.items]);

  const addItem = useCallback((coffeeId: string, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { coffeeId, quantity } });
  }, []);

  const incrementItem = useCallback((coffeeId: string) => {
    dispatch({ type: "INCREMENT_ITEM", payload: { coffeeId } });
  }, []);

  const decrementItem = useCallback((coffeeId: string) => {
    dispatch({ type: "DECREMENT_ITEM", payload: { coffeeId } });
  }, []);

  const removeItem = useCallback((coffeeId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { coffeeId } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      totals: getCartTotals(state.items),
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearCart,
    }),
    [
      state.items,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
