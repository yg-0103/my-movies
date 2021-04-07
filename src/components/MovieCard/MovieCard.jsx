import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tmdb from 'api/tmdb';

const MovieWrapper = styled.li``;

const MovieLink = styled(Link)`
  user-select: none;
  opacity: 0.65;
  display: inline-block;
  text-decoration: none;
  width: 150px;
  height: 200px;
  background: gray;
  //transform: perspective(200px) scale(0.6) rotate3d(1, -33, -20, -20deg);
  transition: all 0.54s cubic-bezier(0.86, 0, 0.07, 1) 0.13s;
  -webkit-box-reflect: below 40px linear-gradient(transparent 60%, gray);

  //transform-origin: center bottom;

  &:hover {
    opacity: 1;
    z-index: 100;
    transform: perspective(100px) scale(1.35);
  }
`;

function MovieCard({ movie, children }) {
  return (
    <MovieWrapper>
      <MovieLink to={`/movie/${movie.id}`}>
        <img src={tmdb.getImageURL(movie.poster_path)} alt="영화 포스터" />
      </MovieLink>
    </MovieWrapper>
  );
}

export default MovieCard;
