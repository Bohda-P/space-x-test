import styled, { css } from 'styled-components';
import { Button } from '../button';
import { ApolloProvider } from '@apollo/client';

export const Container = styled.div(
  ({ theme: { palettes } }) => css`
    display: flex;
    flex-direction: column;
    width: 411px;
    height: 572px;
    border: 1px solid ${palettes.blue};
  `
);

export const Image = styled.img`
  width: 100%;
  height: 296px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-bottom: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Title = styled.p(
  ({ theme: { palettes, typography } }) => css`
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
    color: ${palettes.mainText};
    ${typography.bodyMedium};
  `
);

export const Subtitle = styled.p(
  ({ theme: { palettes, typography } }) => css`
    text-align: center;
    color: ${palettes.subText};
    ${typography.bodySmall};
  `
);

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const FavoriteButton = styled.button(
  ({ theme: { palettes } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    width: 53px;
    height: 53px;
    background-color: ${palettes.gray};
    cursor: pointer;
  `
);

export const FavoriteButtonImage = styled.img``;

export const BuyButton = styled(Button)`
  flex: 1;
`;
