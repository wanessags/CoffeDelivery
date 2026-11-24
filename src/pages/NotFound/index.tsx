import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section role="alert">
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não existe. Volte ao catálogo para continuar.</p>
      <Link to="/">Ir para a página inicial</Link>
    </section>
  );
}
