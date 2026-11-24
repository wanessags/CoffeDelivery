import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  padding: 1.25rem 1rem;
  background: ${({ theme }) => theme.surfaceSecondary};
  border-radius: 6px 36px 6px 36px;
  text-align: center;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -2.5rem;
  object-fit: contain;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
  margin: 0.75rem 0;
`;

export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  color: #73490f;
  background: #f1e9c9;
  border-radius: 999px;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;

  html[data-theme="dark"] & {
    color: #f1d993;
    background: #4c381b;
  }
`;

export const Name = styled.h3`
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  font-weight: 800;
`;

export const Description = styled.p`
  flex: 1;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.875rem;
  line-height: 1.4;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1.25rem;

  > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    color: ${({ theme }) => theme.primaryContrast};
    background: ${({ theme }) => theme.primaryHover};
    border: 0;
    border-radius: 6px;
    transition: background-color 0.2s ease;
  }

  > button:hover {
    background: ${({ theme }) => theme.primary};
  }
`;

export const Price = styled.span`
  flex: 1;
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 1.5rem;
  font-weight: 800;
  text-align: left;
  white-space: nowrap;

  > small {
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 0.875rem;
    font-weight: 400;
  }
`;
