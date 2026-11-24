import { useReducer } from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { CartSummary } from "../components/CartSummary/CartSummary";
import { cartReducer } from "../reducers/cartReducer";
import { lightTheme } from "../styles/themes";
import { getCartTotals } from "../utils/calculateCart";

function CartExample() {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [
      { coffeeId: "expresso-tradicional", quantity: 1 },
      { coffeeId: "latte", quantity: 2 },
    ],
  });

  return (
    <CartSummary
      items={cart.items}
      incrementItem={(coffeeId) => dispatch({ type: "INCREMENT_ITEM", payload: { coffeeId } })}
      decrementItem={(coffeeId) => dispatch({ type: "DECREMENT_ITEM", payload: { coffeeId } })}
      removeItem={(coffeeId) => dispatch({ type: "REMOVE_ITEM", payload: { coffeeId } })}
    />
  );
}

describe("Resumo financeiro do checkout", () => {
  it("calcula os valores em centavos e não cobra frete com carrinho vazio", () => {
    expect(getCartTotals([])).toEqual({
      itemCount: 0, subtotalInCents: 0, deliveryFeeInCents: 0, totalInCents: 0,
    });
    expect(getCartTotals([
      { coffeeId: "latte", quantity: 3 },
      { coffeeId: "inexistente", quantity: 5 },
      { coffeeId: "expresso-tradicional", quantity: 0 },
    ])).toEqual({
      itemCount: 3, subtotalInCents: 2970, deliveryFeeInCents: 350, totalInCents: 3320,
    });
  });

  it("mostra preços, altera quantidades e trata remoção e carrinho vazio", async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><ThemeProvider theme={lightTheme}><CartExample /></ThemeProvider></MemoryRouter>);

    let totals = within(screen.getByLabelText("Valores do pedido"));
    expect(totals.getByText("R$ 29,70")).toBeVisible();
    expect(totals.getByText("R$ 3,50")).toBeVisible();
    expect(totals.getByText("R$ 33,20")).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Aumentar quantidade de Latte" }));
    expect(totals.getByText("R$ 43,10")).toBeVisible();
    await user.click(screen.getByRole("button", { name: "Diminuir quantidade de Latte" }));
    expect(totals.getByText("R$ 33,20")).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Diminuir quantidade de Expresso Tradicional" }));
    expect(screen.queryByRole("heading", { name: "Expresso Tradicional" })).not.toBeInTheDocument();
    totals = within(screen.getByLabelText("Valores do pedido"));
    expect(totals.getByText("R$ 23,30")).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Remover Latte" }));
    expect(screen.getByRole("heading", { name: "Seu carrinho está vazio" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Voltar ao catálogo" })).toBeVisible();
    expect(screen.queryByLabelText("Valores do pedido")).not.toBeInTheDocument();
  });
});
