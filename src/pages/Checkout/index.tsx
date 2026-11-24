import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartSummary, type CartSummaryProps } from "../../components/CartSummary/CartSummary";
import { DeliveryAddressForm } from "../../components/DeliveryAddressForm/DeliveryAddressForm";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";
import { PaymentMethodSelector } from "../../components/PaymentMethodSelector/PaymentMethodSelector";
import { checkoutDefaultValues, checkoutSchema, type CheckoutFormValues } from "../../schemas/checkoutSchema";
import type { Order } from "../../types/order";
import { createConfirmedOrder } from "../../utils/confirmedOrder";
import "./checkout.css";

interface CheckoutProps {
  cart?: CartSummaryProps;
  onOrderConfirmed?: (order: Order) => void;
}

export function Checkout({ cart, onOrderConfirmed }: CheckoutProps) {
  const navigate = useNavigate();
  const [orderError, setOrderError] = useState("");
  const form = useForm({
    defaultValues: checkoutDefaultValues,
    resolver: zodResolver(checkoutSchema),
    mode: "onBlur",
  });
  const canConfirm = Boolean(cart?.items.length && onOrderConfirmed);

  function submitOrder(values: CheckoutFormValues) {
    if (!cart || !onOrderConfirmed) return;
    const order = createConfirmedOrder(cart.items, values);
    if (!order) {
      setOrderError("Não foi possível confirmar o pedido. Confira os itens do carrinho.");
      return;
    }

    setOrderError("");
    onOrderConfirmed(order);
    void navigate("/success", { replace: true });
  }

  return (
    <div className="checkout">
      <FormProvider {...form}>
        <form id="checkout-form" noValidate onSubmit={form.handleSubmit(submitOrder)}>
          <h1>Complete seu pedido</h1>
          <DeliveryAddressForm />
          <PaymentMethodSelector />
        </form>
      </FormProvider>
      <section aria-labelledby="selected-coffees-title">
        <h2 id="selected-coffees-title">Cafés selecionados</h2>
        <div className="checkout-cart">
          {cart ? <CartSummary {...cart} /> : <EmptyCart />}
          <button
            className="checkout-confirm"
            type="submit"
            form="checkout-form"
            disabled={!canConfirm || form.formState.isSubmitting}
          >
            Confirmar pedido
          </button>
          {orderError && <p className="checkout-order-error" role="alert">{orderError}</p>}
        </div>
      </section>
    </div>
  );
}
