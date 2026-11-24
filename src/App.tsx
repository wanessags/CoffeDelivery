import { Navigate, Route, Routes } from "react-router-dom";

import { PageLayout } from "./components/PageLayout/PageLayout";
import { useCart } from "./hooks/useCart";
import { useOrder } from "./hooks/useOrder";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Success } from "./pages/Success";

export default function App() {
  const { order } = useOrder();
  const cart = useCart();

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/success" element={<Success order={order} />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageLayout>
  );
}
