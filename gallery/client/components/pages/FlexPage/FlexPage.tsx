import { FC, memo } from 'react';

import { Container, Flex, Heading } from '../../../../../src/components';

const FlexPage: FC = () => {
  return (
    <Container>
      <Flex direction="column" between={2}>
        <Heading level={1}>Flex</Heading>

        <Heading level={3}>Between</Heading>

        <Flex between={2}>
          <div>1</div>
          <div>2</div>
        </Flex>

        <Heading level={3}>Direction column</Heading>

        <Flex direction="column" between={2}>
          <div>1</div>
          <div>2</div>
        </Flex>

        <Heading level={3}>Justify content</Heading>

        <Flex justifyContent="spaceBetween" between={2}>
          <div>1</div>
          <div>2</div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default memo(FlexPage);
