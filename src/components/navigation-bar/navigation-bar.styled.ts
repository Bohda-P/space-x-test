import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from '../button';

export const Container = styled.div(
  ({ theme: { palettes } }) => css`
    padding: 13px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${palettes.opacityGray};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  `
);

export const LogoContainer = styled(NavLink)`
  padding: 0 80px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 229px;
  height: 42px;
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled(NavLink)(
  ({ theme: { palettes, typography } }) => css`
    margin-right: 32px;
    padding-bottom: 4px;
    position: relative;
    color: ${palettes.white};
    ${typography.caption}
    font-weight: 500;
    text-decoration: none;
    &:last-child {
      margin-right: 0;
    }

    &.active {
      border-bottom: 1px solid ${palettes.white};
    }
  `
);

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FavoriteButton = styled(NavLink)(
  ({ theme: { palettes } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    width: 53px;
    height: 53px;
    padding: 0;
    background-color: ${palettes.gray};
    &.active {
      background-color: ${palettes.red};
    }
  `
);

export const SignIn = styled(Button)`
  width: 163px;
`;
