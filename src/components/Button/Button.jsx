import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  padding: 0;
  color: #fff;
  cursor: pointer;
  outline: none;
`;

function Button({ children, ...restProps }) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}

export default Button;
