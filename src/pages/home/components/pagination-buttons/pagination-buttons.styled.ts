import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.button(
  ({ theme: { palettes } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    width: 44px;
    height: 44px;
    background-color: ${palettes.gray};
    cursor: pointer;
    &:active {
      transform: translateY(2px);
      box-shadow: 0 0 2px ${palettes.gray};
    }
    &:hover {
      opacity: 0.5;
    }
  `
);

export const Image = styled.img``;
