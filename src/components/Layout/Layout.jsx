import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  position: relative;
`;

function Layout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

const LayoutFlexContainer = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

Layout.FlexContainer = ({ children, ...restProps }) => {
  return <LayoutFlexContainer {...restProps}>{children}</LayoutFlexContainer>;
};

Layout.FlexContainer.defaultProps = {
  direction: 'row',
  justify: 'center',
  align: 'center',
};
export default Layout;
