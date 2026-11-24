import brandMark from "../../assets/branding/marca-copo.svg";
import { CartBadge } from "../CartBadge/CartBadge";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { BrandLink, BrandName, Controls, HeaderContainer, Logo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <BrandLink to="/" aria-label="Coffee Delivery — ir para a página inicial">
          <Logo src={brandMark} alt="" width="40" height="40" />
          <BrandName aria-hidden="true">
            <strong>Coffee</strong>
            <span>Delivery</span>
          </BrandName>
        </BrandLink>
        <Controls>
          <ThemeToggle />
          <CartBadge />
        </Controls>
      </div>
    </HeaderContainer>
  );
}
