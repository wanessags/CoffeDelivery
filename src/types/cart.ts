export interface CartItem {
  coffeeId: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "INCREMENT_ITEM"; payload: { coffeeId: string } }
  | { type: "DECREMENT_ITEM"; payload: { coffeeId: string } }
  | { type: "REMOVE_ITEM"; payload: { coffeeId: string } }
  | { type: "CLEAR_CART" };
