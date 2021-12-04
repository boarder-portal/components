import { FC, memo } from 'react';

import { Container, Heading } from '../../../../../src/components';

const ContainerPage: FC = () => {
  return (
    <Container>
      <Heading level={1}>Container</Heading>
    </Container>
  );
};

export default memo(ContainerPage);
