import tmdb from 'api/tmdb';
import { getMoviesActionThunk } from 'module/movies';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const MovieCardListWrapper = styled.ul`
  padding: 20px;
  list-style: none;
  display: flex;

  li + li {
    margin-left: 30px;
  }
`;

function MovieCardList() {
  const { loading, error, data } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const listRef = useRef(null);
  useEffect(() => {
    dispatch(getMoviesActionThunk(tmdb.discover()));
    console.dir(listRef.current);
  }, [dispatch]);

  if (!data) return null;
  return (
    <MovieCardListWrapper ref={listRef}>
      {data.results.map(movie => (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))}
    </MovieCardListWrapper>
  );
}

export default MovieCardList;
