import styled from "styled-components";

export const ToggleButton = styled.button`
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
