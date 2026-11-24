import type { ReactNode } from "react";

import { Header } from "../Header/Header";
import { Content, Footer, PageWrapper } from "./styles";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <PageWrapper>
      <Header />
      <Content className="container">{children}</Content>
      <Footer>
        <div className="container">Coffee Delivery — projeto acadêmico SPA</div>
      </Footer>
    </PageWrapper>
  );
}
