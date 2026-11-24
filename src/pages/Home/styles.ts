import styled from "styled-components";
import heroBackground from "../../assets/home/hero-bg.svg";

export const Banner = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 1.5rem 0;

  html[data-theme="light"] & {
    background: url("${heroBackground}") center / cover no-repeat;
  }

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 588fr) minmax(0, 476fr);
    gap: clamp(2rem, 4vw, 3.5rem);
    padding: 3.75rem 0;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
`;

export const Intro = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: clamp(1rem, 2vw, 1.25rem);
`;

export const Benefits = styled.ul`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem 1.25rem;
  padding: 0;
  margin: 1.5rem 0 0;
  list-style: none;

  @media (min-width: 600px) {
    grid-template-columns: auto minmax(0, 1fr);
  }

  @media (min-width: 900px) {
    margin-top: 3.5rem;
  }
`;

const benefitColors = {
  gold: "#a05d0c",
  neutral: "#574f4d",
  yellow: "#846000",
  purple: "#7040d9",
};

export const Benefit = styled.li<{ $color: keyof typeof benefitColors }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};

  > span {
    display: grid;
    flex: 0 0 2rem;
    height: 2rem;
    place-items: center;
    color: #fff;
    background: ${({ $color }) => benefitColors[$color]};
    border-radius: 50%;
  }
`;

export const HeroImage = styled.img`
  width: min(100%, 476px);
  height: auto;
  justify-self: center;
`;
