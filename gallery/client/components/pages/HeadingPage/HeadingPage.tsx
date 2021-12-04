import block from 'bem-cn';
import { FC, memo } from 'react';

import { Container, Flex, Heading } from '../../../../../src/components';

const b = block('ButtonPage');

const HeadingPage: FC = () => {
  return (
    <Container>
      <Flex className={b()} direction="column" between={2}>
        <Heading level={1}>Heading</Heading>

        <Heading level={1}>Уровень 1</Heading>
        <Heading level={2}>Уровень 2</Heading>
        <Heading level={3}>Уровень 3</Heading>
        <Heading level={4}>Уровень 4</Heading>
        <Heading level={5}>Уровень 5</Heading>
      </Flex>
    </Container>
  );
};

export default memo(HeadingPage);
