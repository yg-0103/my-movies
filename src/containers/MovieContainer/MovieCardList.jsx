import tmdb from 'api/tmdb';
import { motion } from 'framer-motion';
import { getMoviesActionThunk } from 'module/movies';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MovieCard from '../../components/MovieCard/MovieCard';
import { ReactComponent as Loading } from 'assets/loading.svg';
import { useRef } from 'react';

const MovieCardListWrapper = styled(motion.ul)`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;

  li:first-child {
    margin-left: 30px;
  }
  li + li {
    margin-left: 30px;
  }

  svg {
    width: 100px;
    transform: translate3d(500px, 0, 0);
  }
`;

function MovieCardList({ currentSlide }) {
  const { loading, data } = useSelector(state => state.movies.movies);
  const [fakeData, setFakeData] = useState(null);
  const move = currentSlide * -180;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesActionThunk(tmdb.discover()));
  }, [dispatch]);

  useEffect(() => {
    if (!data) return;
    setFakeData(fakeData => {
      if (!fakeData) return data.results;
      const firstMovie = fakeData.shift();
      return [...fakeData, firstMovie];
    });
  }, [data, currentSlide]);
  return (
    <>
      <MovieCardListWrapper animate={{ x: 0, transition: { type: 'tween' } }}>
        {loading && <Loading id="loading">로딩중...</Loading>}
        {fakeData &&
          fakeData.map(movie => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
      </MovieCardListWrapper>
    </>
  );
}

export default MovieCardList;
