import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 80px 104px;
`;

export const ClearAllTitle = styled.p(
  ({ theme: { palettes, typography } }) => css`
    padding-bottom: 40px;
    color: ${palettes.subText};
    ${typography.bodySmall};
    align-self: flex-end;
    cursor: pointer;
  `
);
