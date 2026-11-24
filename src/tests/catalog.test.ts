import { describe, expect, it } from "vitest";
import { coffees, getCoffeeById } from "../data/coffees";

describe("Catálogo de cafés", () => {
  it("possui 14 produtos e usa uma imagem PNG diferente para cada um", () => {
    expect(coffees).toHaveLength(14);
    expect(new Set(coffees.map(({ id }) => id)).size).toBe(14);
    expect(new Set(coffees.map(({ image }) => image)).size).toBe(14);
    expect(coffees.every(({ image }) => image.endsWith(".png"))).toBe(true);
  });

  it("mantém o preço de demonstração em centavos e as tags do Cubano", () => {
    expect(coffees.every(({ priceInCents }) => priceInCents === 990)).toBe(true);
    expect(getCoffeeById("cubano")?.tags).toEqual(["Especial", "Alcoólico", "Gelado"]);
  });
});
