import HeaderContainer from 'containers/HeaderContainer/HeaderContainer';
import Home from 'pages/Home/Home';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import MovieList from '../pages/Movie/MovieList';
import MovieDetail from '../pages/Movie/MovieDetail';

const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    font: 1rem/1.5 "Spoqa Han Sans Neo", sans-serif;
    background: #000;
    color: #fff;
  }

  * {
    box-sizing: border-box;
  }

  img {
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={MovieList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
