import Effect from 'components/Effect/Effect';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import Vision from 'components/Vision/Vision';

function Home() {
  return (
    <Layout>
      <Layout.FlexContainer direction="column">
        <Effect />
        <Vision />
      </Layout.FlexContainer>
    </Layout>
  );
}

export default Home;
