import { FC, memo, useState } from 'react';

import { Container, Flex, Heading, Input } from '../../../../../src/components';

const InputPage: FC = () => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Flex direction="column" between={2}>
        <Heading level={1}>Input</Heading>

        <Input value={value} onInput={setValue} />
      </Flex>
    </Container>
  );
};

export default memo(InputPage);
