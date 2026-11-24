import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemedApp } from "./ThemedApp";
import { CartProvider } from "./contexts/CartContext";
import { OrderProvider } from "./contexts/OrderContext";
import { ThemeProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <OrderProvider>
          <ThemedApp />
        </OrderProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);
