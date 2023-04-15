import styled, { css, keyframes } from 'styled-components';

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div(
  ({ theme: { palettes } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 0;
    background-color: ${palettes.mainText};
  `
);

export const LoaderSpinner = styled.div(
  ({ theme: { palettes } }) => css`
    border: 5px solid ${palettes.gray};
    border-top: 5px solid ${palettes.loader};
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: ${rotate} 1.5s linear infinite;
  `
);
