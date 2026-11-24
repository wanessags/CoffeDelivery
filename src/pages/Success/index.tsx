import { OrderSuccess } from "../../components/OrderSuccess/OrderSuccess";
import type { Order } from "../../types/order";

export function Success({ order }: { order: Order | null }) {
  return <OrderSuccess order={order} />;
}
