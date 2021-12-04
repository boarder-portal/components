import './Heading.scss';
import block from 'bem-cn';
import { forwardRef, memo } from 'react';

interface IHeadingProps {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5;
}

const b = block('Heading');

export const Heading = memo(forwardRef<HTMLDivElement | null, IHeadingProps>((props, ref) => {
  const { className, level, children } = props;

  return <div className={b({ level }).mix(className)} ref={ref}>{children}</div>;
}));

Heading.displayName = 'Heading';
