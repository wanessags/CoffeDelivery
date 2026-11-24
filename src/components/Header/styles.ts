import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1rem 0;
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: min(100% - 2rem, 1120px);
    margin: 0 auto;
  }
`;

export const Logo = styled.img`
  width: 85px;
  height: 40px;
  object-fit: contain;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.surfaceSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  display: grid;
  place-items: center;
  min-width: 22px;
  height: 22px;
  padding: 0 4px;
  color: ${({ theme }) => theme.primaryContrast};
  background: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.background};
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
`;
