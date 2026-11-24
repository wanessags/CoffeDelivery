import {
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Order } from "../types/order";
import { parseStoredOrder } from "../utils/confirmedOrder";
import { OrderContext, type OrderContextValue } from "./contextValues";

export const ORDER_STORAGE_KEY = "coffee-delivery:last-order";

export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useLocalStorage<Order | null>(
    ORDER_STORAGE_KEY,
    null,
    "session",
    parseStoredOrder,
  );

  const saveOrder = useCallback(
    (nextOrder: Order) => setOrder(nextOrder),
    [setOrder],
  );

  const clearOrder = useCallback(() => setOrder(null), [setOrder]);

  const value = useMemo<OrderContextValue>(
    () => ({ order, saveOrder, clearOrder }),
    [order, saveOrder, clearOrder],
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}
