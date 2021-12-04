import block from 'bem-cn';
import { FC, memo, useState } from 'react';

import { Container, Flex, Heading, Input } from '../../../../../src/components';

const b = block('InputPage');

const InputPage: FC = () => {
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
