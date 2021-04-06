import React from 'react';
import styled from 'styled-components';
import LinkA from '../LinkA/LinkA';

const NavigationWrapper = styled.div`
  display: flex;

  a {
    color: #aaa;
  }
  a + a {
    margin-left: 30px;
  }
`;

function Navigation() {
  return (
    <NavigationWrapper>
      <LinkA to="/movies">Movies</LinkA>
      <LinkA to="/bookmark">Bookmark</LinkA>
    </NavigationWrapper>
  );
}

export default Navigation;
