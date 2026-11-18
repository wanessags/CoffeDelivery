import { useState } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function TestCounter() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <span aria-label="Quantidade selecionada">{quantity}</span>

      <button type="button" onClick={() => setQuantity((value) => value + 1)}>
        Aumentar quantidade
      </button>
    </div>
  );
}

describe("Infraestrutura de testes", () => {
  it("deve renderizar um componente React", () => {
    render(<TestCounter />);

    expect(screen.getByLabelText("Quantidade selecionada")).toHaveTextContent(
      "1",
    );
  });

  it("deve atualizar o estado após uma interação", async () => {
    const user = userEvent.setup();

    render(<TestCounter />);

    await user.click(
      screen.getByRole("button", {
        name: "Aumentar quantidade",
      }),
    );

    expect(screen.getByLabelText("Quantidade selecionada")).toHaveTextContent(
      "2",
    );
  });
});
