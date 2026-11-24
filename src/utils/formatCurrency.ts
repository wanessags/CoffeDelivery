const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** Converte centavos para BRL apenas na apresentação (RN-04). */
export function formatCurrency(cents: number): string {
  return formatter.format(cents / 100);
}
