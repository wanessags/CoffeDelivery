import styled from "styled-components";

export const SectionTitle = styled.h2`
  margin-bottom: 3.375rem;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: 800;
`;

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1120px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
