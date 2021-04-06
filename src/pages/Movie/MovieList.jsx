import MovieCardList from 'components/MovieCard/MovieCardList';
import React from 'react';
import Layout from '../../components/Layout/Layout';

function MovieList() {
  return (
    <Layout>
      <Layout.FlexContainer
        height="70vh"
        align="center"
        width="1120px"
        justify="flex-start"
        style={{ overflowX: 'hidden', margin: '0 auto' }}
      >
        <MovieCardList />
      </Layout.FlexContainer>
    </Layout>
  );
}

export default MovieList;
