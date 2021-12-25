import { FC, memo, useState } from 'react';

import { Container, Flex, Heading, Input } from '../../../../../src/components';

const InputPage: FC = () => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Flex direction="column" between={2}>
        <Heading level={1}>Input</Heading>

        <Input value={value} onInput={setValue} />

        <Heading level={4}>Placeholder</Heading>

        <Input value={value} placeholder="username" onInput={setValue} />

        <Heading level={4}>Password</Heading>

        <Input value={value} type="password" placeholder="password" onInput={setValue} />
      </Flex>
    </Container>
  );
};

export default memo(InputPage);
