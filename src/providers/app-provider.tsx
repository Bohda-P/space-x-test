import React, { PropsWithChildren } from 'react';
// Theme Provider
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// Store Provider
import { RecoilRoot } from 'recoil';
// Navigation
import { BrowserRouter as Router } from 'react-router-dom';
// Theme
import { theme } from '../styles';
// Graphql 
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql';

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => (
  <RecoilRoot>
    <ApolloProvider client={client}>
      <StyledThemeProvider theme={theme}>
        <Router>{children}</Router>
      </StyledThemeProvider>
    </ApolloProvider>
  </RecoilRoot>
);
