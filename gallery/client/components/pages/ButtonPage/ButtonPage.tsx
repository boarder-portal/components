import block from 'bem-cn';
import { FC, memo } from 'react';

import { Button, Container, Flex, Heading } from '../../../../../src/components';

const b = block('ButtonPage');

const ButtonPage: FC = () => {
  return (
    <Container>
      <Flex className={b()} direction="column" between={2}>
        <Heading level={1}>Button</Heading>

        <Button type="success">Жмакай</Button>
        <Button type="success" disabled>Жмакай</Button>
        <Button type="danger">Жмакай</Button>
        <Button type="danger" disabled>Жмакай</Button>
      </Flex>
    </Container>
  );
};

export default memo(ButtonPage);
