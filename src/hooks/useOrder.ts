import { useContext } from "react";

import { OrderContext, type OrderContextValue } from "../contexts/contextValues";

export function useOrder(): OrderContextValue {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder deve ser usado dentro de OrderProvider.");
  }
  return context;
}
