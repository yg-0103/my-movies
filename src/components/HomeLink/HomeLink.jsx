import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHomeLink = styled(motion(Link))`
  font-size: 1.4rem;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
  font-weight: 400;
`;

function HomeLink() {
  return (
    <motion.h1>
      <StyledHomeLink to="/" whileHover={{ color: 'red' }}>
        _<span style={{ color: 'red' }}>.</span>
        MY_MOVIES
      </StyledHomeLink>
    </motion.h1>
  );
}

export default HomeLink;
