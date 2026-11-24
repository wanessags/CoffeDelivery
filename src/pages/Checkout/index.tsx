import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CartSummary, type CartSummaryProps } from "../../components/CartSummary/CartSummary";
import { DeliveryAddressForm } from "../../components/DeliveryAddressForm/DeliveryAddressForm";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";
import { addressDefaultValues, addressSchema } from "../../schemas/checkoutSchema";
import "./checkout.css";

export function Checkout({ cart }: { cart?: CartSummaryProps }) {
  const form = useForm({
    defaultValues: addressDefaultValues,
    resolver: zodResolver(addressSchema),
    mode: "onBlur",
  });

  return (
    <div className="checkout">
      <FormProvider {...form}>
        <form noValidate onSubmit={(event) => event.preventDefault()}>
          <h1>Complete seu pedido</h1>
          <DeliveryAddressForm />
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
