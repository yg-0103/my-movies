import HomeLink from 'components/HomeLink/HomeLink';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 40px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function HeaderContainer() {
  return (
    <HeaderWrapper>
      <HomeLink />
      <Navigation />
    </HeaderWrapper>
  );
}

export default HeaderContainer;
