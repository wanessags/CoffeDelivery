import { Link } from "react-router-dom";

import prototypeLogo from "../../assets/branding/logo-prototipo.png";
import prototypeLogoDark from "../../assets/branding/logo-prototipo-escuro.png";
import { useTheme } from "../../hooks/useTheme";
import { CartBadge } from "../CartBadge/CartBadge";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Controls, HeaderContainer, Logo } from "./styles";

export function Header() {
  const { mode } = useTheme();

  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/" aria-label="Coffee Delivery — ir para a página inicial">
          <Logo
            src={mode === "dark" ? prototypeLogoDark : prototypeLogo}
            alt="Coffee Delivery"
            width="85"
            height="40"
          />
        </Link>
        <Controls>
          <ThemeToggle />
          <CartBadge />
        </Controls>
      </div>
    </HeaderContainer>
  );
}
