import 'regenerator-runtime/runtime';
import './App.scss';
import { FunctionalComponent } from 'preact';
import block from 'bem-cn';
import { Switch, Route, Link } from 'react-router-dom';

import ButtonPage from '../pages/ButtonPage/ButtonPage';
import ContainerPage from '../pages/ContainerPage/ContainerPage';
import { Container, Flex } from '../../../../src/components';
import FlexPage from '../pages/FlexPage/FlexPage';
import HeadingPage from '../pages/HeadingPage/HeadingPage';
import InputPage from '../pages/InputPage/InputPage';

const b = block('App');

const App: FunctionalComponent = () => {
  return (
    <div className={b()}>
      <Container>
        <Flex between={2}>
          <Link to="./button">Button</Link>
          <Link to="./container">Container</Link>
          <Link to="./flex">Flex</Link>
          <Link to="./heading">Heading</Link>
          <Link to="./input">Input</Link>
        </Flex>
      </Container>

      <Switch>
        <Route exact path="/button">
          <ButtonPage />
        </Route>

        <Route exact path="/container">
          <ContainerPage />
        </Route>

        <Route exact path="/flex">
          <FlexPage />
        </Route>

        <Route exact path="/heading">
          <HeadingPage />
        </Route>

        <Route exact path="/input">
          <InputPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
