import './Heading.scss';
import block from 'bem-cn';
import { FC, memo } from 'react';

interface IHeadingProps {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5;
}

const b = block('Heading');

export const Heading: FC<IHeadingProps> = memo((props) => {
  const { className, level, children } = props;

  return <div className={b({ level }).mix(className)}>{children}</div>;
});

Heading.displayName = 'Heading';
