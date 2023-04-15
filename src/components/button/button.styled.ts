import styled, { css } from 'styled-components';

export const Container = styled.button(
  ({ theme: { palettes, typography } }) => css`
    height: 53px;
    padding: 10px;
    background-color: ${palettes.blue};
    display: flex;
    align-items: center;
    justify-content: center;

    outline: none;
    border: none;

    color: ${palettes.black};
    ${typography.bodyMedium};
    text-transform: uppercase;
    font-weight: 600;
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
