import { createContext } from "react";
import type { CartItem } from "../types/cart";
import type { Order } from "../types/order";
import type { ThemeMode } from "../styles/themes";
import type { CartTotals } from "../utils/calculateCart";

export interface CartContextValue {
  items: CartItem[];
  totals: CartTotals;
  addItem: (coffeeId: string, quantity?: number) => void;
  incrementItem: (coffeeId: string) => void;
  decrementItem: (coffeeId: string) => void;
  removeItem: (coffeeId: string) => void;
  clearCart: () => void;
}

export interface ThemeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
}

export interface OrderContextValue {
  order: Order | null;
  saveOrder: (order: Order) => void;
  clearOrder: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
export const ThemeContext = createContext<ThemeContextValue | null>(null);
export const OrderContext = createContext<OrderContextValue | null>(null);
