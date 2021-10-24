import { FunctionalComponent } from 'preact';
import { memo } from 'preact/compat';

import { Container, Heading } from '../../../../../src/components';

const ContainerPage: FunctionalComponent = () => {
  return (
    <Container>
      <Heading level={1}>Container</Heading>
    </Container>
  );
};

export default memo(ContainerPage);
