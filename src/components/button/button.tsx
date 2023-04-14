import React from 'react';
import { Container } from './button.styled';

interface ButtonProps {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, title }) => {
  return <Container className={className}>{title}</Container>;
};

export default Button;
