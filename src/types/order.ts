import type { DeliveryAddress } from "./address";

export type PaymentMethod = "credit" | "debit" | "cash";

export interface OrderItem {
  coffeeId: string;
  name: string;
  image: string;
  unitPriceInCents: number;
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  address: DeliveryAddress;
  paymentMethod: PaymentMethod;
  subtotalInCents: number;
  deliveryFeeInCents: number;
  totalInCents: number;
  createdAt: string;
}
