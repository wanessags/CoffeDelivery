import { Link } from "react-router-dom";

export function EmptyCart() {
  return (
    <div role="status">
      <h3>Seu carrinho está vazio</h3>
      <p>Escolha seus cafés favoritos para começar um pedido.</p>
      <Link to="/">Voltar ao catálogo</Link>
    </div>
  );
}
