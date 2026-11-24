import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Checkout } from "../pages/Checkout";
import { addressSchema } from "../schemas/checkoutSchema";

function renderCheckout() {
  return render(<MemoryRouter><Checkout /></MemoryRouter>);
}

afterEach(() => vi.unstubAllGlobals());

describe("Endereço do checkout", () => {
  it("consulta um CEP válido e preserva número e complemento", async () => {
    const lookup = vi.fn().mockResolvedValue(Response.json({
      logradouro: "Praça da Sé", bairro: "Sé", localidade: "São Paulo", uf: "SP",
    }));
    vi.stubGlobal("fetch", lookup);
    const user = userEvent.setup();
    renderCheckout();

    await user.type(screen.getByLabelText("Número"), "100");
    await user.type(screen.getByLabelText(/Complemento/), "Apto 2");
    await user.type(screen.getByLabelText("CEP"), "01001000");

    await waitFor(() => expect(screen.getByLabelText("Rua")).toHaveValue("Praça da Sé"));
    expect(lookup).toHaveBeenCalledWith("https://viacep.com.br/ws/01001000/json/", expect.any(Object));
    expect(screen.getByLabelText("CEP")).toHaveValue("01001-000");
    expect(screen.getByLabelText("Bairro")).toHaveValue("Sé");
    expect(screen.getByLabelText("Cidade")).toHaveValue("São Paulo");
    expect(screen.getByLabelText("UF")).toHaveValue("SP");
    expect(screen.getByLabelText("Número")).toHaveValue("100");
    expect(screen.getByLabelText(/Complemento/)).toHaveValue("Apto 2");
  });

  it("sinaliza CEP incompleto sem consultar a API", async () => {
    const lookup = vi.fn();
    vi.stubGlobal("fetch", lookup);
    const user = userEvent.setup();
    renderCheckout();

    await user.type(screen.getByLabelText("CEP"), "010");
    await user.tab();

    expect(await screen.findByText("Informe um CEP válido.")).toBeVisible();
    expect(lookup).not.toHaveBeenCalled();
  });

  it("trata CEP não encontrado e falha de conexão ao tentar novamente", async () => {
    const lookup = vi.fn()
      .mockResolvedValueOnce(Response.json({ erro: "true" }))
      .mockRejectedValueOnce(new TypeError("offline"));
    vi.stubGlobal("fetch", lookup);
    const user = userEvent.setup();
    renderCheckout();

    await user.type(screen.getByLabelText("CEP"), "99999999");
    expect(await screen.findByText("CEP não encontrado.")).toBeVisible();
    await user.click(screen.getByRole("button", { name: "Tentar novamente" }));
    expect(await screen.findByText("Não foi possível consultar o CEP. Tente novamente.")).toBeVisible();
    await user.type(screen.getByLabelText("Rua"), "Rua manual");
    expect(screen.getByLabelText("Rua")).toHaveValue("Rua manual");
  });

  it("exige número e UF válida, mas aceita complemento ausente", () => {
    const address = {
      cep: "01001-000", street: "Praça da Sé", number: "100",
      neighborhood: "Sé", city: "São Paulo", state: "SP",
    };
    expect(addressSchema.safeParse(address).success).toBe(true);
    expect(addressSchema.safeParse({ ...address, number: "" }).success).toBe(false);
    expect(addressSchema.safeParse({ ...address, state: "XX" }).success).toBe(false);
  });
});
