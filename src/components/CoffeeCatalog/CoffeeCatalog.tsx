import { coffees } from "../../data/coffees";
import { CoffeeCard } from "../CoffeeCard/CoffeeCard";
import { CatalogGrid, SectionTitle } from "./styles";

export function CoffeeCatalog() {
  return (
    <section aria-labelledby="catalog-title">
      <SectionTitle id="catalog-title">Nossos cafés</SectionTitle>
      <CatalogGrid>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CatalogGrid>
    </section>
  );
}
