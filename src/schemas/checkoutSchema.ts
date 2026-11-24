import { z } from "zod";

import type { DeliveryAddress } from "../types/address";
import { maskCep, onlyDigits } from "../utils/cep";

const brazilianStates = new Set(
  "AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SP SE TO".split(" "),
);

export const addressSchema = z.object({
  cep: z
    .string()
    .regex(/^\d{5}-?\d{3}$/, "Informe um CEP válido."),
  street: z.string().trim().min(1, "Informe a rua."),
  number: z.string().trim().min(1, "Informe o número do endereço."),
  complement: z.string().optional(),
  neighborhood: z.string().trim().min(1, "Informe o bairro."),
  city: z.string().trim().min(1, "Informe a cidade."),
  state: z
    .string()
    .trim()
    .refine((value) => brazilianStates.has(value.toUpperCase()), "Informe uma UF válida."),
});

export const checkoutSchema = addressSchema.extend({
  paymentMethod: z
    .union([z.literal(""), z.enum(["credit", "debit", "cash"])])
    .refine((value): boolean => value !== "", "Selecione uma forma de pagamento."),
});

export type AddressFormValues = z.infer<typeof addressSchema>;
export type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export const addressDefaultValues: AddressFormValues = {
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
};

export const checkoutDefaultValues: CheckoutFormValues = {
  ...addressDefaultValues,
  paymentMethod: "",
};

export function toDeliveryAddress(data: AddressFormValues): DeliveryAddress {
  return {
    cep: maskCep(onlyDigits(data.cep)),
    street: data.street.trim(),
    number: data.number.trim(),
    complement: data.complement?.trim() || undefined,
    neighborhood: data.neighborhood.trim(),
    city: data.city.trim(),
    state: data.state.trim().toUpperCase(),
  };
}
