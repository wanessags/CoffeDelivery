import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > .container {
    width: min(100% - 2rem, 1120px);
    margin: 0 auto;
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem 0 3rem;
`;

export const Footer = styled.footer`
  padding: 1.5rem 0;
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => theme.surfaceSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};
  font-size: 0.875rem;

  > .container {
    width: min(100% - 2rem, 1120px);
    margin: 0 auto;
  }
`;
