import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import effect from '../assets/effect.gif';

const EffectWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

function Effect() {
  return (
    <EffectWrapper>
      <Link to="/movies">
        <img src={effect} alt="effectImg" />
        <span>ENTER</span>
      </Link>
    </EffectWrapper>
  );
}

export default Effect;
