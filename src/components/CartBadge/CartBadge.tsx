import { ShoppingCart } from "@phosphor-icons/react";

import { useCart } from "../../hooks/useCart";
import { Badge, CartLink } from "../Header/styles";

export function CartBadge() {
  const { totals } = useCart();

  return (
    <CartLink to="/checkout" aria-label={`Carrinho com ${totals.itemCount} itens`}>
      <ShoppingCart size={24} weight="fill" aria-hidden="true" />
      {totals.itemCount > 0 && <Badge aria-hidden="true">{totals.itemCount}</Badge>}
    </CartLink>
  );
}
