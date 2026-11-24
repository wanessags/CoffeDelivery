import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { OrderSuccess } from "../components/OrderSuccess/OrderSuccess";
import type { Order } from "../types/order";

const sampleOrder: Order = {
  id: "test-order",
  address: {
    cep: "01001-000",
    street: "Rua de teste",
    number: "42",
    complement: "Apto 2",
    neighborhood: "Sé",
    city: "São Paulo",
    state: "SP",
  },
  items: [{
    coffeeId: "latte", name: "Latte", image: "/latte.png",
    unitPriceInCents: 990, quantity: 1,
  }],
  paymentMethod: "debit",
  subtotalInCents: 990,
  deliveryFeeInCents: 350,
  totalInCents: 1340,
  createdAt: "2026-11-24T12:00:00Z",
};

describe("Tela de confirmação", () => {
  it("exibe dados reais do snapshot recebido", () => {
    render(<MemoryRouter><OrderSuccess order={sampleOrder} /></MemoryRouter>);

    expect(screen.getByRole("heading", { name: "Uhu! Pedido confirmado" })).toBeVisible();
    const details = within(screen.getByRole("list", { name: "Dados da entrega" }));
    expect(details.getByText("Rua de teste, 42")).toBeVisible();
    expect(details.getByText(/Apto 2/)).toBeVisible();
    expect(details.getByText("Sé - São Paulo, SP")).toBeVisible();
    expect(details.getByText("20 a 30 minutos")).toBeVisible();
    expect(details.getByText("Cartão de débito")).toBeVisible();
  });

  it("não exibe confirmação se não houver pedido e permite voltar", () => {
    const { container } = render(<MemoryRouter><OrderSuccess order={null} /></MemoryRouter>);

    expect(screen.getByRole("heading", { name: "Nenhum pedido confirmado" })).toBeVisible();
    expect(screen.queryByRole("list", { name: "Dados da entrega" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Voltar ao catálogo" })).toHaveAttribute("href", "/");
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
  });
});
