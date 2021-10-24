import { FunctionalComponent } from 'preact';
import { memo, useState } from 'preact/compat';
import block from 'bem-cn';

import { Container, Flex, Heading, Input } from '../../../../../src/components';

const b = block('InputPage');

const InputPage: FunctionalComponent = () => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Flex className={b()} direction="column" between={2}>
        <Heading level={1}>Input</Heading>

        <Input value={value} onInput={setValue} />
      </Flex>
    </Container>
  );
};

export default memo(InputPage);
