import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import vision from 'assets/vision.png';
import { Link } from 'react-router-dom';

const ImgWrapper = styled(motion.div)`
  width: 400px;
  position: relative;
  opacity: 0;
`;

function Vision() {
  return (
    <ImgWrapper
      animate={{
        x: 15,
        y: -250,
        scale: 1.1,
        opacity: 0.5,
        transition: { duration: 0.6 },
      }}
    >
      <Link to="/movies">
        <img src={vision} alt="vision" />
      </Link>
    </ImgWrapper>
  );
}

export default Vision;
