import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CartSummary, type CartSummaryProps } from "../../components/CartSummary/CartSummary";
import { DeliveryAddressForm } from "../../components/DeliveryAddressForm/DeliveryAddressForm";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";
import { PaymentMethodSelector } from "../../components/PaymentMethodSelector/PaymentMethodSelector";
import { checkoutDefaultValues, checkoutSchema } from "../../schemas/checkoutSchema";
import "./checkout.css";

export function Checkout({ cart }: { cart?: CartSummaryProps }) {
  const form = useForm({
    defaultValues: checkoutDefaultValues,
    resolver: zodResolver(checkoutSchema),
    mode: "onBlur",
  });

  return (
    <div className="checkout">
      <FormProvider {...form}>
        <form noValidate onSubmit={(event) => event.preventDefault()}>
          <h1>Complete seu pedido</h1>
          <DeliveryAddressForm />
          <PaymentMethodSelector />
        </form>
      </FormProvider>
      <section aria-labelledby="selected-coffees-title">
        <h2 id="selected-coffees-title">Cafés selecionados</h2>
        <div className="checkout-cart">
          {cart ? <CartSummary {...cart} /> : <EmptyCart />}
        </div>
      </section>
    </div>
  );
}
