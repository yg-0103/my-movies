import React from 'react';
import styled from 'styled-components';
import { StyledHomeLink } from '../HomeLink/HomeLink';

const StyledLinkA = styled(StyledHomeLink)`
  font-size: 1.3rem;
`;

function LinkA({ children, to, ...restProps }) {
  return (
    <StyledLinkA
      to={to}
      {...restProps}
      whileHover={{
        color: '#fff',
        textShadow: '0 0 5px rgba(255, 255, 255, .5)',
      }}
    >
      {children}
    </StyledLinkA>
  );
}

export default LinkA;
