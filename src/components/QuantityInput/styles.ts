import styled from "styled-components";

export const Container = styled.div<{ $compact: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $compact }) => ($compact ? "4px" : "8px")};
  padding: ${({ $compact }) => ($compact ? "4px 6px" : "6px 8px")};
  background: ${({ theme }) => theme.surfaceSecondary};
  border-radius: 6px;
`;

export const StepButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  color: ${({ theme }) => theme.primary};
  background: transparent;
  border: 0;
  border-radius: 4px;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.primaryHover};
  }

  &:disabled {
    color: ${({ theme }) => theme.disabled};
  }
`;

export const Quantity = styled.output<{ $compact: boolean }>`
  min-width: ${({ $compact }) => ($compact ? "18px" : "24px")};
  color: ${({ theme }) => theme.text};
  font-size: ${({ $compact }) => ($compact ? "0.875rem" : "1rem")};
  text-align: center;
`;
