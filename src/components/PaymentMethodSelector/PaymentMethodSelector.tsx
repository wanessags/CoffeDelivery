import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import type { CheckoutFormValues } from "../../schemas/checkoutSchema";
import type { PaymentMethod } from "../../types/order";

const methods = [
  { value: "credit", label: "Cartão de crédito", icon: CreditCard },
  { value: "debit", label: "Cartão de débito", icon: Bank },
  { value: "cash", label: "Dinheiro", icon: Money },
] as const satisfies readonly { value: PaymentMethod; label: string; icon: typeof CreditCard }[];

export function PaymentMethodSelector() {
  const { register, formState: { errors } } = useFormContext<CheckoutFormValues>();
  const error = errors.paymentMethod;

  return (
    <section className="delivery-card payment-card" aria-labelledby="payment-title">
      <div className="delivery-card-heading">
        <CurrencyDollar size={22} aria-hidden="true" />
        <div>
          <h2 id="payment-title">Pagamento</h2>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
        </div>
      </div>
      <div className="payment-options" role="group" aria-labelledby="payment-title"
        aria-describedby={error ? "payment-error" : undefined}>
        {methods.map(({ value, label, icon: Icon }) => (
          <label className="payment-option" key={value}>
            <input {...register("paymentMethod")} type="radio" value={value} required />
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </label>
        ))}
      </div>
      {error && <p id="payment-error" role="alert">{error.message}</p>}
    </section>
  );
}
