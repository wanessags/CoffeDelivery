import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { DeliveryAddressForm } from "../../components/DeliveryAddressForm/DeliveryAddressForm";
import { addressDefaultValues, addressSchema } from "../../schemas/checkoutSchema";
import "./checkout.css";

export function Checkout() {
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
        <div className="checkout-placeholder">
          <p>O resumo e a confirmação serão adicionados na próxima etapa.</p>
          <Link to="/">Voltar ao catálogo</Link>
        </div>
      </section>
    </div>
  );
}
