import tmdb from 'api/tmdb';
import Layout from 'components/Layout/Layout';
import { getMovieActionThunk } from 'module/movies';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import YoutubePlayer from '../../components/Youtube/Youtube';

const ImageWrapper = styled.div`
  width: 250px;
`;

const YoutubePlayerWrapper = styled.div`
  div {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1000;
    opacity: 0.8;
    top: 0;
    left: 0;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
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
        style={{ padding: '100px 200px' }}
      >
        <ImageWrapper>
          <img src={tmdb.getImageURL(data.poster_path)} alt="" />
        </ImageWrapper>
        <h2 style={{ fontSize: '2rem' }}>{data.title}</h2>
        <span style={{ fontSize: '1.2rem' }}>{data.tagline}</span>
        <p style={{ fontSize: '1.5rem' }}>{data.overview}</p>
      </Layout.FlexContainer>
      <YoutubePlayerWrapper>
        <YoutubePlayer videoId={data.videos.results[0].key} />
      </YoutubePlayerWrapper>
    </Layout>
  );
}

export default MovieDetail;
