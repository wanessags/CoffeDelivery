import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { it, expect } from "vitest";
import { Checkout } from "../pages/Checkout";
import { checkoutSchema } from "../schemas/checkoutSchema";

it("permite selecionar um único pagamento e trocar a opção pelo teclado", async () => {
  const user = userEvent.setup();
  render(<MemoryRouter><Checkout /></MemoryRouter>);

  const credit = screen.getByRole("radio", { name: "Cartão de crédito" });
  const debit = screen.getByRole("radio", { name: "Cartão de débito" });
  const cash = screen.getByRole("radio", { name: "Dinheiro" });

  expect(credit).not.toBeChecked();
  await user.click(credit);
  expect(credit).toBeChecked();
  await user.keyboard("{ArrowRight}");
  expect(debit).toBeChecked();
  await user.click(cash);
  expect(cash).toBeChecked();
  expect(credit).not.toBeChecked();
  expect(debit).not.toBeChecked();
});

it("não aceita pagamento ausente ou desconhecido", () => {
  const data = {
    cep: "01001-000", street: "Praça da Sé", number: "100",
    neighborhood: "Sé", city: "São Paulo", state: "SP",
  };
  expect(checkoutSchema.safeParse({ ...data, paymentMethod: "" }).success).toBe(false);
  expect(checkoutSchema.safeParse({ ...data, paymentMethod: "pix" }).success).toBe(false);
  expect(checkoutSchema.safeParse({ ...data, paymentMethod: "debit" }).success).toBe(true);
});
