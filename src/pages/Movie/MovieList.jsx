import MovieCardList from 'containers/MovieContainer/MovieCardList';
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from 'components/Button/Button';
import styled from 'styled-components';

const NextButton = styled(Button)`
  position: absolute;
  font-size: 4rem;
  top: 50%;
  right: 100px;
  transition: 0.3s;
  transform: translate3d(0, -50%, 0);
`;

const PrevButton = styled(Button)`
  position: absolute;
  font-size: 4rem;
  top: 50%;
  left: 100px;
  transition: 0.3s;

  transform: translate3d(0, -50%, 0);
`;

function MovieList() {
  const [currentSlide, setCurrentSlie] = useState(0);

  const handleClick = move => {
    setCurrentSlie(currentSlide + move);
  };

  return (
    <Layout>
      <Layout.FlexContainer
        height="70vh"
        align="center"
        width="1110px"
        justify="flex-start"
        style={{ overflowX: 'hidden', margin: '0 auto', padding: 0 }}
      >
        <MovieCardList currentSlide={currentSlide} />
      </Layout.FlexContainer>
      <PrevButton
        onClick={() => handleClick(-1)}
        whileHover={{
          color: 'red',
          textShadow: '0 0 8px rgba(255, 255, 255, .8)',
        }}
      >
        〈
      </PrevButton>
      <NextButton
        onClick={() => handleClick(1)}
        whileHover={{
          color: 'red',
          textShadow: '0 0 8px rgba(255, 255, 255, .8)',
        }}
      >
        〉
      </NextButton>
    </Layout>
  );
}

export default MovieList;
