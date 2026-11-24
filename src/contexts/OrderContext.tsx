import {
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Order } from "../types/order";
import { OrderContext, type OrderContextValue } from "./contextValues";

export const ORDER_STORAGE_KEY = "coffee-delivery:last-order";

function parseStoredOrder(raw: string): Order | null {
  const value: unknown = JSON.parse(raw);
  if (!value || typeof value !== "object") return null;

  const candidate = value as Partial<Order>;
  const isPaymentValid =
    candidate.paymentMethod === "credit" ||
    candidate.paymentMethod === "debit" ||
    candidate.paymentMethod === "cash";

  if (
    typeof candidate.id !== "string" ||
    !Array.isArray(candidate.items) ||
    candidate.items.length === 0 ||
    !candidate.address ||
    !isPaymentValid ||
    typeof candidate.subtotalInCents !== "number" ||
    typeof candidate.deliveryFeeInCents !== "number" ||
    typeof candidate.totalInCents !== "number"
  ) {
    return null;
  }

  return candidate as Order;
}

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
