import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import delivery from "../../assets/success/delivery.png";
import type { Order, PaymentMethod } from "../../types/order";
import "./order-success.css";

const paymentLabels: Record<PaymentMethod, string> = {
  credit: "Cartão de crédito",
  debit: "Cartão de débito",
  cash: "Dinheiro",
};

export function OrderSuccess({ order }: { order: Order | null }) {
  const address = order?.address;

  return (
    <section className="order-success" aria-labelledby="order-success-title">
      <h1 id="order-success-title">
        {order ? "Uhu! Pedido confirmado" : "Nenhum pedido confirmado"}
      </h1>
      <p className="order-success-intro">
        {order
          ? "Agora é só aguardar que logo o café chegará até você"
          : "Quando você confirmar um pedido, os dados da entrega aparecerão aqui."}
      </p>
      <div className="order-success-layout">
        {order && address ? (
          <ul className="order-success-details" aria-label="Dados da entrega">
            <li>
              <span className="order-success-icon order-success-icon--location">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <div>
                Entrega em <strong>{address.street}, {address.number}</strong>
                {address.complement && <span> · {address.complement}</span>}
                <p>{address.neighborhood} - {address.city}, {address.state}</p>
              </div>
            </li>
            <li>
              <span className="order-success-icon order-success-icon--time">
                <Timer size={16} weight="fill" aria-hidden="true" />
              </span>
              <div>Previsão de entrega <p><strong>20 a 30 minutos</strong></p></div>
            </li>
            <li>
              <span className="order-success-icon order-success-icon--payment">
                <CurrencyDollar size={16} aria-hidden="true" />
              </span>
              <div>Pagamento na entrega <p><strong>{paymentLabels[order.paymentMethod]}</strong></p></div>
            </li>
          </ul>
        ) : (
          <Link className="order-success-return" to="/">Voltar ao catálogo</Link>
        )}
        <img src={delivery} alt="" width="492" height="293" />
      </div>
    </section>
  );
}
