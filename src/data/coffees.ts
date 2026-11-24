import type { Coffee } from "../types/coffee";

import expressoTradicional from "../assets/coffees/expresso-tradicional.png";
import expressoAmericano from "../assets/coffees/expresso-americano.png";
import expressoCremoso from "../assets/coffees/expresso-cremoso.png";
import expressoGelado from "../assets/coffees/expresso-gelado.png";
import cafeComLeite from "../assets/coffees/cafe-com-leite.png";
import latte from "../assets/coffees/latte.png";
import capuccino from "../assets/coffees/capuccino.png";
import macchiato from "../assets/coffees/macchiato.png";
import mocaccino from "../assets/coffees/mocaccino.png";
import chocolateQuente from "../assets/coffees/chocolate-quente.png";
import cubano from "../assets/coffees/cubano.png";
import havaiano from "../assets/coffees/havaiano.png";
import arabe from "../assets/coffees/arabe.png";
import irlandes from "../assets/coffees/irlandes.png";

/**
 * Catálogo local e tipado. O preço de demonstração da referência
 * educacional é registrado em centavos (RN-04).
 */
const DEMO_PRICE_IN_CENTS = 990;

export const coffees: Coffee[] = [
  {
    id: "expresso-tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: expressoTradicional,
    tags: ["Tradicional"],
  },
  {
    id: "expresso-americano",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: expressoAmericano,
    tags: ["Tradicional"],
  },
  {
    id: "expresso-cremoso",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: expressoCremoso,
    tags: ["Tradicional"],
  },
  {
    id: "expresso-gelado",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: expressoGelado,
    tags: ["Tradicional", "Gelado"],
  },
  {
    id: "cafe-com-leite",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: cafeComLeite,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "latte",
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: latte,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "capuccino",
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: capuccino,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "macchiato",
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: macchiato,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "mocaccino",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: mocaccino,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "chocolate-quente",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: chocolateQuente,
    tags: ["Especial", "Com leite"],
  },
  {
    id: "cubano",
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: cubano,
    tags: ["Especial", "Alcoólico", "Gelado"],
  },
  {
    id: "havaiano",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: havaiano,
    tags: ["Especial"],
  },
  {
    id: "arabe",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: arabe,
    tags: ["Especial"],
  },
  {
    id: "irlandes",
    name: "Irlandês",
    description: "Bebida à base de café, uísque irlandês, açúcar e chantilly.",
    priceInCents: DEMO_PRICE_IN_CENTS,
    image: irlandes,
    tags: ["Especial", "Alcoólico"],
  },
];

const coffeesById = new Map(coffees.map((coffee) => [coffee.id, coffee]));

export function getCoffeeById(id: string): Coffee | undefined {
  return coffeesById.get(id);
}

export function isKnownCoffeeId(id: string): boolean {
  return coffeesById.has(id);
}
