import 'regenerator-runtime/runtime';
import '../../styles/reset.css';
import './App.pcss';

import { Routes, Route, Link } from 'react-router-dom';
import { FC } from 'react';

import { Container, Flex } from '../../../../src/components';
import ButtonPage from '../pages/ButtonPage/ButtonPage';
import ContainerPage from '../pages/ContainerPage/ContainerPage';
import FlexPage from '../pages/FlexPage/FlexPage';
import HeadingPage from '../pages/HeadingPage/HeadingPage';
import InputPage from '../pages/InputPage/InputPage';

const App: FC = () => {
  return (
    <div>
      <Container>
        <Flex between={2}>
          <Link to="./button">Button</Link>
          <Link to="./container">Container</Link>
          <Link to="./flex">Flex</Link>
          <Link to="./heading">Heading</Link>
          <Link to="./input">Input</Link>
        </Flex>
      </Container>

      <Routes>
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/container" element={<ContainerPage />} />
        <Route path="/flex" element={<FlexPage />} />
        <Route path="/heading" element={<HeadingPage />} />
        <Route path="/input" element={<InputPage />} />
      </Routes>
    </div>
  );
};

export default App;
