import { useState } from "react";
import { ShoppingCart } from "@phosphor-icons/react";

import { useCart } from "../../hooks/useCart";
import type { Coffee } from "../../types/coffee";
import { QuantityInput } from "../QuantityInput/QuantityInput";
import {
  Actions,
  Card,
  Description,
  Image,
  Name,
  Price,
  Tag,
  Tags,
} from "./styles";

interface CoffeeCardProps {
  coffee: Coffee;
}

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const decrease = () => setQuantity((current) => Math.max(1, current - 1));
  const increase = () => setQuantity((current) => Math.min(99, current + 1));

  function handleAdd() {
    addItem(coffee.id, quantity);
    setQuantity(1);
  }

  return (
    <Card>
      <Image src={coffee.image} alt="" width="120" height="120" loading="lazy" />
      <Tags>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <Actions>
        <Price>
          {priceFormatter.formatToParts(coffee.priceInCents / 100).map((part, index) =>
            part.type === "currency" ? <small key={index}>{part.value}</small> : part.value,
          )}
        </Price>
        <QuantityInput
          value={quantity}
          onDecrement={decrease}
          onIncrement={increase}
          itemName={coffee.name}
        />
        <button type="button" onClick={handleAdd} aria-label={`Adicionar ${coffee.name} ao carrinho`}>
          <ShoppingCart size={18} weight="fill" aria-hidden="true" />
        </button>
      </Actions>
    </Card>
  );
}
