import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import hero from "../../assets/home/hero-marca-copo.png";
import { CoffeeCatalog } from "../../components/CoffeeCatalog/CoffeeCatalog";
import { Banner, Benefit, Benefits, HeroImage, Intro, Title } from "./styles";

const benefits = [
  { icon: ShoppingCart, label: "Compra simples e segura", color: "gold" },
  { icon: Package, label: "Embalagem mantém o café intacto", color: "neutral" },
  { icon: Timer, label: "Entrega rápida e rastreada", color: "yellow" },
  { icon: Coffee, label: "O café chega fresquinho até você", color: "purple" },
] as const;

export function Home() {
  return (
    <>
      <Banner>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Intro>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </Intro>
          <Benefits>
            {benefits.map(({ icon: Icon, label, color }) => (
              <Benefit key={label} $color={color}>
                <span><Icon size={16} weight="fill" aria-hidden="true" /></span>
                {label}
              </Benefit>
            ))}
          </Benefits>
        </div>
        <HeroImage src={hero} alt="" width="476" height="360" />
      </Banner>
      <CoffeeCatalog />
    </>
  );
}
