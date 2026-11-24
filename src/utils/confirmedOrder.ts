import { z } from "zod";
import { getCoffeeById } from "../data/coffees";
import { addressSchema, checkoutSchema, toDeliveryAddress } from "../schemas/checkoutSchema";
import type { CartItem } from "../types/cart";
import type { Order, OrderItem } from "../types/order";
import { getCartTotals } from "./calculateCart";

const cents = z.number().int().nonnegative();
const orderSchema = z.object({
  id: z.string().min(1),
  items: z.array(z.object({
    coffeeId: z.string().min(1),
    name: z.string().min(1),
    image: z.string(),
    unitPriceInCents: cents,
    quantity: z.number().int().positive(),
  })).min(1),
  address: addressSchema,
  paymentMethod: z.enum(["credit", "debit", "cash"]),
  subtotalInCents: cents,
  deliveryFeeInCents: cents,
  totalInCents: cents,
  createdAt: z.iso.datetime(),
}).refine((order) =>
  new Set(order.items.map(({ coffeeId }) => coffeeId)).size === order.items.length &&
  order.items.reduce((sum, item) => sum + item.unitPriceInCents * item.quantity, 0) ===
    order.subtotalInCents &&
  order.subtotalInCents + order.deliveryFeeInCents === order.totalInCents,
);

export function parseStoredOrder(raw: string): Order | null {
  const result = orderSchema.safeParse(JSON.parse(raw) as unknown);
  return result.success ? result.data : null;
}

export function createConfirmedOrder(items: readonly CartItem[], form: unknown): Order | null {
  const parsed = checkoutSchema.safeParse(form);
  if (!parsed.success || !parsed.data.paymentMethod || items.length === 0) return null;

  const orderItems: OrderItem[] = [];
  const seen = new Set<string>();

  for (const item of items) {
    const coffee = getCoffeeById(item.coffeeId);
    if (!coffee || seen.has(item.coffeeId) || !Number.isSafeInteger(item.quantity) || item.quantity < 1) {
      return null;
    }

    seen.add(item.coffeeId);
    orderItems.push({
      coffeeId: coffee.id,
      name: coffee.name,
      image: coffee.image,
      unitPriceInCents: coffee.priceInCents,
      quantity: item.quantity,
    });
  }

  const { subtotalInCents, deliveryFeeInCents, totalInCents } = getCartTotals(items);
  const id = globalThis.crypto.randomUUID?.() ?? `coffee-${Date.now().toString(36)}`;
  const order = orderSchema.safeParse({
    id,
    items: orderItems,
    address: toDeliveryAddress(parsed.data),
    paymentMethod: parsed.data.paymentMethod,
    subtotalInCents,
    deliveryFeeInCents,
    totalInCents,
    createdAt: new Date().toISOString(),
  });

  return order.success ? order.data : null;
}
