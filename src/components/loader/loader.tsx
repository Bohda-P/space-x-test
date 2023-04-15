import React from 'react';
// Styled
import { LoaderContainer, LoaderSpinner } from './loader.styled';

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
};

export default Loader;
