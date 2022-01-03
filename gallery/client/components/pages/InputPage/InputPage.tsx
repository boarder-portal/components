import { FC, memo, useEffect, useRef, useState } from 'react';

import { Container, Flex, Heading, Input } from '../../../../../src/components';

const InputPage: FC = () => {
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  return (
    <Container>
      <Flex direction="column" between={2}>
        <Heading level={1}>Input</Heading>

        <Input value={value} ref={inputRef} onInput={setValue} />

        <Heading level={4}>Placeholder</Heading>

        <Input value={value} placeholder="username" onInput={setValue} />

        <Heading level={4}>Password</Heading>

        <Input value={value} type="password" placeholder="password" onInput={setValue} />

        <Heading level={4}>Disable autocorrect</Heading>

        <Input value={value} disableAutoCorrect onInput={setValue} />
      </Flex>
    </Container>
  );
};

export default memo(InputPage);
