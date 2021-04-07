import tmdb from 'api/tmdb';
import Layout from 'components/Layout/Layout';
import { getMovieActionThunk } from 'module/movies';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 250px;
`;

function MovieDetail({ match }) {
  const { data } = useSelector(state => state.movies.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieActionThunk(tmdb.getDetail(match.params.id)));
  }, [match.params.id, dispatch]);

  if (!data) return null;
  return (
    <Layout>
      <Layout.FlexContainer
        align="flex-start"
        direction="column"
        style={{ padding: '100px 300px' }}
      >
        <ImageWrapper>
          <img src={tmdb.getImageURL(data.poster_path)} alt="" />
        </ImageWrapper>
        <h2>{data.title}</h2>
        <span>{data.tagline}</span>
        <p>{data.overview}</p>
      </Layout.FlexContainer>
    </Layout>
  );
}

export default MovieDetail;
