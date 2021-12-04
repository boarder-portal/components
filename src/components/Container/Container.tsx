import './Container.scss';
import block from 'bem-cn';
import { FC, memo } from 'react';

const b = block('Container');

interface IContainerProps {
  className?: string;
}

export const Container: FC<IContainerProps> = memo((props) => {
  const { className, children } = props;

  return <div className={b.mix(className)}>{children}</div>;
});

Container.displayName = 'Container';
