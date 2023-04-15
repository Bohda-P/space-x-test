import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Background = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const ToursContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 100px;
  padding: 0 80px 96px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 43px;
`;

export const ToursTitle = styled.h2(
  ({ theme: { palettes, typography } }) => css`
    color: ${palettes.mainText};
    ${typography.bodyHuge};
    text-transform: uppercase;
  `
);

export const ArrowDownImage = styled.img``;
