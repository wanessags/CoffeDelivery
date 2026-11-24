import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import App from "../App";
import { CartProvider, CART_STORAGE_KEY } from "../contexts/CartContext";
import { OrderProvider, ORDER_STORAGE_KEY } from "../contexts/OrderContext";
import { ThemeProvider as ModeProvider } from "../contexts/ThemeContext";
import { lightTheme } from "../styles/themes";
import { createConfirmedOrder } from "../utils/confirmedOrder";

function openAt(path: string) {
  return render(
    <ModeProvider>
      <ThemeProvider theme={lightTheme}>
        <CartProvider>
          <OrderProvider>
            <MemoryRouter initialEntries={[path]}><App /></MemoryRouter>
          </OrderProvider>
        </CartProvider>
      </ThemeProvider>
    </ModeProvider>,
  );
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

afterEach(() => vi.unstubAllGlobals());

it("bloqueia checkout vazio", () => {
  openAt("/checkout");
  expect(screen.getByRole("button", { name: "Confirmar pedido" })).toBeDisabled();
});

it("valida o pedido, limpa o carrinho e restaura a confirmação em uma nova montagem", async () => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([{ coffeeId: "latte", quantity: 2 }]));
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(Response.json({
    logradouro: "Praça da Sé", bairro: "Sé", localidade: "São Paulo", uf: "SP",
  })));
  const user = userEvent.setup();
  const app = openAt("/checkout");
  const confirm = screen.getByRole("button", { name: "Confirmar pedido" });

  await user.click(confirm);
  expect(await screen.findByText("Selecione uma forma de pagamento.")).toBeVisible();
  expect(sessionStorage.getItem(ORDER_STORAGE_KEY)).toBe("null");

  await user.type(screen.getByLabelText("CEP"), "01001000");
  await waitFor(() => expect(screen.getByLabelText("Rua")).toHaveValue("Praça da Sé"));
  await user.type(screen.getByLabelText("Número"), "100");
  await user.click(screen.getByRole("radio", { name: "Dinheiro" }));
  await user.click(confirm);

  expect(await screen.findByRole("heading", { name: "Uhu! Pedido confirmado" })).toBeVisible();
  expect(screen.getByText("Praça da Sé, 100")).toBeVisible();
  expect(screen.getByText("Dinheiro")).toBeVisible();
  expect(screen.getByRole("link", { name: "Carrinho com 0 itens" })).toBeVisible();
  expect(localStorage.getItem(CART_STORAGE_KEY)).toBe("[]");

  app.unmount();
  openAt("/success");
  expect(screen.getByText("Praça da Sé, 100")).toBeVisible();
  expect(screen.getByText("Dinheiro")).toBeVisible();
});

it("rejeita item inexistente e ignora snapshot salvo sem endereço completo", () => {
  const values = {
    cep: "01001000", street: "Rua teste", number: "123", city: "São Paulo",
    neighborhood: "Sé", state: "SP", paymentMethod: "cash",
  };
  expect(createConfirmedOrder([{ coffeeId: "inexistente", quantity: 1 }], values)).toBeNull();
  const valid = createConfirmedOrder([{ coffeeId: "latte", quantity: 1 }], values);
  expect(valid).not.toBeNull();
  sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify({ ...valid, address: {} }));
  openAt("/success");
  expect(screen.getByRole("heading", { name: "Nenhum pedido confirmado" })).toBeVisible();
});
